<!-- Generated file — do not edit; regenerated with the SDK. -->

# Epics — operations

Accessor: `client.epics` · Source: `src/resources/epics.ts` · 17 operations · Request and error types: namespace `Epics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createEpic

- **Signature**: `createEpic(request: Epics.CreateEpicRequest, options?: RequestOptions): ApiPromise<Epic, Epics.CreateEpicError>`
- **Wire**: `POST /api/v3/epics`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Epic`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.CreateEpicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.CreateEpicRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateEpic` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEpic` | `createEpicSchema` | `src/models/create-epic.ts` |
| `Epic` | `epicSchema` | `src/models/epic.ts` |

### createEpicComment

- **Signature**: `createEpicComment(request: Epics.CreateEpicCommentRequest, options?: RequestOptions): ApiPromise<ThreadedComment, Epics.CreateEpicCommentError>`
- **Wire**: `POST /api/v3/epics/{epic-public-id}/comments`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ThreadedComment`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.CreateEpicCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.CreateEpicCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `body` | `body` | — | `CreateEpicComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEpicComment` | `createEpicCommentSchema` | `src/models/create-epic-comment.ts` |
| `ThreadedComment` | `threadedCommentSchema` | `src/models/threaded-comment.ts` |

### createEpicCommentComment

- **Signature**: `createEpicCommentComment(request: Epics.CreateEpicCommentCommentRequest, options?: RequestOptions): ApiPromise<ThreadedComment, Epics.CreateEpicCommentCommentError>`
- **Wire**: `POST /api/v3/epics/{epic-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ThreadedComment`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.CreateEpicCommentCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.CreateEpicCommentCommentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |
| `body` | `body` | — | `CreateCommentComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCommentComment` | `createCommentCommentSchema` | `src/models/create-comment-comment.ts` |
| `ThreadedComment` | `threadedCommentSchema` | `src/models/threaded-comment.ts` |

### createEpicHealth

- **Signature**: `createEpicHealth(request: Epics.CreateEpicHealthRequest, options?: RequestOptions): ApiPromise<Health, Epics.CreateEpicHealthError>`
- **Wire**: `POST /api/v3/epics/{epic-public-id}/health`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Health`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.CreateEpicHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.CreateEpicHealthRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `body` | `body` | — | `CreateEpicHealth` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEpicHealth` | `createEpicHealthSchema` | `src/models/create-epic-health.ts` |
| `Health` | `healthSchema` | `src/models/health.ts` |

### deleteEpic

- **Signature**: `deleteEpic(request: Epics.DeleteEpicRequest, options?: RequestOptions): ApiPromise<undefined, Epics.DeleteEpicError>`
- **Wire**: `DELETE /api/v3/epics/{epic-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.DeleteEpicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.DeleteEpicRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

### deleteEpicComment

- **Signature**: `deleteEpicComment(request: Epics.DeleteEpicCommentRequest, options?: RequestOptions): ApiPromise<undefined, Epics.DeleteEpicCommentError>`
- **Wire**: `DELETE /api/v3/epics/{epic-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.DeleteEpicCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.DeleteEpicCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |

### getEpic

- **Signature**: `getEpic(request: Epics.GetEpicRequest, options?: RequestOptions): ApiPromise<Epic, Epics.GetEpicError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Epic`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.GetEpicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.GetEpicRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Epic` | `epicSchema` | `src/models/epic.ts` |

### getEpicComment

- **Signature**: `getEpicComment(request: Epics.GetEpicCommentRequest, options?: RequestOptions): ApiPromise<ThreadedComment, Epics.GetEpicCommentError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ThreadedComment`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.GetEpicCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.GetEpicCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ThreadedComment` | `threadedCommentSchema` | `src/models/threaded-comment.ts` |

### getEpicHealth

- **Signature**: `getEpicHealth(request: Epics.GetEpicHealthRequest, options?: RequestOptions): ApiPromise<Health, Epics.GetEpicHealthError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}/health`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Health`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.GetEpicHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.GetEpicHealthRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Health` | `healthSchema` | `src/models/health.ts` |

### listEpicComments

- **Signature**: `listEpicComments(request: Epics.ListEpicCommentsRequest, options?: RequestOptions): ApiPromise<ThreadedComment[], Epics.ListEpicCommentsError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}/comments`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ThreadedComment[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.ListEpicCommentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.ListEpicCommentsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ThreadedComment` | `threadedCommentSchema` | `src/models/threaded-comment.ts` |

### listEpicDocuments

- **Signature**: `listEpicDocuments(request: Epics.ListEpicDocumentsRequest, options?: RequestOptions): ApiPromise<DocSlim[], Epics.ListEpicDocumentsError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}/documents`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.ListEpicDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.ListEpicDocumentsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocSlim` | `docSlimSchema` | `src/models/doc-slim.ts` |

### listEpicHealths

- **Signature**: `listEpicHealths(request: Epics.ListEpicHealthsRequest, options?: RequestOptions): ApiPromise<Health[], Epics.ListEpicHealthsError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}/health-history`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Health[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.ListEpicHealthsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.ListEpicHealthsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Health` | `healthSchema` | `src/models/health.ts` |

### listEpicStories

- **Signature**: `listEpicStories(request: Epics.ListEpicStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], Epics.ListEpicStoriesError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.ListEpicStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.ListEpicStoriesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `includesDescription` | `query` | `includes_description` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |

### listEpics

- **Signature**: `listEpics(request?: Epics.ListEpicsRequest, options?: RequestOptions): ApiPromise<EpicSlim[], Epics.ListEpicsError>`
- **Wire**: `GET /api/v3/epics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.ListEpicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.ListEpicsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `includesDescription` | `query` | `includes_description` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicSlim` | `epicSlimSchema` | `src/models/epic-slim.ts` |

### listEpicsPaginated

- **Signature**: `listEpicsPaginated(request?: Epics.ListEpicsPaginatedRequest, options?: RequestOptions): ApiPromise<EpicPaginatedResults, Epics.ListEpicsPaginatedError>`
- **Wire**: `GET /api/v3/epics/paginated`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicPaginatedResults`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.ListEpicsPaginatedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.ListEpicsPaginatedRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `includesDescription` | `query` | `includes_description` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `pageSize` | `query` | `page_size` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicPaginatedResults` | `epicPaginatedResultsSchema` | `src/models/epic-paginated-results.ts` |

### updateEpic

- **Signature**: `updateEpic(request: Epics.UpdateEpicRequest, options?: RequestOptions): ApiPromise<Epic, Epics.UpdateEpicError>`
- **Wire**: `PUT /api/v3/epics/{epic-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Epic`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.UpdateEpicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.UpdateEpicRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateEpic` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateEpic` | `updateEpicSchema` | `src/models/update-epic.ts` |
| `Epic` | `epicSchema` | `src/models/epic.ts` |

### updateEpicComment

- **Signature**: `updateEpicComment(request: Epics.UpdateEpicCommentRequest, options?: RequestOptions): ApiPromise<ThreadedComment, Epics.UpdateEpicCommentError>`
- **Wire**: `PUT /api/v3/epics/{epic-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ThreadedComment`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Epics.UpdateEpicCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Epics.UpdateEpicCommentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateComment` | `updateCommentSchema` | `src/models/update-comment.ts` |
| `ThreadedComment` | `threadedCommentSchema` | `src/models/threaded-comment.ts` |

