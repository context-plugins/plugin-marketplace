<!-- Generated file — do not edit; regenerated with the SDK. -->

# Objects — operations

Accessor: `client.Objects` · Source: `src/Cosmic/Api/Objects.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchObjects

- **Auth**: `options.WriteKey`
- **Signature**: `BatchObjects(BatchObjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `Body`
- **Returns**: `BatchResponse`
- **Error**: `ApiException<BatchObjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchObjectsRequest` | `src/Cosmic/Requests/Objects/BatchObjectsRequest.cs` |
| `BatchRequest` | `src/Cosmic/Models/BatchRequest.cs` |
| `BatchResponse` | `src/Cosmic/Models/BatchResponse.cs` |
| `BatchObjectsError` | `src/Cosmic/Errors/BatchObjectsError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### CreateObject

- **Auth**: `options.WriteKey`
- **Signature**: `CreateObject(CreateObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `Body`
- **Returns**: `ObjectResponse`
- **Error**: `ApiException<CreateObjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateObjectRequest` | `src/Cosmic/Requests/Objects/CreateObjectRequest.cs` |
| `ObjectCreate` | `src/Cosmic/Models/ObjectCreate.cs` |
| `ObjectResponse` | `src/Cosmic/Models/ObjectResponse.cs` |
| `CreateObjectError` | `src/Cosmic/Errors/CreateObjectError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### DeleteObject

- **Auth**: `options.WriteKey`
- **Signature**: `DeleteObject(DeleteObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `ObjectId`
- **Query params (wire ← C#)**: `trigger_webhook` ← `TriggerWebhook`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteObjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteObjectRequest` | `src/Cosmic/Requests/Objects/DeleteObjectRequest.cs` |
| `MessageResponse` | `src/Cosmic/Models/MessageResponse.cs` |
| `DeleteObjectError` | `src/Cosmic/Errors/DeleteObjectError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### GetObject

- **Auth**: `options.ReadKey`
- **Signature**: `GetObject(GetObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `ObjectId`
- **Query params (wire ← C#)**: `read_key` ← `ReadKey`, `preview_token` ← `PreviewToken`, `props` ← `Props`, `status` ← `Status`, `depth` ← `Depth`, `useCache` ← `UseCache`, `pretty` ← `Pretty`
- **Returns**: `ObjectResponse`
- **Error**: `ApiException<GetObjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetObjectRequest` | `src/Cosmic/Requests/Objects/GetObjectRequest.cs` |
| `Status4` | `src/Cosmic/Models/Enums/Status4.cs` |
| `ObjectResponse` | `src/Cosmic/Models/ObjectResponse.cs` |
| `GetObjectError` | `src/Cosmic/Errors/GetObjectError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### ListObjects

- **Auth**: `options.ReadKey`
- **Signature**: `ListObjects(ListObjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`
- **Query params (wire ← C#)**: `read_key` ← `ReadKey`, `preview_token` ← `PreviewToken`, `query` ← `Query`, `props` ← `Props`, `status` ← `Status`, `sort` ← `Sort`, `limit` ← `Limit`, `skip` ← `Skip`, `depth` ← `Depth`, `after` ← `After`, `useCache` ← `UseCache`, `pretty` ← `Pretty`
- **Returns**: `ObjectListResponse`
- **Error**: `ApiException<ListObjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 413, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListObjectsRequest` | `src/Cosmic/Requests/Objects/ListObjectsRequest.cs` |
| `Status4` | `src/Cosmic/Models/Enums/Status4.cs` |
| `ObjectListResponse` | `src/Cosmic/Models/ObjectListResponse.cs` |
| `ListObjectsError` | `src/Cosmic/Errors/ListObjectsError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### UpdateObject

- **Auth**: `options.WriteKey`
- **Signature**: `UpdateObject(UpdateObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `ObjectId`, `Body`
- **Returns**: `ObjectResponse`
- **Error**: `ApiException<UpdateObjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateObjectRequest` | `src/Cosmic/Requests/Objects/UpdateObjectRequest.cs` |
| `ObjectUpdate` | `src/Cosmic/Models/ObjectUpdate.cs` |
| `ObjectResponse` | `src/Cosmic/Models/ObjectResponse.cs` |
| `UpdateObjectError` | `src/Cosmic/Errors/UpdateObjectError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

