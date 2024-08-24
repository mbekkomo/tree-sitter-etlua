# tree-sitter-etlua

[etlua](https://github.com/leafo/etlua) grammar for tree-sitter

## Usage

### Neovim

```lua
vim.api.nvim_create_autocmd({"BufRead", "BufNewFile"}, {
    pattern = "*.etlua"
    command = "set ft=etlua"
})
local pc = require("nvim-treesitter.parsers").get_parser_configs()
pc.etlua = {
    install_info = {
        url = "https://github.com/UrNightmaree/tree-sitter-etlua",
        files = { "src/parser.c" },
    },
    filetype = "etlua",
}
```

If you want to enable syntax highlighting, copy/move/symlink `queries` to `~/.config/nvim/queries/etlua`.

### Helix

In your languages.toml file add

```toml
[[grammar]]
name = "etlua"
source = { git = "https://github.com/cattokomo/tree-sitter-etlua", rev = "A_COMMIT_HASH" }

[[language]]
name = "etlua"
file-types = ["etlua"]
block-comment-tokens = { start = "<!--", end = "-->"}
injection-regex = "etlua"
scope = "source.etlua"
```
Then run `helix -g fetch && helix -g build`
