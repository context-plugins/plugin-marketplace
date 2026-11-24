<!-- Generated file — do not edit; regenerated with the SDK. -->

# Templates — operations

Accessor: `client.Templates` · Source: `src/JuriSign/Api/Templates.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSignRequestFromTemplate

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateSignRequestFromTemplate(CreateSignRequestFromTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `TemplatesSignRequestsResponse`
- **Error**: `ApiException<CreateSignRequestFromTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetValidationError1([NotNullWhen(true)] out ValidationError1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSignRequestFromTemplateRequest` | `src/JuriSign/Requests/Templates/CreateSignRequestFromTemplateRequest.cs` |
| `TemplatesSignRequestsRequest` | `src/JuriSign/Models/TemplatesSignRequestsRequest.cs` |
| `TemplatesSignRequestsResponse` | `src/JuriSign/Models/TemplatesSignRequestsResponse.cs` |
| `CreateSignRequestFromTemplateError` | `src/JuriSign/Errors/CreateSignRequestFromTemplateError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `ValidationError1` | `src/JuriSign/Models/ValidationError1.cs` |

### DeleteTemplate

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteTemplate(DeleteTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTemplateRequest` | `src/JuriSign/Requests/Templates/DeleteTemplateRequest.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `DeleteTemplateError` | `src/JuriSign/Errors/DeleteTemplateError.cs` |

### GetTemplate

- **Auth**: `options.BearerAuth`
- **Signature**: `GetTemplate(GetTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `TemplatesResponse1`
- **Error**: `ApiException<GetTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTemplateRequest` | `src/JuriSign/Requests/Templates/GetTemplateRequest.cs` |
| `TemplatesResponse1` | `src/JuriSign/Models/TemplatesResponse1.cs` |
| `GetTemplateError` | `src/JuriSign/Errors/GetTemplateError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### ListTemplates

- **Auth**: `options.BearerAuth`
- **Signature**: `ListTemplates(ListTemplatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `per_page` ← `PerPage`, `page` ← `Page`
- **Returns**: `TemplatesResponse`
- **Error**: `ApiException<ListTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTemplatesRequest` | `src/JuriSign/Requests/Templates/ListTemplatesRequest.cs` |
| `TemplatesResponse` | `src/JuriSign/Models/TemplatesResponse.cs` |
| `ListTemplatesError` | `src/JuriSign/Errors/ListTemplatesError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

