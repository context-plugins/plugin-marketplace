<!-- Generated file — do not edit; regenerated with the SDK. -->

# Typosquatting — operations

Accessor: `client.Typosquatting` · Source: `src/WhoisFreaks/Api/Typosquatting.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TyposquattingInvoke

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TyposquattingInvoke(TyposquattingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `pattern` ← `Pattern`, `pageToken` ← `PageToken`
- **Returns**: `TyposquattingResponse`
- **Error**: `ApiException<TyposquattingError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TyposquattingRequest` | `src/WhoisFreaks/Requests/Typosquatting/TyposquattingRequest.cs` |
| `TyposquattingResponse` | `src/WhoisFreaks/Models/TyposquattingResponse.cs` |
| `TyposquattingError` | `src/WhoisFreaks/Errors/TyposquattingError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

