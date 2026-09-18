# Shutterstock API Explorer SDK Plugin

A plugin whose skills teach a coding agent to install and use the APIMatic-generated **Shutterstock API Explorer SDK**, in C#/.NET, python, TypeScript. Every SDK fact the skills state is grounded in the SDK's own source and generated documentation, not in what a model remembers about this API.

## What's inside

One skill set per language. The entry point is that language's getting-started skill, which carries what is specific to this SDK; the rest are API-agnostic and describe how to use any SDK the same generator produces.

| Language | Skill prefix | Skills |
| --- | --- | --- |
| C#/.NET | `dotnet-` | `dotnet-authentication`, `dotnet-calling-endpoints`, `dotnet-client-initialization`, `dotnet-configuration-resilience`, `dotnet-error-handling`, `dotnet-getting-started`, `dotnet-integrate-shutterstock`, `dotnet-models`, `dotnet-testing` |
| python | `python-` | `python-authentication`, `python-calling-endpoints`, `python-client-initialization`, `python-configuration-resilience`, `python-error-handling`, `python-getting-started`, `python-integrate-shutterstock`, `python-models`, `python-testing` |
| TypeScript | `typescript-` | `typescript-authentication`, `typescript-calling-endpoints`, `typescript-client-initialization`, `typescript-configuration-resilience`, `typescript-error-handling`, `typescript-getting-started`, `typescript-integrate-shutterstock`, `typescript-models`, `typescript-testing` |
