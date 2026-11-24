<!-- Generated file — do not edit; regenerated with the SDK. -->

# Images — operations

Accessor: `client.images` · Source: `src/resources/images.ts` · 7 operations · Request and error types: namespace `Images`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### facedetect

- **Signature**: `facedetect(request?: Images.FacedetectRequest, options?: RequestOptions): ApiPromise<V1FacedetectResponse, Images.FacedetectError>`
- **Wire**: `POST /v1/facedetect`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `image` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1FacedetectResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Images.FacedetectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Images.FacedetectRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `confidence` | `query` | `number` | no |
| `image` | `form` | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1FacedetectResponse` | `v1FacedetectResponseSchema` | `src/models/v1-facedetect-response.ts` |

### heicconverter

- **Signature**: `heicconverter(request: Images.HeicconverterRequest, options?: RequestOptions): ApiPromise<V1HeicconverterResponse, Images.HeicconverterError>`
- **Wire**: `POST /v1/heicconverter`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `image` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1HeicconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Images.HeicconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Images.HeicconverterRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `outputFormat` | `query` | `string` | yes |
| `quality` | `query` | `number` | no |
| `maxWidth` | `query` | `number` | no |
| `maxHeight` | `query` | `number` | no |
| `image` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HeicconverterResponse` | `v1HeicconverterResponseSchema` | `src/models/v1-heicconverter-response.ts` |

### imageconverter

- **Signature**: `imageconverter(request: Images.ImageconverterRequest, options?: RequestOptions): ApiPromise<V1ImageconverterResponse, Images.ImageconverterError>`
- **Wire**: `POST /v1/imageconverter`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `image` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ImageconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Images.ImageconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Images.ImageconverterRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `outputFormat` | `query` | `string` | yes |
| `quality` | `query` | `number` | no |
| `maxWidth` | `query` | `number` | no |
| `maxHeight` | `query` | `number` | no |
| `image` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ImageconverterResponse` | `v1ImageconverterResponseSchema` | `src/models/v1-imageconverter-response.ts` |

### nsfwimagedetector

- **Signature**: `nsfwimagedetector(request: Images.NsfwimagedetectorRequest, options?: RequestOptions): ApiPromise<V1NsfwimagedetectorResponse, Images.NsfwimagedetectorError>`
- **Wire**: `POST /v1/nsfwimagedetector`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `image` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1NsfwimagedetectorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Images.NsfwimagedetectorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Images.NsfwimagedetectorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `image` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1NsfwimagedetectorResponse` | `v1NsfwimagedetectorResponseSchema` | `src/models/v1-nsfwimagedetector-response.ts` |

### qrcodereader

- **Signature**: `qrcodereader(request: Images.QrcodereaderRequest, options?: RequestOptions): ApiPromise<V1QrcodereaderResponse, Images.QrcodereaderError>`
- **Wire**: `POST /v1/qrcodereader`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `image` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1QrcodereaderResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Images.QrcodereaderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Images.QrcodereaderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `image` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1QrcodereaderResponse` | `v1QrcodereaderResponseSchema` | `src/models/v1-qrcodereader-response.ts` |

### svgconverter

- **Signature**: `svgconverter(request: Images.SvgconverterRequest, options?: RequestOptions): ApiPromise<V1SvgconverterResponse, Images.SvgconverterError>`
- **Wire**: `POST /v1/svgconverter`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `image` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SvgconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Images.SvgconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Images.SvgconverterRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `outputFormat` | `query` | `string` | yes |
| `quality` | `query` | `number` | no |
| `maxWidth` | `query` | `number` | no |
| `maxHeight` | `query` | `number` | no |
| `image` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SvgconverterResponse` | `v1SvgconverterResponseSchema` | `src/models/v1-svgconverter-response.ts` |

### webpconverter

- **Signature**: `webpconverter(request: Images.WebpconverterRequest, options?: RequestOptions): ApiPromise<V1WebpconverterResponse, Images.WebpconverterError>`
- **Wire**: `POST /v1/webpconverter`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `image` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1WebpconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Images.WebpconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Images.WebpconverterRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `outputFormat` | `query` | `string` | yes |
| `quality` | `query` | `number` | no |
| `maxWidth` | `query` | `number` | no |
| `maxHeight` | `query` | `number` | no |
| `image` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebpconverterResponse` | `v1WebpconverterResponseSchema` | `src/models/v1-webpconverter-response.ts` |

