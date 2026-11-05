Customer MCP Router for macOS 0.3.1 uses Glide's MCP endpoint, `https://mcp.glideapps.dev/mcp`, for every customer.

If a saved customer uses a different Glide MCP address, the router moves it to that endpoint and marks it unchecked. Open the customer and select **Check identity**. If the check asks you to sign in, select **Connect Glide**. Configuration changes for that customer stay blocked until its organization is verified again.

Install:

```sh
brew install evanfurniss-dev/tap/mcp-customer-router
mcp-customer-router service install --open
```

Upgrade:

```sh
brew update
brew upgrade evanfurniss-dev/tap/mcp-customer-router
mcp-customer-router service restart
mcp-customer-router open
```

Start fresh agent sessions after upgrading. Existing customer records, saved sign-ins, and project bindings stay in `~/.mcp-customer-router/` by default.

Claude app and Conductor instructions are based on their documentation; live router trials for those clients remain open. A clean macOS account with real Glide sign-in and Intel Mac operation also remain separate acceptance checks.

The router supports Glide's MCP endpoint and separates customer connections under one OS account. Its local stdio entries require this Mac to run. They do not provide a security sandbox or hosted execution.
