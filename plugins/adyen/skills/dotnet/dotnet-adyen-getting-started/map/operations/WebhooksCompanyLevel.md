<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksCompanyLevel — operations

Accessor: `client.WebhooksCompanyLevel` · Source: `Api/WebhooksCompanyLevel.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteCompaniesCompanyIdWebhooksWebhookId
- **Server group**: `Default9`
- **Signature**: `DeleteCompaniesCompanyIdWebhooksWebhookId(string companyId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteCompaniesCompanyIdWebhooksWebhookIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCompaniesCompanyIdWebhooksWebhookIdError` | `Errors/DeleteCompaniesCompanyIdWebhooksWebhookIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdWebhooks
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdWebhooks(string companyId, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListWebhooksResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListWebhooksResponse` | `Models/ListWebhooksResponse.cs` |
| `GetCompaniesCompanyIdWebhooksError` | `Errors/GetCompaniesCompanyIdWebhooksError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdWebhooksWebhookId
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdWebhooksWebhookId(string companyId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Webhook`
- **Error**: `SdkException<GetCompaniesCompanyIdWebhooksWebhookIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Webhook` | `Models/Webhook.cs` |
| `GetCompaniesCompanyIdWebhooksWebhookIdError` | `Errors/GetCompaniesCompanyIdWebhooksWebhookIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchCompaniesCompanyIdWebhooksWebhookId
- **Server group**: `Default9`
- **Signature**: `PatchCompaniesCompanyIdWebhooksWebhookId(string companyId, string webhookId, UpdateCompanyWebhookRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Webhook`
- **Error**: `SdkException<PatchCompaniesCompanyIdWebhooksWebhookIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCompanyWebhookRequest` | `Models/UpdateCompanyWebhookRequest.cs` |
| `Webhook` | `Models/Webhook.cs` |
| `PatchCompaniesCompanyIdWebhooksWebhookIdError` | `Errors/PatchCompaniesCompanyIdWebhooksWebhookIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostCompaniesCompanyIdWebhooks
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdWebhooks(string companyId, CreateCompanyWebhookRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Webhook`
- **Error**: `SdkException<PostCompaniesCompanyIdWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCompanyWebhookRequest` | `Models/CreateCompanyWebhookRequest.cs` |
| `Webhook` | `Models/Webhook.cs` |
| `PostCompaniesCompanyIdWebhooksError` | `Errors/PostCompaniesCompanyIdWebhooksError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmac
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmac(string companyId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GenerateHmacKeyResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GenerateHmacKeyResponse` | `Models/GenerateHmacKeyResponse.cs` |
| `PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError` | `Errors/PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostCompaniesCompanyIdWebhooksWebhookIdTest
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdWebhooksWebhookIdTest(string companyId, string webhookId, TestCompanyWebhookRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TestWebhookResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdWebhooksWebhookIdTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TestCompanyWebhookRequest` | `Models/TestCompanyWebhookRequest.cs` |
| `TestWebhookResponse` | `Models/TestWebhookResponse.cs` |
| `PostCompaniesCompanyIdWebhooksWebhookIdTestError` | `Errors/PostCompaniesCompanyIdWebhooksWebhookIdTestError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

