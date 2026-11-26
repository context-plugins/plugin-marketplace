<!-- Generated file — do not edit; regenerated with the SDK. -->

# EnvironmentSettingsApi — operations

Accessor: `client.environmentSettingsApi` · Source: `src/resources/environment-settings-api.ts` · 2 operations · Request and error types: namespace `EnvironmentSettingsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEnvironmentSettings

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getEnvironmentSettings(request: EnvironmentSettingsApi.GetEnvironmentSettingsRequest, options?: RequestOptions): ApiPromise<EnvironmentSettings, EnvironmentSettingsApi.GetEnvironmentSettingsError>`
- **Wire**: `GET /applications/{applicationFamily}/environments/{environmentName}/settings`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EnvironmentSettings`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `EnvironmentSettingsApi.GetEnvironmentSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironmentSettings"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EnvironmentSettingsApi.GetEnvironmentSettingsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnvironmentSettings` | `environmentSettingsSchema` | `src/models/environment-settings.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings` | `errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsSchema` | `src/models/error-response-business-central-administration-center-environment-settings.ts` |

### setAppInsightsKey

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `setAppInsightsKey(request: EnvironmentSettingsApi.SetAppInsightsKeyRequest, options?: RequestOptions): ApiPromise<undefined, EnvironmentSettingsApi.SetAppInsightsKeyError>`
- **Wire**: `POST /applications/{applicationFamily}/environments/{environmentName}/settings/appInsightsKey`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `EnvironmentSettingsApi.SetAppInsightsKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterEnvironmentSettings"` [401] `ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EnvironmentSettingsApi.SetAppInsightsKeyRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |
| `body` | `body` | `ApplicationsEnvironmentsSettingsAppInsightsKeyRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationsEnvironmentsSettingsAppInsightsKeyRequest` | `applicationsEnvironmentsSettingsAppInsightsKeyRequestSchema` | `src/models/applications-environments-settings-app-insights-key-request.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings` | `errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsSchema` | `src/models/error-response-business-central-administration-center-environment-settings.ts` |

