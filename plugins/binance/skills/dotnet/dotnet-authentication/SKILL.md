---
name: "dotnet-authentication"
description: "Authentication for the Binance .NET SDK in C# — this API authenticates with an API key in a header, and this skill gives the credential each scheme takes, the BinanceClientOptions property to set it on, and the startup check that keeps a missing secret from surfacing as a 401. Load before wiring credentials into the client, or when a call comes back 401/403."
---

# Authenticating the Binance .NET SDK client

This API authenticates with an API key in a header. APIMatic surfaces each scheme as a **nullable credentials property** on `BinanceClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `BinanceClientOptions` | Credential |
| --- | --- | --- |
| API key — `X-MBX-APIKEY` header | `ApiKeyAuth` | `string` |

**That table is the entire authentication surface of this SDK.** `Binance.Core.Authentication` ships *every* scheme class APIMatic supports as shared runtime code, including kinds this API does not use, so read what is configurable off the properties above rather than off that folder.

## API key (header)

**API Provider Notes:**

> Binance Public API Key

The key travels in the `X-MBX-APIKEY` request header. The header name is fixed by the generated scheme — you supply only the value:

```csharp
options.ApiKeyAuth = "API_KEY";
```

## Operations that need no credentials

Some operations on this API are public: the generated endpoint uses `NoneAuthScheme` and sends no credential, whatever you set on `BinanceClientOptions`. You still construct the same client — there is no separate unauthenticated client — and the credentials you configured are simply not applied to those calls.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the request goes out unauthenticated — no exception.** An unset credentials property on `BinanceClientOptions` yields a no-op scheme, not an error, so the call reaches the provider with no credential and comes back `401`. The SDK will never tell you that you forgot to supply one; only the provider will, one round-trip later and one layer away from the cause.

**A required credential that is not configured is a deployment fault, not a request fault.** If the app boots with a blank secret, an operator sees a provider outage, retry logic hammers a call that can never succeed, and the actual cause — an unset environment variable — is two layers away from the symptom.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<BinanceClientSettings>()
    .Bind(builder.Configuration.GetSection("BinanceClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.ApiKeyAuth))
    throw new InvalidOperationException(
        "BinanceClient:ApiKeyAuth is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

Three rules for the message it fails with:

- **Name the missing config key**, so the operator knows what to set — `"BinanceClient:ApiKeyAuth is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value the schemes actually need. For this SDK that is:

| Value to validate | Feeds `BinanceClientOptions` property |
| --- | --- |
| `ApiKeyAuth` | `ApiKeyAuth` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddBinanceClient(options => ...)` callback when registering via DI. `BinanceClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client.
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddBinanceClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app.

