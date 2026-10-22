<!-- Generated file — do not edit; regenerated with the SDK. -->

# DedicatedImage — operations

Accessor: `client.dedicatedImage` · Source: `src/resources/dedicated-image.ts` · 2 operations · Request and error types: namespace `DedicatedImage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dedicatedImagesEdit

- **Signature**: `dedicatedImagesEdit(request: DedicatedImage.DedicatedImagesEditRequest, options?: RequestOptions): ApiPromise<ImageGenerationDedicatedResult, DedicatedImage.DedicatedImagesEditError>`
- **Wire**: `POST /dedicated/v1/images/edits`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImageGenerationDedicatedResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedImage.DedicatedImagesEditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedImage.DedicatedImagesEditRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedImageEditBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedImageEditBody` | `dedicatedImageEditBodySchema` | `src/models/dedicated-image-edit-body.ts` |
| `ImageGenerationDedicatedResult` | `imageGenerationDedicatedResultSchema` | `src/models/image-generation-dedicated-result.ts` |

### dedicatedImagesGenerate

- **Signature**: `dedicatedImagesGenerate(request: DedicatedImage.DedicatedImagesGenerateRequest, options?: RequestOptions): ApiPromise<ImageGenerationDedicatedResult, DedicatedImage.DedicatedImagesGenerateError>`
- **Wire**: `POST /dedicated/v1/images/generations`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImageGenerationDedicatedResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedImage.DedicatedImagesGenerateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedImage.DedicatedImagesGenerateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedImageGenerationBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedImageGenerationBody` | `dedicatedImageGenerationBodySchema` | `src/models/dedicated-image-generation-body.ts` |
| `ImageGenerationDedicatedResult` | `imageGenerationDedicatedResultSchema` | `src/models/image-generation-dedicated-result.ts` |

