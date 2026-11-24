<!-- Generated file — do not edit; regenerated with the SDK. -->

# Videos — operations

Accessor: `client.videos` · Source: `src/resources/videos.ts` · 1 operation · Request and error types: namespace `Videos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### uploadPageVideo

- **Signature**: `uploadPageVideo(request: Videos.UploadPageVideoRequest, options?: RequestOptions): ApiPromise<CreateResponse, Videos.UploadPageVideoError>`
- **Wire**: `POST /{page_id}/videos`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Videos.UploadPageVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Videos.UploadPageVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes |
| `body` | `body` | — | `VideosRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosRequest` | `videosRequestSchema` | `src/models/videos-request.ts` |
| `CreateResponse` | `createResponseSchema` | `src/models/create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

