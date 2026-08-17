<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1TrustProductsEvaluations — operations

Accessor: `client.TrusthubV1TrustProductsEvaluations` · Source: `Api/TrusthubV1TrustProductsEvaluations.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTrustProductEvaluation

- **Server group**: `Default9`
- **Signature**: `CreateTrustProductEvaluation(string trustProductSid, string policySid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1TrustProductTrustProductEvaluation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1TrustProductTrustProductEvaluation` | `Models/TrusthubV1TrustProductTrustProductEvaluation.cs` |

### FetchTrustProductEvaluation

- **Server group**: `Default9`
- **Signature**: `FetchTrustProductEvaluation(string trustProductSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1TrustProductTrustProductEvaluation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1TrustProductTrustProductEvaluation` | `Models/TrusthubV1TrustProductTrustProductEvaluation.cs` |

### ListTrustProductEvaluation

- **Server group**: `Default9`
- **Signature**: `ListTrustProductEvaluation(string trustProductSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTrustProductEvaluationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListTrustProductEvaluationResponse` | `Models/ListTrustProductEvaluationResponse.cs` |

