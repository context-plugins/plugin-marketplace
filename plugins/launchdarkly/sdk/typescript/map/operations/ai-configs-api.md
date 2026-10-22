<!-- Generated file — do not edit; regenerated with the SDK. -->

# AiConfigsApi — operations

Accessor: `client.aiConfigsApi` · Source: `src/resources/ai-configs-api.ts` · 30 operations · Request and error types: namespace `AiConfigsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteAiConfig

- **Signature**: `deleteAiConfig(request: AiConfigsApi.DeleteAiConfigRequest, options?: RequestOptions): ApiPromise<undefined, AiConfigsApi.DeleteAiConfigError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/ai-configs/{configKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.DeleteAiConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.DeleteAiConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `configKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteAiConfigVariation

- **Signature**: `deleteAiConfigVariation(request: AiConfigsApi.DeleteAiConfigVariationRequest, options?: RequestOptions): ApiPromise<undefined, AiConfigsApi.DeleteAiConfigVariationError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.DeleteAiConfigVariationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.DeleteAiConfigVariationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `configKey` | `path` | `string` | yes |
| `variationKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteAiTool

- **Signature**: `deleteAiTool(request: AiConfigsApi.DeleteAiToolRequest, options?: RequestOptions): ApiPromise<undefined, AiConfigsApi.DeleteAiToolError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/ai-tools/{toolKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.DeleteAiToolError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.DeleteAiToolRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `toolKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteAgentGraph

- **Signature**: `deleteAgentGraph(request: AiConfigsApi.DeleteAgentGraphRequest, options?: RequestOptions): ApiPromise<undefined, AiConfigsApi.DeleteAgentGraphError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/agent-graphs/{graphKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.DeleteAgentGraphError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.DeleteAgentGraphRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `graphKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteModelConfig

- **Signature**: `deleteModelConfig(request: AiConfigsApi.DeleteModelConfigRequest, options?: RequestOptions): ApiPromise<undefined, AiConfigsApi.DeleteModelConfigError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.DeleteModelConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.DeleteModelConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `modelConfigKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteRestrictedModels

- **Signature**: `deleteRestrictedModels(request: AiConfigsApi.DeleteRestrictedModelsRequest, options?: RequestOptions): ApiPromise<undefined, AiConfigsApi.DeleteRestrictedModelsError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/ai-configs/model-configs/restricted`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.DeleteRestrictedModelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.DeleteRestrictedModelsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `body` | `body` | `RestrictedModelsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestrictedModelsRequest` | `restrictedModelsRequestSchema` | `src/models/restricted-models-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAiConfig

- **Signature**: `getAiConfig(request: AiConfigsApi.GetAiConfigRequest, options?: RequestOptions): ApiPromise<AiConfig, AiConfigsApi.GetAiConfigError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/ai-configs/{configKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AiConfig`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.GetAiConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.GetAiConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `configKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiConfig` | `aiConfigSchema` | `src/models/ai-config.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAiConfigMetrics

- **Signature**: `getAiConfigMetrics(request: AiConfigsApi.GetAiConfigMetricsRequest, options?: RequestOptions): ApiPromise<Metrics, AiConfigsApi.GetAiConfigMetricsError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Metrics`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.GetAiConfigMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.GetAiConfigMetricsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `configKey` | `path` | `string` | yes |
| `from` | `query` | `number` | yes |
| `to` | `query` | `number` | yes |
| `env` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Metrics` | `metricsSchema` | `src/models/metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAiConfigMetricsByVariation

- **Signature**: `getAiConfigMetricsByVariation(request: AiConfigsApi.GetAiConfigMetricsByVariationRequest, options?: RequestOptions): ApiPromise<MetricByVariation[], AiConfigsApi.GetAiConfigMetricsByVariationError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics-by-variation`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricByVariation[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.GetAiConfigMetricsByVariationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.GetAiConfigMetricsByVariationRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `configKey` | `path` | `string` | yes |
| `from` | `query` | `number` | yes |
| `to` | `query` | `number` | yes |
| `env` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricByVariation` | `metricByVariationSchema` | `src/models/metric-by-variation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAiConfigTargeting

- **Signature**: `getAiConfigTargeting(request: AiConfigsApi.GetAiConfigTargetingRequest, options?: RequestOptions): ApiPromise<AiConfigTargeting, AiConfigsApi.GetAiConfigTargetingError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/ai-configs/{configKey}/targeting`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AiConfigTargeting`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.GetAiConfigTargetingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.GetAiConfigTargetingRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `configKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiConfigTargeting` | `aiConfigTargetingSchema` | `src/models/ai-config-targeting.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAiConfigVariation

- **Signature**: `getAiConfigVariation(request: AiConfigsApi.GetAiConfigVariationRequest, options?: RequestOptions): ApiPromise<AiConfigVariationsResponse, AiConfigsApi.GetAiConfigVariationError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AiConfigVariationsResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.GetAiConfigVariationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.GetAiConfigVariationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `configKey` | `path` | `string` | yes |
| `variationKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiConfigVariationsResponse` | `aiConfigVariationsResponseSchema` | `src/models/ai-config-variations-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAiConfigs

- **Signature**: `getAiConfigs(request: AiConfigsApi.GetAiConfigsRequest, options?: RequestOptions): ApiPromise<AiConfigs, AiConfigsApi.GetAiConfigsError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/ai-configs`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AiConfigs`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.GetAiConfigsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.GetAiConfigsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `sort` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiConfigs` | `aiConfigsSchema` | `src/models/ai-configs.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAiTool

- **Signature**: `getAiTool(request: AiConfigsApi.GetAiToolRequest, options?: RequestOptions): ApiPromise<AiTool, AiConfigsApi.GetAiToolError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/ai-tools/{toolKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AiTool`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.GetAiToolError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.GetAiToolRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `toolKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiTool` | `aiToolSchema` | `src/models/ai-tool.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAgentGraph

- **Signature**: `getAgentGraph(request: AiConfigsApi.GetAgentGraphRequest, options?: RequestOptions): ApiPromise<AgentGraph, AiConfigsApi.GetAgentGraphError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/agent-graphs/{graphKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentGraph`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.GetAgentGraphError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.GetAgentGraphRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `graphKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `AgentGraph` | `agentGraphSchema` | `src/models/agent-graph.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getModelConfig

- **Signature**: `getModelConfig(request: AiConfigsApi.GetModelConfigRequest, options?: RequestOptions): ApiPromise<ModelConfig, AiConfigsApi.GetModelConfigError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ModelConfig`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.GetModelConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.GetModelConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `modelConfigKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelConfig` | `modelConfigSchema` | `src/models/model-config.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAiToolVersions

- **Signature**: `listAiToolVersions(request: AiConfigsApi.ListAiToolVersionsRequest, options?: RequestOptions): ApiPromise<AiTools, AiConfigsApi.ListAiToolVersionsError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/ai-tools/{toolKey}/versions`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AiTools`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.ListAiToolVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.ListAiToolVersionsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `toolKey` | `path` | `string` | yes |
| `sort` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiTools` | `aiToolsSchema` | `src/models/ai-tools.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAiTools

- **Signature**: `listAiTools(request: AiConfigsApi.ListAiToolsRequest, options?: RequestOptions): ApiPromise<AiTools, AiConfigsApi.ListAiToolsError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/ai-tools`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AiTools`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.ListAiToolsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.ListAiToolsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `sort` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiTools` | `aiToolsSchema` | `src/models/ai-tools.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAgentGraphs

- **Signature**: `listAgentGraphs(request: AiConfigsApi.ListAgentGraphsRequest, options?: RequestOptions): ApiPromise<AgentGraphs, AiConfigsApi.ListAgentGraphsError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/agent-graphs`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentGraphs`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.ListAgentGraphsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.ListAgentGraphsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `AgentGraphs` | `agentGraphsSchema` | `src/models/agent-graphs.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listModelConfigs

- **Signature**: `listModelConfigs(request: AiConfigsApi.ListModelConfigsRequest, options?: RequestOptions): ApiPromise<ModelConfig[], AiConfigsApi.ListModelConfigsError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/ai-configs/model-configs`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ModelConfig[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.ListModelConfigsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.ListModelConfigsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `restricted` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelConfig` | `modelConfigSchema` | `src/models/model-config.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patchAiConfig

- **Signature**: `patchAiConfig(request: AiConfigsApi.PatchAiConfigRequest, options?: RequestOptions): ApiPromise<AiConfig, AiConfigsApi.PatchAiConfigError>`
- **Wire**: `PATCH /api/v2/projects/{projectKey}/ai-configs/{configKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AiConfig`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.PatchAiConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.PatchAiConfigRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `configKey` | `path` | `string` | yes |
| `body` | `body` | `AiConfigPatch` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiConfigPatch` | `aiConfigPatchSchema` | `src/models/ai-config-patch.ts` |
| `AiConfig` | `aiConfigSchema` | `src/models/ai-config.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patchAiConfigTargeting

- **Signature**: `patchAiConfigTargeting(request: AiConfigsApi.PatchAiConfigTargetingRequest, options?: RequestOptions): ApiPromise<AiConfigTargeting, AiConfigsApi.PatchAiConfigTargetingError>`
- **Wire**: `PATCH /api/v2/projects/{projectKey}/ai-configs/{configKey}/targeting`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AiConfigTargeting`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.PatchAiConfigTargetingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.PatchAiConfigTargetingRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `configKey` | `path` | `string` | yes |
| `body` | `body` | `AiConfigTargetingPatch` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiConfigTargetingPatch` | `aiConfigTargetingPatchSchema` | `src/models/ai-config-targeting-patch.ts` |
| `AiConfigTargeting` | `aiConfigTargetingSchema` | `src/models/ai-config-targeting.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patchAiConfigVariation

- **Signature**: `patchAiConfigVariation(request: AiConfigsApi.PatchAiConfigVariationRequest, options?: RequestOptions): ApiPromise<AiConfigVariation, AiConfigsApi.PatchAiConfigVariationError>`
- **Wire**: `PATCH /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AiConfigVariation`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.PatchAiConfigVariationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.PatchAiConfigVariationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `configKey` | `path` | `string` | yes |
| `variationKey` | `path` | `string` | yes |
| `body` | `body` | `AiConfigVariationPatch` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiConfigVariationPatch` | `aiConfigVariationPatchSchema` | `src/models/ai-config-variation-patch.ts` |
| `AiConfigVariation` | `aiConfigVariationSchema` | `src/models/ai-config-variation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patchAiTool

- **Signature**: `patchAiTool(request: AiConfigsApi.PatchAiToolRequest, options?: RequestOptions): ApiPromise<AiTool, AiConfigsApi.PatchAiToolError>`
- **Wire**: `PATCH /api/v2/projects/{projectKey}/ai-tools/{toolKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AiTool`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.PatchAiToolError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.PatchAiToolRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `toolKey` | `path` | `string` | yes |
| `body` | `body` | `AiToolPatch` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiToolPatch` | `aiToolPatchSchema` | `src/models/ai-tool-patch.ts` |
| `AiTool` | `aiToolSchema` | `src/models/ai-tool.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patchAgentGraph

- **Signature**: `patchAgentGraph(request: AiConfigsApi.PatchAgentGraphRequest, options?: RequestOptions): ApiPromise<AgentGraph, AiConfigsApi.PatchAgentGraphError>`
- **Wire**: `PATCH /api/v2/projects/{projectKey}/agent-graphs/{graphKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentGraph`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.PatchAgentGraphError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.PatchAgentGraphRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `graphKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |
| `body` | `body` | — | `AgentGraphPatch` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `AgentGraphPatch` | `agentGraphPatchSchema` | `src/models/agent-graph-patch.ts` |
| `AgentGraph` | `agentGraphSchema` | `src/models/agent-graph.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### postAiConfig

- **Signature**: `postAiConfig(request: AiConfigsApi.PostAiConfigRequest, options?: RequestOptions): ApiPromise<AiConfig, AiConfigsApi.PostAiConfigError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/ai-configs`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AiConfig`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.PostAiConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.PostAiConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `body` | `body` | `AiConfigPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiConfigPost` | `aiConfigPostSchema` | `src/models/ai-config-post.ts` |
| `AiConfig` | `aiConfigSchema` | `src/models/ai-config.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### postAiConfigVariation

- **Signature**: `postAiConfigVariation(request: AiConfigsApi.PostAiConfigVariationRequest, options?: RequestOptions): ApiPromise<AiConfigVariation, AiConfigsApi.PostAiConfigVariationError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AiConfigVariation`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.PostAiConfigVariationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.PostAiConfigVariationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `configKey` | `path` | `string` | yes |
| `body` | `body` | `AiConfigVariationPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiConfigVariationPost` | `aiConfigVariationPostSchema` | `src/models/ai-config-variation-post.ts` |
| `AiConfigVariation` | `aiConfigVariationSchema` | `src/models/ai-config-variation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### postAiTool

- **Signature**: `postAiTool(request: AiConfigsApi.PostAiToolRequest, options?: RequestOptions): ApiPromise<AiTool, AiConfigsApi.PostAiToolError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/ai-tools`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AiTool`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.PostAiToolError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.PostAiToolRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `body` | `body` | `AiToolPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiToolPost` | `aiToolPostSchema` | `src/models/ai-tool-post.ts` |
| `AiTool` | `aiToolSchema` | `src/models/ai-tool.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### postAgentGraph

- **Signature**: `postAgentGraph(request: AiConfigsApi.PostAgentGraphRequest, options?: RequestOptions): ApiPromise<AgentGraph, AiConfigsApi.PostAgentGraphError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/agent-graphs`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentGraph`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.PostAgentGraphError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [413] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.PostAgentGraphRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |
| `body` | `body` | — | `AgentGraphPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `AgentGraphPost` | `agentGraphPostSchema` | `src/models/agent-graph-post.ts` |
| `AgentGraph` | `agentGraphSchema` | `src/models/agent-graph.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### postModelConfig

- **Signature**: `postModelConfig(request: AiConfigsApi.PostModelConfigRequest, options?: RequestOptions): ApiPromise<ModelConfig, AiConfigsApi.PostModelConfigError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/ai-configs/model-configs`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModelConfig`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.PostModelConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.PostModelConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `body` | `body` | `ModelConfigPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelConfigPost` | `modelConfigPostSchema` | `src/models/model-config-post.ts` |
| `ModelConfig` | `modelConfigSchema` | `src/models/model-config.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### postRestrictedModels

- **Signature**: `postRestrictedModels(request: AiConfigsApi.PostRestrictedModelsRequest, options?: RequestOptions): ApiPromise<RestrictedModelsResponse, AiConfigsApi.PostRestrictedModelsError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/ai-configs/model-configs/restricted`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RestrictedModelsResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AiConfigsApi.PostRestrictedModelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiConfigsApi.PostRestrictedModelsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `body` | `body` | `RestrictedModelsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestrictedModelsRequest` | `restrictedModelsRequestSchema` | `src/models/restricted-models-request.ts` |
| `RestrictedModelsResponse` | `restrictedModelsResponseSchema` | `src/models/restricted-models-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

