<!-- Generated file — do not edit; regenerated with the SDK. -->

# Labels — operations

Accessor: `client.labels` · Source: `src/resources/labels.ts` · 9 operations · Request and error types: namespace `Labels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createLabelApiV1LabelsPost

- **Signature**: `createLabelApiV1LabelsPost(request: Labels.CreateLabelApiV1LabelsPostRequest, options?: RequestOptions): ApiPromise<LabelRestView, Labels.CreateLabelApiV1LabelsPostError>`
- **Wire**: `POST /api/v1/labels`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LabelRestView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Labels.CreateLabelApiV1LabelsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.CreateLabelApiV1LabelsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body13` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body13` | `body13Schema` | `src/models/body13.ts` |
| `LabelRestView` | `labelRestViewSchema` | `src/models/label-rest-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### deleteLabelApiV1LabelsLabelIdDelete

- **Signature**: `deleteLabelApiV1LabelsLabelIdDelete(request: Labels.DeleteLabelApiV1LabelsLabelIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Labels.DeleteLabelApiV1LabelsLabelIdDeleteError>`
- **Wire**: `DELETE /api/v1/labels/{label_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Labels.DeleteLabelApiV1LabelsLabelIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.DeleteLabelApiV1LabelsLabelIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelId` | `path` | `label_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getLabelApiV1LabelsLabelIdGet

- **Signature**: `getLabelApiV1LabelsLabelIdGet(request: Labels.GetLabelApiV1LabelsLabelIdGetRequest, options?: RequestOptions): ApiPromise<LabelRestView, Labels.GetLabelApiV1LabelsLabelIdGetError>`
- **Wire**: `GET /api/v1/labels/{label_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LabelRestView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Labels.GetLabelApiV1LabelsLabelIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.GetLabelApiV1LabelsLabelIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelId` | `path` | `label_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LabelRestView` | `labelRestViewSchema` | `src/models/label-rest-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getLabelsApiV1LabelsGet

- **Signature**: `getLabelsApiV1LabelsGet(request?: Labels.GetLabelsApiV1LabelsGetRequest, options?: RequestOptions): ApiPromise<PaginatedList5, Labels.GetLabelsApiV1LabelsGetError>`
- **Wire**: `GET /api/v1/labels`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList5`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Labels.GetLabelsApiV1LabelsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.GetLabelsApiV1LabelsGetRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList5` | `paginatedList5Schema` | `src/models/paginated-list5.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### searchLabelsApiV1LabelsSearchGet

- **Signature**: `searchLabelsApiV1LabelsSearchGet(request: Labels.SearchLabelsApiV1LabelsSearchGetRequest, options?: RequestOptions): ApiPromise<PaginatedList5, Labels.SearchLabelsApiV1LabelsSearchGetError>`
- **Wire**: `GET /api/v1/labels/search`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList5`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Labels.SearchLabelsApiV1LabelsSearchGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.SearchLabelsApiV1LabelsSearchGetRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `query` | `query` | `string` | yes | — |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList5` | `paginatedList5Schema` | `src/models/paginated-list5.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### sharedLabelsApiV1LabelsSharedGet

- **Signature**: `sharedLabelsApiV1LabelsSharedGet(request?: Labels.SharedLabelsApiV1LabelsSharedGetRequest, options?: RequestOptions): ApiPromise<PaginatedList11, Labels.SharedLabelsApiV1LabelsSharedGetError>`
- **Wire**: `GET /api/v1/labels/shared`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList11`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Labels.SharedLabelsApiV1LabelsSharedGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.SharedLabelsApiV1LabelsSharedGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `omitPersonal` | `query` | `omit_personal` | `boolean` | no | `false` |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList11` | `paginatedList11Schema` | `src/models/paginated-list11.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### sharedLabelsRemoveApiV1LabelsSharedRemovePost

- **Signature**: `sharedLabelsRemoveApiV1LabelsSharedRemovePost(request: Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostRequest, options?: RequestOptions): ApiPromise<undefined, Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostError>`
- **Wire**: `POST /api/v1/labels/shared/remove`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body1` | `body1Schema` | `src/models/body1.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### sharedLabelsRenameApiV1LabelsSharedRenamePost

- **Signature**: `sharedLabelsRenameApiV1LabelsSharedRenamePost(request: Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostRequest, options?: RequestOptions): ApiPromise<undefined, Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostError>`
- **Wire**: `POST /api/v1/labels/shared/rename`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body22` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body22` | `body22Schema` | `src/models/body22.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateLabelApiV1LabelsLabelIdPost

- **Signature**: `updateLabelApiV1LabelsLabelIdPost(request: Labels.UpdateLabelApiV1LabelsLabelIdPostRequest, options?: RequestOptions): ApiPromise<LabelRestView, Labels.UpdateLabelApiV1LabelsLabelIdPostError>`
- **Wire**: `POST /api/v1/labels/{label_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LabelRestView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Labels.UpdateLabelApiV1LabelsLabelIdPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.UpdateLabelApiV1LabelsLabelIdPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelId` | `path` | `label_id` | `number` | yes |
| `body` | `body` | — | `Body32` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body32` | `body32Schema` | `src/models/body32.ts` |
| `LabelRestView` | `labelRestViewSchema` | `src/models/label-rest-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

