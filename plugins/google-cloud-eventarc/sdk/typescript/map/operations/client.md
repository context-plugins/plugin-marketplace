<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudEventarcClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 66 operations · Request and error types: namespace `GoogleCloudEventarcClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-eventarc`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### eventarcProjectsLocationsChannelConnectionsCreate

- **Signature**: `eventarcProjectsLocationsChannelConnectionsCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/channelConnections`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `channelConnectionId` | `query` | `string` | no |
| `body` | `body` | `ChannelConnection` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelConnection` | `channelConnectionSchema` | `src/models/channel-connection.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelConnectionsDelete

- **Signature**: `eventarcProjectsLocationsChannelConnectionsDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `channelConnectionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelConnectionsGet

- **Signature**: `eventarcProjectsLocationsChannelConnectionsGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetRequest, options?: RequestOptions): ApiPromise<ChannelConnection, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChannelConnection`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `channelConnectionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelConnection` | `channelConnectionSchema` | `src/models/channel-connection.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelConnectionsGetIamPolicy

- **Signature**: `eventarcProjectsLocationsChannelConnectionsGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `channelConnectionsId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelConnectionsList

- **Signature**: `eventarcProjectsLocationsChannelConnectionsList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListRequest, options?: RequestOptions): ApiPromise<ListChannelConnectionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/channelConnections`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListChannelConnectionsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListChannelConnectionsResponse` | `listChannelConnectionsResponseSchema` | `src/models/list-channel-connections-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelConnectionsSetIamPolicy

- **Signature**: `eventarcProjectsLocationsChannelConnectionsSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `channelConnectionsId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelConnectionsTestIamPermissions

- **Signature**: `eventarcProjectsLocationsChannelConnectionsTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `channelConnectionsId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelsCreate

- **Signature**: `eventarcProjectsLocationsChannelsCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/channels`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `channelId` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `Channel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelsDelete

- **Signature**: `eventarcProjectsLocationsChannelsDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `channelsId` | `path` | `string` | yes |
| `validateOnly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelsGet

- **Signature**: `eventarcProjectsLocationsChannelsGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetRequest, options?: RequestOptions): ApiPromise<Channel, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Channel`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `channelsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelsGetIamPolicy

- **Signature**: `eventarcProjectsLocationsChannelsGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `channelsId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelsList

- **Signature**: `eventarcProjectsLocationsChannelsList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListRequest, options?: RequestOptions): ApiPromise<ListChannelsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/channels`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListChannelsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `orderBy` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListChannelsResponse` | `listChannelsResponseSchema` | `src/models/list-channels-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelsPatch

- **Signature**: `eventarcProjectsLocationsChannelsPatch(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `channelsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `Channel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelsSetIamPolicy

- **Signature**: `eventarcProjectsLocationsChannelsSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `channelsId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsChannelsTestIamPermissions

- **Signature**: `eventarcProjectsLocationsChannelsTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `channelsId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsEnrollmentsCreate

- **Signature**: `eventarcProjectsLocationsEnrollmentsCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/enrollments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `enrollmentId` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `Enrollment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Enrollment` | `enrollmentSchema` | `src/models/enrollment.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsEnrollmentsDelete

- **Signature**: `eventarcProjectsLocationsEnrollmentsDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `enrollmentsId` | `path` | `string` | yes |
| `allowMissing` | `query` | `boolean` | no |
| `etag` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsEnrollmentsGet

- **Signature**: `eventarcProjectsLocationsEnrollmentsGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetRequest, options?: RequestOptions): ApiPromise<Enrollment, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Enrollment`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `enrollmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Enrollment` | `enrollmentSchema` | `src/models/enrollment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsEnrollmentsGetIamPolicy

- **Signature**: `eventarcProjectsLocationsEnrollmentsGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `enrollmentsId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsEnrollmentsList

