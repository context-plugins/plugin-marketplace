<!-- Generated file — do not edit; regenerated with the SDK. -->

# CacheReport — operations

Accessor: `client.cacheReport` · Source: `src/resources/cache-report.ts` · 5 operations · Request and error types: namespace `CacheReport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-storage-gateway`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelCacheReport

- **Signature**: `cancelCacheReport(request: CacheReport.CancelCacheReportRequest, options?: RequestOptions): ApiPromise<undefined, CacheReport.CancelCacheReportError>`
- **Wire**: `POST /#CancelCacheReport`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `CacheReport.CancelCacheReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CacheReport.CancelCacheReportRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsStorageGatewayCacheReportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsStorageGatewayCacheReportApi` | `xAmzTargetAwsStorageGatewayCacheReportApiSchema` | `src/models/xamz-target-aws-storage-gateway-cache-report-api.ts` |

### deleteCacheReport

- **Signature**: `deleteCacheReport(request: CacheReport.DeleteCacheReportRequest, options?: RequestOptions): ApiPromise<undefined, CacheReport.DeleteCacheReportError>`
- **Wire**: `POST /#DeleteCacheReport`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `CacheReport.DeleteCacheReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CacheReport.DeleteCacheReportRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsStorageGatewayCacheReportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsStorageGatewayCacheReportApi` | `xAmzTarget1AwsStorageGatewayCacheReportApiSchema` | `src/models/xamz-target1-aws-storage-gateway-cache-report-api.ts` |

### describeCacheReport

- **Signature**: `describeCacheReport(request: CacheReport.DescribeCacheReportRequest, options?: RequestOptions): ApiPromise<undefined, CacheReport.DescribeCacheReportError>`
- **Wire**: `POST /#DescribeCacheReport`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `CacheReport.DescribeCacheReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CacheReport.DescribeCacheReportRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsStorageGatewayCacheReportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsStorageGatewayCacheReportApi` | `xAmzTarget2AwsStorageGatewayCacheReportApiSchema` | `src/models/xamz-target2-aws-storage-gateway-cache-report-api.ts` |

### listCacheReports

- **Signature**: `listCacheReports(request: CacheReport.ListCacheReportsRequest, options?: RequestOptions): ApiPromise<undefined, CacheReport.ListCacheReportsError>`
- **Wire**: `POST /#ListCacheReports`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `CacheReport.ListCacheReportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CacheReport.ListCacheReportsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsStorageGatewayCacheReportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsStorageGatewayCacheReportApi` | `xAmzTarget3AwsStorageGatewayCacheReportApiSchema` | `src/models/xamz-target3-aws-storage-gateway-cache-report-api.ts` |

### startCacheReport

- **Signature**: `startCacheReport(request: CacheReport.StartCacheReportRequest, options?: RequestOptions): ApiPromise<undefined, CacheReport.StartCacheReportError>`
- **Wire**: `POST /#StartCacheReport`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `CacheReport.StartCacheReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CacheReport.StartCacheReportRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsStorageGatewayCacheReportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsStorageGatewayCacheReportApi` | `xAmzTarget4AwsStorageGatewayCacheReportApiSchema` | `src/models/xamz-target4-aws-storage-gateway-cache-report-api.ts` |

