<!-- Generated file — do not edit; regenerated with the SDK. -->

# Generation — operations

Accessor: `client.generation` · Source: `src/resources/generation.ts` · 2 operations · Request and error types: namespace `Generation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### generateImage

- **Signature**: `generateImage(request: Generation.GenerateImageRequestParams, options?: RequestOptions): ApiPromise<GenerateImageResult, Generation.GenerateImageError>`
- **Wire**: `POST /v2/generate/{cloud_name}/text_to_image`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GenerateImageResult`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Generation.GenerateImageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [422] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse4"` [500] `ErrorResponse` · `"errorResponse5"` [502] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Generation.GenerateImageRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `GenerateImageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateImageRequest` | `generateImageRequestSchema` | `src/models/generate-image-request.ts` |
| `GenerateImageResult` | `generateImageResultSchema` | `src/models/generate-image-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### generateImageFromImages

- **Signature**: `generateImageFromImages(request: Generation.GenerateImageFromImagesRequest, options?: RequestOptions): ApiPromise<GenerateImageResult, Generation.GenerateImageFromImagesError>`
- **Wire**: `POST /v2/generate/{cloud_name}/image_to_image`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GenerateImageResult`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Generation.GenerateImageFromImagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [422] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse6"` [500] `ErrorResponse` · `"errorResponse7"` [502] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Generation.GenerateImageFromImagesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `ImageToImageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImageToImageRequest` | `imageToImageRequestSchema` | `src/models/image-to-image-request.ts` |
| `GenerateImageResult` | `generateImageResultSchema` | `src/models/generate-image-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

