<!-- Generated file — do not edit; regenerated with the SDK. -->

# AvailableApplications — operations

Accessor: `client.availableApplications` · Source: `src/resources/available-applications.ts` · 2 operations · Request and error types: namespace `AvailableApplications`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listAvailableCountries

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listAvailableCountries(request?: AvailableApplications.ListAvailableCountriesRequest, options?: RequestOptions): ApiPromise<ApplicationsAvailableCountriesResponse, AvailableApplications.ListAvailableCountriesError>`
- **Wire**: `GET /applications/{applicationFamily}/availableCountries`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApplicationsAvailableCountriesResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `AvailableApplications.ListAvailableCountriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterAvailable"` [401] `ErrorResponseBusinessCentralAdministrationCenterAvailable` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AvailableApplications.ListAvailableCountriesRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationsAvailableCountriesResponse` | `applicationsAvailableCountriesResponseSchema` | `src/models/applications-available-countries-response.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterAvailable` | `errorResponseBusinessCentralAdministrationCenterAvailableSchema` | `src/models/error-response-business-central-administration-center-available.ts` |

### listAvailableVersions

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listAvailableVersions(request?: AvailableApplications.ListAvailableVersionsRequest, options?: RequestOptions): ApiPromise<ApplicationsAvailableApplicationVersionsResponse, AvailableApplications.ListAvailableVersionsError>`
- **Wire**: `GET /applications/{applicationFamily}/availableApplicationVersions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApplicationsAvailableApplicationVersionsResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `AvailableApplications.ListAvailableVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterAvailable"` [401] `ErrorResponseBusinessCentralAdministrationCenterAvailable` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AvailableApplications.ListAvailableVersionsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationsAvailableApplicationVersionsResponse` | `applicationsAvailableApplicationVersionsResponseSchema` | `src/models/applications-available-application-versions-response.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterAvailable` | `errorResponseBusinessCentralAdministrationCenterAvailableSchema` | `src/models/error-response-business-central-administration-center-available.ts` |

