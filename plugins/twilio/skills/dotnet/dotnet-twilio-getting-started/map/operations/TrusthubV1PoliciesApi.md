<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1PoliciesApi — operations

Accessor: `client.TrusthubV1PoliciesApi` · Source: `Api/TrusthubV1PoliciesApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchPolicies

- **Server group**: `Default9`
- **Signature**: `FetchPolicies(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1Policies`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1Policies` | `Models/TrusthubV1Policies.cs` |

### ListPolicies

- **Server group**: `Default9`
- **Signature**: `ListPolicies(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListPoliciesResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPoliciesResponse` | `Models/ListPoliciesResponse.cs` |

