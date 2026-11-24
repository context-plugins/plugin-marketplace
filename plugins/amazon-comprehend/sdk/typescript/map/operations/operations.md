<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `src/resources/operations.ts` · 10 operations · Request and error types: namespace `Operations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-comprehend`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### classifyDocument2

- **Signature**: `classifyDocument2(request: Operations.ClassifyDocument2Request, options?: RequestOptions): ApiPromise<undefined, Operations.ClassifyDocument2Error>`
- **Wire**: `POST /#ClassifyDocument`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `Operations.ClassifyDocument2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ClassifyDocument2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonComprehendOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonComprehendOperationsApi` | `xAmzTargetAmazonComprehendOperationsApiSchema` | `src/models/xamz-target-amazon-comprehend-operations-api.ts` |

### containsPiiEntities2

- **Signature**: `containsPiiEntities2(request: Operations.ContainsPiiEntities2Request, options?: RequestOptions): ApiPromise<undefined, Operations.ContainsPiiEntities2Error>`
- **Wire**: `POST /#ContainsPiiEntities`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `Operations.ContainsPiiEntities2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ContainsPiiEntities2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonComprehendOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonComprehendOperationsApi` | `xAmzTarget1AmazonComprehendOperationsApiSchema` | `src/models/xamz-target1-amazon-comprehend-operations-api.ts` |

### detectDominantLanguage2

- **Signature**: `detectDominantLanguage2(request: Operations.DetectDominantLanguage2Request, options?: RequestOptions): ApiPromise<undefined, Operations.DetectDominantLanguage2Error>`
- **Wire**: `POST /#DetectDominantLanguage`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `Operations.DetectDominantLanguage2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DetectDominantLanguage2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonComprehendOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonComprehendOperationsApi` | `xAmzTarget2AmazonComprehendOperationsApiSchema` | `src/models/xamz-target2-amazon-comprehend-operations-api.ts` |

### detectEntities2

- **Signature**: `detectEntities2(request: Operations.DetectEntities2Request, options?: RequestOptions): ApiPromise<undefined, Operations.DetectEntities2Error>`
- **Wire**: `POST /#DetectEntities`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `Operations.DetectEntities2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DetectEntities2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonComprehendOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonComprehendOperationsApi` | `xAmzTarget3AmazonComprehendOperationsApiSchema` | `src/models/xamz-target3-amazon-comprehend-operations-api.ts` |

### detectKeyPhrases2

- **Signature**: `detectKeyPhrases2(request: Operations.DetectKeyPhrases2Request, options?: RequestOptions): ApiPromise<undefined, Operations.DetectKeyPhrases2Error>`
- **Wire**: `POST /#DetectKeyPhrases`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `Operations.DetectKeyPhrases2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DetectKeyPhrases2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AmazonComprehendOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AmazonComprehendOperationsApi` | `xAmzTarget4AmazonComprehendOperationsApiSchema` | `src/models/xamz-target4-amazon-comprehend-operations-api.ts` |

### detectPiiEntities2

- **Signature**: `detectPiiEntities2(request: Operations.DetectPiiEntities2Request, options?: RequestOptions): ApiPromise<undefined, Operations.DetectPiiEntities2Error>`
- **Wire**: `POST /#DetectPiiEntities`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `Operations.DetectPiiEntities2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DetectPiiEntities2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5AmazonComprehendOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5AmazonComprehendOperationsApi` | `xAmzTarget5AmazonComprehendOperationsApiSchema` | `src/models/xamz-target5-amazon-comprehend-operations-api.ts` |

### detectSentiment2

- **Signature**: `detectSentiment2(request: Operations.DetectSentiment2Request, options?: RequestOptions): ApiPromise<undefined, Operations.DetectSentiment2Error>`
- **Wire**: `POST /#DetectSentiment`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `Operations.DetectSentiment2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DetectSentiment2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6AmazonComprehendOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6AmazonComprehendOperationsApi` | `xAmzTarget6AmazonComprehendOperationsApiSchema` | `src/models/xamz-target6-amazon-comprehend-operations-api.ts` |

### detectSyntax2

- **Signature**: `detectSyntax2(request: Operations.DetectSyntax2Request, options?: RequestOptions): ApiPromise<undefined, Operations.DetectSyntax2Error>`
- **Wire**: `POST /#DetectSyntax`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `Operations.DetectSyntax2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DetectSyntax2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7AmazonComprehendOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7AmazonComprehendOperationsApi` | `xAmzTarget7AmazonComprehendOperationsApiSchema` | `src/models/xamz-target7-amazon-comprehend-operations-api.ts` |

### detectTargetedSentiment2

- **Signature**: `detectTargetedSentiment2(request: Operations.DetectTargetedSentiment2Request, options?: RequestOptions): ApiPromise<undefined, Operations.DetectTargetedSentiment2Error>`
- **Wire**: `POST /#DetectTargetedSentiment`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `Operations.DetectTargetedSentiment2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DetectTargetedSentiment2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8AmazonComprehendOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8AmazonComprehendOperationsApi` | `xAmzTarget8AmazonComprehendOperationsApiSchema` | `src/models/xamz-target8-amazon-comprehend-operations-api.ts` |

### detectToxicContent

- **Signature**: `detectToxicContent(request: Operations.DetectToxicContentRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.DetectToxicContentError>`
- **Wire**: `POST /#DetectToxicContent`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `Operations.DetectToxicContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DetectToxicContentRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget9AmazonComprehendOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget9AmazonComprehendOperationsApi` | `xAmzTarget9AmazonComprehendOperationsApiSchema` | `src/models/xamz-target9-amazon-comprehend-operations-api.ts` |

