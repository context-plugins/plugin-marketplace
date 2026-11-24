<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insightimpactgraph — operations

Accessor: `client.Insightimpactgraph` · Source: `src/AwsXRay/Api/Insightimpactgraph.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetInsightImpactGraph

- **Auth**: `options.Sigv4`
- **Signature**: `GetInsightImpactGraph(GetInsightImpactGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetInsightImpactGraphResult`
- **Error**: `ApiException<GetInsightImpactGraphError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInsightImpactGraphRequest` | `src/AwsXRay/Requests/Insightimpactgraph/GetInsightImpactGraphRequest.cs` |
| `InsightImpactGraphRequest` | `src/AwsXRay/Models/InsightImpactGraphRequest.cs` |
| `GetInsightImpactGraphResult` | `src/AwsXRay/Models/GetInsightImpactGraphResult.cs` |
| `GetInsightImpactGraphError` | `src/AwsXRay/Errors/GetInsightImpactGraphError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

