<!-- Generated file — do not edit; regenerated with the SDK. -->

# Explainability — operations

Accessor: `client.explainability` · Source: `src/resources/explainability.ts` · 4 operations · Request and error types: namespace `Explainability`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createExplainability

- **Signature**: `createExplainability(request: Explainability.CreateExplainabilityRequestParams, options?: RequestOptions): ApiPromise<undefined, Explainability.CreateExplainabilityError>`
- **Wire**: `POST /#CreateExplainability`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Explainability.CreateExplainabilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Explainability.CreateExplainabilityRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceExplainabilityApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceExplainabilityApi` | `xAmzTargetAmazonForecastServiceExplainabilityApiSchema` | `src/models/xamz-target-amazon-forecast-service-explainability-api.ts` |

### deleteExplainability

- **Signature**: `deleteExplainability(request: Explainability.DeleteExplainabilityRequestParams, options?: RequestOptions): ApiPromise<undefined, Explainability.DeleteExplainabilityError>`
- **Wire**: `POST /#DeleteExplainability`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Explainability.DeleteExplainabilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Explainability.DeleteExplainabilityRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServiceExplainabilityApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServiceExplainabilityApi` | `xAmzTarget1AmazonForecastServiceExplainabilityApiSchema` | `src/models/xamz-target1-amazon-forecast-service-explainability-api.ts` |

### describeExplainability

- **Signature**: `describeExplainability(request: Explainability.DescribeExplainabilityRequestParams, options?: RequestOptions): ApiPromise<undefined, Explainability.DescribeExplainabilityError>`
- **Wire**: `POST /#DescribeExplainability`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Explainability.DescribeExplainabilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Explainability.DescribeExplainabilityRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServiceExplainabilityApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServiceExplainabilityApi` | `xAmzTarget2AmazonForecastServiceExplainabilityApiSchema` | `src/models/xamz-target2-amazon-forecast-service-explainability-api.ts` |

### listExplainabilities

- **Signature**: `listExplainabilities(request: Explainability.ListExplainabilitiesRequestParams, options?: RequestOptions): ApiPromise<undefined, Explainability.ListExplainabilitiesError>`
- **Wire**: `POST /#ListExplainabilities`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Explainability.ListExplainabilitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Explainability.ListExplainabilitiesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonForecastServiceExplainabilityApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonForecastServiceExplainabilityApi` | `xAmzTarget3AmazonForecastServiceExplainabilityApiSchema` | `src/models/xamz-target3-amazon-forecast-service-explainability-api.ts` |

