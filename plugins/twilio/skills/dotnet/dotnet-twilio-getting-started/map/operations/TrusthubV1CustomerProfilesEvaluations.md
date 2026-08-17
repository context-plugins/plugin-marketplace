<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1CustomerProfilesEvaluations — operations

Accessor: `client.TrusthubV1CustomerProfilesEvaluations` · Source: `Api/TrusthubV1CustomerProfilesEvaluations.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomerProfileEvaluation

- **Server group**: `Default9`
- **Signature**: `CreateCustomerProfileEvaluation(string customerProfileSid, string policySid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileEvaluation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1CustomerProfileCustomerProfileEvaluation` | `Models/TrusthubV1CustomerProfileCustomerProfileEvaluation.cs` |

### FetchCustomerProfileEvaluation

- **Server group**: `Default9`
- **Signature**: `FetchCustomerProfileEvaluation(string customerProfileSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileEvaluation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1CustomerProfileCustomerProfileEvaluation` | `Models/TrusthubV1CustomerProfileCustomerProfileEvaluation.cs` |

### ListCustomerProfileEvaluation

- **Server group**: `Default9`
- **Signature**: `ListCustomerProfileEvaluation(string customerProfileSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCustomerProfileEvaluationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListCustomerProfileEvaluationResponse` | `Models/ListCustomerProfileEvaluationResponse.cs` |

