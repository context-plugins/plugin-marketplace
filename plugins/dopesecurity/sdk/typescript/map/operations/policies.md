<!-- Generated file — do not edit; regenerated with the SDK. -->

# Policies — operations

Accessor: `client.policies` · Source: `src/resources/policies.ts` · 16 operations · Request and error types: namespace `Policies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dope-security`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPolicy

- **Signature**: `createPolicy(request: Policies.CreatePolicyRequest, options?: RequestOptions): ApiPromise<SuccessMessage, Policies.CreatePolicyError>`
- **Wire**: `POST /policies/{policy_name}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.CreatePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.CreatePolicyRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### deleteCustomApplicationBypass

- **Signature**: `deleteCustomApplicationBypass(request: Policies.DeleteCustomApplicationBypassRequest, options?: RequestOptions): ApiPromise<SuccessMessage, Policies.DeleteCustomApplicationBypassError>`
- **Wire**: `DELETE /policies/{policy_name}/bypass/applications`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.DeleteCustomApplicationBypassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.DeleteCustomApplicationBypassRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |
| `body` | `body` | — | `PoliciesBypassApplicationsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PoliciesBypassApplicationsRequest1` | `policiesBypassApplicationsRequest1Schema` | `src/models/policies-bypass-applications-request1.ts` |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### deleteCustomUrlBypass

- **Signature**: `deleteCustomUrlBypass(request: Policies.DeleteCustomUrlBypassRequest, options?: RequestOptions): ApiPromise<SuccessMessage, Policies.DeleteCustomUrlBypassError>`
- **Wire**: `DELETE /policies/{policy_name}/bypass/urls`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.DeleteCustomUrlBypassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.DeleteCustomUrlBypassRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |
| `body` | `body` | — | `PoliciesBypassUrlsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PoliciesBypassUrlsRequest1` | `policiesBypassUrlsRequest1Schema` | `src/models/policies-bypass-urls-request1.ts` |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### deletePolicy

- **Signature**: `deletePolicy(request: Policies.DeletePolicyRequest, options?: RequestOptions): ApiPromise<SuccessMessage, Policies.DeletePolicyError>`
- **Wire**: `DELETE /policies/{policy_name}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.DeletePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.DeletePolicyRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### getApplicationBypass

- **Signature**: `getApplicationBypass(request: Policies.GetApplicationBypassRequest, options?: RequestOptions): ApiPromise<PoliciesBypassApplicationsResponse, Policies.GetApplicationBypassError>`
- **Wire**: `GET /policies/{policy_name}/bypass/applications`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PoliciesBypassApplicationsResponse`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.GetApplicationBypassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.GetApplicationBypassRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PoliciesBypassApplicationsResponse` | `policiesBypassApplicationsResponseSchema` | `src/models/policies-bypass-applications-response.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### getPolicyAssignments

- **Signature**: `getPolicyAssignments(request: Policies.GetPolicyAssignmentsRequest, options?: RequestOptions): ApiPromise<PoliciesAssignmentsResponse, Policies.GetPolicyAssignmentsError>`
- **Wire**: `GET /policies/{policy_name}/assignments`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PoliciesAssignmentsResponse`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.GetPolicyAssignmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.GetPolicyAssignmentsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PoliciesAssignmentsResponse` | `policiesAssignmentsResponseSchema` | `src/models/policies-assignments-response.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### getPolicyContent

- **Signature**: `getPolicyContent(request: Policies.GetPolicyContentRequest, options?: RequestOptions): ApiPromise<PolicyContentResponse, Policies.GetPolicyContentError>`
- **Wire**: `GET /policies/{policy_name}/content`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PolicyContentResponse`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.GetPolicyContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.GetPolicyContentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PolicyContentResponse` | `policyContentResponseSchema` | `src/models/policy-content-response.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### getSslInspection

- **Signature**: `getSslInspection(request: Policies.GetSslInspectionRequest, options?: RequestOptions): ApiPromise<PoliciesSslInspectionResponse, Policies.GetSslInspectionError>`
- **Wire**: `GET /policies/{policy_name}/ssl-inspection`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PoliciesSslInspectionResponse`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.GetSslInspectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.GetSslInspectionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PoliciesSslInspectionResponse` | `policiesSslInspectionResponseSchema` | `src/models/policies-ssl-inspection-response.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### getUrlBypass

