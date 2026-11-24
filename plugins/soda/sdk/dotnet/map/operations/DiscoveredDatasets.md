<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiscoveredDatasets — operations

Accessor: `client.DiscoveredDatasets` · Source: `src/Soda/Api/DiscoveredDatasets.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1DiscoveredDatasets

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DiscoveredDatasets(GetApiV1DiscoveredDatasetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `datasourceId` ← `DatasourceId`, `page` ← `Page`, `search` ← `Search`, `size` ← `Size`
- **Returns**: `PublicApiDiscoveredDatasetsResponse`
- **Error**: `ApiException<GetApiV1DiscoveredDatasetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DiscoveredDatasetsRequest` | `src/Soda/Requests/DiscoveredDatasets/GetApiV1DiscoveredDatasetsRequest.cs` |
| `PublicApiDiscoveredDatasetsResponse` | `src/Soda/Models/PublicApiDiscoveredDatasetsResponse.cs` |
| `GetApiV1DiscoveredDatasetsError` | `src/Soda/Errors/GetApiV1DiscoveredDatasetsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

