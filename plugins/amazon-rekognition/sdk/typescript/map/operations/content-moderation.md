<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContentModeration — operations

Accessor: `client.contentModeration` · Source: `src/resources/content-moderation.ts` · 3 operations · Request and error types: namespace `ContentModeration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### detectModerationLabels

- **Signature**: `detectModerationLabels(request: ContentModeration.DetectModerationLabelsRequestParams, options?: RequestOptions): ApiPromise<undefined, ContentModeration.DetectModerationLabelsError>`
- **Wire**: `POST /#DetectModerationLabels`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `ContentModeration.DetectModerationLabelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error402"` [402] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContentModeration.DetectModerationLabelsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonRekognitionContentModerationApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonRekognitionContentModerationApi` | `xAmzTarget2AmazonRekognitionContentModerationApiSchema` | `src/models/xamz-target2-amazon-rekognition-content-moderation-api.ts` |

### getContentModeration

- **Signature**: `getContentModeration(request: ContentModeration.GetContentModerationRequestParams, options?: RequestOptions): ApiPromise<undefined, ContentModeration.GetContentModerationError>`
- **Wire**: `POST /#GetContentModeration`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `ContentModeration.GetContentModerationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContentModeration.GetContentModerationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionContentModerationApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionContentModerationApi` | `xAmzTargetAmazonRekognitionContentModerationApiSchema` | `src/models/xamz-target-amazon-rekognition-content-moderation-api.ts` |

### startContentModeration

- **Signature**: `startContentModeration(request: ContentModeration.StartContentModerationRequestParams, options?: RequestOptions): ApiPromise<undefined, ContentModeration.StartContentModerationError>`
- **Wire**: `POST /#StartContentModeration`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `ContentModeration.StartContentModerationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContentModeration.StartContentModerationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionContentModerationApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionContentModerationApi` | `xAmzTarget1AmazonRekognitionContentModerationApiSchema` | `src/models/xamz-target1-amazon-rekognition-content-moderation-api.ts` |

