<!-- Generated file — do not edit; regenerated with the SDK. -->

# Components — operations

Accessor: `client.Components` · Source: `src/Boomi/Api/Components.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePackagedComponent

- **Auth**: `options.BasicAuth`
- **Signature**: `CreatePackagedComponent(CreatePackagedComponentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PackagedComponent`
- **Error**: `ApiException<CreatePackagedComponentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePackagedComponentRequest` | `src/Boomi/Requests/Components/CreatePackagedComponentRequest.cs` |
| `PackagedComponentInput` | `src/Boomi/Models/PackagedComponentInput.cs` |
| `PackagedComponent` | `src/Boomi/Models/PackagedComponent.cs` |
| `CreatePackagedComponentError` | `src/Boomi/Errors/CreatePackagedComponentError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### GetPackagedComponent

- **Auth**: `options.BasicAuth`
- **Signature**: `GetPackagedComponent(GetPackagedComponentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PackagedComponent`
- **Error**: `ApiException<GetPackagedComponentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPackagedComponentRequest` | `src/Boomi/Requests/Components/GetPackagedComponentRequest.cs` |
| `PackagedComponent` | `src/Boomi/Models/PackagedComponent.cs` |
| `GetPackagedComponentError` | `src/Boomi/Errors/GetPackagedComponentError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

