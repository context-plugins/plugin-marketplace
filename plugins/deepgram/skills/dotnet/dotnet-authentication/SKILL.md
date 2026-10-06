---
name: "dotnet-authentication"
description: "Authentication for the Deepgram .NET SDK in C# — this API authenticates with a Bearer token and an API key in a header, and this skill gives the credential each scheme takes, the DeepgramClientOptions property to set it on, and the startup check that keeps a missing secret from surfacing as a 401. Load before wiring credentials into the client, or when a call comes back 401/403."
---

# Authenticating the Deepgram .NET SDK client

This API authenticates with a Bearer token and an API key in a header. APIMatic surfaces each scheme as a **nullable credentials property** on `DeepgramClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `DeepgramClientOptions` | Credential |
| --- | --- | --- |
| Bearer token | `JwtAuth` | `string` |
| API key — `Authorization` header | `ApiKeyAuth` | `string` |

**That table is the entire authentication surface of this SDK.** `Deepgram.Core.Authentication` ships *every* scheme class APIMatic supports as shared runtime code, including kinds this API does not use, so read what is configurable off the properties above rather than off that folder.

## Bearer token

**API Provider Notes:**

> Use `Authorization: Bearer <JWT>`
> Example: `Authorization: Bearer eyJhbGciOiJ...`

`options.JwtAuth` is a plain `string` — assign the access token itself, with no `Bearer` prefix, which the SDK adds:

```csharp
options.JwtAuth = "ACCESS_TOKEN";
```

Sends `Authorization: Bearer ACCESS_TOKEN`.

## API key (header)

**API Provider Notes:**

> Use `Authorization: Token <API_KEY>`
> Example: `Authorization: Token 12345abcdef`

The key travels in the `Authorization` request header. The header name is fixed by the generated scheme — you supply only the value:

```csharp
options.ApiKeyAuth = "API_KEY";
```

## Combining the schemes

This SDK generates more than one credentials property, and its operations compose them. You configure the composition by setting the relevant properties on `DeepgramClientOptions` — the generated client wires the rest.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the request goes out unauthenticated — no exception.** An unset credentials property on `DeepgramClientOptions` yields a no-op scheme, not an error, so the call reaches the provider with no credential and comes back `401`. The SDK will never tell you that you forgot to supply one; only the provider will, one round-trip later and one layer away from the cause.

**A required credential that is not configured is a deployment fault, not a request fault.** If the app boots with a blank secret, an operator sees a provider outage, retry logic hammers a call that can never succeed, and the actual cause — an unset environment variable — is two layers away from the symptom.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<DeepgramClientSettings>()
    .Bind(builder.Configuration.GetSection("DeepgramClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.JwtAuth))
    throw new InvalidOperationException(
        "DeepgramClient:JwtAuth is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

Three rules for the message it fails with:

- **Name the missing config key**, so the operator knows what to set — `"DeepgramClient:JwtAuth is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value the schemes actually need. For this SDK that is:

| Value to validate | Feeds `DeepgramClientOptions` property |
| --- | --- |
| `JwtAuth` | `JwtAuth` |
| `ApiKeyAuth` | `ApiKeyAuth` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddDeepgramClient(options => ...)` callback when registering via DI. `DeepgramClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client.
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddDeepgramClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app.

