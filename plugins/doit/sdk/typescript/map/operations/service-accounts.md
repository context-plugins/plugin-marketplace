<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceAccounts — operations

Accessor: `client.serviceAccounts` · Source: `src/resources/service-accounts.ts` · 10 operations · Request and error types: namespace `ServiceAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createServiceAccount

- **Signature**: `createServiceAccount(request: ServiceAccounts.CreateServiceAccountRequestParams, options?: RequestOptions): ApiPromise<ServiceAccount, ServiceAccounts.CreateServiceAccountError>`
- **Wire**: `POST /iam/v1/service-accounts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ServiceAccount`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ServiceAccounts.CreateServiceAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"error"` [401] `Error` · `"error2"` [403] `Error` · `"problemDetails2"` [409] `ProblemDetails` · `"problemDetails3"` [422] `ProblemDetails` · `"problemDetails4"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.CreateServiceAccountRequestParams` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `dryRun` | `query` | — | `boolean` | no | `false` |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes | — |
| `body` | `body` | — | `CreateServiceAccountRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateServiceAccountRequest` | `createServiceAccountRequestSchema` | `src/models/create-service-account-request.ts` |
| `ServiceAccount` | `serviceAccountSchema` | `src/models/service-account.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createServiceAccountToken

- **Signature**: `createServiceAccountToken(request: ServiceAccounts.CreateServiceAccountTokenRequestParams, options?: RequestOptions): ApiPromise<CreateServiceAccountTokenResponse, ServiceAccounts.CreateServiceAccountTokenError>`
- **Wire**: `POST /iam/v1/service-accounts/{serviceAccountId}/api-tokens`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateServiceAccountTokenResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ServiceAccounts.CreateServiceAccountTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"error"` [401] `Error` · `"error2"` [403] `Error` · `"problemDetails2"` [404] `ProblemDetails` · `"problemDetails3"` [409] `ProblemDetails` · `"problemDetails4"` [422] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.CreateServiceAccountTokenRequestParams` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `serviceAccountId` | `path` | — | `string` | yes | — |
| `dryRun` | `query` | — | `boolean` | no | `false` |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes | — |
| `body` | `body` | — | `CreateServiceAccountTokenRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateServiceAccountTokenRequest` | `createServiceAccountTokenRequestSchema` | `src/models/create-service-account-token-request.ts` |
| `CreateServiceAccountTokenResponse` | `createServiceAccountTokenResponseSchema` | `src/models/create-service-account-token-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteServiceAccount

- **Signature**: `deleteServiceAccount(request: ServiceAccounts.DeleteServiceAccountRequest, options?: RequestOptions): ApiPromise<undefined, ServiceAccounts.DeleteServiceAccountError>`
- **Wire**: `DELETE /iam/v1/service-accounts/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ServiceAccounts.DeleteServiceAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"error"` [401] `Error` · `"error2"` [403] `Error` · `"problemDetails2"` [404] `ProblemDetails` · `"problemDetails3"` [412] `ProblemDetails` · `"problemDetails4"` [428] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.DeleteServiceAccountRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `dryRun` | `query` | — | `boolean` | no | `false` |
| `ifMatch` | `header` | `If-Match` | `string` | yes | — |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteServiceAccountToken

