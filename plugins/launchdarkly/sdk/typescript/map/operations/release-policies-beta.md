<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReleasePoliciesBeta — operations

Accessor: `client.releasePoliciesBeta` · Source: `src/resources/release-policies-beta.ts` · 6 operations · Request and error types: namespace `ReleasePoliciesBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteReleasePolicy

- **Signature**: `deleteReleasePolicy(request: ReleasePoliciesBeta.DeleteReleasePolicyRequest, options?: RequestOptions): ApiPromise<undefined, ReleasePoliciesBeta.DeleteReleasePolicyError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/release-policies/{policyKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasePoliciesBeta.DeleteReleasePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasePoliciesBeta.DeleteReleasePolicyRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `policyKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getReleasePolicies

- **Signature**: `getReleasePolicies(request: ReleasePoliciesBeta.GetReleasePoliciesRequest, options?: RequestOptions): ApiPromise<ReleasePoliciesResponse, ReleasePoliciesBeta.GetReleasePoliciesError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/release-policies`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReleasePoliciesResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasePoliciesBeta.GetReleasePoliciesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasePoliciesBeta.GetReleasePoliciesRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes | — |
| `excludeDefault` | `query` | — | `boolean` | no | `false` |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `ReleasePoliciesResponse` | `releasePoliciesResponseSchema` | `src/models/release-policies-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getReleasePolicy

- **Signature**: `getReleasePolicy(request: ReleasePoliciesBeta.GetReleasePolicyRequest, options?: RequestOptions): ApiPromise<ReleasePolicy, ReleasePoliciesBeta.GetReleasePolicyError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/release-policies/{policyKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReleasePolicy`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasePoliciesBeta.GetReleasePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasePoliciesBeta.GetReleasePolicyRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `policyKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `ReleasePolicy` | `releasePolicySchema` | `src/models/release-policy.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### postReleasePoliciesOrder

- **Signature**: `postReleasePoliciesOrder(request: ReleasePoliciesBeta.PostReleasePoliciesOrderRequest, options?: RequestOptions): ApiPromise<ReleasePolicy[], ReleasePoliciesBeta.PostReleasePoliciesOrderError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/release-policies/order`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReleasePolicy[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasePoliciesBeta.PostReleasePoliciesOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasePoliciesBeta.PostReleasePoliciesOrderRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |
| `body` | `body` | — | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `ReleasePolicy` | `releasePolicySchema` | `src/models/release-policy.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### postReleasePolicy

- **Signature**: `postReleasePolicy(request: ReleasePoliciesBeta.PostReleasePolicyRequestParams, options?: RequestOptions): ApiPromise<ReleasePolicy, ReleasePoliciesBeta.PostReleasePolicyError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/release-policies`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReleasePolicy`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasePoliciesBeta.PostReleasePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasePoliciesBeta.PostReleasePolicyRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |
| `body` | `body` | — | `PostReleasePolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `PostReleasePolicyRequest` | `postReleasePolicyRequestSchema` | `src/models/post-release-policy-request.ts` |
| `ReleasePolicy` | `releasePolicySchema` | `src/models/release-policy.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### putReleasePolicy

- **Signature**: `putReleasePolicy(request: ReleasePoliciesBeta.PutReleasePolicyRequestParams, options?: RequestOptions): ApiPromise<ReleasePolicy, ReleasePoliciesBeta.PutReleasePolicyError>`
- **Wire**: `PUT /api/v2/projects/{projectKey}/release-policies/{policyKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReleasePolicy`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasePoliciesBeta.PutReleasePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasePoliciesBeta.PutReleasePolicyRequestParams` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `policyKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |
| `body` | `body` | — | `PutReleasePolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `PutReleasePolicyRequest` | `putReleasePolicyRequestSchema` | `src/models/put-release-policy-request.ts` |
| `ReleasePolicy` | `releasePolicySchema` | `src/models/release-policy.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

