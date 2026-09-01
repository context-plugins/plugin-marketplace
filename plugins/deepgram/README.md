# Deepgram SDK Plugin

A plugin whose skills teach a coding agent to install and use the APIMatic-generated **Deepgram SDK**, in C#/.NET, Python. Every SDK fact the skills state is grounded in the SDK's own source and generated documentation, not in what a model remembers about this API.

## What's inside

One skill set per language. The entry point is that language's getting-started skill, which carries what is specific to this SDK; the rest are API-agnostic and describe how to use any SDK the same generator produces.

| Language | Skill prefix | Skills |
| --- | --- | --- |
| C#/.NET | `dotnet-` | `dotnet-authentication`, `dotnet-calling-endpoints`, `dotnet-client-initialization`, `dotnet-configuration-resilience`, `dotnet-error-handling`, `dotnet-getting-started`, `dotnet-integrate-deepgram`, `dotnet-models`, `dotnet-testing` |
| Python | `python-` | `python-authentication`, `python-calling-endpoints`, `python-client-initialization`, `python-configuration-resilience`, `python-error-handling`, `python-getting-started`, `python-integrate-deepgram`, `python-models`, `python-testing` |

## Install

This plugin was **generated for you, not published to a plugin marketplace** — so there is no marketplace to install it by name from yet. Point your coding agent at the directory holding this plugin, then install it:

```
/plugin marketplace add <path to the directory containing this plugin>
/plugin install deepgram
```

Once your team publishes it to a plugin marketplace, install it from there by name instead — `/plugin install deepgram@<marketplace>` — and drop the local `marketplace add` step.

Then ask a usage question (e.g. *"how do I authenticate this SDK with an API key?"*) to trigger the relevant skill.

