<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screenshot — operations

Accessor: `client.Screenshot` · Source: `src/S1/Api/Screenshot.cs` · 1 operation

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
| `ScreenshotOperationRequest` | `src/S1/Requests/Screenshot/ScreenshotOperationRequest.cs` |
| `ScreenshotRequest` | `src/S1/Models/ScreenshotRequest.cs` |
| `ScreenshotError` | `src/S1/Errors/ScreenshotError.cs` |
| `ApiErrorModel` | `src/S1/Models/ApiErrorModel.cs` |

