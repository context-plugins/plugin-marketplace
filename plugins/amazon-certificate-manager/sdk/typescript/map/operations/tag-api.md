<!-- Generated file — do not edit; regenerated with the SDK. -->

# TagApi — operations

Accessor: `client.tagApi` · Source: `src/resources/tag-api.ts` · 4 operations · Request and error types: namespace `TagApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-certificate-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addTagsToCertificate

- **Signature**: `addTagsToCertificate(request: TagApi.AddTagsToCertificateRequestParams, options?: RequestOptions): ApiPromise<undefined, TagApi.AddTagsToCertificateError>`
- **Wire**: `POST /#AddTagsToCertificate`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `TagApi.AddTagsToCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TagApi.AddTagsToCertificateRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCertificateManagerTagApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCertificateManagerTagApi` | `xAmzTargetAwsCertificateManagerTagApiSchema` | `src/models/xamz-target-aws-certificate-manager-tag-api.ts` |

### listTagsForCertificate

- **Signature**: `listTagsForCertificate(request: TagApi.ListTagsForCertificateRequestParams, options?: RequestOptions): ApiPromise<undefined, TagApi.ListTagsForCertificateError>`
- **Wire**: `POST /#ListTagsForCertificate`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `TagApi.ListTagsForCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TagApi.ListTagsForCertificateRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsCertificateManagerTagApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsCertificateManagerTagApi` | `xAmzTarget1AwsCertificateManagerTagApiSchema` | `src/models/xamz-target1-aws-certificate-manager-tag-api.ts` |

### listTagsForResource

- **Signature**: `listTagsForResource(request: TagApi.ListTagsForResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, TagApi.ListTagsForResourceError>`
- **Wire**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `TagApi.ListTagsForResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TagApi.ListTagsForResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsCertificateManagerTagApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsCertificateManagerTagApi` | `xAmzTarget2AwsCertificateManagerTagApiSchema` | `src/models/xamz-target2-aws-certificate-manager-tag-api.ts` |

### removeTagsFromCertificate

- **Signature**: `removeTagsFromCertificate(request: TagApi.RemoveTagsFromCertificateRequestParams, options?: RequestOptions): ApiPromise<undefined, TagApi.RemoveTagsFromCertificateError>`
- **Wire**: `POST /#RemoveTagsFromCertificate`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `TagApi.RemoveTagsFromCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TagApi.RemoveTagsFromCertificateRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsCertificateManagerTagApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsCertificateManagerTagApi` | `xAmzTarget3AwsCertificateManagerTagApiSchema` | `src/models/xamz-target3-aws-certificate-manager-tag-api.ts` |

