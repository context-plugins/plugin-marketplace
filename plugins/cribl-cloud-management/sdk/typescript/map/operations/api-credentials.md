<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiCredentials — operations

Accessor: `client.apiCredentials` · Source: `src/resources/api-credentials.ts` · 5 operations · Request and error types: namespace `ApiCredentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-cloud-public-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### v1ApiCredentialsCreateApiCredential

- **Signature**: `v1ApiCredentialsCreateApiCredential(request: ApiCredentials.V1ApiCredentialsCreateApiCredentialRequest, options?: RequestOptions): ApiPromise<ApiCredentialCreateResponseSchema, ApiCredentials.V1ApiCredentialsCreateApiCredentialError>`
- **Wire**: `POST /v1/organizations/{organizationId}/api-credentials`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiCredentialCreateResponseSchema`
- **Error**: `CriblCloudPublicApiError` with `kind: "api"`, an instance of `ApiCredentials.V1ApiCredentialsCreateApiCredentialError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"defaultErrorDto"` [422] `DefaultErrorDto` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiCredentials.V1ApiCredentialsCreateApiCredentialRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `body` | `body` | `ApiCredentialCreateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiCredentialCreateRequestDto` | `apiCredentialCreateRequestDtoSchema` | `src/models/api-credential-create-request-dto.ts` |
| `ApiCredentialCreateResponseSchema` | `apiCredentialCreateResponseSchemaSchema` | `src/models/api-credential-create-response-schema.ts` |
| `DefaultErrorDto` | `defaultErrorDtoSchema` | `src/models/default-error-dto.ts` |

### v1ApiCredentialsDeleteApiCredential

- **Signature**: `v1ApiCredentialsDeleteApiCredential(request: ApiCredentials.V1ApiCredentialsDeleteApiCredentialRequest, options?: RequestOptions): ApiPromise<undefined, ApiCredentials.V1ApiCredentialsDeleteApiCredentialError>`
- **Wire**: `DELETE /v1/organizations/{organizationId}/api-credentials/{apiCredentialId}`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CriblCloudPublicApiError` with `kind: "api"`, an instance of `ApiCredentials.V1ApiCredentialsDeleteApiCredentialError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiCredentials.V1ApiCredentialsDeleteApiCredentialRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |

### v1ApiCredentialsGetApiCredential

- **Signature**: `v1ApiCredentialsGetApiCredential(request: ApiCredentials.V1ApiCredentialsGetApiCredentialRequest, options?: RequestOptions): ApiPromise<ApiCredentialResponseSchema, ApiCredentials.V1ApiCredentialsGetApiCredentialError>`
- **Wire**: `GET /v1/organizations/{organizationId}/api-credentials/{apiCredentialId}`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiCredentialResponseSchema`
- **Error**: `CriblCloudPublicApiError` with `kind: "api"`, an instance of `ApiCredentials.V1ApiCredentialsGetApiCredentialError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiCredentials.V1ApiCredentialsGetApiCredentialRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiCredentialResponseSchema` | `apiCredentialResponseSchemaSchema` | `src/models/api-credential-response-schema.ts` |

### v1ApiCredentialsListApiCredentials

- **Signature**: `v1ApiCredentialsListApiCredentials(request: ApiCredentials.V1ApiCredentialsListApiCredentialsRequest, options?: RequestOptions): ApiPromise<ApiCredentialsListResponseDto, ApiError>`
- **Wire**: `GET /v1/organizations/{organizationId}/api-credentials`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiCredentialsListResponseDto`
- **Error**: `CriblCloudPublicApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ApiCredentials.V1ApiCredentialsListApiCredentialsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiCredentialsListResponseDto` | `apiCredentialsListResponseDtoSchema` | `src/models/api-credentials-list-response-dto.ts` |

### v1ApiCredentialsUpdateApiCredential

- **Signature**: `v1ApiCredentialsUpdateApiCredential(request: ApiCredentials.V1ApiCredentialsUpdateApiCredentialRequest, options?: RequestOptions): ApiPromise<undefined, ApiCredentials.V1ApiCredentialsUpdateApiCredentialError>`
- **Wire**: `PATCH /v1/organizations/{organizationId}/api-credentials/{apiCredentialId}`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CriblCloudPublicApiError` with `kind: "api"`, an instance of `ApiCredentials.V1ApiCredentialsUpdateApiCredentialError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiCredentials.V1ApiCredentialsUpdateApiCredentialRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |
| `body` | `body` | `ApiCredentialUpdateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiCredentialUpdateRequestDto` | `apiCredentialUpdateRequestDtoSchema` | `src/models/api-credential-update-request-dto.ts` |

