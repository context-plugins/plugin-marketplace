<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2Regulation — operations

Accessor: `client.NumbersV2Regulation` · Source: `Api/NumbersV2Regulation.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchRegulation

- **Server group**: `Default5`
- **Signature**: `FetchRegulation(string sid, bool? includeConstraints, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeConstraints` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `IncludeConstraints` ← `includeConstraints`
- **Returns**: `NumbersV2RegulatoryComplianceRegulation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceRegulation` | `Models/NumbersV2RegulatoryComplianceRegulation.cs` |

### ListRegulation

- **Server group**: `Default5`
- **Signature**: `ListRegulation(RegulationEnumEndUserType? endUserType, string? isoCountry, string? numberType, bool? includeConstraints, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`endUserType` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `EndUserType` ← `endUserType`, `IsoCountry` ← `isoCountry`, `NumberType` ← `numberType`, `IncludeConstraints` ← `includeConstraints`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRegulationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RegulationEnumEndUserType` | `Models/Enums/RegulationEnumEndUserType.cs` |
| `ListRegulationResponse` | `Models/ListRegulationResponse.cs` |

