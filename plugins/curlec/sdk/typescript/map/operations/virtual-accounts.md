<!-- Generated file — do not edit; regenerated with the SDK. -->

# VirtualAccounts — operations

Accessor: `client.virtualAccounts` · Source: `src/resources/virtual-accounts.ts` · 10 operations · Request and error types: namespace `VirtualAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addAllowedPayer

- **Signature**: `addAllowedPayer(request: VirtualAccounts.AddAllowedPayerRequest, options?: RequestOptions): ApiPromise<VirtualAccount, VirtualAccounts.AddAllowedPayerError>`
- **Wire**: `POST /virtual_accounts/{va_id}/allowed_payers`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VirtualAccount`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `VirtualAccounts.AddAllowedPayerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VirtualAccounts.AddAllowedPayerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vaId` | `path` | `va_id` | `string` | yes |
| `body` | `body` | — | `VirtualAccountsAllowedPayersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VirtualAccountsAllowedPayersRequest` | `virtualAccountsAllowedPayersRequestSchema` | `src/models/virtual-accounts-allowed-payers-request.ts` |
| `VirtualAccount` | `virtualAccountSchema` | `src/models/virtual-account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### addVpaReceiver

- **Signature**: `addVpaReceiver(request: VirtualAccounts.AddVpaReceiverRequest, options?: RequestOptions): ApiPromise<VirtualAccount, VirtualAccounts.AddVpaReceiverError>`
- **Wire**: `POST /virtual_accounts/{id}/receivers`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VirtualAccount`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `VirtualAccounts.AddVpaReceiverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VirtualAccounts.AddVpaReceiverRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `VirtualAccountsReceiversRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VirtualAccountsReceiversRequest` | `virtualAccountsReceiversRequestSchema` | `src/models/virtual-accounts-receivers-request.ts` |
| `VirtualAccount` | `virtualAccountSchema` | `src/models/virtual-account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### closeVirtualAccount

- **Signature**: `closeVirtualAccount(request: VirtualAccounts.CloseVirtualAccountRequest, options?: RequestOptions): ApiPromise<VirtualAccount, VirtualAccounts.CloseVirtualAccountError>`
- **Wire**: `POST /virtual_accounts/{id}/close`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VirtualAccount`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `VirtualAccounts.CloseVirtualAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VirtualAccounts.CloseVirtualAccountRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `VirtualAccountsCloseRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VirtualAccountsCloseRequest` | `virtualAccountsCloseRequestSchema` | `src/models/virtual-accounts-close-request.ts` |
| `VirtualAccount` | `virtualAccountSchema` | `src/models/virtual-account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createVirtualAccount

- **Signature**: `createVirtualAccount(request: VirtualAccounts.CreateVirtualAccountRequest, options?: RequestOptions): ApiPromise<VirtualAccount, VirtualAccounts.CreateVirtualAccountError>`
- **Wire**: `POST /virtual_accounts`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VirtualAccount`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `VirtualAccounts.CreateVirtualAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VirtualAccounts.CreateVirtualAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `VirtualAccountsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VirtualAccountsRequest` | `virtualAccountsRequestSchema` | `src/models/virtual-accounts-request.ts` |
| `VirtualAccount` | `virtualAccountSchema` | `src/models/virtual-account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteAllowedPayer

- **Signature**: `deleteAllowedPayer(request: VirtualAccounts.DeleteAllowedPayerRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, VirtualAccounts.DeleteAllowedPayerError>`
- **Wire**: `DELETE /virtual_accounts/{va_id}/allowed_payers/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CurlecError` with `kind: "api"`, an instance of `VirtualAccounts.DeleteAllowedPayerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VirtualAccounts.DeleteAllowedPayerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vaId` | `path` | `va_id` | `string` | yes |
| `id` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchBankTransfer

- **Signature**: `fetchBankTransfer(request: VirtualAccounts.FetchBankTransferRequest, options?: RequestOptions): ApiPromise<BankTransfer, VirtualAccounts.FetchBankTransferError>`
- **Wire**: `GET /payments/{id}/bank_transfer`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BankTransfer`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `VirtualAccounts.FetchBankTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VirtualAccounts.FetchBankTransferRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankTransfer` | `bankTransferSchema` | `src/models/bank-transfer.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchVirtualAccount

- **Signature**: `fetchVirtualAccount(request: VirtualAccounts.FetchVirtualAccountRequest, options?: RequestOptions): ApiPromise<VirtualAccount, VirtualAccounts.FetchVirtualAccountError>`
- **Wire**: `GET /virtual_accounts/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VirtualAccount`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `VirtualAccounts.FetchVirtualAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VirtualAccounts.FetchVirtualAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VirtualAccount` | `virtualAccountSchema` | `src/models/virtual-account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchVirtualAccountPayments

- **Signature**: `fetchVirtualAccountPayments(request: VirtualAccounts.FetchVirtualAccountPaymentsRequest, options?: RequestOptions): ApiPromise<VirtualAccountsPaymentsResponse, VirtualAccounts.FetchVirtualAccountPaymentsError>`
- **Wire**: `GET /virtual_accounts/{id}/payments`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VirtualAccountsPaymentsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `VirtualAccounts.FetchVirtualAccountPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VirtualAccounts.FetchVirtualAccountPaymentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VirtualAccountsPaymentsResponse` | `virtualAccountsPaymentsResponseSchema` | `src/models/virtual-accounts-payments-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listVirtualAccounts

- **Signature**: `listVirtualAccounts(request?: VirtualAccounts.ListVirtualAccountsRequest, options?: RequestOptions): ApiPromise<VirtualAccountsResponse, VirtualAccounts.ListVirtualAccountsError>`
- **Wire**: `GET /virtual_accounts`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VirtualAccountsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `VirtualAccounts.ListVirtualAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VirtualAccounts.ListVirtualAccountsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `from` | `query` | `number` | no | — |
| `to` | `query` | `number` | no | — |
| `count` | `query` | `number` | no | `10` |
| `skip` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `VirtualAccountsResponse` | `virtualAccountsResponseSchema` | `src/models/virtual-accounts-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateVirtualAccount

- **Signature**: `updateVirtualAccount(request: VirtualAccounts.UpdateVirtualAccountRequest, options?: RequestOptions): ApiPromise<VirtualAccount, VirtualAccounts.UpdateVirtualAccountError>`
- **Wire**: `PATCH /virtual_accounts/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VirtualAccount`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `VirtualAccounts.UpdateVirtualAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VirtualAccounts.UpdateVirtualAccountRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `VirtualAccountsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VirtualAccountsRequest1` | `virtualAccountsRequest1Schema` | `src/models/virtual-accounts-request1.ts` |
| `VirtualAccount` | `virtualAccountSchema` | `src/models/virtual-account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

