<!-- Generated file — do not edit; regenerated with the SDK. -->

# Budgets — operations

Accessor: `client.budgets` · Source: `src/resources/budgets.ts` · 5 operations · Request and error types: namespace `Budgets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBudget

- **Signature**: `createBudget(request?: Budgets.CreateBudgetRequest, options?: RequestOptions): ApiPromise<BudgetApi, Budgets.CreateBudgetError>`
- **Wire**: `POST /analytics/v1/budgets`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BudgetApi`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Budgets.CreateBudgetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.CreateBudgetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BudgetCreateUpdateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BudgetCreateUpdateRequest` | `budgetCreateUpdateRequestSchema` | `src/models/budget-create-update-request.ts` |
| `BudgetApi` | `budgetApiSchema` | `src/models/budget-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteBudget

- **Signature**: `deleteBudget(request: Budgets.DeleteBudgetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Budgets.DeleteBudgetError>`
- **Wire**: `DELETE /analytics/v1/budgets/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Budgets.DeleteBudgetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.DeleteBudgetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getBudget

- **Signature**: `getBudget(request: Budgets.GetBudgetRequest, options?: RequestOptions): ApiPromise<BudgetApi, Budgets.GetBudgetError>`
- **Wire**: `GET /analytics/v1/budgets/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BudgetApi`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Budgets.GetBudgetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.GetBudgetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BudgetApi` | `budgetApiSchema` | `src/models/budget-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listBudgets

- **Signature**: `listBudgets(request?: Budgets.ListBudgetsRequest, options?: RequestOptions): ApiPromise<AnalyticsV1BudgetsResponse, Budgets.ListBudgetsError>`
- **Wire**: `GET /analytics/v1/budgets`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsV1BudgetsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Budgets.ListBudgetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.ListBudgetsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `filter` | `query` | `string` | no | — |
| `nameContains` | `query` | `string` | no | — |
| `minCreationTime` | `query` | `string` | no | — |
| `maxCreationTime` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsV1BudgetsResponse` | `analyticsV1BudgetsResponseSchema` | `src/models/analytics-v1-budgets-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateBudget

- **Signature**: `updateBudget(request: Budgets.UpdateBudgetRequest, options?: RequestOptions): ApiPromise<BudgetApi, Budgets.UpdateBudgetError>`
- **Wire**: `PATCH /analytics/v1/budgets/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BudgetApi`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Budgets.UpdateBudgetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Budgets.UpdateBudgetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `BudgetCreateUpdateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BudgetCreateUpdateRequest` | `budgetCreateUpdateRequestSchema` | `src/models/budget-create-update-request.ts` |
| `BudgetApi` | `budgetApiSchema` | `src/models/budget-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

