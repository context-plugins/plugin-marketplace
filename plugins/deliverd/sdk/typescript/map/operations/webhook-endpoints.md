<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhookEndpoints — operations

Accessor: `client.webhookEndpoints` · Source: `src/resources/webhook-endpoints.ts` · 6 operations · Request and error types: namespace `WebhookEndpoints`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1WebhookEndpointsById

- **Signature**: `deleteApiV1WebhookEndpointsById(request: WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdRequest, options?: RequestOptions): ApiPromise<undefined, WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdError>`
- **Wire**: `DELETE /api/v1/webhook-endpoints/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1WebhookEndpoints403Error1"` [403] `ApiV1WebhookEndpoints403Error1` · `"apiV1WebhookEndpoints404Error1"` [404] `ApiV1WebhookEndpoints404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WebhookEndpoints403Error1` | `apiV1WebhookEndpoints403Error1Schema` | `src/models/api-v1-webhook-endpoints403-error1.ts` |
| `ApiV1WebhookEndpoints404Error1` | `apiV1WebhookEndpoints404Error1Schema` | `src/models/api-v1-webhook-endpoints404-error1.ts` |

### getApiV1WebhookEndpoints

- **Signature**: `getApiV1WebhookEndpoints(request?: WebhookEndpoints.GetApiV1WebhookEndpointsRequest, options?: RequestOptions): ApiPromise<ApiV1WebhookEndpointsResponse, WebhookEndpoints.GetApiV1WebhookEndpointsError>`
- **Wire**: `GET /api/v1/webhook-endpoints`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1WebhookEndpointsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `WebhookEndpoints.GetApiV1WebhookEndpointsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1WebhookEndpoints403Error1"` [403] `ApiV1WebhookEndpoints403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookEndpoints.GetApiV1WebhookEndpointsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WebhookEndpointsResponse` | `apiV1WebhookEndpointsResponseSchema` | `src/models/api-v1-webhook-endpoints-response.ts` |
| `ApiV1WebhookEndpoints403Error1` | `apiV1WebhookEndpoints403Error1Schema` | `src/models/api-v1-webhook-endpoints403-error1.ts` |

### getApiV1WebhookEndpointsById

- **Signature**: `getApiV1WebhookEndpointsById(request: WebhookEndpoints.GetApiV1WebhookEndpointsByIdRequest, options?: RequestOptions): ApiPromise<ApiV1WebhookEndpointsResponse2, WebhookEndpoints.GetApiV1WebhookEndpointsByIdError>`
- **Wire**: `GET /api/v1/webhook-endpoints/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1WebhookEndpointsResponse2`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `WebhookEndpoints.GetApiV1WebhookEndpointsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1WebhookEndpoints403Error1"` [403] `ApiV1WebhookEndpoints403Error1` · `"apiV1WebhookEndpoints404Error1"` [404] `ApiV1WebhookEndpoints404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookEndpoints.GetApiV1WebhookEndpointsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WebhookEndpointsResponse2` | `apiV1WebhookEndpointsResponse2Schema` | `src/models/api-v1-webhook-endpoints-response2.ts` |
| `ApiV1WebhookEndpoints403Error1` | `apiV1WebhookEndpoints403Error1Schema` | `src/models/api-v1-webhook-endpoints403-error1.ts` |
| `ApiV1WebhookEndpoints404Error1` | `apiV1WebhookEndpoints404Error1Schema` | `src/models/api-v1-webhook-endpoints404-error1.ts` |

### patchApiV1WebhookEndpointsById

