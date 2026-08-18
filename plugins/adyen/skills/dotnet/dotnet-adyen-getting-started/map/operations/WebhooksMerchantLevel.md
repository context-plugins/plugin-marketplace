<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksMerchantLevel — operations

Accessor: `client.WebhooksMerchantLevel` · Source: `Api/WebhooksMerchantLevel.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteMerchantsMerchantIdWebhooksWebhookId
- **Server group**: `Default9`
- **Signature**: `DeleteMerchantsMerchantIdWebhooksWebhookId(string merchantId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMerchantsMerchantIdWebhooksWebhookIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMerchantsMerchantIdWebhooksWebhookIdError` | `Errors/DeleteMerchantsMerchantIdWebhooksWebhookIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdWebhooks
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdWebhooks(string merchantId, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListWebhooksResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListWebhooksResponse` | `Models/ListWebhooksResponse.cs` |
| `GetMerchantsMerchantIdWebhooksError` | `Errors/GetMerchantsMerchantIdWebhooksError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdWebhooksWebhookId
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdWebhooksWebhookId(string merchantId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Webhook`
- **Error**: `SdkException<GetMerchantsMerchantIdWebhooksWebhookIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Webhook` | `Models/Webhook.cs` |
| `GetMerchantsMerchantIdWebhooksWebhookIdError` | `Errors/GetMerchantsMerchantIdWebhooksWebhookIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdWebhooksWebhookId
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdWebhooksWebhookId(string merchantId, string webhookId, UpdateMerchantWebhookRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Webhook`
- **Error**: `SdkException<PatchMerchantsMerchantIdWebhooksWebhookIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMerchantWebhookRequest` | `Models/UpdateMerchantWebhookRequest.cs` |
| `Webhook` | `Models/Webhook.cs` |
| `PatchMerchantsMerchantIdWebhooksWebhookIdError` | `Errors/PatchMerchantsMerchantIdWebhooksWebhookIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdWebhooks
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdWebhooks(string merchantId, CreateMerchantWebhookRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Webhook`
- **Error**: `SdkException<PostMerchantsMerchantIdWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMerchantWebhookRequest` | `Models/CreateMerchantWebhookRequest.cs` |
| `Webhook` | `Models/Webhook.cs` |
| `PostMerchantsMerchantIdWebhooksError` | `Errors/PostMerchantsMerchantIdWebhooksError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmac
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmac(string merchantId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GenerateHmacKeyResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GenerateHmacKeyResponse` | `Models/GenerateHmacKeyResponse.cs` |
| `PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError` | `Errors/PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdWebhooksWebhookIdTest
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdWebhooksWebhookIdTest(string merchantId, string webhookId, TestWebhookRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TestWebhookResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdWebhooksWebhookIdTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TestWebhookRequest` | `Models/TestWebhookRequest.cs` |
| `TestWebhookResponse` | `Models/TestWebhookResponse.cs` |
| `PostMerchantsMerchantIdWebhooksWebhookIdTestError` | `Errors/PostMerchantsMerchantIdWebhooksWebhookIdTestError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

