# WebhooksMerchantLevel — operations

Accessor: `client.WebhooksMerchantLevel` · Source: `Api/WebhooksMerchantLevel.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteMerchantsMerchantIdWebhooksWebhookId
- **HTTP**: `DELETE /merchants/{merchantId}/webhooks/{webhookId}` (Default (balanceplatform-api-test))
- **Notes**: Remove the configuration for the webhook identified in the path. To make this request, your API credential must have the following roles : * Management API—Webhooks read and write
- **Signature**: `DeleteMerchantsMerchantIdWebhooksWebhookId(string merchantId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMerchantsMerchantIdWebhooksWebhookIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdWebhooks
- **HTTP**: `GET /merchants/{merchantId}/webhooks` (Default (balanceplatform-api-test))
- **Notes**: Lists all webhook configurations for the merchant account. &gt; This call does not return webhook configurations for the company account to which the specified merchant account belongs. You can see these in your Customer Area under Developers &gt; Webhooks . To make this request, your API credential must have one of the following roles : * Management API—Webhooks read * Management API—Webhooks read and write
- **Signature**: `GetMerchantsMerchantIdWebhooks(string merchantId, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListWebhooksResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdWebhooksWebhookId
- **HTTP**: `GET /merchants/{merchantId}/webhooks/{webhookId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the configuration for the webhook identified in the path. To make this request, your API credential must have one of the following roles : * Management API—Webhooks read * Management API—Webhooks read and write
- **Signature**: `GetMerchantsMerchantIdWebhooksWebhookId(string merchantId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Webhook`
- **Error**: `SdkException<GetMerchantsMerchantIdWebhooksWebhookIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdWebhooksWebhookId
- **HTTP**: `PATCH /merchants/{merchantId}/webhooks/{webhookId}` (Default (balanceplatform-api-test))
- **Notes**: Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request. To make this request, your API credential must have the following roles : * Management API—Webhooks read and write
- **Signature**: `PatchMerchantsMerchantIdWebhooksWebhookId(string merchantId, string webhookId, UpdateMerchantWebhookRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Webhook`
- **Error**: `SdkException<PatchMerchantsMerchantIdWebhooksWebhookIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdWebhooks
- **HTTP**: `POST /merchants/{merchantId}/webhooks` (Default (balanceplatform-api-test))
- **Notes**: Subscribe to receive webhook notifications about events related to your merchant account. You can add basic authentication to make sure the data is secure. To make this request, your API credential must have the following roles : * Management API—Webhooks read and write
- **Signature**: `PostMerchantsMerchantIdWebhooks(string merchantId, CreateMerchantWebhookRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Webhook`
- **Error**: `SdkException<PostMerchantsMerchantIdWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmac
- **HTTP**: `POST /merchants/{merchantId}/webhooks/{webhookId}/generateHmac` (Default (balanceplatform-api-test))
- **Notes**: Returns an HMAC key for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving HMAC-signed notifications from Adyen. Find out more about how to verify HMAC signatures . To make this request, your API credential must have the following roles : * Management API—Webhooks read and write
- **Signature**: `PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmac(string merchantId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenerateHmacKeyResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdWebhooksWebhookIdTest
- **HTTP**: `POST /merchants/{merchantId}/webhooks/{webhookId}/test` (Default (balanceplatform-api-test))
- **Notes**: Sends sample notifications to test if the webhook is set up correctly. We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification. The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other fields to troubleshoot unsuccessful tests. To make this request, your API credential must have the following roles : * Management API—Webhooks read and write
- **Signature**: `PostMerchantsMerchantIdWebhooksWebhookIdTest(string merchantId, string webhookId, TestWebhookRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TestWebhookResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdWebhooksWebhookIdTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
