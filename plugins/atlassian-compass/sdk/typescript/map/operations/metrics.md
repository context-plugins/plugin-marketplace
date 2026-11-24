<!-- Generated file — do not edit; regenerated with the SDK. -->

# Metrics — operations

Accessor: `client.metrics` · Source: `src/resources/metrics.ts` · 1 operation · Request and error types: namespace `Metrics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `atlassian-compass`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### insertMetricValue

- **Signature**: `insertMetricValue(request: Metrics.InsertMetricValueRequest, options?: RequestOptions): ApiPromise<InsertMetricResponseDto, Metrics.InsertMetricValueError>`
- **Wire**: `POST /compass/v1/metrics`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsertMetricResponseDto`
- **Error**: `AtlassianCompassError` with `kind: "api"`, an instance of `Metrics.InsertMetricValueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseDto"` [400] `ErrorResponseDto` · `"errorResponseDto2"` [403] `ErrorResponseDto` · `"errorResponseDto3"` [404] `ErrorResponseDto` · `"insertMetricResponseDto"` [429] `InsertMetricResponseDto` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Metrics.InsertMetricValueRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompassV1MetricsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompassV1MetricsRequest` | `compassV1MetricsRequestSchema` | `src/models/unions/compass-v1-metrics-request.ts` |
| `InsertMetricResponseDto` | `insertMetricResponseDtoSchema` | `src/models/insert-metric-response-dto.ts` |
| `ErrorResponseDto` | `errorResponseDtoSchema` | `src/models/error-response-dto.ts` |

