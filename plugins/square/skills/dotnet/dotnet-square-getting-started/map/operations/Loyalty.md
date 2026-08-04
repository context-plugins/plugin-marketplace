# Loyalty — operations

Accessor: `client.Loyalty` · Source: `Api/Loyalty.cs` · 18 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AccumulateLoyaltyPoints
- **HTTP**: `POST /v2/loyalty/accounts/{account_id}/accumulate` (Default (connect))
- **Notes**: Adds points earned from a purchase to a loyalty account . - If you are using the Orders API to manage orders, provide the `order_id`. Square reads the order to compute the points earned from both the base loyalty program and an associated loyalty promotion . For purchases that qualify for multiple accrual rules, Square computes points based on the accrual rule that grants the most points. For purchases that qualify for multiple promotions, Square computes points based on the most recently created promotion. A purchase must first qualify for program points to be eligible for promotion points. - If you are not using the Orders API to manage orders, provide `points` with the number of points to add. You must first perform a client-side computation of the points earned from the loyalty program and loyalty promotion. For spend-based and visit-based programs, you can call CalculateLoyaltyPoints to compute the points earned from the base loyalty program. For information about computing points earned from a loyalty promotion, see Calculating promotion points .
- **Signature**: `AccumulateLoyaltyPoints(string accountId, AccumulateLoyaltyPointsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccumulateLoyaltyPointsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdjustLoyaltyPoints
- **HTTP**: `POST /v2/loyalty/accounts/{account_id}/adjust` (Default (connect))
- **Notes**: Adds points to or subtracts points from a buyer's account. Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow, you call AccumulateLoyaltyPoints to add points when a buyer pays for the purchase.
- **Signature**: `AdjustLoyaltyPoints(string accountId, AdjustLoyaltyPointsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AdjustLoyaltyPointsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CalculateLoyaltyPoints
- **HTTP**: `POST /v2/loyalty/programs/{program_id}/calculate` (Default (connect))
- **Notes**: Calculates the number of points a buyer can earn from a purchase. Applications might call this endpoint to display the points to the buyer. - If you are using the Orders API to manage orders, provide the `order_id` and (optional) `loyalty_account_id`. Square reads the order to compute the points earned from the base loyalty program and an associated loyalty promotion . - If you are not using the Orders API to manage orders, provide `transaction_amount_money` with the purchase amount. Square uses this amount to calculate the points earned from the base loyalty program, but not points earned from a loyalty promotion. For spend-based and visit-based programs, the `tax_mode` setting of the accrual rule indicates how taxes should be treated for loyalty points accrual. If the purchase qualifies for program points, call ListLoyaltyPromotions and perform a client-side computation to calculate whether the purchase also qualifies for promotion points. For more information, see Calculating promotion points .
- **Signature**: `CalculateLoyaltyPoints(string programId, CalculateLoyaltyPointsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CalculateLoyaltyPointsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CancelLoyaltyPromotion
- **HTTP**: `POST /v2/loyalty/programs/{program_id}/promotions/{promotion_id}/cancel` (Default (connect))
- **Notes**: Cancels a loyalty promotion. Use this endpoint to cancel an `ACTIVE` promotion earlier than the end date, cancel an `ACTIVE` promotion when an end date is not specified, or cancel a `SCHEDULED` promotion. Because updating a promotion is not supported, you can also use this endpoint to cancel a promotion before you create a new one. This endpoint sets the loyalty promotion to the `CANCELED` state
- **Signature**: `CancelLoyaltyPromotion(string promotionId, string programId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CancelLoyaltyPromotionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateLoyaltyAccount
- **HTTP**: `POST /v2/loyalty/accounts` (Default (connect))
- **Notes**: Creates a loyalty account. To create a loyalty account, you must provide the `program_id` and a `mapping` with the `phone_number` of the buyer.
- **Signature**: `CreateLoyaltyAccount(CreateLoyaltyAccountRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateLoyaltyAccountResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateLoyaltyPromotion
- **HTTP**: `POST /v2/loyalty/programs/{program_id}/promotions` (Default (connect))
- **Notes**: Creates a loyalty promotion for a loyalty program . A loyalty promotion enables buyers to earn points in addition to those earned from the base loyalty program. This endpoint sets the loyalty promotion to the `ACTIVE` or `SCHEDULED` status, depending on the `available_time` setting. A loyalty program can have a maximum of 10 loyalty promotions with an `ACTIVE` or `SCHEDULED` status.
- **Signature**: `CreateLoyaltyPromotion(string programId, CreateLoyaltyPromotionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateLoyaltyPromotionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateLoyaltyReward
- **HTTP**: `POST /v2/loyalty/rewards` (Default (connect))
- **Notes**: Creates a loyalty reward. In the process, the endpoint does following: - Uses the `reward_tier_id` in the request to determine the number of points to lock for this reward. - If the request includes `order_id`, it adds the reward and related discount to the order. After a reward is created, the points are locked and not available for the buyer to redeem another reward.
- **Signature**: `CreateLoyaltyReward(CreateLoyaltyRewardRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateLoyaltyRewardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLoyaltyReward
- **HTTP**: `DELETE /v2/loyalty/rewards/{reward_id}` (Default (connect))
- **Notes**: Deletes a loyalty reward by doing the following: - Returns the loyalty points back to the loyalty account. - If an order ID was specified when the reward was created (see CreateLoyaltyReward ), it updates the order by removing the reward and related discounts. You cannot delete a reward that has reached the terminal state (REDEEMED).
- **Signature**: `DeleteLoyaltyReward(string rewardId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteLoyaltyRewardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListLoyaltyPrograms
- **HTTP**: `GET /v2/loyalty/programs` (Default (connect))
- **Notes**: Returns a list of loyalty programs in the seller's account. Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see Loyalty Program Overview . Replaced with RetrieveLoyaltyProgram when used with the keyword `main`.
- **Signature**: `ListLoyaltyPrograms(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ListLoyaltyProgramsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListLoyaltyPromotions
- **HTTP**: `GET /v2/loyalty/programs/{program_id}/promotions` (Default (connect))
- **Notes**: Lists the loyalty promotions associated with a loyalty program . Results are sorted by the `created_at` date in descending order (newest to oldest).
- **Signature**: `ListLoyaltyPromotions(string programId, LoyaltyPromotionStatus? status, string? cursor, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `ListLoyaltyPromotionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RedeemLoyaltyReward
- **HTTP**: `POST /v2/loyalty/rewards/{reward_id}/redeem` (Default (connect))
- **Notes**: Redeems a loyalty reward. The endpoint sets the reward to the `REDEEMED` terminal state. If you are using your own order processing system (not using the Orders API), you call this endpoint after the buyer paid for the purchase. After the reward reaches the terminal state, it cannot be deleted. In other words, points used for the reward cannot be returned to the account.
- **Signature**: `RedeemLoyaltyReward(string rewardId, RedeemLoyaltyRewardRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RedeemLoyaltyRewardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveLoyaltyAccount
- **HTTP**: `GET /v2/loyalty/accounts/{account_id}` (Default (connect))
- **Notes**: Retrieves a loyalty account.
- **Signature**: `RetrieveLoyaltyAccount(string accountId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveLoyaltyAccountResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveLoyaltyProgram
- **HTTP**: `GET /v2/loyalty/programs/{program_id}` (Default (connect))
- **Notes**: Retrieves the loyalty program in a seller's account, specified by the program ID or the keyword `main`. Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see Loyalty Program Overview .
- **Signature**: `RetrieveLoyaltyProgram(string programId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveLoyaltyProgramResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveLoyaltyPromotion
- **HTTP**: `GET /v2/loyalty/programs/{program_id}/promotions/{promotion_id}` (Default (connect))
- **Notes**: Retrieves a loyalty promotion.
- **Signature**: `RetrieveLoyaltyPromotion(string promotionId, string programId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveLoyaltyPromotionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveLoyaltyReward
- **HTTP**: `GET /v2/loyalty/rewards/{reward_id}` (Default (connect))
- **Notes**: Retrieves a loyalty reward.
- **Signature**: `RetrieveLoyaltyReward(string rewardId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveLoyaltyRewardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchLoyaltyAccounts
- **HTTP**: `POST /v2/loyalty/accounts/search` (Default (connect))
- **Notes**: Searches for loyalty accounts in a loyalty program. You can search for a loyalty account using the phone number or customer ID associated with the account. To return all loyalty accounts, specify an empty `query` object or omit it entirely. Search results are sorted by `created_at` in ascending order.
- **Signature**: `SearchLoyaltyAccounts(SearchLoyaltyAccountsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchLoyaltyAccountsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchLoyaltyEvents
- **HTTP**: `POST /v2/loyalty/events/search` (Default (connect))
- **Notes**: Searches for loyalty events. A Square loyalty program maintains a ledger of events that occur during the lifetime of a buyer's loyalty account. Each change in the point balance (for example, points earned, points redeemed, and points expired) is recorded in the ledger. Using this endpoint, you can search the ledger for events. Search results are sorted by `created_at` in descending order.
- **Signature**: `SearchLoyaltyEvents(SearchLoyaltyEventsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchLoyaltyEventsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchLoyaltyRewards
- **HTTP**: `POST /v2/loyalty/rewards/search` (Default (connect))
- **Notes**: Searches for loyalty rewards. This endpoint accepts a request with no query filters and returns results for all loyalty accounts. If you include a `query` object, `loyalty_account_id` is required and `status` is optional. If you know a reward ID, use the RetrieveLoyaltyReward endpoint. Search results are sorted by `updated_at` in descending order.
- **Signature**: `SearchLoyaltyRewards(SearchLoyaltyRewardsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchLoyaltyRewardsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
