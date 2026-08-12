# SDK map — square (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | square |
| Root namespace/module | `Square` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `dc3d98b` (`dc3d98bb5c8e3b4f45f75141f14a51ba2976b45a`, tagged `dc3d98b`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/square-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using Square;
using Square.Servers; // ServerEnvironment lives here

var options = new SquareClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new SquareClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddSquareClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`SquareClient.cs`.

<!-- crawler:client-options -->
All `SquareClientOptions` properties (source: `SquareClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `Oauth2` | `OAuth2AuthorizationCodeCredentials?` |
| `Oauth2TokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>?` |
| `Oauth2ClientSecret` | `string?` |

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

- `SquareClient(HttpClient httpClient, SquareClientOptions options)`
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
| `ApiError` — abstract base of all 0 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **334 operations**, **0 are Case A (typed)** and **334 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (43 groups, 334 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `ApplePay` | 1 | [map/operations/ApplePay.md](map/operations/ApplePay.md) |
| `BankAccounts` | 5 | [map/operations/BankAccounts.md](map/operations/BankAccounts.md) |
| `BookingCustomAttributes` | 11 | [map/operations/BookingCustomAttributes.md](map/operations/BookingCustomAttributes.md) |
| `Bookings` | 13 | [map/operations/Bookings.md](map/operations/Bookings.md) |
| `Cards` | 4 | [map/operations/Cards.md](map/operations/Cards.md) |
| `CashDrawers` | 3 | [map/operations/CashDrawers.md](map/operations/CashDrawers.md) |
| `Catalog` | 14 | [map/operations/Catalog.md](map/operations/Catalog.md) |
| `Channels` | 3 | [map/operations/Channels.md](map/operations/Channels.md) |
| `CheckoutApi` | 10 | [map/operations/CheckoutApi.md](map/operations/CheckoutApi.md) |
| `CustomerCustomAttributes` | 10 | [map/operations/CustomerCustomAttributes.md](map/operations/CustomerCustomAttributes.md) |
| `CustomerGroups` | 5 | [map/operations/CustomerGroups.md](map/operations/CustomerGroups.md) |
| `Customers` | 14 | [map/operations/Customers.md](map/operations/Customers.md) |
| `CustomerSegments` | 2 | [map/operations/CustomerSegments.md](map/operations/CustomerSegments.md) |
| `Devices` | 5 | [map/operations/Devices.md](map/operations/Devices.md) |
| `Disputes` | 9 | [map/operations/Disputes.md](map/operations/Disputes.md) |
| `Employees` | 2 | [map/operations/Employees.md](map/operations/Employees.md) |
| `Events` | 4 | [map/operations/Events.md](map/operations/Events.md) |
| `GiftCardActivities` | 2 | [map/operations/GiftCardActivities.md](map/operations/GiftCardActivities.md) |
| `GiftCards` | 7 | [map/operations/GiftCards.md](map/operations/GiftCards.md) |
| `Inventory` | 19 | [map/operations/Inventory.md](map/operations/Inventory.md) |
| `Invoices` | 10 | [map/operations/Invoices.md](map/operations/Invoices.md) |
| `Labor` | 27 | [map/operations/Labor.md](map/operations/Labor.md) |
| `LocationCustomAttributes` | 11 | [map/operations/LocationCustomAttributes.md](map/operations/LocationCustomAttributes.md) |
| `Locations` | 4 | [map/operations/Locations.md](map/operations/Locations.md) |
| `Loyalty` | 18 | [map/operations/Loyalty.md](map/operations/Loyalty.md) |
| `MerchantCustomAttributes` | 11 | [map/operations/MerchantCustomAttributes.md](map/operations/MerchantCustomAttributes.md) |
| `Merchants` | 2 | [map/operations/Merchants.md](map/operations/Merchants.md) |
| `Oauth` | 3 | [map/operations/Oauth.md](map/operations/Oauth.md) |
| `OrderCustomAttributes` | 11 | [map/operations/OrderCustomAttributes.md](map/operations/OrderCustomAttributes.md) |
| `Orders` | 8 | [map/operations/Orders.md](map/operations/Orders.md) |
| `Payments` | 7 | [map/operations/Payments.md](map/operations/Payments.md) |
| `Payouts` | 3 | [map/operations/Payouts.md](map/operations/Payouts.md) |
| `Refunds` | 3 | [map/operations/Refunds.md](map/operations/Refunds.md) |
| `Sites` | 1 | [map/operations/Sites.md](map/operations/Sites.md) |
| `Snippets` | 3 | [map/operations/Snippets.md](map/operations/Snippets.md) |
| `Subscriptions` | 12 | [map/operations/Subscriptions.md](map/operations/Subscriptions.md) |
| `Team` | 12 | [map/operations/Team.md](map/operations/Team.md) |
| `Terminal` | 15 | [map/operations/Terminal.md](map/operations/Terminal.md) |
| `Transactions` | 4 | [map/operations/Transactions.md](map/operations/Transactions.md) |
| `TransferOrderApi` | 8 | [map/operations/TransferOrderApi.md](map/operations/TransferOrderApi.md) |
| `V1Transactions` | 3 | [map/operations/V1Transactions.md](map/operations/V1Transactions.md) |
| `Vendors` | 7 | [map/operations/Vendors.md](map/operations/Vendors.md) |
| `WebhookSubscriptions` | 8 | [map/operations/WebhookSubscriptions.md](map/operations/WebhookSubscriptions.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 1271 | [`AcceptDisputeResponse` … `CaptureTransactionResponse`](map/models/records-1-Ac-Ca.md) · [`Card` … `CreateCustomerCardResponse`](map/models/records-2-Ca-Cr.md) · [`CreateCustomerCustomAttributeDefinitionRequest` … `DeleteSnippetResponse`](map/models/records-3-Cr-De.md) · [`DeleteSubscriptionActionResponse` … `InvoicePaymentReminder`](map/models/records-4-De-In.md) · [`InvoicePaymentRequest` … `LoyaltyProgram`](map/models/records-5-In-Lo.md) · [`LoyaltyProgramAccrualRule` … `PaymentBalanceActivitySquarePayrollTransferReversedDetail`](map/models/records-6-Lo-Pa.md) · [`PaymentBalanceActivityTaxOnFeeDetail` … `SearchTeamMembersQuery`](map/models/records-7-Pa-Se.md) · [`SearchTeamMembersRequest` … `UpdateSubscriptionRequest`](map/models/records-8-Se-Up.md) · [`UpdateSubscriptionResponse` … `WorkweekConfig`](map/models/records-9-Up-Wo.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 0 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 203 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `Square` |
| Operation controllers (`Api/`) | `Square.Api` |
| Records (`Models/`) | `Square.Models` |
| Enums (`Models/Enums/`) | `Square.Models.Enums` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `SquareClientOptions` (source: `SquareClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `Oauth2` | `OAuth2AuthorizationCodeCredentials?` | — |
| `Oauth2TokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>?` | — |
| `Oauth2ClientSecret` | `string?` | — |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`, `ServerEnvironment.Sandbox`, `ServerEnvironment.Custom`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
