<!-- Generated file — do not edit; regenerated with the SDK. -->

# Grailed — operations

Accessor: `client.grailed` · Source: `src/resources/grailed.ts` · 2 operations · Request and error types: namespace `Grailed`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getV1GrailedListings

- **Signature**: `getV1GrailedListings(request: Grailed.GetV1GrailedListingsRequest, options?: RequestOptions): ApiPromise<V1GrailedListingsResponse, Grailed.GetV1GrailedListingsError>`
- **Wire**: `GET /v1/grailed/listings`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1GrailedListingsResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Grailed.GetV1GrailedListingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1GrailedListings400Error1"` [400] `V1GrailedListings400Error1` · `"v1GrailedListings401Error1"` [401] `V1GrailedListings401Error1` · `"v1GrailedListings429Error1"` [429] `V1GrailedListings429Error1` · `"v1GrailedListings502Error1"` [502] `V1GrailedListings502Error1` · `"v1GrailedListings503Error1"` [503] `V1GrailedListings503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Grailed.GetV1GrailedListingsRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `keyword` | `query` | — | `string` | yes | — |
| `department` | `query` | — | `Department` | no | `Department.Any` |
| `condition` | `query` | — | `Condition` | no | `Condition.Any` |
| `minPrice` | `query` | — | `number` | no | — |
| `maxPrice` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `40` |
| `page` | `query` | — | `number` | no | `1` |
| `sortBy` | `query` | — | `SortBy1` | no | `SortBy1.Default` |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Department` | `departmentSchema` | `src/models/department.ts` |
| `Condition` | `conditionSchema` | `src/models/condition.ts` |
| `SortBy1` | `sortBy1Schema` | `src/models/sort-by1.ts` |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `V1GrailedListingsResponse` | `v1GrailedListingsResponseSchema` | `src/models/v1-grailed-listings-response.ts` |
| `V1GrailedListings400Error1` | `v1GrailedListings400Error1Schema` | `src/models/v1-grailed-listings400-error1.ts` |
| `V1GrailedListings401Error1` | `v1GrailedListings401Error1Schema` | `src/models/v1-grailed-listings401-error1.ts` |
| `V1GrailedListings429Error1` | `v1GrailedListings429Error1Schema` | `src/models/v1-grailed-listings429-error1.ts` |
| `V1GrailedListings502Error1` | `v1GrailedListings502Error1Schema` | `src/models/v1-grailed-listings502-error1.ts` |
| `V1GrailedListings503Error1` | `v1GrailedListings503Error1Schema` | `src/models/v1-grailed-listings503-error1.ts` |

### getV1GrailedSold

- **Signature**: `getV1GrailedSold(request: Grailed.GetV1GrailedSoldRequest, options?: RequestOptions): ApiPromise<V1GrailedSoldResponse, Grailed.GetV1GrailedSoldError>`
- **Wire**: `GET /v1/grailed/sold`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1GrailedSoldResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Grailed.GetV1GrailedSoldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1GrailedSold400Error1"` [400] `V1GrailedSold400Error1` · `"v1GrailedSold401Error1"` [401] `V1GrailedSold401Error1` · `"v1GrailedSold429Error1"` [429] `V1GrailedSold429Error1` · `"v1GrailedSold502Error1"` [502] `V1GrailedSold502Error1` · `"v1GrailedSold503Error1"` [503] `V1GrailedSold503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Grailed.GetV1GrailedSoldRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `keyword` | `query` | — | `string` | yes | — |
| `department` | `query` | — | `Department` | no | `Department.Any` |
| `condition` | `query` | — | `Condition` | no | `Condition.Any` |
| `minPrice` | `query` | — | `number` | no | — |
| `maxPrice` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `40` |
| `page` | `query` | — | `number` | no | `1` |
| `sortBy` | `query` | — | `SortBy` | no | `SortBy.Recent` |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Department` | `departmentSchema` | `src/models/department.ts` |
| `Condition` | `conditionSchema` | `src/models/condition.ts` |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `V1GrailedSoldResponse` | `v1GrailedSoldResponseSchema` | `src/models/v1-grailed-sold-response.ts` |
| `V1GrailedSold400Error1` | `v1GrailedSold400Error1Schema` | `src/models/v1-grailed-sold400-error1.ts` |
| `V1GrailedSold401Error1` | `v1GrailedSold401Error1Schema` | `src/models/v1-grailed-sold401-error1.ts` |
| `V1GrailedSold429Error1` | `v1GrailedSold429Error1Schema` | `src/models/v1-grailed-sold429-error1.ts` |
| `V1GrailedSold502Error1` | `v1GrailedSold502Error1Schema` | `src/models/v1-grailed-sold502-error1.ts` |
| `V1GrailedSold503Error1` | `v1GrailedSold503Error1Schema` | `src/models/v1-grailed-sold503-error1.ts` |

