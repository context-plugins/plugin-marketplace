<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExplainabilityExport — operations

Accessor: `client.explainabilityExport` · Source: `src/resources/explainability-export.ts` · 4 operations · Request and error types: namespace `ExplainabilityExport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createExplainabilityExport

- **Signature**: `createExplainabilityExport(request: ExplainabilityExport.CreateExplainabilityExportRequestParams, options?: RequestOptions): ApiPromise<undefined, ExplainabilityExport.CreateExplainabilityExportError>`
- **Wire**: `POST /#CreateExplainabilityExport`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `ExplainabilityExport.CreateExplainabilityExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExplainabilityExport.CreateExplainabilityExportRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceExplainabilityExportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceExplainabilityExportApi` | `xAmzTargetAmazonForecastServiceExplainabilityExportApiSchema` | `src/models/xamz-target-amazon-forecast-service-explainability-export-api.ts` |

### deleteExplainabilityExport

- **Signature**: `deleteExplainabilityExport(request: ExplainabilityExport.DeleteExplainabilityExportRequestParams, options?: RequestOptions): ApiPromise<undefined, ExplainabilityExport.DeleteExplainabilityExportError>`
- **Wire**: `POST /#DeleteExplainabilityExport`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `ExplainabilityExport.DeleteExplainabilityExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExplainabilityExport.DeleteExplainabilityExportRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServiceExplainabilityExportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServiceExplainabilityExportApi` | `xAmzTarget1AmazonForecastServiceExplainabilityExportApiSchema` | `src/models/xamz-target1-amazon-forecast-service-explainability-export-api.ts` |

### describeExplainabilityExport

- **Signature**: `describeExplainabilityExport(request: ExplainabilityExport.DescribeExplainabilityExportRequestParams, options?: RequestOptions): ApiPromise<undefined, ExplainabilityExport.DescribeExplainabilityExportError>`
- **Wire**: `POST /#DescribeExplainabilityExport`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `ExplainabilityExport.DescribeExplainabilityExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExplainabilityExport.DescribeExplainabilityExportRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServiceExplainabilityExportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServiceExplainabilityExportApi` | `xAmzTarget2AmazonForecastServiceExplainabilityExportApiSchema` | `src/models/xamz-target2-amazon-forecast-service-explainability-export-api.ts` |

### listExplainabilityExports

- **Signature**: `listExplainabilityExports(request: ExplainabilityExport.ListExplainabilityExportsRequestParams, options?: RequestOptions): ApiPromise<undefined, ExplainabilityExport.ListExplainabilityExportsError>`
- **Wire**: `POST /#ListExplainabilityExports`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `ExplainabilityExport.ListExplainabilityExportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExplainabilityExport.ListExplainabilityExportsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonForecastServiceExplainabilityExportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonForecastServiceExplainabilityExportApi` | `xAmzTarget3AmazonForecastServiceExplainabilityExportApiSchema` | `src/models/xamz-target3-amazon-forecast-service-explainability-export-api.ts` |

