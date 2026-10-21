<!-- Generated file — do not edit; regenerated with the SDK. -->

# Skills — operations

Accessor: `client.skills` · Source: `src/resources/skills.ts` · 15 operations · Request and error types: namespace `Skills`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-platform-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### platformSkillsCreate

- **Signature**: `platformSkillsCreate(request: Skills.PlatformSkillsCreateRequest, options?: RequestOptions): ApiPromise<PlatformSkillCreateResponse, Skills.PlatformSkillsCreateError>`
- **Wire**: `POST /api/skills`
- **Auth**: `apiToken`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformSkillCreateResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error409"` [409] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `file` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformSkillCreateResponse` | `platformSkillCreateResponseSchema` | `src/models/platform-skill-create-response.ts` |

### platformSkillsCreateVersion

- **Signature**: `platformSkillsCreateVersion(request: Skills.PlatformSkillsCreateVersionRequest, options?: RequestOptions): ApiPromise<PlatformSkillVersionCreateResponse, Skills.PlatformSkillsCreateVersionError>`
- **Wire**: `POST /api/skills/{skill_id}/versions`
- **Auth**: `apiToken`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformSkillVersionCreateResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsCreateVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error409"` [409] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsCreateVersionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `skillId` | `path` | `skill_id` | `string` | yes |
| `file` | `form` | — | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformSkillVersionCreateResponse` | `platformSkillVersionCreateResponseSchema` | `src/models/platform-skill-version-create-response.ts` |

### platformSkillsDelete

- **Signature**: `platformSkillsDelete(request: Skills.PlatformSkillsDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Skills.PlatformSkillsDeleteError>`
- **Wire**: `DELETE /api/skills/{skill_id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `skillId` | `path` | `skill_id` | `string` | yes |

### platformSkillsGet

- **Signature**: `platformSkillsGet(request: Skills.PlatformSkillsGetRequest, options?: RequestOptions): ApiPromise<PlatformSkillGetResponse, Skills.PlatformSkillsGetError>`
- **Wire**: `GET /api/skills/{skill_id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformSkillGetResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `skillId` | `path` | `skill_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformSkillGetResponse` | `platformSkillGetResponseSchema` | `src/models/platform-skill-get-response.ts` |

### platformSkillsGetContent

- **Signature**: `platformSkillsGetContent(request: Skills.PlatformSkillsGetContentRequest, options?: RequestOptions): ApiPromise<BinaryContent, Skills.PlatformSkillsGetContentError>`
- **Wire**: `GET /api/skills/{skill_id}/content`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsGetContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsGetContentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `skillId` | `path` | `skill_id` | `string` | yes |

### platformSkillsGetVersion

- **Signature**: `platformSkillsGetVersion(request: Skills.PlatformSkillsGetVersionRequest, options?: RequestOptions): ApiPromise<PlatformSkillVersionGetResponse, Skills.PlatformSkillsGetVersionError>`
- **Wire**: `GET /api/skills/{skill_id}/versions/{version}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformSkillVersionGetResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsGetVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsGetVersionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `skillId` | `path` | `skill_id` | `string` | yes |
| `version` | `path` | — | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformSkillVersionGetResponse` | `platformSkillVersionGetResponseSchema` | `src/models/platform-skill-version-get-response.ts` |

### platformSkillsGetVersionContent

- **Signature**: `platformSkillsGetVersionContent(request: Skills.PlatformSkillsGetVersionContentRequest, options?: RequestOptions): ApiPromise<BinaryContent, Skills.PlatformSkillsGetVersionContentError>`
- **Wire**: `GET /api/skills/{skill_id}/versions/{version}/content`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsGetVersionContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsGetVersionContentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `skillId` | `path` | `skill_id` | `string` | yes |
| `version` | `path` | — | `number` | yes |

### platformSkillsImport

- **Signature**: `platformSkillsImport(request: Skills.PlatformSkillsImportRequest, options?: RequestOptions): ApiPromise<PlatformSkillImportResponse, Skills.PlatformSkillsImportError>`
- **Wire**: `POST /api/skills/import`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformSkillImportResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsImportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error408"` [408] no body · `"error409"` [409] no body · `"error413"` [413] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsImportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlatformSkillImportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformSkillImportRequest` | `platformSkillImportRequestSchema` | `src/models/platform-skill-import-request.ts` |
| `PlatformSkillImportResponse` | `platformSkillImportResponseSchema` | `src/models/platform-skill-import-response.ts` |

### platformSkillsList

- **Signature**: `platformSkillsList(request: Skills.PlatformSkillsListRequest, options?: RequestOptions): ApiPromise<PlatformSkillsListResponse, Skills.PlatformSkillsListError>`
- **Wire**: `GET /api/skills`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformSkillsListResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsListRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |
| `cursor` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformSkillsListResponse` | `platformSkillsListResponseSchema` | `src/models/platform-skills-list-response.ts` |

### platformSkillsListVersions

- **Signature**: `platformSkillsListVersions(request: Skills.PlatformSkillsListVersionsRequest, options?: RequestOptions): ApiPromise<PlatformSkillVersionsListResponse, Skills.PlatformSkillsListVersionsError>`
- **Wire**: `GET /api/skills/{skill_id}/versions`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformSkillVersionsListResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsListVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsListVersionsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `skillId` | `path` | `skill_id` | `string` | yes | — |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |
| `cursor` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformSkillVersionsListResponse` | `platformSkillVersionsListResponseSchema` | `src/models/platform-skill-versions-list-response.ts` |

### platformSkillsPreviewSource

- **Signature**: `platformSkillsPreviewSource(request: Skills.PlatformSkillsPreviewSourceRequest, options?: RequestOptions): ApiPromise<PlatformSkillSourcePreviewResponse, Skills.PlatformSkillsPreviewSourceError>`
- **Wire**: `POST /api/skills/sources/preview`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformSkillSourcePreviewResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsPreviewSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsPreviewSourceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiSkillsSourcesPreviewRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiSkillsSourcesPreviewRequest` | `apiSkillsSourcesPreviewRequestSchema` | `src/models/api-skills-sources-preview-request.ts` |
| `PlatformSkillSourcePreviewResponse` | `platformSkillSourcePreviewResponseSchema` | `src/models/platform-skill-source-preview-response.ts` |

### platformSkillsPreviewSourceStream

- **Signature**: `platformSkillsPreviewSourceStream(request: Skills.PlatformSkillsPreviewSourceStreamRequest, options?: RequestOptions): ApiPromise<EventStream<PlatformSkillSourcePreviewStreamEventServerSentEvent>, Skills.PlatformSkillsPreviewSourceStreamError>`
- **Wire**: `POST /api/skills/sources/preview#stream`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<PlatformSkillSourcePreviewStreamEventServerSentEvent>` — `text/event-stream`, resolved at the response headers and read one `PlatformSkillSourcePreviewStreamEventServerSentEvent` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `PlatformSkillSourcePreviewStreamEventServerSentEvent`, whatever the event is named. The stream ends when the server closes it
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsPreviewSourceStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsPreviewSourceStreamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiSkillsSourcesPreviewStreamRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiSkillsSourcesPreviewStreamRequest` | `apiSkillsSourcesPreviewStreamRequestSchema` | `src/models/api-skills-sources-preview-stream-request.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `PlatformSkillSourcePreviewStreamEventServerSentEvent` | `platformSkillSourcePreviewStreamEventServerSentEventSchema` | `src/models/unions/platform-skill-source-preview-stream-event-server-sent-event.ts` |

### platformSkillsSync

- **Signature**: `platformSkillsSync(request: Skills.PlatformSkillsSyncRequest, options?: RequestOptions): ApiPromise<PlatformSkillSyncResponse, Skills.PlatformSkillsSyncError>`
- **Wire**: `POST /api/skills/{skill_id}/sync`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformSkillSyncResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error409"` [409] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsSyncRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `skillId` | `path` | `skill_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformSkillSyncResponse` | `platformSkillSyncResponseSchema` | `src/models/platform-skill-sync-response.ts` |

### platformSkillsUpdate

- **Signature**: `platformSkillsUpdate(request: Skills.PlatformSkillsUpdateRequest, options?: RequestOptions): ApiPromise<PlatformSkillUpdateResponse, Skills.PlatformSkillsUpdateError>`
- **Wire**: `PATCH /api/skills/{skill_id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformSkillUpdateResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error409"` [409] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsUpdateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `skillId` | `path` | `skill_id` | `string` | yes |
| `body` | `body` | — | `PlatformSkillUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformSkillUpdateRequest` | `platformSkillUpdateRequestSchema` | `src/models/platform-skill-update-request.ts` |
| `PlatformSkillUpdateResponse` | `platformSkillUpdateResponseSchema` | `src/models/platform-skill-update-response.ts` |

### platformSkillsValidate

- **Signature**: `platformSkillsValidate(request: Skills.PlatformSkillsValidateRequest, options?: RequestOptions): ApiPromise<PlatformSkillValidationResponse, Skills.PlatformSkillsValidateError>`
- **Wire**: `POST /api/skills/validation`
- **Auth**: `apiToken`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformSkillValidationResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Skills.PlatformSkillsValidateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Skills.PlatformSkillsValidateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `file` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformSkillValidationResponse` | `platformSkillValidationResponseSchema` | `src/models/platform-skill-validation-response.ts` |

