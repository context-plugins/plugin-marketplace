<!-- Generated file — do not edit; regenerated with the SDK. -->

# Budgets — operations

Accessor: `client.budgets` · Source: `src/resources/budgets.ts` · 10 operations · Request and error types: namespace `Budgets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBudget

- **Signature**: `createBudget(request: Budgets.CreateBudgetRequest, options?: RequestOptions): ApiPromise<BudgetResponseDto, Budgets.CreateBudgetError>`
- **Wire**: `POST /v3/spend/budgets`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BudgetResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Budgets.CreateBudgetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.CreateBudgetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `BudgetCreateDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BudgetCreateDto` | `budgetCreateDtoSchema` | `src/models/budget-create-dto.ts` |
| `BudgetResponseDto` | `budgetResponseDtoSchema` | `src/models/budget-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteBudget

- **Signature**: `deleteBudget(request: Budgets.DeleteBudgetRequest, options?: RequestOptions): ApiPromise<undefined, Budgets.DeleteBudgetError>`
- **Wire**: `DELETE /v3/spend/budgets/{budgetId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `Budgets.DeleteBudgetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.DeleteBudgetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `budgetId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteBudgetMember

- **Signature**: `deleteBudgetMember(request: Budgets.DeleteBudgetMemberRequest, options?: RequestOptions): ApiPromise<undefined, Budgets.DeleteBudgetMemberError>`
- **Wire**: `DELETE /v3/spend/budgets/{budgetId}/members/{userId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `Budgets.DeleteBudgetMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.DeleteBudgetMemberRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `budgetId` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getBudget

- **Signature**: `getBudget(request: Budgets.GetBudgetRequest, options?: RequestOptions): ApiPromise<BudgetResponseDto, Budgets.GetBudgetError>`
- **Wire**: `GET /v3/spend/budgets/{budgetId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BudgetResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Budgets.GetBudgetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.GetBudgetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `budgetId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BudgetResponseDto` | `budgetResponseDtoSchema` | `src/models/budget-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getBudgetMember

- **Signature**: `getBudgetMember(request: Budgets.GetBudgetMemberRequest, options?: RequestOptions): ApiPromise<BudgetMemberResponseDto, Budgets.GetBudgetMemberError>`
- **Wire**: `GET /v3/spend/budgets/{budgetId}/members/{userId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BudgetMemberResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Budgets.GetBudgetMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.GetBudgetMemberRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `budgetId` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BudgetMemberResponseDto` | `budgetMemberResponseDtoSchema` | `src/models/budget-member-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listBudgetMembers

- **Signature**: `listBudgetMembers(request: Budgets.ListBudgetMembersRequest, options?: RequestOptions): ApiPromise<PaginationResponseDtoBudgetMemberResponseDto, Budgets.ListBudgetMembersError>`
- **Wire**: `GET /v3/spend/budgets/{budgetId}/members`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginationResponseDtoBudgetMemberResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Budgets.ListBudgetMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.ListBudgetMembersRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `budgetId` | `path` | `string` | yes |
| `max` | `query` | `number` | no |
| `nextPage` | `query` | `string` | no |
| `prevPage` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginationResponseDtoBudgetMemberResponseDto` | `paginationResponseDtoBudgetMemberResponseDtoSchema` | `src/models/pagination-response-dto-budget-member-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listBudgets

- **Signature**: `listBudgets(request?: Budgets.ListBudgetsRequest, options?: RequestOptions): ApiPromise<PaginationResponseDtoBudgetResponseDto, Budgets.ListBudgetsError>`
- **Wire**: `GET /v3/spend/budgets`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginationResponseDtoBudgetResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Budgets.ListBudgetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.ListBudgetsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `nextPage` | `query` | `string` | no |
| `prevPage` | `query` | `string` | no |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginationResponseDtoBudgetResponseDto` | `paginationResponseDtoBudgetResponseDtoSchema` | `src/models/pagination-response-dto-budget-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateBudget

- **Signature**: `updateBudget(request: Budgets.UpdateBudgetRequest, options?: RequestOptions): ApiPromise<BudgetResponseDto, Budgets.UpdateBudgetError>`
- **Wire**: `PATCH /v3/spend/budgets/{budgetId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BudgetResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Budgets.UpdateBudgetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.UpdateBudgetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `budgetId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `BudgetUpdateDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BudgetUpdateDto` | `budgetUpdateDtoSchema` | `src/models/budget-update-dto.ts` |
| `BudgetResponseDto` | `budgetResponseDtoSchema` | `src/models/budget-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### upsertBudgetMember

- **Signature**: `upsertBudgetMember(request: Budgets.UpsertBudgetMemberRequest, options?: RequestOptions): ApiPromise<BudgetMemberResponseDto, Budgets.UpsertBudgetMemberError>`
- **Wire**: `PUT /v3/spend/budgets/{budgetId}/members/{userId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BudgetMemberResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Budgets.UpsertBudgetMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.UpsertBudgetMemberRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `budgetId` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `BudgetMemberUpsertRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BudgetMemberUpsertRequestDto` | `budgetMemberUpsertRequestDtoSchema` | `src/models/budget-member-upsert-request-dto.ts` |
| `BudgetMemberResponseDto` | `budgetMemberResponseDtoSchema` | `src/models/budget-member-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### upsertBulkBudgetUsers

- **Signature**: `upsertBulkBudgetUsers(request: Budgets.UpsertBulkBudgetUsersRequest, options?: RequestOptions): ApiPromise<SpendStatusDto, Budgets.UpsertBulkBudgetUsersError>`
- **Wire**: `PUT /v3/spend/budgets/{budgetId}/members/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SpendStatusDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Budgets.UpsertBulkBudgetUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.UpsertBulkBudgetUsersRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `budgetId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `BudgetMemberBulkUpsertRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BudgetMemberBulkUpsertRequestDto` | `budgetMemberBulkUpsertRequestDtoSchema` | `src/models/budget-member-bulk-upsert-request-dto.ts` |
| `SpendStatusDto` | `spendStatusDtoSchema` | `src/models/spend-status-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

