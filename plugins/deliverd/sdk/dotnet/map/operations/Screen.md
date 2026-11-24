<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screen — operations

Accessor: `client.Screen` · Source: `src/Deliverd/Api/Screen.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostApiV1Screen

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Screen(PostApiV1ScreenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ScreenResponse`
- **Error**: `ApiException<PostApiV1ScreenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ScreenRequest` | `src/Deliverd/Requests/Screen/PostApiV1ScreenRequest.cs` |
| `ApiV1ScreenRequest` | `src/Deliverd/Models/ApiV1ScreenRequest.cs` |
| `ApiV1ScreenResponse` | `src/Deliverd/Models/ApiV1ScreenResponse.cs` |
| `PostApiV1ScreenError` | `src/Deliverd/Errors/PostApiV1ScreenError.cs` |

