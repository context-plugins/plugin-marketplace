<!-- Generated file — do not edit; regenerated with the SDK. -->

# AiModelsProviders — operations

Accessor: `client.aiModelsProviders` · Source: `src/resources/ai-models-providers.ts` · 1 operation · Request and error types: namespace `AiModelsProviders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAvailableModelsByType

- **Signature**: `getAvailableModelsByType(request: AiModelsProviders.GetAvailableModelsByTypeRequest, options?: RequestOptions): ApiPromise<ConfigurationManagerAiModelsAvailableResponse, AiModelsProviders.GetAvailableModelsByTypeError>`
- **Wire**: `GET /configurationManager/ai-models/available/{modelType}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConfigurationManagerAiModelsAvailableResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `AiModelsProviders.GetAvailableModelsByTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"configurationManagerAiModelsAvailable400Error1"` [400] `ConfigurationManagerAiModelsAvailable400Error1` · `"configurationManagerAiModelsAvailable401Error1"` [401] `ConfigurationManagerAiModelsAvailable401Error1` · `"configurationManagerAiModelsAvailable403Error1"` [403] `ConfigurationManagerAiModelsAvailable403Error1` · `"configurationManagerAiModelsAvailable500Error1"` [500] `ConfigurationManagerAiModelsAvailable500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiModelsProviders.GetAvailableModelsByTypeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `modelType` | `path` | `ModelType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelType` | `modelTypeSchema` | `src/models/model-type.ts` |
| `ConfigurationManagerAiModelsAvailableResponse` | `configurationManagerAiModelsAvailableResponseSchema` | `src/models/configuration-manager-ai-models-available-response.ts` |
| `ConfigurationManagerAiModelsAvailable400Error1` | `configurationManagerAiModelsAvailable400Error1Schema` | `src/models/configuration-manager-ai-models-available400-error1.ts` |
| `ConfigurationManagerAiModelsAvailable401Error1` | `configurationManagerAiModelsAvailable401Error1Schema` | `src/models/configuration-manager-ai-models-available401-error1.ts` |
| `ConfigurationManagerAiModelsAvailable403Error1` | `configurationManagerAiModelsAvailable403Error1Schema` | `src/models/configuration-manager-ai-models-available403-error1.ts` |
| `ConfigurationManagerAiModelsAvailable500Error1` | `configurationManagerAiModelsAvailable500Error1Schema` | `src/models/configuration-manager-ai-models-available500-error1.ts` |

