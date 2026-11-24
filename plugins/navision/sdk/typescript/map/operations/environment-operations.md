<!-- Generated file — do not edit; regenerated with the SDK. -->

# EnvironmentOperations — operations

Accessor: `client.environmentOperations` · Source: `src/resources/environment-operations.ts` · 2 operations · Request and error types: namespace `EnvironmentOperations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listAllEnvironmentOperations

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listAllEnvironmentOperations(request?: EnvironmentOperations.ListAllEnvironmentOperationsRequest, options?: RequestOptions): ApiPromise<ApplicationsEnvironmentsOperationsResponse, EnvironmentOperations.ListAllEnvironmentOperationsError>`
- **Wire**: `GET /applications/{applicationFamily}/environments/operations`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApplicationsEnvironmentsOperationsResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `EnvironmentOperations.ListAllEnvironmentOperationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironment"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironment` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EnvironmentOperations.ListAllEnvironmentOperationsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationsEnvironmentsOperationsResponse` | `applicationsEnvironmentsOperationsResponseSchema` | `src/models/applications-environments-operations-response.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironment` | `errorResponseBusinessCentralAdministrationCenterEnvironmentSchema` | `src/models/error-response-business-central-administration-center-environment.ts` |

### listEnvironmentOperations

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listEnvironmentOperations(request: EnvironmentOperations.ListEnvironmentOperationsRequest, options?: RequestOptions): ApiPromise<EnvironmentsOperationsResponse, EnvironmentOperations.ListEnvironmentOperationsError>`
- **Wire**: `GET /environments/{environmentName}/operations`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EnvironmentsOperationsResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `EnvironmentOperations.ListEnvironmentOperationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironment"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironment` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EnvironmentOperations.ListEnvironmentOperationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `environmentName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnvironmentsOperationsResponse` | `environmentsOperationsResponseSchema` | `src/models/environments-operations-response.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironment` | `errorResponseBusinessCentralAdministrationCenterEnvironmentSchema` | `src/models/error-response-business-central-administration-center-environment.ts` |