- **Signature**: `patchApiV1WebhookEndpointsById(request: WebhookEndpoints.PatchApiV1WebhookEndpointsByIdRequest, options?: RequestOptions): ApiPromise<ApiV1WebhookEndpointsResponse2, WebhookEndpoints.PatchApiV1WebhookEndpointsByIdError>`
- **Wire**: `PATCH /api/v1/webhook-endpoints/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1WebhookEndpointsResponse2`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `WebhookEndpoints.PatchApiV1WebhookEndpointsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1WebhookEndpoints400Error1"` [400] `ApiV1WebhookEndpoints400Error1` · `"apiV1WebhookEndpoints403Error1"` [403] `ApiV1WebhookEndpoints403Error1` · `"apiV1WebhookEndpoints404Error1"` [404] `ApiV1WebhookEndpoints404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookEndpoints.PatchApiV1WebhookEndpointsByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1WebhookEndpointsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WebhookEndpointsRequest1` | `apiV1WebhookEndpointsRequest1Schema` | `src/models/api-v1-webhook-endpoints-request1.ts` |
| `ApiV1WebhookEndpointsResponse2` | `apiV1WebhookEndpointsResponse2Schema` | `src/models/api-v1-webhook-endpoints-response2.ts` |
| `ApiV1WebhookEndpoints400Error1` | `apiV1WebhookEndpoints400Error1Schema` | `src/models/api-v1-webhook-endpoints400-error1.ts` |
| `ApiV1WebhookEndpoints403Error1` | `apiV1WebhookEndpoints403Error1Schema` | `src/models/api-v1-webhook-endpoints403-error1.ts` |
| `ApiV1WebhookEndpoints404Error1` | `apiV1WebhookEndpoints404Error1Schema` | `src/models/api-v1-webhook-endpoints404-error1.ts` |

### postApiV1WebhookEndpoints

- **Signature**: `postApiV1WebhookEndpoints(request?: WebhookEndpoints.PostApiV1WebhookEndpointsRequest, options?: RequestOptions): ApiPromise<ApiV1WebhookEndpointsResponse1, WebhookEndpoints.PostApiV1WebhookEndpointsError>`
- **Wire**: `POST /api/v1/webhook-endpoints`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1WebhookEndpointsResponse1`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `WebhookEndpoints.PostApiV1WebhookEndpointsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1WebhookEndpoints400Error1"` [400] `ApiV1WebhookEndpoints400Error1` · `"apiV1WebhookEndpoints403Error1"` [403] `ApiV1WebhookEndpoints403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookEndpoints.PostApiV1WebhookEndpointsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1WebhookEndpointsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WebhookEndpointsRequest` | `apiV1WebhookEndpointsRequestSchema` | `src/models/api-v1-webhook-endpoints-request.ts` |
| `ApiV1WebhookEndpointsResponse1` | `apiV1WebhookEndpointsResponse1Schema` | `src/models/api-v1-webhook-endpoints-response1.ts` |
| `ApiV1WebhookEndpoints400Error1` | `apiV1WebhookEndpoints400Error1Schema` | `src/models/api-v1-webhook-endpoints400-error1.ts` |
| `ApiV1WebhookEndpoints403Error1` | `apiV1WebhookEndpoints403Error1Schema` | `src/models/api-v1-webhook-endpoints403-error1.ts` |

### postApiV1WebhookEndpointsByIdTest

- **Signature**: `postApiV1WebhookEndpointsByIdTest(request: WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestRequest, options?: RequestOptions): ApiPromise<ApiV1WebhookEndpointsTestResponse, WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestError>`
- **Wire**: `POST /api/v1/webhook-endpoints/{id}/test`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1WebhookEndpointsTestResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1WebhookEndpointsTest400Error1"` [400] `ApiV1WebhookEndpointsTest400Error1` · `"apiV1WebhookEndpointsTest403Error1"` [403] `ApiV1WebhookEndpointsTest403Error1` · `"apiV1WebhookEndpointsTest404Error1"` [404] `ApiV1WebhookEndpointsTest404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1WebhookEndpointsTestRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WebhookEndpointsTestRequest` | `apiV1WebhookEndpointsTestRequestSchema` | `src/models/api-v1-webhook-endpoints-test-request.ts` |
| `ApiV1WebhookEndpointsTestResponse` | `apiV1WebhookEndpointsTestResponseSchema` | `src/models/api-v1-webhook-endpoints-test-response.ts` |
| `ApiV1WebhookEndpointsTest400Error1` | `apiV1WebhookEndpointsTest400Error1Schema` | `src/models/api-v1-webhook-endpoints-test400-error1.ts` |
| `ApiV1WebhookEndpointsTest403Error1` | `apiV1WebhookEndpointsTest403Error1Schema` | `src/models/api-v1-webhook-endpoints-test403-error1.ts` |
| `ApiV1WebhookEndpointsTest404Error1` | `apiV1WebhookEndpointsTest404Error1Schema` | `src/models/api-v1-webhook-endpoints-test404-error1.ts` |

