<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudApiGatewayClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 30 operations · Request and error types: namespace `GoogleCloudApiGatewayClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-api-gateway`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### apigatewayProjectsLocationsApisConfigsCreate

- **Signature**: `apigatewayProjectsLocationsApisConfigsCreate(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateRequest, options?: RequestOptions): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayOperation`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `apiConfigId` | `query` | `string` | no |
| `body` | `body` | `ApigatewayApiConfig` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayApiConfig` | `apigatewayApiConfigSchema` | `src/models/apigateway-api-config.ts` |
| `ApigatewayOperation` | `apigatewayOperationSchema` | `src/models/apigateway-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisConfigsDelete

- **Signature**: `apigatewayProjectsLocationsApisConfigsDelete(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteRequest, options?: RequestOptions): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayOperation`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `configsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayOperation` | `apigatewayOperationSchema` | `src/models/apigateway-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisConfigsGet

- **Signature**: `apigatewayProjectsLocationsApisConfigsGet(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetRequest, options?: RequestOptions): ApiPromise<ApigatewayApiConfig, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayApiConfig`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `configsId` | `path` | `string` | yes |
| `view` | `query` | `View` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `View` | `viewSchema` | `src/models/view.ts` |
| `ApigatewayApiConfig` | `apigatewayApiConfigSchema` | `src/models/apigateway-api-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisConfigsGetIamPolicy

- **Signature**: `apigatewayProjectsLocationsApisConfigsGetIamPolicy(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest, options?: RequestOptions): ApiPromise<ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayPolicy`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `apisId` | `path` | — | `string` | yes |
| `configsId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayPolicy` | `apigatewayPolicySchema` | `src/models/apigateway-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisConfigsList

- **Signature**: `apigatewayProjectsLocationsApisConfigsList(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListRequest, options?: RequestOptions): ApiPromise<ApigatewayListApiConfigsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayListApiConfigsResponse`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `orderBy` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayListApiConfigsResponse` | `apigatewayListApiConfigsResponseSchema` | `src/models/apigateway-list-api-configs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisConfigsPatch

- **Signature**: `apigatewayProjectsLocationsApisConfigsPatch(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchRequest, options?: RequestOptions): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayOperation`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `configsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `ApigatewayApiConfig` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayApiConfig` | `apigatewayApiConfigSchema` | `src/models/apigateway-api-config.ts` |
| `ApigatewayOperation` | `apigatewayOperationSchema` | `src/models/apigateway-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisConfigsSetIamPolicy

