<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `src/resources/projects.ts` · 101 operations · Request and error types: namespace `Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apigee`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### apigeeProjectsProvisionOrganization

- **Signature**: `apigeeProjectsProvisionOrganization(request: Projects.ApigeeProjectsProvisionOrganizationRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApigeeProjectsProvisionOrganizationError>`
- **Wire**: `POST /v1/projects/{projectsId}:provisionOrganization`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApigeeProjectsProvisionOrganizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApigeeProjectsProvisionOrganizationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1ProvisionOrganizationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ProvisionOrganizationRequest` | `googleCloudApigeeV1ProvisionOrganizationRequestSchema` | `src/models/google-cloud-apigee-v1-provision-organization-request.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsAddonsGet

- **Signature**: `apihubProjectsLocationsAddonsGet(request: Projects.ApihubProjectsLocationsAddonsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Addon, Projects.ApihubProjectsLocationsAddonsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/addons/{addonsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1Addon`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsAddonsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsAddonsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `addonsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Addon` | `googleCloudApihubV1AddonSchema` | `src/models/google-cloud-apihub-v1-addon.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsAddonsList

- **Signature**: `apihubProjectsLocationsAddonsList(request: Projects.ApihubProjectsLocationsAddonsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListAddonsResponse, Projects.ApihubProjectsLocationsAddonsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/addons`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListAddonsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsAddonsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsAddonsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListAddonsResponse` | `googleCloudApihubV1ListAddonsResponseSchema` | `src/models/google-cloud-apihub-v1-list-addons-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsAddonsManageConfig

- **Signature**: `apihubProjectsLocationsAddonsManageConfig(request: Projects.ApihubProjectsLocationsAddonsManageConfigRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsAddonsManageConfigError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/addons/{addonsId}:manageConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsAddonsManageConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsAddonsManageConfigRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `addonsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApihubV1ManageAddonConfigRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ManageAddonConfigRequest` | `googleCloudApihubV1ManageAddonConfigRequestSchema` | `src/models/google-cloud-apihub-v1-manage-addon-config-request.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApiHubInstancesCreate

- **Signature**: `apihubProjectsLocationsApiHubInstancesCreate(request: Projects.ApihubProjectsLocationsApiHubInstancesCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsApiHubInstancesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApiHubInstancesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApiHubInstancesCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apiHubInstanceId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1ApiHubInstance` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ApiHubInstance` | `googleCloudApihubV1ApiHubInstanceSchema` | `src/models/google-cloud-apihub-v1-api-hub-instance.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApiHubInstancesDelete

- **Signature**: `apihubProjectsLocationsApiHubInstancesDelete(request: Projects.ApihubProjectsLocationsApiHubInstancesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsApiHubInstancesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApiHubInstancesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApiHubInstancesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apiHubInstancesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApiHubInstancesGet

- **Signature**: `apihubProjectsLocationsApiHubInstancesGet(request: Projects.ApihubProjectsLocationsApiHubInstancesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ApiHubInstance, Projects.ApihubProjectsLocationsApiHubInstancesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ApiHubInstance`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApiHubInstancesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApiHubInstancesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apiHubInstancesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ApiHubInstance` | `googleCloudApihubV1ApiHubInstanceSchema` | `src/models/google-cloud-apihub-v1-api-hub-instance.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApiHubInstancesLookup

- **Signature**: `apihubProjectsLocationsApiHubInstancesLookup(request: Projects.ApihubProjectsLocationsApiHubInstancesLookupRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1LookupApiHubInstanceResponse, Projects.ApihubProjectsLocationsApiHubInstancesLookupError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances:lookup`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1LookupApiHubInstanceResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApiHubInstancesLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApiHubInstancesLookupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1LookupApiHubInstanceResponse` | `googleCloudApihubV1LookupApiHubInstanceResponseSchema` | `src/models/google-cloud-apihub-v1-lookup-api-hub-instance-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApiHubInstancesPatch

- **Signature**: `apihubProjectsLocationsApiHubInstancesPatch(request: Projects.ApihubProjectsLocationsApiHubInstancesPatchRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsApiHubInstancesPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApiHubInstancesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApiHubInstancesPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apiHubInstancesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1ApiHubInstance` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ApiHubInstance` | `googleCloudApihubV1ApiHubInstanceSchema` | `src/models/google-cloud-apihub-v1-api-hub-instance.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisCreate

- **Signature**: `apihubProjectsLocationsApisCreate(request: Projects.ApihubProjectsLocationsApisCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Api, Projects.ApihubProjectsLocationsApisCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Api`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apiId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Api` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Api` | `googleCloudApihubV1ApiSchema` | `src/models/google-cloud-apihub-v1-api.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisDelete

- **Signature**: `apihubProjectsLocationsApisDelete(request: Projects.ApihubProjectsLocationsApisDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsApisDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `force` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisGet

- **Signature**: `apihubProjectsLocationsApisGet(request: Projects.ApihubProjectsLocationsApisGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Api, Projects.ApihubProjectsLocationsApisGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1Api`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Api` | `googleCloudApihubV1ApiSchema` | `src/models/google-cloud-apihub-v1-api.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisList

- **Signature**: `apihubProjectsLocationsApisList(request: Projects.ApihubProjectsLocationsApisListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListApisResponse, Projects.ApihubProjectsLocationsApisListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListApisResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListApisResponse` | `googleCloudApihubV1ListApisResponseSchema` | `src/models/google-cloud-apihub-v1-list-apis-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisPatch

- **Signature**: `apihubProjectsLocationsApisPatch(request: Projects.ApihubProjectsLocationsApisPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Api, Projects.ApihubProjectsLocationsApisPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Api`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Api` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Api` | `googleCloudApihubV1ApiSchema` | `src/models/google-cloud-apihub-v1-api.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsCreate

- **Signature**: `apihubProjectsLocationsApisVersionsCreate(request: Projects.ApihubProjectsLocationsApisVersionsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Version, Projects.ApihubProjectsLocationsApisVersionsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Version`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Version` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Version` | `googleCloudApihubV1VersionSchema` | `src/models/google-cloud-apihub-v1-version.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsDefinitionsGet

- **Signature**: `apihubProjectsLocationsApisVersionsDefinitionsGet(request: Projects.ApihubProjectsLocationsApisVersionsDefinitionsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Definition, Projects.ApihubProjectsLocationsApisVersionsDefinitionsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/definitions/{definitionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1Definition`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsDefinitionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsDefinitionsGetRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `definitionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Definition` | `googleCloudApihubV1DefinitionSchema` | `src/models/google-cloud-apihub-v1-definition.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsDelete

- **Signature**: `apihubProjectsLocationsApisVersionsDelete(request: Projects.ApihubProjectsLocationsApisVersionsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsApisVersionsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsDeleteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `force` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsGet

- **Signature**: `apihubProjectsLocationsApisVersionsGet(request: Projects.ApihubProjectsLocationsApisVersionsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Version, Projects.ApihubProjectsLocationsApisVersionsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1Version`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Version` | `googleCloudApihubV1VersionSchema` | `src/models/google-cloud-apihub-v1-version.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsList

- **Signature**: `apihubProjectsLocationsApisVersionsList(request: Projects.ApihubProjectsLocationsApisVersionsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListVersionsResponse, Projects.ApihubProjectsLocationsApisVersionsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListVersionsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListVersionsResponse` | `googleCloudApihubV1ListVersionsResponseSchema` | `src/models/google-cloud-apihub-v1-list-versions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsOperationsCreate

- **Signature**: `apihubProjectsLocationsApisVersionsOperationsCreate(request: Projects.ApihubProjectsLocationsApisVersionsOperationsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ApiOperation, Projects.ApihubProjectsLocationsApisVersionsOperationsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1ApiOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsOperationsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsOperationsCreateRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `apiOperationId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1ApiOperation` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ApiOperation` | `googleCloudApihubV1ApiOperationSchema` | `src/models/google-cloud-apihub-v1-api-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsOperationsDelete

- **Signature**: `apihubProjectsLocationsApisVersionsOperationsDelete(request: Projects.ApihubProjectsLocationsApisVersionsOperationsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsApisVersionsOperationsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsOperationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsOperationsDeleteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsOperationsGet

- **Signature**: `apihubProjectsLocationsApisVersionsOperationsGet(request: Projects.ApihubProjectsLocationsApisVersionsOperationsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ApiOperation, Projects.ApihubProjectsLocationsApisVersionsOperationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ApiOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsOperationsGetRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ApiOperation` | `googleCloudApihubV1ApiOperationSchema` | `src/models/google-cloud-apihub-v1-api-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsOperationsList

- **Signature**: `apihubProjectsLocationsApisVersionsOperationsList(request: Projects.ApihubProjectsLocationsApisVersionsOperationsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListApiOperationsResponse, Projects.ApihubProjectsLocationsApisVersionsOperationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListApiOperationsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsOperationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsOperationsListRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListApiOperationsResponse` | `googleCloudApihubV1ListApiOperationsResponseSchema` | `src/models/google-cloud-apihub-v1-list-api-operations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsOperationsPatch

- **Signature**: `apihubProjectsLocationsApisVersionsOperationsPatch(request: Projects.ApihubProjectsLocationsApisVersionsOperationsPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ApiOperation, Projects.ApihubProjectsLocationsApisVersionsOperationsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1ApiOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsOperationsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsOperationsPatchRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1ApiOperation` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ApiOperation` | `googleCloudApihubV1ApiOperationSchema` | `src/models/google-cloud-apihub-v1-api-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsPatch

- **Signature**: `apihubProjectsLocationsApisVersionsPatch(request: Projects.ApihubProjectsLocationsApisVersionsPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Version, Projects.ApihubProjectsLocationsApisVersionsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Version`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsPatchRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Version` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Version` | `googleCloudApihubV1VersionSchema` | `src/models/google-cloud-apihub-v1-version.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsSpecsCreate

- **Signature**: `apihubProjectsLocationsApisVersionsSpecsCreate(request: Projects.ApihubProjectsLocationsApisVersionsSpecsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Spec, Projects.ApihubProjectsLocationsApisVersionsSpecsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Spec`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsSpecsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsSpecsCreateRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `specId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Spec` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Spec` | `googleCloudApihubV1SpecSchema` | `src/models/google-cloud-apihub-v1-spec.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsSpecsDelete

- **Signature**: `apihubProjectsLocationsApisVersionsSpecsDelete(request: Projects.ApihubProjectsLocationsApisVersionsSpecsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsApisVersionsSpecsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsSpecsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsSpecsDeleteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `specsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContent

- **Signature**: `apihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContent(request: Projects.ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1FetchAdditionalSpecContentResponse, Projects.ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:fetchAdditionalSpecContent`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1FetchAdditionalSpecContentResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `specsId` | `path` | `string` | yes |
| `specContentType` | `query` | `SpecContentType1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SpecContentType1` | `specContentType1Schema` | `src/models/spec-content-type1.ts` |
| `GoogleCloudApihubV1FetchAdditionalSpecContentResponse` | `googleCloudApihubV1FetchAdditionalSpecContentResponseSchema` | `src/models/google-cloud-apihub-v1-fetch-additional-spec-content-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsSpecsGet

- **Signature**: `apihubProjectsLocationsApisVersionsSpecsGet(request: Projects.ApihubProjectsLocationsApisVersionsSpecsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Spec, Projects.ApihubProjectsLocationsApisVersionsSpecsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1Spec`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsSpecsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsSpecsGetRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `specsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Spec` | `googleCloudApihubV1SpecSchema` | `src/models/google-cloud-apihub-v1-spec.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsSpecsGetContents

- **Signature**: `apihubProjectsLocationsApisVersionsSpecsGetContents(request: Projects.ApihubProjectsLocationsApisVersionsSpecsGetContentsRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1SpecContents, Projects.ApihubProjectsLocationsApisVersionsSpecsGetContentsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:contents`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1SpecContents`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsSpecsGetContentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsSpecsGetContentsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `specsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1SpecContents` | `googleCloudApihubV1SpecContentsSchema` | `src/models/google-cloud-apihub-v1-spec-contents.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsSpecsLint

- **Signature**: `apihubProjectsLocationsApisVersionsSpecsLint(request: Projects.ApihubProjectsLocationsApisVersionsSpecsLintRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsApisVersionsSpecsLintError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:lint`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsSpecsLintError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsSpecsLintRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `specsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsSpecsList

- **Signature**: `apihubProjectsLocationsApisVersionsSpecsList(request: Projects.ApihubProjectsLocationsApisVersionsSpecsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListSpecsResponse, Projects.ApihubProjectsLocationsApisVersionsSpecsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListSpecsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsSpecsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsSpecsListRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListSpecsResponse` | `googleCloudApihubV1ListSpecsResponseSchema` | `src/models/google-cloud-apihub-v1-list-specs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsApisVersionsSpecsPatch

- **Signature**: `apihubProjectsLocationsApisVersionsSpecsPatch(request: Projects.ApihubProjectsLocationsApisVersionsSpecsPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Spec, Projects.ApihubProjectsLocationsApisVersionsSpecsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Spec`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsApisVersionsSpecsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsApisVersionsSpecsPatchRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `versionsId` | `path` | `string` | yes |
| `specsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Spec` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Spec` | `googleCloudApihubV1SpecSchema` | `src/models/google-cloud-apihub-v1-spec.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsAttributesCreate

- **Signature**: `apihubProjectsLocationsAttributesCreate(request: Projects.ApihubProjectsLocationsAttributesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Attribute, Projects.ApihubProjectsLocationsAttributesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/attributes`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Attribute`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsAttributesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsAttributesCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `attributeId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Attribute` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Attribute` | `googleCloudApihubV1AttributeSchema` | `src/models/google-cloud-apihub-v1-attribute.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsAttributesDelete

- **Signature**: `apihubProjectsLocationsAttributesDelete(request: Projects.ApihubProjectsLocationsAttributesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsAttributesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsAttributesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsAttributesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `attributesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsAttributesGet

- **Signature**: `apihubProjectsLocationsAttributesGet(request: Projects.ApihubProjectsLocationsAttributesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Attribute, Projects.ApihubProjectsLocationsAttributesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1Attribute`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsAttributesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsAttributesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `attributesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Attribute` | `googleCloudApihubV1AttributeSchema` | `src/models/google-cloud-apihub-v1-attribute.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsAttributesList

- **Signature**: `apihubProjectsLocationsAttributesList(request: Projects.ApihubProjectsLocationsAttributesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListAttributesResponse, Projects.ApihubProjectsLocationsAttributesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/attributes`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListAttributesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsAttributesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsAttributesListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListAttributesResponse` | `googleCloudApihubV1ListAttributesResponseSchema` | `src/models/google-cloud-apihub-v1-list-attributes-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsAttributesPatch

- **Signature**: `apihubProjectsLocationsAttributesPatch(request: Projects.ApihubProjectsLocationsAttributesPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Attribute, Projects.ApihubProjectsLocationsAttributesPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Attribute`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsAttributesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsAttributesPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `attributesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Attribute` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Attribute` | `googleCloudApihubV1AttributeSchema` | `src/models/google-cloud-apihub-v1-attribute.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsCollectApiData

- **Signature**: `apihubProjectsLocationsCollectApiData(request: Projects.ApihubProjectsLocationsCollectApiDataRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsCollectApiDataError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}:collectApiData`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsCollectApiDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsCollectApiDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApihubV1CollectApiDataRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1CollectApiDataRequest` | `googleCloudApihubV1CollectApiDataRequestSchema` | `src/models/google-cloud-apihub-v1-collect-api-data-request.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsCurationsCreate

- **Signature**: `apihubProjectsLocationsCurationsCreate(request: Projects.ApihubProjectsLocationsCurationsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Curation, Projects.ApihubProjectsLocationsCurationsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/curations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Curation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsCurationsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsCurationsCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `curationId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Curation` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Curation` | `googleCloudApihubV1CurationSchema` | `src/models/google-cloud-apihub-v1-curation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsCurationsDelete

- **Signature**: `apihubProjectsLocationsCurationsDelete(request: Projects.ApihubProjectsLocationsCurationsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsCurationsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsCurationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsCurationsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `curationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsCurationsGet

- **Signature**: `apihubProjectsLocationsCurationsGet(request: Projects.ApihubProjectsLocationsCurationsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Curation, Projects.ApihubProjectsLocationsCurationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1Curation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsCurationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsCurationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `curationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Curation` | `googleCloudApihubV1CurationSchema` | `src/models/google-cloud-apihub-v1-curation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsCurationsList

- **Signature**: `apihubProjectsLocationsCurationsList(request: Projects.ApihubProjectsLocationsCurationsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListCurationsResponse, Projects.ApihubProjectsLocationsCurationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/curations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListCurationsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsCurationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsCurationsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListCurationsResponse` | `googleCloudApihubV1ListCurationsResponseSchema` | `src/models/google-cloud-apihub-v1-list-curations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsCurationsPatch

- **Signature**: `apihubProjectsLocationsCurationsPatch(request: Projects.ApihubProjectsLocationsCurationsPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Curation, Projects.ApihubProjectsLocationsCurationsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Curation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsCurationsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsCurationsPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `curationsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Curation` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Curation` | `googleCloudApihubV1CurationSchema` | `src/models/google-cloud-apihub-v1-curation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDependenciesCreate

- **Signature**: `apihubProjectsLocationsDependenciesCreate(request: Projects.ApihubProjectsLocationsDependenciesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Dependency, Projects.ApihubProjectsLocationsDependenciesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/dependencies`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Dependency`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDependenciesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDependenciesCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `dependencyId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Dependency` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Dependency` | `googleCloudApihubV1DependencySchema` | `src/models/google-cloud-apihub-v1-dependency.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDependenciesDelete

- **Signature**: `apihubProjectsLocationsDependenciesDelete(request: Projects.ApihubProjectsLocationsDependenciesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsDependenciesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDependenciesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDependenciesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `dependenciesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDependenciesGet

- **Signature**: `apihubProjectsLocationsDependenciesGet(request: Projects.ApihubProjectsLocationsDependenciesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Dependency, Projects.ApihubProjectsLocationsDependenciesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1Dependency`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDependenciesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDependenciesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `dependenciesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Dependency` | `googleCloudApihubV1DependencySchema` | `src/models/google-cloud-apihub-v1-dependency.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDependenciesList

- **Signature**: `apihubProjectsLocationsDependenciesList(request: Projects.ApihubProjectsLocationsDependenciesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListDependenciesResponse, Projects.ApihubProjectsLocationsDependenciesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/dependencies`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListDependenciesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDependenciesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDependenciesListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListDependenciesResponse` | `googleCloudApihubV1ListDependenciesResponseSchema` | `src/models/google-cloud-apihub-v1-list-dependencies-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDependenciesPatch

- **Signature**: `apihubProjectsLocationsDependenciesPatch(request: Projects.ApihubProjectsLocationsDependenciesPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Dependency, Projects.ApihubProjectsLocationsDependenciesPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Dependency`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDependenciesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDependenciesPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `dependenciesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Dependency` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Dependency` | `googleCloudApihubV1DependencySchema` | `src/models/google-cloud-apihub-v1-dependency.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDeploymentsCreate

- **Signature**: `apihubProjectsLocationsDeploymentsCreate(request: Projects.ApihubProjectsLocationsDeploymentsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Deployment, Projects.ApihubProjectsLocationsDeploymentsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Deployment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDeploymentsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDeploymentsCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `deploymentId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Deployment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Deployment` | `googleCloudApihubV1DeploymentSchema` | `src/models/google-cloud-apihub-v1-deployment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDeploymentsDelete

- **Signature**: `apihubProjectsLocationsDeploymentsDelete(request: Projects.ApihubProjectsLocationsDeploymentsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsDeploymentsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDeploymentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDeploymentsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `deploymentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDeploymentsGet

- **Signature**: `apihubProjectsLocationsDeploymentsGet(request: Projects.ApihubProjectsLocationsDeploymentsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Deployment, Projects.ApihubProjectsLocationsDeploymentsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1Deployment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDeploymentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDeploymentsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `deploymentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Deployment` | `googleCloudApihubV1DeploymentSchema` | `src/models/google-cloud-apihub-v1-deployment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDeploymentsList

- **Signature**: `apihubProjectsLocationsDeploymentsList(request: Projects.ApihubProjectsLocationsDeploymentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListDeploymentsResponse, Projects.ApihubProjectsLocationsDeploymentsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListDeploymentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDeploymentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDeploymentsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListDeploymentsResponse` | `googleCloudApihubV1ListDeploymentsResponseSchema` | `src/models/google-cloud-apihub-v1-list-deployments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDeploymentsPatch

- **Signature**: `apihubProjectsLocationsDeploymentsPatch(request: Projects.ApihubProjectsLocationsDeploymentsPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Deployment, Projects.ApihubProjectsLocationsDeploymentsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Deployment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDeploymentsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDeploymentsPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `deploymentsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Deployment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Deployment` | `googleCloudApihubV1DeploymentSchema` | `src/models/google-cloud-apihub-v1-deployment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGet

- **Signature**: `apihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGet(request: Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1DiscoveredApiOperation, Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}/discoveredApiOperations/{discoveredApiOperationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1DiscoveredApiOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `discoveredApiObservationsId` | `path` | `string` | yes |
| `discoveredApiOperationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1DiscoveredApiOperation` | `googleCloudApihubV1DiscoveredApiOperationSchema` | `src/models/google-cloud-apihub-v1-discovered-api-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsList

- **Signature**: `apihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsList(request: Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListDiscoveredApiOperationsResponse, Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}/discoveredApiOperations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListDiscoveredApiOperationsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `discoveredApiObservationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListDiscoveredApiOperationsResponse` | `googleCloudApihubV1ListDiscoveredApiOperationsResponseSchema` | `src/models/google-cloud-apihub-v1-list-discovered-api-operations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDiscoveredApiObservationsGet

- **Signature**: `apihubProjectsLocationsDiscoveredApiObservationsGet(request: Projects.ApihubProjectsLocationsDiscoveredApiObservationsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1DiscoveredApiObservation, Projects.ApihubProjectsLocationsDiscoveredApiObservationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1DiscoveredApiObservation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDiscoveredApiObservationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDiscoveredApiObservationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `discoveredApiObservationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1DiscoveredApiObservation` | `googleCloudApihubV1DiscoveredApiObservationSchema` | `src/models/google-cloud-apihub-v1-discovered-api-observation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsDiscoveredApiObservationsList

- **Signature**: `apihubProjectsLocationsDiscoveredApiObservationsList(request: Projects.ApihubProjectsLocationsDiscoveredApiObservationsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListDiscoveredApiObservationsResponse, Projects.ApihubProjectsLocationsDiscoveredApiObservationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListDiscoveredApiObservationsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsDiscoveredApiObservationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsDiscoveredApiObservationsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListDiscoveredApiObservationsResponse` | `googleCloudApihubV1ListDiscoveredApiObservationsResponseSchema` | `src/models/google-cloud-apihub-v1-list-discovered-api-observations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsExternalApisCreate

- **Signature**: `apihubProjectsLocationsExternalApisCreate(request: Projects.ApihubProjectsLocationsExternalApisCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ExternalApi, Projects.ApihubProjectsLocationsExternalApisCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/externalApis`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1ExternalApi`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsExternalApisCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsExternalApisCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `externalApiId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1ExternalApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ExternalApi` | `googleCloudApihubV1ExternalApiSchema` | `src/models/google-cloud-apihub-v1-external-api.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsExternalApisDelete

- **Signature**: `apihubProjectsLocationsExternalApisDelete(request: Projects.ApihubProjectsLocationsExternalApisDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsExternalApisDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsExternalApisDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsExternalApisDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `externalApisId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsExternalApisGet

- **Signature**: `apihubProjectsLocationsExternalApisGet(request: Projects.ApihubProjectsLocationsExternalApisGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ExternalApi, Projects.ApihubProjectsLocationsExternalApisGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ExternalApi`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsExternalApisGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsExternalApisGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `externalApisId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ExternalApi` | `googleCloudApihubV1ExternalApiSchema` | `src/models/google-cloud-apihub-v1-external-api.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsExternalApisList

- **Signature**: `apihubProjectsLocationsExternalApisList(request: Projects.ApihubProjectsLocationsExternalApisListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListExternalApisResponse, Projects.ApihubProjectsLocationsExternalApisListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/externalApis`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListExternalApisResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsExternalApisListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsExternalApisListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListExternalApisResponse` | `googleCloudApihubV1ListExternalApisResponseSchema` | `src/models/google-cloud-apihub-v1-list-external-apis-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsExternalApisPatch

- **Signature**: `apihubProjectsLocationsExternalApisPatch(request: Projects.ApihubProjectsLocationsExternalApisPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ExternalApi, Projects.ApihubProjectsLocationsExternalApisPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1ExternalApi`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsExternalApisPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsExternalApisPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `externalApisId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1ExternalApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ExternalApi` | `googleCloudApihubV1ExternalApiSchema` | `src/models/google-cloud-apihub-v1-external-api.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsGeneratedSpecApisGenerateSpec

- **Signature**: `apihubProjectsLocationsGeneratedSpecApisGenerateSpec(request: Projects.ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1GenerateSpecResponse, Projects.ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis/{generatedSpecApisId}:generateSpec`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1GenerateSpecResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `generatedSpecApisId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApihubV1GenerateSpecRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1GenerateSpecRequest` | `googleCloudApihubV1GenerateSpecRequestSchema` | `src/models/google-cloud-apihub-v1-generate-spec-request.ts` |
| `GoogleCloudApihubV1GenerateSpecResponse` | `googleCloudApihubV1GenerateSpecResponseSchema` | `src/models/google-cloud-apihub-v1-generate-spec-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsGeneratedSpecApisGet

- **Signature**: `apihubProjectsLocationsGeneratedSpecApisGet(request: Projects.ApihubProjectsLocationsGeneratedSpecApisGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1GeneratedSpecApi, Projects.ApihubProjectsLocationsGeneratedSpecApisGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis/{generatedSpecApisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1GeneratedSpecApi`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsGeneratedSpecApisGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsGeneratedSpecApisGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `generatedSpecApisId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1GeneratedSpecApi` | `googleCloudApihubV1GeneratedSpecApiSchema` | `src/models/google-cloud-apihub-v1-generated-spec-api.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsGeneratedSpecApisList

- **Signature**: `apihubProjectsLocationsGeneratedSpecApisList(request: Projects.ApihubProjectsLocationsGeneratedSpecApisListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListGeneratedSpecApisResponse, Projects.ApihubProjectsLocationsGeneratedSpecApisListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListGeneratedSpecApisResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsGeneratedSpecApisListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsGeneratedSpecApisListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListGeneratedSpecApisResponse` | `googleCloudApihubV1ListGeneratedSpecApisResponseSchema` | `src/models/google-cloud-apihub-v1-list-generated-spec-apis-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsGet

- **Signature**: `apihubProjectsLocationsGet(request: Projects.ApihubProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudLocationLocation, Projects.ApihubProjectsLocationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudLocationLocation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudLocationLocation` | `googleCloudLocationLocationSchema` | `src/models/google-cloud-location-location.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsHostProjectRegistrationsCreate

- **Signature**: `apihubProjectsLocationsHostProjectRegistrationsCreate(request: Projects.ApihubProjectsLocationsHostProjectRegistrationsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1HostProjectRegistration, Projects.ApihubProjectsLocationsHostProjectRegistrationsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1HostProjectRegistration`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsHostProjectRegistrationsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsHostProjectRegistrationsCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `hostProjectRegistrationId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1HostProjectRegistration` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1HostProjectRegistration` | `googleCloudApihubV1HostProjectRegistrationSchema` | `src/models/google-cloud-apihub-v1-host-project-registration.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsHostProjectRegistrationsGet

- **Signature**: `apihubProjectsLocationsHostProjectRegistrationsGet(request: Projects.ApihubProjectsLocationsHostProjectRegistrationsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1HostProjectRegistration, Projects.ApihubProjectsLocationsHostProjectRegistrationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations/{hostProjectRegistrationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1HostProjectRegistration`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsHostProjectRegistrationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsHostProjectRegistrationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `hostProjectRegistrationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1HostProjectRegistration` | `googleCloudApihubV1HostProjectRegistrationSchema` | `src/models/google-cloud-apihub-v1-host-project-registration.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsHostProjectRegistrationsList

- **Signature**: `apihubProjectsLocationsHostProjectRegistrationsList(request: Projects.ApihubProjectsLocationsHostProjectRegistrationsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListHostProjectRegistrationsResponse, Projects.ApihubProjectsLocationsHostProjectRegistrationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListHostProjectRegistrationsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsHostProjectRegistrationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsHostProjectRegistrationsListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `orderBy` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListHostProjectRegistrationsResponse` | `googleCloudApihubV1ListHostProjectRegistrationsResponseSchema` | `src/models/google-cloud-apihub-v1-list-host-project-registrations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsList

- **Signature**: `apihubProjectsLocationsList(request: Projects.ApihubProjectsLocationsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudLocationListLocationsResponse, Projects.ApihubProjectsLocationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudLocationListLocationsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `extraLocationTypes` | `query` | `string[]` | no |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudLocationListLocationsResponse` | `googleCloudLocationListLocationsResponseSchema` | `src/models/google-cloud-location-list-locations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsLookupRuntimeProjectAttachment

- **Signature**: `apihubProjectsLocationsLookupRuntimeProjectAttachment(request: Projects.ApihubProjectsLocationsLookupRuntimeProjectAttachmentRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse, Projects.ApihubProjectsLocationsLookupRuntimeProjectAttachmentError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}:lookupRuntimeProjectAttachment`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsLookupRuntimeProjectAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsLookupRuntimeProjectAttachmentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse` | `googleCloudApihubV1LookupRuntimeProjectAttachmentResponseSchema` | `src/models/google-cloud-apihub-v1-lookup-runtime-project-attachment-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsOperationsCancel

- **Signature**: `apihubProjectsLocationsOperationsCancel(request: Projects.ApihubProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsOperationsCancelError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsOperationsCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsOperationsCancelRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsOperationsDelete

- **Signature**: `apihubProjectsLocationsOperationsDelete(request: Projects.ApihubProjectsLocationsOperationsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsOperationsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsOperationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsOperationsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsOperationsGet

- **Signature**: `apihubProjectsLocationsOperationsGet(request: Projects.ApihubProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsOperationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsOperationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsOperationsList

- **Signature**: `apihubProjectsLocationsOperationsList(request: Projects.ApihubProjectsLocationsOperationsListRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningListOperationsResponse, Projects.ApihubProjectsLocationsOperationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleLongrunningListOperationsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsOperationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsOperationsListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `returnPartialSuccess` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningListOperationsResponse` | `googleLongrunningListOperationsResponseSchema` | `src/models/google-longrunning-list-operations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsCreate

- **Signature**: `apihubProjectsLocationsPluginsCreate(request: Projects.ApihubProjectsLocationsPluginsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Plugin, Projects.ApihubProjectsLocationsPluginsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Plugin`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1Plugin` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Plugin` | `googleCloudApihubV1PluginSchema` | `src/models/google-cloud-apihub-v1-plugin.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsDelete

- **Signature**: `apihubProjectsLocationsPluginsDelete(request: Projects.ApihubProjectsLocationsPluginsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsPluginsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsDisable

- **Signature**: `apihubProjectsLocationsPluginsDisable(request: Projects.ApihubProjectsLocationsPluginsDisableRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Plugin, Projects.ApihubProjectsLocationsPluginsDisableError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}:disable`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Plugin`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsDisableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsDisableRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Plugin` | `googleCloudApihubV1PluginSchema` | `src/models/google-cloud-apihub-v1-plugin.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsEnable

- **Signature**: `apihubProjectsLocationsPluginsEnable(request: Projects.ApihubProjectsLocationsPluginsEnableRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Plugin, Projects.ApihubProjectsLocationsPluginsEnableError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}:enable`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1Plugin`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsEnableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsEnableRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Plugin` | `googleCloudApihubV1PluginSchema` | `src/models/google-cloud-apihub-v1-plugin.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsGet

- **Signature**: `apihubProjectsLocationsPluginsGet(request: Projects.ApihubProjectsLocationsPluginsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1Plugin, Projects.ApihubProjectsLocationsPluginsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1Plugin`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1Plugin` | `googleCloudApihubV1PluginSchema` | `src/models/google-cloud-apihub-v1-plugin.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsGetStyleGuide

- **Signature**: `apihubProjectsLocationsPluginsGetStyleGuide(request: Projects.ApihubProjectsLocationsPluginsGetStyleGuideRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1StyleGuide, Projects.ApihubProjectsLocationsPluginsGetStyleGuideError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1StyleGuide`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsGetStyleGuideError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsGetStyleGuideRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1StyleGuide` | `googleCloudApihubV1StyleGuideSchema` | `src/models/google-cloud-apihub-v1-style-guide.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsInstancesCreate

- **Signature**: `apihubProjectsLocationsPluginsInstancesCreate(request: Projects.ApihubProjectsLocationsPluginsInstancesCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsPluginsInstancesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsInstancesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsInstancesCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |
| `pluginInstanceId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1PluginInstance` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1PluginInstance` | `googleCloudApihubV1PluginInstanceSchema` | `src/models/google-cloud-apihub-v1-plugin-instance.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsInstancesDelete

- **Signature**: `apihubProjectsLocationsPluginsInstancesDelete(request: Projects.ApihubProjectsLocationsPluginsInstancesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsPluginsInstancesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsInstancesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsInstancesDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsInstancesDisableAction

- **Signature**: `apihubProjectsLocationsPluginsInstancesDisableAction(request: Projects.ApihubProjectsLocationsPluginsInstancesDisableActionRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsPluginsInstancesDisableActionError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:disableAction`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsInstancesDisableActionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsInstancesDisableActionRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApihubV1DisablePluginInstanceActionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1DisablePluginInstanceActionRequest` | `googleCloudApihubV1DisablePluginInstanceActionRequestSchema` | `src/models/google-cloud-apihub-v1-disable-plugin-instance-action-request.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsInstancesEnableAction

- **Signature**: `apihubProjectsLocationsPluginsInstancesEnableAction(request: Projects.ApihubProjectsLocationsPluginsInstancesEnableActionRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsPluginsInstancesEnableActionError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:enableAction`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsInstancesEnableActionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsInstancesEnableActionRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApihubV1EnablePluginInstanceActionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1EnablePluginInstanceActionRequest` | `googleCloudApihubV1EnablePluginInstanceActionRequestSchema` | `src/models/google-cloud-apihub-v1-enable-plugin-instance-action-request.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsInstancesExecuteAction

- **Signature**: `apihubProjectsLocationsPluginsInstancesExecuteAction(request: Projects.ApihubProjectsLocationsPluginsInstancesExecuteActionRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsPluginsInstancesExecuteActionError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:executeAction`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsInstancesExecuteActionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsInstancesExecuteActionRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApihubV1ExecutePluginInstanceActionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ExecutePluginInstanceActionRequest` | `googleCloudApihubV1ExecutePluginInstanceActionRequestSchema` | `src/models/google-cloud-apihub-v1-execute-plugin-instance-action-request.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsInstancesGet

- **Signature**: `apihubProjectsLocationsPluginsInstancesGet(request: Projects.ApihubProjectsLocationsPluginsInstancesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1PluginInstance, Projects.ApihubProjectsLocationsPluginsInstancesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1PluginInstance`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsInstancesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsInstancesGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1PluginInstance` | `googleCloudApihubV1PluginInstanceSchema` | `src/models/google-cloud-apihub-v1-plugin-instance.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsInstancesList

- **Signature**: `apihubProjectsLocationsPluginsInstancesList(request: Projects.ApihubProjectsLocationsPluginsInstancesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListPluginInstancesResponse, Projects.ApihubProjectsLocationsPluginsInstancesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListPluginInstancesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsInstancesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsInstancesListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListPluginInstancesResponse` | `googleCloudApihubV1ListPluginInstancesResponseSchema` | `src/models/google-cloud-apihub-v1-list-plugin-instances-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsInstancesManageSourceData

- **Signature**: `apihubProjectsLocationsPluginsInstancesManageSourceData(request: Projects.ApihubProjectsLocationsPluginsInstancesManageSourceDataRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsPluginsInstancesManageSourceDataError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:manageSourceData`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsInstancesManageSourceDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsInstancesManageSourceDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest` | `googleCloudApihubV1ManagePluginInstanceSourceDataRequestSchema` | `src/models/google-cloud-apihub-v1-manage-plugin-instance-source-data-request.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsInstancesPatch

- **Signature**: `apihubProjectsLocationsPluginsInstancesPatch(request: Projects.ApihubProjectsLocationsPluginsInstancesPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1PluginInstance, Projects.ApihubProjectsLocationsPluginsInstancesPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1PluginInstance`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsInstancesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsInstancesPatchRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1PluginInstance` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1PluginInstance` | `googleCloudApihubV1PluginInstanceSchema` | `src/models/google-cloud-apihub-v1-plugin-instance.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsList

- **Signature**: `apihubProjectsLocationsPluginsList(request: Projects.ApihubProjectsLocationsPluginsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListPluginsResponse, Projects.ApihubProjectsLocationsPluginsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/plugins`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListPluginsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListPluginsResponse` | `googleCloudApihubV1ListPluginsResponseSchema` | `src/models/google-cloud-apihub-v1-list-plugins-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsStyleGuideGetContents

- **Signature**: `apihubProjectsLocationsPluginsStyleGuideGetContents(request: Projects.ApihubProjectsLocationsPluginsStyleGuideGetContentsRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1StyleGuideContents, Projects.ApihubProjectsLocationsPluginsStyleGuideGetContentsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide:contents`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1StyleGuideContents`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsStyleGuideGetContentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsStyleGuideGetContentsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1StyleGuideContents` | `googleCloudApihubV1StyleGuideContentsSchema` | `src/models/google-cloud-apihub-v1-style-guide-contents.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsPluginsUpdateStyleGuide

- **Signature**: `apihubProjectsLocationsPluginsUpdateStyleGuide(request: Projects.ApihubProjectsLocationsPluginsUpdateStyleGuideRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1StyleGuide, Projects.ApihubProjectsLocationsPluginsUpdateStyleGuideError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1StyleGuide`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsPluginsUpdateStyleGuideError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsPluginsUpdateStyleGuideRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pluginsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1StyleGuide` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1StyleGuide` | `googleCloudApihubV1StyleGuideSchema` | `src/models/google-cloud-apihub-v1-style-guide.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsRetrieveApiViews

- **Signature**: `apihubProjectsLocationsRetrieveApiViews(request: Projects.ApihubProjectsLocationsRetrieveApiViewsRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1RetrieveApiViewsResponse, Projects.ApihubProjectsLocationsRetrieveApiViewsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}:retrieveApiViews`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1RetrieveApiViewsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsRetrieveApiViewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsRetrieveApiViewsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `view` | `query` | `ViewApigeeProjectsApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ViewApigeeProjectsApi` | `viewApigeeProjectsApiSchema` | `src/models/view-apigee-projects-api.ts` |
| `GoogleCloudApihubV1RetrieveApiViewsResponse` | `googleCloudApihubV1RetrieveApiViewsResponseSchema` | `src/models/google-cloud-apihub-v1-retrieve-api-views-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsRuntimeProjectAttachmentsCreate

- **Signature**: `apihubProjectsLocationsRuntimeProjectAttachmentsCreate(request: Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1RuntimeProjectAttachment, Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1RuntimeProjectAttachment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `runtimeProjectAttachmentId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApihubV1RuntimeProjectAttachment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1RuntimeProjectAttachment` | `googleCloudApihubV1RuntimeProjectAttachmentSchema` | `src/models/google-cloud-apihub-v1-runtime-project-attachment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsRuntimeProjectAttachmentsDelete

- **Signature**: `apihubProjectsLocationsRuntimeProjectAttachmentsDelete(request: Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments/{runtimeProjectAttachmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `runtimeProjectAttachmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsRuntimeProjectAttachmentsGet

- **Signature**: `apihubProjectsLocationsRuntimeProjectAttachmentsGet(request: Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1RuntimeProjectAttachment, Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments/{runtimeProjectAttachmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1RuntimeProjectAttachment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `runtimeProjectAttachmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1RuntimeProjectAttachment` | `googleCloudApihubV1RuntimeProjectAttachmentSchema` | `src/models/google-cloud-apihub-v1-runtime-project-attachment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsRuntimeProjectAttachmentsList

- **Signature**: `apihubProjectsLocationsRuntimeProjectAttachmentsList(request: Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse, Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `orderBy` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse` | `googleCloudApihubV1ListRuntimeProjectAttachmentsResponseSchema` | `src/models/google-cloud-apihub-v1-list-runtime-project-attachments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsSearchResources

- **Signature**: `apihubProjectsLocationsSearchResources(request: Projects.ApihubProjectsLocationsSearchResourcesRequest, options?: RequestOptions): ApiPromise<GoogleCloudApihubV1SearchResourcesResponse, Projects.ApihubProjectsLocationsSearchResourcesError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}:searchResources`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApihubV1SearchResourcesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsSearchResourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsSearchResourcesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApihubV1SearchResourcesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1SearchResourcesRequest` | `googleCloudApihubV1SearchResourcesRequestSchema` | `src/models/google-cloud-apihub-v1-search-resources-request.ts` |
| `GoogleCloudApihubV1SearchResourcesResponse` | `googleCloudApihubV1SearchResourcesResponseSchema` | `src/models/google-cloud-apihub-v1-search-resources-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apihubProjectsLocationsServersConfigureAndDeployServer

- **Signature**: `apihubProjectsLocationsServersConfigureAndDeployServer(request: Projects.ApihubProjectsLocationsServersConfigureAndDeployServerRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsServersConfigureAndDeployServerError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/servers:configureAndDeployServer`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Projects.ApihubProjectsLocationsServersConfigureAndDeployServerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ApihubProjectsLocationsServersConfigureAndDeployServerRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApihubV1ConfigureAndDeployServerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApihubV1ConfigureAndDeployServerRequest` | `googleCloudApihubV1ConfigureAndDeployServerRequestSchema` | `src/models/google-cloud-apihub-v1-configure-and-deploy-server-request.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

