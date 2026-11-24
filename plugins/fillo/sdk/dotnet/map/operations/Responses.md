<!-- Generated file — do not edit; regenerated with the SDK. -->

# Responses — operations

Accessor: `client.Responses` · Source: `src/Fillo/Api/Responses.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteResponse

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteResponse(DeleteResponseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ManageResponsesResponse`
- **Error**: `ApiException<DeleteResponseError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteResponseRequest` | `src/Fillo/Requests/Responses/DeleteResponseRequest.cs` |
| `ApiV1ManageResponsesResponse` | `src/Fillo/Models/ApiV1ManageResponsesResponse.cs` |
| `DeleteResponseError` | `src/Fillo/Errors/DeleteResponseError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ExportFormResponses

- **Auth**: `options.BearerAuth`
- **Signature**: `ExportFormResponses(ExportFormResponsesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Query params (wire ← C#)**: `range` ← `Range`, `q` ← `Q`, `source` ← `Source`, `respondent` ← `Respondent`, `where` ← `Where`
- **Returns**: `string`
- **Error**: `ApiException<ExportFormResponsesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExportFormResponsesRequest` | `src/Fillo/Requests/Responses/ExportFormResponsesRequest.cs` |
| `RangeEnum` | `src/Fillo/Models/Enums/RangeEnum.cs` |
| `ExportFormResponsesError` | `src/Fillo/Errors/ExportFormResponsesError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### GetResponse

- **Auth**: `options.BearerAuth`
- **Signature**: `GetResponse(GetResponseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ResponseDetail`
- **Error**: `ApiException<GetResponseError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetResponseRequest` | `src/Fillo/Requests/Responses/GetResponseRequest.cs` |
| `ResponseDetail` | `src/Fillo/Models/ResponseDetail.cs` |
| `GetResponseError` | `src/Fillo/Errors/GetResponseError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListFormDrafts

- **Auth**: `options.BearerAuth`
- **Signature**: `ListFormDrafts(ListFormDraftsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Returns**: `FormDrafts`
- **Error**: `ApiException<ListFormDraftsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFormDraftsRequest` | `src/Fillo/Requests/Responses/ListFormDraftsRequest.cs` |
| `FormDrafts` | `src/Fillo/Models/FormDrafts.cs` |
| `ListFormDraftsError` | `src/Fillo/Errors/ListFormDraftsError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListFormResponses

- **Auth**: `options.BearerAuth`
- **Signature**: `ListFormResponses(ListFormResponsesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `limit` ← `Limit`, `range` ← `Range`, `q` ← `Q`, `source` ← `Source`, `respondent` ← `Respondent`, `where` ← `Where`, `held` ← `Held`
- **Returns**: `ResponsePage`
- **Error**: `ApiException<ListFormResponsesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFormResponsesRequest` | `src/Fillo/Requests/Responses/ListFormResponsesRequest.cs` |
| `RangeEnum` | `src/Fillo/Models/Enums/RangeEnum.cs` |
| `Held` | `src/Fillo/Models/Enums/Held.cs` |
| `ResponsePage` | `src/Fillo/Models/ResponsePage.cs` |
| `ListFormResponsesError` | `src/Fillo/Errors/ListFormResponsesError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ReleaseHeldResponses

- **Auth**: `options.BearerAuth`
- **Signature**: `ReleaseHeldResponses(ReleaseHeldResponsesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Body`
- **Returns**: `ApiV1ManageFormsResponsesReleaseResponse`
- **Error**: `ApiException<ReleaseHeldResponsesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReleaseHeldResponsesRequest` | `src/Fillo/Requests/Responses/ReleaseHeldResponsesRequest.cs` |
| `ApiV1ManageFormsResponsesReleaseRequest` | `src/Fillo/Models/ApiV1ManageFormsResponsesReleaseRequest.cs` |
| `ApiV1ManageFormsResponsesReleaseResponse` | `src/Fillo/Models/ApiV1ManageFormsResponsesReleaseResponse.cs` |
| `ReleaseHeldResponsesError` | `src/Fillo/Errors/ReleaseHeldResponsesError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### SummarizeFormResponses

- **Auth**: `options.BearerAuth`
- **Signature**: `SummarizeFormResponses(SummarizeFormResponsesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Query params (wire ← C#)**: `exclude` ← `Exclude`, `recent` ← `Recent`
- **Returns**: `ResponseSummary`
- **Error**: `ApiException<SummarizeFormResponsesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SummarizeFormResponsesRequest` | `src/Fillo/Requests/Responses/SummarizeFormResponsesRequest.cs` |
| `ResponseSummary` | `src/Fillo/Models/ResponseSummary.cs` |
| `SummarizeFormResponsesError` | `src/Fillo/Errors/SummarizeFormResponsesError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

