<!-- Generated file — do not edit; regenerated with the SDK. -->

# GeographicAccess — operations

Accessor: `client.geographicAccess` · Source: `src/resources/geographic-access.ts` · 12 operations · Request and error types: namespace `GeographicAccess`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createGeographicAccessCustomRegion

- **Signature**: `createGeographicAccessCustomRegion(request: GeographicAccess.CreateGeographicAccessCustomRegionRequestParams, options?: RequestOptions): ApiPromise<GeographicAccessCustomRegion, GeographicAccess.CreateGeographicAccessCustomRegionError>`
- **Wire**: `POST /rbac/v1/custom-regions`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GeographicAccessCustomRegion`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `GeographicAccess.CreateGeographicAccessCustomRegionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [429] `ProblemDetails` · `"problemDetails7"` [500] `ProblemDetails` · `"problemDetails8"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeographicAccess.CreateGeographicAccessCustomRegionRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |
| `body` | `body` | — | `CreateGeographicAccessCustomRegionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateGeographicAccessCustomRegionRequest` | `createGeographicAccessCustomRegionRequestSchema` | `src/models/create-geographic-access-custom-region-request.ts` |
| `GeographicAccessCustomRegion` | `geographicAccessCustomRegionSchema` | `src/models/geographic-access-custom-region.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### deleteCustomerGeographicAccessScope

