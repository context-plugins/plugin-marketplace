<!-- Generated file — do not edit; regenerated with the SDK. -->

# WhatIfForecast — operations

Accessor: `client.whatIfForecast` · Source: `src/resources/what-if-forecast.ts` · 4 operations · Request and error types: namespace `WhatIfForecast`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWhatIfForecast

- **Signature**: `createWhatIfForecast(request: WhatIfForecast.CreateWhatIfForecastRequestParams, options?: RequestOptions): ApiPromise<undefined, WhatIfForecast.CreateWhatIfForecastError>`
- **Wire**: `POST /#CreateWhatIfForecast`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `WhatIfForecast.CreateWhatIfForecastError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WhatIfForecast.CreateWhatIfForecastRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceWhatIfForecastApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceWhatIfForecastApi` | `xAmzTargetAmazonForecastServiceWhatIfForecastApiSchema` | `src/models/xamz-target-amazon-forecast-service-what-if-forecast-api.ts` |

### deleteWhatIfForecast

- **Signature**: `deleteWhatIfForecast(request: WhatIfForecast.DeleteWhatIfForecastRequestParams, options?: RequestOptions): ApiPromise<undefined, WhatIfForecast.DeleteWhatIfForecastError>`
- **Wire**: `POST /#DeleteWhatIfForecast`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `WhatIfForecast.DeleteWhatIfForecastError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WhatIfForecast.DeleteWhatIfForecastRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServiceWhatIfForecastApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServiceWhatIfForecastApi` | `xAmzTarget1AmazonForecastServiceWhatIfForecastApiSchema` | `src/models/xamz-target1-amazon-forecast-service-what-if-forecast-api.ts` |

### describeWhatIfForecast

- **Signature**: `describeWhatIfForecast(request: WhatIfForecast.DescribeWhatIfForecastRequestParams, options?: RequestOptions): ApiPromise<undefined, WhatIfForecast.DescribeWhatIfForecastError>`
- **Wire**: `POST /#DescribeWhatIfForecast`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `WhatIfForecast.DescribeWhatIfForecastError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WhatIfForecast.DescribeWhatIfForecastRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServiceWhatIfForecastApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServiceWhatIfForecastApi` | `xAmzTarget2AmazonForecastServiceWhatIfForecastApiSchema` | `src/models/xamz-target2-amazon-forecast-service-what-if-forecast-api.ts` |

### listWhatIfForecasts

- **Signature**: `listWhatIfForecasts(request: WhatIfForecast.ListWhatIfForecastsRequestParams, options?: RequestOptions): ApiPromise<undefined, WhatIfForecast.ListWhatIfForecastsError>`
- **Wire**: `POST /#ListWhatIfForecasts`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `WhatIfForecast.ListWhatIfForecastsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WhatIfForecast.ListWhatIfForecastsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonForecastServiceWhatIfForecastApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonForecastServiceWhatIfForecastApi` | `xAmzTarget3AmazonForecastServiceWhatIfForecastApiSchema` | `src/models/xamz-target3-amazon-forecast-service-what-if-forecast-api.ts` |

