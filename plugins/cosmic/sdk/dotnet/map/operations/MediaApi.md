<!-- Generated file — do not edit; regenerated with the SDK. -->

# MediaApi — operations

Accessor: `client.MediaApi` · Source: `src/Cosmic/Api/MediaApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteMedia

- **Auth**: `options.WriteKey`
- **Signature**: `DeleteMedia(DeleteMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `MediaId`
- **Query params (wire ← C#)**: `trigger_webhook` ← `TriggerWebhook`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteMediaError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMediaRequest` | `src/Cosmic/Requests/MediaApi/DeleteMediaRequest.cs` |
| `MessageResponse` | `src/Cosmic/Models/MessageResponse.cs` |
| `DeleteMediaError` | `src/Cosmic/Errors/DeleteMediaError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### GetMedia

- **Auth**: `options.ReadKey`
- **Signature**: `GetMedia(GetMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `MediaId`
- **Query params (wire ← C#)**: `read_key` ← `ReadKey`, `props` ← `Props`, `useCache` ← `UseCache`, `pretty` ← `Pretty`
- **Returns**: `MediaResponse`
- **Error**: `ApiException<GetMediaError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMediaRequest` | `src/Cosmic/Requests/MediaApi/GetMediaRequest.cs` |
| `MediaResponse` | `src/Cosmic/Models/MediaResponse.cs` |
| `GetMediaError` | `src/Cosmic/Errors/GetMediaError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### ListMedia

- **Auth**: `options.ReadKey`
- **Signature**: `ListMedia(ListMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`
- **Query params (wire ← C#)**: `read_key` ← `ReadKey`, `query` ← `Query`, `props` ← `Props`, `sort` ← `Sort`, `limit` ← `Limit`, `skip` ← `Skip`, `useCache` ← `UseCache`, `pretty` ← `Pretty`
- **Returns**: `MediaListResponse`
- **Error**: `ApiException<ListMediaError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 413, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMediaRequest` | `src/Cosmic/Requests/MediaApi/ListMediaRequest.cs` |
| `Sort` | `src/Cosmic/Models/Enums/Sort.cs` |
| `MediaListResponse` | `src/Cosmic/Models/MediaListResponse.cs` |
| `ListMediaError` | `src/Cosmic/Errors/ListMediaError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### UpdateMedia

- **Auth**: `options.WriteKey`
- **Signature**: `UpdateMedia(UpdateMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `MediaId`, `Body`
- **Returns**: `MediaResponse`
- **Error**: `ApiException<UpdateMediaError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMediaRequest` | `src/Cosmic/Requests/MediaApi/UpdateMediaRequest.cs` |
| `MediaUpdate` | `src/Cosmic/Models/MediaUpdate.cs` |
| `MediaResponse` | `src/Cosmic/Models/MediaResponse.cs` |
| `UpdateMediaError` | `src/Cosmic/Errors/UpdateMediaError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

