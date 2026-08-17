<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1Annotation — operations

Accessor: `client.InsightsV1Annotation` · Source: `Api/InsightsV1Annotation.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchAnnotation

- **Server group**: `Default14`
- **Signature**: `FetchAnnotation(string callSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `InsightsV1CallAnnotation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InsightsV1CallAnnotation` | `Models/InsightsV1CallAnnotation.cs` |

### UpdateAnnotation

- **Server group**: `Default14`
- **Signature**: `UpdateAnnotation(string callSid, AnnotationEnumAnsweredBy? answeredBy, AnnotationEnumConnectivityIssue? connectivityIssue, string? qualityIssues, bool? spam, int? callScore, string? comment, string? incident, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`answeredBy` … `incident`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `InsightsV1CallAnnotation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AnnotationEnumAnsweredBy` | `Models/Enums/AnnotationEnumAnsweredBy.cs` |
| `AnnotationEnumConnectivityIssue` | `Models/Enums/AnnotationEnumConnectivityIssue.cs` |
| `InsightsV1CallAnnotation` | `Models/InsightsV1CallAnnotation.cs` |

