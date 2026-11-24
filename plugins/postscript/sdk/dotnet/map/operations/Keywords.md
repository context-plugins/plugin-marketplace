<!-- Generated file — do not edit; regenerated with the SDK. -->

# Keywords — operations

Accessor: `client.Keywords` · Source: `src/Postscript/Api/Keywords.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetKeyword

- **Auth**: `options.Sec0`
- **Signature**: `GetKeyword(GetKeywordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV2KeywordsResponse`
- **Error**: `ApiException<GetKeywordError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Keywords404Error1([NotNullWhen(true)] out ApiV2Keywords404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetKeywordRequest` | `src/Postscript/Requests/Keywords/GetKeywordRequest.cs` |
| `ApiV2KeywordsResponse` | `src/Postscript/Models/ApiV2KeywordsResponse.cs` |
| `GetKeywordError` | `src/Postscript/Errors/GetKeywordError.cs` |
| `ApiV2Keywords404Error1` | `src/Postscript/Models/ApiV2Keywords404Error1.cs` |

### GetKeywords

- **Auth**: `options.Sec0`
- **Signature**: `GetKeywords(GetKeywordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV2KeywordsResponse1`
- **Error**: `ApiException<GetKeywordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Keywords403Error1([NotNullWhen(true)] out ApiV2Keywords403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetKeywordsRequest` | `src/Postscript/Requests/Keywords/GetKeywordsRequest.cs` |
| `ApiV2KeywordsResponse1` | `src/Postscript/Models/ApiV2KeywordsResponse1.cs` |
| `GetKeywordsError` | `src/Postscript/Errors/GetKeywordsError.cs` |
| `ApiV2Keywords403Error1` | `src/Postscript/Models/ApiV2Keywords403Error1.cs` |

