<!-- Generated file — do not edit; regenerated with the SDK. -->

# GlobalFields — operations

Accessor: `client.GlobalFields` · Source: `src/Contentstack/Api/GlobalFields.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAllGlobalFields

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `GetAllGlobalFields(GetAllGlobalFieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiKey`, `AccessToken`
- **Returns**: `GlobalFieldList`
- **Error**: `ApiException<GetAllGlobalFieldsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllGlobalFieldsRequest` | `src/Contentstack/Requests/GlobalFields/GetAllGlobalFieldsRequest.cs` |
| `GlobalFieldList` | `src/Contentstack/Models/GlobalFieldList.cs` |
| `GetAllGlobalFieldsError` | `src/Contentstack/Errors/GetAllGlobalFieldsError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### GetSingleGlobalField

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `GetSingleGlobalField(GetSingleGlobalFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GlobalFieldUid`, `ApiKey`, `AccessToken`
- **Returns**: `GlobalField`
- **Error**: `ApiException<GetSingleGlobalFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSingleGlobalFieldRequest` | `src/Contentstack/Requests/GlobalFields/GetSingleGlobalFieldRequest.cs` |
| `GlobalField` | `src/Contentstack/Models/GlobalField.cs` |
| `GetSingleGlobalFieldError` | `src/Contentstack/Errors/GetSingleGlobalFieldError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