- **Signature**: `apigatewayProjectsLocationsApisConfigsSetIamPolicy(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest, options?: RequestOptions): ApiPromise<ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayPolicy`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `configsId` | `path` | `string` | yes |
| `body` | `body` | `ApigatewaySetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewaySetIamPolicyRequest` | `apigatewaySetIamPolicyRequestSchema` | `src/models/apigateway-set-iam-policy-request.ts` |
| `ApigatewayPolicy` | `apigatewayPolicySchema` | `src/models/apigateway-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisConfigsTestIamPermissions

- **Signature**: `apigatewayProjectsLocationsApisConfigsTestIamPermissions(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<ApigatewayTestIamPermissionsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayTestIamPermissionsResponse`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `configsId` | `path` | `string` | yes |
| `body` | `body` | `ApigatewayTestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayTestIamPermissionsRequest` | `apigatewayTestIamPermissionsRequestSchema` | `src/models/apigateway-test-iam-permissions-request.ts` |
| `ApigatewayTestIamPermissionsResponse` | `apigatewayTestIamPermissionsResponseSchema` | `src/models/apigateway-test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisCreate

- **Signature**: `apigatewayProjectsLocationsApisCreate(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateRequest, options?: RequestOptions): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayOperation`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apiId` | `query` | `string` | no |
| `body` | `body` | `ApigatewayApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayApi` | `apigatewayApiSchema` | `src/models/apigateway-api.ts` |
| `ApigatewayOperation` | `apigatewayOperationSchema` | `src/models/apigateway-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisDelete

- **Signature**: `apigatewayProjectsLocationsApisDelete(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteRequest, options?: RequestOptions): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayOperation`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayOperation` | `apigatewayOperationSchema` | `src/models/apigateway-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisGet

- **Signature**: `apigatewayProjectsLocationsApisGet(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetRequest, options?: RequestOptions): ApiPromise<ApigatewayApi, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayApi`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayApi` | `apigatewayApiSchema` | `src/models/apigateway-api.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisGetIamPolicy

- **Signature**: `apigatewayProjectsLocationsApisGetIamPolicy(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyRequest, options?: RequestOptions): ApiPromise<ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayPolicy`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `apisId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayPolicy` | `apigatewayPolicySchema` | `src/models/apigateway-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisList

- **Signature**: `apigatewayProjectsLocationsApisList(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListRequest, options?: RequestOptions): ApiPromise<ApigatewayListApisResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayListApisResponse`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListRequest` (6):

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
| `ApigatewayListApisResponse` | `apigatewayListApisResponseSchema` | `src/models/apigateway-list-apis-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisPatch

- **Signature**: `apigatewayProjectsLocationsApisPatch(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchRequest, options?: RequestOptions): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayOperation`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `ApigatewayApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayApi` | `apigatewayApiSchema` | `src/models/apigateway-api.ts` |
| `ApigatewayOperation` | `apigatewayOperationSchema` | `src/models/apigateway-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisSetIamPolicy

- **Signature**: `apigatewayProjectsLocationsApisSetIamPolicy(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyRequest, options?: RequestOptions): ApiPromise<ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayPolicy`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `body` | `body` | `ApigatewaySetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewaySetIamPolicyRequest` | `apigatewaySetIamPolicyRequestSchema` | `src/models/apigateway-set-iam-policy-request.ts` |
| `ApigatewayPolicy` | `apigatewayPolicySchema` | `src/models/apigateway-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsApisTestIamPermissions

- **Signature**: `apigatewayProjectsLocationsApisTestIamPermissions(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<ApigatewayTestIamPermissionsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayTestIamPermissionsResponse`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `body` | `body` | `ApigatewayTestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayTestIamPermissionsRequest` | `apigatewayTestIamPermissionsRequestSchema` | `src/models/apigateway-test-iam-permissions-request.ts` |
| `ApigatewayTestIamPermissionsResponse` | `apigatewayTestIamPermissionsResponseSchema` | `src/models/apigateway-test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsGatewaysCreate

- **Signature**: `apigatewayProjectsLocationsGatewaysCreate(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateRequest, options?: RequestOptions): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/gateways`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayOperation`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `gatewayId` | `query` | `string` | no |
| `body` | `body` | `ApigatewayGateway` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayGateway` | `apigatewayGatewaySchema` | `src/models/apigateway-gateway.ts` |
| `ApigatewayOperation` | `apigatewayOperationSchema` | `src/models/apigateway-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsGatewaysDelete

- **Signature**: `apigatewayProjectsLocationsGatewaysDelete(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteRequest, options?: RequestOptions): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayOperation`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `gatewaysId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayOperation` | `apigatewayOperationSchema` | `src/models/apigateway-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsGatewaysGet

- **Signature**: `apigatewayProjectsLocationsGatewaysGet(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetRequest, options?: RequestOptions): ApiPromise<ApigatewayGateway, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayGateway`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `gatewaysId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayGateway` | `apigatewayGatewaySchema` | `src/models/apigateway-gateway.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsGatewaysGetIamPolicy

- **Signature**: `apigatewayProjectsLocationsGatewaysGetIamPolicy(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest, options?: RequestOptions): ApiPromise<ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayPolicy`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `gatewaysId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayPolicy` | `apigatewayPolicySchema` | `src/models/apigateway-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsGatewaysList

- **Signature**: `apigatewayProjectsLocationsGatewaysList(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListRequest, options?: RequestOptions): ApiPromise<ApigatewayListGatewaysResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/gateways`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayListGatewaysResponse`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListRequest` (6):

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
| `ApigatewayListGatewaysResponse` | `apigatewayListGatewaysResponseSchema` | `src/models/apigateway-list-gateways-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsGatewaysPatch

- **Signature**: `apigatewayProjectsLocationsGatewaysPatch(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchRequest, options?: RequestOptions): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayOperation`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `gatewaysId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `ApigatewayGateway` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayGateway` | `apigatewayGatewaySchema` | `src/models/apigateway-gateway.ts` |
| `ApigatewayOperation` | `apigatewayOperationSchema` | `src/models/apigateway-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsGatewaysSetIamPolicy

- **Signature**: `apigatewayProjectsLocationsGatewaysSetIamPolicy(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest, options?: RequestOptions): ApiPromise<ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayPolicy`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `gatewaysId` | `path` | `string` | yes |
| `body` | `body` | `ApigatewaySetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewaySetIamPolicyRequest` | `apigatewaySetIamPolicyRequestSchema` | `src/models/apigateway-set-iam-policy-request.ts` |
| `ApigatewayPolicy` | `apigatewayPolicySchema` | `src/models/apigateway-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsGatewaysTestIamPermissions

- **Signature**: `apigatewayProjectsLocationsGatewaysTestIamPermissions(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<ApigatewayTestIamPermissionsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApigatewayTestIamPermissionsResponse`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `gatewaysId` | `path` | `string` | yes |
| `body` | `body` | `ApigatewayTestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayTestIamPermissionsRequest` | `apigatewayTestIamPermissionsRequestSchema` | `src/models/apigateway-test-iam-permissions-request.ts` |
| `ApigatewayTestIamPermissionsResponse` | `apigatewayTestIamPermissionsResponseSchema` | `src/models/apigateway-test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsGet

- **Signature**: `apigatewayProjectsLocationsGet(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise<ApigatewayLocation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayLocation`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayLocation` | `apigatewayLocationSchema` | `src/models/apigateway-location.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsList

- **Signature**: `apigatewayProjectsLocationsList(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListRequest, options?: RequestOptions): ApiPromise<ApigatewayListLocationsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayListLocationsResponse`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `extraLocationTypes` | `query` | `string[]` | no |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayListLocationsResponse` | `apigatewayListLocationsResponseSchema` | `src/models/apigateway-list-locations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsOperationsCancel

- **Signature**: `apigatewayProjectsLocationsOperationsCancel(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsOperationsDelete

- **Signature**: `apigatewayProjectsLocationsOperationsDelete(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsOperationsGet

- **Signature**: `apigatewayProjectsLocationsOperationsGet(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayOperation`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApigatewayOperation` | `apigatewayOperationSchema` | `src/models/apigateway-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigatewayProjectsLocationsOperationsList

- **Signature**: `apigatewayProjectsLocationsOperationsList(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListRequest, options?: RequestOptions): ApiPromise<ApigatewayListOperationsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApigatewayListOperationsResponse`
- **Error**: `GoogleCloudApiGatewayError` with `kind: "api"`, an instance of `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListRequest` (6):

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
| `ApigatewayListOperationsResponse` | `apigatewayListOperationsResponseSchema` | `src/models/apigateway-list-operations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

