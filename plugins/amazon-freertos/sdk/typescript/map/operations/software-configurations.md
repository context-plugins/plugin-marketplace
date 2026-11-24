<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareConfigurations — operations

Accessor: `client.softwareConfigurations` · Source: `src/resources/software-configurations.ts` · 5 operations · Request and error types: namespace `SoftwareConfigurations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-free-rtos`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSoftwareConfiguration

- **Signature**: `createSoftwareConfiguration(request: SoftwareConfigurations.CreateSoftwareConfigurationRequestParams, options?: RequestOptions): ApiPromise<SoftwareConfiguration, SoftwareConfigurations.CreateSoftwareConfigurationError>`
- **Wire**: `POST /software-configuration-records`
- **Auth**: `awsSigV4`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SoftwareConfiguration`
- **Error**: `AmazonFreeRtosError` with `kind: "api"`, an instance of `SoftwareConfigurations.CreateSoftwareConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareConfigurations.CreateSoftwareConfigurationRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateSoftwareConfigurationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSoftwareConfigurationRequest` | `createSoftwareConfigurationRequestSchema` | `src/models/create-software-configuration-request.ts` |
| `SoftwareConfiguration` | `softwareConfigurationSchema` | `src/models/software-configuration.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteSoftwareConfiguration

- **Signature**: `deleteSoftwareConfiguration(request: SoftwareConfigurations.DeleteSoftwareConfigurationRequest, options?: RequestOptions): ApiPromise<undefined, SoftwareConfigurations.DeleteSoftwareConfigurationError>`
- **Wire**: `DELETE /software-configuration-records/{configId}`
- **Auth**: `awsSigV4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonFreeRtosError` with `kind: "api"`, an instance of `SoftwareConfigurations.DeleteSoftwareConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareConfigurations.DeleteSoftwareConfigurationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `configId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### describeSoftwareConfiguration

- **Signature**: `describeSoftwareConfiguration(request: SoftwareConfigurations.DescribeSoftwareConfigurationRequest, options?: RequestOptions): ApiPromise<SoftwareConfiguration, SoftwareConfigurations.DescribeSoftwareConfigurationError>`
- **Wire**: `GET /software-configuration-records/{configId}`
- **Auth**: `awsSigV4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SoftwareConfiguration`
- **Error**: `AmazonFreeRtosError` with `kind: "api"`, an instance of `SoftwareConfigurations.DescribeSoftwareConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareConfigurations.DescribeSoftwareConfigurationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `configId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SoftwareConfiguration` | `softwareConfigurationSchema` | `src/models/software-configuration.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listSoftwareConfigurations

- **Signature**: `listSoftwareConfigurations(request?: SoftwareConfigurations.ListSoftwareConfigurationsRequest, options?: RequestOptions): ApiPromise<SoftwareConfigurationRecordsResponse, SoftwareConfigurations.ListSoftwareConfigurationsError>`
- **Wire**: `GET /software-configuration-records`
- **Auth**: `awsSigV4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SoftwareConfigurationRecordsResponse`
- **Error**: `AmazonFreeRtosError` with `kind: "api"`, an instance of `SoftwareConfigurations.ListSoftwareConfigurationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareConfigurations.ListSoftwareConfigurationsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no |
| `nextToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SoftwareConfigurationRecordsResponse` | `softwareConfigurationRecordsResponseSchema` | `src/models/software-configuration-records-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateSoftwareConfiguration

- **Signature**: `updateSoftwareConfiguration(request: SoftwareConfigurations.UpdateSoftwareConfigurationRequestParams, options?: RequestOptions): ApiPromise<SoftwareConfiguration, SoftwareConfigurations.UpdateSoftwareConfigurationError>`
- **Wire**: `PUT /software-configuration-records/{configId}`
- **Auth**: `awsSigV4`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SoftwareConfiguration`
- **Error**: `AmazonFreeRtosError` with `kind: "api"`, an instance of `SoftwareConfigurations.UpdateSoftwareConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareConfigurations.UpdateSoftwareConfigurationRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `configId` | `path` | `string` | yes |
| `body` | `body` | `UpdateSoftwareConfigurationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSoftwareConfigurationRequest` | `updateSoftwareConfigurationRequestSchema` | `src/models/update-software-configuration-request.ts` |
| `SoftwareConfiguration` | `softwareConfigurationSchema` | `src/models/software-configuration.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

