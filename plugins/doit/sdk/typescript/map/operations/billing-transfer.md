<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillingTransfer — operations

Accessor: `client.billingTransfer` · Source: `src/resources/billing-transfer.ts` · 8 operations · Request and error types: namespace `BillingTransfer`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBillingTransferEndCustomerMappings

- **Signature**: `createBillingTransferEndCustomerMappings(request: BillingTransfer.CreateBillingTransferEndCustomerMappingsRequest, options?: RequestOptions): ApiPromise<EndCustomerMappingBatchResult, BillingTransfer.CreateBillingTransferEndCustomerMappingsError>`
- **Wire**: `POST /billingtransfer/v1/end-customer-mappings`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EndCustomerMappingBatchResult`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BillingTransfer.CreateBillingTransferEndCustomerMappingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"billingTransferProblemDetails"` [403] `BillingTransferProblemDetails` · `"billingTransferProblemDetails2"` [422] `BillingTransferProblemDetails` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillingTransfer.CreateBillingTransferEndCustomerMappingsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |
| `body` | `body` | — | `EndCustomerMappingBatchCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EndCustomerMappingBatchCreate` | `endCustomerMappingBatchCreateSchema` | `src/models/end-customer-mapping-batch-create.ts` |
| `EndCustomerMappingBatchResult` | `endCustomerMappingBatchResultSchema` | `src/models/end-customer-mapping-batch-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `BillingTransferProblemDetails` | `billingTransferProblemDetailsSchema` | `src/models/billing-transfer-problem-details.ts` |

### createBillingTransferResellerHandshakes

- **Signature**: `createBillingTransferResellerHandshakes(request: BillingTransfer.CreateBillingTransferResellerHandshakesRequest, options?: RequestOptions): ApiPromise<ResellerHandshakeBatchResult, BillingTransfer.CreateBillingTransferResellerHandshakesError>`
- **Wire**: `POST /billingtransfer/v1/resellerhandshakes`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ResellerHandshakeBatchResult`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BillingTransfer.CreateBillingTransferResellerHandshakesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"billingTransferProblemDetails"` [403] `BillingTransferProblemDetails` · `"billingTransferProblemDetails2"` [422] `BillingTransferProblemDetails` · `"error3"` [500] `Error` · `"billingTransferProblemDetails3"` [502] `BillingTransferProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillingTransfer.CreateBillingTransferResellerHandshakesRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `dryRun` | `query` | — | `boolean` | no | `false` |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes | — |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |
| `body` | `body` | — | `ResellerHandshakeBatchCreate` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResellerHandshakeBatchCreate` | `resellerHandshakeBatchCreateSchema` | `src/models/reseller-handshake-batch-create.ts` |
| `ResellerHandshakeBatchResult` | `resellerHandshakeBatchResultSchema` | `src/models/reseller-handshake-batch-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `BillingTransferProblemDetails` | `billingTransferProblemDetailsSchema` | `src/models/billing-transfer-problem-details.ts` |

### getBillingTransferProgramManagementAccountsStatus

- **Signature**: `getBillingTransferProgramManagementAccountsStatus(request?: BillingTransfer.GetBillingTransferProgramManagementAccountsStatusRequest, options?: RequestOptions): ApiPromise<ProgramManagementAccountsStatusResponse, BillingTransfer.GetBillingTransferProgramManagementAccountsStatusError>`
- **Wire**: `GET /billingtransfer/v1/programmanagementaccounts/status`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProgramManagementAccountsStatusResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BillingTransfer.GetBillingTransferProgramManagementAccountsStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillingTransfer.GetBillingTransferProgramManagementAccountsStatusRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProgramManagementAccountsStatusResponse` | `programManagementAccountsStatusResponseSchema` | `src/models/program-management-accounts-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listBillingTransferEndCustomers

