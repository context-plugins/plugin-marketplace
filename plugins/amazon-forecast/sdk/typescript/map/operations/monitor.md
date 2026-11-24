<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitor — operations

Accessor: `client.monitor` · Source: `src/resources/monitor.ts` · 4 operations · Request and error types: namespace `Monitor`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMonitor

- **Signature**: `createMonitor(request: Monitor.CreateMonitorRequestParams, options?: RequestOptions): ApiPromise<undefined, Monitor.CreateMonitorError>`
- **Wire**: `POST /#CreateMonitor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Monitor.CreateMonitorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.CreateMonitorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceMonitorApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceMonitorApi` | `xAmzTargetAmazonForecastServiceMonitorApiSchema` | `src/models/xamz-target-amazon-forecast-service-monitor-api.ts` |

### deleteMonitor

- **Signature**: `deleteMonitor(request: Monitor.DeleteMonitorRequestParams, options?: RequestOptions): ApiPromise<undefined, Monitor.DeleteMonitorError>`
- **Wire**: `POST /#DeleteMonitor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Monitor.DeleteMonitorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.DeleteMonitorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServiceMonitorApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServiceMonitorApi` | `xAmzTarget1AmazonForecastServiceMonitorApiSchema` | `src/models/xamz-target1-amazon-forecast-service-monitor-api.ts` |

### describeMonitor

- **Signature**: `describeMonitor(request: Monitor.DescribeMonitorRequestParams, options?: RequestOptions): ApiPromise<undefined, Monitor.DescribeMonitorError>`
- **Wire**: `POST /#DescribeMonitor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Monitor.DescribeMonitorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.DescribeMonitorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServiceMonitorApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServiceMonitorApi` | `xAmzTarget2AmazonForecastServiceMonitorApiSchema` | `src/models/xamz-target2-amazon-forecast-service-monitor-api.ts` |

### listMonitors

- **Signature**: `listMonitors(request: Monitor.ListMonitorsRequestParams, options?: RequestOptions): ApiPromise<undefined, Monitor.ListMonitorsError>`
- **Wire**: `POST /#ListMonitors`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Monitor.ListMonitorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.ListMonitorsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonForecastServiceMonitorApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonForecastServiceMonitorApi` | `xAmzTarget3AmazonForecastServiceMonitorApiSchema` | `src/models/xamz-target3-amazon-forecast-service-monitor-api.ts` |

