<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screenshot — operations

Accessor: `client.Screenshot` · Source: `src/Rendex/Api/Screenshot.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRenderLink

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateRenderLink(CreateRenderLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1RenderLinkResponse`
- **Error**: `ApiException<CreateRenderLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRenderLinkRequest` | `src/Rendex/Requests/Screenshot/CreateRenderLinkRequest.cs` |
| `V1RenderLinkRequest` | `src/Rendex/Models/V1RenderLinkRequest.cs` |
| `V1RenderLinkResponse` | `src/Rendex/Models/V1RenderLinkResponse.cs` |
| `CreateRenderLinkError` | `src/Rendex/Errors/CreateRenderLinkError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### ExtractContent

- **Auth**: `options.BearerAuth`
- **Signature**: `ExtractContent(ExtractContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1ExtractResponse`
- **Error**: `ApiException<ExtractContentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 413, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExtractContentRequest` | `src/Rendex/Requests/Screenshot/ExtractContentRequest.cs` |
| `V1ExtractRequest` | `src/Rendex/Models/V1ExtractRequest.cs` |
| `V1ExtractResponse` | `src/Rendex/Models/V1ExtractResponse.cs` |
| `ExtractContentError` | `src/Rendex/Errors/ExtractContentError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### GetScreenshot

- **Auth**: `options.BearerAuth` OR `options.ApiKeyHeader` OR `options.ApiKeyQuery`
- **Signature**: `GetScreenshot(GetScreenshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Url`
- **Query params (wire ← C#)**: `url` ← `Url`, `format` ← `Format`, `width` ← `Width`, `height` ← `Height`, `fullPage` ← `FullPage`, `quality` ← `Quality`, `delay` ← `Delay`, `darkMode` ← `DarkMode`, `deviceScaleFactor` ← `DeviceScaleFactor`, `blockAds` ← `BlockAds`, `timeout` ← `Timeout`, `waitUntil` ← `WaitUntil`, `waitForSelector` ← `WaitForSelector`, `bestAttempt` ← `BestAttempt`, `selector` ← `Selector`, `device` ← `Device`, `blockCookieBanners` ← `BlockCookieBanners`, `resizeWidth` ← `ResizeWidth`, `resizeHeight` ← `ResizeHeight`, `key` ← `Key`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<GetScreenshotError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 408, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScreenshotRequest` | `src/Rendex/Requests/Screenshot/GetScreenshotRequest.cs` |
| `Format1` | `src/Rendex/Models/Enums/Format1.cs` |
| `WaitUntil1` | `src/Rendex/Models/Enums/WaitUntil1.cs` |
| `Device1` | `src/Rendex/Models/Enums/Device1.cs` |
| `GetScreenshotError` | `src/Rendex/Errors/GetScreenshotError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### PostScreenshot

- **Auth**: `options.BearerAuth`
- **Signature**: `PostScreenshot(PostScreenshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<PostScreenshotError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 408, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostScreenshotRequest` | `src/Rendex/Requests/Screenshot/PostScreenshotRequest.cs` |
| `ScreenshotRequest` | `src/Rendex/Models/ScreenshotRequest.cs` |
| `PostScreenshotError` | `src/Rendex/Errors/PostScreenshotError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### PostScreenshotJson

- **Auth**: `options.BearerAuth`
- **Signature**: `PostScreenshotJson(PostScreenshotJsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ScreenshotJsonResponse`
- **Error**: `ApiException<PostScreenshotJsonError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 408, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostScreenshotJsonRequest` | `src/Rendex/Requests/Screenshot/PostScreenshotJsonRequest.cs` |
| `ScreenshotRequest` | `src/Rendex/Models/ScreenshotRequest.cs` |
| `ScreenshotJsonResponse` | `src/Rendex/Models/ScreenshotJsonResponse.cs` |
| `PostScreenshotJsonError` | `src/Rendex/Errors/PostScreenshotJsonError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### RenderArtifact

- **Auth**: `options.BearerAuth`
- **Signature**: `RenderArtifact(RenderArtifactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1ArtifactResponse`
- **Error**: `ApiException<RenderArtifactError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RenderArtifactRequest` | `src/Rendex/Requests/Screenshot/RenderArtifactRequest.cs` |
| `V1ArtifactRequest` | `src/Rendex/Models/V1ArtifactRequest.cs` |
| `V1ArtifactResponse` | `src/Rendex/Models/V1ArtifactResponse.cs` |
| `RenderArtifactError` | `src/Rendex/Errors/RenderArtifactError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### ServeRenderLink

- **Signature**: `ServeRenderLink(ServeRenderLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `P`, `Uid`, `Exp`, `Sig`
- **Query params (wire ← C#)**: `p` ← `P`, `uid` ← `Uid`, `exp` ← `Exp`, `sig` ← `Sig`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<ServeRenderLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ServeRenderLinkRequest` | `src/Rendex/Requests/Screenshot/ServeRenderLinkRequest.cs` |
| `ServeRenderLinkError` | `src/Rendex/Errors/ServeRenderLinkError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

