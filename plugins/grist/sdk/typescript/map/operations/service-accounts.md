<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceAccounts — operations

Accessor: `client.serviceAccounts` · Source: `src/resources/service-accounts.ts` · 7 operations · Request and error types: namespace `ServiceAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createServiceAccount

- **Signature**: `createServiceAccount(request?: ServiceAccounts.CreateServiceAccountRequest, options?: RequestOptions): ApiPromise<ServiceAccountResultWithApiKey, ServiceAccounts.CreateServiceAccountError>`
- **Wire**: `POST /service-accounts`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServiceAccountResultWithApiKey`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `ServiceAccounts.CreateServiceAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.CreateServiceAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateServiceAccount` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateServiceAccount` | `createServiceAccountSchema` | `src/models/create-service-account.ts` |
| `ServiceAccountResultWithApiKey` | `serviceAccountResultWithApiKeySchema` | `src/models/service-account-result-with-api-key.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### deleteServiceAccount

- **Signature**: `deleteServiceAccount(request: ServiceAccounts.DeleteServiceAccountRequest, options?: RequestOptions): ApiPromise<ServiceAccountsResponse, ServiceAccounts.DeleteServiceAccountError>`
- **Wire**: `DELETE /service-accounts/{saId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServiceAccountsResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `ServiceAccounts.DeleteServiceAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"gristError2"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.DeleteServiceAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `saId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceAccountsResponse` | `serviceAccountsResponseSchema` | `src/models/unions/service-accounts-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### deleteServiceAccountApiKey

- **Signature**: `deleteServiceAccountApiKey(request: ServiceAccounts.DeleteServiceAccountApiKeyRequest, options?: RequestOptions): ApiPromise<ServiceAccountsApikeyResponse, ServiceAccounts.DeleteServiceAccountApiKeyError>`
- **Wire**: `DELETE /service-accounts/{saId}/apikey`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServiceAccountsApikeyResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `ServiceAccounts.DeleteServiceAccountApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"gristError2"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.DeleteServiceAccountApiKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `saId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceAccountsApikeyResponse` | `serviceAccountsApikeyResponseSchema` | `src/models/unions/service-accounts-apikey-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### getServiceAccount

- **Signature**: `getServiceAccount(request: ServiceAccounts.GetServiceAccountRequest, options?: RequestOptions): ApiPromise<ServiceAccountResult, ServiceAccounts.GetServiceAccountError>`
- **Wire**: `GET /service-accounts/{saId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServiceAccountResult`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `ServiceAccounts.GetServiceAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"gristError2"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.GetServiceAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `saId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceAccountResult` | `serviceAccountResultSchema` | `src/models/service-account-result.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### listServiceAccounts

- **Signature**: `listServiceAccounts(options?: RequestOptions): ApiPromise<ServiceAccountResult[], ServiceAccounts.ListServiceAccountsError>`
- **Wire**: `GET /service-accounts`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServiceAccountResult[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GristApiError` with `kind: "api"`, an instance of `ServiceAccounts.ListServiceAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceAccountResult` | `serviceAccountResultSchema` | `src/models/service-account-result.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### modifyServiceAccount

- **Signature**: `modifyServiceAccount(request: ServiceAccounts.ModifyServiceAccountRequest, options?: RequestOptions): ApiPromise<ServiceAccountsResponse, ServiceAccounts.ModifyServiceAccountError>`
- **Wire**: `PATCH /service-accounts/{saId}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServiceAccountsResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `ServiceAccounts.ModifyServiceAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"gristError2"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.ModifyServiceAccountRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `saId` | `path` | `number` | yes |
| `body` | `body` | `ServiceAccountBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceAccountBody` | `serviceAccountBodySchema` | `src/models/service-account-body.ts` |
| `ServiceAccountsResponse` | `serviceAccountsResponseSchema` | `src/models/unions/service-accounts-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### regenerateServiceAccountApiKey

- **Signature**: `regenerateServiceAccountApiKey(request: ServiceAccounts.RegenerateServiceAccountApiKeyRequest, options?: RequestOptions): ApiPromise<ServiceAccountResultWithApiKey, ServiceAccounts.RegenerateServiceAccountApiKeyError>`
- **Wire**: `POST /service-accounts/{saId}/apikey`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServiceAccountResultWithApiKey`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `ServiceAccounts.RegenerateServiceAccountApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"gristError2"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceAccounts.RegenerateServiceAccountApiKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `saId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceAccountResultWithApiKey` | `serviceAccountResultWithApiKeySchema` | `src/models/service-account-result-with-api-key.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

