<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `src/resources/tags.ts` · 3 operations · Request and error types: namespace `Tags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-sqs`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listQueueTags

- **Signature**: `listQueueTags(request: Tags.ListQueueTagsRequestParams, options?: RequestOptions): ApiPromise<undefined, Tags.ListQueueTagsError>`
- **Wire**: `POST /#ListQueueTags`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Tags.ListQueueTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.ListQueueTagsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonSimpleQueueServiceTagsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonSimpleQueueServiceTagsApi` | `xAmzTarget2AmazonSimpleQueueServiceTagsApiSchema` | `src/models/xamz-target2-amazon-simple-queue-service-tags-api.ts` |

### tagQueue2

- **Signature**: `tagQueue2(request: Tags.TagQueue2Request, options?: RequestOptions): ApiPromise<undefined, Tags.TagQueue2Error>`
- **Wire**: `POST /#TagQueue`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Tags.TagQueue2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.TagQueue2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonSimpleQueueServiceTagsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonSimpleQueueServiceTagsApi` | `xAmzTargetAmazonSimpleQueueServiceTagsApiSchema` | `src/models/xamz-target-amazon-simple-queue-service-tags-api.ts` |

### untagQueue2

- **Signature**: `untagQueue2(request: Tags.UntagQueue2Request, options?: RequestOptions): ApiPromise<undefined, Tags.UntagQueue2Error>`
- **Wire**: `POST /#UntagQueue`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Tags.UntagQueue2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.UntagQueue2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonSimpleQueueServiceTagsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonSimpleQueueServiceTagsApi` | `xAmzTarget1AmazonSimpleQueueServiceTagsApiSchema` | `src/models/xamz-target1-amazon-simple-queue-service-tags-api.ts` |

