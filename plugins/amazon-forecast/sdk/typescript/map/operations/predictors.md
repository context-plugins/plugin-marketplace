<!-- Generated file — do not edit; regenerated with the SDK. -->

# Predictors — operations

Accessor: `client.predictors` · Source: `src/resources/predictors.ts` · 4 operations · Request and error types: namespace `Predictors`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPredictor

- **Signature**: `createPredictor(request: Predictors.CreatePredictorRequestParams, options?: RequestOptions): ApiPromise<undefined, Predictors.CreatePredictorError>`
- **Wire**: `POST /#CreatePredictor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Predictors.CreatePredictorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Predictors.CreatePredictorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServicePredictorsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServicePredictorsApi` | `xAmzTargetAmazonForecastServicePredictorsApiSchema` | `src/models/xamz-target-amazon-forecast-service-predictors-api.ts` |

### deletePredictor

- **Signature**: `deletePredictor(request: Predictors.DeletePredictorRequestParams, options?: RequestOptions): ApiPromise<undefined, Predictors.DeletePredictorError>`
- **Wire**: `POST /#DeletePredictor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Predictors.DeletePredictorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Predictors.DeletePredictorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServicePredictorsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServicePredictorsApi` | `xAmzTarget1AmazonForecastServicePredictorsApiSchema` | `src/models/xamz-target1-amazon-forecast-service-predictors-api.ts` |

### describePredictor

- **Signature**: `describePredictor(request: Predictors.DescribePredictorRequestParams, options?: RequestOptions): ApiPromise<undefined, Predictors.DescribePredictorError>`
- **Wire**: `POST /#DescribePredictor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Predictors.DescribePredictorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Predictors.DescribePredictorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServicePredictorsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServicePredictorsApi` | `xAmzTarget2AmazonForecastServicePredictorsApiSchema` | `src/models/xamz-target2-amazon-forecast-service-predictors-api.ts` |

### listPredictors

- **Signature**: `listPredictors(request: Predictors.ListPredictorsRequestParams, options?: RequestOptions): ApiPromise<undefined, Predictors.ListPredictorsError>`
- **Wire**: `POST /#ListPredictors`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Predictors.ListPredictorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Predictors.ListPredictorsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonForecastServicePredictorsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonForecastServicePredictorsApi` | `xAmzTarget3AmazonForecastServicePredictorsApiSchema` | `src/models/xamz-target3-amazon-forecast-service-predictors-api.ts` |

