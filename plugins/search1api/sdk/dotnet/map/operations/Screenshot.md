<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screenshot — operations

Accessor: `client.Screenshot` · Source: `src/Search1Api/Api/Screenshot.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ScreenshotInvoke

- **Auth**: `options.BearerAuth`
- **Signature**: `ScreenshotInvoke(ScreenshotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<ScreenshotError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 403, 422, 429, 500, 502, 503, 504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ScreenshotOperationRequest` | `src/Search1Api/Requests/Screenshot/ScreenshotOperationRequest.cs` |
| `ScreenshotRequest` | `src/Search1Api/Models/ScreenshotRequest.cs` |
| `ScreenshotError` | `src/Search1Api/Errors/ScreenshotError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

