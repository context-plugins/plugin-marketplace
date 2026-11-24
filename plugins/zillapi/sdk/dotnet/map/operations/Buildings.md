<!-- Generated file — do not edit; regenerated with the SDK. -->

# Buildings — operations

Accessor: `client.Buildings` · Source: `src/Zillapi/Api/Buildings.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBuildingByUrl

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBuildingByUrl(GetBuildingByUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Url`
- **Query params (wire ← C#)**: `url` ← `Url`, `include_units` ← `IncludeUnits`, `sync` ← `Sync`
- **Returns**: `V1BuildingsByUrlResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBuildingByUrlRequest` | `src/Zillapi/Requests/Buildings/GetBuildingByUrlRequest.cs` |
| `IncludeUnits` | `src/Zillapi/Models/Enums/IncludeUnits.cs` |
| `V1BuildingsByUrlResponse` | `src/Zillapi/Models/V1BuildingsByUrlResponse.cs` |

