<!-- Generated file — do not edit; regenerated with the SDK. -->

# SipTrunks — operations

Accessor: `client.SipTrunks` · Source: `src/CallNode/Api/SipTrunks.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSipTrunk

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `CreateSipTrunk(CreateSipTrunkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SipTrunk`
- **Error**: `ApiException<CreateSipTrunkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSipTrunkRequest` | `src/CallNode/Requests/SipTrunks/CreateSipTrunkRequest.cs` |
| `CreateTrunkRequest` | `src/CallNode/Models/CreateTrunkRequest.cs` |
| `SipTrunk` | `src/CallNode/Models/SipTrunk.cs` |
| `CreateSipTrunkError` | `src/CallNode/Errors/CreateSipTrunkError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### DeleteSipTrunk

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `DeleteSipTrunk(DeleteSipTrunkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1TrunksResponse1`
- **Error**: `ApiException<DeleteSipTrunkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSipTrunkRequest` | `src/CallNode/Requests/SipTrunks/DeleteSipTrunkRequest.cs` |
| `ApiV1TrunksResponse1` | `src/CallNode/Models/ApiV1TrunksResponse1.cs` |
| `DeleteSipTrunkError` | `src/CallNode/Errors/DeleteSipTrunkError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### GetSipTrunk

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `GetSipTrunk(GetSipTrunkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `SipTrunk`
- **Error**: `ApiException<GetSipTrunkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSipTrunkRequest` | `src/CallNode/Requests/SipTrunks/GetSipTrunkRequest.cs` |
| `SipTrunk` | `src/CallNode/Models/SipTrunk.cs` |
| `GetSipTrunkError` | `src/CallNode/Errors/GetSipTrunkError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### ListSipTrunks

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `ListSipTrunks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1TrunksResponse`
- **Error**: `ApiException<ListSipTrunksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1TrunksResponse` | `src/CallNode/Models/ApiV1TrunksResponse.cs` |
| `ListSipTrunksError` | `src/CallNode/Errors/ListSipTrunksError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### RotateSipTrunkCredentials

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `RotateSipTrunkCredentials(RotateSipTrunkCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `SipTrunk`
- **Error**: `ApiException<RotateSipTrunkCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RotateSipTrunkCredentialsRequest` | `src/CallNode/Requests/SipTrunks/RotateSipTrunkCredentialsRequest.cs` |
| `SipTrunk` | `src/CallNode/Models/SipTrunk.cs` |
| `RotateSipTrunkCredentialsError` | `src/CallNode/Errors/RotateSipTrunkCredentialsError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### UpdateSipTrunk

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `UpdateSipTrunk(UpdateSipTrunkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `SipTrunk`
- **Error**: `ApiException<UpdateSipTrunkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSipTrunkRequest` | `src/CallNode/Requests/SipTrunks/UpdateSipTrunkRequest.cs` |
| `UpdateTrunkRequest` | `src/CallNode/Models/UpdateTrunkRequest.cs` |
| `SipTrunk` | `src/CallNode/Models/SipTrunk.cs` |
| `UpdateSipTrunkError` | `src/CallNode/Errors/UpdateSipTrunkError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

