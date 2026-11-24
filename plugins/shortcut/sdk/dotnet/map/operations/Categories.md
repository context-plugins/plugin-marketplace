<!-- Generated file — do not edit; regenerated with the SDK. -->

# Categories — operations

Accessor: `client.Categories` · Source: `src/Shortcut/Api/Categories.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCategory

- **Auth**: `options.ApiToken`
- **Signature**: `CreateCategory(CreateCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Category`
- **Error**: `ApiException<CreateCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCategoryRequest` | `src/Shortcut/Requests/Categories/CreateCategoryRequest.cs` |
| `CreateCategory` | `src/Shortcut/Models/CreateCategory.cs` |
| `Category` | `src/Shortcut/Models/Category.cs` |
| `CreateCategoryError` | `src/Shortcut/Errors/CreateCategoryError.cs` |

### DeleteCategory

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteCategory(DeleteCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CategoryPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCategoryRequest` | `src/Shortcut/Requests/Categories/DeleteCategoryRequest.cs` |
| `DeleteCategoryError` | `src/Shortcut/Errors/DeleteCategoryError.cs` |

### GetCategory

- **Auth**: `options.ApiToken`
- **Signature**: `GetCategory(GetCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CategoryPublicId`
- **Returns**: `Category`
- **Error**: `ApiException<GetCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCategoryRequest` | `src/Shortcut/Requests/Categories/GetCategoryRequest.cs` |
| `Category` | `src/Shortcut/Models/Category.cs` |
| `GetCategoryError` | `src/Shortcut/Errors/GetCategoryError.cs` |

### ListCategories

- **Auth**: `options.ApiToken`
- **Signature**: `ListCategories(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<Category>`
- **Error**: `ApiException<ListCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Category` | `src/Shortcut/Models/Category.cs` |
| `ListCategoriesError` | `src/Shortcut/Errors/ListCategoriesError.cs` |

### ListCategoryMilestones

- **Auth**: `options.ApiToken`
- **Signature**: `ListCategoryMilestones(ListCategoryMilestonesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CategoryPublicId`
- **Returns**: `IReadOnlyList<Milestone>`
- **Error**: `ApiException<ListCategoryMilestonesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCategoryMilestonesRequest` | `src/Shortcut/Requests/Categories/ListCategoryMilestonesRequest.cs` |
| `Milestone` | `src/Shortcut/Models/Milestone.cs` |
| `ListCategoryMilestonesError` | `src/Shortcut/Errors/ListCategoryMilestonesError.cs` |

### ListCategoryObjectives

- **Auth**: `options.ApiToken`
- **Signature**: `ListCategoryObjectives(ListCategoryObjectivesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CategoryPublicId`
- **Returns**: `IReadOnlyList<Milestone>`
- **Error**: `ApiException<ListCategoryObjectivesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCategoryObjectivesRequest` | `src/Shortcut/Requests/Categories/ListCategoryObjectivesRequest.cs` |
| `Milestone` | `src/Shortcut/Models/Milestone.cs` |
| `ListCategoryObjectivesError` | `src/Shortcut/Errors/ListCategoryObjectivesError.cs` |

### UpdateCategory

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateCategory(UpdateCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CategoryPublicId`, `Body`
- **Returns**: `Category`
- **Error**: `ApiException<UpdateCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCategoryRequest` | `src/Shortcut/Requests/Categories/UpdateCategoryRequest.cs` |
| `UpdateCategory` | `src/Shortcut/Models/UpdateCategory.cs` |
| `Category` | `src/Shortcut/Models/Category.cs` |
| `UpdateCategoryError` | `src/Shortcut/Errors/UpdateCategoryError.cs` |

