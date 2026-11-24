<!-- Generated file — do not edit; regenerated with the SDK. -->

# UpdateManagement — operations

Accessor: `client.updateManagement` · Source: `src/resources/update-management.ts` · 2 operations · Request and error types: namespace `UpdateManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getScheduledUpgrade

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getScheduledUpgrade(request: UpdateManagement.GetScheduledUpgradeRequest, options?: RequestOptions): ApiPromise<ScheduledUpgrade, UpdateManagement.GetScheduledUpgradeError>`
- **Wire**: `GET /applications/{applicationFamily}/environments/{environmentName}/scheduledUpgrade`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScheduledUpgrade`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `UpdateManagement.GetScheduledUpgradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterUpdateManagementApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UpdateManagement.GetScheduledUpgradeRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScheduledUpgrade` | `scheduledUpgradeSchema` | `src/models/scheduled-upgrade.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi` | `errorResponseBusinessCentralAdministrationCenterUpdateManagementApiSchema` | `src/models/error-response-business-central-administration-center-update-management-api.ts` |

### setUpdateSettings

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `setUpdateSettings(request: UpdateManagement.SetUpdateSettingsRequest, options?: RequestOptions): ApiPromise<undefined, UpdateManagement.SetUpdateSettingsError>`
- **Wire**: `PUT /applications/{applicationFamily}/environments/{environmentName}/settings/upgrade`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `UpdateManagement.SetUpdateSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterUpdateManagementApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UpdateManagement.SetUpdateSettingsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |
| `body` | `body` | `UpdateSettings` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSettings` | `updateSettingsSchema` | `src/models/update-settings.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi` | `errorResponseBusinessCentralAdministrationCenterUpdateManagementApiSchema` | `src/models/error-response-business-central-administration-center-update-management-api.ts` |

