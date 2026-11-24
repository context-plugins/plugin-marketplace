<!-- Generated file — do not edit; regenerated with the SDK. -->

# Images — operations

Accessor: `client.images` · Source: `api_verve/apis/images.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.images.facedetect

- **Route**: `POST /v1/facedetect`
- **Auth**: `api_key`
- **Signature**: `def facedetect(*, confidence: float | None = None, image: FileInput | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `confidence` — query · `image` — multipart file
- **Returns (parsed)**: `V1FacedetectResponse`
- **Returns (raw)**: `ApiResult[V1FacedetectResponse, FacedetectErrorBody]`
- **Error**: `FacedetectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1FacedetectResponse` | `api_verve/models/v1_facedetect_response.py` |
| `FacedetectErrorBody` | `api_verve/errors/facedetect_error.py` |

### client.images.heicconverter

- **Route**: `POST /v1/heicconverter`
- **Auth**: `api_key`
- **Signature**: `def heicconverter(output_format: str, image: FileInput, *, quality: int | None = None, max_width: int | None = None, max_height: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `output_format`, `image`
- **Params**: `output_format` — query `outputFormat` · `quality` — query · `max_width` — query `maxWidth` · `max_height` — query `maxHeight` · `image` — multipart file
- **Returns (parsed)**: `V1HeicconverterResponse`
- **Returns (raw)**: `ApiResult[V1HeicconverterResponse, HeicconverterErrorBody]`
- **Error**: `HeicconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HeicconverterResponse` | `api_verve/models/v1_heicconverter_response.py` |
| `HeicconverterErrorBody` | `api_verve/errors/heicconverter_error.py` |

### client.images.imageconverter

- **Route**: `POST /v1/imageconverter`
- **Auth**: `api_key`
- **Signature**: `def imageconverter(output_format: str, image: FileInput, *, quality: int | None = None, max_width: int | None = None, max_height: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `output_format`, `image`
- **Params**: `output_format` — query `outputFormat` · `quality` — query · `max_width` — query `maxWidth` · `max_height` — query `maxHeight` · `image` — multipart file
- **Returns (parsed)**: `V1ImageconverterResponse`
- **Returns (raw)**: `ApiResult[V1ImageconverterResponse, ImageconverterErrorBody]`
- **Error**: `ImageconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ImageconverterResponse` | `api_verve/models/v1_imageconverter_response.py` |
| `ImageconverterErrorBody` | `api_verve/errors/imageconverter_error.py` |

### client.images.nsfwimagedetector

- **Route**: `POST /v1/nsfwimagedetector`
- **Auth**: `api_key`
- **Signature**: `def nsfwimagedetector(image: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `image`
- **Params**: `image` — multipart file
- **Returns (parsed)**: `V1NsfwimagedetectorResponse`
- **Returns (raw)**: `ApiResult[V1NsfwimagedetectorResponse, NsfwimagedetectorErrorBody]`
- **Error**: `NsfwimagedetectorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1NsfwimagedetectorResponse` | `api_verve/models/v1_nsfwimagedetector_response.py` |
| `NsfwimagedetectorErrorBody` | `api_verve/errors/nsfwimagedetector_error.py` |

### client.images.qrcodereader

- **Route**: `POST /v1/qrcodereader`
- **Auth**: `api_key`
- **Signature**: `def qrcodereader(image: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `image`
- **Params**: `image` — multipart file
- **Returns (parsed)**: `V1QrcodereaderResponse`
- **Returns (raw)**: `ApiResult[V1QrcodereaderResponse, QrcodereaderErrorBody]`
- **Error**: `QrcodereaderErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1QrcodereaderResponse` | `api_verve/models/v1_qrcodereader_response.py` |
| `QrcodereaderErrorBody` | `api_verve/errors/qrcodereader_error.py` |

### client.images.svgconverter

- **Route**: `POST /v1/svgconverter`
- **Auth**: `api_key`
- **Signature**: `def svgconverter(output_format: str, image: FileInput, *, quality: int | None = None, max_width: int | None = None, max_height: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `output_format`, `image`
- **Params**: `output_format` — query `outputFormat` · `quality` — query · `max_width` — query `maxWidth` · `max_height` — query `maxHeight` · `image` — multipart file
- **Returns (parsed)**: `V1SvgconverterResponse`
- **Returns (raw)**: `ApiResult[V1SvgconverterResponse, SvgconverterErrorBody]`
- **Error**: `SvgconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SvgconverterResponse` | `api_verve/models/v1_svgconverter_response.py` |
| `SvgconverterErrorBody` | `api_verve/errors/svgconverter_error.py` |

### client.images.webpconverter

- **Route**: `POST /v1/webpconverter`
- **Auth**: `api_key`
- **Signature**: `def webpconverter(output_format: str, image: FileInput, *, quality: int | None = None, max_width: int | None = None, max_height: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `output_format`, `image`
- **Params**: `output_format` — query `outputFormat` · `quality` — query · `max_width` — query `maxWidth` · `max_height` — query `maxHeight` · `image` — multipart file
- **Returns (parsed)**: `V1WebpconverterResponse`
- **Returns (raw)**: `ApiResult[V1WebpconverterResponse, WebpconverterErrorBody]`
- **Error**: `WebpconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebpconverterResponse` | `api_verve/models/v1_webpconverter_response.py` |
| `WebpconverterErrorBody` | `api_verve/errors/webpconverter_error.py` |

