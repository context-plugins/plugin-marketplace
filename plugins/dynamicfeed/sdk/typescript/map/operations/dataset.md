<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dataset — operations

Accessor: `client.dataset` · Source: `src/resources/dataset.ts` · 8 operations · Request types: namespace `Dataset`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### datasetAdvisoriesDatasetAdvisoriesJsonGet

- **Signature**: `datasetAdvisoriesDatasetAdvisoriesJsonGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /dataset/advisories.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### datasetConsensusDatasetConsensusJsonGet

- **Signature**: `datasetConsensusDatasetConsensusJsonGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /dataset/consensus.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### datasetIndexDatasetGet

- **Signature**: `datasetIndexDatasetGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /dataset`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### datasetModelsDatasetModelsJsonGet

- **Signature**: `datasetModelsDatasetModelsJsonGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /dataset/models.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### datasetNewsDatasetNewsJsonGet

- **Signature**: `datasetNewsDatasetNewsJsonGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /dataset/news.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### datasetServersDatasetServersJsonGet

- **Signature**: `datasetServersDatasetServersJsonGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /dataset/servers.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### datasetStatusDatasetStatusJsonGet

- **Signature**: `datasetStatusDatasetStatusJsonGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /dataset/status.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### datasetVersionsDatasetVersionsJsonGet

- **Signature**: `datasetVersionsDatasetVersionsJsonGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /dataset/versions.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

