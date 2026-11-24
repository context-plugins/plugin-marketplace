<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.usage` · Source: `src/resources/usage.ts` · 2 operations · Request and error types: namespace `Usage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEnvironmentUsageV2EnvironmentsUsageGet

- **Signature**: `getEnvironmentUsageV2EnvironmentsUsageGet(request?: Usage.GetEnvironmentUsageV2EnvironmentsUsageGetRequest, options?: RequestOptions): ApiPromise<EnvironmentUsageResponse, Usage.GetEnvironmentUsageV2EnvironmentsUsageGetError>`
- **Wire**: `GET /v2/environments/usage`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EnvironmentUsageResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Usage.GetEnvironmentUsageV2EnvironmentsUsageGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Usage.GetEnvironmentUsageV2EnvironmentsUsageGetRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `days` | `query` | — | `number` | no | `7` |
| `userId` | `query` | `user_id` | `UserId` | no | — |
| `apiKeyId` | `query` | `api_key_id` | `ApiKeyId` | no | — |
| `status` | `query` | — | `StatusHudPlatformInstancesApi` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserId` | `userIdSchema` | `src/models/unions/user-id.ts` |
| `ApiKeyId` | `apiKeyIdSchema` | `src/models/unions/api-key-id.ts` |
| `StatusHudPlatformInstancesApi` | `statusHudPlatformInstancesApiSchema` | `src/models/unions/status-hud-platform-instances-api.ts` |
| `EnvironmentUsageResponse` | `environmentUsageResponseSchema` | `src/models/environment-usage-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getInferenceUsageAggregateV2UsageInferenceGet

- **Signature**: `getInferenceUsageAggregateV2UsageInferenceGet(request?: Usage.GetInferenceUsageAggregateV2UsageInferenceGetRequest, options?: RequestOptions): ApiPromise<InferenceUsageAggregateResponse, Usage.GetInferenceUsageAggregateV2UsageInferenceGetError>`
- **Wire**: `GET /v2/usage/inference`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InferenceUsageAggregateResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Usage.GetInferenceUsageAggregateV2UsageInferenceGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Usage.GetInferenceUsageAggregateV2UsageInferenceGetRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `start` | `query` | — | `Start` | no | — |
| `end` | `query` | — | `End` | no | — |
| `bucketWidth` | `query` | `bucket_width` | `BucketWidth` | no | `BucketWidth._1D` |
| `groupBy` | `query` | `group_by` | `GroupBy1` | no | — |
| `userId` | `query` | `user_id` | `UserId` | no | — |
| `apiKeyId` | `query` | `api_key_id` | `ApiKeyId` | no | — |
| `byokCredentialId` | `query` | `byok_credential_id` | `ByokCredentialId` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Start` | `startSchema` | `src/models/unions/start.ts` |
| `End` | `endSchema` | `src/models/unions/end.ts` |
| `BucketWidth` | `bucketWidthSchema` | `src/models/bucket-width.ts` |
| `GroupBy1` | `groupBy1Schema` | `src/models/unions/group-by1.ts` |
| `UserId` | `userIdSchema` | `src/models/unions/user-id.ts` |
| `ApiKeyId` | `apiKeyIdSchema` | `src/models/unions/api-key-id.ts` |
| `ByokCredentialId` | `byokCredentialIdSchema` | `src/models/unions/byok-credential-id.ts` |
| `InferenceUsageAggregateResponse` | `inferenceUsageAggregateResponseSchema` | `src/models/inference-usage-aggregate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

