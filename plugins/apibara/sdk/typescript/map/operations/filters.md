<!-- Generated file — do not edit; regenerated with the SDK. -->

# Filters — operations

Accessor: `client.filters` · Source: `src/resources/filters.ts` · 1 operation · Request and error types: namespace `Filters`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apibara`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getVehicleFilters

- **Signature**: `getVehicleFilters(request?: Filters.GetVehicleFiltersRequest, options?: RequestOptions): ApiPromise<FiltersResponse, Filters.GetVehicleFiltersError>`
- **Wire**: `GET /vehicles/filters`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FiltersResponse`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `Filters.GetVehicleFiltersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"apiErrorModel"` [404] `ApiErrorModel` · `"error429"` [429] no body · `"error500"` [500] no body · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [422] `ApiErrorModel` · `"apiErrorModel4"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Filters.GetVehicleFiltersRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `make` | `query` | `string` | no |
| `series` | `query` | `string` | no |
| `model` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FiltersResponse` | `filtersResponseSchema` | `src/models/filters-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

