---
name: "dotnet-authentication"
description: "Load before wiring credentials into the Atlassian Compass .NET SDK client in C#, or when a call throws AuthSchemeException or comes back 401/403. Covers HTTP Basic: the credential each scheme takes, the AtlassianCompassClientOptions property it goes on, the environment variable that fills it when unset, and a startup check that fails fast on a missing secret."
---

# Authenticating the Atlassian Compass .NET SDK client

This API authenticates with HTTP Basic. Each scheme is a **nullable credentials property** on `AtlassianCompassClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `AtlassianCompassClientOptions` | Credential |
| --- | --- | --- |
| HTTP Basic | `BasicAuth` | `BasicAuthCredentials?` |

**That table, the provider delegate beside each static credential and the environment variables below are the entire authentication surface of this SDK.** `AtlassianCompass.Core.Authentication` also holds scheme classes this API does not use, so read what is configurable off the properties above rather than off that folder.

## Basic auth

```csharp
using AtlassianCompass.Core.Authentication.Basic;

options.BasicAuth = new BasicAuthCredentials
{
    Username = "...",
    Password = "..."
};
```

Sends `Authorization: Basic base64(username:password)`. Both halves are required — a username with an empty password is misconfigured, not partially configured.

## Credential providers

Every static credential above has a companion **provider** property on `AtlassianCompassClientOptions`: a delegate the SDK asks on every request, for a secret that rotates while the process runs. Set it instead of the credential — a provider wins over both the credential property and its environment variable.

| Credential | Provider | Delegate |
| --- | --- | --- |
| `options.BasicAuth` | `options.BasicAuthProvider` | `CredentialProvider<BasicAuthCredentials>?` |

```csharp
options.BasicAuthProvider = async ct => new BasicAuthCredentials
{
    Username = "...",
    Password = await vault.ReadAsync("api-password", ct)
};
```

- The provider runs inside every attempt, before the request is sent, and counts against the per-attempt `options.Retry.Timeout` — keep it fast, and cache in your own code when the source is slow.
- A provider that returns `null` means the credential is unavailable for that call: the call fails with `AuthSchemeException` naming the scheme, even on an operation that accepts anonymous callers. Under **OR**, the next configured alternative is tried first.
- A provider that throws fails the call with `AuthSchemeException` wrapping the exception; an `OperationCanceledException` for the call's own token passes through unwrapped.

## Environment variables

A credentials property left `null` is read from an environment variable when the client is constructed — the SDK name in upper snake case, the property name in upper snake case, and for a multi-member credential the member:

| Property on `AtlassianCompassClientOptions` | Environment variables |
| --- | --- |
| `BasicAuth` | `ATLASSIAN_COMPASS_BASIC_AUTH_USERNAME`, `ATLASSIAN_COMPASS_BASIC_AUTH_PASSWORD` |

- A value set in code always wins over the environment.
- A variable that is unset, empty or whitespace counts as not configured.
- A multi-member credential is used only when every required variable is set. If some are missing the property stays `null`; constructing the client never throws, and a call that requires that credential fails before anything is sent.
- Variables are read once, when the client is constructed. Changing them afterwards has no effect on an existing client.

Binding `AtlassianCompassClientOptions` from `IConfiguration` keeps both paths: a property the binding leaves `null` still falls back to its variable. The README's **Credentials from environment variables** section shows the binding.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the first call that needs the credential throws.** A credentials property on `AtlassianCompassClientOptions` that nothing fills — code, a provider or an environment variable — fails the call with `AuthSchemeException` before anything is sent, naming the scheme. That is a request-time failure for a deployment fault: catch it at startup instead.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<AtlassianCompassClientSettings>()
    .Bind(builder.Configuration.GetSection("AtlassianCompassClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.Username))
    throw new InvalidOperationException(
        "AtlassianCompassClient:Username is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

**If the SDK's environment variables supply the credential**, `ValidateOnStart()` sees nothing: the SDK reads the variable itself, and a settings type bound from `IConfiguration` would refuse to boot a host the SDK authenticates. Check the variable instead, with the same guard before the host is ready — the **Or environment variable** column below names it.

**If a provider supplies the credential**, there is nothing to check at startup: the delegate is asked on every request, so the check belongs where the provider reads the secret, and a provider that returns `null` fails the call with `AuthSchemeException`.

Three rules for the message it fails with:

- **Name the missing config key or variable**, so the operator knows what to set — `"AtlassianCompassClient:Username is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value the schemes actually need. For this SDK that is:

| Value to validate | Feeds `AtlassianCompassClientOptions` property | Or environment variable |
| --- | --- | --- |
| `Username` | `BasicAuth` | `ATLASSIAN_COMPASS_BASIC_AUTH_USERNAME` |
| `Password` | `BasicAuth` | `ATLASSIAN_COMPASS_BASIC_AUTH_PASSWORD` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddAtlassianCompassClient(options => ...)` callback when registering via DI. `AtlassianCompassClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client. A provider is the one way to change a credential without a new client: the delegate you set before construction is asked on every request, so a rotated secret reaches the next call; assigning a different delegate afterwards has no effect (see **Credential providers**).
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddAtlassianCompassClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app — or leave the property unset and let the SDK read its environment variable (see **Environment variables**).

