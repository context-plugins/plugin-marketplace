<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sanctions — operations

Accessor: `client.Sanctions` · Source: `src/DynamicFeed/Api/Sanctions.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SanctionsScreenSanctionsGet

- **Signature**: `SanctionsScreenSanctionsGet(SanctionsScreenSanctionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`, `program` ← `Program`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<SanctionsScreenSanctionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SanctionsScreenSanctionsGetRequest` | `src/DynamicFeed/Requests/Sanctions/SanctionsScreenSanctionsGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `SanctionsScreenSanctionsGetError` | `src/DynamicFeed/Errors/SanctionsScreenSanctionsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

