<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudDatastreamClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 32 operations · Request and error types: namespace `GoogleCloudDatastreamClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-datastream`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### datastreamProjectsLocationsConnectionProfilesCreate

- **Signature**: `datastreamProjectsLocationsConnectionProfilesCreate(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionProfileId` | `query` | `string` | no |
| `force` | `query` | `boolean` | no |
| `requestId` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `ConnectionProfile` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionProfile` | `connectionProfileSchema` | `src/models/connection-profile.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsConnectionProfilesDelete

- **Signature**: `datastreamProjectsLocationsConnectionProfilesDelete(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionProfilesId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsConnectionProfilesDiscover

- **Signature**: `datastreamProjectsLocationsConnectionProfilesDiscover(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverRequest, options?: RequestOptions): ApiPromise<DiscoverConnectionProfileResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles:discover`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DiscoverConnectionProfileResponse`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `DiscoverConnectionProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiscoverConnectionProfileRequest` | `discoverConnectionProfileRequestSchema` | `src/models/discover-connection-profile-request.ts` |
| `DiscoverConnectionProfileResponse` | `discoverConnectionProfileResponseSchema` | `src/models/discover-connection-profile-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsConnectionProfilesGet

- **Signature**: `datastreamProjectsLocationsConnectionProfilesGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetRequest, options?: RequestOptions): ApiPromise<ConnectionProfile, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectionProfile`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionProfilesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionProfile` | `connectionProfileSchema` | `src/models/connection-profile.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsConnectionProfilesList

- **Signature**: `datastreamProjectsLocationsConnectionProfilesList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListRequest, options?: RequestOptions): ApiPromise<ListConnectionProfilesResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConnectionProfilesResponse`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListRequest` (6):

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
| `ListConnectionProfilesResponse` | `listConnectionProfilesResponseSchema` | `src/models/list-connection-profiles-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsConnectionProfilesPatch

- **Signature**: `datastreamProjectsLocationsConnectionProfilesPatch(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionProfilesId` | `path` | `string` | yes |
| `force` | `query` | `boolean` | no |
| `requestId` | `query` | `string` | no |
| `updateMask` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `ConnectionProfile` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionProfile` | `connectionProfileSchema` | `src/models/connection-profile.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsFetchStaticIps

- **Signature**: `datastreamProjectsLocationsFetchStaticIps(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsRequest, options?: RequestOptions): ApiPromise<FetchStaticIpsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}:fetchStaticIps`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FetchStaticIpsResponse`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FetchStaticIpsResponse` | `fetchStaticIpsResponseSchema` | `src/models/fetch-static-ips-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsGet

- **Signature**: `datastreamProjectsLocationsGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise<Location, GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Location`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Location` | `locationSchema` | `src/models/location.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsList

- **Signature**: `datastreamProjectsLocationsList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsListRequest, options?: RequestOptions): ApiPromise<ListLocationsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLocationsResponse`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `extraLocationTypes` | `query` | `string[]` | no |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListLocationsResponse` | `listLocationsResponseSchema` | `src/models/list-locations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsOperationsCancel

- **Signature**: `datastreamProjectsLocationsOperationsCancel(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsOperationsDelete

- **Signature**: `datastreamProjectsLocationsOperationsDelete(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsOperationsGet

- **Signature**: `datastreamProjectsLocationsOperationsGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Operation`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsOperationsList

- **Signature**: `datastreamProjectsLocationsOperationsList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListRequest, options?: RequestOptions): ApiPromise<ListOperationsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListOperationsResponse`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListRequest` (6):

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
| `ListOperationsResponse` | `listOperationsResponseSchema` | `src/models/list-operations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsPrivateConnectionsCreate

- **Signature**: `datastreamProjectsLocationsPrivateConnectionsCreate(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/privateConnections`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `force` | `query` | `boolean` | no |
| `privateConnectionId` | `query` | `string` | no |
| `requestId` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `PrivateConnection` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PrivateConnection` | `privateConnectionSchema` | `src/models/private-connection.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsPrivateConnectionsDelete

- **Signature**: `datastreamProjectsLocationsPrivateConnectionsDelete(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `privateConnectionsId` | `path` | `string` | yes |
| `force` | `query` | `boolean` | no |
| `requestId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsPrivateConnectionsGet

- **Signature**: `datastreamProjectsLocationsPrivateConnectionsGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetRequest, options?: RequestOptions): ApiPromise<PrivateConnection, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PrivateConnection`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `privateConnectionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PrivateConnection` | `privateConnectionSchema` | `src/models/private-connection.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsPrivateConnectionsList

- **Signature**: `datastreamProjectsLocationsPrivateConnectionsList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListRequest, options?: RequestOptions): ApiPromise<ListPrivateConnectionsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/privateConnections`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPrivateConnectionsResponse`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListRequest` (6):

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
| `ListPrivateConnectionsResponse` | `listPrivateConnectionsResponseSchema` | `src/models/list-private-connections-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsPrivateConnectionsRoutesCreate

