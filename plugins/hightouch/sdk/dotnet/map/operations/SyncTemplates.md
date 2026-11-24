<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncTemplates — operations

Accessor: `client.SyncTemplates` · Source: `src/Hightouch/Api/SyncTemplates.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSyncTemplate

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateSyncTemplate(CreateSyncTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SyncTemplatesResponse1`
- **Error**: `ApiException<CreateSyncTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSyncTemplateRequest` | `src/Hightouch/Requests/SyncTemplates/CreateSyncTemplateRequest.cs` |
| `SyncTemplateCreate` | `src/Hightouch/Models/SyncTemplateCreate.cs` |
| `SyncTemplatesResponse1` | `src/Hightouch/Models/AnyOf/SyncTemplatesResponse1.cs` |
| `CreateSyncTemplateError` | `src/Hightouch/Errors/CreateSyncTemplateError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### GetSyncTemplate

- **Auth**: `options.BearerAuth`
- **Signature**: `GetSyncTemplate(GetSyncTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncTemplateId`
- **Returns**: `SyncTemplate`
- **Error**: `ApiException<GetSyncTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSyncTemplateRequest` | `src/Hightouch/Requests/SyncTemplates/GetSyncTemplateRequest.cs` |
| `SyncTemplate` | `src/Hightouch/Models/SyncTemplate.cs` |
| `GetSyncTemplateError` | `src/Hightouch/Errors/GetSyncTemplateError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### ListSyncTemplates

- **Auth**: `options.BearerAuth`
- **Signature**: `ListSyncTemplates(ListSyncTemplatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`, `offset` ← `Offset`, `limit` ← `Limit`, `orderBy` ← `OrderBy`
- **Returns**: `SyncTemplatesResponse`
- **Error**: `ApiException<ListSyncTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSyncTemplatesRequest` | `src/Hightouch/Requests/SyncTemplates/ListSyncTemplatesRequest.cs` |
| `OrderByHightouchEventsApi` | `src/Hightouch/Models/Enums/OrderByHightouchEventsApi.cs` |
| `SyncTemplatesResponse` | `src/Hightouch/Models/SyncTemplatesResponse.cs` |
| `ListSyncTemplatesError` | `src/Hightouch/Errors/ListSyncTemplatesError.cs` |

### UpdateSyncTemplate

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateSyncTemplate(UpdateSyncTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncTemplateId`, `Body`
- **Returns**: `SyncTemplatesResponse1`
- **Error**: `ApiException<UpdateSyncTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSyncTemplateRequest` | `src/Hightouch/Requests/SyncTemplates/UpdateSyncTemplateRequest.cs` |
| `SyncTemplateUpdate` | `src/Hightouch/Models/SyncTemplateUpdate.cs` |
| `SyncTemplatesResponse1` | `src/Hightouch/Models/AnyOf/SyncTemplatesResponse1.cs` |
| `UpdateSyncTemplateError` | `src/Hightouch/Errors/UpdateSyncTemplateError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

