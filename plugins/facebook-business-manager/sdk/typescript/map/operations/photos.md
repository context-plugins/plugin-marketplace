<!-- Generated file — do not edit; regenerated with the SDK. -->

# Photos — operations

Accessor: `client.photos` · Source: `src/resources/photos.ts` · 1 operation · Request and error types: namespace `Photos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### uploadPagePhoto

- **Signature**: `uploadPagePhoto(request: Photos.UploadPagePhotoRequest, options?: RequestOptions): ApiPromise<CreateResponse, Photos.UploadPagePhotoError>`
- **Wire**: `POST /{page_id}/photos`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Photos.UploadPagePhotoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Photos.UploadPagePhotoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes |
| `body` | `body` | — | `PhotosRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PhotosRequest` | `photosRequestSchema` | `src/models/photos-request.ts` |
| `CreateResponse` | `createResponseSchema` | `src/models/create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

