---
name: "dotnet-maxio-advanced-billing-getting-started"
description: "Maxio Advanced Billing .NET SDK identity — NuGet package id, root namespace, client and options type names, authentication pattern, server environments, the namespace imports the SDK requires, and where its SDK map lives. Load before writing any code against this SDK, then load the dotnet-* companion skill for the step you are on."
---

# Getting started with the Maxio Advanced Billing .NET SDK

This skill carries the facts that are specific to **this** SDK — its package id, the names it generates, how it authenticates and which servers it targets. Everything about *how* to use an APIMatic-generated .NET SDK lives in the `dotnet-*` companion skills, which name no API and apply unchanged to any of them. Load this skill first, then the companion skill for the step you are on.

## SDK identity

|  |  |
| --- | --- |
| API | Maxio Advanced Billing |
| NuGet package | *not published to NuGet* |
| Source repository | https://github.com/context-plugins/maxio-csharp-sdk |
| Root namespace | `MaxioAdvancedBilling` |
| Client class | `MaxioAdvancedBillingClient` |
| Options class | `MaxioAdvancedBillingClientOptions` |
| Authentication | HTTP **Basic** — set `BasicAuth`<br>**Bearer** token — set `BearerAuth` |
| Server environments | `ServerEnvironment.Us` *(default)* → `Production` `https://{site}.chargify.com`, `Ebb` `https://events.chargify.com/{site}`, `Oauth` `https://{connector}.api.maxio.com`<br>`ServerEnvironment.Eu` → `Production` `https://{site}.ebilling.maxio.com`, `Ebb` `https://events.chargify.com/{site}`, `Oauth` `https://{connector}.api.maxio.com`<br>`ServerEnvironment.MaxioApiGateway` → `Production` `https://{connector}.api.maxio.com/api/v1/billing`, `Ebb` `https://events.chargify.com/{site}`, `Oauth` `https://{connector}.api.maxio.com` |
| Target framework | `netstandard2.0` |

This table is orientation, not a recipe: it gives you the names and the authentication *pattern*. The integration code itself comes from the companion skills.

## Namespaces (using-directives)

The SDK spreads its public types across child namespaces, and C# does **not** import child namespaces transitively — so `using MaxioAdvancedBilling;` on its own does not make the options, environment or error types visible, and the build fails with `CS0246`. Add a separate `using` per namespace you reference:

| Type | Namespace |
| --- | --- |
| `MaxioAdvancedBillingClient` | `MaxioAdvancedBilling` |
| `MaxioAdvancedBillingClientOptions` | `MaxioAdvancedBilling` |
| `ServerEnvironment` | `MaxioAdvancedBilling.Servers` |

Models, enums, union types and the generated error types each sit in their own child namespace too. When a type name will not resolve, open that type's file in the SDK and copy the `namespace` declaration at the top of it rather than guessing.

## Install — from source

This SDK is **not published to a package feed**, so there is no `dotnet add package` for it. Build it from its repository — <https://github.com/context-plugins/maxio-csharp-sdk> — and reference the resulting assembly, then write the `using` directives from the table above.

## SDK map — where this SDK's contracts come from

The generated table of contents ships **inside the SDK's own source**, at the root of its repository — <https://github.com/context-plugins/maxio-csharp-sdk>. One clone therefore brings the map and the code it describes together, in lockstep by construction: no map version can drift from the code, and every source path a map row names resolves inside the clone you already have. Clone it to a temporary directory, outside the project repo.

- **`sdk-map.md`** — the index: how a client is constructed, the error-handling model that applies to every operation, where models live, servers and auth, and a link to each controller's page.
- **`map/operations/`** — one page per controller: the exact C# signature, which nullable parameters must still be passed, the return type and response envelope, the error case with its accessors, and pagination. **A row states what is specific to its operation**, so a row that says nothing about one of the index's SDK-wide defaults is telling you that default holds.

The HTTP verb and route, and the behavioural prose that settles what an operation actually does, sit on the operation itself in the SDK source the map row names. Read that file for either; never fill them from memory.

**Navigate by lookup, not by search.** Open the index, follow its link to the page you need. Locating something by grep, glob or `find` over the clone is a defect rather than a shortcut — it pulls un-grounded source into context and is slower than the lookup it replaces. Open a source file only where the map leaves a fact ambiguous, and only the one file the map row names.

## Which companion skill to load

| Step | Skill |
| --- | --- |
| Construct the client and register it | `dotnet-client-initialization` |
| Supply credentials | `dotnet-authentication` |
| Call an endpoint and read its response | `dotnet-calling-endpoints` |
| Build request models, unions, enums and dates | `dotnet-models` |
| Write the error boundary | `dotnet-error-handling` |
| Configure retries, timeouts, pagination and logging | `dotnet-configuration-resilience` |
| Unit-test code that calls the SDK | `dotnet-testing` |

Load the skill for a step **before** writing that step's code. Knowing a type's name does not tell you how to use it correctly, which is what these carry.

