<!-- Generated file — do not edit; regenerated with the SDK. -->

# SupportSettingsApi — operations

Accessor: `client.supportSettingsApi` · Source: `src/resources/support-settings-api.ts` · 1 operation · Request and error types: namespace `SupportSettingsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSupportSettings

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSupportSettings(request: SupportSettingsApi.GetSupportSettingsRequest, options?: RequestOptions): ApiPromise<SupportSettings, SupportSettingsApi.GetSupportSettingsError>`
- **Wire**: `GET /applications/{applicationFamily}/environments/{environmentName}/supportSettings`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SupportSettings`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `SupportSettingsApi.GetSupportSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterSupportSettingsApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupportSettingsApi.GetSupportSettingsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SupportSettings` | `supportSettingsSchema` | `src/models/support-settings.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi` | `errorResponseBusinessCentralAdministrationCenterSupportSettingsApiSchema` | `src/models/error-response-business-central-administration-center-support-settings-api.ts` |

