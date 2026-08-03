# Initialization — operations

Accessor: `client.Initialization` · Source: `Api/Initialization.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostStoreDetail
- **HTTP**: `POST /storeDetail` (Default (balanceplatform-api-test))
- **Notes**: &gt; This endpoint is deprecated and no longer supports new integrations. Do one of the following: &gt;- If you are building a new integration, use the Transfers API instead. &gt; - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API. &gt; &gt; With the Transfers API, you can: &gt; - Handle multiple payout use cases with a single API. &gt; - Use new payout functionalities, such as instant payouts to bank accounts. &gt; - Receive webhooks with more details and defined transfer states. &gt; &gt; For more information about the payout features of the Transfers API, see our Payouts documentation. Stores payment details under the `PAYOUT` recurring contract. These payment details can be used later to submit a payout via the `/submitThirdParty` call.
- **Signature**: `PostStoreDetail(StoreDetailRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `StoreDetailResponse`
- **Error**: `SdkException<PostStoreDetailError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostStoreDetailAndSubmitThirdParty
- **HTTP**: `POST /storeDetailAndSubmitThirdParty` (Default (balanceplatform-api-test))
- **Notes**: &gt; This endpoint is deprecated and no longer supports new integrations. Do one of the following: &gt;- If you are building a new integration, use the POST /transfers endpoint instead. &gt; - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API. &gt; &gt; With the Transfers API, you can: &gt; - Handle multiple payout use cases with a single API. &gt; - Use new payout functionalities, such as instant payouts to bank accounts. &gt; - Receive webhooks with more details and defined transfer states. &gt; &gt; For more information about the payout features of the Transfers API, see our Payouts documentation. Submits a payout and stores its details for subsequent payouts. The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.
- **Signature**: `PostStoreDetailAndSubmitThirdParty(StoreDetailAndSubmitRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `StoreDetailAndSubmitResponse`
- **Error**: `SdkException<PostStoreDetailAndSubmitThirdPartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostSubmitThirdParty
- **HTTP**: `POST /submitThirdParty` (Default (balanceplatform-api-test))
- **Notes**: &gt; This endpoint is deprecated and no longer supports new integrations. Do one of the following: &gt;- If you are building a new integration, use the POST /transfers endpoint instead. &gt; - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API. &gt; &gt; With the Transfers API, you can: &gt; - Handle multiple payout use cases with a single API. &gt; - Use new payout functionalities, such as instant payouts to bank accounts. &gt; - Receive webhooks with more details and defined transfer states. &gt; &gt; For more information about the payout features of the Transfers API, see our Payouts documentation. Submits a payout using the previously stored payment details. To store payment details, use the `/storeDetail` API call. The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.
- **Signature**: `PostSubmitThirdParty(SubmitRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubmitResponse`
- **Error**: `SdkException<PostSubmitThirdPartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
