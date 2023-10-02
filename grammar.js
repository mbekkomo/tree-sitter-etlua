/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
    name: "etlua",

    rules: {
        template: $=> repeat(choice($.etlua_tags, $.content)),

        content: _=> prec.right(repeat1(/[^<]+|</)),

        etlua_tags: $=> seq(choice('<%', '<%=', '<%-'), alias(/[^%>]+/, $.exp), '%>')
    }
})
