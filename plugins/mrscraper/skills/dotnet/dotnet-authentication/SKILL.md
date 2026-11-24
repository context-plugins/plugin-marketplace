---
name: "dotnet-authentication"
description: "Load before wiring credentials into the MrScraper .NET SDK client in C#, or when a call throws AuthSchemeException or comes back 401/403. Covers an API key in a header: the credential each scheme takes, the MrScraperClientOptions property it goes on, the environment variable that fills it when unset, and a startup check that fails fast on a missing secret."
---

# Authenticating the MrScraper .NET SDK client

This API authenticates with an API key in a header. Each scheme is a **nullable credentials property** on `MrScraperClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `MrScraperClientOptions` | Credential |
| --- | --- | --- |
| API key — `x-api-token` header | `ApiKey` | `string?` |
| API key — `Authorization` header | `BearerAuth` | `string?` |

**That table, the provider delegate beside each static credential and the environment variables below are the entire authentication surface of this SDK.** `MrScraper.Core.Authentication` also holds scheme classes this API does not use, so read what is configurable off the properties above rather than off that folder.

## API key (header) — `ApiKey`

**API Provider Notes:**

> atk_example_not_a_real_token

The key travels in the `x-api-token` request header. The header name is fixed — you supply only the value:

```csharp
options.ApiKey = "API_KEY";
```

## API key (header) — `BearerAuth`

**API Provider Notes:**

> "Bearer <token>" — a MrScraper API token, or an OAuth 2.1 access token issued by the platform for the MCP connector (scopes: scrape:read for GET /, scrape:write for POST /, account:read for GET /subscription-accounts).

The key travels in the `Authorization` request header. The header name is fixed — you supply only the value:

```csharp
options.BearerAuth = "API_KEY";
```

## Credential providers

Every static credential above has a companion **provider** property on `MrScraperClientOptions`: a delegate the SDK asks on every request, for a secret that rotates while the process runs. Set it instead of the credential — a provider wins over both the credential property and its environment variable.

| Credential | Provider | Delegate |
| --- | --- | --- |
| `options.ApiKey` | `options.ApiKeyProvider` | `CredentialProvider<string>?` |
| `options.BearerAuth` | `options.BearerAuthProvider` | `CredentialProvider<string>?` |

```csharp
options.ApiKeyProvider = async ct => await vault.ReadAsync("api-key", ct);
```

- The provider runs inside every attempt, before the request is sent, and counts against the per-attempt `options.Retry.Timeout` — keep it fast, and cache in your own code when the source is slow.
- A provider that returns `null` means the credential is unavailable for that call: the call fails with `AuthSchemeException` naming the scheme, even on an operation that accepts anonymous callers. Under **OR**, the next configured alternative is tried first.
- A provider that throws fails the call with `AuthSchemeException` wrapping the exception; an `OperationCanceledException` for the call's own token passes through unwrapped.

## Combining the schemes

This SDK has more than one credentials property, and its operations compose them; you choose by which properties on `MrScraperClientOptions` you set.

**OR — alternatives, in the order the API lists them.** Schemes with **no credentials configured are skipped, not tried**; the first configured scheme that applies wins, and `AuthSchemeException` is thrown when none is configured, naming every alternative, or when every configured one fails. Configure exactly the one you intend to use — an extra credential set "just in case" changes which scheme authenticates the call. **Which one that is, is not a preference:** each scheme's **API Provider Notes** above are where the provider states when its scheme applies.

## Environment variables

A credentials property left `null` is read from an environment variable when the client is constructed — the SDK name in upper snake case, the property name in upper snake case, and for a multi-member credential the member:

| Property on `MrScraperClientOptions` | Environment variables |
| --- | --- |
| `ApiKey` | `MR_SCRAPER_API_KEY` |
| `BearerAuth` | `MR_SCRAPER_BEARER_AUTH` |

- A value set in code always wins over the environment.
- A variable that is unset, empty or whitespace counts as not configured.
- Variables are read once, when the client is constructed. Changing them afterwards has no effect on an existing client.

Binding `MrScraperClientOptions` from `IConfiguration` keeps both paths: a property the binding leaves `null` still falls back to its variable. The README's **Credentials from environment variables** section shows the binding.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the first call that needs the credential throws.** A credentials property on `MrScraperClientOptions` that nothing fills — code, a provider or an environment variable — fails the call with `AuthSchemeException` before anything is sent, naming the scheme. That is a request-time failure for a deployment fault: catch it at startup instead.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<MrScraperClientSettings>()
    .Bind(builder.Configuration.GetSection("MrScraperClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.ApiKey))
    throw new InvalidOperationException(
        "MrScraperClient:ApiKey is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

**If the SDK's environment variables supply the credential**, `ValidateOnStart()` sees nothing: the SDK reads the variable itself, and a settings type bound from `IConfiguration` would refuse to boot a host the SDK authenticates. Check the variable instead, with the same guard before the host is ready — the **Or environment variable** column below names it.

**If a provider supplies the credential**, there is nothing to check at startup: the delegate is asked on every request, so the check belongs where the provider reads the secret, and a provider that returns `null` fails the call with `AuthSchemeException`.

Three rules for the message it fails with:

- **Name the missing config key or variable**, so the operator knows what to set — `"MrScraperClient:ApiKey is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value **the scheme you chose** needs. The rows below are not one checklist: the schemes above are alternatives, so a row belonging to a scheme you are not using needs no value at all, and demanding one at startup blocks a boot that would have worked. Validate the rows whose property you set, and no others:

| Value to validate | Feeds `MrScraperClientOptions` property | Or environment variable |
| --- | --- | --- |
| `ApiKey` | `ApiKey` | `MR_SCRAPER_API_KEY` |
| `BearerAuth` | `BearerAuth` | `MR_SCRAPER_BEARER_AUTH` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddMrScraperClient(options => ...)` callback when registering via DI. `MrScraperClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client. A provider is the one way to change a credential without a new client: the delegate you set before construction is asked on every request, so a rotated secret reaches the next call; assigning a different delegate afterwards has no effect (see **Credential providers**).
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddMrScraperClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app — or leave the property unset and let the SDK read its environment variable (see **Environment variables**).

