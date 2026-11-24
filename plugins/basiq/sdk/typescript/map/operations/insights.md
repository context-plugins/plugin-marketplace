<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `src/resources/insights.ts` · 10 operations · Request and error types: namespace `Insights`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createInsight

- **Signature**: `createInsight(request: Insights.CreateInsightRequest, options?: RequestOptions): ApiPromise<PostInsightsResponse, Insights.CreateInsightError>`
- **Wire**: `POST /insights`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PostInsightsResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Insights.CreateInsightError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.CreateInsightRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PostInsightsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostInsightsRequest` | `postInsightsRequestSchema` | `src/models/post-insights-request.ts` |
| `PostInsightsResponse` | `postInsightsResponseSchema` | `src/models/post-insights-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAccountInsights

- **Signature**: `getAccountInsights(request: Insights.GetAccountInsightsRequest, options?: RequestOptions): ApiPromise<AccountInsightResponse, Insights.GetAccountInsightsError>`
- **Wire**: `POST /users/{userId}/insights/account`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountInsightResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Insights.GetAccountInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetAccountInsightsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `UsersInsightsAccountRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersInsightsAccountRequest` | `usersInsightsAccountRequestSchema` | `src/models/users-insights-account-request.ts` |
| `AccountInsightResponse` | `accountInsightResponseSchema` | `src/models/account-insight-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getBalanceInsights

- **Signature**: `getBalanceInsights(request: Insights.GetBalanceInsightsRequest, options?: RequestOptions): ApiPromise<BalanceInsightResponse, Insights.GetBalanceInsightsError>`
- **Wire**: `POST /users/{userId}/insights/balance`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BalanceInsightResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Insights.GetBalanceInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetBalanceInsightsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `BalanceInsightRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceInsightRequest` | `balanceInsightRequestSchema` | `src/models/balance-insight-request.ts` |
| `BalanceInsightResponse` | `balanceInsightResponseSchema` | `src/models/balance-insight-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getExpenseRatioInsights

- **Signature**: `getExpenseRatioInsights(request: Insights.GetExpenseRatioInsightsRequest, options?: RequestOptions): ApiPromise<ExpenseRatioInsightResponse, Insights.GetExpenseRatioInsightsError>`
- **Wire**: `POST /users/{userId}/insights/expense-ratio`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExpenseRatioInsightResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Insights.GetExpenseRatioInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetExpenseRatioInsightsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `ExpenseRatioInsightRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpenseRatioInsightRequest` | `expenseRatioInsightRequestSchema` | `src/models/expense-ratio-insight-request.ts` |
| `ExpenseRatioInsightResponse` | `expenseRatioInsightResponseSchema` | `src/models/expense-ratio-insight-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getIdentityInsights

- **Signature**: `getIdentityInsights(request: Insights.GetIdentityInsightsRequest, options?: RequestOptions): ApiPromise<IdentityInsightResponse, Insights.GetIdentityInsightsError>`
- **Wire**: `POST /users/{userId}/insights/identity`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdentityInsightResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Insights.GetIdentityInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetIdentityInsightsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `IdentityInsightRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentityInsightRequest` | `identityInsightRequestSchema` | `src/models/identity-insight-request.ts` |
| `IdentityInsightResponse` | `identityInsightResponseSchema` | `src/models/identity-insight-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getInsightById

- **Signature**: `getInsightById(request: Insights.GetInsightByIdRequest, options?: RequestOptions): ApiPromise<Insight, Insights.GetInsightByIdError>`
- **Wire**: `GET /users/{userId}/insights/{insightId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Insight`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Insights.GetInsightByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetInsightByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `insightId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Insight` | `insightSchema` | `src/models/insight.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getInsightType

- **Signature**: `getInsightType(request: Insights.GetInsightTypeRequest, options?: RequestOptions): ApiPromise<InsightTypeItem, Insights.GetInsightTypeError>`
- **Wire**: `GET /insights/types/{typeId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightTypeItem`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Insights.GetInsightTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetInsightTypeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `typeId` | `path` | `TypeId` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TypeId` | `typeIdSchema` | `src/models/type-id.ts` |
| `InsightTypeItem` | `insightTypeItemSchema` | `src/models/insight-type-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getInsightTypes

- **Signature**: `getInsightTypes(options?: RequestOptions): ApiPromise<InsightTypesList, Insights.GetInsightTypesError>`
- **Wire**: `GET /insights/types`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightTypesList`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Insights.GetInsightTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightTypesList` | `insightTypesListSchema` | `src/models/insight-types-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listUserInsights

- **Signature**: `listUserInsights(request: Insights.ListUserInsightsRequest, options?: RequestOptions): ApiPromise<InsightListResponse, Insights.ListUserInsightsError>`
- **Wire**: `GET /users/{userId}/insights`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightListResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Insights.ListUserInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.ListUserInsightsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightListResponse` | `insightListResponseSchema` | `src/models/insight-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### verifyIncomeInsight

- **Signature**: `verifyIncomeInsight(request: Insights.VerifyIncomeInsightRequest, options?: RequestOptions): ApiPromise<IncomeInsightResponse, Insights.VerifyIncomeInsightError>`
- **Wire**: `POST /users/{userId}/insights/income`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IncomeInsightResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Insights.VerifyIncomeInsightError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.VerifyIncomeInsightRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `IncomeInsightRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncomeInsightRequest` | `incomeInsightRequestSchema` | `src/models/income-insight-request.ts` |
| `IncomeInsightResponse` | `incomeInsightResponseSchema` | `src/models/income-insight-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

