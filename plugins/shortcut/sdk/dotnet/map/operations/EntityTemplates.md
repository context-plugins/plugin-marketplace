<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntityTemplates — operations

Accessor: `client.EntityTemplates` · Source: `src/Shortcut/Api/EntityTemplates.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEntityTemplate

- **Auth**: `options.ApiToken`
- **Signature**: `CreateEntityTemplate(CreateEntityTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EntityTemplate`
- **Error**: `ApiException<CreateEntityTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEntityTemplateRequest` | `src/Shortcut/Requests/EntityTemplates/CreateEntityTemplateRequest.cs` |
| `CreateEntityTemplate` | `src/Shortcut/Models/CreateEntityTemplate.cs` |
| `EntityTemplate` | `src/Shortcut/Models/EntityTemplate.cs` |
| `CreateEntityTemplateError` | `src/Shortcut/Errors/CreateEntityTemplateError.cs` |

### DeleteEntityTemplate

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteEntityTemplate(DeleteEntityTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EntityTemplatePublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteEntityTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEntityTemplateRequest` | `src/Shortcut/Requests/EntityTemplates/DeleteEntityTemplateRequest.cs` |
| `DeleteEntityTemplateError` | `src/Shortcut/Errors/DeleteEntityTemplateError.cs` |

### DisableStoryTemplates

- **Auth**: `options.ApiToken`
- **Signature**: `DisableStoryTemplates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DisableStoryTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisableStoryTemplatesError` | `src/Shortcut/Errors/DisableStoryTemplatesError.cs` |

### EnableStoryTemplates

- **Auth**: `options.ApiToken`
- **Signature**: `EnableStoryTemplates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<EnableStoryTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnableStoryTemplatesError` | `src/Shortcut/Errors/EnableStoryTemplatesError.cs` |

### GetEntityTemplate

- **Auth**: `options.ApiToken`
- **Signature**: `GetEntityTemplate(GetEntityTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EntityTemplatePublicId`
- **Returns**: `EntityTemplate`
- **Error**: `ApiException<GetEntityTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEntityTemplateRequest` | `src/Shortcut/Requests/EntityTemplates/GetEntityTemplateRequest.cs` |
| `EntityTemplate` | `src/Shortcut/Models/EntityTemplate.cs` |
| `GetEntityTemplateError` | `src/Shortcut/Errors/GetEntityTemplateError.cs` |

### ListEntityTemplates

- **Auth**: `options.ApiToken`
- **Signature**: `ListEntityTemplates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<EntityTemplate>`
- **Error**: `ApiException<ListEntityTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EntityTemplate` | `src/Shortcut/Models/EntityTemplate.cs` |
| `ListEntityTemplatesError` | `src/Shortcut/Errors/ListEntityTemplatesError.cs` |

### UpdateEntityTemplate

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateEntityTemplate(UpdateEntityTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EntityTemplatePublicId`, `Body`
- **Returns**: `EntityTemplate`
- **Error**: `ApiException<UpdateEntityTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateEntityTemplateRequest` | `src/Shortcut/Requests/EntityTemplates/UpdateEntityTemplateRequest.cs` |
| `UpdateEntityTemplate` | `src/Shortcut/Models/UpdateEntityTemplate.cs` |
| `EntityTemplate` | `src/Shortcut/Models/EntityTemplate.cs` |
| `UpdateEntityTemplateError` | `src/Shortcut/Errors/UpdateEntityTemplateError.cs` |

