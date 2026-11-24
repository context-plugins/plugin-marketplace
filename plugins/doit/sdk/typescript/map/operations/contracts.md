<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contracts — operations

Accessor: `client.contracts` · Source: `src/resources/contracts.ts` · 6 operations · Request and error types: namespace `Contracts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activateContract

- **Signature**: `activateContract(request: Contracts.ActivateContractRequest, options?: RequestOptions): ApiPromise<ContractLifecycleResponse, Contracts.ActivateContractError>`
- **Wire**: `POST /customers/{customerID}/contracts/{contractID}/activate`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContractLifecycleResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Contracts.ActivateContractError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.ActivateContractRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customerID` | `string` | yes |
| `contractId` | `path` | `contractID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContractLifecycleResponse` | `contractLifecycleResponseSchema` | `src/models/contract-lifecycle-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cancelContract

- **Signature**: `cancelContract(request: Contracts.CancelContractRequest, options?: RequestOptions): ApiPromise<ContractLifecycleResponse, Contracts.CancelContractError>`
- **Wire**: `POST /customers/{customerID}/contracts/{contractID}/cancel`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContractLifecycleResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Contracts.CancelContractError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.CancelContractRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customerID` | `string` | yes |
| `contractId` | `path` | `contractID` | `string` | yes |
| `body` | `body` | — | `CustomersContractsCancelRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersContractsCancelRequest` | `customersContractsCancelRequestSchema` | `src/models/customers-contracts-cancel-request.ts` |
| `ContractLifecycleResponse` | `contractLifecycleResponseSchema` | `src/models/contract-lifecycle-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createContract

- **Signature**: `createContract(request: Contracts.CreateContractRequest, options?: RequestOptions): ApiPromise<CreateContractResponse, Contracts.CreateContractError>`
- **Wire**: `POST /customers/{customerID}/contracts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateContractResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Contracts.CreateContractError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.CreateContractRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customerID` | `string` | yes |
| `body` | `body` | — | `MtsContractCreateInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MtsContractCreateInput` | `mtsContractCreateInputSchema` | `src/models/mts-contract-create-input.ts` |
| `CreateContractResponse` | `createContractResponseSchema` | `src/models/create-contract-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getContract

- **Signature**: `getContract(request: Contracts.GetContractRequest, options?: RequestOptions): ApiPromise<MtsContractDetailResponse, Contracts.GetContractError>`
- **Wire**: `GET /customers/{customerID}/contracts/{contractID}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MtsContractDetailResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Contracts.GetContractError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.GetContractRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customerID` | `string` | yes |
| `contractId` | `path` | `contractID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MtsContractDetailResponse` | `mtsContractDetailResponseSchema` | `src/models/mts-contract-detail-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listContracts

- **Signature**: `listContracts(request: Contracts.ListContractsRequest, options?: RequestOptions): ApiPromise<MtsContractResponse[], Contracts.ListContractsError>`
- **Wire**: `GET /customers/{customerID}/contracts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MtsContractResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Contracts.ListContractsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.ListContractsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customerID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MtsContractResponse` | `mtsContractResponseSchema` | `src/models/mts-contract-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateContract

- **Signature**: `updateContract(request: Contracts.UpdateContractRequest, options?: RequestOptions): ApiPromise<CreateContractResponse, Contracts.UpdateContractError>`
- **Wire**: `POST /customers/{customerID}/contracts/{contractID}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateContractResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Contracts.UpdateContractError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.UpdateContractRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customerID` | `string` | yes |
| `contractId` | `path` | `contractID` | `string` | yes |
| `body` | `body` | — | `MtsContractInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MtsContractInput` | `mtsContractInputSchema` | `src/models/mts-contract-input.ts` |
| `CreateContractResponse` | `createContractResponseSchema` | `src/models/create-contract-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

