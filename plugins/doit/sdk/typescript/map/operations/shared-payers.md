<!-- Generated file — do not edit; regenerated with the SDK. -->

# SharedPayers — operations

Accessor: `client.sharedPayers` · Source: `src/resources/shared-payers.ts` · 4 operations · Request and error types: namespace `SharedPayers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listSharedPayerAccountMappings

- **Signature**: `listSharedPayerAccountMappings(request: SharedPayers.ListSharedPayerAccountMappingsRequest, options?: RequestOptions): ApiPromise<SharedPayerAccountMappingList, SharedPayers.ListSharedPayerAccountMappingsError>`
- **Wire**: `GET /customers/v1/customers/{customerId}/shared-payer-accounts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SharedPayerAccountMappingList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SharedPayers.ListSharedPayerAccountMappingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SharedPayers.ListSharedPayerAccountMappingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `managementAccount` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SharedPayerAccountMappingList` | `sharedPayerAccountMappingListSchema` | `src/models/shared-payer-account-mapping-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listSharedPayerManagementAccounts

- **Signature**: `listSharedPayerManagementAccounts(request: SharedPayers.ListSharedPayerManagementAccountsRequest, options?: RequestOptions): ApiPromise<SharedPayerManagementAccountList, SharedPayers.ListSharedPayerManagementAccountsError>`
- **Wire**: `GET /customers/v1/customers/{customerId}/shared-payer-accounts/management-accounts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SharedPayerManagementAccountList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SharedPayers.ListSharedPayerManagementAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SharedPayers.ListSharedPayerManagementAccountsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SharedPayerManagementAccountList` | `sharedPayerManagementAccountListSchema` | `src/models/shared-payer-management-account-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listSharedPayers

- **Signature**: `listSharedPayers(request: SharedPayers.ListSharedPayersRequest, options?: RequestOptions): ApiPromise<SharedPayerList, SharedPayers.ListSharedPayersError>`
- **Wire**: `GET /customers/v1/customers/{customerId}/shared-payer-accounts/payers`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SharedPayerList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SharedPayers.ListSharedPayersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SharedPayers.ListSharedPayersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SharedPayerList` | `sharedPayerListSchema` | `src/models/shared-payer-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### reassignSharedPayerAccount

- **Signature**: `reassignSharedPayerAccount(request: SharedPayers.ReassignSharedPayerAccountRequest, options?: RequestOptions): ApiPromise<SharedPayerAccountReassignResult, SharedPayers.ReassignSharedPayerAccountError>`
- **Wire**: `PATCH /customers/v1/customers/{customerId}/shared-payer-accounts/{assetId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SharedPayerAccountReassignResult`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SharedPayers.ReassignSharedPayerAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SharedPayers.ReassignSharedPayerAccountRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `assetId` | `path` | `string` | yes |
| `body` | `body` | `SharedPayerAccountReassignRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SharedPayerAccountReassignRequest` | `sharedPayerAccountReassignRequestSchema` | `src/models/shared-payer-account-reassign-request.ts` |
| `SharedPayerAccountReassignResult` | `sharedPayerAccountReassignResultSchema` | `src/models/shared-payer-account-reassign-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

