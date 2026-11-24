<!-- Generated file — do not edit; regenerated with the SDK. -->

# Allocations — operations

Accessor: `client.allocations` · Source: `src/resources/allocations.ts` · 5 operations · Request and error types: namespace `Allocations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAllocation

- **Signature**: `createAllocation(request?: Allocations.CreateAllocationRequestParams, options?: RequestOptions): ApiPromise<Allocation, Allocations.CreateAllocationError>`
- **Wire**: `POST /analytics/v1/allocations`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Allocation`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Allocations.CreateAllocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Allocations.CreateAllocationRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateAllocationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAllocationRequest` | `createAllocationRequestSchema` | `src/models/create-allocation-request.ts` |
| `Allocation` | `allocationSchema` | `src/models/allocation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteAllocation

- **Signature**: `deleteAllocation(request: Allocations.DeleteAllocationRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Allocations.DeleteAllocationError>`
- **Wire**: `DELETE /analytics/v1/allocations/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Allocations.DeleteAllocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error409"` [409] `AllocationDeleteValidation[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Allocations.DeleteAllocationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `AllocationDeleteValidation` | `allocationDeleteValidationSchema` | `src/models/allocation-delete-validation.ts` |

### getAllocation

- **Signature**: `getAllocation(request: Allocations.GetAllocationRequest, options?: RequestOptions): ApiPromise<Allocation, Allocations.GetAllocationError>`
- **Wire**: `GET /analytics/v1/allocations/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Allocation`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Allocations.GetAllocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Allocations.GetAllocationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Allocation` | `allocationSchema` | `src/models/allocation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAllocations

- **Signature**: `listAllocations(request?: Allocations.ListAllocationsRequest, options?: RequestOptions): ApiPromise<AnalyticsV1AllocationsResponse, Allocations.ListAllocationsError>`
- **Wire**: `GET /analytics/v1/allocations`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsV1AllocationsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Allocations.ListAllocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Allocations.ListAllocationsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `filter` | `query` | `string` | no | — |
| `nameContains` | `query` | `string` | no | — |
| `sortBy` | `query` | `SortByDoiTAllocationsApi` | no | — |
| `sortOrder` | `query` | `SortOrder` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortByDoiTAllocationsApi` | `sortByDoiTAllocationsApiSchema` | `src/models/sort-by-doi-tallocations-api.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `AnalyticsV1AllocationsResponse` | `analyticsV1AllocationsResponseSchema` | `src/models/analytics-v1-allocations-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateAllocation

- **Signature**: `updateAllocation(request: Allocations.UpdateAllocationRequestParams, options?: RequestOptions): ApiPromise<Allocation, Allocations.UpdateAllocationError>`
- **Wire**: `PATCH /analytics/v1/allocations/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Allocation`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Allocations.UpdateAllocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Allocations.UpdateAllocationRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateAllocationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateAllocationRequest` | `updateAllocationRequestSchema` | `src/models/update-allocation-request.ts` |
| `Allocation` | `allocationSchema` | `src/models/allocation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