- **Signature**: `datastreamProjectsLocationsPrivateConnectionsRoutesCreate(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `privateConnectionsId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |
| `routeId` | `query` | `string` | no |
| `body` | `body` | `Route` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Route` | `routeSchema` | `src/models/route.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsPrivateConnectionsRoutesDelete

- **Signature**: `datastreamProjectsLocationsPrivateConnectionsRoutesDelete(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes/{routesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `privateConnectionsId` | `path` | `string` | yes |
| `routesId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsPrivateConnectionsRoutesGet

- **Signature**: `datastreamProjectsLocationsPrivateConnectionsRoutesGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest, options?: RequestOptions): ApiPromise<Route, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes/{routesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Route`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `privateConnectionsId` | `path` | `string` | yes |
| `routesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Route` | `routeSchema` | `src/models/route.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsPrivateConnectionsRoutesList

- **Signature**: `datastreamProjectsLocationsPrivateConnectionsRoutesList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest, options?: RequestOptions): ApiPromise<ListRoutesResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRoutesResponse`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `privateConnectionsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `orderBy` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRoutesResponse` | `listRoutesResponseSchema` | `src/models/list-routes-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsStreamsCreate

- **Signature**: `datastreamProjectsLocationsStreamsCreate(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/streams`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `force` | `query` | `boolean` | no |
| `requestId` | `query` | `string` | no |
| `streamId` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `Stream` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Stream` | `streamSchema` | `src/models/stream.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsStreamsDelete

- **Signature**: `datastreamProjectsLocationsStreamsDelete(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `streamsId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsStreamsGet

- **Signature**: `datastreamProjectsLocationsStreamsGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetRequest, options?: RequestOptions): ApiPromise<Stream, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Stream`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `streamsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Stream` | `streamSchema` | `src/models/stream.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsStreamsList

- **Signature**: `datastreamProjectsLocationsStreamsList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListRequest, options?: RequestOptions): ApiPromise<ListStreamsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/streams`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListStreamsResponse`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListRequest` (6):

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
| `ListStreamsResponse` | `listStreamsResponseSchema` | `src/models/list-streams-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsStreamsObjectsGet

- **Signature**: `datastreamProjectsLocationsStreamsObjectsGet(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetRequest, options?: RequestOptions): ApiPromise<StreamObject, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StreamObject`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `streamsId` | `path` | `string` | yes |
| `objectsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StreamObject` | `streamObjectSchema` | `src/models/stream-object.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsStreamsObjectsList

- **Signature**: `datastreamProjectsLocationsStreamsObjectsList(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListRequest, options?: RequestOptions): ApiPromise<ListStreamObjectsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListStreamObjectsResponse`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `streamsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListStreamObjectsResponse` | `listStreamObjectsResponseSchema` | `src/models/list-stream-objects-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsStreamsObjectsLookup

- **Signature**: `datastreamProjectsLocationsStreamsObjectsLookup(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupRequest, options?: RequestOptions): ApiPromise<StreamObject, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects:lookup`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StreamObject`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `streamsId` | `path` | `string` | yes |
| `body` | `body` | `LookupStreamObjectRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LookupStreamObjectRequest` | `lookupStreamObjectRequestSchema` | `src/models/lookup-stream-object-request.ts` |
| `StreamObject` | `streamObjectSchema` | `src/models/stream-object.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsStreamsObjectsStartBackfillJob

- **Signature**: `datastreamProjectsLocationsStreamsObjectsStartBackfillJob(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest, options?: RequestOptions): ApiPromise<StartBackfillJobResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}:startBackfillJob`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartBackfillJobResponse`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `streamsId` | `path` | `string` | yes |
| `objectsId` | `path` | `string` | yes |
| `body` | `body` | `StartBackfillJobRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartBackfillJobRequest` | `startBackfillJobRequestSchema` | `src/models/start-backfill-job-request.ts` |
| `StartBackfillJobResponse` | `startBackfillJobResponseSchema` | `src/models/start-backfill-job-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsStreamsObjectsStopBackfillJob

- **Signature**: `datastreamProjectsLocationsStreamsObjectsStopBackfillJob(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest, options?: RequestOptions): ApiPromise<StopBackfillJobResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}:stopBackfillJob`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StopBackfillJobResponse`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `streamsId` | `path` | `string` | yes |
| `objectsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StopBackfillJobResponse` | `stopBackfillJobResponseSchema` | `src/models/stop-backfill-job-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsStreamsPatch

- **Signature**: `datastreamProjectsLocationsStreamsPatch(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `streamsId` | `path` | `string` | yes |
| `force` | `query` | `boolean` | no |
| `requestId` | `query` | `string` | no |
| `updateMask` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `Stream` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Stream` | `streamSchema` | `src/models/stream.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### datastreamProjectsLocationsStreamsRun

- **Signature**: `datastreamProjectsLocationsStreamsRun(request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}:run`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDatastreamError` with `kind: "api"`, an instance of `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `streamsId` | `path` | `string` | yes |
| `body` | `body` | `RunStreamRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunStreamRequest` | `runStreamRequestSchema` | `src/models/run-stream-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

