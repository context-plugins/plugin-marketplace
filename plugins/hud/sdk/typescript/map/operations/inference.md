<!-- Generated file — do not edit; regenerated with the SDK. -->

# Inference — operations

Accessor: `client.inference` · Source: `src/resources/inference.ts` · 1 operation · Request and error types: namespace `Inference`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInferenceUsageV2InferenceUsageGet

- **Signature**: `getInferenceUsageV2InferenceUsageGet(request?: Inference.GetInferenceUsageV2InferenceUsageGetRequest, options?: RequestOptions): ApiPromise<InferenceUsageResponse, Inference.GetInferenceUsageV2InferenceUsageGetError>`
- **Wire**: `GET /v2/inference/usage`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InferenceUsageResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Inference.GetInferenceUsageV2InferenceUsageGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Inference.GetInferenceUsageV2InferenceUsageGetRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `days` | `query` | — | `number` | no | `7` |
| `userId` | `query` | `user_id` | `UserId` | no | — |
| `apiKeyId` | `query` | `api_key_id` | `ApiKeyId` | no | — |
| `byokCredentialId` | `query` | `byok_credential_id` | `ByokCredentialId` | no | — |
| `modelId` | `query` | `model_id` | `ModelId` | no | — |
| `requestType` | `query` | `request_type` | `RequestType` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserId` | `userIdSchema` | `src/models/unions/user-id.ts` |
| `ApiKeyId` | `apiKeyIdSchema` | `src/models/unions/api-key-id.ts` |
| `ByokCredentialId` | `byokCredentialIdSchema` | `src/models/unions/byok-credential-id.ts` |
| `ModelId` | `modelIdSchema` | `src/models/unions/model-id.ts` |
| `RequestType` | `requestTypeSchema` | `src/models/unions/request-type.ts` |
| `InferenceUsageResponse` | `inferenceUsageResponseSchema` | `src/models/inference-usage-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

