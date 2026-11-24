---
name: "dotnet-authentication"
description: "Load before wiring credentials into the CloudKit .NET SDK client in C#, or when a call throws AuthSchemeException or comes back 401/403. Covers an API key in a query parameter and an API key in a header: the credential each scheme takes, the CloudKitClientOptions property it goes on, the environment variable that fills it when unset, and a startup check that fails fast on a missing secret."
---

# Authenticating the CloudKit .NET SDK client

This API authenticates with an API key in a query parameter and an API key in a header. Each scheme is a **nullable credentials property** on `CloudKitClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `CloudKitClientOptions` | Credential |
| --- | --- | --- |
| API key — `ckAPIToken` query parameter | `CloudKitApiToken` | `string?` |
| API key — `X-Apple-CloudKit-Request-SignatureV1` header | `ServerToServer` | `string?` |

**That table, the provider delegate beside each static credential and the environment variables below are the entire authentication surface of this SDK.** `CloudKit.Core.Authentication` also holds scheme classes this API does not use, so read what is configurable off the properties above rather than off that folder.

## API key (query parameter)

**API Provider Notes:**

> CloudKit API token issued from the CloudKit dashboard, appended to
> the request URL as `ckAPIToken`. Required for end-user authenticated
> access via web auth tokens.

The key is appended to every request as the `ckAPIToken` query parameter. The parameter name is fixed — you supply only the value:

```csharp
options.CloudKitApiToken = "API_KEY";
```

⚠ **A query-string credential is logged by everything on the path.** Proxies, CDNs, load balancers and the provider's own access logs record full URLs, and this SDK's request logging is no exception. Treat the key as exposed to your infrastructure, and rotate it on that basis.

## API key (header)

**API Provider Notes:**

> Server-to-server authentication uses ECDSA-signed requests with
> `X-Apple-CloudKit-Request-KeyID`, `X-Apple-CloudKit-Request-ISO8601Date`,
> and `X-Apple-CloudKit-Request-SignatureV1` headers.

The key travels in the `X-Apple-CloudKit-Request-SignatureV1` request header. The header name is fixed — you supply only the value:

```csharp
options.ServerToServer = "API_KEY";
```

## Credential providers

Every static credential above has a companion **provider** property on `CloudKitClientOptions`: a delegate the SDK asks on every request, for a secret that rotates while the process runs. Set it instead of the credential — a provider wins over both the credential property and its environment variable.

| Credential | Provider | Delegate |
| --- | --- | --- |
| `options.CloudKitApiToken` | `options.CloudKitApiTokenProvider` | `CredentialProvider<string>?` |
| `options.ServerToServer` | `options.ServerToServerProvider` | `CredentialProvider<string>?` |

```csharp
options.CloudKitApiTokenProvider = async ct => await vault.ReadAsync("api-key", ct);
```

- The provider runs inside every attempt, before the request is sent, and counts against the per-attempt `options.Retry.Timeout` — keep it fast, and cache in your own code when the source is slow.
- A provider that returns `null` means the credential is unavailable for that call: the call fails with `AuthSchemeException` naming the scheme, even on an operation that accepts anonymous callers. Under **OR**, the next configured alternative is tried first.
- A provider that throws fails the call with `AuthSchemeException` wrapping the exception; an `OperationCanceledException` for the call's own token passes through unwrapped.

## Combining the schemes

This SDK has more than one credentials property, and its operations compose them; you choose by which properties on `CloudKitClientOptions` you set.

**OR — alternatives, in the order the API lists them.** Schemes with **no credentials configured are skipped, not tried**; the first configured scheme that applies wins, and `AuthSchemeException` is thrown when none is configured, naming every alternative, or when every configured one fails. Configure exactly the one you intend to use — an extra credential set "just in case" changes which scheme authenticates the call. **Which one that is, is not a preference:** each scheme's **API Provider Notes** above are where the provider states when its scheme applies.

## Environment variables

A credentials property left `null` is read from an environment variable when the client is constructed — the SDK name in upper snake case, the property name in upper snake case, and for a multi-member credential the member:

| Property on `CloudKitClientOptions` | Environment variables |
| --- | --- |
| `CloudKitApiToken` | `CLOUD_KIT_CLOUD_KIT_API_TOKEN` |
| `ServerToServer` | `CLOUD_KIT_SERVER_TO_SERVER` |

- A value set in code always wins over the environment.
- A variable that is unset, empty or whitespace counts as not configured.
- Variables are read once, when the client is constructed. Changing them afterwards has no effect on an existing client.

Binding `CloudKitClientOptions` from `IConfiguration` keeps both paths: a property the binding leaves `null` still falls back to its variable. The README's **Credentials from environment variables** section shows the binding.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the first call that needs the credential throws.** A credentials property on `CloudKitClientOptions` that nothing fills — code, a provider or an environment variable — fails the call with `AuthSchemeException` before anything is sent, naming the scheme. That is a request-time failure for a deployment fault: catch it at startup instead.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<CloudKitClientSettings>()
    .Bind(builder.Configuration.GetSection("CloudKitClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.CloudKitApiToken))
    throw new InvalidOperationException(
        "CloudKitClient:CloudKitApiToken is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

**If the SDK's environment variables supply the credential**, `ValidateOnStart()` sees nothing: the SDK reads the variable itself, and a settings type bound from `IConfiguration` would refuse to boot a host the SDK authenticates. Check the variable instead, with the same guard before the host is ready — the **Or environment variable** column below names it.

**If a provider supplies the credential**, there is nothing to check at startup: the delegate is asked on every request, so the check belongs where the provider reads the secret, and a provider that returns `null` fails the call with `AuthSchemeException`.

Three rules for the message it fails with:

- **Name the missing config key or variable**, so the operator knows what to set — `"CloudKitClient:CloudKitApiToken is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value **the scheme you chose** needs. The rows below are not one checklist: the schemes above are alternatives, so a row belonging to a scheme you are not using needs no value at all, and demanding one at startup blocks a boot that would have worked. Validate the rows whose property you set, and no others:

| Value to validate | Feeds `CloudKitClientOptions` property | Or environment variable |
| --- | --- | --- |
| `CloudKitApiToken` | `CloudKitApiToken` | `CLOUD_KIT_CLOUD_KIT_API_TOKEN` |
| `ServerToServer` | `ServerToServer` | `CLOUD_KIT_SERVER_TO_SERVER` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddCloudKitClient(options => ...)` callback when registering via DI. `CloudKitClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client. A provider is the one way to change a credential without a new client: the delegate you set before construction is asked on every request, so a rotated secret reaches the next call; assigning a different delegate afterwards has no effect (see **Credential providers**).
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddCloudKitClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app — or leave the property unset and let the SDK read its environment variable (see **Environment variables**).

