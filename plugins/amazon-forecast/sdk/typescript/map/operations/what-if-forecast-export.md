<!-- Generated file — do not edit; regenerated with the SDK. -->

# WhatIfForecastExport — operations

Accessor: `client.whatIfForecastExport` · Source: `src/resources/what-if-forecast-export.ts` · 4 operations · Request and error types: namespace `WhatIfForecastExport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWhatIfForecastExport

- **Signature**: `createWhatIfForecastExport(request: WhatIfForecastExport.CreateWhatIfForecastExportRequestParams, options?: RequestOptions): ApiPromise<undefined, WhatIfForecastExport.CreateWhatIfForecastExportError>`
- **Wire**: `POST /#CreateWhatIfForecastExport`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `WhatIfForecastExport.CreateWhatIfForecastExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WhatIfForecastExport.CreateWhatIfForecastExportRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceWhatIfForecastExportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceWhatIfForecastExportApi` | `xAmzTargetAmazonForecastServiceWhatIfForecastExportApiSchema` | `src/models/xamz-target-amazon-forecast-service-what-if-forecast-export-api.ts` |

### deleteWhatIfForecastExport

- **Signature**: `deleteWhatIfForecastExport(request: WhatIfForecastExport.DeleteWhatIfForecastExportRequestParams, options?: RequestOptions): ApiPromise<undefined, WhatIfForecastExport.DeleteWhatIfForecastExportError>`
- **Wire**: `POST /#DeleteWhatIfForecastExport`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `WhatIfForecastExport.DeleteWhatIfForecastExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WhatIfForecastExport.DeleteWhatIfForecastExportRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi` | `xAmzTarget1AmazonForecastServiceWhatIfForecastExportApiSchema` | `src/models/xamz-target1-amazon-forecast-service-what-if-forecast-export-api.ts` |

### describeWhatIfForecastExport

- **Signature**: `describeWhatIfForecastExport(request: WhatIfForecastExport.DescribeWhatIfForecastExportRequestParams, options?: RequestOptions): ApiPromise<undefined, WhatIfForecastExport.DescribeWhatIfForecastExportError>`
- **Wire**: `POST /#DescribeWhatIfForecastExport`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `WhatIfForecastExport.DescribeWhatIfForecastExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WhatIfForecastExport.DescribeWhatIfForecastExportRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi` | `xAmzTarget2AmazonForecastServiceWhatIfForecastExportApiSchema` | `src/models/xamz-target2-amazon-forecast-service-what-if-forecast-export-api.ts` |

### listWhatIfForecastExports

- **Signature**: `listWhatIfForecastExports(request: WhatIfForecastExport.ListWhatIfForecastExportsRequestParams, options?: RequestOptions): ApiPromise<undefined, WhatIfForecastExport.ListWhatIfForecastExportsError>`
- **Wire**: `POST /#ListWhatIfForecastExports`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `WhatIfForecastExport.ListWhatIfForecastExportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WhatIfForecastExport.ListWhatIfForecastExportsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi` | `xAmzTarget3AmazonForecastServiceWhatIfForecastExportApiSchema` | `src/models/xamz-target3-amazon-forecast-service-what-if-forecast-export-api.ts` |

