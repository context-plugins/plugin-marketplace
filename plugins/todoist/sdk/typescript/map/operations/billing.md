<!-- Generated file — do not edit; regenerated with the SDK. -->

# Billing — operations

Accessor: `client.billing` · Source: `src/resources/billing.ts` · 7 operations · Request and error types: namespace `Billing`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePost

- **Signature**: `cancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePost(request: Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostRequest, options?: RequestOptions): ApiPromise<BillingPortalUrlResponse, Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostError>`
- **Wire**: `POST /api/v1/payments/cancel_plan_with_redirect_to_stripe`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BillingPortalUrlResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body39` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body39` | `body39Schema` | `src/models/body39.ts` |
| `BillingPortalUrlResponse` | `billingPortalUrlResponseSchema` | `src/models/billing-portal-url-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPost

- **Signature**: `getSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPost(options?: RequestOptions): ApiPromise<SubscriptionInfo, Billing.GetSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPostError>`
- **Wire**: `POST /api/v1/payments/get_subscription_info`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionInfo`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Billing.GetSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionInfo` | `subscriptionInfoSchema` | `src/models/subscription-info.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### reactivatePlanApiV1PaymentsReactivatePlanPost

- **Signature**: `reactivatePlanApiV1PaymentsReactivatePlanPost(options?: RequestOptions): ApiPromise<SubscriptionInfo, Billing.ReactivatePlanApiV1PaymentsReactivatePlanPostError>`
- **Wire**: `POST /api/v1/payments/reactivate_plan`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionInfo`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Billing.ReactivatePlanApiV1PaymentsReactivatePlanPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionInfo` | `subscriptionInfoSchema` | `src/models/subscription-info.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### usageBillingHistoryApiV1UsageBillingHistoryGet

- **Signature**: `usageBillingHistoryApiV1UsageBillingHistoryGet(request?: Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetRequest, options?: RequestOptions): ApiPromise<HistoryResponse, Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetError>`
- **Wire**: `GET /api/v1/usage_billing/history`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HistoryResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `product` | `query` | `string` | no | `"automations"` |
| `types` | `query` | `string` | no | — |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `HistoryResponse` | `historyResponseSchema` | `src/models/history-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### usageBillingStateApiV1UsageBillingStateGet

- **Signature**: `usageBillingStateApiV1UsageBillingStateGet(request?: Billing.UsageBillingStateApiV1UsageBillingStateGetRequest, options?: RequestOptions): ApiPromise<CreditStateResponse, Billing.UsageBillingStateApiV1UsageBillingStateGetError>`
- **Wire**: `GET /api/v1/usage_billing/state`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditStateResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Billing.UsageBillingStateApiV1UsageBillingStateGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Billing.UsageBillingStateApiV1UsageBillingStateGetRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `product` | `query` | `string` | no | `"automations"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditStateResponse` | `creditStateResponseSchema` | `src/models/credit-state-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### usageBillingTopUpApiV1UsageBillingTopUpPost

- **Signature**: `usageBillingTopUpApiV1UsageBillingTopUpPost(request: Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostRequest, options?: RequestOptions): ApiPromise<TopUpResponse, Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostError>`
- **Wire**: `POST /api/v1/usage_billing/top_up`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TopUpResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body33` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body33` | `body33Schema` | `src/models/body33.ts` |
| `TopUpResponse` | `topUpResponseSchema` | `src/models/top-up-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### usageBillingUsageSummaryApiV1UsageBillingUsageSummaryGet

- **Signature**: `usageBillingUsageSummaryApiV1UsageBillingUsageSummaryGet(request?: Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetRequest, options?: RequestOptions): ApiPromise<UsageSummaryResponse, Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetError>`
- **Wire**: `GET /api/v1/usage_billing/usage_summary`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsageSummaryResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `product` | `query` | — | `string` | no | `"automations"` |
| `category` | `query` | — | `string` | no | — |
| `since` | `query` | — | `Date` (date-time) | no | — |
| `until` | `query` | — | `Date` (date-time) | no | — |
| `groupBy` | `query` | `group_by` | `GroupBy` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupBy` | `groupBySchema` | `src/models/group-by.ts` |
| `UsageSummaryResponse` | `usageSummaryResponseSchema` | `src/models/usage-summary-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

