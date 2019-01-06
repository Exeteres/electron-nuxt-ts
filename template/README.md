# {{ name }}

```shell
# Install dependencies
{{#useYarn}}yarn{{else}}npm install{{/useYarn}}

# Start in development mode
{{#useYarn}}yarn dev{{else}}npm run dev{{/useYarn}}

# Production build
{{#useYarn}}yarn build{{else}}npm run build{{/useYarn}}
```
