<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContractTemplates — operations

Accessor: `client.contractTemplates` · Source: `src/resources/contract-templates.ts` · 6 operations · Request and error types: namespace `ContractTemplates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveContractTemplate

- **Signature**: `archiveContractTemplate(request: ContractTemplates.ArchiveContractTemplateRequest, options?: RequestOptions): ApiPromise<ContractTemplateResponse, ContractTemplates.ArchiveContractTemplateError>`
- **Wire**: `DELETE /billing/v1/contract-templates/{templateID}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContractTemplateResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ContractTemplates.ArchiveContractTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [409] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContractTemplates.ArchiveContractTemplateRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `templateID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContractTemplateResponse` | `contractTemplateResponseSchema` | `src/models/contract-template-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assignContractTemplate

- **Signature**: `assignContractTemplate(request: ContractTemplates.AssignContractTemplateRequest, options?: RequestOptions): ApiPromise<AssignContractTemplateResponse, ContractTemplates.AssignContractTemplateError>`
- **Wire**: `POST /billing/v1/contract-templates/{templateID}/actions/assign`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssignContractTemplateResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ContractTemplates.AssignContractTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContractTemplates.AssignContractTemplateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `templateID` | `string` | yes |
| `body` | `body` | — | `AssignContractTemplateInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssignContractTemplateInput` | `assignContractTemplateInputSchema` | `src/models/assign-contract-template-input.ts` |
| `AssignContractTemplateResponse` | `assignContractTemplateResponseSchema` | `src/models/assign-contract-template-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createContractTemplate

- **Signature**: `createContractTemplate(request: ContractTemplates.CreateContractTemplateRequest, options?: RequestOptions): ApiPromise<ContractTemplateResponse, ContractTemplates.CreateContractTemplateError>`
- **Wire**: `POST /billing/v1/contract-templates`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContractTemplateResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ContractTemplates.CreateContractTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [409] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContractTemplates.CreateContractTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContractTemplateInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContractTemplateInput` | `contractTemplateInputSchema` | `src/models/contract-template-input.ts` |
| `ContractTemplateResponse` | `contractTemplateResponseSchema` | `src/models/contract-template-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getContractTemplate

- **Signature**: `getContractTemplate(request: ContractTemplates.GetContractTemplateRequest, options?: RequestOptions): ApiPromise<ContractTemplateResponse, ContractTemplates.GetContractTemplateError>`
- **Wire**: `GET /billing/v1/contract-templates/{templateID}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContractTemplateResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ContractTemplates.GetContractTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContractTemplates.GetContractTemplateRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `templateID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContractTemplateResponse` | `contractTemplateResponseSchema` | `src/models/contract-template-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listContractTemplates

- **Signature**: `listContractTemplates(options?: RequestOptions): ApiPromise<ContractTemplateResponse[], ContractTemplates.ListContractTemplatesError>`
- **Wire**: `GET /billing/v1/contract-templates`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContractTemplateResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ContractTemplates.ListContractTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ContractTemplateResponse` | `contractTemplateResponseSchema` | `src/models/contract-template-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateContractTemplate

- **Signature**: `updateContractTemplate(request: ContractTemplates.UpdateContractTemplateRequest, options?: RequestOptions): ApiPromise<ContractTemplateResponse, ContractTemplates.UpdateContractTemplateError>`
- **Wire**: `PUT /billing/v1/contract-templates/{templateID}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContractTemplateResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ContractTemplates.UpdateContractTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContractTemplates.UpdateContractTemplateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `templateID` | `string` | yes |
| `body` | `body` | — | `ContractTemplateInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContractTemplateInput` | `contractTemplateInputSchema` | `src/models/contract-template-input.ts` |
| `ContractTemplateResponse` | `contractTemplateResponseSchema` | `src/models/contract-template-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

