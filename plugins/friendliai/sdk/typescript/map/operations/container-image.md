<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContainerImage — operations

Accessor: `client.containerImage` · Source: `src/resources/container-image.ts` · 2 operations · Request and error types: namespace `ContainerImage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### containerImagesEdit

- **Signature**: `containerImagesEdit(request: ContainerImage.ContainerImagesEditRequest, options?: RequestOptions): ApiPromise<ImageGenerationContainerResult, ContainerImage.ContainerImagesEditError>`
- **Wire**: `POST /v1/images/edits`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImageGenerationContainerResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerImage.ContainerImagesEditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerImage.ContainerImagesEditRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerImageEditBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerImageEditBody` | `containerImageEditBodySchema` | `src/models/container-image-edit-body.ts` |
| `ImageGenerationContainerResult` | `imageGenerationContainerResultSchema` | `src/models/image-generation-container-result.ts` |

### containerImagesGenerate

- **Signature**: `containerImagesGenerate(request: ContainerImage.ContainerImagesGenerateRequest, options?: RequestOptions): ApiPromise<ImageGenerationContainerResult, ContainerImage.ContainerImagesGenerateError>`
- **Wire**: `POST /v1/images/generations`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImageGenerationContainerResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerImage.ContainerImagesGenerateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerImage.ContainerImagesGenerateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerImageGenerationBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerImageGenerationBody` | `containerImageGenerationBodySchema` | `src/models/container-image-generation-body.ts` |
| `ImageGenerationContainerResult` | `imageGenerationContainerResultSchema` | `src/models/image-generation-container-result.ts` |