- **Signature**: `deleteCustomerGeographicAccessScope(request: GeographicAccess.DeleteCustomerGeographicAccessScopeRequest, options?: RequestOptions): ApiPromise<undefined, GeographicAccess.DeleteCustomerGeographicAccessScopeError>`
- **Wire**: `DELETE /rbac/v1/customers/{targetCustomerId}/geographic-scope`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `GeographicAccess.DeleteCustomerGeographicAccessScopeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [429] `ProblemDetails` · `"problemDetails7"` [500] `ProblemDetails` · `"problemDetails8"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeographicAccess.DeleteCustomerGeographicAccessScopeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `targetCustomerId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### deleteGeographicAccessCustomRegion

- **Signature**: `deleteGeographicAccessCustomRegion(request: GeographicAccess.DeleteGeographicAccessCustomRegionRequest, options?: RequestOptions): ApiPromise<undefined, GeographicAccess.DeleteGeographicAccessCustomRegionError>`
- **Wire**: `DELETE /rbac/v1/custom-regions/{customRegionId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `GeographicAccess.DeleteGeographicAccessCustomRegionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [429] `ProblemDetails` · `"problemDetails7"` [500] `ProblemDetails` · `"problemDetails8"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeographicAccess.DeleteGeographicAccessCustomRegionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customRegionId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### deleteUserGeographicAccessScope

- **Signature**: `deleteUserGeographicAccessScope(request: GeographicAccess.DeleteUserGeographicAccessScopeRequest, options?: RequestOptions): ApiPromise<undefined, GeographicAccess.DeleteUserGeographicAccessScopeError>`
- **Wire**: `DELETE /rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `GeographicAccess.DeleteUserGeographicAccessScopeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [429] `ProblemDetails` · `"problemDetails7"` [500] `ProblemDetails` · `"problemDetails8"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeographicAccess.DeleteUserGeographicAccessScopeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `targetCustomerId` | `path` | — | `string` | yes |
| `userId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getCustomerGeographicAccessScope

- **Signature**: `getCustomerGeographicAccessScope(request: GeographicAccess.GetCustomerGeographicAccessScopeRequest, options?: RequestOptions): ApiPromise<GeographicAccessScope, GeographicAccess.GetCustomerGeographicAccessScopeError>`
- **Wire**: `GET /rbac/v1/customers/{targetCustomerId}/geographic-scope`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GeographicAccessScope`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `GeographicAccess.GetCustomerGeographicAccessScopeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [429] `ProblemDetails` · `"problemDetails7"` [500] `ProblemDetails` · `"problemDetails8"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeographicAccess.GetCustomerGeographicAccessScopeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `targetCustomerId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeographicAccessScope` | `geographicAccessScopeSchema` | `src/models/unions/geographic-access-scope.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getGeographicAccessCustomRegion

- **Signature**: `getGeographicAccessCustomRegion(request: GeographicAccess.GetGeographicAccessCustomRegionRequest, options?: RequestOptions): ApiPromise<GeographicAccessCustomRegion, GeographicAccess.GetGeographicAccessCustomRegionError>`
- **Wire**: `GET /rbac/v1/custom-regions/{customRegionId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GeographicAccessCustomRegion`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `GeographicAccess.GetGeographicAccessCustomRegionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [429] `ProblemDetails` · `"problemDetails6"` [500] `ProblemDetails` · `"problemDetails7"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeographicAccess.GetGeographicAccessCustomRegionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customRegionId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeographicAccessCustomRegion` | `geographicAccessCustomRegionSchema` | `src/models/geographic-access-custom-region.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getUserGeographicAccessScope

- **Signature**: `getUserGeographicAccessScope(request: GeographicAccess.GetUserGeographicAccessScopeRequest, options?: RequestOptions): ApiPromise<GeographicAccessScope, GeographicAccess.GetUserGeographicAccessScopeError>`
- **Wire**: `GET /rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GeographicAccessScope`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `GeographicAccess.GetUserGeographicAccessScopeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [429] `ProblemDetails` · `"problemDetails7"` [500] `ProblemDetails` · `"problemDetails8"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeographicAccess.GetUserGeographicAccessScopeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `targetCustomerId` | `path` | — | `string` | yes |
| `userId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeographicAccessScope` | `geographicAccessScopeSchema` | `src/models/unions/geographic-access-scope.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listGeographicAccessCountries

- **Signature**: `listGeographicAccessCountries(request?: GeographicAccess.ListGeographicAccessCountriesRequest, options?: RequestOptions): ApiPromise<GeographicAccessCountriesResponse, GeographicAccess.ListGeographicAccessCountriesError>`
- **Wire**: `GET /rbac/v1/countries`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GeographicAccessCountriesResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `GeographicAccess.ListGeographicAccessCountriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeographicAccess.ListGeographicAccessCountriesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeographicAccessCountriesResponse` | `geographicAccessCountriesResponseSchema` | `src/models/geographic-access-countries-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listGeographicAccessCustomRegions

- **Signature**: `listGeographicAccessCustomRegions(request?: GeographicAccess.ListGeographicAccessCustomRegionsRequest, options?: RequestOptions): ApiPromise<GeographicAccessCustomRegionsResponse, GeographicAccess.ListGeographicAccessCustomRegionsError>`
- **Wire**: `GET /rbac/v1/custom-regions`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GeographicAccessCustomRegionsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `GeographicAccess.ListGeographicAccessCustomRegionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [429] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeographicAccess.ListGeographicAccessCustomRegionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeographicAccessCustomRegionsResponse` | `geographicAccessCustomRegionsResponseSchema` | `src/models/geographic-access-custom-regions-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### updateCustomerGeographicAccessScope

- **Signature**: `updateCustomerGeographicAccessScope(request: GeographicAccess.UpdateCustomerGeographicAccessScopeRequest, options?: RequestOptions): ApiPromise<GeographicAccessScope, GeographicAccess.UpdateCustomerGeographicAccessScopeError>`
- **Wire**: `PUT /rbac/v1/customers/{targetCustomerId}/geographic-scope`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GeographicAccessScope`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `GeographicAccess.UpdateCustomerGeographicAccessScopeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [429] `ProblemDetails` · `"problemDetails7"` [500] `ProblemDetails` · `"problemDetails8"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeographicAccess.UpdateCustomerGeographicAccessScopeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `targetCustomerId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |
| `body` | `body` | — | `UpdateGeographicAccessScopeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateGeographicAccessScopeRequest` | `updateGeographicAccessScopeRequestSchema` | `src/models/unions/update-geographic-access-scope-request.ts` |
| `GeographicAccessScope` | `geographicAccessScopeSchema` | `src/models/unions/geographic-access-scope.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### updateGeographicAccessCustomRegion

- **Signature**: `updateGeographicAccessCustomRegion(request: GeographicAccess.UpdateGeographicAccessCustomRegionRequestParams, options?: RequestOptions): ApiPromise<GeographicAccessCustomRegion, GeographicAccess.UpdateGeographicAccessCustomRegionError>`
- **Wire**: `PATCH /rbac/v1/custom-regions/{customRegionId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GeographicAccessCustomRegion`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `GeographicAccess.UpdateGeographicAccessCustomRegionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [429] `ProblemDetails` · `"problemDetails7"` [500] `ProblemDetails` · `"problemDetails8"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeographicAccess.UpdateGeographicAccessCustomRegionRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customRegionId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |
| `body` | `body` | — | `UpdateGeographicAccessCustomRegionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateGeographicAccessCustomRegionRequest` | `updateGeographicAccessCustomRegionRequestSchema` | `src/models/update-geographic-access-custom-region-request.ts` |
| `GeographicAccessCustomRegion` | `geographicAccessCustomRegionSchema` | `src/models/geographic-access-custom-region.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### updateUserGeographicAccessScope

- **Signature**: `updateUserGeographicAccessScope(request: GeographicAccess.UpdateUserGeographicAccessScopeRequest, options?: RequestOptions): ApiPromise<GeographicAccessScope, GeographicAccess.UpdateUserGeographicAccessScopeError>`
- **Wire**: `PUT /rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GeographicAccessScope`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `GeographicAccess.UpdateUserGeographicAccessScopeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [429] `ProblemDetails` · `"problemDetails7"` [500] `ProblemDetails` · `"problemDetails8"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeographicAccess.UpdateUserGeographicAccessScopeRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `targetCustomerId` | `path` | — | `string` | yes |
| `userId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |
| `body` | `body` | — | `UpdateGeographicAccessScopeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateGeographicAccessScopeRequest` | `updateGeographicAccessScopeRequestSchema` | `src/models/unions/update-geographic-access-scope-request.ts` |
| `GeographicAccessScope` | `geographicAccessScopeSchema` | `src/models/unions/geographic-access-scope.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

