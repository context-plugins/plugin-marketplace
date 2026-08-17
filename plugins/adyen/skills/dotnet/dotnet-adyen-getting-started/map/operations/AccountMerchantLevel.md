# AccountMerchantLevel — operations

Accessor: `client.AccountMerchantLevel` · Source: `Api/AccountMerchantLevel.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMerchants
- **HTTP**: `GET /merchants` (Default9 (management-test))
- **Notes**: Returns the list of merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters. To make this request, your API credential must have the following roles : * Management API—Account read
- **Signature**: `GetMerchants(int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListMerchantResponse`
- **Error**: `SdkException<GetMerchantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantId
- **HTTP**: `GET /merchants/{merchantId}` (Default9 (management-test))
- **Notes**: Returns the merchant account specified in the path. Your API credential must have access to the merchant account. To make this request, your API credential must have the following roles : * Management API—Account read
- **Signature**: `GetMerchantsMerchantId(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Merchant`
- **Error**: `SdkException<GetMerchantsMerchantIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchants
- **HTTP**: `POST /merchants` (Default9 (management-test))
- **Notes**: Creates a merchant account for the company account specified in the request. Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access. To make this request, your API credential must have the following roles : * Management API—Accounts read and write
- **Signature**: `PostMerchants(CreateMerchantRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateMerchantResponse`
- **Error**: `SdkException<PostMerchantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdActivate
- **HTTP**: `POST /merchants/{merchantId}/activate` (Default9 (management-test))
- **Notes**: Sends a request to activate the merchant account identified in the path. You get the result of the activation asynchronously through a `merchant.updated` webhook. Once the merchant account is activated, you can start using it to accept payments and payouts. Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access. To make this request, your API credential must have the following roles : * Management API—Accounts read and write
- **Signature**: `PostMerchantsMerchantIdActivate(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RequestActivationResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdActivateError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
