<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agent — operations

Accessor: `client.Agent` · Source: `src/DynamicFeed/Api/Agent.cs` · 61 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostV1Explain

- **Signature**: `PostV1Explain(PostV1ExplainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `subject` ← `Subject`
- **Returns**: `object`
- **Error**: `ApiException<PostV1ExplainError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostV1ExplainRequest` | `src/DynamicFeed/Requests/Agent/PostV1ExplainRequest.cs` |
| `PostV1ExplainError` | `src/DynamicFeed/Errors/PostV1ExplainError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### SchemasIndexSchemasIndexJsonGet

- **Signature**: `SchemasIndexSchemasIndexJsonGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1AgentReceiptV1AgentReceiptPost

- **Signature**: `V1AgentReceiptV1AgentReceiptPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1AsofV1AsofGet

- **Signature**: `V1AsofV1AsofGet(V1AsofV1AsofGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Tool`, `T`
- **Query params (wire ← C#)**: `tool` ← `Tool`, `t` ← `T`
- **Returns**: `object`
- **Error**: `ApiException<V1AsofV1AsofGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1AsofV1AsofGetRequest` | `src/DynamicFeed/Requests/Agent/V1AsofV1AsofGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1AsofV1AsofGetError` | `src/DynamicFeed/Errors/V1AsofV1AsofGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1AttestV1AttestGet

- **Signature**: `V1AttestV1AttestGet(V1AttestV1AttestGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Metric`, `Threshold`
- **Query params (wire ← C#)**: `metric` ← `Metric`, `threshold` ← `Threshold`, `op` ← `Op`, `lat` ← `Lat`, `lon` ← `Lon`, `city` ← `City`
- **Returns**: `object`
- **Error**: `ApiException<V1AttestV1AttestGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1AttestV1AttestGetRequest` | `src/DynamicFeed/Requests/Agent/V1AttestV1AttestGetRequest.cs` |
| `V1AttestV1AttestGetError` | `src/DynamicFeed/Errors/V1AttestV1AttestGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1BatchV1BatchPost

- **Signature**: `V1BatchV1BatchPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1BenchmarkHistoryV1BenchmarkHistoryGet

- **Signature**: `V1BenchmarkHistoryV1BenchmarkHistoryGet(V1BenchmarkHistoryV1BenchmarkHistoryGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `days` ← `Days`
- **Returns**: `object`
- **Error**: `ApiException<V1BenchmarkHistoryV1BenchmarkHistoryGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1BenchmarkHistoryV1BenchmarkHistoryGetRequest` | `src/DynamicFeed/Requests/Agent/V1BenchmarkHistoryV1BenchmarkHistoryGetRequest.cs` |
| `V1BenchmarkHistoryV1BenchmarkHistoryGetError` | `src/DynamicFeed/Errors/V1BenchmarkHistoryV1BenchmarkHistoryGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1BenchmarkV1BenchmarkGet

- **Signature**: `V1BenchmarkV1BenchmarkGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1BundleV1BundlesBundleIdGet

- **Signature**: `V1BundleV1BundlesBundleIdGet(V1BundleV1BundlesBundleIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BundleId`
- **Returns**: `object`
- **Error**: `ApiException<V1BundleV1BundlesBundleIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1BundleV1BundlesBundleIdGetRequest` | `src/DynamicFeed/Requests/Agent/V1BundleV1BundlesBundleIdGetRequest.cs` |
| `V1BundleV1BundlesBundleIdGetError` | `src/DynamicFeed/Errors/V1BundleV1BundlesBundleIdGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1BundlesV1BundlesGet

- **Signature**: `V1BundlesV1BundlesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1BushfireV1BushfireGet

- **Signature**: `V1BushfireV1BushfireGet(V1BushfireV1BushfireGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lon` ← `Lon`, `radius_km` ← `RadiusKm`, `state` ← `State`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<V1BushfireV1BushfireGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1BushfireV1BushfireGetRequest` | `src/DynamicFeed/Requests/Agent/V1BushfireV1BushfireGetRequest.cs` |
| `V1BushfireV1BushfireGetError` | `src/DynamicFeed/Errors/V1BushfireV1BushfireGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1CheckpointProofV1CheckpointsDayProofGet

- **Signature**: `V1CheckpointProofV1CheckpointsDayProofGet(V1CheckpointProofV1CheckpointsDayProofGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Day`
- **Query params (wire ← C#)**: `kind` ← `Kind`
- **Returns**: `object`
- **Error**: `ApiException<V1CheckpointProofV1CheckpointsDayProofGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1CheckpointProofV1CheckpointsDayProofGetRequest` | `src/DynamicFeed/Requests/Agent/V1CheckpointProofV1CheckpointsDayProofGetRequest.cs` |
| `V1CheckpointProofV1CheckpointsDayProofGetError` | `src/DynamicFeed/Errors/V1CheckpointProofV1CheckpointsDayProofGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1CheckpointsV1CheckpointsGet

- **Signature**: `V1CheckpointsV1CheckpointsGet(V1CheckpointsV1CheckpointsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<V1CheckpointsV1CheckpointsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1CheckpointsV1CheckpointsGetRequest` | `src/DynamicFeed/Requests/Agent/V1CheckpointsV1CheckpointsGetRequest.cs` |
| `V1CheckpointsV1CheckpointsGetError` | `src/DynamicFeed/Errors/V1CheckpointsV1CheckpointsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1DiscoverGetV1DiscoverGet

- **Signature**: `V1DiscoverGetV1DiscoverGet(V1DiscoverGetV1DiscoverGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `need` ← `Need`, `limit` ← `Limit`, `external` ← `External`
- **Returns**: `object`
- **Error**: `ApiException<V1DiscoverGetV1DiscoverGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1DiscoverGetV1DiscoverGetRequest` | `src/DynamicFeed/Requests/Agent/V1DiscoverGetV1DiscoverGetRequest.cs` |
| `V1DiscoverGetV1DiscoverGetError` | `src/DynamicFeed/Errors/V1DiscoverGetV1DiscoverGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1DiscoverPostV1DiscoverPost

- **Signature**: `V1DiscoverPostV1DiscoverPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1DriftV1DriftPost

- **Signature**: `V1DriftV1DriftPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1EvalReceiptSampleV1EvalReceiptSampleGet

- **Signature**: `V1EvalReceiptSampleV1EvalReceiptSampleGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1EvalReceiptV1EvalReceiptPost

- **Signature**: `V1EvalReceiptV1EvalReceiptPost(V1EvalReceiptV1EvalReceiptPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1EvalReceiptV1EvalReceiptPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1EvalReceiptV1EvalReceiptPostRequest` | `src/DynamicFeed/Requests/Agent/V1EvalReceiptV1EvalReceiptPostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1EvalReceiptV1EvalReceiptPostError` | `src/DynamicFeed/Errors/V1EvalReceiptV1EvalReceiptPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1EvidenceWildfireV1EvidenceWildfireGet

- **Signature**: `V1EvidenceWildfireV1EvidenceWildfireGet(V1EvidenceWildfireV1EvidenceWildfireGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat`, `Lon`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lon` ← `Lon`, `detected_at` ← `DetectedAt`, `detector` ← `Detector`, `place` ← `Place`, `confidence` ← `Confidence`
- **Returns**: `object`
- **Error**: `ApiException<V1EvidenceWildfireV1EvidenceWildfireGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1EvidenceWildfireV1EvidenceWildfireGetRequest` | `src/DynamicFeed/Requests/Agent/V1EvidenceWildfireV1EvidenceWildfireGetRequest.cs` |
| `DetectedAt` | `src/DynamicFeed/Models/AnyOf/DetectedAt.cs` |
| `Place` | `src/DynamicFeed/Models/AnyOf/Place.cs` |
| `Confidence` | `src/DynamicFeed/Models/AnyOf/Confidence.cs` |
| `V1EvidenceWildfireV1EvidenceWildfireGetError` | `src/DynamicFeed/Errors/V1EvidenceWildfireV1EvidenceWildfireGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1ExplainV1ExplainGet

- **Signature**: `V1ExplainV1ExplainGet(V1ExplainV1ExplainGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `subject` ← `Subject`
- **Returns**: `object`
- **Error**: `ApiException<V1ExplainV1ExplainGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1ExplainV1ExplainGetRequest` | `src/DynamicFeed/Requests/Agent/V1ExplainV1ExplainGetRequest.cs` |
| `V1ExplainV1ExplainGetError` | `src/DynamicFeed/Errors/V1ExplainV1ExplainGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1ExposureReportV1ExposureReportGet

- **Signature**: `V1ExposureReportV1ExposureReportGet(V1ExposureReportV1ExposureReportGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `perils` ← `Perils`, `lat` ← `Lat`, `lon` ← `Lon`, `place` ← `Place`, `organisation` ← `Organisation`, `use_case` ← `UseCase`
- **Returns**: `object`
- **Error**: `ApiException<V1ExposureReportV1ExposureReportGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1ExposureReportV1ExposureReportGetRequest` | `src/DynamicFeed/Requests/Agent/V1ExposureReportV1ExposureReportGetRequest.cs` |
| `Place` | `src/DynamicFeed/Models/AnyOf/Place.cs` |
| `Organisation` | `src/DynamicFeed/Models/AnyOf/Organisation.cs` |
| `UseCase` | `src/DynamicFeed/Models/AnyOf/UseCase.cs` |
| `V1ExposureReportV1ExposureReportGetError` | `src/DynamicFeed/Errors/V1ExposureReportV1ExposureReportGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1GuardV1GuardPost

- **Signature**: `V1GuardV1GuardPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1IndexV1Get

- **Signature**: `V1IndexV1Get(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1InferenceReceiptSampleV1InferenceReceiptSampleGet

- **Signature**: `V1InferenceReceiptSampleV1InferenceReceiptSampleGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1InferenceReceiptV1InferenceReceiptPost

- **Signature**: `V1InferenceReceiptV1InferenceReceiptPost(V1InferenceReceiptV1InferenceReceiptPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1InferenceReceiptV1InferenceReceiptPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1InferenceReceiptV1InferenceReceiptPostRequest` | `src/DynamicFeed/Requests/Agent/V1InferenceReceiptV1InferenceReceiptPostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1InferenceReceiptV1InferenceReceiptPostError` | `src/DynamicFeed/Errors/V1InferenceReceiptV1InferenceReceiptPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1IntensityV1IntensityGet

- **Signature**: `V1IntensityV1IntensityGet(V1IntensityV1IntensityGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat`, `Lon`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lon` ← `Lon`, `peril` ← `Peril`, `metric` ← `Metric`
- **Returns**: `object`
- **Error**: `ApiException<V1IntensityV1IntensityGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1IntensityV1IntensityGetRequest` | `src/DynamicFeed/Requests/Agent/V1IntensityV1IntensityGetRequest.cs` |
| `V1IntensityV1IntensityGetError` | `src/DynamicFeed/Errors/V1IntensityV1IntensityGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1MeV1MeGet

- **Signature**: `V1MeV1MeGet(V1MeV1MeGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1MeV1MeGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1MeV1MeGetRequest` | `src/DynamicFeed/Requests/Agent/V1MeV1MeGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1MeV1MeGetError` | `src/DynamicFeed/Errors/V1MeV1MeGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1NearbyV1NearbyGet

- **Signature**: `V1NearbyV1NearbyGet(V1NearbyV1NearbyGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat`, `Lon`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lon` ← `Lon`, `radius_km` ← `RadiusKm`
- **Returns**: `object`
- **Error**: `ApiException<V1NearbyV1NearbyGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1NearbyV1NearbyGetRequest` | `src/DynamicFeed/Requests/Agent/V1NearbyV1NearbyGetRequest.cs` |
| `V1NearbyV1NearbyGetError` | `src/DynamicFeed/Errors/V1NearbyV1NearbyGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1NotarizeV1NotarizePost

- **Signature**: `V1NotarizeV1NotarizePost(V1NotarizeV1NotarizePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1NotarizeV1NotarizePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1NotarizeV1NotarizePostRequest` | `src/DynamicFeed/Requests/Agent/V1NotarizeV1NotarizePostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1NotarizeV1NotarizePostError` | `src/DynamicFeed/Errors/V1NotarizeV1NotarizePostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1NotaryEntryV1NotaryLogIdxGet

- **Signature**: `V1NotaryEntryV1NotaryLogIdxGet(V1NotaryEntryV1NotaryLogIdxGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Idx`
- **Returns**: `object`
- **Error**: `ApiException<V1NotaryEntryV1NotaryLogIdxGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1NotaryEntryV1NotaryLogIdxGetRequest` | `src/DynamicFeed/Requests/Agent/V1NotaryEntryV1NotaryLogIdxGetRequest.cs` |
| `V1NotaryEntryV1NotaryLogIdxGetError` | `src/DynamicFeed/Errors/V1NotaryEntryV1NotaryLogIdxGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1NotaryFeedRegisterV1NotaryFeedsPost

- **Signature**: `V1NotaryFeedRegisterV1NotaryFeedsPost(V1NotaryFeedRegisterV1NotaryFeedsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1NotaryFeedRegisterV1NotaryFeedsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1NotaryFeedRegisterV1NotaryFeedsPostRequest` | `src/DynamicFeed/Requests/Agent/V1NotaryFeedRegisterV1NotaryFeedsPostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1NotaryFeedRegisterV1NotaryFeedsPostError` | `src/DynamicFeed/Errors/V1NotaryFeedRegisterV1NotaryFeedsPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1NotaryFeedsListV1NotaryFeedsGet

- **Signature**: `V1NotaryFeedsListV1NotaryFeedsGet(V1NotaryFeedsListV1NotaryFeedsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1NotaryFeedsListV1NotaryFeedsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1NotaryFeedsListV1NotaryFeedsGetRequest` | `src/DynamicFeed/Requests/Agent/V1NotaryFeedsListV1NotaryFeedsGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1NotaryFeedsListV1NotaryFeedsGetError` | `src/DynamicFeed/Errors/V1NotaryFeedsListV1NotaryFeedsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1NotaryHeadV1NotaryLogHeadGet

- **Signature**: `V1NotaryHeadV1NotaryLogHeadGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1NotaryLogV1NotaryLogGet

- **Signature**: `V1NotaryLogV1NotaryLogGet(V1NotaryLogV1NotaryLogGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `before` ← `Before`
- **Returns**: `object`
- **Error**: `ApiException<V1NotaryLogV1NotaryLogGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1NotaryLogV1NotaryLogGetRequest` | `src/DynamicFeed/Requests/Agent/V1NotaryLogV1NotaryLogGetRequest.cs` |
| `V1NotaryLogV1NotaryLogGetError` | `src/DynamicFeed/Errors/V1NotaryLogV1NotaryLogGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1NotaryProofV1NotaryLogIdxProofGet

- **Signature**: `V1NotaryProofV1NotaryLogIdxProofGet(V1NotaryProofV1NotaryLogIdxProofGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Idx`
- **Returns**: `object`
- **Error**: `ApiException<V1NotaryProofV1NotaryLogIdxProofGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1NotaryProofV1NotaryLogIdxProofGetRequest` | `src/DynamicFeed/Requests/Agent/V1NotaryProofV1NotaryLogIdxProofGetRequest.cs` |
| `V1NotaryProofV1NotaryLogIdxProofGetError` | `src/DynamicFeed/Errors/V1NotaryProofV1NotaryLogIdxProofGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1ProAsofV1ProAsofPost

- **Signature**: `V1ProAsofV1ProAsofPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1ProBatchV1ProBatchPost

- **Signature**: `V1ProBatchV1ProBatchPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1ProCatalogV1ProCatalogGet

- **Signature**: `V1ProCatalogV1ProCatalogGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1ProToolDiscoverV1ProToolToolGet

- **Signature**: `V1ProToolDiscoverV1ProToolToolGet(V1ProToolDiscoverV1ProToolToolGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Tool`
- **Returns**: `object`
- **Error**: `ApiException<V1ProToolDiscoverV1ProToolToolGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1ProToolDiscoverV1ProToolToolGetRequest` | `src/DynamicFeed/Requests/Agent/V1ProToolDiscoverV1ProToolToolGetRequest.cs` |
| `V1ProToolDiscoverV1ProToolToolGetError` | `src/DynamicFeed/Errors/V1ProToolDiscoverV1ProToolToolGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1ProToolV1ProToolToolPost

- **Signature**: `V1ProToolV1ProToolToolPost(V1ProToolV1ProToolToolPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Tool`
- **Returns**: `object`
- **Error**: `ApiException<V1ProToolV1ProToolToolPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1ProToolV1ProToolToolPostRequest` | `src/DynamicFeed/Requests/Agent/V1ProToolV1ProToolToolPostRequest.cs` |
| `V1ProToolV1ProToolToolPostError` | `src/DynamicFeed/Errors/V1ProToolV1ProToolToolPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1ProxyWitnessV1ProxyWitnessPost

- **Signature**: `V1ProxyWitnessV1ProxyWitnessPost(V1ProxyWitnessV1ProxyWitnessPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1ProxyWitnessV1ProxyWitnessPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1ProxyWitnessV1ProxyWitnessPostRequest` | `src/DynamicFeed/Requests/Agent/V1ProxyWitnessV1ProxyWitnessPostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1ProxyWitnessV1ProxyWitnessPostError` | `src/DynamicFeed/Errors/V1ProxyWitnessV1ProxyWitnessPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1ReceiptV1ReceiptPost

- **Signature**: `V1ReceiptV1ReceiptPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1SnapshotV1SnapshotGet

- **Signature**: `V1SnapshotV1SnapshotGet(V1SnapshotV1SnapshotGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `object`
- **Error**: `ApiException<V1SnapshotV1SnapshotGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1SnapshotV1SnapshotGetRequest` | `src/DynamicFeed/Requests/Agent/V1SnapshotV1SnapshotGetRequest.cs` |
| `V1SnapshotV1SnapshotGetError` | `src/DynamicFeed/Errors/V1SnapshotV1SnapshotGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1SourcesV1SourcesGet

- **Signature**: `V1SourcesV1SourcesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1StampV1StampPost

- **Signature**: `V1StampV1StampPost(V1StampV1StampPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1StampV1StampPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1StampV1StampPostRequest` | `src/DynamicFeed/Requests/Agent/V1StampV1StampPostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `V1StampV1StampPostError` | `src/DynamicFeed/Errors/V1StampV1StampPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1StationGetV1StationStationIdGet

- **Signature**: `V1StationGetV1StationStationIdGet(V1StationGetV1StationStationIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StationId`
- **Returns**: `object`
- **Error**: `ApiException<V1StationGetV1StationStationIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1StationGetV1StationStationIdGetRequest` | `src/DynamicFeed/Requests/Agent/V1StationGetV1StationStationIdGetRequest.cs` |
| `V1StationGetV1StationStationIdGetError` | `src/DynamicFeed/Errors/V1StationGetV1StationStationIdGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1StationReadingV1StationReadingPost

- **Signature**: `V1StationReadingV1StationReadingPost(V1StationReadingV1StationReadingPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1StationReadingV1StationReadingPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1StationReadingV1StationReadingPostRequest` | `src/DynamicFeed/Requests/Agent/V1StationReadingV1StationReadingPostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1StationReadingV1StationReadingPostError` | `src/DynamicFeed/Errors/V1StationReadingV1StationReadingPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1StationRegisterV1StationRegisterPost

- **Signature**: `V1StationRegisterV1StationRegisterPost(V1StationRegisterV1StationRegisterPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1StationRegisterV1StationRegisterPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1StationRegisterV1StationRegisterPostRequest` | `src/DynamicFeed/Requests/Agent/V1StationRegisterV1StationRegisterPostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1StationRegisterV1StationRegisterPostError` | `src/DynamicFeed/Errors/V1StationRegisterV1StationRegisterPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1StreamV1StreamGet

- **Signature**: `V1StreamV1StreamGet(V1StreamV1StreamGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `tool` ← `Tool`, `args` ← `Args`, `interval` ← `Interval`, `count` ← `Count`
- **Returns**: `object`
- **Error**: `ApiException<V1StreamV1StreamGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1StreamV1StreamGetRequest` | `src/DynamicFeed/Requests/Agent/V1StreamV1StreamGetRequest.cs` |
| `V1StreamV1StreamGetError` | `src/DynamicFeed/Errors/V1StreamV1StreamGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1TriggerReceiptV1TriggerReceiptGet

- **Signature**: `V1TriggerReceiptV1TriggerReceiptGet(V1TriggerReceiptV1TriggerReceiptGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Metric`, `Threshold`
- **Query params (wire ← C#)**: `metric` ← `Metric`, `threshold` ← `Threshold`, `op` ← `Op`, `lat` ← `Lat`, `lon` ← `Lon`, `city` ← `City`, `peril` ← `Peril`, `contract_ref` ← `ContractRef`, `methodology` ← `Methodology`
- **Returns**: `object`
- **Error**: `ApiException<V1TriggerReceiptV1TriggerReceiptGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1TriggerReceiptV1TriggerReceiptGetRequest` | `src/DynamicFeed/Requests/Agent/V1TriggerReceiptV1TriggerReceiptGetRequest.cs` |
| `V1TriggerReceiptV1TriggerReceiptGetError` | `src/DynamicFeed/Errors/V1TriggerReceiptV1TriggerReceiptGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1VcV1VcPost

- **Signature**: `V1VcV1VcPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1WatchlistDeleteV1WatchlistDelete

- **Signature**: `V1WatchlistDeleteV1WatchlistDelete(V1WatchlistDeleteV1WatchlistDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `label` ← `Label`
- **Returns**: `object`
- **Error**: `ApiException<V1WatchlistDeleteV1WatchlistDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1WatchlistDeleteV1WatchlistDeleteRequest` | `src/DynamicFeed/Requests/Agent/V1WatchlistDeleteV1WatchlistDeleteRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1WatchlistDeleteV1WatchlistDeleteError` | `src/DynamicFeed/Errors/V1WatchlistDeleteV1WatchlistDeleteError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1WatchlistGetV1WatchlistGet

- **Signature**: `V1WatchlistGetV1WatchlistGet(V1WatchlistGetV1WatchlistGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `pull` ← `Pull`
- **Returns**: `object`
- **Error**: `ApiException<V1WatchlistGetV1WatchlistGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1WatchlistGetV1WatchlistGetRequest` | `src/DynamicFeed/Requests/Agent/V1WatchlistGetV1WatchlistGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1WatchlistGetV1WatchlistGetError` | `src/DynamicFeed/Errors/V1WatchlistGetV1WatchlistGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1WatchlistPostV1WatchlistPost

- **Signature**: `V1WatchlistPostV1WatchlistPost(V1WatchlistPostV1WatchlistPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1WatchlistPostV1WatchlistPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1WatchlistPostV1WatchlistPostRequest` | `src/DynamicFeed/Requests/Agent/V1WatchlistPostV1WatchlistPostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1WatchlistPostV1WatchlistPostError` | `src/DynamicFeed/Errors/V1WatchlistPostV1WatchlistPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1WebhooksCreateV1WebhooksPost

- **Signature**: `V1WebhooksCreateV1WebhooksPost(V1WebhooksCreateV1WebhooksPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1WebhooksCreateV1WebhooksPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1WebhooksCreateV1WebhooksPostRequest` | `src/DynamicFeed/Requests/Agent/V1WebhooksCreateV1WebhooksPostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1WebhooksCreateV1WebhooksPostError` | `src/DynamicFeed/Errors/V1WebhooksCreateV1WebhooksPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1WebhooksDeleteV1WebhooksDelete

- **Signature**: `V1WebhooksDeleteV1WebhooksDelete(V1WebhooksDeleteV1WebhooksDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `id` ← `Id`
- **Returns**: `object`
- **Error**: `ApiException<V1WebhooksDeleteV1WebhooksDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1WebhooksDeleteV1WebhooksDeleteRequest` | `src/DynamicFeed/Requests/Agent/V1WebhooksDeleteV1WebhooksDeleteRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1WebhooksDeleteV1WebhooksDeleteError` | `src/DynamicFeed/Errors/V1WebhooksDeleteV1WebhooksDeleteError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1WebhooksListV1WebhooksGet

- **Signature**: `V1WebhooksListV1WebhooksGet(V1WebhooksListV1WebhooksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1WebhooksListV1WebhooksGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1WebhooksListV1WebhooksGetRequest` | `src/DynamicFeed/Requests/Agent/V1WebhooksListV1WebhooksGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1WebhooksListV1WebhooksGetError` | `src/DynamicFeed/Errors/V1WebhooksListV1WebhooksGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1WebhooksTestV1WebhooksTestPost

- **Signature**: `V1WebhooksTestV1WebhooksTestPost(V1WebhooksTestV1WebhooksTestPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1WebhooksTestV1WebhooksTestPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1WebhooksTestV1WebhooksTestPostRequest` | `src/DynamicFeed/Requests/Agent/V1WebhooksTestV1WebhooksTestPostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1WebhooksTestV1WebhooksTestPostError` | `src/DynamicFeed/Errors/V1WebhooksTestV1WebhooksTestPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1WitnessInclusionV1WitnessIdxInclusionGet

- **Signature**: `V1WitnessInclusionV1WitnessIdxInclusionGet(V1WitnessInclusionV1WitnessIdxInclusionGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Idx`
- **Returns**: `object`
- **Error**: `ApiException<V1WitnessInclusionV1WitnessIdxInclusionGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1WitnessInclusionV1WitnessIdxInclusionGetRequest` | `src/DynamicFeed/Requests/Agent/V1WitnessInclusionV1WitnessIdxInclusionGetRequest.cs` |
| `V1WitnessInclusionV1WitnessIdxInclusionGetError` | `src/DynamicFeed/Errors/V1WitnessInclusionV1WitnessIdxInclusionGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1WitnessSampleV1WitnessSampleGet

- **Signature**: `V1WitnessSampleV1WitnessSampleGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1WitnessV1WitnessPost

- **Signature**: `V1WitnessV1WitnessPost(V1WitnessV1WitnessPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1WitnessV1WitnessPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1WitnessV1WitnessPostRequest` | `src/DynamicFeed/Requests/Agent/V1WitnessV1WitnessPostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1WitnessV1WitnessPostError` | `src/DynamicFeed/Errors/V1WitnessV1WitnessPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

