---
name: "dotnet-authentication"
description: "Load before wiring credentials into the Contentstack .NET SDK client in C#, or when a call throws AuthSchemeException or comes back 401/403. Covers a Bearer token and an API key in a header: the credential each scheme takes, the ContentstackClientOptions property it goes on, the environment variable that fills it when unset, and a startup check that fails fast on a missing secret."
---

# Authenticating the Contentstack .NET SDK client

This API authenticates with a Bearer token and an API key in a header. Each scheme is a **nullable credentials property** on `ContentstackClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `ContentstackClientOptions` | Credential |
| --- | --- | --- |
| Bearer token | `BearerAuth` | `string?` |
| API key — `authtoken` header | `AuthtokenAuth` | `string?` |
| API key — `api_key` header | `ApiKey` | `string?` |
| API key — `access_token` header | `DeliveryToken` | `string?` |
| API key — `authorization` header | `ManagementTokenAuth` | `string?` |

**That table, the provider delegate beside each static credential and the environment variables below are the entire authentication surface of this SDK.** `Contentstack.Core.Authentication` also holds scheme classes this API does not use, so read what is configurable off the properties above rather than off that folder.

## Bearer token

**API Provider Notes:**

> OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with brand-kits:manage scope., OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with brand-kits:manage scope., OAuth 2.0 Bearer token with appropriate Automate scopes., Bearer token from the Identity Provider client for SCIM authentication., Bearer token from the Identity Provider client for SCIM authentication., Bearer token from the Identity Provider client for SCIM authentication., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with brand-kits:manage scope.

`options.BearerAuth` is a plain `string` — assign the access token itself, with no `Bearer` prefix, which the SDK adds:

```csharp
options.BearerAuth = "ACCESS_TOKEN";
```

Sends `Authorization: Bearer ACCESS_TOKEN`.

## API key (header) — `AuthtokenAuth`

**API Provider Notes:**

> Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., User session token obtained from the login endpoint., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication.

The key travels in the `authtoken` request header. The header name is fixed — you supply only the value:

```csharp
options.AuthtokenAuth = "API_KEY";
```

## API key (header) — `ApiKey`

**API Provider Notes:**

> The API key for the Contentstack stack.

The key travels in the `api_key` request header. The header name is fixed — you supply only the value:

```csharp
options.ApiKey = "API_KEY";
```

## API key (header) — `DeliveryToken`

**API Provider Notes:**

> The delivery token granting read access to the stack environment.

The key travels in the `access_token` request header. The header name is fixed — you supply only the value:

```csharp
options.DeliveryToken = "API_KEY";
```

## API key (header) — `ManagementTokenAuth`

**API Provider Notes:**

> Management token in the format "Bearer {management_token}" for server-to-server authentication without user sessions.

The key travels in the `authorization` request header. The header name is fixed — you supply only the value:

```csharp
options.ManagementTokenAuth = "API_KEY";
```

## Credential providers

Every static credential above has a companion **provider** property on `ContentstackClientOptions`: a delegate the SDK asks on every request, for a secret that rotates while the process runs. Set it instead of the credential — a provider wins over both the credential property and its environment variable.

| Credential | Provider | Delegate |
| --- | --- | --- |
| `options.BearerAuth` | `options.BearerAuthProvider` | `CredentialProvider<string>?` |
| `options.AuthtokenAuth` | `options.AuthtokenAuthProvider` | `CredentialProvider<string>?` |
| `options.ApiKey` | `options.ApiKeyProvider` | `CredentialProvider<string>?` |
| `options.DeliveryToken` | `options.DeliveryTokenProvider` | `CredentialProvider<string>?` |
| `options.ManagementTokenAuth` | `options.ManagementTokenAuthProvider` | `CredentialProvider<string>?` |

```csharp
options.BearerAuthProvider = async ct => await vault.ReadAsync("api-token", ct);
```

- The provider runs inside every attempt, before the request is sent, and counts against the per-attempt `options.Retry.Timeout` — keep it fast, and cache in your own code when the source is slow.
- A provider that returns `null` means the credential is unavailable for that call: the call fails with `AuthSchemeException` naming the scheme, even on an operation that accepts anonymous callers. Under **OR**, the next configured alternative is tried first.
- A provider that throws fails the call with `AuthSchemeException` wrapping the exception; an `OperationCanceledException` for the call's own token passes through unwrapped.

## Combining the schemes

This SDK has more than one credentials property, and its operations compose them; you choose by which properties on `ContentstackClientOptions` you set.

**AND — every scheme in the group is applied to the request.** Leave one of them unconfigured and the call fails before anything is sent with `AuthSchemeException` naming each missing scheme; there is no half-authenticated call.

**OR — alternatives, in the order the API lists them.** Schemes with **no credentials configured are skipped, not tried**; the first configured scheme that applies wins, and `AuthSchemeException` is thrown when none is configured, naming every alternative, or when every configured one fails. Configure exactly the one you intend to use — an extra credential set "just in case" changes which scheme authenticates the call. **Which one that is, is not a preference:** each scheme's **API Provider Notes** above are where the provider states when its scheme applies.

## Operations that need no credentials

Some operations on this API are public: they send no credential, whatever you set on `ContentstackClientOptions`. You still construct the same client — there is no separate unauthenticated client — and the credentials you configured are simply not applied to those calls.

## Environment variables

A credentials property left `null` is read from an environment variable when the client is constructed — the SDK name in upper snake case, the property name in upper snake case, and for a multi-member credential the member:

| Property on `ContentstackClientOptions` | Environment variables |
| --- | --- |
| `BearerAuth` | `CONTENTSTACK_BEARER_AUTH` |
| `AuthtokenAuth` | `CONTENTSTACK_AUTHTOKEN_AUTH` |
| `ApiKey` | `CONTENTSTACK_API_KEY` |
| `DeliveryToken` | `CONTENTSTACK_DELIVERY_TOKEN` |
| `ManagementTokenAuth` | `CONTENTSTACK_MANAGEMENT_TOKEN_AUTH` |

- A value set in code always wins over the environment.
- A variable that is unset, empty or whitespace counts as not configured.
- Variables are read once, when the client is constructed. Changing them afterwards has no effect on an existing client.

Binding `ContentstackClientOptions` from `IConfiguration` keeps both paths: a property the binding leaves `null` still falls back to its variable. The README's **Credentials from environment variables** section shows the binding.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the first call that needs the credential throws.** A credentials property on `ContentstackClientOptions` that nothing fills — code, a provider or an environment variable — fails the call with `AuthSchemeException` before anything is sent, naming the scheme. That is a request-time failure for a deployment fault: catch it at startup instead.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<ContentstackClientSettings>()
    .Bind(builder.Configuration.GetSection("ContentstackClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.BearerAuth))
    throw new InvalidOperationException(
        "ContentstackClient:BearerAuth is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

**If the SDK's environment variables supply the credential**, `ValidateOnStart()` sees nothing: the SDK reads the variable itself, and a settings type bound from `IConfiguration` would refuse to boot a host the SDK authenticates. Check the variable instead, with the same guard before the host is ready — the **Or environment variable** column below names it.

**If a provider supplies the credential**, there is nothing to check at startup: the delegate is asked on every request, so the check belongs where the provider reads the secret, and a provider that returns `null` fails the call with `AuthSchemeException`.

Three rules for the message it fails with:

- **Name the missing config key or variable**, so the operator knows what to set — `"ContentstackClient:BearerAuth is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value **the scheme you chose** needs. The rows below are not one checklist: the schemes above are alternatives, so a row belonging to a scheme you are not using needs no value at all, and demanding one at startup blocks a boot that would have worked. Validate the rows whose property you set, and no others:

| Value to validate | Feeds `ContentstackClientOptions` property | Or environment variable |
| --- | --- | --- |
| `BearerAuth` | `BearerAuth` | `CONTENTSTACK_BEARER_AUTH` |
| `AuthtokenAuth` | `AuthtokenAuth` | `CONTENTSTACK_AUTHTOKEN_AUTH` |
| `ApiKey` | `ApiKey` | `CONTENTSTACK_API_KEY` |
| `DeliveryToken` | `DeliveryToken` | `CONTENTSTACK_DELIVERY_TOKEN` |
| `ManagementTokenAuth` | `ManagementTokenAuth` | `CONTENTSTACK_MANAGEMENT_TOKEN_AUTH` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddContentstackClient(options => ...)` callback when registering via DI. `ContentstackClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client. A provider is the one way to change a credential without a new client: the delegate you set before construction is asked on every request, so a rotated secret reaches the next call; assigning a different delegate afterwards has no effect (see **Credential providers**).
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddContentstackClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app — or leave the property unset and let the SDK read its environment variable (see **Environment variables**).

