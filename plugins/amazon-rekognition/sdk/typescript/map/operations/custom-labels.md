<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomLabels — operations

Accessor: `client.customLabels` · Source: `src/resources/custom-labels.ts` · 1 operation · Request and error types: namespace `CustomLabels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### detectCustomLabels

- **Signature**: `detectCustomLabels(request: CustomLabels.DetectCustomLabelsRequestParams, options?: RequestOptions): ApiPromise<undefined, CustomLabels.DetectCustomLabelsError>`
- **Wire**: `POST /#DetectCustomLabels`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `CustomLabels.DetectCustomLabelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomLabels.DetectCustomLabelsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionCustomLabelsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionCustomLabelsApi` | `xAmzTargetAmazonRekognitionCustomLabelsApiSchema` | `src/models/xamz-target-amazon-rekognition-custom-labels-api.ts` |

