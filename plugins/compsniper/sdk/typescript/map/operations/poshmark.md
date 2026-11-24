<!-- Generated file — do not edit; regenerated with the SDK. -->

# Poshmark — operations

Accessor: `client.poshmark` · Source: `src/resources/poshmark.ts` · 1 operation · Request and error types: namespace `Poshmark`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchPoshmarkSold

- **Signature**: `searchPoshmarkSold(request: Poshmark.SearchPoshmarkSoldRequest, options?: RequestOptions): ApiPromise<V1PoshmarkSoldResponse, Poshmark.SearchPoshmarkSoldError>`
- **Wire**: `GET /v1/poshmark/sold`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PoshmarkSoldResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Poshmark.SearchPoshmarkSoldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1PoshmarkSold400Error1"` [400] `V1PoshmarkSold400Error1` · `"v1PoshmarkSold401Error1"` [401] `V1PoshmarkSold401Error1` · `"v1PoshmarkSoldResponse12"` [429] `V1PoshmarkSoldResponse12` · `"v1PoshmarkSold500Error1"` [500] `V1PoshmarkSold500Error1` · `"v1PoshmarkSold502Error1"` [502] `V1PoshmarkSold502Error1` · `"v1PoshmarkSold503Error1"` [503] `V1PoshmarkSold503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Poshmark.SearchPoshmarkSoldRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `keyword` | `query` | — | `string` | yes | — |
| `page` | `query` | — | `number` | no | `1` |
| `minPrice` | `query` | — | `number` | no | — |
| `maxPrice` | `query` | — | `number` | no | — |
| `department` | `query` | — | `DepartmentCompSniperMarketplaceAndShippingPoshmarkApi` | no | `DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.All` |
| `condition` | `query` | — | `ConditionCompSniperMarketplaceAndShippingPoshmarkApi` | no | `ConditionCompSniperMarketplaceAndShippingPoshmarkApi.All` |
| `brand` | `query` | — | `string` | no | — |
| `sortBy` | `query` | — | `SortByCompSniperMarketplaceAndShippingPoshmarkApi` | no | `SortByCompSniperMarketplaceAndShippingPoshmarkApi.SoldRecently` |
| `enrich` | `query` | — | `Enrich` | no | `Enrich.False` |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DepartmentCompSniperMarketplaceAndShippingPoshmarkApi` | `departmentCompSniperMarketplaceAndShippingPoshmarkApiSchema` | `src/models/department-comp-sniper-marketplace-and-shipping-poshmark-api.ts` |
| `ConditionCompSniperMarketplaceAndShippingPoshmarkApi` | `conditionCompSniperMarketplaceAndShippingPoshmarkApiSchema` | `src/models/condition-comp-sniper-marketplace-and-shipping-poshmark-api.ts` |
| `SortByCompSniperMarketplaceAndShippingPoshmarkApi` | `sortByCompSniperMarketplaceAndShippingPoshmarkApiSchema` | `src/models/sort-by-comp-sniper-marketplace-and-shipping-poshmark-api.ts` |
| `Enrich` | `enrichSchema` | `src/models/enrich.ts` |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `V1PoshmarkSoldResponse` | `v1PoshmarkSoldResponseSchema` | `src/models/v1-poshmark-sold-response.ts` |
| `V1PoshmarkSold400Error1` | `v1PoshmarkSold400Error1Schema` | `src/models/v1-poshmark-sold400-error1.ts` |
| `V1PoshmarkSold401Error1` | `v1PoshmarkSold401Error1Schema` | `src/models/v1-poshmark-sold401-error1.ts` |
| `V1PoshmarkSoldResponse12` | `v1PoshmarkSoldResponse12Schema` | `src/models/unions/v1-poshmark-sold-response12.ts` |
| `V1PoshmarkSold500Error1` | `v1PoshmarkSold500Error1Schema` | `src/models/v1-poshmark-sold500-error1.ts` |
| `V1PoshmarkSold502Error1` | `v1PoshmarkSold502Error1Schema` | `src/models/v1-poshmark-sold502-error1.ts` |
| `V1PoshmarkSold503Error1` | `v1PoshmarkSold503Error1Schema` | `src/models/v1-poshmark-sold503-error1.ts` |

