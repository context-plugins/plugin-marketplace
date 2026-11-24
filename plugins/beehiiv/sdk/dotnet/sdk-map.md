<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — beehiiv (.NET)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, error types, and server/auth wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the file declaring each type; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | beehiiv |
| Root namespace | `Beehiiv` |
| Target framework | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| API spec version | `1.0.0` |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file — never to the page that carries them; the project file is `src/Beehiiv/Beehiiv.csproj`. Open them as-is from the SDK root, from any page; if the SDK sits under a subdirectory of a larger repo, prefix that subdirectory.

---

## Getting a client

```csharp
var httpClient = new HttpClient();
// TODO: configure more client options here
var options = new BeehiivClientOptions
{
    BearerAuthSchemeCredentials = "YOUR_BEARER_TOKEN",
    Environment = ServerEnvironment.Production,
};
var client = new BeehiivClient(httpClient, options);
```

DI alternative (`services.AddBeehiivClient`):

```csharp
services.AddBeehiivClient(options =>
{
    options.BearerAuthSchemeCredentials = "YOUR_BEARER_TOKEN";
    options.Environment = ServerEnvironment.Production;
    // TODO: configure more client options here
});
```

Every API group is a property on the client (e.g. `client.AdNetworkOffers`). Source: `src/Beehiiv/BeehiivClient.cs`. The only constructor is `BeehiivClient(HttpClient httpClient, BeehiivClientOptions options)`.

All `BeehiivClientOptions` properties (source: `src/Beehiiv/BeehiivClientOptions.cs`):

| Property | Type |
| --- | --- |
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `TimeProvider` | `TimeProvider` |
| `Server` | `ServerOptions` |
| `StreamReadTimeout` | `TimeSpan?` |
| `Hooks` | `IReadOnlyList<SdkHook>` |
| `BearerAuthSchemeCredentials` | `string?` |
| `BearerAuthSchemeCredentialsProvider` | `CredentialProvider<string>?` |

`ServerEnvironment` (source: `src/Beehiiv/Servers/ServerEnvironment.cs`, namespace `Beehiiv.Servers`)

`RetryOptions` members (namespace `Beehiiv.Core.Configuration` — add `using Beehiiv.Core.Configuration;`; source: `src/Beehiiv/Core/Configuration/RetryOptions.cs`; all members are `required`, so build a full instance or start from `RetryOptions.Default()`):

| Member | Type |
| --- | --- |
| `StatusCodesToRetry` | `IReadOnlyList<HttpStatusCode>` |
| `HttpMethodsToRetry` | `IReadOnlyList<HttpMethod>` |
| `MaxRetries` | `int` |
| `Delay` | `TimeSpan` |
| `Timeout` | `TimeSpan?` |
| `BackOffFactor` | `int` |
| `UseExponentialBackoff` | `bool` |
| `MaxJitter` | `TimeSpan` |
| `OnRetry` | `Action<RetryAttempt>?` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**. On an error status the SDK throws `ApiException<TError>` (`src/Beehiiv/Core/Exceptions/ApiException.cs`, namespace `Beehiiv.Core.Exceptions`) exposing `.Error` of type `TError` beside the `StatusCode`, `Headers` and `ContentType` of the response. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class (namespace `Beehiiv.Errors`) with status-specific `TryGet…(out …)` accessors (each returns `true` when that shape is present) plus the inherited `TryGetRawError([NotNullWhen(true)] out RawError? error)` fallback, and an exhaustive `Match` pair — `Match<TResult>(Func<T, TResult> on{Arm}…, Func<RawError, TResult> otherwise)` and its `Action` twin — with one `on…` arm per accessor, in the ordinal order of their names, and a required `otherwise` that receives the `RawError` of a status the operation does not declare. The operation blocks name the exact `TryGet…` methods and the HTTP status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`src/Beehiiv/Core/ErrorResponse/RawError.cs`, namespace `Beehiiv.Core.ErrorResponse`): `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`.

⚠ Each of the three lives in its own namespace. `src/Beehiiv/Core/` holds several namespaces, so a catch block naming `ApiException<T>`, a typed `{Operation}Error` and `RawError` together needs a `using` for each.

