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
