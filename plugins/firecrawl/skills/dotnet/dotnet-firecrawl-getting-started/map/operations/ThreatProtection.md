<!-- Generated file — do not edit; regenerated with the SDK. -->

# ThreatProtection — operations

Accessor: `client.ThreatProtection` · Source: `Api/ThreatProtection.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetThreatProtection

- **Signature**: `GetThreatProtection(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TeamThreatProtectionResponse`
- **Error**: `SdkException<GetThreatProtectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TeamThreatProtectionResponse` | `Models/TeamThreatProtectionResponse.cs` |
| `GetThreatProtectionError` | `Errors/GetThreatProtectionError.cs` |

### UpdateThreatProtection

- **Signature**: `UpdateThreatProtection(TeamThreatProtectionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TeamThreatProtectionResponse`
- **Error**: `SdkException<UpdateThreatProtectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TeamThreatProtectionRequest` | `Models/TeamThreatProtectionRequest.cs` |
| `TeamThreatProtectionResponse` | `Models/TeamThreatProtectionResponse.cs` |
| `UpdateThreatProtectionError` | `Errors/UpdateThreatProtectionError.cs` |

