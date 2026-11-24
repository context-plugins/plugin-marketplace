<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceQuotas — operations

Accessor: `client.ServiceQuotas` · Source: `src/DoiT/Api/ServiceQuotas.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListServiceQuotas

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListServiceQuotas(ListServiceQuotasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `cloudProvider` ← `CloudProvider`, `minUtilizationPercent` ← `MinUtilizationPercent`, `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`
- **Returns**: `ServiceQuotaList`
- **Error**: `ApiException<ListServiceQuotasError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListServiceQuotasRequest` | `src/DoiT/Requests/ServiceQuotas/ListServiceQuotasRequest.cs` |
| `CloudProvider1` | `src/DoiT/Models/Enums/CloudProvider1.cs` |
| `ServiceQuotaList` | `src/DoiT/Models/ServiceQuotaList.cs` |
| `ListServiceQuotasError` | `src/DoiT/Errors/ListServiceQuotasError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

