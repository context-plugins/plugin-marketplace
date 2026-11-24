<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `src/resources/operations.ts` · 7 operations · Request and error types: namespace `Operations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAutoPredictor

- **Signature**: `createAutoPredictor(request: Operations.CreateAutoPredictorRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.CreateAutoPredictorError>`
- **Wire**: `POST /#CreateAutoPredictor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Operations.CreateAutoPredictorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.CreateAutoPredictorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServiceOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServiceOperationsApi` | `xAmzTarget1AmazonForecastServiceOperationsApiSchema` | `src/models/xamz-target1-amazon-forecast-service-operations-api.ts` |

### deleteResourceTree

- **Signature**: `deleteResourceTree(request: Operations.DeleteResourceTreeRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.DeleteResourceTreeError>`
- **Wire**: `POST /#DeleteResourceTree`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Operations.DeleteResourceTreeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DeleteResourceTreeRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonForecastServiceOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonForecastServiceOperationsApi` | `xAmzTarget3AmazonForecastServiceOperationsApiSchema` | `src/models/xamz-target3-amazon-forecast-service-operations-api.ts` |

### describeAutoPredictor

- **Signature**: `describeAutoPredictor(request: Operations.DescribeAutoPredictorRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.DescribeAutoPredictorError>`
- **Wire**: `POST /#DescribeAutoPredictor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Operations.DescribeAutoPredictorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DescribeAutoPredictorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServiceOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServiceOperationsApi` | `xAmzTarget2AmazonForecastServiceOperationsApiSchema` | `src/models/xamz-target2-amazon-forecast-service-operations-api.ts` |

### getAccuracyMetrics

- **Signature**: `getAccuracyMetrics(request: Operations.GetAccuracyMetricsRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.GetAccuracyMetricsError>`
- **Wire**: `POST /#GetAccuracyMetrics`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Operations.GetAccuracyMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.GetAccuracyMetricsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AmazonForecastServiceOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AmazonForecastServiceOperationsApi` | `xAmzTarget4AmazonForecastServiceOperationsApiSchema` | `src/models/xamz-target4-amazon-forecast-service-operations-api.ts` |

### listMonitorEvaluations

- **Signature**: `listMonitorEvaluations(request: Operations.ListMonitorEvaluationsRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.ListMonitorEvaluationsError>`
- **Wire**: `POST /#ListMonitorEvaluations`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Operations.ListMonitorEvaluationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ListMonitorEvaluationsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5` | `xAmzTarget5Schema` | `src/models/xamz-target5.ts` |

### listWhatIfAnalyses

- **Signature**: `listWhatIfAnalyses(request: Operations.ListWhatIfAnalysesRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.ListWhatIfAnalysesError>`
- **Wire**: `POST /#ListWhatIfAnalyses`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Operations.ListWhatIfAnalysesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ListWhatIfAnalysesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6` | `xAmzTarget6Schema` | `src/models/xamz-target6.ts` |

### resumeResource

- **Signature**: `resumeResource(request: Operations.ResumeResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.ResumeResourceError>`
- **Wire**: `POST /#ResumeResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Operations.ResumeResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ResumeResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceOperationsApi` | `xAmzTargetAmazonForecastServiceOperationsApiSchema` | `src/models/xamz-target-amazon-forecast-service-operations-api.ts` |

