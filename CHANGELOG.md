# Changelog

## Unreleased

- Added Glide MCP v2 (`https://mcp.glideapps.dev/mcp/v2`). New customers default to v2. Existing customers keep v1 until switched.
- Added **Switch to v2** and **Switch to v1** in customer settings. Switching ends open sessions and needs no project settings change.
- Kept a separate saved sign-in for each version. **Reconnect Glide** now replaces only the current version's sign-in, so switching back only needs a check.
- Reported missing MCP v2 access on a Glide account instead of a general connection failure.

## 0.2.1

- Preselect **Ignore** for each existing connection on every new configuration preview. Choose **Remove** explicitly to include a connection in removal when applying.

## 0.2.0

- Added a first-visit walkthrough with example screens, remembered dismissal, and an information button to open it again.
- Added setup guides for T3 Code, Claude Code CLI, Claude app's local Code tab, Codex app, Codex CLI, and Conductor. Claude app and Conductor instructions await live router trials.
- Added **Remove** and **Ignore** choices for detected existing Glide connections. Removal shows its scope, requires Apply, and saves private backups.
- Allowed executable paths to update when an existing generated entry matches the same customer, folder, data home, and other settings. This supports source-to-Homebrew migration without rebinding a customer.
- Updated repository setup, contribution, security, and release documentation.

## 0.1.0

- Published the first macOS Homebrew package and user service that starts at login.
- Added local customer records, separate saved Glide authorizations, and organization checks before tool access.
- Added project configuration for Claude Code and Codex, with previews and backups.
- Used stable Homebrew paths for the service and new project bindings across upgrades.

The project retains the upstream [mcp-remote](https://github.com/punkpeye/mcp-remote) bridge and its license. Router release tags use the `router-v` prefix.
