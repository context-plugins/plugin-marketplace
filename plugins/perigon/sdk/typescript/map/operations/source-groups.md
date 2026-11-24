<!-- Generated file — do not edit; regenerated with the SDK. -->

# SourceGroups — operations

Accessor: `client.sourceGroups` · Source: `src/resources/source-groups.ts` · 6 operations · Request and error types: namespace `SourceGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `perigon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSourceGroup

- **Signature**: `createSourceGroup(request: SourceGroups.CreateSourceGroupRequest, options?: RequestOptions): ApiPromise<SourceGroupResult, SourceGroups.CreateSourceGroupError>`
- **Wire**: `POST /v1/api/sourceGroups`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SourceGroupResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `SourceGroups.CreateSourceGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SourceGroups.CreateSourceGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateSourceGroupParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSourceGroupParams` | `createSourceGroupParamsSchema` | `src/models/create-source-group-params.ts` |
| `SourceGroupResult` | `sourceGroupResultSchema` | `src/models/source-group-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteSourceGroup

- **Signature**: `deleteSourceGroup(request: SourceGroups.DeleteSourceGroupRequest, options?: RequestOptions): ApiPromise<SourceGroupResult, SourceGroups.DeleteSourceGroupError>`
- **Wire**: `DELETE /v1/api/sourceGroups/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SourceGroupResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `SourceGroups.DeleteSourceGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SourceGroups.DeleteSourceGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourceGroupResult` | `sourceGroupResultSchema` | `src/models/source-group-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSourceGroup

- **Signature**: `getSourceGroup(request: SourceGroups.GetSourceGroupRequest, options?: RequestOptions): ApiPromise<SourceGroupResult, SourceGroups.GetSourceGroupError>`
- **Wire**: `GET /v1/api/sourceGroups/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SourceGroupResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `SourceGroups.GetSourceGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SourceGroups.GetSourceGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourceGroupResult` | `sourceGroupResultSchema` | `src/models/source-group-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listSourceGroups

- **Signature**: `listSourceGroups(request: SourceGroups.ListSourceGroupsRequest, options?: RequestOptions): ApiPromise<SourceGroupListResult, SourceGroups.ListSourceGroupsError>`
- **Wire**: `GET /v1/api/sourceGroups`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SourceGroupListResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `SourceGroups.ListSourceGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SourceGroups.ListSourceGroupsRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sortBy` | `query` | `SourceGroupSortBy` | yes | — |
| `sortOrder` | `query` | `SortOrder` | yes | — |
| `name` | `query` | `string` | no | — |
| `domain` | `query` | `string` | no | — |
| `page` | `query` | `number` | no | `0` |
| `size` | `query` | `number` | no | `10` |
| `nulls` | `query` | `Nulls` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourceGroupSortBy` | `sourceGroupSortBySchema` | `src/models/source-group-sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Nulls` | `nullsSchema` | `src/models/nulls.ts` |
| `SourceGroupListResult` | `sourceGroupListResultSchema` | `src/models/source-group-list-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### resolveSourceGroups

- **Signature**: `resolveSourceGroups(request?: SourceGroups.ResolveSourceGroupsRequest, options?: RequestOptions): ApiPromise<SourceGroupResolveResult, SourceGroups.ResolveSourceGroupsError>`
- **Wire**: `GET /v1/api/sourceGroups/resolve`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SourceGroupResolveResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `SourceGroups.ResolveSourceGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SourceGroups.ResolveSourceGroupsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourceGroupResolveResult` | `sourceGroupResolveResultSchema` | `src/models/source-group-resolve-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateSourceGroup

- **Signature**: `updateSourceGroup(request: SourceGroups.UpdateSourceGroupRequest, options?: RequestOptions): ApiPromise<SourceGroupResult, SourceGroups.UpdateSourceGroupError>`
- **Wire**: `PATCH /v1/api/sourceGroups/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SourceGroupResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `SourceGroups.UpdateSourceGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SourceGroups.UpdateSourceGroupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `PatchSourceGroupParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchSourceGroupParams` | `patchSourceGroupParamsSchema` | `src/models/patch-source-group-params.ts` |
| `SourceGroupResult` | `sourceGroupResultSchema` | `src/models/source-group-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

