<!-- Generated file — do not edit; regenerated with the SDK. -->

# TwilioSdkClient — operations

Accessor: `client` · Source: `TwilioSdkClient.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBulkLookup

- **Server group**: `Default4`
- **Signature**: `CreateBulkLookup(LookupRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `LookupResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `LookupRequest` | `Models/LookupRequest.cs` |
| `LookupResponse1` | `Models/LookupResponse1.cs` |

### CreateLookupPhoneNumberOverrides

- **Server group**: `Default4`
- **Signature**: `CreateLookupPhoneNumberOverrides(string field, string phoneNumber, OverridesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `OverridesResponse`
- **Error**: `SdkException<CreateLookupPhoneNumberOverridesError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `OverridesRequest` | `Models/OverridesRequest.cs` |
| `OverridesResponse` | `Models/OverridesResponse.cs` |
| `CreateLookupPhoneNumberOverridesError` | `Errors/CreateLookupPhoneNumberOverridesError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### DeleteLookupPhoneNumberOverrides

- **Server group**: `Default4`
- **Signature**: `DeleteLookupPhoneNumberOverrides(string field, string phoneNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLookupPhoneNumberOverridesError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteLookupPhoneNumberOverridesError` | `Errors/DeleteLookupPhoneNumberOverridesError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### DeleteLookupRateLimit

- **Server group**: `Default4`
- **Signature**: `DeleteLookupRateLimit(string field, string bucket, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLookupRateLimitError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteLookupRateLimitError` | `Errors/DeleteLookupRateLimitError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### FetchLookupAccountRateLimits

- **Server group**: `Default4`
- **Signature**: `FetchLookupAccountRateLimits(IReadOnlyList<string>? fields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fields` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `Fields` ← `fields`
- **Returns**: `RateLimitListResponse`
- **Error**: `SdkException<FetchLookupAccountRateLimitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RateLimitListResponse` | `Models/RateLimitListResponse.cs` |
| `FetchLookupAccountRateLimitsError` | `Errors/FetchLookupAccountRateLimitsError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### FetchLookupPhoneNumberOverrides

- **Server group**: `Default4`
- **Signature**: `FetchLookupPhoneNumberOverrides(string field, string phoneNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `OverridesResponse`
- **Error**: `SdkException<FetchLookupPhoneNumberOverridesError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `OverridesResponse` | `Models/OverridesResponse.cs` |
| `FetchLookupPhoneNumberOverridesError` | `Errors/FetchLookupPhoneNumberOverridesError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### FetchLookupRateLimit

- **Server group**: `Default4`
- **Signature**: `FetchLookupRateLimit(string field, string bucket, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `RateLimitResponse`
- **Error**: `SdkException<FetchLookupRateLimitError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RateLimitResponse` | `Models/RateLimitResponse.cs` |
| `FetchLookupRateLimitError` | `Errors/FetchLookupRateLimitError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### UpdateChallengePasskeys

- **Server group**: `Default3`
- **Signature**: `UpdateChallengePasskeys(string serviceSid, ApprovePasskeysChallengeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `V2ServicesPasskeysApproveChallengeResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApprovePasskeysChallengeRequest` | `Models/ApprovePasskeysChallengeRequest.cs` |
| `V2ServicesPasskeysApproveChallengeResponse` | `Models/V2ServicesPasskeysApproveChallengeResponse.cs` |

### UpdateLookupPhoneNumberOverrides

- **Server group**: `Default4`
- **Signature**: `UpdateLookupPhoneNumberOverrides(string field, string phoneNumber, OverridesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `OverridesResponse`
- **Error**: `SdkException<UpdateLookupPhoneNumberOverridesError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `OverridesRequest` | `Models/OverridesRequest.cs` |
| `OverridesResponse` | `Models/OverridesResponse.cs` |
| `UpdateLookupPhoneNumberOverridesError` | `Errors/UpdateLookupPhoneNumberOverridesError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### UpdateLookupRateLimit

- **Server group**: `Default4`
- **Signature**: `UpdateLookupRateLimit(string field, string bucket, RateLimitRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `RateLimitResponse`
- **Error**: `SdkException<UpdateLookupRateLimitError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RateLimitRequest` | `Models/RateLimitRequest.cs` |
| `RateLimitResponse` | `Models/RateLimitResponse.cs` |
| `UpdateLookupRateLimitError` | `Errors/UpdateLookupRateLimitError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### UpdatePasskeysFactor

- **Server group**: `Default3`
- **Signature**: `UpdatePasskeysFactor(string serviceSid, VerifyPasskeysFactorRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `V2ServicesPasskeysVerifyFactorResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyPasskeysFactorRequest` | `Models/VerifyPasskeysFactorRequest.cs` |
| `V2ServicesPasskeysVerifyFactorResponse` | `Models/V2ServicesPasskeysVerifyFactorResponse.cs` |

