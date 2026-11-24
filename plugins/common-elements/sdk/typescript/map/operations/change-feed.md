<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChangeFeed — operations

Accessor: `client.changeFeed` · Source: `src/resources/change-feed.ts` · 2 operations · Request and error types: namespace `ChangeFeed`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `common-elements`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### changes

- **Signature**: `changes(request?: ChangeFeed.ChangesRequest, options?: RequestOptions): ApiPromise<ApiV1ChangesResponse, ChangeFeed.ChangesError>`
- **Wire**: `GET /api/v1/changes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ChangesResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `ChangeFeed.ChangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChangeFeed.ChangesRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `kind` | `query` | — | `string` | no |
| `state` | `query` | — | `string` | no |
| `county` | `query` | — | `string` | no |
| `subtype` | `query` | — | `string` | no |
| `since` | `query` | — | `string` | no |
| `until` | `query` | — | `string` | no |
| `minUnits` | `query` | `min_units` | `number` | no |
| `maxUnits` | `query` | `max_units` | `number` | no |
| `minMagnitude` | `query` | `min_magnitude` | `number` | no |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ChangesResponse` | `apiV1ChangesResponseSchema` | `src/models/api-v1-changes-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### changesSummary

- **Signature**: `changesSummary(request?: ChangeFeed.ChangesSummaryRequest, options?: RequestOptions): ApiPromise<ApiV1ChangesSummaryResponse, ChangeFeed.ChangesSummaryError>`
- **Wire**: `GET /api/v1/changes/summary`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ChangesSummaryResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `ChangeFeed.ChangesSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChangeFeed.ChangesSummaryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `since` | `query` | `string` | no |
| `state` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ChangesSummaryResponse` | `apiV1ChangesSummaryResponseSchema` | `src/models/api-v1-changes-summary-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

