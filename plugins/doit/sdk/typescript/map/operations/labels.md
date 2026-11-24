<!-- Generated file — do not edit; regenerated with the SDK. -->

# Labels — operations

Accessor: `client.labels` · Source: `src/resources/labels.ts` · 7 operations · Request and error types: namespace `Labels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### assignObjectsToLabel

- **Signature**: `assignObjectsToLabel(request: Labels.AssignObjectsToLabelRequestParams, options?: RequestOptions): ApiPromise<undefined, Labels.AssignObjectsToLabelError>`
- **Wire**: `POST /analytics/v1/labels/{id}/assignments`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Labels.AssignObjectsToLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.AssignObjectsToLabelRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `AssignObjectsToLabelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssignObjectsToLabelRequest` | `assignObjectsToLabelRequestSchema` | `src/models/assign-objects-to-label-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createLabel

- **Signature**: `createLabel(request: Labels.CreateLabelRequestParams, options?: RequestOptions): ApiPromise<LabelListItem, Labels.CreateLabelError>`
- **Wire**: `POST /analytics/v1/labels`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LabelListItem`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Labels.CreateLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.CreateLabelRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateLabelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateLabelRequest` | `createLabelRequestSchema` | `src/models/create-label-request.ts` |
| `LabelListItem` | `labelListItemSchema` | `src/models/label-list-item.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteLabel

- **Signature**: `deleteLabel(request: Labels.DeleteLabelRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Labels.DeleteLabelError>`
- **Wire**: `DELETE /analytics/v1/labels/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Labels.DeleteLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.DeleteLabelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLabel

- **Signature**: `getLabel(request: Labels.GetLabelRequest, options?: RequestOptions): ApiPromise<LabelListItem, Labels.GetLabelError>`
- **Wire**: `GET /analytics/v1/labels/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LabelListItem`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Labels.GetLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.GetLabelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LabelListItem` | `labelListItemSchema` | `src/models/label-list-item.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLabelAssignments

- **Signature**: `getLabelAssignments(request: Labels.GetLabelAssignmentsRequest, options?: RequestOptions): ApiPromise<LabelAssignmentsResponse, Labels.GetLabelAssignmentsError>`
- **Wire**: `GET /analytics/v1/labels/{id}/assignments`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LabelAssignmentsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Labels.GetLabelAssignmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.GetLabelAssignmentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LabelAssignmentsResponse` | `labelAssignmentsResponseSchema` | `src/models/label-assignments-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listLabels

- **Signature**: `listLabels(request?: Labels.ListLabelsRequest, options?: RequestOptions): ApiPromise<LabelList, Labels.ListLabelsError>`
- **Wire**: `GET /analytics/v1/labels`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LabelList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Labels.ListLabelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.ListLabelsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `filter` | `query` | `string` | no | — |
| `nameContains` | `query` | `string` | no | — |
| `sortBy` | `query` | `SortByDoiTLabelsApi` | no | — |
| `sortOrder` | `query` | `SortOrder` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortByDoiTLabelsApi` | `sortByDoiTLabelsApiSchema` | `src/models/sort-by-doi-tlabels-api.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `LabelList` | `labelListSchema` | `src/models/label-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateLabel

- **Signature**: `updateLabel(request: Labels.UpdateLabelRequestParams, options?: RequestOptions): ApiPromise<LabelListItem, Labels.UpdateLabelError>`
- **Wire**: `PATCH /analytics/v1/labels/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LabelListItem`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Labels.UpdateLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Labels.UpdateLabelRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateLabelRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateLabelRequest` | `updateLabelRequestSchema` | `src/models/update-label-request.ts` |
| `LabelListItem` | `labelListItemSchema` | `src/models/label-list-item.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

