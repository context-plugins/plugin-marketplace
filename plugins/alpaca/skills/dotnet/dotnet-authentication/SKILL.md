---
name: "dotnet-authentication"
description: "Authentication for the Alpaca .NET SDK in C# — this API authenticates with an API key in a header, and this skill gives the credential each scheme takes, the AlpacaClientOptions property to set it on, and the startup check that keeps a missing secret from surfacing as a 401. Load before wiring credentials into the client, or when a call comes back 401/403."
---

# Authenticating the Alpaca .NET SDK client

This API authenticates with an API key in a header. APIMatic surfaces each scheme as a **nullable credentials property** on `AlpacaClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `AlpacaClientOptions` | Credential |
| --- | --- | --- |
| API key — `APCA-API-KEY-ID` header | `ApiKey` | `string` |
| API key — `APCA-API-SECRET-KEY` header | `ApiSecret` | `string` |

**That table is the entire authentication surface of this SDK.** `Alpaca.Core.Authentication` ships *every* scheme class APIMatic supports as shared runtime code, including kinds this API does not use, so read what is configurable off the properties above rather than off that folder.

## API key (header) — `ApiKey`

The key travels in the `APCA-API-KEY-ID` request header. The header name is fixed by the generated scheme — you supply only the value:

```csharp
options.ApiKey = "API_KEY";
```

## API key (header) — `ApiSecret`

The key travels in the `APCA-API-SECRET-KEY` request header. The header name is fixed by the generated scheme — you supply only the value:

```csharp
options.ApiSecret = "API_KEY";
```

## Combining the schemes

This SDK generates more than one credentials property, and its operations compose them. You configure the composition by setting the relevant properties on `AlpacaClientOptions` — the generated client wires the rest.

**AND (`AuthSchemeAll`) — every scheme in the group is applied to the request.** Leave one of them unconfigured and the request still goes out, just without that credential; the provider decides what to make of a half-authenticated call.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the request goes out unauthenticated — no exception.** An unset credentials property on `AlpacaClientOptions` yields a no-op scheme, not an error, so the call reaches the provider with no credential and comes back `401`. The SDK will never tell you that you forgot to supply one; only the provider will, one round-trip later and one layer away from the cause.

**A required credential that is not configured is a deployment fault, not a request fault.** If the app boots with a blank secret, an operator sees a provider outage, retry logic hammers a call that can never succeed, and the actual cause — an unset environment variable — is two layers away from the symptom.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<AlpacaClientSettings>()
    .Bind(builder.Configuration.GetSection("AlpacaClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.ApiKey))
    throw new InvalidOperationException(
        "AlpacaClient:ApiKey is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

Three rules for the message it fails with:

- **Name the missing config key**, so the operator knows what to set — `"AlpacaClient:ApiKey is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value the schemes actually need. For this SDK that is:

| Value to validate | Feeds `AlpacaClientOptions` property |
| --- | --- |
| `ApiKey` | `ApiKey` |
| `ApiSecret` | `ApiSecret` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddAlpacaClient(options => ...)` callback when registering via DI. `AlpacaClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client.
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddAlpacaClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app.