- **Signature**: `eventarcProjectsLocationsEnrollmentsList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListRequest, options?: RequestOptions): ApiPromise<ListEnrollmentsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/enrollments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEnrollmentsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListRequest` (6):

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
| `ListEnrollmentsResponse` | `listEnrollmentsResponseSchema` | `src/models/list-enrollments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsEnrollmentsPatch

- **Signature**: `eventarcProjectsLocationsEnrollmentsPatch(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `enrollmentsId` | `path` | `string` | yes |
| `allowMissing` | `query` | `boolean` | no |
| `updateMask` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `Enrollment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Enrollment` | `enrollmentSchema` | `src/models/enrollment.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsEnrollmentsSetIamPolicy

- **Signature**: `eventarcProjectsLocationsEnrollmentsSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `enrollmentsId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsEnrollmentsTestIamPermissions

- **Signature**: `eventarcProjectsLocationsEnrollmentsTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `enrollmentsId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsGet

- **Signature**: `eventarcProjectsLocationsGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise<Location, GoogleCloudEventarcClient.EventarcProjectsLocationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Location`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Location` | `locationSchema` | `src/models/location.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsGetGoogleChannelConfig

- **Signature**: `eventarcProjectsLocationsGetGoogleChannelConfig(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigRequest, options?: RequestOptions): ApiPromise<GoogleChannelConfig, GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/googleChannelConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleChannelConfig`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleChannelConfig` | `googleChannelConfigSchema` | `src/models/google-channel-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsGoogleApiSourcesCreate

- **Signature**: `eventarcProjectsLocationsGoogleApiSourcesCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `googleApiSourceId` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `GoogleApiSource` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiSource` | `googleApiSourceSchema` | `src/models/google-api-source.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsGoogleApiSourcesDelete

- **Signature**: `eventarcProjectsLocationsGoogleApiSourcesDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `googleApiSourcesId` | `path` | `string` | yes |
| `allowMissing` | `query` | `boolean` | no |
| `etag` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsGoogleApiSourcesGet

- **Signature**: `eventarcProjectsLocationsGoogleApiSourcesGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetRequest, options?: RequestOptions): ApiPromise<GoogleApiSource, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleApiSource`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `googleApiSourcesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiSource` | `googleApiSourceSchema` | `src/models/google-api-source.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsGoogleApiSourcesGetIamPolicy

- **Signature**: `eventarcProjectsLocationsGoogleApiSourcesGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `googleApiSourcesId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsGoogleApiSourcesList

- **Signature**: `eventarcProjectsLocationsGoogleApiSourcesList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListRequest, options?: RequestOptions): ApiPromise<ListGoogleApiSourcesResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListGoogleApiSourcesResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListRequest` (6):

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
| `ListGoogleApiSourcesResponse` | `listGoogleApiSourcesResponseSchema` | `src/models/list-google-api-sources-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsGoogleApiSourcesPatch

- **Signature**: `eventarcProjectsLocationsGoogleApiSourcesPatch(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `googleApiSourcesId` | `path` | `string` | yes |
| `allowMissing` | `query` | `boolean` | no |
| `updateMask` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `GoogleApiSource` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiSource` | `googleApiSourceSchema` | `src/models/google-api-source.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsGoogleApiSourcesSetIamPolicy

- **Signature**: `eventarcProjectsLocationsGoogleApiSourcesSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `googleApiSourcesId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsGoogleApiSourcesTestIamPermissions

- **Signature**: `eventarcProjectsLocationsGoogleApiSourcesTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `googleApiSourcesId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsList

- **Signature**: `eventarcProjectsLocationsList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsListRequest, options?: RequestOptions): ApiPromise<ListLocationsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLocationsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsListRequest` (5):

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

### eventarcProjectsLocationsMessageBusesCreate

- **Signature**: `eventarcProjectsLocationsMessageBusesCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/messageBuses`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `messageBusId` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `MessageBus` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageBus` | `messageBusSchema` | `src/models/message-bus.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsMessageBusesDelete

- **Signature**: `eventarcProjectsLocationsMessageBusesDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `messageBusesId` | `path` | `string` | yes |
| `allowMissing` | `query` | `boolean` | no |
| `etag` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsMessageBusesGet

- **Signature**: `eventarcProjectsLocationsMessageBusesGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetRequest, options?: RequestOptions): ApiPromise<MessageBus, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessageBus`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `messageBusesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageBus` | `messageBusSchema` | `src/models/message-bus.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsMessageBusesGetIamPolicy

- **Signature**: `eventarcProjectsLocationsMessageBusesGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `messageBusesId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsMessageBusesList

- **Signature**: `eventarcProjectsLocationsMessageBusesList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListRequest, options?: RequestOptions): ApiPromise<ListMessageBusesResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/messageBuses`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMessageBusesResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListRequest` (6):

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
| `ListMessageBusesResponse` | `listMessageBusesResponseSchema` | `src/models/list-message-buses-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsMessageBusesListEnrollments

- **Signature**: `eventarcProjectsLocationsMessageBusesListEnrollments(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsRequest, options?: RequestOptions): ApiPromise<ListMessageBusEnrollmentsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:listEnrollments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMessageBusEnrollmentsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `messageBusesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMessageBusEnrollmentsResponse` | `listMessageBusEnrollmentsResponseSchema` | `src/models/list-message-bus-enrollments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsMessageBusesPatch

