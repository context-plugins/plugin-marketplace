<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiscoveredDatasets — operations

Accessor: `client.discoveredDatasets` · Source: `src/resources/discovered-datasets.ts` · 1 operation · Request and error types: namespace `DiscoveredDatasets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1DiscoveredDatasets

- **Signature**: `getApiV1DiscoveredDatasets(request?: DiscoveredDatasets.GetApiV1DiscoveredDatasetsRequest, options?: RequestOptions): ApiPromise<PublicApiDiscoveredDatasetsResponse, DiscoveredDatasets.GetApiV1DiscoveredDatasetsError>`
- **Wire**: `GET /api/v1/discoveredDatasets`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiDiscoveredDatasetsResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DiscoveredDatasets.GetApiV1DiscoveredDatasetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DiscoveredDatasets.GetApiV1DiscoveredDatasetsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceId` | `query` | `string` | no |
| `page` | `query` | `number` | no |
| `search` | `query` | `string` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDiscoveredDatasetsResponse` | `publicApiDiscoveredDatasetsResponseSchema` | `src/models/public-api-discovered-datasets-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

