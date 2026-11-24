<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identity — operations

Accessor: `client.Identity` · Source: `src/Postscript/Api/Identity.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### VerifyIdentity

- **Auth**: `options.Sec0`
- **Signature**: `VerifyIdentity(VerifyIdentityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV2MeResponse`
- **Error**: `ApiException<VerifyIdentityError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Me400Error1([NotNullWhen(true)] out ApiV2Me400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VerifyIdentityRequest` | `src/Postscript/Requests/Identity/VerifyIdentityRequest.cs` |
| `ApiV2MeResponse` | `src/Postscript/Models/ApiV2MeResponse.cs` |
| `VerifyIdentityError` | `src/Postscript/Errors/VerifyIdentityError.cs` |
| `ApiV2Me400Error1` | `src/Postscript/Models/ApiV2Me400Error1.cs` |

