# SDK map — Maxio Advanced Billing (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | Maxio Advanced Billing |
| Root namespace/module | `MaxioAdvancedBilling` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `fd8b80b` (`fd8b80b3f81ded27957732509d867f1bf77e416a`, tagged `fd8b80b`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/maxio-advanced-billing-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using MaxioAdvancedBilling;
using MaxioAdvancedBilling.Servers; // ServerEnvironment lives here

var options = new MaxioAdvancedBillingClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new MaxioAdvancedBillingClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddMaxioAdvancedBillingClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`MaxioAdvancedBillingClient.cs`.

<!-- crawler:client-options -->
All `MaxioAdvancedBillingClientOptions` properties (source: `MaxioAdvancedBillingClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `BasicAuth` | `BasicAuthCredentials?` |
| `BearerAuth` | `string?` |

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

- `MaxioAdvancedBillingClient(HttpClient httpClient, MaxioAdvancedBillingClientOptions options)`
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
| `ApiError` — abstract base of all 166 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **250 operations**, **166 are Case A (typed)** and **84 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (34 groups, 250 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `AdvanceInvoice` | 3 | [map/operations/AdvanceInvoice.md](map/operations/AdvanceInvoice.md) |
| `ApiExports` | 9 | [map/operations/ApiExports.md](map/operations/ApiExports.md) |
| `BillingPortal` | 4 | [map/operations/BillingPortal.md](map/operations/BillingPortal.md) |
| `ComponentPricePoints` | 12 | [map/operations/ComponentPricePoints.md](map/operations/ComponentPricePoints.md) |
| `Components` | 12 | [map/operations/Components.md](map/operations/Components.md) |
| `Coupons` | 14 | [map/operations/Coupons.md](map/operations/Coupons.md) |
| `Customers` | 7 | [map/operations/Customers.md](map/operations/Customers.md) |
| `CustomFields` | 9 | [map/operations/CustomFields.md](map/operations/CustomFields.md) |
| `Events` | 3 | [map/operations/Events.md](map/operations/Events.md) |
| `EventsBasedBillingSegments` | 6 | [map/operations/EventsBasedBillingSegments.md](map/operations/EventsBasedBillingSegments.md) |
| `Insights` | 4 | [map/operations/Insights.md](map/operations/Insights.md) |
| `Invoices` | 19 | [map/operations/Invoices.md](map/operations/Invoices.md) |
| `MaxioGateway` | 1 | [map/operations/MaxioGateway.md](map/operations/MaxioGateway.md) |
| `Offers` | 5 | [map/operations/Offers.md](map/operations/Offers.md) |
| `PaymentProfiles` | 12 | [map/operations/PaymentProfiles.md](map/operations/PaymentProfiles.md) |
| `ProductFamilies` | 4 | [map/operations/ProductFamilies.md](map/operations/ProductFamilies.md) |
| `ProductPricePoints` | 11 | [map/operations/ProductPricePoints.md](map/operations/ProductPricePoints.md) |
| `Products` | 6 | [map/operations/Products.md](map/operations/Products.md) |
| `ProformaInvoices` | 10 | [map/operations/ProformaInvoices.md](map/operations/ProformaInvoices.md) |
| `ReasonCodes` | 5 | [map/operations/ReasonCodes.md](map/operations/ReasonCodes.md) |
| `ReferralCodes` | 1 | [map/operations/ReferralCodes.md](map/operations/ReferralCodes.md) |
| `SalesCommissions` | 3 | [map/operations/SalesCommissions.md](map/operations/SalesCommissions.md) |
| `Sites` | 3 | [map/operations/Sites.md](map/operations/Sites.md) |
| `SubscriptionComponents` | 17 | [map/operations/SubscriptionComponents.md](map/operations/SubscriptionComponents.md) |
| `SubscriptionGroupInvoiceAccount` | 4 | [map/operations/SubscriptionGroupInvoiceAccount.md](map/operations/SubscriptionGroupInvoiceAccount.md) |
| `SubscriptionGroups` | 9 | [map/operations/SubscriptionGroups.md](map/operations/SubscriptionGroups.md) |
| `SubscriptionGroupStatus` | 4 | [map/operations/SubscriptionGroupStatus.md](map/operations/SubscriptionGroupStatus.md) |
| `SubscriptionInvoiceAccount` | 7 | [map/operations/SubscriptionInvoiceAccount.md](map/operations/SubscriptionInvoiceAccount.md) |
| `SubscriptionNotes` | 5 | [map/operations/SubscriptionNotes.md](map/operations/SubscriptionNotes.md) |
| `SubscriptionProducts` | 2 | [map/operations/SubscriptionProducts.md](map/operations/SubscriptionProducts.md) |
| `SubscriptionRenewals` | 11 | [map/operations/SubscriptionRenewals.md](map/operations/SubscriptionRenewals.md) |
| `Subscriptions` | 12 | [map/operations/Subscriptions.md](map/operations/Subscriptions.md) |
| `SubscriptionStatus` | 10 | [map/operations/SubscriptionStatus.md](map/operations/SubscriptionStatus.md) |
| `Webhooks` | 6 | [map/operations/Webhooks.md](map/operations/Webhooks.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 564 | [`AccountBalance` … `CreateSegmentRequest`](map/models/records-1-Ac-Cr.md) · [`CreateSubscription` … `MrrResponse`](map/models/records-2-Cr-Mr.md) · [`MultiInvoicePayment` … `SubscriptionComponent`](map/models/records-3-Mu-Su.md) · [`SubscriptionComponentAllocationError` … `WebhookResponse`](map/models/records-4-Su-We.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 7 + 89 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 98 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `MaxioAdvancedBilling` |
| Operation controllers (`Api/`) | `MaxioAdvancedBilling.Api` |
| Records (`Models/`) | `MaxioAdvancedBilling.Models` |
| Enums (`Models/Enums/`) | `MaxioAdvancedBilling.Models.Enums` |
| Unions (`Models/AnyOf/`, `Models/OneOf/`) | `MaxioAdvancedBilling.Models.AnyOf` · `MaxioAdvancedBilling.Models.OneOf` |
| Error classes (`Errors/`) | `MaxioAdvancedBilling.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `MaxioAdvancedBillingClientOptions` (source: `MaxioAdvancedBillingClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `BasicAuth` | `BasicAuthCredentials?` | The <c>username</c> is a Maxio Chargify API key and the <c>password</c> is <c>x</c>. Basic authentication works only with the US and EU environments, which connect to <c>chargify.com</c> directly. The Maxio API Gateway environment does not accept Basic authentication. |
| `BearerAuth` | `string?` | A Maxio API Gateway connector token — the only authentication the gateway accepts. Use it with the Maxio API Gateway environment. This token is issued by your connector and is separate from your Chargify API key. Depending on how the connector was created, it is either a static connector API token you copy from your connector settings (long-lived, valid until you rotate it) or an access token you obtain by exchanging OAuth2 client credentials at <c>https://&lt;connector&gt;.api.maxio.com/oauth/token</c>. |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Us`, `ServerEnvironment.Eu`, `ServerEnvironment.MaxioApiGateway`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
