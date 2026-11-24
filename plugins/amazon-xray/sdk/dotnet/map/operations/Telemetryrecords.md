<!-- Generated file — do not edit; regenerated with the SDK. -->

# Telemetryrecords — operations

Accessor: `client.Telemetryrecords` · Source: `src/AwsXRay/Api/Telemetryrecords.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PutTelemetryRecords

- **Auth**: `options.Sigv4`
- **Signature**: `PutTelemetryRecords(PutTelemetryRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<PutTelemetryRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutTelemetryRecordsRequest` | `src/AwsXRay/Requests/Telemetryrecords/PutTelemetryRecordsRequest.cs` |
| `TelemetryRecordsRequest` | `src/AwsXRay/Models/TelemetryRecordsRequest.cs` |
| `PutTelemetryRecordsError` | `src/AwsXRay/Errors/PutTelemetryRecordsError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

