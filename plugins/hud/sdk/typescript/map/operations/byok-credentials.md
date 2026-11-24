<!-- Generated file — do not edit; regenerated with the SDK. -->

# ByokCredentials — operations

Accessor: `client.byokCredentials` · Source: `src/resources/byok-credentials.ts` · 4 operations · Request and error types: namespace `ByokCredentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createByokCredentialV2ByokCredentialsPost

- **Signature**: `createByokCredentialV2ByokCredentialsPost(request: ByokCredentials.CreateByokCredentialV2ByokCredentialsPostRequest, options?: RequestOptions): ApiPromise<ByokCredentialItem, ByokCredentials.CreateByokCredentialV2ByokCredentialsPostError>`
- **Wire**: `POST /v2/byok-credentials`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ByokCredentialItem`
- **Error**: `HudError` with `kind: "api"`, an instance of `ByokCredentials.CreateByokCredentialV2ByokCredentialsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ByokCredentials.CreateByokCredentialV2ByokCredentialsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ByokCredentialCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ByokCredentialCreateRequest` | `byokCredentialCreateRequestSchema` | `src/models/byok-credential-create-request.ts` |
| `ByokCredentialItem` | `byokCredentialItemSchema` | `src/models/byok-credential-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteByokCredentialV2ByokCredentialsCredentialIdDelete

- **Signature**: `deleteByokCredentialV2ByokCredentialsCredentialIdDelete(request: ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError>`
- **Wire**: `DELETE /v2/byok-credentials/{credential_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `HudError` with `kind: "api"`, an instance of `ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `credentialId` | `path` | `credential_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listByokCredentialsV2ByokCredentialsGet

- **Signature**: `listByokCredentialsV2ByokCredentialsGet(options?: RequestOptions): ApiPromise<ByokCredentialsListResponse, ByokCredentials.ListByokCredentialsV2ByokCredentialsGetError>`
- **Wire**: `GET /v2/byok-credentials`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ByokCredentialsListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `ByokCredentials.ListByokCredentialsV2ByokCredentialsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ByokCredentialsListResponse` | `byokCredentialsListResponseSchema` | `src/models/byok-credentials-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateByokCredentialV2ByokCredentialsCredentialIdPatch

- **Signature**: `updateByokCredentialV2ByokCredentialsCredentialIdPatch(request: ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest, options?: RequestOptions): ApiPromise<ByokCredentialItem, ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError>`
- **Wire**: `PATCH /v2/byok-credentials/{credential_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ByokCredentialItem`
- **Error**: `HudError` with `kind: "api"`, an instance of `ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `credentialId` | `path` | `credential_id` | `string` | yes |
| `body` | `body` | — | `ByokCredentialUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ByokCredentialUpdateRequest` | `byokCredentialUpdateRequestSchema` | `src/models/byok-credential-update-request.ts` |
| `ByokCredentialItem` | `byokCredentialItemSchema` | `src/models/byok-credential-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

