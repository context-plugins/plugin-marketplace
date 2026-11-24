<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdImages — operations

Accessor: `client.adImages` · Source: `src/resources/ad-images.ts` · 1 operation · Request and error types: namespace `AdImages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### uploadAdImage

- **Signature**: `uploadAdImage(request: AdImages.UploadAdImageRequest, options?: RequestOptions): ApiPromise<ActAdimagesResponse, AdImages.UploadAdImageError>`
- **Wire**: `POST /act_{ad_account_id}/adimages`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `filename` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ActAdimagesResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `AdImages.UploadAdImageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdImages.UploadAdImageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes |
| `filename` | `form` | — | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActAdimagesResponse` | `actAdimagesResponseSchema` | `src/models/act-adimages-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

