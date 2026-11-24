<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContentTypes — operations

Accessor: `client.ContentTypes` · Source: `src/Contentstack/Api/ContentTypes.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateContentType

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `CreateContentType(CreateContentTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiKey`, `Body`
- **Returns**: `ContentType2`
- **Error**: `ApiException<CreateContentTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400] · `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateContentTypeOperationRequest` | `src/Contentstack/Requests/ContentTypes/CreateContentTypeOperationRequest.cs` |
| `CreateContentTypeRequest` | `src/Contentstack/Models/CreateContentTypeRequest.cs` |
| `ContentType2` | `src/Contentstack/Models/ContentType2.cs` |
| `CreateContentTypeError` | `src/Contentstack/Errors/CreateContentTypeError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### DeleteContentType

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `DeleteContentType(DeleteContentTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContentTypeUid`, `ApiKey`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteContentTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteContentTypeRequest` | `src/Contentstack/Requests/ContentTypes/DeleteContentTypeRequest.cs` |
| `DeleteContentTypeError` | `src/Contentstack/Errors/DeleteContentTypeError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### GetAllContentTypes

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `GetAllContentTypes(GetAllContentTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiKey`, `AccessToken`
- **Query params (wire ← C#)**: `include_count` ← `IncludeCount`
- **Returns**: `ContentTypeList`
- **Error**: `ApiException<GetAllContentTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllContentTypesRequest` | `src/Contentstack/Requests/ContentTypes/GetAllContentTypesRequest.cs` |
| `ContentTypeList` | `src/Contentstack/Models/ContentTypeList.cs` |
| `GetAllContentTypesError` | `src/Contentstack/Errors/GetAllContentTypesError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### GetSingleContentType

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `GetSingleContentType(GetSingleContentTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContentTypeUid`, `ApiKey`, `AccessToken`
- **Query params (wire ← C#)**: `version` ← `Version`
- **Returns**: `ContentType`
- **Error**: `ApiException<GetSingleContentTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSingleContentTypeRequest` | `src/Contentstack/Requests/ContentTypes/GetSingleContentTypeRequest.cs` |
| `ContentType` | `src/Contentstack/Models/ContentType.cs` |
| `GetSingleContentTypeError` | `src/Contentstack/Errors/GetSingleContentTypeError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### UpdateContentType

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `UpdateContentType(UpdateContentTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContentTypeUid`, `ApiKey`, `Body`
- **Returns**: `ContentType2`
- **Error**: `ApiException<UpdateContentTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400] · `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateContentTypeRequest` | `src/Contentstack/Requests/ContentTypes/UpdateContentTypeRequest.cs` |
| `CreateContentTypeRequest` | `src/Contentstack/Models/CreateContentTypeRequest.cs` |
| `ContentType2` | `src/Contentstack/Models/ContentType2.cs` |
| `UpdateContentTypeError` | `src/Contentstack/Errors/UpdateContentTypeError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

