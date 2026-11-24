<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screenshot — operations

Accessor: `client.screenshot` · Source: `rendex/apis/screenshot.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.screenshot.create_render_link

- **Route**: `POST /v1/render/link`
- **Auth**: `bearer_auth`
- **Signature**: `def create_render_link(body: V1RenderLinkRequest | V1RenderLinkRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1RenderLinkResponse`
- **Returns (raw)**: `ApiResult[V1RenderLinkResponse, CreateRenderLinkErrorBody]`
- **Error**: `CreateRenderLinkErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1RenderLinkRequest` | `rendex/models/v1_render_link_request.py` |
| `V1RenderLinkRequestDict` | `rendex/models/v1_render_link_request.py` |
| `V1RenderLinkResponse` | `rendex/models/v1_render_link_response.py` |
| `CreateRenderLinkErrorBody` | `rendex/errors/create_render_link_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.screenshot.extract_content

- **Route**: `POST /v1/extract`
- **Auth**: `bearer_auth`
- **Signature**: `def extract_content(body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1ExtractResponse`
- **Returns (raw)**: `ApiResult[V1ExtractResponse, ExtractContentErrorBody]`
- **Error**: `ExtractContentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 413, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ExtractRequest` | `rendex/models/v1_extract_request.py` |
| `V1ExtractRequestDict` | `rendex/models/v1_extract_request.py` |
| `V1ExtractResponse` | `rendex/models/v1_extract_response.py` |
| `ExtractContentErrorBody` | `rendex/errors/extract_content_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.screenshot.get_screenshot

- **Route**: `GET /v1/screenshot`
- **Auth**: `bearer_auth` OR `api_key_header` OR `api_key_query`
- **Signature**: `def get_screenshot(url: str, *, format_: Format1OrStr | None = Format1.PNG, width: int | None = 1280, height: int | None = 800, full_page: bool | None = False, quality: int | None = None, delay: int | None = 0, dark_mode: bool | None = False, device_scale_factor: float | None = 2.0, block_ads: bool | None = True, timeout: int | None = 30, wait_until: WaitUntil1OrStr | None = WaitUntil1.NETWORKIDLE2, wait_for_selector: str | None = None, best_attempt: bool | None = True, selector: str | None = None, device: Device1OrStr | None = None, block_cookie_banners: bool | None = False, resize_width: int | None = None, resize_height: int | None = None, key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `url`
- **Params**: `url` — query · `format_` — query `format` · `width` — query · `height` — query · `full_page` — query `fullPage` · `quality` — query · `delay` — query · `dark_mode` — query `darkMode` · `device_scale_factor` — query `deviceScaleFactor` · `block_ads` — query `blockAds` · `timeout` — query · `wait_until` — query `waitUntil` · `wait_for_selector` — query `waitForSelector` · `best_attempt` — query `bestAttempt` · `selector` — query · `device` — query · `block_cookie_banners` — query `blockCookieBanners` · `resize_width` — query `resizeWidth` · `resize_height` — query `resizeHeight` · `key` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, GetScreenshotErrorBody]`
- **Error**: `GetScreenshotErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 408, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Format1OrStr` | `rendex/models/enums/format1.py` |
| `WaitUntil1OrStr` | `rendex/models/enums/wait_until1.py` |
| `Device1OrStr` | `rendex/models/enums/device1.py` |
| `GetScreenshotErrorBody` | `rendex/errors/get_screenshot_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.screenshot.post_screenshot

- **Route**: `POST /v1/screenshot`
- **Auth**: `bearer_auth`
- **Signature**: `def post_screenshot(body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, PostScreenshotErrorBody]`
- **Error**: `PostScreenshotErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 408, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScreenshotRequest` | `rendex/models/screenshot_request.py` |
| `ScreenshotRequestDict` | `rendex/models/screenshot_request.py` |
| `PostScreenshotErrorBody` | `rendex/errors/post_screenshot_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.screenshot.post_screenshot_json

- **Route**: `POST /v1/screenshot/json`
- **Auth**: `bearer_auth`
- **Signature**: `def post_screenshot_json(body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ScreenshotJsonResponse`
- **Returns (raw)**: `ApiResult[ScreenshotJsonResponse, PostScreenshotJsonErrorBody]`
- **Error**: `PostScreenshotJsonErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 408, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScreenshotRequest` | `rendex/models/screenshot_request.py` |
| `ScreenshotRequestDict` | `rendex/models/screenshot_request.py` |
| `ScreenshotJsonResponse` | `rendex/models/screenshot_json_response.py` |
| `PostScreenshotJsonErrorBody` | `rendex/errors/post_screenshot_json_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.screenshot.render_artifact

- **Route**: `POST /v1/artifact`
- **Auth**: `bearer_auth`
- **Signature**: `def render_artifact(body: V1ArtifactRequest | V1ArtifactRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1ArtifactResponse`
- **Returns (raw)**: `ApiResult[V1ArtifactResponse, RenderArtifactErrorBody]`
- **Error**: `RenderArtifactErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ArtifactRequest` | `rendex/models/v1_artifact_request.py` |
| `V1ArtifactRequestDict` | `rendex/models/v1_artifact_request.py` |
| `V1ArtifactResponse` | `rendex/models/v1_artifact_response.py` |
| `RenderArtifactErrorBody` | `rendex/errors/render_artifact_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.screenshot.serve_render_link

- **Route**: `GET /v1/render`
- **Signature**: `def serve_render_link(p: str, uid: str, exp: int, sig: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `p`, `uid`, `exp`, `sig`
- **Params**: `p` — query · `uid` — query · `exp` — query · `sig` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, ServeRenderLinkErrorBody]`
- **Error**: `ServeRenderLinkErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ServeRenderLinkErrorBody` | `rendex/errors/serve_render_link_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

