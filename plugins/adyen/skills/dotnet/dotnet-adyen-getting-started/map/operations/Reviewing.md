# Reviewing — operations

Accessor: `client.Reviewing` · Source: `Api/Reviewing.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostConfirmThirdParty
- **HTTP**: `POST /confirmThirdParty` (Default (balanceplatform-api-test))
- **Notes**: &gt; This endpoint is deprecated and no longer supports new integrations. Do one of the following: &gt;- If you are building a new integration, use the Transfers API instead. &gt; - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API. &gt; &gt; With the Transfers API, you can: &gt; - Handle multiple payout use cases with a single API. &gt; - Use new payout functionalities, such as instant payouts to bank accounts. &gt; - Receive webhooks with more details and defined transfer states. &gt; &gt; For more information about the payout features of the Transfers API, see our Payouts documentation. Confirms a previously submitted payout. To cancel a payout, use the `/declineThirdParty` endpoint.
- **Signature**: `PostConfirmThirdParty(ModifyRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ModifyResponse`
- **Error**: `SdkException<PostConfirmThirdPartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDeclineThirdParty
- **HTTP**: `POST /declineThirdParty` (Default (balanceplatform-api-test))
- **Notes**: &gt; This endpoint is deprecated and no longer supports new integrations. Do one of the following: &gt;- If you are building a new integration, use the Transfers API instead. &gt; - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API. &gt; &gt; With the Transfers API, you can: &gt; - Handle multiple payout use cases with a single API. &gt; - Use new payout functionalities, such as instant payouts to bank accounts. &gt; - Receive webhooks with more details and defined transfer states. &gt; &gt; For more information about the payout features of the Transfers API, see our Payouts documentation. Cancels a previously submitted payout. To confirm and send a payout, use the `/confirmThirdParty` endpoint.
- **Signature**: `PostDeclineThirdParty(ModifyRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ModifyResponse`
- **Error**: `SdkException<PostDeclineThirdPartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
