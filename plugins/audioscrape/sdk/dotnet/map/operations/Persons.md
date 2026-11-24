<!-- Generated file — do not edit; regenerated with the SDK. -->

# Persons — operations

Accessor: `client.Persons` · Source: `src/Audioscrape/Api/Persons.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPersonV1

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPersonV1(GetPersonV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PersonSlug`
- **Returns**: `PersonDetail`
- **Error**: `ApiException<GetPersonV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPersonV1Request` | `src/Audioscrape/Requests/Persons/GetPersonV1Request.cs` |
| `PersonDetail` | `src/Audioscrape/Models/PersonDetail.cs` |
| `GetPersonV1Error` | `src/Audioscrape/Errors/GetPersonV1Error.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### SearchPersonsV1

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchPersonsV1(SearchPersonsV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `limit` ← `Limit`
- **Returns**: `PersonList`
- **Error**: `ApiException<SearchPersonsV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchPersonsV1Request` | `src/Audioscrape/Requests/Persons/SearchPersonsV1Request.cs` |
| `PersonList` | `src/Audioscrape/Models/PersonList.cs` |
| `SearchPersonsV1Error` | `src/Audioscrape/Errors/SearchPersonsV1Error.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

