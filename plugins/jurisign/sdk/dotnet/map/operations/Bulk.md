<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bulk — operations

Accessor: `client.Bulk` · Source: `src/JuriSign/Api/Bulk.cs` · 13 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelBulkCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `CancelBulkCampaign(CancelBulkCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BulkCampaignsCancelResponse`
- **Error**: `ApiException<CancelBulkCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelBulkCampaignRequest` | `src/JuriSign/Requests/Bulk/CancelBulkCampaignRequest.cs` |
| `BulkCampaignsCancelResponse` | `src/JuriSign/Models/BulkCampaignsCancelResponse.cs` |
| `CancelBulkCampaignError` | `src/JuriSign/Errors/CancelBulkCampaignError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### CreateBulkCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateBulkCampaign(CreateBulkCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BulkCampaignsResponse1`
- **Error**: `ApiException<CreateBulkCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401] · `TryGetValidationError1([NotNullWhen(true)] out ValidationError1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBulkCampaignRequest` | `src/JuriSign/Requests/Bulk/CreateBulkCampaignRequest.cs` |
| `BulkCampaignsRequest` | `src/JuriSign/Models/BulkCampaignsRequest.cs` |
| `BulkCampaignsResponse1` | `src/JuriSign/Models/BulkCampaignsResponse1.cs` |
| `CreateBulkCampaignError` | `src/JuriSign/Errors/CreateBulkCampaignError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `ValidationError1` | `src/JuriSign/Models/ValidationError1.cs` |

### CreateBulkTemplate

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateBulkTemplate(CreateBulkTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BulkTemplatesResponse1`
- **Error**: `ApiException<CreateBulkTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401] · `TryGetValidationError1([NotNullWhen(true)] out ValidationError1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBulkTemplateRequest` | `src/JuriSign/Requests/Bulk/CreateBulkTemplateRequest.cs` |
| `BulkTemplatesRequest` | `src/JuriSign/Models/BulkTemplatesRequest.cs` |
| `BulkTemplatesResponse1` | `src/JuriSign/Models/BulkTemplatesResponse1.cs` |
| `CreateBulkTemplateError` | `src/JuriSign/Errors/CreateBulkTemplateError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `ValidationError1` | `src/JuriSign/Models/ValidationError1.cs` |

### DeleteBulkCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteBulkCampaign(DeleteBulkCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteBulkCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBulkCampaignRequest` | `src/JuriSign/Requests/Bulk/DeleteBulkCampaignRequest.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `DeleteBulkCampaignError` | `src/JuriSign/Errors/DeleteBulkCampaignError.cs` |

### DeleteBulkTemplate

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteBulkTemplate(DeleteBulkTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteBulkTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBulkTemplateRequest` | `src/JuriSign/Requests/Bulk/DeleteBulkTemplateRequest.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `DeleteBulkTemplateError` | `src/JuriSign/Errors/DeleteBulkTemplateError.cs` |

### ExportBulkCampaignResults

- **Auth**: `options.BearerAuth`
- **Signature**: `ExportBulkCampaignResults(ExportBulkCampaignResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BulkCampaignsExportResponse`
- **Error**: `ApiException<ExportBulkCampaignResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExportBulkCampaignResultsRequest` | `src/JuriSign/Requests/Bulk/ExportBulkCampaignResultsRequest.cs` |
| `BulkCampaignsExportResponse` | `src/JuriSign/Models/BulkCampaignsExportResponse.cs` |
| `ExportBulkCampaignResultsError` | `src/JuriSign/Errors/ExportBulkCampaignResultsError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### GetBulkCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBulkCampaign(GetBulkCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BulkCampaignsResponse2`
- **Error**: `ApiException<GetBulkCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBulkCampaignRequest` | `src/JuriSign/Requests/Bulk/GetBulkCampaignRequest.cs` |
| `BulkCampaignsResponse2` | `src/JuriSign/Models/BulkCampaignsResponse2.cs` |
| `GetBulkCampaignError` | `src/JuriSign/Errors/GetBulkCampaignError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### GetBulkTemplate

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBulkTemplate(GetBulkTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BulkTemplatesResponse1`
- **Error**: `ApiException<GetBulkTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBulkTemplateRequest` | `src/JuriSign/Requests/Bulk/GetBulkTemplateRequest.cs` |
| `BulkTemplatesResponse1` | `src/JuriSign/Models/BulkTemplatesResponse1.cs` |
| `GetBulkTemplateError` | `src/JuriSign/Errors/GetBulkTemplateError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### LaunchBulkCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `LaunchBulkCampaign(LaunchBulkCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BulkCampaignsLaunchResponse`
- **Error**: `ApiException<LaunchBulkCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LaunchBulkCampaignRequest` | `src/JuriSign/Requests/Bulk/LaunchBulkCampaignRequest.cs` |
| `BulkCampaignsLaunchResponse` | `src/JuriSign/Models/BulkCampaignsLaunchResponse.cs` |
| `LaunchBulkCampaignError` | `src/JuriSign/Errors/LaunchBulkCampaignError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### ListBulkCampaigns

- **Auth**: `options.BearerAuth`
- **Signature**: `ListBulkCampaigns(ListBulkCampaignsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `per_page` ← `PerPage`
- **Returns**: `BulkCampaignsResponse`
- **Error**: `ApiException<ListBulkCampaignsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBulkCampaignsRequest` | `src/JuriSign/Requests/Bulk/ListBulkCampaignsRequest.cs` |
| `BulkCampaignsResponse` | `src/JuriSign/Models/BulkCampaignsResponse.cs` |
| `ListBulkCampaignsError` | `src/JuriSign/Errors/ListBulkCampaignsError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### ListBulkTemplates

- **Auth**: `options.BearerAuth`
- **Signature**: `ListBulkTemplates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BulkTemplatesResponse`
- **Error**: `ApiException<ListBulkTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkTemplatesResponse` | `src/JuriSign/Models/BulkTemplatesResponse.cs` |
| `ListBulkTemplatesError` | `src/JuriSign/Errors/ListBulkTemplatesError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### RetryBulkCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `RetryBulkCampaign(RetryBulkCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BulkCampaignsRetryResponse`
- **Error**: `ApiException<RetryBulkCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetryBulkCampaignRequest` | `src/JuriSign/Requests/Bulk/RetryBulkCampaignRequest.cs` |
| `BulkCampaignsRetryResponse` | `src/JuriSign/Models/BulkCampaignsRetryResponse.cs` |
| `RetryBulkCampaignError` | `src/JuriSign/Errors/RetryBulkCampaignError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### UpdateBulkTemplate

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateBulkTemplate(UpdateBulkTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BulkTemplatesResponse1`
- **Error**: `ApiException<UpdateBulkTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBulkTemplateRequest` | `src/JuriSign/Requests/Bulk/UpdateBulkTemplateRequest.cs` |
| `BulkTemplatesRequest1` | `src/JuriSign/Models/BulkTemplatesRequest1.cs` |
| `BulkTemplatesResponse1` | `src/JuriSign/Models/BulkTemplatesResponse1.cs` |
| `UpdateBulkTemplateError` | `src/JuriSign/Errors/UpdateBulkTemplateError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