- **Signature**: `deleteServiceAccountToken(request: ServiceAccounts.DeleteServiceAccountTokenRequest, options?: RequestOptions): ApiPromise<undefined, ServiceAccounts.DeleteServiceAccountTokenError>`
- **Wire**: `DELETE /iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ServiceAccounts.DeleteServiceAccountTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"error"` [401] `Error` · `"error2"` [403] `Error` · `"problemDetails2"` [404] `ProblemDetails` · `"problemDetails3"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.DeleteServiceAccountTokenRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `serviceAccountId` | `path` | — | `string` | yes | — |
| `id` | `path` | — | `string` | yes | — |
| `dryRun` | `query` | — | `boolean` | no | `false` |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getServiceAccount

- **Signature**: `getServiceAccount(request: ServiceAccounts.GetServiceAccountRequest, options?: RequestOptions): ApiPromise<ServiceAccount, ServiceAccounts.GetServiceAccountError>`
- **Wire**: `GET /iam/v1/service-accounts/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServiceAccount`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ServiceAccounts.GetServiceAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"error"` [401] `Error` · `"error2"` [403] `Error` · `"problemDetails2"` [404] `ProblemDetails` · `"problemDetails3"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.GetServiceAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceAccount` | `serviceAccountSchema` | `src/models/service-account.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getServiceAccountToken

- **Signature**: `getServiceAccountToken(request: ServiceAccounts.GetServiceAccountTokenRequest, options?: RequestOptions): ApiPromise<ServiceAccountToken, ServiceAccounts.GetServiceAccountTokenError>`
- **Wire**: `GET /iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServiceAccountToken`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ServiceAccounts.GetServiceAccountTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"problemDetails"` [404] `ProblemDetails` · `"problemDetails2"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.GetServiceAccountTokenRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceAccountId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceAccountToken` | `serviceAccountTokenSchema` | `src/models/service-account-token.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listServiceAccountTokens

- **Signature**: `listServiceAccountTokens(request: ServiceAccounts.ListServiceAccountTokensRequest, options?: RequestOptions): ApiPromise<ServiceAccountTokensResponse, ServiceAccounts.ListServiceAccountTokensError>`
- **Wire**: `GET /iam/v1/service-accounts/{serviceAccountId}/api-tokens`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServiceAccountTokensResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ServiceAccounts.ListServiceAccountTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"problemDetails"` [404] `ProblemDetails` · `"problemDetails2"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.ListServiceAccountTokensRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceAccountId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceAccountTokensResponse` | `serviceAccountTokensResponseSchema` | `src/models/service-account-tokens-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listServiceAccounts

- **Signature**: `listServiceAccounts(options?: RequestOptions): ApiPromise<ServiceAccountsResponse, ServiceAccounts.ListServiceAccountsError>`
- **Wire**: `GET /iam/v1/service-accounts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServiceAccountsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ServiceAccounts.ListServiceAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"problemDetails"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceAccountsResponse` | `serviceAccountsResponseSchema` | `src/models/service-accounts-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### updateServiceAccount

- **Signature**: `updateServiceAccount(request: ServiceAccounts.UpdateServiceAccountRequestParams, options?: RequestOptions): ApiPromise<ServiceAccount, ServiceAccounts.UpdateServiceAccountError>`
- **Wire**: `PATCH /iam/v1/service-accounts/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ServiceAccount`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ServiceAccounts.UpdateServiceAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"error"` [401] `Error` · `"error2"` [403] `Error` · `"problemDetails2"` [404] `ProblemDetails` · `"problemDetails3"` [409] `ProblemDetails` · `"problemDetails4"` [412] `ProblemDetails` · `"problemDetails5"` [415] `ProblemDetails` · `"problemDetails6"` [422] `ProblemDetails` · `"problemDetails7"` [428] `ProblemDetails` · `"problemDetails8"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.UpdateServiceAccountRequestParams` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `dryRun` | `query` | — | `boolean` | no | `false` |
| `ifMatch` | `header` | `If-Match` | `string` | yes | — |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes | — |
| `body` | `body` | — | `UpdateServiceAccountRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateServiceAccountRequest` | `updateServiceAccountRequestSchema` | `src/models/update-service-account-request.ts` |
| `ServiceAccount` | `serviceAccountSchema` | `src/models/service-account.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateServiceAccountToken

- **Signature**: `updateServiceAccountToken(request: ServiceAccounts.UpdateServiceAccountTokenRequestParams, options?: RequestOptions): ApiPromise<ServiceAccountToken, ServiceAccounts.UpdateServiceAccountTokenError>`
- **Wire**: `PATCH /iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ServiceAccountToken`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ServiceAccounts.UpdateServiceAccountTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"error"` [401] `Error` · `"error2"` [403] `Error` · `"problemDetails2"` [404] `ProblemDetails` · `"problemDetails3"` [422] `ProblemDetails` · `"problemDetails4"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.UpdateServiceAccountTokenRequestParams` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `serviceAccountId` | `path` | — | `string` | yes | — |
| `id` | `path` | — | `string` | yes | — |
| `dryRun` | `query` | — | `boolean` | no | `false` |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes | — |
| `body` | `body` | — | `UpdateServiceAccountTokenRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateServiceAccountTokenRequest` | `updateServiceAccountTokenRequestSchema` | `src/models/update-service-account-token-request.ts` |
| `ServiceAccountToken` | `serviceAccountTokenSchema` | `src/models/service-account-token.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

