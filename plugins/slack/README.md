# Slack Web API SDK Plugin

A plugin whose skills teach a coding agent to install and use the APIMatic-generated **Slack Web API SDK**, in C#/.NET, Python, TypeScript. Every SDK fact the skills state is grounded in the SDK's own source and generated documentation, not in what a model remembers about this API.

## What's inside

One skill set per language. The entry point is that language's getting-started skill, which carries what is specific to this SDK; the rest are API-agnostic and describe how to use any SDK the same generator produces.

| Language | Skill prefix | Skills |
| --- | --- | --- |
| C#/.NET | `dotnet-` | `dotnet-authentication`, `dotnet-calling-endpoints`, `dotnet-client-initialization`, `dotnet-configuration-resilience`, `dotnet-error-handling`, `dotnet-getting-started`, `dotnet-integrate-slack-web-api`, `dotnet-models`, `dotnet-testing` |
| Python | `python-` | `python-authentication`, `python-calling-endpoints`, `python-client-initialization`, `python-configuration-resilience`, `python-error-handling`, `python-event-streams`, `python-file-handling`, `python-getting-started`, `python-integrate-slack-web-api`, `python-models`, `python-testing` |
| TypeScript | `typescript-` | `typescript-authentication`, `typescript-calling-endpoints`, `typescript-client-initialization`, `typescript-configuration-resilience`, `typescript-error-handling`, `typescript-event-streams`, `typescript-getting-started`, `typescript-integrate-slack-web-api`, `typescript-models`, `typescript-testing` |

## Agents

| Agent | What it does |
| --- | --- |
| `slack-web-api-planner` | Writes `slack-web-api-plan.md`, the plan and its contract sheet, before any project code is written, and revises it in place. `dotnet-integrate-slack-web-api`, `typescript-integrate-slack-web-api` and `python-integrate-slack-web-api` each start it once the SDK is installed or its source reached, on the main agent's own model. |

How each host gets it:

- **Claude Code** loads it from `scoped/agents/` with the plugin and lists it as `slack:slack-web-api-planner`. Its file sets `model: inherit`, so it runs on the main agent's model.
- **Where no subagent tool lists it** (a host that doesn't load a plugin's agents, or subagents turned off), the main agent says so in one line and writes the plan itself before any code.