- **Signature**: `listBillingTransferEndCustomers(request: BillingTransfer.ListBillingTransferEndCustomersRequest, options?: RequestOptions): ApiPromise<ListEndCustomersResponse, BillingTransfer.ListBillingTransferEndCustomersError>`
- **Wire**: `GET /billingtransfer/v1/end-customers`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEndCustomersResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BillingTransfer.ListBillingTransferEndCustomersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"billingTransferProblemDetails"` [403] `BillingTransferProblemDetails` · `"billingTransferProblemDetails2"` [404] `BillingTransferProblemDetails` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillingTransfer.ListBillingTransferEndCustomersRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `dpmaId` | `query` | — | `string` | yes | — |
| `resellerPmaAccountId` | `query` | — | `string` | yes | — |
| `includeRevoked` | `query` | — | `boolean` | no | `false` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEndCustomersResponse` | `listEndCustomersResponseSchema` | `src/models/list-end-customers-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `BillingTransferProblemDetails` | `billingTransferProblemDetailsSchema` | `src/models/billing-transfer-problem-details.ts` |

### listBillingTransferEndCustomersByReseller

- **Signature**: `listBillingTransferEndCustomersByReseller(request: BillingTransfer.ListBillingTransferEndCustomersByResellerRequest, options?: RequestOptions): ApiPromise<ListEndCustomersResponse, BillingTransfer.ListBillingTransferEndCustomersByResellerError>`
- **Wire**: `GET /billingtransfer/v1/resellers/{resellerPmaAccountId}/end-customers`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEndCustomersResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BillingTransfer.ListBillingTransferEndCustomersByResellerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"billingTransferProblemDetails"` [403] `BillingTransferProblemDetails` · `"billingTransferProblemDetails2"` [404] `BillingTransferProblemDetails` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillingTransfer.ListBillingTransferEndCustomersByResellerRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `resellerPmaAccountId` | `path` | — | `string` | yes | — |
| `includeRevoked` | `query` | — | `boolean` | no | `false` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEndCustomersResponse` | `listEndCustomersResponseSchema` | `src/models/list-end-customers-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `BillingTransferProblemDetails` | `billingTransferProblemDetailsSchema` | `src/models/billing-transfer-problem-details.ts` |

### listBillingTransferProgramManagementAccounts

- **Signature**: `listBillingTransferProgramManagementAccounts(request?: BillingTransfer.ListBillingTransferProgramManagementAccountsRequest, options?: RequestOptions): ApiPromise<ProgramManagementAccountList, BillingTransfer.ListBillingTransferProgramManagementAccountsError>`
- **Wire**: `GET /billingtransfer/v1/programmanagementaccounts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProgramManagementAccountList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BillingTransfer.ListBillingTransferProgramManagementAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillingTransfer.ListBillingTransferProgramManagementAccountsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `maxResults` | `query` | — | `number` | no | `50` |
| `pageToken` | `query` | — | `string` | no | — |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProgramManagementAccountList` | `programManagementAccountListSchema` | `src/models/program-management-account-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listBillingTransferResellerAccounts

- **Signature**: `listBillingTransferResellerAccounts(request?: BillingTransfer.ListBillingTransferResellerAccountsRequest, options?: RequestOptions): ApiPromise<ListResellerAccountsResponse, BillingTransfer.ListBillingTransferResellerAccountsError>`
- **Wire**: `GET /billingtransfer/v1/reseller-accounts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResellerAccountsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BillingTransfer.ListBillingTransferResellerAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"billingTransferProblemDetails"` [403] `BillingTransferProblemDetails` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillingTransfer.ListBillingTransferResellerAccountsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResellerAccountsResponse` | `listResellerAccountsResponseSchema` | `src/models/list-reseller-accounts-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `BillingTransferProblemDetails` | `billingTransferProblemDetailsSchema` | `src/models/billing-transfer-problem-details.ts` |

### listBillingTransferResellerAccountsWithTenants

- **Signature**: `listBillingTransferResellerAccountsWithTenants(request?: BillingTransfer.ListBillingTransferResellerAccountsWithTenantsRequest, options?: RequestOptions): ApiPromise<ListResellerAccountsWithTenantsResponse, BillingTransfer.ListBillingTransferResellerAccountsWithTenantsError>`
- **Wire**: `GET /billingtransfer/v1/reseller-accounts/end-customers`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResellerAccountsWithTenantsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BillingTransfer.ListBillingTransferResellerAccountsWithTenantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"billingTransferProblemDetails"` [403] `BillingTransferProblemDetails` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillingTransfer.ListBillingTransferResellerAccountsWithTenantsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `includeRevoked` | `query` | — | `boolean` | no | `false` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResellerAccountsWithTenantsResponse` | `listResellerAccountsWithTenantsResponseSchema` | `src/models/list-reseller-accounts-with-tenants-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `BillingTransferProblemDetails` | `billingTransferProblemDetailsSchema` | `src/models/billing-transfer-problem-details.ts` |

