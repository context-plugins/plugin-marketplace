<!-- Generated file — do not edit; regenerated with the SDK. -->

# LlmConfiguration — operations

Accessor: `client.llmConfiguration` · Source: `src/resources/llm-configuration.ts` · 2 operations · Request and error types: namespace `LlmConfiguration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### configureLlm

- **Server**: `defaultContentstackBrandKitManagementBrandKitsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `configureLlm(request: LlmConfiguration.ConfigureLlmRequest, options?: RequestOptions): ApiPromise<LlmConfig, LlmConfiguration.ConfigureLlmError>`
- **Wire**: `POST /v1/brand-kits/{brand_kit_uid}/llm-config`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LlmConfig`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `LlmConfiguration.ConfigureLlmError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LlmConfiguration.ConfigureLlmRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandKitUid` | `path` | `brand_kit_uid` | `string` | yes |
| `organizationUid` | `header` | `organization_uid` | `string` | yes |
| `body` | `body` | — | `CreateLlmConfigRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateLlmConfigRequest` | `createLlmConfigRequestSchema` | `src/models/create-llm-config-request.ts` |
| `LlmConfig` | `llmConfigSchema` | `src/models/llm-config.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLlmConfig

- **Server**: `defaultContentstackBrandKitManagementBrandKitsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getLlmConfig(request: LlmConfiguration.GetLlmConfigRequest, options?: RequestOptions): ApiPromise<LlmConfig, LlmConfiguration.GetLlmConfigError>`
- **Wire**: `GET /v1/brand-kits/{brand_kit_uid}/llm-config`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LlmConfig`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `LlmConfiguration.GetLlmConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LlmConfiguration.GetLlmConfigRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandKitUid` | `path` | `brand_kit_uid` | `string` | yes |
| `organizationUid` | `header` | `organization_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LlmConfig` | `llmConfigSchema` | `src/models/llm-config.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