`ApiException<TError>` is one leaf of the `SdkException` family (`src/Beehiiv/Core/Exceptions/SdkException.cs`): a request that produced no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match its declared type as `ResponseDeserializationException`, and a required credential that is not configured, or one that could not be applied, as `AuthSchemeException`. Every one of them names the failed call. The full table is in [README → Error Handling](README.md#error-handling).

Core error types (`src/Beehiiv/Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
| --- | --- | --- |
| `ApiError` — abstract base of the 98 typed error classes in `src/Beehiiv/Errors/` | `TryGetRawError([NotNullWhen(true)] out RawError? error): bool` | `src/Beehiiv/Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `src/Beehiiv/Core/ErrorResponse/RawError.cs` |

Every accessor over a reference-type payload, on a typed error and on a `OneOf`/`AnyOf` union alike, is `[NotNullWhen(true)] out T?`: read the value inside the `if`, where the compiler has narrowed it; a value-type payload (`long`, `JsonElement`) stays a bare `out`.

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions — no special handling. The operation's **Type sources** table gives the file that declares each one; read field names, declared types, and JSON wire names there, as for any other model.

```csharp
try
{
    var response = await client.AdNetworkOffers.Advertisements(new AdvertisementsRequest
    {
        PublicationId = "some example string",
        OfferId = "some example string",
        Authorization = "some example string",
    });
}
catch (ApiException<AdvertisementsError> ex)
{
    // Case A — typed error
    if (ex.Error.TryGetError(out var error))
    {
        // Handle 400, 401, 403, 404, 422, 429, 500
    }
    else if (ex.Error.TryGetRawError(out var raw))
    {
        // Any other error status
    }
}
catch (ApiException<RawError> ex)
{
    // Case B — raw error
    // ex.Error.StatusCode, ex.Error.ReadAsString(), ex.Error.ReadAsJson<T>()
}
```

**No-throw (`…Result`) variants: absent across this SDK** — every operation is throw-only. Of **100 operations**, **98 are Case A (typed)** and **2 are Case B (raw)**.

---

## Operations — by controller (30 groups, 100 operations)

Each links to a sub-page with one row per operation: signature, the request record's required members, query-param wire names (with the serialization style where the spec declares one), return type, error Case A/B, and Case A's typed accessors with their statuses. Each operation also carries a **Type sources** table — every type it names, with the file that declares it — so resolving a body, return, or error payload to its source is a lookup, never a search. `RawError` is excluded there (its members and path are above); an operation with no table names nothing but primitives and `RawError`.

**Each row states what is specific to its operation. Everything below holds for EVERY operation unless that operation's row says otherwise, so a row silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A row appears only when |
| --- | --- | --- |
| **Throw-only** — no `…Result`/no-throw variant exists anywhere in this SDK | this page, Error-handling model | a no-throw sibling exists (none do at this SDK version) |
| **No pagination** — the operation returns a single response, not a `Pageable` | here | pagination is offered — the block carries a **Pagination** bullet naming the posture (page-, offset-, cursor- or link-based, or the `page`-without-page-size case) |
| **Case B error accessors are always these four** — `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | the `RawError` row above | never — a `Case B` label always implies exactly these four; Case A rows list their own typed accessors |
| **Server group `Default`** — base URL per Servers & auth below | here | the operation is on another group — its block carries a **Server group** bullet |
| **Inputs are one request record** — an operation that takes input takes a single request record as its first parameter; build it with an object initializer, using the property names in the record's source (its file is in the operation's **Type sources**). A member the row does not list as required is optional or already carries the spec's default | here | never — it always holds |

**The HTTP verb and route live on the operation itself**, in the source file named at the top of its operations page. This map is method-first: the C# method is the interface you call. When something wire-level needs the route — reproducing a raw request, pointing the client at a mock, reading a provider-side log — read it from that file; do not reconstruct it from memory or infer it from the method name.

**The endpoint's behavioural prose lives there too**, as the XML `<remarks>` on the method. Rows here give you the contract — names, types, shapes, errors. Where an operation's *semantics* decide what you must pass — a parameter whose value changes server-side behaviour, an ordering or exclusivity rule between fields — that is what `<remarks>` settles; read it there rather than filling it in from memory.

| Controller (`client.X`) | Ops | Page |
| --- | --- | --- |
| `AdNetworkOffers` | 3 | [map/operations/AdNetworkOffers.md](map/operations/AdNetworkOffers.md) |
| `AdNetworkReports` | 3 | [map/operations/AdNetworkReports.md](map/operations/AdNetworkReports.md) |
| `AdvertisementOpportunities` | 1 | [map/operations/AdvertisementOpportunities.md](map/operations/AdvertisementOpportunities.md) |
| `Authorizations` | 1 | [map/operations/Authorizations.md](map/operations/Authorizations.md) |
| `Authors` | 2 | [map/operations/Authors.md](map/operations/Authors.md) |
| `AutomationJourneys` | 3 | [map/operations/AutomationJourneys.md](map/operations/AutomationJourneys.md) |
| `Automations` | 3 | [map/operations/Automations.md](map/operations/Automations.md) |
| `BulkSubscriptionUpdates` | 6 | [map/operations/BulkSubscriptionUpdates.md](map/operations/BulkSubscriptionUpdates.md) |
| `BulkSubscriptions` | 1 | [map/operations/BulkSubscriptions.md](map/operations/BulkSubscriptions.md) |
| `ComplimentaryAccessApi` | 2 | [map/operations/ComplimentaryAccessApi.md](map/operations/ComplimentaryAccessApi.md) |
| `ConditionSets` | 2 | [map/operations/ConditionSets.md](map/operations/ConditionSets.md) |
| `CustomFields` | 6 | [map/operations/CustomFields.md](map/operations/CustomFields.md) |
| `DataDeletion` | 3 | [map/operations/DataDeletion.md](map/operations/DataDeletion.md) |
| `Engagements` | 1 | [map/operations/Engagements.md](map/operations/Engagements.md) |
| `NewsletterListSubscriptions` | 5 | [map/operations/NewsletterListSubscriptions.md](map/operations/NewsletterListSubscriptions.md) |
| `NewsletterLists` | 5 | [map/operations/NewsletterLists.md](map/operations/NewsletterLists.md) |
| `Podcasts` | 4 | [map/operations/Podcasts.md](map/operations/Podcasts.md) |
| `Polls` | 3 | [map/operations/Polls.md](map/operations/Polls.md) |
| `PostTemplates` | 1 | [map/operations/PostTemplates.md](map/operations/PostTemplates.md) |
| `Posts` | 8 | [map/operations/Posts.md](map/operations/Posts.md) |
| `Publications` | 2 | [map/operations/Publications.md](map/operations/Publications.md) |
| `ReferralProgram` | 1 | [map/operations/ReferralProgram.md](map/operations/ReferralProgram.md) |
| `Segments` | 7 | [map/operations/Segments.md](map/operations/Segments.md) |
| `SubscriptionTags` | 1 | [map/operations/SubscriptionTags.md](map/operations/SubscriptionTags.md) |
| `Subscriptions` | 8 | [map/operations/Subscriptions.md](map/operations/Subscriptions.md) |
| `Tiers` | 5 | [map/operations/Tiers.md](map/operations/Tiers.md) |
| `Tokens` | 4 | [map/operations/Tokens.md](map/operations/Tokens.md) |
| `WebhooksApi` | 5 | [map/operations/WebhooksApi.md](map/operations/WebhooksApi.md) |
| `Workspaces` | 3 | [map/operations/Workspaces.md](map/operations/Workspaces.md) |
| `OauthUsers` | 1 | [map/operations/OauthUsers.md](map/operations/OauthUsers.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every file under `src/Beehiiv/Models/`, `src/Beehiiv/Errors/` and `src/Beehiiv/Requests/` declares exactly one public type, named after the file, and no two share a name — so a type name *is* its path. Take it from the operation's **Type sources** table, or build it from the kind's directory below. Never grep for a type.

| Group | Count | Directory (file = `<TypeName>.cs`) |
| --- | --- | --- |
| Records (plain `record` data models) | 288 | `src/Beehiiv/Models/` |
| Unions (`OneOf`) — variant factories + `TryGet…` + `Match` | 4 | `src/Beehiiv/Models/OneOf/` |
| Unions (`AnyOf`) — variant factories + `TryGet…` + `Match` | 12 | `src/Beehiiv/Models/AnyOf/` |
| Enums (`OpenStringEnum<T>` / `OpenIntEnum<T>`) — C# member names + wire values | 143 | `src/Beehiiv/Models/Enums/` |
| Typed error classes (`: ApiError`, one per Case A operation) | 98 | `src/Beehiiv/Errors/` |
| Request records (one per operation that takes input; never serialized) | 100 | `src/Beehiiv/Requests/` — a controller's records sit in a folder named after it (an operation with several tags is filed under the first tag it declares) |

Conventions: records are immutable, `init`-only; `required` properties must be set in the object initializer; `T?` is optional. A field's wire name is its `[JsonPropertyName]` and often differs from the C# name (`AmountInCents` ↔ `amount_in_cents`) — read it off the property, don't derive it. `OneOf`/`AnyOf` unions wrap `Optional<T>` variants — build via static factory or implicit conversion, read one variant via `TryGet…(out …)` or branch over all of them with the generated `Match`, which takes one `on{Variant}` handler per variant in declaration order and then `otherwise`, which receives the raw `JsonElement` of a value the SDK could not place: unions are open on read, so an unrecognised discriminator value or a body no variant accepts lands in `TryGetUnknown(out JsonElement)` and re-serializes verbatim; pass handlers by name, and treat an added or moved variant as a breaking change; `AllOf` compositions are not unions — every constituent is a `required` property, so set them all, and those constituent properties carry no `[JsonPropertyName]` and have no wire name of their own, because the generated converter flattens each constituent's own fields directly into the one parent JSON object. Enums are **not** C# enums — use the static members, whose names are PascalCase even when the wire value isn't (`CollectionMethod.Invoice`, not `.invoice`); there is no public factory, so resolve a raw value with `TryGetKnownValue` and branch with the generated `Match`, whose `otherwise` arm receives any value the SDK does not declare.

Namespaces by content type (add `using` accordingly):

| Contents | Namespace |
| --- | --- |
| Client & options (root) | `Beehiiv` |
| Operation controllers (`src/Beehiiv/Api/`) | `Beehiiv.Api` |
| Records (`src/Beehiiv/Models/`) | `Beehiiv.Models` |
| Enums (`src/Beehiiv/Models/Enums/`) | `Beehiiv.Models.Enums` |
| OneOf unions (`src/Beehiiv/Models/OneOf/`) | `Beehiiv.Models.OneOf` |
| AnyOf unions (`src/Beehiiv/Models/AnyOf/`) | `Beehiiv.Models.AnyOf` |
| Error classes (`src/Beehiiv/Errors/`) | `Beehiiv.Errors` |
| Request records (`src/Beehiiv/Requests/`) | `Beehiiv.Requests` — plus `.<Controller>` for a controller's records (an operation with several tags is filed under the first tag it declares) |

---

## Servers & auth

**Bearer token.** Set `options.BearerAuthSchemeCredentials = "<token>"`, or `options.BearerAuthSchemeCredentialsProvider` to a delegate asked on every request.

Operation blocks name their credential in an **Auth** bullet; an operation whose spec declares no scheme carries no such bullet.

- `AND` — every credential listed must be configured; the call fails before anything is sent, naming each one that is not.
- `OR` — the first configured credential that applies is sent, in the order listed; a configured one that fails falls through to the next; when none is configured the call fails before anything is sent, naming all of them.
- `OR anonymous` — the operation accepts anonymous callers: it is authenticated when a whole alternative listed before it is configured (every credential in an AND group), and sent without credentials otherwise.
- `(scopes: …)` — the OAuth2 scopes the operation's token is requested with; a client-credentials scheme mints one token per scope set.

A required credential you never configured fails the call with `AuthSchemeException` before anything is sent, so a `401` on an operation that requires a credential means the server rejected the one that was sent. A credential option left `null` is read from an environment variable when the client is constructed; the README's **Credentials from environment variables** table names them. A value set in code always wins, including the placeholder assignments in the **Getting a client** sample; delete the line for any credential you supply through an environment variable.

**Environments.** `options.Environment` selects the target environment (`src/Beehiiv/Servers/ServerEnvironment.cs`):

| Environment | Value | Hosting |
| --- | --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` | Default |

**2 server groups.** Base-URL templates and override points (`options.Server.…`):

| Group | `Production` base URL | Override point |
| --- | --- | --- |
| `Default` | `https://api.beehiiv.com/v2` | `options.Server.Default.Production.BaseUrl` |
| `DefaultOAuth2AuthorizationsApi` | `https://app.beehiiv.com` | `options.Server.DefaultOAuth2AuthorizationsApi.Production.BaseUrl` |

Retry/resilience is configurable via `options.Retry` (`RetryOptions`, backed by Polly).

