<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppManagement — operations

Accessor: `client.appManagement` · Source: `src/resources/app-management.ts` · 4 operations · Request and error types: namespace `AppManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### installApp

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `installApp(request: AppManagement.InstallAppRequest, options?: RequestOptions): ApiPromise<EnvironmentOperation, AppManagement.InstallAppError>`
- **Wire**: `POST /applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/install`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnvironmentOperation`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `AppManagement.InstallAppError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterAppManagementApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppManagement.InstallAppRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |
| `appId` | `path` | `string` | yes | — |
| `body` | `body` | `AppInstallRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppInstallRequest` | `appInstallRequestSchema` | `src/models/app-install-request.ts` |
| `EnvironmentOperation` | `environmentOperationSchema` | `src/models/environment-operation.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `errorResponseBusinessCentralAdministrationCenterAppManagementApiSchema` | `src/models/error-response-business-central-administration-center-app-management-api.ts` |

### listInstalledApps

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInstalledApps(request: AppManagement.ListInstalledAppsRequest, options?: RequestOptions): ApiPromise<ApplicationsEnvironmentsAppsResponse, AppManagement.ListInstalledAppsError>`
- **Wire**: `GET /applications/{applicationFamily}/environments/{environmentName}/apps`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApplicationsEnvironmentsAppsResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `AppManagement.ListInstalledAppsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterAppManagementApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppManagement.ListInstalledAppsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationsEnvironmentsAppsResponse` | `applicationsEnvironmentsAppsResponseSchema` | `src/models/applications-environments-apps-response.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `errorResponseBusinessCentralAdministrationCenterAppManagementApiSchema` | `src/models/error-response-business-central-administration-center-app-management-api.ts` |

### uninstallApp

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `uninstallApp(request: AppManagement.UninstallAppRequest, options?: RequestOptions): ApiPromise<EnvironmentOperation, AppManagement.UninstallAppError>`
- **Wire**: `POST /applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/uninstall`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnvironmentOperation`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `AppManagement.UninstallAppError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterAppManagementApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppManagement.UninstallAppRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |
| `appId` | `path` | `string` | yes | — |
| `body` | `body` | `ApplicationsEnvironmentsAppsAppIdUninstallRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationsEnvironmentsAppsAppIdUninstallRequest` | `applicationsEnvironmentsAppsAppIdUninstallRequestSchema` | `src/models/applications-environments-apps-app-id-uninstall-request.ts` |
| `EnvironmentOperation` | `environmentOperationSchema` | `src/models/environment-operation.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `errorResponseBusinessCentralAdministrationCenterAppManagementApiSchema` | `src/models/error-response-business-central-administration-center-app-management-api.ts` |

### updateApp

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateApp(request: AppManagement.UpdateAppRequest, options?: RequestOptions): ApiPromise<EnvironmentOperation, AppManagement.UpdateAppError>`
- **Wire**: `POST /applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/update`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnvironmentOperation`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `AppManagement.UpdateAppError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterAppManagementApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppManagement.UpdateAppRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |
| `appId` | `path` | `string` | yes | — |
| `body` | `body` | `AppUpdateRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppUpdateRequest` | `appUpdateRequestSchema` | `src/models/app-update-request.ts` |
| `EnvironmentOperation` | `environmentOperationSchema` | `src/models/environment-operation.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `errorResponseBusinessCentralAdministrationCenterAppManagementApiSchema` | `src/models/error-response-business-central-administration-center-app-management-api.ts` |

