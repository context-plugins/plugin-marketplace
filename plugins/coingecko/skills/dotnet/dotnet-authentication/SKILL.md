---
name: "dotnet-authentication"
description: "Authentication for the Coin Gecko .NET SDK in C# — this API authenticates with an API key in a header and an API key in a query parameter, and this skill gives the credential each scheme takes, the CoinGeckoClientOptions property to set it on, and the startup check that keeps a missing secret from surfacing as a 401. Load before wiring credentials into the client, or when a call comes back 401/403."
---

# Authenticating the Coin Gecko .NET SDK client

This API authenticates with an API key in a header and an API key in a query parameter. APIMatic surfaces each scheme as a **nullable credentials property** on `CoinGeckoClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `CoinGeckoClientOptions` | Credential |
| --- | --- | --- |
| API key — `x-cg-demo-api-key` header | `HeaderAuth` | `string` |
| API key — `x_cg_demo_api_key` query parameter | `QueryAuth` | `string` |

**That table is the entire authentication surface of this SDK.** `CoinGecko.Core.Authentication` ships *every* scheme class APIMatic supports as shared runtime code, including kinds this API does not use, so read what is configurable off the properties above rather than off that folder.

## API key (header)

**API Provider Notes:**

> Learn how to [set up your API key](https://docs.coingecko.com/docs/setting-up-your-api-key)

The key travels in the `x-cg-demo-api-key` request header. The header name is fixed by the generated scheme — you supply only the value:

```csharp
options.HeaderAuth = "API_KEY";
```

## API key (query parameter)

**API Provider Notes:**

> Learn how to [set up your API key](https://docs.coingecko.com/docs/setting-up-your-api-key)

The key is appended to every request as the `x_cg_demo_api_key` query parameter. The parameter name is fixed by the generated scheme — you supply only the value:

```csharp
options.QueryAuth = "API_KEY";
```

⚠ **A query-string credential is logged by everything on the path.** Proxies, CDNs, load balancers and the provider's own access logs record full URLs, and this SDK's request logging is no exception. Treat the key as exposed to your infrastructure, and rotate it on that basis.

## Combining the schemes

This SDK generates more than one credentials property, and its operations compose them. You configure the composition by setting the relevant properties on `CoinGeckoClientOptions` — the generated client wires the rest.

**OR (`AuthSchemeAny`) — alternatives, tried in order.** Schemes with **no credentials configured are skipped, not tried**; the first configured scheme that succeeds wins, and `AuthSchemeException` is thrown only if every *configured* scheme fails. Configure exactly the one you intend to use — an extra credential set "just in case" changes which scheme authenticates the call. **Which one that is, is not a preference:** each scheme's **API Provider Notes** above are where the provider states when its scheme applies.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the request goes out unauthenticated — no exception.** An unset credentials property on `CoinGeckoClientOptions` yields a no-op scheme, not an error, so the call reaches the provider with no credential and comes back `401`. The SDK will never tell you that you forgot to supply one; only the provider will, one round-trip later and one layer away from the cause.

**A required credential that is not configured is a deployment fault, not a request fault.** If the app boots with a blank secret, an operator sees a provider outage, retry logic hammers a call that can never succeed, and the actual cause — an unset environment variable — is two layers away from the symptom.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<CoinGeckoClientSettings>()
    .Bind(builder.Configuration.GetSection("CoinGeckoClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.HeaderAuth))
    throw new InvalidOperationException(
        "CoinGeckoClient:HeaderAuth is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

Three rules for the message it fails with:

- **Name the missing config key**, so the operator knows what to set — `"CoinGeckoClient:HeaderAuth is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value **the scheme you chose** needs. The rows below are not one checklist: the schemes above are alternatives, so a row belonging to a scheme you are not using needs no value at all, and demanding one at startup blocks a boot that would have worked. Validate the rows whose property you set, and no others:

| Value to validate | Feeds `CoinGeckoClientOptions` property |
| --- | --- |
| `HeaderAuth` | `HeaderAuth` |
| `QueryAuth` | `QueryAuth` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddCoinGeckoClient(options => ...)` callback when registering via DI. `CoinGeckoClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client.
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddCoinGeckoClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app.

