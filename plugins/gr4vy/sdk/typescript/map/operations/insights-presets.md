<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsPresets — operations

Accessor: `client.insightsPresets` · Source: `src/resources/insights-presets.ts` · 4 operations · Request and error types: namespace `InsightsPresets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMetricsExplorerPreset

- **Signature**: `createMetricsExplorerPreset(request: InsightsPresets.CreateMetricsExplorerPresetRequest, options?: RequestOptions): ApiPromise<MetricsExplorerPreset, InsightsPresets.CreateMetricsExplorerPresetError>`
- **Wire**: `POST /metrics-explorer/{source}/presets`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MetricsExplorerPreset`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `InsightsPresets.CreateMetricsExplorerPresetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsPresets.CreateMetricsExplorerPresetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `source` | `path` | — | `MetricsExplorerSource1` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |
| `body` | `body` | — | `MetricsExplorerPresetCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsExplorerSource1` | `metricsExplorerSource1Schema` | `src/models/metrics-explorer-source1.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `MetricsExplorerPresetCreate` | `metricsExplorerPresetCreateSchema` | `src/models/metrics-explorer-preset-create.ts` |
| `MetricsExplorerPreset` | `metricsExplorerPresetSchema` | `src/models/metrics-explorer-preset.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteMetricsExplorerPreset

- **Signature**: `deleteMetricsExplorerPreset(request: InsightsPresets.DeleteMetricsExplorerPresetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, InsightsPresets.DeleteMetricsExplorerPresetError>`
- **Wire**: `DELETE /metrics-explorer/{source}/presets/{preset_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `InsightsPresets.DeleteMetricsExplorerPresetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsPresets.DeleteMetricsExplorerPresetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `source` | `path` | — | `MetricsExplorerSource1` | yes |
| `presetId` | `path` | `preset_id` | `string` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsExplorerSource1` | `metricsExplorerSource1Schema` | `src/models/metrics-explorer-source1.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listMetricsExplorerPresets

- **Signature**: `listMetricsExplorerPresets(request: InsightsPresets.ListMetricsExplorerPresetsRequest, options?: RequestOptions): ApiPromise<MetricsExplorerPreset[], InsightsPresets.ListMetricsExplorerPresetsError>`
- **Wire**: `GET /metrics-explorer/{source}/presets`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricsExplorerPreset[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `InsightsPresets.ListMetricsExplorerPresetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsPresets.ListMetricsExplorerPresetsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `source` | `path` | — | `MetricsExplorerSource1` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsExplorerSource1` | `metricsExplorerSource1Schema` | `src/models/metrics-explorer-source1.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `MetricsExplorerPreset` | `metricsExplorerPresetSchema` | `src/models/metrics-explorer-preset.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateMetricsExplorerPreset

- **Signature**: `updateMetricsExplorerPreset(request: InsightsPresets.UpdateMetricsExplorerPresetRequest, options?: RequestOptions): ApiPromise<MetricsExplorerPreset, InsightsPresets.UpdateMetricsExplorerPresetError>`
- **Wire**: `PUT /metrics-explorer/{source}/presets/{preset_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MetricsExplorerPreset`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `InsightsPresets.UpdateMetricsExplorerPresetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsPresets.UpdateMetricsExplorerPresetRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `source` | `path` | — | `MetricsExplorerSource1` | yes |
| `presetId` | `path` | `preset_id` | `string` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |
| `body` | `body` | — | `MetricsExplorerPresetUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsExplorerSource1` | `metricsExplorerSource1Schema` | `src/models/metrics-explorer-source1.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `MetricsExplorerPresetUpdate` | `metricsExplorerPresetUpdateSchema` | `src/models/metrics-explorer-preset-update.ts` |
| `MetricsExplorerPreset` | `metricsExplorerPresetSchema` | `src/models/metrics-explorer-preset.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

