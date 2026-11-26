<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.storage` · Source: `src/resources/storage.ts` · 3 operations · Request and error types: namespace `Storage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllEnvironmentsStorage

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllEnvironmentsStorage(options?: RequestOptions): ApiPromise<EnvironmentsUsedstorageResponse, Storage.GetAllEnvironmentsStorageError>`
- **Wire**: `GET /environments/usedstorage`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EnvironmentsUsedstorageResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Storage.GetAllEnvironmentsStorageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterStorageApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterStorageApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `EnvironmentsUsedstorageResponse` | `environmentsUsedstorageResponseSchema` | `src/models/environments-usedstorage-response.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterStorageApi` | `errorResponseBusinessCentralAdministrationCenterStorageApiSchema` | `src/models/error-response-business-central-administration-center-storage-api.ts` |

### getEnvironmentStorage

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getEnvironmentStorage(request: Storage.GetEnvironmentStorageRequest, options?: RequestOptions): ApiPromise<UsedStorage, Storage.GetEnvironmentStorageError>`
- **Wire**: `GET /applications/{applicationFamily}/environments/{environmentName}/usedstorage`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsedStorage`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Storage.GetEnvironmentStorageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterStorageApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterStorageApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Storage.GetEnvironmentStorageRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsedStorage` | `usedStorageSchema` | `src/models/used-storage.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterStorageApi` | `errorResponseBusinessCentralAdministrationCenterStorageApiSchema` | `src/models/error-response-business-central-administration-center-storage-api.ts` |

### getQuotas

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getQuotas(options?: RequestOptions): ApiPromise<Quotas, Storage.GetQuotasError>`
- **Wire**: `GET /environments/quotas`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Quotas`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Storage.GetQuotasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterStorageApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterStorageApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Quotas` | `quotasSchema` | `src/models/quotas.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterStorageApi` | `errorResponseBusinessCentralAdministrationCenterStorageApiSchema` | `src/models/error-response-business-central-administration-center-storage-api.ts` |

