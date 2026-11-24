<!-- Generated file — do not edit; regenerated with the SDK. -->

# Quarantine — operations

Accessor: `client.quarantine` · Source: `src/resources/quarantine.ts` · 1 operation · Request and error types: namespace `Quarantine`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `boomi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listQuarantineEntries

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listQuarantineEntries(request: Quarantine.ListQuarantineEntriesRequest, options?: RequestOptions): ApiPromise<RepositoriesUniversesQuarantineResponse, Quarantine.ListQuarantineEntriesError>`
- **Wire**: `GET /repositories/{repositoryId}/universes/{universeId}/quarantine`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RepositoriesUniversesQuarantineResponse`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Quarantine.ListQuarantineEntriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"errorResponseBoomiDataHubGoldenRecordsApi2"` [404] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Quarantine.ListQuarantineEntriesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repositoryId` | `path` | `string` | yes |
| `universeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RepositoriesUniversesQuarantineResponse` | `repositoriesUniversesQuarantineResponseSchema` | `src/models/repositories-universes-quarantine-response.ts` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

