<!-- Generated file — do not edit; regenerated with the SDK. -->

# Forecasts — operations

Accessor: `client.forecasts` · Source: `src/resources/forecasts.ts` · 4 operations · Request and error types: namespace `Forecasts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createForecast

- **Signature**: `createForecast(request: Forecasts.CreateForecastRequestParams, options?: RequestOptions): ApiPromise<undefined, Forecasts.CreateForecastError>`
- **Wire**: `POST /#CreateForecast`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Forecasts.CreateForecastError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Forecasts.CreateForecastRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceForecastsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceForecastsApi` | `xAmzTargetAmazonForecastServiceForecastsApiSchema` | `src/models/xamz-target-amazon-forecast-service-forecasts-api.ts` |

### deleteForecast

- **Signature**: `deleteForecast(request: Forecasts.DeleteForecastRequestParams, options?: RequestOptions): ApiPromise<undefined, Forecasts.DeleteForecastError>`
- **Wire**: `POST /#DeleteForecast`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Forecasts.DeleteForecastError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Forecasts.DeleteForecastRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServiceForecastsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServiceForecastsApi` | `xAmzTarget1AmazonForecastServiceForecastsApiSchema` | `src/models/xamz-target1-amazon-forecast-service-forecasts-api.ts` |

### describeForecast

- **Signature**: `describeForecast(request: Forecasts.DescribeForecastRequestParams, options?: RequestOptions): ApiPromise<undefined, Forecasts.DescribeForecastError>`
- **Wire**: `POST /#DescribeForecast`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Forecasts.DescribeForecastError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Forecasts.DescribeForecastRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServiceForecastsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServiceForecastsApi` | `xAmzTarget2AmazonForecastServiceForecastsApiSchema` | `src/models/xamz-target2-amazon-forecast-service-forecasts-api.ts` |

### listForecasts

- **Signature**: `listForecasts(request: Forecasts.ListForecastsRequestParams, options?: RequestOptions): ApiPromise<undefined, Forecasts.ListForecastsError>`
- **Wire**: `POST /#ListForecasts`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Forecasts.ListForecastsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Forecasts.ListForecastsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonForecastServiceForecastsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonForecastServiceForecastsApi` | `xAmzTarget3AmazonForecastServiceForecastsApiSchema` | `src/models/xamz-target3-amazon-forecast-service-forecasts-api.ts` |

