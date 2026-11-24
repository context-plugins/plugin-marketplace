<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerStakeholders — operations

Accessor: `client.partnerStakeholders` · Source: `src/resources/partner-stakeholders.ts` · 3 operations · Request and error types: namespace `PartnerStakeholders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createStakeholder2

- **Signature**: `createStakeholder2(request: PartnerStakeholders.CreateStakeholder2Request, options?: RequestOptions): ApiPromise<StakeholderRazorpayPartnerStakeholdersApi, PartnerStakeholders.CreateStakeholder2Error>`
- **Wire**: `POST /v2/accounts/{account_id}/stakeholders`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StakeholderRazorpayPartnerStakeholdersApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerStakeholders.CreateStakeholder2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerStakeholders.CreateStakeholder2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `body` | `body` | — | `V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi` | `v2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiSchema` | `src/models/v2-accounts-stakeholders-request-razorpay-partner-stakeholders-api.ts` |
| `StakeholderRazorpayPartnerStakeholdersApi` | `stakeholderRazorpayPartnerStakeholdersApiSchema` | `src/models/stakeholder-razorpay-partner-stakeholders-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchAllStakeholders

- **Signature**: `fetchAllStakeholders(request: PartnerStakeholders.FetchAllStakeholdersRequest, options?: RequestOptions): ApiPromise<V2AccountsStakeholdersResponse, PartnerStakeholders.FetchAllStakeholdersError>`
- **Wire**: `GET /v2/accounts/{account_id}/stakeholders`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2AccountsStakeholdersResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerStakeholders.FetchAllStakeholdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerStakeholders.FetchAllStakeholdersRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsStakeholdersResponse` | `v2AccountsStakeholdersResponseSchema` | `src/models/v2-accounts-stakeholders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateStakeholder2

- **Signature**: `updateStakeholder2(request: PartnerStakeholders.UpdateStakeholder2Request, options?: RequestOptions): ApiPromise<StakeholderRazorpayPartnerStakeholdersApi, PartnerStakeholders.UpdateStakeholder2Error>`
- **Wire**: `PATCH /v2/accounts/{account_id}/stakeholders/{stakeholder_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StakeholderRazorpayPartnerStakeholdersApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerStakeholders.UpdateStakeholder2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerStakeholders.UpdateStakeholder2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `stakeholderId` | `path` | `stakeholder_id` | `string` | yes |
| `body` | `body` | — | `V2AccountsStakeholdersRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsStakeholdersRequest1` | `v2AccountsStakeholdersRequest1Schema` | `src/models/v2-accounts-stakeholders-request1.ts` |
| `StakeholderRazorpayPartnerStakeholdersApi` | `stakeholderRazorpayPartnerStakeholdersApiSchema` | `src/models/stakeholder-razorpay-partner-stakeholders-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

