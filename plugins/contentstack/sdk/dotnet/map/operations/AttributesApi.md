<!-- Generated file — do not edit; regenerated with the SDK. -->

# AttributesApi — operations

Accessor: `client.AttributesApi` · Source: `src/Contentstack/Api/AttributesApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAttribute

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `CreateAttribute(CreateAttributeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`, `Body`
- **Returns**: `AttributeModel`
- **Error**: `ApiException<CreateAttributeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAttributeOperationRequest` | `src/Contentstack/Requests/AttributesApi/CreateAttributeOperationRequest.cs` |
| `CreateAttributeRequest` | `src/Contentstack/Models/CreateAttributeRequest.cs` |
| `AttributeModel` | `src/Contentstack/Models/AttributeModel.cs` |
| `CreateAttributeError` | `src/Contentstack/Errors/CreateAttributeError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### DeleteAttribute

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `DeleteAttribute(DeleteAttributeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `XProjectUid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAttributeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAttributeRequest` | `src/Contentstack/Requests/AttributesApi/DeleteAttributeRequest.cs` |
| `DeleteAttributeError` | `src/Contentstack/Errors/DeleteAttributeError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### GetAllAttributes

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAllAttributes(GetAllAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`
- **Returns**: `AttributeList`
- **Error**: `ApiException<GetAllAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllAttributesRequest` | `src/Contentstack/Requests/AttributesApi/GetAllAttributesRequest.cs` |
| `AttributeList` | `src/Contentstack/Models/AttributeList.cs` |
| `GetAllAttributesError` | `src/Contentstack/Errors/GetAllAttributesError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### UpdateAttribute

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `UpdateAttribute(UpdateAttributeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `XProjectUid`, `Body`
- **Returns**: `AttributeModel`
- **Error**: `ApiException<UpdateAttributeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAttributeRequest` | `src/Contentstack/Requests/AttributesApi/UpdateAttributeRequest.cs` |
| `CreateAttributeRequest` | `src/Contentstack/Models/CreateAttributeRequest.cs` |
| `AttributeModel` | `src/Contentstack/Models/AttributeModel.cs` |
| `UpdateAttributeError` | `src/Contentstack/Errors/UpdateAttributeError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

