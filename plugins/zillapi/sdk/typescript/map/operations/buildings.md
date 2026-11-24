<!-- Generated file — do not edit; regenerated with the SDK. -->

# Buildings — operations

Accessor: `client.buildings` · Source: `src/resources/buildings.ts` · 1 operation · Request types: namespace `Buildings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `zillapi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBuildingByUrl

- **Signature**: `getBuildingByUrl(request: Buildings.GetBuildingByUrlRequest, options?: RequestOptions): ApiPromise<V1BuildingsByUrlResponse, ApiError>`
- **Wire**: `GET /v1/buildings/by-url`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BuildingsByUrlResponse`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Buildings.GetBuildingByUrlRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `url` | `query` | — | `string` | yes | — |
| `includeUnits` | `query` | `include_units` | `IncludeUnits` | no | `IncludeUnits.All` |
| `sync` | `query` | — | `boolean` | no | `true` |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncludeUnits` | `includeUnitsSchema` | `src/models/include-units.ts` |
| `V1BuildingsByUrlResponse` | `v1BuildingsByUrlResponseSchema` | `src/models/v1-buildings-by-url-response.ts` |

