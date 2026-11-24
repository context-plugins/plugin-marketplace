<!-- Generated file — do not edit; regenerated with the SDK. -->

# LocationsApi — operations

Accessor: `client.locationsApi` · Source: `src/resources/locations-api.ts` · 3 operations · Request and error types: namespace `LocationsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `prisma-reviews`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getLocation

- **Signature**: `getLocation(request: LocationsApi.GetLocationRequest, options?: RequestOptions): ApiPromise<Location, LocationsApi.GetLocationError>`
- **Wire**: `GET /v1/locations/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Location`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `LocationsApi.GetLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LocationsApi.GetLocationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Location` | `locationSchema` | `src/models/location.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listLocations

- **Signature**: `listLocations(options?: RequestOptions): ApiPromise<LocationList, LocationsApi.ListLocationsError>`
- **Wire**: `GET /v1/locations`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LocationList`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `LocationsApi.ListLocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `LocationList` | `locationListSchema` | `src/models/location-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### refreshLocation

- **Signature**: `refreshLocation(request: LocationsApi.RefreshLocationRequest, options?: RequestOptions): ApiPromise<LocationRefresh, LocationsApi.RefreshLocationError>`
- **Wire**: `POST /v1/locations/{id}/refresh`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LocationRefresh`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `LocationsApi.RefreshLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [409] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LocationsApi.RefreshLocationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LocationRefresh` | `locationRefreshSchema` | `src/models/location-refresh.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

