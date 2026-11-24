<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.News` · Source: `src/Compabase/Api/News.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompaniesKrsByKrsNews

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsNews(GetCompaniesKrsByKrsNewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Query params (wire ← C#)**: `locale` ← `Locale`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsNewsRequest` | `src/Compabase/Requests/News/GetCompaniesKrsByKrsNewsRequest.cs` |
| `GetCompaniesKrsByKrsNewsError` | `src/Compabase/Errors/GetCompaniesKrsByKrsNewsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetNews

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetNews(GetNewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `since` ← `Since`, `pkd` ← `Pkd`, `city` ← `City`, `locale` ← `Locale`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `object`
- **Error**: `ApiException<GetNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetNewsRequest` | `src/Compabase/Requests/News/GetNewsRequest.cs` |
| `Locale` | `src/Compabase/Models/Enums/Locale.cs` |
| `GetNewsError` | `src/Compabase/Errors/GetNewsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

