<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoldenRecords — operations

Accessor: `client.goldenRecords` · Source: `src/resources/golden-records.ts` · 1 operation · Request and error types: namespace `GoldenRecords`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `boomi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listGoldenRecords

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listGoldenRecords(request: GoldenRecords.ListGoldenRecordsRequest, options?: RequestOptions): ApiPromise<RepositoriesUniversesRecordsResponse, GoldenRecords.ListGoldenRecordsError>`
- **Wire**: `GET /repositories/{repositoryId}/universes/{universeId}/records`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RepositoriesUniversesRecordsResponse`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `GoldenRecords.ListGoldenRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"errorResponseBoomiDataHubGoldenRecordsApi2"` [404] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoldenRecords.ListGoldenRecordsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `repositoryId` | `path` | `string` | yes | — |
| `universeId` | `path` | `string` | yes | — |
| `pageSize` | `query` | `number` | no | `100` |
| `pageToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RepositoriesUniversesRecordsResponse` | `repositoriesUniversesRecordsResponseSchema` | `src/models/repositories-universes-records-response.ts` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

