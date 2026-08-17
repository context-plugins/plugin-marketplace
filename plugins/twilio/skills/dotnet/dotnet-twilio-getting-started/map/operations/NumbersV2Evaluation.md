<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2Evaluation — operations

Accessor: `client.NumbersV2Evaluation` · Source: `Api/NumbersV2Evaluation.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEvaluation

- **Server group**: `Default5`
- **Signature**: `CreateEvaluation(string bundleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2RegulatoryComplianceBundleEvaluation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceBundleEvaluation` | `Models/NumbersV2RegulatoryComplianceBundleEvaluation.cs` |

### FetchEvaluation

- **Server group**: `Default5`
- **Signature**: `FetchEvaluation(string bundleSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2RegulatoryComplianceBundleEvaluation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceBundleEvaluation` | `Models/NumbersV2RegulatoryComplianceBundleEvaluation.cs` |

### ListEvaluation

- **Server group**: `Default5`
- **Signature**: `ListEvaluation(string bundleSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEvaluationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListEvaluationResponse` | `Models/ListEvaluationResponse.cs` |

