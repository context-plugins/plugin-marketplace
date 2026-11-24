<!-- Generated file — do not edit; regenerated with the SDK. -->

# BudgetSuggestions — operations

Accessor: `client.budgetSuggestions` · Source: `src/resources/budget-suggestions.ts` · 3 operations · Request and error types: namespace `BudgetSuggestions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acceptBudgetSuggestion

- **Signature**: `acceptBudgetSuggestion(request: BudgetSuggestions.AcceptBudgetSuggestionRequest, options?: RequestOptions): ApiPromise<AnalyticsV1BudgetSuggestionsActionsAcceptResponse, BudgetSuggestions.AcceptBudgetSuggestionError>`
- **Wire**: `POST /analytics/v1/budget-suggestions/{id}/actions/accept`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyticsV1BudgetSuggestionsActionsAcceptResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BudgetSuggestions.AcceptBudgetSuggestionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BudgetSuggestions.AcceptBudgetSuggestionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `BudgetSuggestionAcceptRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BudgetSuggestionAcceptRequest` | `budgetSuggestionAcceptRequestSchema` | `src/models/budget-suggestion-accept-request.ts` |
| `AnalyticsV1BudgetSuggestionsActionsAcceptResponse` | `analyticsV1BudgetSuggestionsActionsAcceptResponseSchema` | `src/models/analytics-v1-budget-suggestions-actions-accept-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### dismissBudgetSuggestion

- **Signature**: `dismissBudgetSuggestion(request: BudgetSuggestions.DismissBudgetSuggestionRequest, options?: RequestOptions): ApiPromise<AnalyticsV1BudgetSuggestionsActionsDismissResponse, BudgetSuggestions.DismissBudgetSuggestionError>`
- **Wire**: `POST /analytics/v1/budget-suggestions/{id}/actions/dismiss`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyticsV1BudgetSuggestionsActionsDismissResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BudgetSuggestions.DismissBudgetSuggestionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BudgetSuggestions.DismissBudgetSuggestionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `BudgetSuggestionDismissRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BudgetSuggestionDismissRequest` | `budgetSuggestionDismissRequestSchema` | `src/models/budget-suggestion-dismiss-request.ts` |
| `AnalyticsV1BudgetSuggestionsActionsDismissResponse` | `analyticsV1BudgetSuggestionsActionsDismissResponseSchema` | `src/models/analytics-v1-budget-suggestions-actions-dismiss-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listBudgetSuggestions

- **Signature**: `listBudgetSuggestions(options?: RequestOptions): ApiPromise<AnalyticsV1BudgetSuggestionsResponse, BudgetSuggestions.ListBudgetSuggestionsError>`
- **Wire**: `GET /analytics/v1/budget-suggestions`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsV1BudgetSuggestionsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BudgetSuggestions.ListBudgetSuggestionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsV1BudgetSuggestionsResponse` | `analyticsV1BudgetSuggestionsResponseSchema` | `src/models/analytics-v1-budget-suggestions-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

