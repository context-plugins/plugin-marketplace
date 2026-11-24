<!-- Generated file — do not edit; regenerated with the SDK. -->

# Observation — operations

Accessor: `client.Observation` · Source: `src/HealthGorilla/Api/Observation.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchObservations

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchObservations(SearchObservationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `patient` ← `Patient`, `code` ← `Code`, `_count` ← `Count`
- **Returns**: `Bundle`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchObservationsRequest` | `src/HealthGorilla/Requests/Observation/SearchObservationsRequest.cs` |
| `Bundle` | `src/HealthGorilla/Models/Bundle.cs` |

