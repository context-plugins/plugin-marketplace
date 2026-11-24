<!-- Generated file — do not edit; regenerated with the SDK. -->

# Faxes — operations

Accessor: `client.Faxes` · Source: `src/CallNode/Api/Faxes.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteFax

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `DeleteFax(DeleteFaxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteFaxError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteFaxRequest` | `src/CallNode/Requests/Faxes/DeleteFaxRequest.cs` |
| `DeleteFaxError` | `src/CallNode/Errors/DeleteFaxError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### DownloadFax

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `DownloadFax(DownloadFaxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DownloadFaxError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadFaxRequest` | `src/CallNode/Requests/Faxes/DownloadFaxRequest.cs` |
| `Format` | `src/CallNode/Models/Enums/Format.cs` |
| `DownloadFaxError` | `src/CallNode/Errors/DownloadFaxError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### GetFax

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `GetFax(GetFaxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Fax`
- **Error**: `ApiException<GetFaxError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFaxRequest` | `src/CallNode/Requests/Faxes/GetFaxRequest.cs` |
| `Fax` | `src/CallNode/Models/Fax.cs` |
| `GetFaxError` | `src/CallNode/Errors/GetFaxError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### ListFaxes

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `ListFaxes(ListFaxesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `direction` ← `Direction`, `status` ← `Status`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1FaxesResponse`
- **Error**: `ApiException<ListFaxesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFaxesRequest` | `src/CallNode/Requests/Faxes/ListFaxesRequest.cs` |
| `Direction` | `src/CallNode/Models/Enums/Direction.cs` |
| `StatusCallnodeIoFaxesApi` | `src/CallNode/Models/Enums/StatusCallnodeIoFaxesApi.cs` |
| `ApiV1FaxesResponse` | `src/CallNode/Models/ApiV1FaxesResponse.cs` |
| `ListFaxesError` | `src/CallNode/Errors/ListFaxesError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### SendFax

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `SendFax(SendFaxOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Fax`
- **Error**: `ApiException<SendFaxError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 403, 413, 415, 422, 429, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendFaxOperationRequest` | `src/CallNode/Requests/Faxes/SendFaxOperationRequest.cs` |
| `SendFaxRequest` | `src/CallNode/Models/SendFaxRequest.cs` |
| `Fax` | `src/CallNode/Models/Fax.cs` |
| `SendFaxError` | `src/CallNode/Errors/SendFaxError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

