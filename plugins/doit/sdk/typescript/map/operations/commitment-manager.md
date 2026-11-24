<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommitmentManager — operations

Accessor: `client.commitmentManager` · Source: `src/resources/commitment-manager.ts` · 2 operations · Request and error types: namespace `CommitmentManager`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCommitment

- **Signature**: `getCommitment(request: CommitmentManager.GetCommitmentRequest, options?: RequestOptions): ApiPromise<CommitmentExternal, CommitmentManager.GetCommitmentError>`
- **Wire**: `GET /analytics/v1/commitment-manager/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommitmentExternal`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CommitmentManager.GetCommitmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommitmentManager.GetCommitmentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommitmentExternal` | `commitmentExternalSchema` | `src/models/commitment-external.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCommitments

- **Signature**: `listCommitments(request?: CommitmentManager.ListCommitmentsRequest, options?: RequestOptions): ApiPromise<CommitmentExternalList, CommitmentManager.ListCommitmentsError>`
- **Wire**: `GET /analytics/v1/commitment-manager`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommitmentExternalList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CommitmentManager.ListCommitmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommitmentManager.ListCommitmentsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sortBy` | `query` | `SortByDoiTCommitmentManagerApi` | no | — |
| `sortOrder` | `query` | `SortOrder` | no | — |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `filter` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortByDoiTCommitmentManagerApi` | `sortByDoiTCommitmentManagerApiSchema` | `src/models/sort-by-doi-tcommitment-manager-api.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `CommitmentExternalList` | `commitmentExternalListSchema` | `src/models/commitment-external-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

