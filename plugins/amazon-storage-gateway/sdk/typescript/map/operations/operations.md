<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `src/resources/operations.ts` · 9 operations · Request and error types: namespace `Operations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-storage-gateway`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activateGateway3

- **Signature**: `activateGateway3(request: Operations.ActivateGateway3Request, options?: RequestOptions): ApiPromise<undefined, Operations.ActivateGateway3Error>`
- **Wire**: `POST /#ActivateGateway`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `Operations.ActivateGateway3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ActivateGateway3Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget` | `xAmzTargetSchema` | `src/models/xamz-target.ts` |

### assignTapePool2

- **Signature**: `assignTapePool2(request: Operations.AssignTapePool2Request, options?: RequestOptions): ApiPromise<undefined, Operations.AssignTapePool2Error>`
- **Wire**: `POST /#AssignTapePool`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `Operations.AssignTapePool2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.AssignTapePool2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi` | `xAmzTarget1AwsStorageGatewayAwsStorageGatewayApiSchema` | `src/models/xamz-target1-aws-storage-gateway-aws-storage-gateway-api.ts` |

### evictFilesFailingUpload

- **Signature**: `evictFilesFailingUpload(request: Operations.EvictFilesFailingUploadRequest, options?: RequestOptions): ApiPromise<undefined, Operations.EvictFilesFailingUploadError>`
- **Wire**: `POST /#EvictFilesFailingUpload`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `Operations.EvictFilesFailingUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.EvictFilesFailingUploadRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsStorageGatewayOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsStorageGatewayOperationsApi` | `xAmzTarget2AwsStorageGatewayOperationsApiSchema` | `src/models/xamz-target2-aws-storage-gateway-operations-api.ts` |

### joinDomain2

- **Signature**: `joinDomain2(request: Operations.JoinDomain2Request, options?: RequestOptions): ApiPromise<undefined, Operations.JoinDomain2Error>`
- **Wire**: `POST /#JoinDomain`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `Operations.JoinDomain2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.JoinDomain2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsStorageGatewayOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsStorageGatewayOperationsApi` | `xAmzTarget3AwsStorageGatewayOperationsApiSchema` | `src/models/xamz-target3-aws-storage-gateway-operations-api.ts` |

### notifyWhenUploaded2

- **Signature**: `notifyWhenUploaded2(request: Operations.NotifyWhenUploaded2Request, options?: RequestOptions): ApiPromise<undefined, Operations.NotifyWhenUploaded2Error>`
- **Wire**: `POST /#NotifyWhenUploaded`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `Operations.NotifyWhenUploaded2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.NotifyWhenUploaded2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsStorageGatewayOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsStorageGatewayOperationsApi` | `xAmzTarget4AwsStorageGatewayOperationsApiSchema` | `src/models/xamz-target4-aws-storage-gateway-operations-api.ts` |

### refreshCache2

- **Signature**: `refreshCache2(request: Operations.RefreshCache2Request, options?: RequestOptions): ApiPromise<undefined, Operations.RefreshCache2Error>`
- **Wire**: `POST /#RefreshCache`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `Operations.RefreshCache2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.RefreshCache2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5AwsStorageGatewayOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5AwsStorageGatewayOperationsApi` | `xAmzTarget5AwsStorageGatewayOperationsApiSchema` | `src/models/xamz-target5-aws-storage-gateway-operations-api.ts` |

### retrieveTapeArchive2

- **Signature**: `retrieveTapeArchive2(request: Operations.RetrieveTapeArchive2Request, options?: RequestOptions): ApiPromise<undefined, Operations.RetrieveTapeArchive2Error>`
- **Wire**: `POST /#RetrieveTapeArchive`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `Operations.RetrieveTapeArchive2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.RetrieveTapeArchive2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6AwsStorageGatewayOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6AwsStorageGatewayOperationsApi` | `xAmzTarget6AwsStorageGatewayOperationsApiSchema` | `src/models/xamz-target6-aws-storage-gateway-operations-api.ts` |

### retrieveTapeRecoveryPoint2

- **Signature**: `retrieveTapeRecoveryPoint2(request: Operations.RetrieveTapeRecoveryPoint2Request, options?: RequestOptions): ApiPromise<undefined, Operations.RetrieveTapeRecoveryPoint2Error>`
- **Wire**: `POST /#RetrieveTapeRecoveryPoint`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `Operations.RetrieveTapeRecoveryPoint2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.RetrieveTapeRecoveryPoint2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7AwsStorageGatewayOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7AwsStorageGatewayOperationsApi` | `xAmzTarget7AwsStorageGatewayOperationsApiSchema` | `src/models/xamz-target7-aws-storage-gateway-operations-api.ts` |

### shutdownGateway2

- **Signature**: `shutdownGateway2(request: Operations.ShutdownGateway2Request, options?: RequestOptions): ApiPromise<undefined, Operations.ShutdownGateway2Error>`
- **Wire**: `POST /#ShutdownGateway`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `Operations.ShutdownGateway2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ShutdownGateway2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8AwsStorageGatewayOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8AwsStorageGatewayOperationsApi` | `xAmzTarget8AwsStorageGatewayOperationsApiSchema` | `src/models/xamz-target8-aws-storage-gateway-operations-api.ts` |

