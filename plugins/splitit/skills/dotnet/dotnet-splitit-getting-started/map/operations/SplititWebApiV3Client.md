# SplititWebApiV3Client — operations

Accessor: called directly on the client (`client.Op(…)`) · Source: `SplititWebApiV3Client.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### InstallmentPlanCheckEligibility
- **HTTP**: `POST /api/installmentplans/check-eligibility` (Default (web-api-v3))
- **Signature**: `InstallmentPlanCheckEligibility(string xSplititIdempotencyKey, string? xSplititTouchPoint, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xSplititTouchPoint` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InstallmentsEligibilityResponse`
- **Error**: `SdkException<InstallmentPlanCheckEligibilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetFailedResponse(out FailedResponse)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InstallmentPlanGet
- **HTTP**: `GET /api/installmentplans/{installmentPlanNumber}` (Default (web-api-v3))
- **Signature**: `InstallmentPlanGet(string installmentPlanNumber, string? xSplititTouchPoint, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xSplititTouchPoint` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InstallmentPlanGetResponse`
- **Error**: `SdkException<InstallmentPlanGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetFailedResponse(out FailedResponse)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InstallmentPlanGetEligibilityTermsAndCondition
- **HTTP**: `GET /api/installmentplans/{ipn}/legal` (Default (web-api-v3))
- **Signature**: `InstallmentPlanGetEligibilityTermsAndCondition(string ipn, string? xSplititTouchPoint, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xSplititTouchPoint` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EligibilityTermsAndConditionResponse`
- **Error**: `SdkException<InstallmentPlanGetEligibilityTermsAndConditionError>` — **Case A (typed)**
- **Error accessors**: `TryGetFailedResponse(out FailedResponse)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InstallmentPlanPost
- **HTTP**: `POST /api/installmentplans/initiate` (Default (web-api-v3))
- **Signature**: `InstallmentPlanPost(string xSplititIdempotencyKey, TestModes? xSplititTestMode, string? xSplititTouchPoint, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xSplititTestMode` — nullable, no default → **must pass explicitly**
  - `xSplititTouchPoint` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InitiatePlanResponse`
- **Error**: `SdkException<InstallmentPlanPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlanErrorResponse(out PlanErrorResponse)` [400] · `TryGetFailedResponse(out FailedResponse)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InstallmentPlanPost2
- **HTTP**: `POST /api/installmentplans` (Default (web-api-v3))
- **Signature**: `InstallmentPlanPost2(string xSplititIdempotencyKey, TestModes? xSplititTestMode, string? xSplititTouchPoint, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xSplititTestMode` — nullable, no default → **must pass explicitly**
  - `xSplititTouchPoint` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InstallmentPlanCreateResponse`
- **Error**: `SdkException<InstallmentPlanPost2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetPlanErrorResponse(out PlanErrorResponse)` [400] · `TryGetFailedResponse(out FailedResponse)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InstallmentPlanRefund
- **HTTP**: `POST /api/installmentplans/{installmentPlanNumber}/refund` (Default (web-api-v3))
- **Signature**: `InstallmentPlanRefund(string installmentPlanNumber, string xSplititIdempotencyKey, string? xSplititTouchPoint, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xSplititTouchPoint` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InstallmentPlanRefundResponse`
- **Error**: `SdkException<InstallmentPlanRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetFailedResponse(out FailedResponse)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InstallmentPlanSearch
- **HTTP**: `GET /api/installmentplans/search` (Default (web-api-v3))
- **Signature**: `InstallmentPlanSearch(string? installmentPlanNumber, string? refOrderNumber, object? extendedParams, string? xSplititTouchPoint, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`installmentPlanNumber` … `xSplititTouchPoint`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `installmentPlanNumber` ← `installmentPlanNumber`, `refOrderNumber` ← `refOrderNumber`, `extendedParams` ← `extendedParams`
- **Returns**: `InstallmentPlanSearchResponse`
- **Error**: `SdkException<InstallmentPlanSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetFailedResponse(out FailedResponse)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InstallmentPlanUpdateOrder
- **HTTP**: `PUT /api/installmentplans/{installmentPlanNumber}/updateorder` (Default (web-api-v3))
- **Signature**: `InstallmentPlanUpdateOrder(string installmentPlanNumber, string xSplititIdempotencyKey, string? xSplititTouchPoint, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xSplititTouchPoint` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InstallmentPlanUpdateResponse`
- **Error**: `SdkException<InstallmentPlanUpdateOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetFailedResponse(out FailedResponse)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InstallmentPlanUpdateOrder2
- **HTTP**: `PUT /api/installmentplans/updateorder` (Default (web-api-v3))
- **Signature**: `InstallmentPlanUpdateOrder2(string xSplititIdempotencyKey, string? xSplititTouchPoint, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xSplititTouchPoint` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InstallmentPlanUpdateResponse`
- **Error**: `SdkException<InstallmentPlanUpdateOrder2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFailedResponse(out FailedResponse)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InstallmentPlanVerifyAuthorization
- **HTTP**: `GET /api/installmentplans/{installmentPlanNumber}/verifyauthorization` (Default (web-api-v3))
- **Signature**: `InstallmentPlanVerifyAuthorization(string installmentPlanNumber, string? xSplititTouchPoint, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xSplititTouchPoint` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `VerifyAuthorizationResponse`
- **Error**: `SdkException<InstallmentPlanVerifyAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetFailedResponse(out FailedResponse)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
