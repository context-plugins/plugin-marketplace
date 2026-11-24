<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureHandling — operations

Accessor: `client.SignatureHandling` · Source: `src/Skribble/Api/SignatureHandling.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkGetSignatureRequests

- **Server group**: `DefaultSkribbleSignatureHandlingApi`
- **Auth**: `options.Bearer`
- **Signature**: `BulkGetSignatureRequests(BulkGetSignatureRequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<SignatureResponse>`
- **Error**: `ApiException<BulkGetSignatureRequestsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 406, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkGetSignatureRequestsRequest` | `src/Skribble/Requests/SignatureHandling/BulkGetSignatureRequestsRequest.cs` |
| `SignatureResponse` | `src/Skribble/Models/SignatureResponse.cs` |
| `BulkGetSignatureRequestsError` | `src/Skribble/Errors/BulkGetSignatureRequestsError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### DeleteSignatureRequestExpiresAt

- **Server group**: `DefaultSkribbleSignatureHandlingApi`
- **Auth**: `options.Bearer`
- **Signature**: `DeleteSignatureRequestExpiresAt(DeleteSignatureRequestExpiresAtRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSignatureRequestExpiresAtError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSignatureRequestExpiresAtRequest` | `src/Skribble/Requests/SignatureHandling/DeleteSignatureRequestExpiresAtRequest.cs` |
| `DeleteSignatureRequestExpiresAtError` | `src/Skribble/Errors/DeleteSignatureRequestExpiresAtError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetSignatureReport

- **Server group**: `DefaultSkribbleSignatureHandlingApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetSignatureReport(GetSignatureReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`
- **Query params (wire ← C#)**: `type` ← `Type`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<GetSignatureReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSignatureReportRequest` | `src/Skribble/Requests/SignatureHandling/GetSignatureReportRequest.cs` |
| `TypeSkribbleSignatureHandlingApi` | `src/Skribble/Models/Enums/TypeSkribbleSignatureHandlingApi.cs` |
| `GetSignatureReportError` | `src/Skribble/Errors/GetSignatureReportError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetSignatureRequest

- **Server group**: `DefaultSkribbleSignatureHandlingApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetSignatureRequest(GetSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `account_email` ← `AccountEmail`, `search` ← `Search`, `signature_status` ← `SignatureStatus`, `status_overall` ← `StatusOverall`, `page_number` ← `PageNumber`, `page_size` ← `PageSize`
- **Returns**: `IReadOnlyList<SignatureResponseV3>`
- **Error**: `ApiException<GetSignatureRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 406, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSignatureRequest` | `src/Skribble/Requests/SignatureHandling/GetSignatureRequest.cs` |
| `SignatureStatusCode` | `src/Skribble/Models/Enums/SignatureStatusCode.cs` |
| `SignatureStatusOverall` | `src/Skribble/Models/Enums/SignatureStatusOverall.cs` |
| `SignatureResponseV3` | `src/Skribble/Models/SignatureResponseV3.cs` |
| `GetSignatureRequestError` | `src/Skribble/Errors/GetSignatureRequestError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetSignatureRequestCallbacksV3

- **Server group**: `DefaultSkribbleSignatureHandlingApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetSignatureRequestCallbacksV3(GetSignatureRequestCallbacksV3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`
- **Returns**: `IReadOnlyList<SignatureCallbacksInResponse>`
- **Error**: `ApiException<GetSignatureRequestCallbacksV3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSignatureRequestCallbacksV3Request` | `src/Skribble/Requests/SignatureHandling/GetSignatureRequestCallbacksV3Request.cs` |
| `SignatureCallbacksInResponse` | `src/Skribble/Models/SignatureCallbacksInResponse.cs` |
| `GetSignatureRequestCallbacksV3Error` | `src/Skribble/Errors/GetSignatureRequestCallbacksV3Error.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetSignatureRequestDetails2

- **Server group**: `DefaultSkribbleSignatureHandlingApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetSignatureRequestDetails2(GetSignatureRequestDetails2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`
- **Returns**: `SignatureResponseV3`
- **Error**: `ApiException<GetSignatureRequestDetails2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSignatureRequestDetails2Request` | `src/Skribble/Requests/SignatureHandling/GetSignatureRequestDetails2Request.cs` |
| `SignatureResponseV3` | `src/Skribble/Models/SignatureResponseV3.cs` |
| `GetSignatureRequestDetails2Error` | `src/Skribble/Errors/GetSignatureRequestDetails2Error.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### RemindSignatureRequest

- **Server group**: `DefaultSkribbleSignatureHandlingApi`
- **Auth**: `options.Bearer`
- **Signature**: `RemindSignatureRequest(RemindSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemindSignatureRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemindSignatureRequest` | `src/Skribble/Requests/SignatureHandling/RemindSignatureRequest.cs` |
| `RemindSignatureRequestError` | `src/Skribble/Errors/RemindSignatureRequestError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### UpdateSignatureRequest

- **Server group**: `DefaultSkribbleSignatureHandlingApi`
- **Auth**: `options.Bearer`
- **Signature**: `UpdateSignatureRequest(UpdateSignatureRequestOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SignatureResponseV3`
- **Error**: `ApiException<UpdateSignatureRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSignatureRequestOperationRequest` | `src/Skribble/Requests/SignatureHandling/UpdateSignatureRequestOperationRequest.cs` |
| `UpdateSignatureRequest` | `src/Skribble/Models/UpdateSignatureRequest.cs` |
| `SignatureResponseV3` | `src/Skribble/Models/SignatureResponseV3.cs` |
| `UpdateSignatureRequestError` | `src/Skribble/Errors/UpdateSignatureRequestError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

