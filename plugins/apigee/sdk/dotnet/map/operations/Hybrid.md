<!-- Generated file — do not edit; regenerated with the SDK. -->

# Hybrid — operations

Accessor: `client.Hybrid` · Source: `src/Apigee/Api/Hybrid.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ApigeeHybridIssuersList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeHybridIssuersList(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GoogleCloudApigeeV1ListHybridIssuersResponse`
- **Error**: `ApiException<ApigeeHybridIssuersListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListHybridIssuersResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListHybridIssuersResponse.cs` |
| `ApigeeHybridIssuersListError` | `src/Apigee/Errors/ApigeeHybridIssuersListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

