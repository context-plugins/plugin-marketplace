<!-- Generated file — do not edit; regenerated with the SDK. -->

# TimeseriesservicestatisticsApi — operations

Accessor: `client.timeseriesservicestatisticsApi` · Source: `src/resources/timeseriesservicestatistics-api.ts` · 1 operation · Request and error types: namespace `TimeseriesservicestatisticsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTimeSeriesServiceStatistics

- **Signature**: `getTimeSeriesServiceStatistics(request?: TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsRequest, options?: RequestOptions): ApiPromise<GetTimeSeriesServiceStatisticsResult, TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsError>`
- **Wire**: `POST /TimeSeriesServiceStatistics`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetTimeSeriesServiceStatisticsResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TimeSeriesServiceStatisticsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeSeriesServiceStatisticsRequest` | `timeSeriesServiceStatisticsRequestSchema` | `src/models/time-series-service-statistics-request.ts` |
| `GetTimeSeriesServiceStatisticsResult` | `getTimeSeriesServiceStatisticsResultSchema` | `src/models/get-time-series-service-statistics-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

