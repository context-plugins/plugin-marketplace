<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insightevents — operations

Accessor: `client.Insightevents` · Source: `src/AwsXRay/Api/Insightevents.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetInsightEvents

- **Auth**: `options.Sigv4`
- **Signature**: `GetInsightEvents(GetInsightEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetInsightEventsResult`
- **Error**: `ApiException<GetInsightEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInsightEventsRequest` | `src/AwsXRay/Requests/Insightevents/GetInsightEventsRequest.cs` |
| `InsightEventsRequest` | `src/AwsXRay/Models/InsightEventsRequest.cs` |
| `GetInsightEventsResult` | `src/AwsXRay/Models/GetInsightEventsResult.cs` |
| `GetInsightEventsError` | `src/AwsXRay/Errors/GetInsightEventsError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

