# WebhooksCompanyLevel — operations

Accessor: `client.WebhooksCompanyLevel` · Source: `Api/WebhooksCompanyLevel.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteCompaniesCompanyIdWebhooksWebhookId
- **HTTP**: `DELETE /companies/{companyId}/webhooks/{webhookId}` (Default9 (management-test))
- **Notes**: Remove the configuration for the webhook identified in the path. To make this request, your API credential must have the following roles : * Management API—Webhooks read and write
- **Signature**: `DeleteCompaniesCompanyIdWebhooksWebhookId(string companyId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteCompaniesCompanyIdWebhooksWebhookIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdWebhooks
- **HTTP**: `GET /companies/{companyId}/webhooks` (Default9 (management-test))
- **Notes**: Lists all webhook configurations for the company account. To make this request, your API credential must have one of the following roles : * Management API—Webhooks read * Management API—Webhooks read and write
- **Signature**: `GetCompaniesCompanyIdWebhooks(string companyId, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListWebhooksResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdWebhooksWebhookId
- **HTTP**: `GET /companies/{companyId}/webhooks/{webhookId}` (Default9 (management-test))
- **Notes**: Returns the configuration for the webhook identified in the path. To make this request, your API credential must have one of the following roles : * Management API—Webhooks read * Management API—Webhooks read and write
- **Signature**: `GetCompaniesCompanyIdWebhooksWebhookId(string companyId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Webhook`
- **Error**: `SdkException<GetCompaniesCompanyIdWebhooksWebhookIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchCompaniesCompanyIdWebhooksWebhookId
- **HTTP**: `PATCH /companies/{companyId}/webhooks/{webhookId}` (Default9 (management-test))
- **Notes**: Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request. To make this request, your API credential must have the following roles : * Management API—Webhooks read and write
- **Signature**: `PatchCompaniesCompanyIdWebhooksWebhookId(string companyId, string webhookId, UpdateCompanyWebhookRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Webhook`
- **Error**: `SdkException<PatchCompaniesCompanyIdWebhooksWebhookIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdWebhooks
- **HTTP**: `POST /companies/{companyId}/webhooks` (Default9 (management-test))
- **Notes**: Subscribe to receive webhook notifications about events related to your company account. You can add basic authentication to make sure the data is secure. To make this request, your API credential must have the following roles : * Management API—Webhooks read and write
- **Signature**: `PostCompaniesCompanyIdWebhooks(string companyId, CreateCompanyWebhookRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Webhook`
- **Error**: `SdkException<PostCompaniesCompanyIdWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmac
- **HTTP**: `POST /companies/{companyId}/webhooks/{webhookId}/generateHmac` (Default9 (management-test))
- **Notes**: Returns an HMAC key for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving HMAC-signed notifications from Adyen. Find out more about how to verify HMAC signatures . To make this request, your API credential must have the following roles : * Management API—Webhooks read and write
- **Signature**: `PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmac(string companyId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenerateHmacKeyResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdWebhooksWebhookIdTest
- **HTTP**: `POST /companies/{companyId}/webhooks/{webhookId}/test` (Default9 (management-test))
- **Notes**: Sends sample notifications to test if the webhook is set up correctly. We send sample notifications for maximum 20 of the merchant accounts that the webhook is configured for. If the webhook is configured for more than 20 merchant accounts, use the `merchantIds` array to specify a subset of the merchant accounts for which to send test notifications. We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification. The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other response fields to troubleshoot unsuccessful tests. To make this request, your API credential must have the following roles : * Management API—Webhooks read and write
- **Signature**: `PostCompaniesCompanyIdWebhooksWebhookIdTest(string companyId, string webhookId, TestCompanyWebhookRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TestWebhookResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdWebhooksWebhookIdTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
