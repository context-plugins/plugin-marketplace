<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.environments` · Source: `src/resources/environments.ts` · 10 operations · Request and error types: namespace `Environments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### copyEnvironment

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `copyEnvironment(request: Environments.CopyEnvironmentRequestParams, options?: RequestOptions): ApiPromise<Environment, Environments.CopyEnvironmentError>`
- **Wire**: `POST /applications/{applicationFamily}/environments/{environmentName}/copy`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Environment`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Environments.CopyEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi"` [400] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.CopyEnvironmentRequestParams` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |
| `body` | `body` | `CopyEnvironmentRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CopyEnvironmentRequest` | `copyEnvironmentRequestSchema` | `src/models/copy-environment-request.ts` |
| `Environment` | `environmentSchema` | `src/models/environment.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema` | `src/models/error-response-business-central-administration-center-environments-api.ts` |

### createEnvironment

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createEnvironment(request: Environments.CreateEnvironmentRequestParams, options?: RequestOptions): ApiPromise<Environment, Environments.CreateEnvironmentError>`
- **Wire**: `PUT /applications/{applicationFamily}/environments/{environmentName}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Environment`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Environments.CreateEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi"` [400] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi3"` [409] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.CreateEnvironmentRequestParams` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |
| `body` | `body` | `CreateEnvironmentRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEnvironmentRequest` | `createEnvironmentRequestSchema` | `src/models/create-environment-request.ts` |
| `Environment` | `environmentSchema` | `src/models/environment.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema` | `src/models/error-response-business-central-administration-center-environments-api.ts` |

### deleteEnvironment

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteEnvironment(request: Environments.DeleteEnvironmentRequest, options?: RequestOptions): ApiPromise<EnvironmentOperation, Environments.DeleteEnvironmentError>`
- **Wire**: `DELETE /applications/{applicationFamily}/environments/{environmentName}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnvironmentOperation`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Environments.DeleteEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2"` [404] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.DeleteEnvironmentRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnvironmentOperation` | `environmentOperationSchema` | `src/models/environment-operation.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema` | `src/models/error-response-business-central-administration-center-environments-api.ts` |

### getAvailableRestorePeriods

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAvailableRestorePeriods(request: Environments.GetAvailableRestorePeriodsRequest, options?: RequestOptions): ApiPromise<ApplicationsEnvironmentsAvailableRestorePeriodsResponse, Environments.GetAvailableRestorePeriodsError>`
- **Wire**: `GET /applications/{applicationFamily}/environments/{environmentName}/availableRestorePeriods`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApplicationsEnvironmentsAvailableRestorePeriodsResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Environments.GetAvailableRestorePeriodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.GetAvailableRestorePeriodsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationsEnvironmentsAvailableRestorePeriodsResponse` | `applicationsEnvironmentsAvailableRestorePeriodsResponseSchema` | `src/models/applications-environments-available-restore-periods-response.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema` | `src/models/error-response-business-central-administration-center-environments-api.ts` |

### getEnvironment

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getEnvironment(request: Environments.GetEnvironmentRequest, options?: RequestOptions): ApiPromise<Environment, Environments.GetEnvironmentError>`
- **Wire**: `GET /applications/{applicationFamily}/environments/{environmentName}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Environment`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Environments.GetEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2"` [404] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.GetEnvironmentRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Environment` | `environmentSchema` | `src/models/environment.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema` | `src/models/error-response-business-central-administration-center-environments-api.ts` |

### listAllEnvironments

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listAllEnvironments(options?: RequestOptions): ApiPromise<ApplicationsEnvironmentsResponse, Environments.ListAllEnvironmentsError>`
- **Wire**: `GET /applications/environments`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApplicationsEnvironmentsResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Environments.ListAllEnvironmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationsEnvironmentsResponse` | `applicationsEnvironmentsResponseSchema` | `src/models/applications-environments-response.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema` | `src/models/error-response-business-central-administration-center-environments-api.ts` |

### listEnvironments

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listEnvironments(request?: Environments.ListEnvironmentsRequest, options?: RequestOptions): ApiPromise<ApplicationsEnvironmentsResponse, Environments.ListEnvironmentsError>`
- **Wire**: `GET /applications/{applicationFamily}/environments`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApplicationsEnvironmentsResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Environments.ListEnvironmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2"` [404] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.ListEnvironmentsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationsEnvironmentsResponse` | `applicationsEnvironmentsResponseSchema` | `src/models/applications-environments-response.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema` | `src/models/error-response-business-central-administration-center-environments-api.ts` |

### recoverEnvironment

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `recoverEnvironment(request: Environments.RecoverEnvironmentRequest, options?: RequestOptions): ApiPromise<EnvironmentOperation, Environments.RecoverEnvironmentError>`
- **Wire**: `POST /applications/{applicationFamily}/environments/{environmentName}/recover`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnvironmentOperation`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Environments.RecoverEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.RecoverEnvironmentRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnvironmentOperation` | `environmentOperationSchema` | `src/models/environment-operation.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema` | `src/models/error-response-business-central-administration-center-environments-api.ts` |

### renameEnvironment

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `renameEnvironment(request: Environments.RenameEnvironmentRequest, options?: RequestOptions): ApiPromise<EnvironmentOperation, Environments.RenameEnvironmentError>`
- **Wire**: `POST /applications/{applicationFamily}/environments/{environmentName}/rename`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnvironmentOperation`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Environments.RenameEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.RenameEnvironmentRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |
| `body` | `body` | `ApplicationsEnvironmentsRenameRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationsEnvironmentsRenameRequest` | `applicationsEnvironmentsRenameRequestSchema` | `src/models/applications-environments-rename-request.ts` |
| `EnvironmentOperation` | `environmentOperationSchema` | `src/models/environment-operation.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema` | `src/models/error-response-business-central-administration-center-environments-api.ts` |

### restoreEnvironment

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `restoreEnvironment(request: Environments.RestoreEnvironmentRequestParams, options?: RequestOptions): ApiPromise<EnvironmentOperation, Environments.RestoreEnvironmentError>`
- **Wire**: `POST /applications/{applicationFamily}/environments/{environmentName}/restore`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnvironmentOperation`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Environments.RestoreEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironmentsApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.RestoreEnvironmentRequestParams` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |
| `body` | `body` | `RestoreEnvironmentRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestoreEnvironmentRequest` | `restoreEnvironmentRequestSchema` | `src/models/restore-environment-request.ts` |
| `EnvironmentOperation` | `environmentOperationSchema` | `src/models/environment-operation.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema` | `src/models/error-response-business-central-administration-center-environments-api.ts` |

