<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sources — operations

Accessor: `client.sources` · Source: `src/resources/sources.ts` · 2 operations · Request and error types: namespace `Sources`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `boomi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSource

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSource(request: Sources.CreateSourceRequest, options?: RequestOptions): ApiPromise<SourceBoomiDataHubSourcesApi, Sources.CreateSourceError>`
- **Wire**: `POST /repositories/{repositoryId}/sources`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SourceBoomiDataHubSourcesApi`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Sources.CreateSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [400] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"errorResponseBoomiDataHubGoldenRecordsApi2"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.CreateSourceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repositoryId` | `path` | `string` | yes |
| `body` | `body` | `SourceInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourceInput` | `sourceInputSchema` | `src/models/source-input.ts` |
| `SourceBoomiDataHubSourcesApi` | `sourceBoomiDataHubSourcesApiSchema` | `src/models/source-boomi-data-hub-sources-api.ts` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

### listSources

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSources(request: Sources.ListSourcesRequest, options?: RequestOptions): ApiPromise<RepositoriesSourcesResponse, Sources.ListSourcesError>`
- **Wire**: `GET /repositories/{repositoryId}/sources`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RepositoriesSourcesResponse`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Sources.ListSourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"errorResponseBoomiDataHubGoldenRecordsApi2"` [404] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.ListSourcesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repositoryId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RepositoriesSourcesResponse` | `repositoriesSourcesResponseSchema` | `src/models/repositories-sources-response.ts` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

