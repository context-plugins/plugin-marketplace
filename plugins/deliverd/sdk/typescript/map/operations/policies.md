<!-- Generated file — do not edit; regenerated with the SDK. -->

# Policies — operations

Accessor: `client.policies` · Source: `src/resources/policies.ts` · 7 operations · Request and error types: namespace `Policies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Policies

- **Signature**: `getApiV1Policies(request?: Policies.GetApiV1PoliciesRequest, options?: RequestOptions): ApiPromise<ApiV1PoliciesResponse1, ApiError>`
- **Wire**: `GET /api/v1/policies`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PoliciesResponse1`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Policies.GetApiV1PoliciesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PoliciesResponse1` | `apiV1PoliciesResponse1Schema` | `src/models/api-v1-policies-response1.ts` |

### postApiV1Policies

- **Signature**: `postApiV1Policies(request?: Policies.PostApiV1PoliciesRequest, options?: RequestOptions): ApiPromise<ApiV1PoliciesResponse, Policies.PostApiV1PoliciesError>`
- **Wire**: `POST /api/v1/policies`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PoliciesResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Policies.PostApiV1PoliciesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Policies400Error1"` [400] `ApiV1Policies400Error1` · `"apiV1Policies403Error1"` [403] `ApiV1Policies403Error1` · `"apiV1Policies409Error1"` [409] `ApiV1Policies409Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.PostApiV1PoliciesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1PoliciesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PoliciesRequest` | `apiV1PoliciesRequestSchema` | `src/models/api-v1-policies-request.ts` |
| `ApiV1PoliciesResponse` | `apiV1PoliciesResponseSchema` | `src/models/api-v1-policies-response.ts` |
| `ApiV1Policies400Error1` | `apiV1Policies400Error1Schema` | `src/models/api-v1-policies400-error1.ts` |
| `ApiV1Policies403Error1` | `apiV1Policies403Error1Schema` | `src/models/api-v1-policies403-error1.ts` |
| `ApiV1Policies409Error1` | `apiV1Policies409Error1Schema` | `src/models/api-v1-policies409-error1.ts` |

### postApiV1PoliciesByIdActivate

- **Signature**: `postApiV1PoliciesByIdActivate(request: Policies.PostApiV1PoliciesByIdActivateRequest, options?: RequestOptions): ApiPromise<ApiV1PoliciesActivateResponse, Policies.PostApiV1PoliciesByIdActivateError>`
- **Wire**: `POST /api/v1/policies/{id}/activate`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PoliciesActivateResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Policies.PostApiV1PoliciesByIdActivateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PoliciesActivate403Error1"` [403] `ApiV1PoliciesActivate403Error1` · `"apiV1PoliciesActivate404Error1"` [404] `ApiV1PoliciesActivate404Error1` · `"apiV1PoliciesActivate409Error1"` [409] `ApiV1PoliciesActivate409Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.PostApiV1PoliciesByIdActivateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1PoliciesActivateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PoliciesActivateRequest` | `apiV1PoliciesActivateRequestSchema` | `src/models/api-v1-policies-activate-request.ts` |
| `ApiV1PoliciesActivateResponse` | `apiV1PoliciesActivateResponseSchema` | `src/models/api-v1-policies-activate-response.ts` |
| `ApiV1PoliciesActivate403Error1` | `apiV1PoliciesActivate403Error1Schema` | `src/models/api-v1-policies-activate403-error1.ts` |
| `ApiV1PoliciesActivate404Error1` | `apiV1PoliciesActivate404Error1Schema` | `src/models/api-v1-policies-activate404-error1.ts` |
| `ApiV1PoliciesActivate409Error1` | `apiV1PoliciesActivate409Error1Schema` | `src/models/api-v1-policies-activate409-error1.ts` |

### postApiV1PoliciesByIdVersions

- **Signature**: `postApiV1PoliciesByIdVersions(request: Policies.PostApiV1PoliciesByIdVersionsRequest, options?: RequestOptions): ApiPromise<ApiV1PoliciesVersionsResponse, Policies.PostApiV1PoliciesByIdVersionsError>`
- **Wire**: `POST /api/v1/policies/{id}/versions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PoliciesVersionsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Policies.PostApiV1PoliciesByIdVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PoliciesVersions400Error1"` [400] `ApiV1PoliciesVersions400Error1` · `"apiV1PoliciesVersions403Error1"` [403] `ApiV1PoliciesVersions403Error1` · `"apiV1PoliciesVersions404Error1"` [404] `ApiV1PoliciesVersions404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.PostApiV1PoliciesByIdVersionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1PoliciesVersionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PoliciesVersionsRequest` | `apiV1PoliciesVersionsRequestSchema` | `src/models/api-v1-policies-versions-request.ts` |
| `ApiV1PoliciesVersionsResponse` | `apiV1PoliciesVersionsResponseSchema` | `src/models/api-v1-policies-versions-response.ts` |
| `ApiV1PoliciesVersions400Error1` | `apiV1PoliciesVersions400Error1Schema` | `src/models/api-v1-policies-versions400-error1.ts` |
| `ApiV1PoliciesVersions403Error1` | `apiV1PoliciesVersions403Error1Schema` | `src/models/api-v1-policies-versions403-error1.ts` |
| `ApiV1PoliciesVersions404Error1` | `apiV1PoliciesVersions404Error1Schema` | `src/models/api-v1-policies-versions404-error1.ts` |

### postApiV1PoliciesReplay

- **Signature**: `postApiV1PoliciesReplay(request?: Policies.PostApiV1PoliciesReplayRequest, options?: RequestOptions): ApiPromise<ApiV1PoliciesReplayResponse, ApiError>`
- **Wire**: `POST /api/v1/policies/replay`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PoliciesReplayResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Policies.PostApiV1PoliciesReplayRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1PoliciesReplayRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PoliciesReplayRequest` | `apiV1PoliciesReplayRequestSchema` | `src/models/api-v1-policies-replay-request.ts` |
| `ApiV1PoliciesReplayResponse` | `apiV1PoliciesReplayResponseSchema` | `src/models/api-v1-policies-replay-response.ts` |

### postApiV1PoliciesSimulate

- **Signature**: `postApiV1PoliciesSimulate(request?: Policies.PostApiV1PoliciesSimulateRequest, options?: RequestOptions): ApiPromise<ApiV1PoliciesSimulateResponse, ApiError>`
- **Wire**: `POST /api/v1/policies/simulate`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PoliciesSimulateResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Policies.PostApiV1PoliciesSimulateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1PoliciesSimulateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PoliciesSimulateRequest` | `apiV1PoliciesSimulateRequestSchema` | `src/models/api-v1-policies-simulate-request.ts` |
| `ApiV1PoliciesSimulateResponse` | `apiV1PoliciesSimulateResponseSchema` | `src/models/api-v1-policies-simulate-response.ts` |

### postApiV1PoliciesTest

- **Signature**: `postApiV1PoliciesTest(request?: Policies.PostApiV1PoliciesTestRequest, options?: RequestOptions): ApiPromise<ApiV1PoliciesTestResponse, ApiError>`
- **Wire**: `POST /api/v1/policies/test`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PoliciesTestResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Policies.PostApiV1PoliciesTestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1PoliciesTestRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PoliciesTestRequest` | `apiV1PoliciesTestRequestSchema` | `src/models/api-v1-policies-test-request.ts` |
| `ApiV1PoliciesTestResponse` | `apiV1PoliciesTestResponseSchema` | `src/models/api-v1-policies-test-response.ts` |

