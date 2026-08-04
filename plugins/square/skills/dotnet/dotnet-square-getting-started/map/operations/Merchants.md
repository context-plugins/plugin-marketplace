# Merchants — operations

Accessor: `client.Merchants` · Source: `Api/Merchants.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListMerchants
- **HTTP**: `GET /v2/merchants` (Default (connect))
- **Notes**: Provides details about the merchant associated with a given access token. The access token used to connect your application to a Square seller is associated with a single merchant. That means that `ListMerchants` returns a list with a single `Merchant` object. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the merchant that granted your application access. If you know the merchant ID, you can also use the RetrieveMerchant endpoint to retrieve the merchant information.
- **Signature**: `ListMerchants(int? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`
- **Returns**: `ListMerchantsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveMerchant
- **HTTP**: `GET /v2/merchants/{merchant_id}` (Default (connect))
- **Notes**: Retrieves the `Merchant` object for the given `merchant_id`.
- **Signature**: `RetrieveMerchant(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveMerchantResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
