<!-- Generated file — do not edit; regenerated with the SDK. -->

# Labels — operations

Accessor: `client.labels` · Source: `src/resources/labels.ts` · 7 operations · Request and error types: namespace `Labels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createLabel

- **Signature**: `createLabel(request: Labels.CreateLabelRequest, options?: RequestOptions): ApiPromise<Label, Labels.CreateLabelError>`
- **Wire**: `POST /api/v3/labels`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Label`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Labels.CreateLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.CreateLabelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateLabelParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateLabelParams` | `createLabelParamsSchema` | `src/models/create-label-params.ts` |
| `Label` | `labelSchema` | `src/models/label.ts` |

### deleteLabel

- **Signature**: `deleteLabel(request: Labels.DeleteLabelRequest, options?: RequestOptions): ApiPromise<undefined, Labels.DeleteLabelError>`
- **Wire**: `DELETE /api/v3/labels/{label-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Labels.DeleteLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.DeleteLabelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelPublicId` | `path` | `label-public-id` | `number` | yes |

### getLabel

- **Signature**: `getLabel(request: Labels.GetLabelRequest, options?: RequestOptions): ApiPromise<Label, Labels.GetLabelError>`
- **Wire**: `GET /api/v3/labels/{label-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Label`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Labels.GetLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.GetLabelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelPublicId` | `path` | `label-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Label` | `labelSchema` | `src/models/label.ts` |

### listLabelEpics

- **Signature**: `listLabelEpics(request: Labels.ListLabelEpicsRequest, options?: RequestOptions): ApiPromise<EpicSlim[], Labels.ListLabelEpicsError>`
- **Wire**: `GET /api/v3/labels/{label-public-id}/epics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Labels.ListLabelEpicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.ListLabelEpicsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelPublicId` | `path` | `label-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicSlim` | `epicSlimSchema` | `src/models/epic-slim.ts` |

### listLabelStories

- **Signature**: `listLabelStories(request: Labels.ListLabelStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], Labels.ListLabelStoriesError>`
- **Wire**: `GET /api/v3/labels/{label-public-id}/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Labels.ListLabelStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.ListLabelStoriesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelPublicId` | `path` | `label-public-id` | `number` | yes |
| `includesDescription` | `query` | `includes_description` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |

### listLabels

- **Signature**: `listLabels(request?: Labels.ListLabelsRequest, options?: RequestOptions): ApiPromise<Label[], Labels.ListLabelsError>`
- **Wire**: `GET /api/v3/labels`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Label[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Labels.ListLabelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.ListLabelsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slim` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Label` | `labelSchema` | `src/models/label.ts` |

### updateLabel

- **Signature**: `updateLabel(request: Labels.UpdateLabelRequest, options?: RequestOptions): ApiPromise<Label, Labels.UpdateLabelError>`
- **Wire**: `PUT /api/v3/labels/{label-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Label`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Labels.UpdateLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.UpdateLabelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelPublicId` | `path` | `label-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateLabel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateLabel` | `updateLabelSchema` | `src/models/update-label.ts` |
| `Label` | `labelSchema` | `src/models/label.ts` |

