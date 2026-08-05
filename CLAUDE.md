# Context Plugins Marketplace

This repository is a multi-plugin marketplace (`name: context-plugins`) targeting **Claude Code,
Cursor, and VS Code**. It ships **<!-- BEGIN:PLUGIN_COUNT -->40<!-- END:PLUGIN_COUNT --> plugins** under `plugins/`, one per API.

Each plugin is a bundle of **skills** — Markdown files an agent loads on demand — that ground the
agent in an APIMatic-generated SDK's real contract instead of model knowledge. There are no MCP
servers and no agents in this repository; skills are the only mechanism.

## Layout

```
.claude-plugin/marketplace.json    the registry Claude Code reads
.cursor-plugin/marketplace.json    the same registry, Cursor format
plugins/<plugin-id>/
  plugin.json                      manifest (VS Code / Copilot format)
  .claude-plugin/plugin.json       Claude Code manifest
  .cursor-plugin/plugin.json       Cursor manifest
  README.md
  assets/logo.svg
  skills/<language>/<skill>/SKILL.md
docs/cross-platform-agents.md
```

## Per-IDE manifest convention

Every plugin carries three manifests so one folder installs into all three assistants:

- Claude Code: `.claude-plugin/plugin.json`
- Cursor: `.cursor-plugin/plugin.json`
- VS Code (Copilot): `plugin.json` at the plugin root

All three declare the same `name` — which must equal the directory name and the `name` in both
root `marketplace.json` files — plus `displayName`, `version`, `description`, `logo`, and a
`skills` array listing the language directories.

## Skill convention

Skills are grouped by language: `skills/<language>/<language>-<topic>/SKILL.md`. Every language
pack ships the same eight topics:

`getting-started`, `client-initialization`, `authentication`, `calling-endpoints`, `models`,
`error-handling`, `configuration-resilience`, `testing`

`{lang}-getting-started` is the entry point — it establishes SDK identity and directs the agent to
clone and grep the real SDK source. The other seven assume that grounding and gate themselves on
it. Languages are `dotnet`, `typescript`, `java`, `php`, `python`, `ruby`, `go`; not every plugin
covers all seven.

## Adding a plugin

1. Create `plugins/<plugin-id>/` with the layout above. The id is kebab-case and is what users type
   after `npx context-plugins install`.
2. Write all three manifests with a matching `name`.
3. Register the plugin in **both** `.claude-plugin/marketplace.json` and
   `.cursor-plugin/marketplace.json` — an entry in only one silently breaks that IDE.
4. Verify with `npx context-plugins list`, then a real install.

## Notes for agents working in this repo

- **Plugin ids are a public contract.** Users have them recorded in `~/.context-plugins/installed.json`
  and in published docs. A rename breaks their `update`. Do not rename without a deliberate decision.
- **Never hardcode the plugin count** in documentation. It changes as plugins are published; derive
  it from `.claude-plugin/marketplace.json` or point readers at `npx context-plugins list`.
- The two `marketplace.json` files must stay in sync. When you touch one, touch the other.
- Installation is handled entirely by the [`context-plugins`](https://github.com/apimatic/context-plugins-installer)
  CLI. Install instructions belong in its README; this repo documents what the plugins *are*.
