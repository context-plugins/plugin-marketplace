<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConfigurationPackages — operations

Accessor: `client.configurationPackages` · Source: `src/resources/configuration-packages.ts` · 5 operations · Request and error types: namespace `ConfigurationPackages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### applyConfigurationPackage

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `applyConfigurationPackage(request: ConfigurationPackages.ApplyConfigurationPackageRequest, options?: RequestOptions): ApiPromise<undefined, ConfigurationPackages.ApplyConfigurationPackageError>`
- **Wire**: `POST /companies({company_id})/configurationPackages({package_id})/Microsoft.NAV.apply`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `ConfigurationPackages.ApplyConfigurationPackageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConfigurationPackages.ApplyConfigurationPackageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `packageId` | `path` | `package_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createConfigurationPackage

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConfigurationPackage(request: ConfigurationPackages.CreateConfigurationPackageRequest, options?: RequestOptions): ApiPromise<ConfigurationPackage, ConfigurationPackages.CreateConfigurationPackageError>`
- **Wire**: `POST /companies({company_id})/configurationPackages`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConfigurationPackage`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `ConfigurationPackages.CreateConfigurationPackageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConfigurationPackages.CreateConfigurationPackageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `body` | `body` | — | `CompaniesApiConfigurationPackagesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiConfigurationPackagesRequest` | `companiesApiConfigurationPackagesRequestSchema` | `src/models/companies-api-configuration-packages-request.ts` |
| `ConfigurationPackage` | `configurationPackageSchema` | `src/models/configuration-package.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### importConfigurationPackage

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `importConfigurationPackage(request: ConfigurationPackages.ImportConfigurationPackageRequest, options?: RequestOptions): ApiPromise<undefined, ConfigurationPackages.ImportConfigurationPackageError>`
- **Wire**: `POST /companies({company_id})/configurationPackages({package_id})/Microsoft.NAV.import`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `ConfigurationPackages.ImportConfigurationPackageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConfigurationPackages.ImportConfigurationPackageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `packageId` | `path` | `package_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listConfigurationPackages

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listConfigurationPackages(request: ConfigurationPackages.ListConfigurationPackagesRequest, options?: RequestOptions): ApiPromise<CompaniesApiConfigurationPackagesResponse, ConfigurationPackages.ListConfigurationPackagesError>`
- **Wire**: `GET /companies({company_id})/configurationPackages`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiConfigurationPackagesResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `ConfigurationPackages.ListConfigurationPackagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConfigurationPackages.ListConfigurationPackagesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiConfigurationPackagesResponse` | `companiesApiConfigurationPackagesResponseSchema` | `src/models/companies-api-configuration-packages-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### uploadConfigurationPackageFile

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `uploadConfigurationPackageFile(request: ConfigurationPackages.UploadConfigurationPackageFileRequest, options?: RequestOptions): ApiPromise<undefined, ConfigurationPackages.UploadConfigurationPackageFileError>`
- **Wire**: `PATCH /companies({company_id})/configurationPackages({package_id})/file('{code}')/content`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/octet-stream` — the `body` field, sent as raw bytes with no schema over them. That media type is what the SDK declares; a value carrying its own wins outright
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `ConfigurationPackages.UploadConfigurationPackageFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConfigurationPackages.UploadConfigurationPackageFileRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `packageId` | `path` | `package_id` | `string` | yes |
| `code` | `path` | — | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | yes |
| `body` | `body` | — | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

