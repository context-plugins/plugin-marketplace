<!-- Generated file — do not edit; regenerated with the SDK. -->

# Respondents — operations

Accessor: `client.Respondents` · Source: `src/Fillo/Api/Respondents.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FindRespondents

- **Auth**: `options.BearerAuth`
- **Signature**: `FindRespondents(FindRespondentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `externalId` ← `ExternalId`, `email` ← `Email`, `cursor` ← `Cursor`, `limit` ← `Limit`
- **Returns**: `ApiV1ManageRespondentsResponse`
- **Error**: `ApiException<FindRespondentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FindRespondentsRequest` | `src/Fillo/Requests/Respondents/FindRespondentsRequest.cs` |
| `ApiV1ManageRespondentsResponse` | `src/Fillo/Models/ApiV1ManageRespondentsResponse.cs` |
| `FindRespondentsError` | `src/Fillo/Errors/FindRespondentsError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ForgetRespondent

- **Auth**: `options.BearerAuth`
- **Signature**: `ForgetRespondent(ForgetRespondentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV1ManageRespondentsResponse1`
- **Error**: `ApiException<ForgetRespondentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ForgetRespondentRequest` | `src/Fillo/Requests/Respondents/ForgetRespondentRequest.cs` |
| `ApiV1ManageRespondentsRequest` | `src/Fillo/Models/ApiV1ManageRespondentsRequest.cs` |
| `ApiV1ManageRespondentsResponse1` | `src/Fillo/Models/ApiV1ManageRespondentsResponse1.cs` |
| `ForgetRespondentError` | `src/Fillo/Errors/ForgetRespondentError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListRespondentResponses

- **Auth**: `options.BearerAuth`
- **Signature**: `ListRespondentResponses(ListRespondentResponsesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `limit` ← `Limit`
- **Returns**: `ResponsePage`
- **Error**: `ApiException<ListRespondentResponsesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRespondentResponsesRequest` | `src/Fillo/Requests/Respondents/ListRespondentResponsesRequest.cs` |
| `ResponsePage` | `src/Fillo/Models/ResponsePage.cs` |
| `ListRespondentResponsesError` | `src/Fillo/Errors/ListRespondentResponsesError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

