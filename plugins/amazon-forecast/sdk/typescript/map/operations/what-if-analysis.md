<!-- Generated file — do not edit; regenerated with the SDK. -->

# WhatIfAnalysis — operations

Accessor: `client.whatIfAnalysis` · Source: `src/resources/what-if-analysis.ts` · 3 operations · Request and error types: namespace `WhatIfAnalysis`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWhatIfAnalysis

- **Signature**: `createWhatIfAnalysis(request: WhatIfAnalysis.CreateWhatIfAnalysisRequestParams, options?: RequestOptions): ApiPromise<undefined, WhatIfAnalysis.CreateWhatIfAnalysisError>`
- **Wire**: `POST /#CreateWhatIfAnalysis`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `WhatIfAnalysis.CreateWhatIfAnalysisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WhatIfAnalysis.CreateWhatIfAnalysisRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceWhatIfAnalysisApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceWhatIfAnalysisApi` | `xAmzTargetAmazonForecastServiceWhatIfAnalysisApiSchema` | `src/models/xamz-target-amazon-forecast-service-what-if-analysis-api.ts` |

### deleteWhatIfAnalysis

- **Signature**: `deleteWhatIfAnalysis(request: WhatIfAnalysis.DeleteWhatIfAnalysisRequestParams, options?: RequestOptions): ApiPromise<undefined, WhatIfAnalysis.DeleteWhatIfAnalysisError>`
- **Wire**: `POST /#DeleteWhatIfAnalysis`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `WhatIfAnalysis.DeleteWhatIfAnalysisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WhatIfAnalysis.DeleteWhatIfAnalysisRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi` | `xAmzTarget1AmazonForecastServiceWhatIfAnalysisApiSchema` | `src/models/xamz-target1-amazon-forecast-service-what-if-analysis-api.ts` |

### describeWhatIfAnalysis

- **Signature**: `describeWhatIfAnalysis(request: WhatIfAnalysis.DescribeWhatIfAnalysisRequestParams, options?: RequestOptions): ApiPromise<undefined, WhatIfAnalysis.DescribeWhatIfAnalysisError>`
- **Wire**: `POST /#DescribeWhatIfAnalysis`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `WhatIfAnalysis.DescribeWhatIfAnalysisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WhatIfAnalysis.DescribeWhatIfAnalysisRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi` | `xAmzTarget2AmazonForecastServiceWhatIfAnalysisApiSchema` | `src/models/xamz-target2-amazon-forecast-service-what-if-analysis-api.ts` |

