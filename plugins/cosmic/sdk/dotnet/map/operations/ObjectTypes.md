<!-- Generated file — do not edit; regenerated with the SDK. -->

# ObjectTypes — operations

Accessor: `client.ObjectTypes` · Source: `src/Cosmic/Api/ObjectTypes.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateObjectType

- **Auth**: `options.WriteKey`
- **Signature**: `CreateObjectType(CreateObjectTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `Body`
- **Returns**: `ObjectTypeResponse`
- **Error**: `ApiException<CreateObjectTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateObjectTypeRequest` | `src/Cosmic/Requests/ObjectTypes/CreateObjectTypeRequest.cs` |
| `ObjectTypeCreate` | `src/Cosmic/Models/ObjectTypeCreate.cs` |
| `ObjectTypeResponse` | `src/Cosmic/Models/ObjectTypeResponse.cs` |
| `CreateObjectTypeError` | `src/Cosmic/Errors/CreateObjectTypeError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### DeleteObjectType

- **Auth**: `options.WriteKey`
- **Signature**: `DeleteObjectType(DeleteObjectTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `TypeSlug`
- **Query params (wire ← C#)**: `trigger_webhook` ← `TriggerWebhook`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteObjectTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteObjectTypeRequest` | `src/Cosmic/Requests/ObjectTypes/DeleteObjectTypeRequest.cs` |
| `MessageResponse` | `src/Cosmic/Models/MessageResponse.cs` |
| `DeleteObjectTypeError` | `src/Cosmic/Errors/DeleteObjectTypeError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### GetObjectType

- **Auth**: `options.ReadKey`
- **Signature**: `GetObjectType(GetObjectTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `TypeSlug`
- **Query params (wire ← C#)**: `read_key` ← `ReadKey`, `pretty` ← `Pretty`
- **Returns**: `ObjectTypeResponse`
- **Error**: `ApiException<GetObjectTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetObjectTypeRequest` | `src/Cosmic/Requests/ObjectTypes/GetObjectTypeRequest.cs` |
| `ObjectTypeResponse` | `src/Cosmic/Models/ObjectTypeResponse.cs` |
| `GetObjectTypeError` | `src/Cosmic/Errors/GetObjectTypeError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### ListObjectTypes

- **Auth**: `options.ReadKey`
- **Signature**: `ListObjectTypes(ListObjectTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`
- **Query params (wire ← C#)**: `read_key` ← `ReadKey`, `pretty` ← `Pretty`
- **Returns**: `ObjectTypeListResponse`
- **Error**: `ApiException<ListObjectTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListObjectTypesRequest` | `src/Cosmic/Requests/ObjectTypes/ListObjectTypesRequest.cs` |
| `ObjectTypeListResponse` | `src/Cosmic/Models/ObjectTypeListResponse.cs` |
| `ListObjectTypesError` | `src/Cosmic/Errors/ListObjectTypesError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### UpdateObjectType

- **Auth**: `options.WriteKey`
- **Signature**: `UpdateObjectType(UpdateObjectTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `TypeSlug`, `Body`
- **Returns**: `ObjectTypeResponse`
- **Error**: `ApiException<UpdateObjectTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateObjectTypeRequest` | `src/Cosmic/Requests/ObjectTypes/UpdateObjectTypeRequest.cs` |
| `ObjectTypeUpdate` | `src/Cosmic/Models/ObjectTypeUpdate.cs` |
| `ObjectTypeResponse` | `src/Cosmic/Models/ObjectTypeResponse.cs` |
| `UpdateObjectTypeError` | `src/Cosmic/Errors/UpdateObjectTypeError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