- **Signature**: `eventarcProjectsLocationsMessageBusesPatch(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `messageBusesId` | `path` | `string` | yes |
| `allowMissing` | `query` | `boolean` | no |
| `updateMask` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `MessageBus` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageBus` | `messageBusSchema` | `src/models/message-bus.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsMessageBusesSetIamPolicy

- **Signature**: `eventarcProjectsLocationsMessageBusesSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `messageBusesId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsMessageBusesTestIamPermissions

- **Signature**: `eventarcProjectsLocationsMessageBusesTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `messageBusesId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsOperationsCancel

- **Signature**: `eventarcProjectsLocationsOperationsCancel(request: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsOperationsDelete

- **Signature**: `eventarcProjectsLocationsOperationsDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsOperationsGet

- **Signature**: `eventarcProjectsLocationsOperationsGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsOperationsList

- **Signature**: `eventarcProjectsLocationsOperationsList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningListOperationsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleLongrunningListOperationsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListRequest` (6):

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

### eventarcProjectsLocationsPipelinesCreate

- **Signature**: `eventarcProjectsLocationsPipelinesCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/pipelines`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pipelineId` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `Pipeline` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsPipelinesDelete

- **Signature**: `eventarcProjectsLocationsPipelinesDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pipelinesId` | `path` | `string` | yes |
| `allowMissing` | `query` | `boolean` | no |
| `etag` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsPipelinesGet

- **Signature**: `eventarcProjectsLocationsPipelinesGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetRequest, options?: RequestOptions): ApiPromise<Pipeline, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Pipeline`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pipelinesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsPipelinesGetIamPolicy

- **Signature**: `eventarcProjectsLocationsPipelinesGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `pipelinesId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsPipelinesList

- **Signature**: `eventarcProjectsLocationsPipelinesList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListRequest, options?: RequestOptions): ApiPromise<ListPipelinesResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/pipelines`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPipelinesResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListRequest` (6):

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
| `ListPipelinesResponse` | `listPipelinesResponseSchema` | `src/models/list-pipelines-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsPipelinesPatch

- **Signature**: `eventarcProjectsLocationsPipelinesPatch(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pipelinesId` | `path` | `string` | yes |
| `allowMissing` | `query` | `boolean` | no |
| `updateMask` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `Pipeline` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsPipelinesSetIamPolicy

- **Signature**: `eventarcProjectsLocationsPipelinesSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pipelinesId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsPipelinesTestIamPermissions

- **Signature**: `eventarcProjectsLocationsPipelinesTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pipelinesId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsProvidersGet

- **Signature**: `eventarcProjectsLocationsProvidersGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetRequest, options?: RequestOptions): ApiPromise<Provider, GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/providers/{providersId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Provider`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `providersId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Provider` | `providerSchema` | `src/models/provider.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsProvidersList

- **Signature**: `eventarcProjectsLocationsProvidersList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListRequest, options?: RequestOptions): ApiPromise<ListProvidersResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/providers`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListProvidersResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListRequest` (6):

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
| `ListProvidersResponse` | `listProvidersResponseSchema` | `src/models/list-providers-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsTriggersCreate

- **Signature**: `eventarcProjectsLocationsTriggersCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/triggers`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `triggerId` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `Trigger` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Trigger` | `triggerSchema` | `src/models/trigger.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsTriggersDelete

- **Signature**: `eventarcProjectsLocationsTriggersDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `triggersId` | `path` | `string` | yes |
| `allowMissing` | `query` | `boolean` | no |
| `etag` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsTriggersGet

- **Signature**: `eventarcProjectsLocationsTriggersGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetRequest, options?: RequestOptions): ApiPromise<Trigger, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Trigger`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `triggersId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Trigger` | `triggerSchema` | `src/models/trigger.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsTriggersGetIamPolicy

- **Signature**: `eventarcProjectsLocationsTriggersGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `triggersId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsTriggersList

- **Signature**: `eventarcProjectsLocationsTriggersList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListRequest, options?: RequestOptions): ApiPromise<ListTriggersResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/triggers`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTriggersResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListRequest` (6):

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
| `ListTriggersResponse` | `listTriggersResponseSchema` | `src/models/list-triggers-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsTriggersPatch

- **Signature**: `eventarcProjectsLocationsTriggersPatch(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `triggersId` | `path` | `string` | yes |
| `allowMissing` | `query` | `boolean` | no |
| `updateMask` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |
| `body` | `body` | `Trigger` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Trigger` | `triggerSchema` | `src/models/trigger.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsTriggersSetIamPolicy

- **Signature**: `eventarcProjectsLocationsTriggersSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `triggersId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsTriggersTestIamPermissions

- **Signature**: `eventarcProjectsLocationsTriggersTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `triggersId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### eventarcProjectsLocationsUpdateGoogleChannelConfig

- **Signature**: `eventarcProjectsLocationsUpdateGoogleChannelConfig(request: GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigRequest, options?: RequestOptions): ApiPromise<GoogleChannelConfig, GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/googleChannelConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleChannelConfig`
- **Error**: `GoogleCloudEventarcError` with `kind: "api"`, an instance of `GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleChannelConfig` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleChannelConfig` | `googleChannelConfigSchema` | `src/models/google-channel-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

