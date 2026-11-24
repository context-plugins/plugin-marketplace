<!-- Generated file — do not edit; regenerated with the SDK. -->

# LinkedAccounts — operations

Accessor: `client.linkedAccounts` · Source: `src/resources/linked-accounts.ts` · 8 operations · Request and error types: namespace `LinkedAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createLinkedAccount

- **Signature**: `createLinkedAccount(request: LinkedAccounts.CreateLinkedAccountRequest, options?: RequestOptions): ApiPromise<LinkedAccount, LinkedAccounts.CreateLinkedAccountError>`
- **Wire**: `POST /v2/accounts`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkedAccount`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `LinkedAccounts.CreateLinkedAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LinkedAccounts.CreateLinkedAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V2AccountsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsRequest` | `v2AccountsRequestSchema` | `src/models/v2-accounts-request.ts` |
| `LinkedAccount` | `linkedAccountSchema` | `src/models/linked-account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createStakeholder

- **Signature**: `createStakeholder(request: LinkedAccounts.CreateStakeholderRequest, options?: RequestOptions): ApiPromise<Stakeholder, LinkedAccounts.CreateStakeholderError>`
- **Wire**: `POST /v2/accounts/{account_id}/stakeholders`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Stakeholder`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `LinkedAccounts.CreateStakeholderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LinkedAccounts.CreateStakeholderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `body` | `body` | — | `V2AccountsStakeholdersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsStakeholdersRequest` | `v2AccountsStakeholdersRequestSchema` | `src/models/v2-accounts-stakeholders-request.ts` |
| `Stakeholder` | `stakeholderSchema` | `src/models/stakeholder.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchLinkedAccount

- **Signature**: `fetchLinkedAccount(request: LinkedAccounts.FetchLinkedAccountRequest, options?: RequestOptions): ApiPromise<LinkedAccount, LinkedAccounts.FetchLinkedAccountError>`
- **Wire**: `GET /v2/accounts/{account_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LinkedAccount`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `LinkedAccounts.FetchLinkedAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LinkedAccounts.FetchLinkedAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkedAccount` | `linkedAccountSchema` | `src/models/linked-account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchProductConfig

- **Signature**: `fetchProductConfig(request: LinkedAccounts.FetchProductConfigRequest, options?: RequestOptions): ApiPromise<ProductConfiguration, LinkedAccounts.FetchProductConfigError>`
- **Wire**: `GET /v2/accounts/{account_id}/products/{product_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProductConfiguration`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `LinkedAccounts.FetchProductConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LinkedAccounts.FetchProductConfigRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `productId` | `path` | `product_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductConfiguration` | `productConfigurationSchema` | `src/models/product-configuration.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### requestProductConfig

- **Signature**: `requestProductConfig(request: LinkedAccounts.RequestProductConfigRequest, options?: RequestOptions): ApiPromise<ProductConfiguration, LinkedAccounts.RequestProductConfigError>`
- **Wire**: `POST /v2/accounts/{account_id}/products`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProductConfiguration`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `LinkedAccounts.RequestProductConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LinkedAccounts.RequestProductConfigRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `body` | `body` | — | `V2AccountsProductsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsProductsRequest` | `v2AccountsProductsRequestSchema` | `src/models/v2-accounts-products-request.ts` |
| `ProductConfiguration` | `productConfigurationSchema` | `src/models/product-configuration.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateLinkedAccount

- **Signature**: `updateLinkedAccount(request: LinkedAccounts.UpdateLinkedAccountRequest, options?: RequestOptions): ApiPromise<LinkedAccount, LinkedAccounts.UpdateLinkedAccountError>`
- **Wire**: `PATCH /v2/accounts/{account_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkedAccount`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `LinkedAccounts.UpdateLinkedAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LinkedAccounts.UpdateLinkedAccountRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `body` | `body` | — | `V2AccountsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsRequest1` | `v2AccountsRequest1Schema` | `src/models/v2-accounts-request1.ts` |
| `LinkedAccount` | `linkedAccountSchema` | `src/models/linked-account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateProductConfig

- **Signature**: `updateProductConfig(request: LinkedAccounts.UpdateProductConfigRequest, options?: RequestOptions): ApiPromise<ProductConfiguration, LinkedAccounts.UpdateProductConfigError>`
- **Wire**: `PATCH /v2/accounts/{account_id}/products/{product_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProductConfiguration`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `LinkedAccounts.UpdateProductConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LinkedAccounts.UpdateProductConfigRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `productId` | `path` | `product_id` | `string` | yes |
| `body` | `body` | — | `V2AccountsProductsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsProductsRequest1` | `v2AccountsProductsRequest1Schema` | `src/models/v2-accounts-products-request1.ts` |
| `ProductConfiguration` | `productConfigurationSchema` | `src/models/product-configuration.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateStakeholder

- **Signature**: `updateStakeholder(request: LinkedAccounts.UpdateStakeholderRequest, options?: RequestOptions): ApiPromise<Stakeholder, LinkedAccounts.UpdateStakeholderError>`
- **Wire**: `PATCH /v2/accounts/{account_id}/stakeholders/{stakeholder_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Stakeholder`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `LinkedAccounts.UpdateStakeholderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LinkedAccounts.UpdateStakeholderRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `stakeholderId` | `path` | `stakeholder_id` | `string` | yes |
| `body` | `body` | — | `V2AccountsStakeholdersRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsStakeholdersRequest1` | `v2AccountsStakeholdersRequest1Schema` | `src/models/v2-accounts-stakeholders-request1.ts` |
| `Stakeholder` | `stakeholderSchema` | `src/models/stakeholder.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

