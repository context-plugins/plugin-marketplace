<!-- Generated file — do not edit; regenerated with the SDK. -->

# Energy — operations

Accessor: `client.Energy` · Source: `src/DynamicFeed/Api/Energy.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### EnergyGridEnergyGet

- **Signature**: `EnergyGridEnergyGet(EnergyGridEnergyGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `region` ← `Region`, `metric` ← `Metric`
- **Returns**: `object`
- **Error**: `ApiException<EnergyGridEnergyGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnergyGridEnergyGetRequest` | `src/DynamicFeed/Requests/Energy/EnergyGridEnergyGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `EnergyGridEnergyGetError` | `src/DynamicFeed/Errors/EnergyGridEnergyGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

