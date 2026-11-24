<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.Account` · Source: `src/Sapling/Api/Account.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SaplingAccountStatus

- **Auth**: `options.BearerAuth` OR `options.ApiKeyQuery`
- **Signature**: `SaplingAccountStatus(SaplingAccountStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsage`
- **Returns**: `ApiV1AccountStatusResponse`
- **Error**: `ApiException<SaplingAccountStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAccountStatusRequest` | `src/Sapling/Requests/Account/SaplingAccountStatusRequest.cs` |
| `ApiV1AccountStatusResponse` | `src/Sapling/Models/ApiV1AccountStatusResponse.cs` |
| `SaplingAccountStatusError` | `src/Sapling/Errors/SaplingAccountStatusError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingAccountStatusPost

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingAccountStatusPost(SaplingAccountStatusPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1AccountStatusResponse`
- **Error**: `ApiException<SaplingAccountStatusPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAccountStatusPostRequest` | `src/Sapling/Requests/Account/SaplingAccountStatusPostRequest.cs` |
| `ApiV1AccountStatusRequest` | `src/Sapling/Models/ApiV1AccountStatusRequest.cs` |
| `ApiV1AccountStatusResponse` | `src/Sapling/Models/ApiV1AccountStatusResponse.cs` |
| `SaplingAccountStatusPostError` | `src/Sapling/Errors/SaplingAccountStatusPostError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingApiEndpointUsage

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingApiEndpointUsage(SaplingApiEndpointUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ReportingApiEndpointUsageResponse`
- **Error**: `ApiException<SaplingApiEndpointUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingApiEndpointUsageRequest` | `src/Sapling/Requests/Account/SaplingApiEndpointUsageRequest.cs` |
| `ApiV1ReportingApiEndpointUsageRequest` | `src/Sapling/Models/ApiV1ReportingApiEndpointUsageRequest.cs` |
| `ApiV1ReportingApiEndpointUsageResponse` | `src/Sapling/Models/ApiV1ReportingApiEndpointUsageResponse.cs` |
| `SaplingApiEndpointUsageError` | `src/Sapling/Errors/SaplingApiEndpointUsageError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |

### SaplingApiQuotaUsage

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingApiQuotaUsage(SaplingApiQuotaUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ReportingApiQuotaUsageResponse`
- **Error**: `ApiException<SaplingApiQuotaUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingApiQuotaUsageRequest` | `src/Sapling/Requests/Account/SaplingApiQuotaUsageRequest.cs` |
| `ApiV1ReportingApiQuotaUsageRequest` | `src/Sapling/Models/ApiV1ReportingApiQuotaUsageRequest.cs` |
| `ApiV1ReportingApiQuotaUsageResponse` | `src/Sapling/Models/ApiV1ReportingApiQuotaUsageResponse.cs` |
| `SaplingApiQuotaUsageError` | `src/Sapling/Errors/SaplingApiQuotaUsageError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |

### SaplingApiUsage

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingApiUsage(SaplingApiUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ReportingApiUsageResponse`
- **Error**: `ApiException<SaplingApiUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingApiUsageRequest` | `src/Sapling/Requests/Account/SaplingApiUsageRequest.cs` |
| `ApiV1ReportingApiUsageRequest` | `src/Sapling/Models/ApiV1ReportingApiUsageRequest.cs` |
| `ApiV1ReportingApiUsageResponse` | `src/Sapling/Models/ApiV1ReportingApiUsageResponse.cs` |
| `SaplingApiUsageError` | `src/Sapling/Errors/SaplingApiUsageError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |

### SaplingApiUserActivity

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingApiUserActivity(SaplingApiUserActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ReportingApiUserActivityResponse`
- **Error**: `ApiException<SaplingApiUserActivityError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingApiUserActivityRequest` | `src/Sapling/Requests/Account/SaplingApiUserActivityRequest.cs` |
| `ApiV1ReportingApiUserActivityRequest` | `src/Sapling/Models/ApiV1ReportingApiUserActivityRequest.cs` |
| `ApiV1ReportingApiUserActivityResponse` | `src/Sapling/Models/ApiV1ReportingApiUserActivityResponse.cs` |
| `SaplingApiUserActivityError` | `src/Sapling/Errors/SaplingApiUserActivityError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |

