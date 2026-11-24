<!-- Generated file — do not edit; regenerated with the SDK. -->

# Resource — operations

Accessor: `client.resource` · Source: `src/resources/resource.ts` · 3 operations · Request and error types: namespace `Resource`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### stopResource

- **Signature**: `stopResource(request: Resource.StopResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, Resource.StopResourceError>`
- **Wire**: `POST /#StopResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Resource.StopResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Resource.StopResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceResourceApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceResourceApi` | `xAmzTargetAmazonForecastServiceResourceApiSchema` | `src/models/xamz-target-amazon-forecast-service-resource-api.ts` |

### tagResource

- **Signature**: `tagResource(request: Resource.TagResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, Resource.TagResourceError>`
- **Wire**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Resource.TagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Resource.TagResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServiceResourceApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServiceResourceApi` | `xAmzTarget1AmazonForecastServiceResourceApiSchema` | `src/models/xamz-target1-amazon-forecast-service-resource-api.ts` |

### untagResource

- **Signature**: `untagResource(request: Resource.UntagResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, Resource.UntagResourceError>`
- **Wire**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Resource.UntagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Resource.UntagResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServiceResourceApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServiceResourceApi` | `xAmzTarget2AmazonForecastServiceResourceApiSchema` | `src/models/xamz-target2-amazon-forecast-service-resource-api.ts` |

