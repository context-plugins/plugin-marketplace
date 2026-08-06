# SDK map — ebay-sell (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | ebay-sell |
| Root namespace/module | `EbaySell` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `c9f99af` (`c9f99af4ccf98663ef3c18d4f53f76e43118b5ef`, tagged `c9f99af`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/ebay-sell-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using EbaySell;
using EbaySell.Servers; // ServerEnvironment lives here

var options = new EbaySellClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new EbaySellClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddEbaySellClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`EbaySellClient.cs`.

<!-- crawler:client-options -->
All `EbaySellClientOptions` properties (source: `EbaySellClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `ApiAuth` | `OAuth2AuthorizationCodeCredentials?` |
| `ApiAuthTokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>?` |
| `BearerAuth` | `string?` |
| `ApiAuth1` | `OAuth2ClientCredentials?` |
| `ApiAuth1TokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>?` |

`RetryOptions` members (source: `Core/Configuration/RetryOptions.cs`; build a full instance — all members are `required` — or start from `RetryOptions.Default()`):

| Member | Type |
|---|---|
| `StatusCodesToRetry` | `IReadOnlyList<HttpStatusCode>` |
| `HttpMethodsToRetry` | `IReadOnlyList<HttpMethod>` |
| `MaxRetries` | `int` |
| `Delay` | `TimeSpan` |
| `Timeout` | `TimeSpan?` |
| `BackOffFactor` | `int` |
| `UseExponentialBackoff` | `bool` |
| `MaxJitter` | `TimeSpan` |
| `OnRetry` | `Action<RetryAttempt>?` |

Client constructor(s):

- `EbaySellClient(HttpClient httpClient, EbaySellClientOptions options)`
<!-- /crawler:client-options -->

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**. On an error status the SDK throws `SdkException<TError>`
(`Core/Exceptions/SdkException.cs`) exposing `.Error` of type `TError`. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class with status-specific
  `TryGet…(out …)` accessors (returns `true` when that shape is present) plus the inherited
  `TryGetRawError(out RawError)` fallback. The per-operation rows name the exact `TryGet…` methods and the HTTP
  status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`Core/ErrorResponse/RawError.cs`): `StatusCode`,
  `ReadAsString()`, `ReadAsJson<T>()`, `ReadAsBytes()`.

<!-- gen:error-core -->
Core error types (`Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
|---|---|---|
| `ApiError` — abstract base of all 80 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `Core/ErrorResponse/RawError.cs` |

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions: field names, declared types, and JSON wire names live on the records pages / `unions.md` like any other model.
<!-- /gen:error-core -->

```csharp
try { var resp = await client.{ApiGroup}.{Operation}(body); }
catch (SdkException<{Operation}Error> ex)              // Case A
{
    if (ex.Error.TryGetSomeShape(out var typed))      { /* handle that status */ }
    else if (ex.Error.TryGetRawError(out var raw))    { /* other statuses */ }
}
catch (SdkException<RawError> ex)                     // Case B
{
    var status = ex.Error.StatusCode;
    var body   = ex.Error.ReadAsString();
}
```

<!-- crawler:op-stats -->
**No-throw ("`…Result`") variants: absent across this SDK** — every operation is throw-only.
Of **80 operations**, **80 are Case A (typed)** and **0 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (28 groups, 80 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `AccessApi` | 1 | [map/operations/AccessApi.md](map/operations/AccessApi.md) |
| `BiddingApi` | 2 | [map/operations/BiddingApi.md](map/operations/BiddingApi.md) |
| `CategoryTreeApi` | 9 | [map/operations/CategoryTreeApi.md](map/operations/CategoryTreeApi.md) |
| `CharityOrgApi` | 2 | [map/operations/CharityOrgApi.md](map/operations/CharityOrgApi.md) |
| `CheckoutSession` | 10 | [map/operations/CheckoutSession.md](map/operations/CheckoutSession.md) |
| `ConfigApi` | 2 | [map/operations/ConfigApi.md](map/operations/ConfigApi.md) |
| `DealItemApi` | 1 | [map/operations/DealItemApi.md](map/operations/DealItemApi.md) |
| `DestinationApi` | 5 | [map/operations/DestinationApi.md](map/operations/DestinationApi.md) |
| `EventApi` | 2 | [map/operations/EventApi.md](map/operations/EventApi.md) |
| `EventItemApi` | 1 | [map/operations/EventItemApi.md](map/operations/EventItemApi.md) |
| `FeedTypeApi` | 2 | [map/operations/FeedTypeApi.md](map/operations/FeedTypeApi.md) |
| `FileApi` | 3 | [map/operations/FileApi.md](map/operations/FileApi.md) |
| `GuestCheckoutSession` | 7 | [map/operations/GuestCheckoutSession.md](map/operations/GuestCheckoutSession.md) |
| `GuestPurchaseOrder` | 1 | [map/operations/GuestPurchaseOrder.md](map/operations/GuestPurchaseOrder.md) |
| `ItemApi` | 6 | [map/operations/ItemApi.md](map/operations/ItemApi.md) |
| `ItemGroupApi` | 1 | [map/operations/ItemGroupApi.md](map/operations/ItemGroupApi.md) |
| `ItemPriorityApi` | 1 | [map/operations/ItemPriorityApi.md](map/operations/ItemPriorityApi.md) |
| `ItemSnapshotApi` | 1 | [map/operations/ItemSnapshotApi.md](map/operations/ItemSnapshotApi.md) |
| `ItemSummaryApi` | 2 | [map/operations/ItemSummaryApi.md](map/operations/ItemSummaryApi.md) |
| `MerchandisedProductApi` | 2 | [map/operations/MerchandisedProductApi.md](map/operations/MerchandisedProductApi.md) |
| `MostWatchedItems` | 1 | [map/operations/MostWatchedItems.md](map/operations/MostWatchedItems.md) |
| `ProductApi` | 1 | [map/operations/ProductApi.md](map/operations/ProductApi.md) |
| `ProductSummaryApi` | 1 | [map/operations/ProductSummaryApi.md](map/operations/ProductSummaryApi.md) |
| `PublicKeyApi` | 1 | [map/operations/PublicKeyApi.md](map/operations/PublicKeyApi.md) |
| `PurchaseOrderApi` | 1 | [map/operations/PurchaseOrderApi.md](map/operations/PurchaseOrderApi.md) |
| `SimilarItems` | 1 | [map/operations/SimilarItems.md](map/operations/SimilarItems.md) |
| `SubscriptionApi` | 11 | [map/operations/SubscriptionApi.md](map/operations/SubscriptionApi.md) |
| `TopicApi` | 2 | [map/operations/TopicApi.md](map/operations/TopicApi.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 433 | [`Access` … `ConvertedAmount18`](map/models/records-1-Ac-Co.md) · [`ConvertedAmount19` … `ItemGroup1`](map/models/records-2-Co-It.md) · [`ItemGroupResponse` … `RelevanceIndicator`](map/models/records-3-It-Re.md) · [`ResponsiblePerson` … `VatDetail`](map/models/records-4-Re-Va.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 0 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 150 | [map/models/enums.md](map/models/enums.md) |
<!-- /gen:models-table -->

Model conventions: records are immutable with `init`-only setters; `required` properties must be set in the
object initializer; nullable (`T?`) properties are optional. Each record field is listed as
`CSharpName (wire_name): Type` — the parenthesized name is the JSON wire name (`[JsonPropertyName]`).
Unions wrap `Optional<T>` variants — construct via a static factory or implicit
conversion, read back via `TryGet…(out …)`. Enums are **not** C# enums — build with `Type.FromValue("wire")`
or the static members (enums.md lists the literal member names: `SomeEnum.SomeMember`, not
`SomeEnum.some_member`).

<!-- gen:namespaces -->
Namespaces by content type (add `using` accordingly):

| Contents | Namespace(s) |
|---|---|
| Client & options (root) | `EbaySell` |
| Operation controllers (`Api/`) | `EbaySell.Api` |
| Records (`Models/`) | `EbaySell.Models` |
| Enums (`Models/Enums/`) | `EbaySell.Models.Enums` |
| Error classes (`Errors/`) | `EbaySell.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `EbaySellClientOptions` (source: `EbaySellClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `ApiAuth` | `OAuth2AuthorizationCodeCredentials?` | The security definitions for this API. Please check individual operations for applicable scopes. |
| `ApiAuthTokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>?` | — |
| `BearerAuth` | `string?` | — |
| `ApiAuth1` | `OAuth2ClientCredentials?` | The security definitions for this API. Please check individual operations for applicable scopes. |
| `ApiAuth1TokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>?` | — |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`, `ServerEnvironment.Environment2`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