- **Signature**: `getUrlBypass(request: Policies.GetUrlBypassRequest, options?: RequestOptions): ApiPromise<PoliciesBypassUrlsResponse, Policies.GetUrlBypassError>`
- **Wire**: `GET /policies/{policy_name}/bypass/urls`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PoliciesBypassUrlsResponse`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.GetUrlBypassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.GetUrlBypassRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PoliciesBypassUrlsResponse` | `policiesBypassUrlsResponseSchema` | `src/models/policies-bypass-urls-response.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### listPolicies

- **Signature**: `listPolicies(request?: Policies.ListPoliciesRequest, options?: RequestOptions): ApiPromise<PoliciesResponse, Policies.ListPoliciesError>`
- **Wire**: `GET /policies`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PoliciesResponse`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.ListPoliciesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.ListPoliciesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `first` | `query` | `number` | no | `50` |
| `after` | `query` | `string` | no | — |
| `order` | `query` | `Order` | no | `Order.Asc` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `PoliciesResponse` | `policiesResponseSchema` | `src/models/policies-response.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### updatePolicyAssignments

- **Signature**: `updatePolicyAssignments(request: Policies.UpdatePolicyAssignmentsRequest, options?: RequestOptions): ApiPromise<SuccessMessage, Policies.UpdatePolicyAssignmentsError>`
- **Wire**: `PUT /policies/{policy_name}/assignments`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.UpdatePolicyAssignmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.UpdatePolicyAssignmentsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |
| `body` | `body` | — | `PoliciesAssignmentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PoliciesAssignmentsRequest` | `policiesAssignmentsRequestSchema` | `src/models/policies-assignments-request.ts` |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### updatePolicyExceptions

- **Signature**: `updatePolicyExceptions(request: Policies.UpdatePolicyExceptionsRequest, options?: RequestOptions): ApiPromise<SuccessMessage, Policies.UpdatePolicyExceptionsError>`
- **Wire**: `PUT /policies/{policy_name}/content/exceptions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.UpdatePolicyExceptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.UpdatePolicyExceptionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |
| `body` | `body` | — | `PolicyContentExceptionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PolicyContentExceptionsRequest` | `policyContentExceptionsRequestSchema` | `src/models/policy-content-exceptions-request.ts` |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### updatePolicyRestrictions

- **Signature**: `updatePolicyRestrictions(request: Policies.UpdatePolicyRestrictionsRequest, options?: RequestOptions): ApiPromise<SuccessMessage, Policies.UpdatePolicyRestrictionsError>`
- **Wire**: `PUT /policies/{policy_name}/content/restrictions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.UpdatePolicyRestrictionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.UpdatePolicyRestrictionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |
| `body` | `body` | — | `PolicyContentRestrictionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PolicyContentRestrictionsRequest` | `policyContentRestrictionsRequestSchema` | `src/models/policy-content-restrictions-request.ts` |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### updateSslInspection

- **Signature**: `updateSslInspection(request: Policies.UpdateSslInspectionRequest, options?: RequestOptions): ApiPromise<SuccessMessage, Policies.UpdateSslInspectionError>`
- **Wire**: `PUT /policies/{policy_name}/ssl-inspection`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.UpdateSslInspectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.UpdateSslInspectionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |
| `body` | `body` | — | `PoliciesSslInspectionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PoliciesSslInspectionRequest` | `policiesSslInspectionRequestSchema` | `src/models/policies-ssl-inspection-request.ts` |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### upsertApplicationBypass

- **Signature**: `upsertApplicationBypass(request: Policies.UpsertApplicationBypassRequest, options?: RequestOptions): ApiPromise<SuccessMessage, Policies.UpsertApplicationBypassError>`
- **Wire**: `PUT /policies/{policy_name}/bypass/applications`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.UpsertApplicationBypassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [401] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.UpsertApplicationBypassRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |
| `body` | `body` | — | `PoliciesBypassApplicationsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PoliciesBypassApplicationsRequest` | `policiesBypassApplicationsRequestSchema` | `src/models/policies-bypass-applications-request.ts` |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### upsertUrlBypass

- **Signature**: `upsertUrlBypass(request: Policies.UpsertUrlBypassRequest, options?: RequestOptions): ApiPromise<SuccessMessage, Policies.UpsertUrlBypassError>`
- **Wire**: `PUT /policies/{policy_name}/bypass/urls`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Policies.UpsertUrlBypassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [401] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policies.UpsertUrlBypassRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyName` | `path` | `policy_name` | `string` | yes |
| `body` | `body` | — | `PoliciesBypassUrlsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PoliciesBypassUrlsRequest` | `policiesBypassUrlsRequestSchema` | `src/models/policies-bypass-urls-request.ts` |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

