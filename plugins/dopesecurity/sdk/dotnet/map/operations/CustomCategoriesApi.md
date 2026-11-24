<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomCategoriesApi — operations

Accessor: `client.CustomCategoriesApi` · Source: `src/DopeSecurity/Api/CustomCategoriesApi.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddCustomCategoryUrls

- **Auth**: `options.BearerAuth`
- **Signature**: `AddCustomCategoryUrls(AddCustomCategoryUrlsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomCategoryName`, `Body`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<AddCustomCategoryUrlsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddCustomCategoryUrlsRequest` | `src/DopeSecurity/Requests/CustomCategoriesApi/AddCustomCategoryUrlsRequest.cs` |
| `CustomCategoriesUrlsRequest` | `src/DopeSecurity/Models/CustomCategoriesUrlsRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `AddCustomCategoryUrlsError` | `src/DopeSecurity/Errors/AddCustomCategoryUrlsError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### CreateCustomCategory

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateCustomCategory(CreateCustomCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomCategoryName`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<CreateCustomCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomCategoryRequest` | `src/DopeSecurity/Requests/CustomCategoriesApi/CreateCustomCategoryRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `CreateCustomCategoryError` | `src/DopeSecurity/Errors/CreateCustomCategoryError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### DeleteAllCustomCategoryUrls

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteAllCustomCategoryUrls(DeleteAllCustomCategoryUrlsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomCategoryName`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<DeleteAllCustomCategoryUrlsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAllCustomCategoryUrlsRequest` | `src/DopeSecurity/Requests/CustomCategoriesApi/DeleteAllCustomCategoryUrlsRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `DeleteAllCustomCategoryUrlsError` | `src/DopeSecurity/Errors/DeleteAllCustomCategoryUrlsError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### DeleteCustomCategory

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteCustomCategory(DeleteCustomCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomCategoryName`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<DeleteCustomCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomCategoryRequest` | `src/DopeSecurity/Requests/CustomCategoriesApi/DeleteCustomCategoryRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `DeleteCustomCategoryError` | `src/DopeSecurity/Errors/DeleteCustomCategoryError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### DeleteCustomCategoryUrl

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteCustomCategoryUrl(DeleteCustomCategoryUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomCategoryName`, `EncodedUrl`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<DeleteCustomCategoryUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomCategoryUrlRequest` | `src/DopeSecurity/Requests/CustomCategoriesApi/DeleteCustomCategoryUrlRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `DeleteCustomCategoryUrlError` | `src/DopeSecurity/Errors/DeleteCustomCategoryUrlError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### ListCustomCategories

- **Auth**: `options.BearerAuth`
- **Signature**: `ListCustomCategories(ListCustomCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `first` ← `First`, `after` ← `After`
- **Returns**: `CustomCategoriesResponse`
- **Error**: `ApiException<ListCustomCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomCategoriesRequest` | `src/DopeSecurity/Requests/CustomCategoriesApi/ListCustomCategoriesRequest.cs` |
| `CustomCategoriesResponse` | `src/DopeSecurity/Models/CustomCategoriesResponse.cs` |
| `ListCustomCategoriesError` | `src/DopeSecurity/Errors/ListCustomCategoriesError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### ListCustomCategoryUrls

- **Auth**: `options.BearerAuth`
- **Signature**: `ListCustomCategoryUrls(ListCustomCategoryUrlsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomCategoryName`
- **Returns**: `CustomCategoriesUrlsResponse`
- **Error**: `ApiException<ListCustomCategoryUrlsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomCategoryUrlsRequest` | `src/DopeSecurity/Requests/CustomCategoriesApi/ListCustomCategoryUrlsRequest.cs` |
| `CustomCategoriesUrlsResponse` | `src/DopeSecurity/Models/CustomCategoriesUrlsResponse.cs` |
| `ListCustomCategoryUrlsError` | `src/DopeSecurity/Errors/ListCustomCategoryUrlsError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### OverwriteCustomCategoryUrls

- **Auth**: `options.BearerAuth`
- **Signature**: `OverwriteCustomCategoryUrls(OverwriteCustomCategoryUrlsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomCategoryName`, `Body`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<OverwriteCustomCategoryUrlsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OverwriteCustomCategoryUrlsRequest` | `src/DopeSecurity/Requests/CustomCategoriesApi/OverwriteCustomCategoryUrlsRequest.cs` |
| `CustomCategoriesUrlsRequest` | `src/DopeSecurity/Models/CustomCategoriesUrlsRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `OverwriteCustomCategoryUrlsError` | `src/DopeSecurity/Errors/OverwriteCustomCategoryUrlsError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

