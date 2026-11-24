<!-- Generated file — do not edit; regenerated with the SDK. -->

# Locations — operations

Accessor: `client.locations` · Source: `src/resources/locations.ts` · 1 operation · Request and error types: namespace `Locations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apibara`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listAuctionLocations

- **Signature**: `listAuctionLocations(request?: Locations.ListAuctionLocationsRequest, options?: RequestOptions): ApiPromise<LocationsResponse, Locations.ListAuctionLocationsError>`
- **Wire**: `GET /locations`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LocationsResponse`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `Locations.ListAuctionLocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"apiErrorModel"` [404] `ApiErrorModel` · `"error429"` [429] no body · `"error500"` [500] no body · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [422] `ApiErrorModel` · `"apiErrorModel4"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Locations.ListAuctionLocationsRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `platform` | `query` | — | `Platform` | no | — |
| `state` | `query` | — | `string` | no | — |
| `facilityId` | `query` | `facility_id` | `string` | no | — |
| `q` | `query` | — | `string` | no | — |
| `zip` | `query` | — | `string` | no | — |
| `radius` | `query` | — | `number` | no | — |
| `units` | `query` | — | `Units` | no | `Units.Mi` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Platform` | `platformSchema` | `src/models/platform.ts` |
| `Units` | `unitsSchema` | `src/models/units.ts` |
| `LocationsResponse` | `locationsResponseSchema` | `src/models/locations-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

