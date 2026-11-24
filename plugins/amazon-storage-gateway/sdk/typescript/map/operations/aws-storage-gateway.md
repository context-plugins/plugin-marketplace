<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStorageGateway — operations

Accessor: `client.awsStorageGateway` · Source: `src/resources/aws-storage-gateway.ts` · 90 operations · Request and error types: namespace `AwsStorageGateway`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-storage-gateway`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activateGateway2

- **Signature**: `activateGateway2(request: AwsStorageGateway.ActivateGateway2Request, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ActivateGateway2Error>`
- **Wire**: `POST /#ActivateGateway`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ActivateGateway2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ActivateGateway2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget` | `xAmzTargetSchema` | `src/models/xamz-target.ts` |

### addCache

- **Signature**: `addCache(request: AwsStorageGateway.AddCacheRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.AddCacheError>`
- **Wire**: `POST /#AddCache`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.AddCacheError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.AddCacheRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8` | `xAmzTarget8Schema` | `src/models/xamz-target8.ts` |

### addTagsToResource

- **Signature**: `addTagsToResource(request: AwsStorageGateway.AddTagsToResourceRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.AddTagsToResourceError>`
- **Wire**: `POST /#AddTagsToResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.AddTagsToResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.AddTagsToResourceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget11` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget11` | `xAmzTarget11Schema` | `src/models/xamz-target11.ts` |

### addUploadBuffer

- **Signature**: `addUploadBuffer(request: AwsStorageGateway.AddUploadBufferRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.AddUploadBufferError>`
- **Wire**: `POST /#AddUploadBuffer`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.AddUploadBufferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.AddUploadBufferRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget14` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget14` | `xAmzTarget14Schema` | `src/models/xamz-target14.ts` |

### addWorkingStorage

- **Signature**: `addWorkingStorage(request: AwsStorageGateway.AddWorkingStorageRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.AddWorkingStorageError>`
- **Wire**: `POST /#AddWorkingStorage`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.AddWorkingStorageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.AddWorkingStorageRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget16` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget16` | `xAmzTarget16Schema` | `src/models/xamz-target16.ts` |

### assignTapePool

- **Signature**: `assignTapePool(request: AwsStorageGateway.AssignTapePoolRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.AssignTapePoolError>`
- **Wire**: `POST /#AssignTapePool`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.AssignTapePoolError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.AssignTapePoolRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi` | `xAmzTarget1AwsStorageGatewayAwsStorageGatewayApiSchema` | `src/models/xamz-target1-aws-storage-gateway-aws-storage-gateway-api.ts` |

### associateFileSystem

- **Signature**: `associateFileSystem(request: AwsStorageGateway.AssociateFileSystemRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.AssociateFileSystemError>`
- **Wire**: `POST /#AssociateFileSystem`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.AssociateFileSystemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.AssociateFileSystemRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget18` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget18` | `xAmzTarget18Schema` | `src/models/xamz-target18.ts` |

### attachVolume

- **Signature**: `attachVolume(request: AwsStorageGateway.AttachVolumeRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.AttachVolumeError>`
- **Wire**: `POST /#AttachVolume`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.AttachVolumeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.AttachVolumeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget20` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget20` | `xAmzTarget20Schema` | `src/models/xamz-target20.ts` |

### cancelArchival

- **Signature**: `cancelArchival(request: AwsStorageGateway.CancelArchivalRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.CancelArchivalError>`
- **Wire**: `POST /#CancelArchival`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.CancelArchivalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.CancelArchivalRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget23` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget23` | `xAmzTarget23Schema` | `src/models/xamz-target23.ts` |

### cancelRetrieval

- **Signature**: `cancelRetrieval(request: AwsStorageGateway.CancelRetrievalRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.CancelRetrievalError>`
- **Wire**: `POST /#CancelRetrieval`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.CancelRetrievalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.CancelRetrievalRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget24` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget24` | `xAmzTarget24Schema` | `src/models/xamz-target24.ts` |

### createCachediScsiVolume

- **Signature**: `createCachediScsiVolume(request: AwsStorageGateway.CreateCachediScsiVolumeRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.CreateCachediScsiVolumeError>`
- **Wire**: `POST /#CreateCachediSCSIVolume`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.CreateCachediScsiVolumeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.CreateCachediScsiVolumeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget25` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget25` | `xAmzTarget25Schema` | `src/models/xamz-target25.ts` |

### createNfsFileShare2

- **Signature**: `createNfsFileShare2(request: AwsStorageGateway.CreateNfsFileShare2Request, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.CreateNfsFileShare2Error>`
- **Wire**: `POST /#CreateNFSFileShare`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.CreateNfsFileShare2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.CreateNfsFileShare2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2` | `xAmzTarget2Schema` | `src/models/xamz-target2.ts` |

### createSmbFileShare

- **Signature**: `createSmbFileShare(request: AwsStorageGateway.CreateSmbFileShareRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.CreateSmbFileShareError>`
- **Wire**: `POST /#CreateSMBFileShare`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.CreateSmbFileShareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.CreateSmbFileShareRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget29` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget29` | `xAmzTarget29Schema` | `src/models/xamz-target29.ts` |

### createSnapshot

- **Signature**: `createSnapshot(request: AwsStorageGateway.CreateSnapshotRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.CreateSnapshotError>`
- **Wire**: `POST /#CreateSnapshot`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.CreateSnapshotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.CreateSnapshotRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget32` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget32` | `xAmzTarget32Schema` | `src/models/xamz-target32.ts` |

### createSnapshotFromVolumeRecoveryPoint

- **Signature**: `createSnapshotFromVolumeRecoveryPoint(request: AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointError>`
- **Wire**: `POST /#CreateSnapshotFromVolumeRecoveryPoint`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget33` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget33` | `xAmzTarget33Schema` | `src/models/xamz-target33.ts` |

### createStorediScsiVolume

- **Signature**: `createStorediScsiVolume(request: AwsStorageGateway.CreateStorediScsiVolumeRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.CreateStorediScsiVolumeError>`
- **Wire**: `POST /#CreateStorediSCSIVolume`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.CreateStorediScsiVolumeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.CreateStorediScsiVolumeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget34` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget34` | `xAmzTarget34Schema` | `src/models/xamz-target34.ts` |

### createTapePool

- **Signature**: `createTapePool(request: AwsStorageGateway.CreateTapePoolRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.CreateTapePoolError>`
- **Wire**: `POST /#CreateTapePool`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.CreateTapePoolError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.CreateTapePoolRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget36` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget36` | `xAmzTarget36Schema` | `src/models/xamz-target36.ts` |

### createTapeWithBarcode

- **Signature**: `createTapeWithBarcode(request: AwsStorageGateway.CreateTapeWithBarcodeRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.CreateTapeWithBarcodeError>`
- **Wire**: `POST /#CreateTapeWithBarcode`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.CreateTapeWithBarcodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.CreateTapeWithBarcodeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget40` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget40` | `xAmzTarget40Schema` | `src/models/xamz-target40.ts` |

### createTapes

- **Signature**: `createTapes(request: AwsStorageGateway.CreateTapesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.CreateTapesError>`
- **Wire**: `POST /#CreateTapes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.CreateTapesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.CreateTapesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget39` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget39` | `xAmzTarget39Schema` | `src/models/xamz-target39.ts` |

### deleteAutomaticTapeCreationPolicy

- **Signature**: `deleteAutomaticTapeCreationPolicy(request: AwsStorageGateway.DeleteAutomaticTapeCreationPolicyRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DeleteAutomaticTapeCreationPolicyError>`
- **Wire**: `POST /#DeleteAutomaticTapeCreationPolicy`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DeleteAutomaticTapeCreationPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DeleteAutomaticTapeCreationPolicyRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget44` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget44` | `xAmzTarget44Schema` | `src/models/xamz-target44.ts` |

### deleteBandwidthRateLimit

- **Signature**: `deleteBandwidthRateLimit(request: AwsStorageGateway.DeleteBandwidthRateLimitRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DeleteBandwidthRateLimitError>`
- **Wire**: `POST /#DeleteBandwidthRateLimit`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DeleteBandwidthRateLimitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DeleteBandwidthRateLimitRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget47` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget47` | `xAmzTarget47Schema` | `src/models/xamz-target47.ts` |

### deleteChapCredentials

- **Signature**: `deleteChapCredentials(request: AwsStorageGateway.DeleteChapCredentialsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DeleteChapCredentialsError>`
- **Wire**: `POST /#DeleteChapCredentials`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DeleteChapCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DeleteChapCredentialsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget50` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget50` | `xAmzTarget50Schema` | `src/models/xamz-target50.ts` |

### deleteFileShare

- **Signature**: `deleteFileShare(request: AwsStorageGateway.DeleteFileShareRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DeleteFileShareError>`
- **Wire**: `POST /#DeleteFileShare`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DeleteFileShareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DeleteFileShareRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget53` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget53` | `xAmzTarget53Schema` | `src/models/xamz-target53.ts` |

### deleteGateway

- **Signature**: `deleteGateway(request: AwsStorageGateway.DeleteGatewayRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DeleteGatewayError>`
- **Wire**: `POST /#DeleteGateway`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DeleteGatewayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DeleteGatewayRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget55` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget55` | `xAmzTarget55Schema` | `src/models/xamz-target55.ts` |

### deleteSnapshotSchedule

- **Signature**: `deleteSnapshotSchedule(request: AwsStorageGateway.DeleteSnapshotScheduleRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DeleteSnapshotScheduleError>`
- **Wire**: `POST /#DeleteSnapshotSchedule`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DeleteSnapshotScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DeleteSnapshotScheduleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget58` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget58` | `xAmzTarget58Schema` | `src/models/xamz-target58.ts` |

### deleteTape

- **Signature**: `deleteTape(request: AwsStorageGateway.DeleteTapeRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DeleteTapeError>`
- **Wire**: `POST /#DeleteTape`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DeleteTapeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DeleteTapeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget41` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget41` | `xAmzTarget41Schema` | `src/models/xamz-target41.ts` |

### deleteTapeArchive

- **Signature**: `deleteTapeArchive(request: AwsStorageGateway.DeleteTapeArchiveRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DeleteTapeArchiveError>`
- **Wire**: `POST /#DeleteTapeArchive`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DeleteTapeArchiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DeleteTapeArchiveRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget61` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget61` | `xAmzTarget61Schema` | `src/models/xamz-target61.ts` |

### deleteTapePool

- **Signature**: `deleteTapePool(request: AwsStorageGateway.DeleteTapePoolRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DeleteTapePoolError>`
- **Wire**: `POST /#DeleteTapePool`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DeleteTapePoolError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DeleteTapePoolRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget37` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget37` | `xAmzTarget37Schema` | `src/models/xamz-target37.ts` |

### deleteVolume

- **Signature**: `deleteVolume(request: AwsStorageGateway.DeleteVolumeRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DeleteVolumeError>`
- **Wire**: `POST /#DeleteVolume`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DeleteVolumeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DeleteVolumeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget21` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget21` | `xAmzTarget21Schema` | `src/models/xamz-target21.ts` |

### describeAvailabilityMonitorTest

- **Signature**: `describeAvailabilityMonitorTest(request: AwsStorageGateway.DescribeAvailabilityMonitorTestRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeAvailabilityMonitorTestError>`
- **Wire**: `POST /#DescribeAvailabilityMonitorTest`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeAvailabilityMonitorTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeAvailabilityMonitorTestRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget63` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget63` | `xAmzTarget63Schema` | `src/models/xamz-target63.ts` |

### describeBandwidthRateLimit

- **Signature**: `describeBandwidthRateLimit(request: AwsStorageGateway.DescribeBandwidthRateLimitRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeBandwidthRateLimitError>`
- **Wire**: `POST /#DescribeBandwidthRateLimit`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeBandwidthRateLimitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeBandwidthRateLimitRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget48` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget48` | `xAmzTarget48Schema` | `src/models/xamz-target48.ts` |

### describeBandwidthRateLimitSchedule

- **Signature**: `describeBandwidthRateLimitSchedule(request: AwsStorageGateway.DescribeBandwidthRateLimitScheduleRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeBandwidthRateLimitScheduleError>`
- **Wire**: `POST /#DescribeBandwidthRateLimitSchedule`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeBandwidthRateLimitScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeBandwidthRateLimitScheduleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget65` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget65` | `xAmzTarget65Schema` | `src/models/xamz-target65.ts` |

### describeCache

- **Signature**: `describeCache(request: AwsStorageGateway.DescribeCacheRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeCacheError>`
- **Wire**: `POST /#DescribeCache`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeCacheError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeCacheRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget9` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget9` | `xAmzTarget9Schema` | `src/models/xamz-target9.ts` |

### describeCachediScsiVolumes

- **Signature**: `describeCachediScsiVolumes(request: AwsStorageGateway.DescribeCachediScsiVolumesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeCachediScsiVolumesError>`
- **Wire**: `POST /#DescribeCachediSCSIVolumes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeCachediScsiVolumesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeCachediScsiVolumesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget26` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget26` | `xAmzTarget26Schema` | `src/models/xamz-target26.ts` |

### describeChapCredentials

- **Signature**: `describeChapCredentials(request: AwsStorageGateway.DescribeChapCredentialsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeChapCredentialsError>`
- **Wire**: `POST /#DescribeChapCredentials`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeChapCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeChapCredentialsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget51` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget51` | `xAmzTarget51Schema` | `src/models/xamz-target51.ts` |

### describeFileSystemAssociations

- **Signature**: `describeFileSystemAssociations(request: AwsStorageGateway.DescribeFileSystemAssociationsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeFileSystemAssociationsError>`
- **Wire**: `POST /#DescribeFileSystemAssociations`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeFileSystemAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeFileSystemAssociationsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget67` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget67` | `xAmzTarget67Schema` | `src/models/xamz-target67.ts` |

### describeGatewayInformation2

- **Signature**: `describeGatewayInformation2(request: AwsStorageGateway.DescribeGatewayInformation2Request, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeGatewayInformation2Error>`
- **Wire**: `POST /#DescribeGatewayInformation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeGatewayInformation2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeGatewayInformation2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4` | `xAmzTarget4Schema` | `src/models/xamz-target4.ts` |

### describeMaintenanceStartTime

- **Signature**: `describeMaintenanceStartTime(request: AwsStorageGateway.DescribeMaintenanceStartTimeRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeMaintenanceStartTimeError>`
- **Wire**: `POST /#DescribeMaintenanceStartTime`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeMaintenanceStartTimeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeMaintenanceStartTimeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget71` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget71` | `xAmzTarget71Schema` | `src/models/xamz-target71.ts` |

### describeNfsFileShares

- **Signature**: `describeNfsFileShares(request: AwsStorageGateway.DescribeNfsFileSharesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeNfsFileSharesError>`
- **Wire**: `POST /#DescribeNFSFileShares`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeNfsFileSharesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeNfsFileSharesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget27` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget27` | `xAmzTarget27Schema` | `src/models/xamz-target27.ts` |

### describeSmbFileShares

- **Signature**: `describeSmbFileShares(request: AwsStorageGateway.DescribeSmbFileSharesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeSmbFileSharesError>`
- **Wire**: `POST /#DescribeSMBFileShares`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeSmbFileSharesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeSmbFileSharesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget30` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget30` | `xAmzTarget30Schema` | `src/models/xamz-target30.ts` |

### describeSmbSettings

- **Signature**: `describeSmbSettings(request: AwsStorageGateway.DescribeSmbSettingsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeSmbSettingsError>`
- **Wire**: `POST /#DescribeSMBSettings`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeSmbSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeSmbSettingsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget73` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget73` | `xAmzTarget73Schema` | `src/models/xamz-target73.ts` |

### describeSnapshotSchedule

- **Signature**: `describeSnapshotSchedule(request: AwsStorageGateway.DescribeSnapshotScheduleRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeSnapshotScheduleError>`
- **Wire**: `POST /#DescribeSnapshotSchedule`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeSnapshotScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeSnapshotScheduleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget59` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget59` | `xAmzTarget59Schema` | `src/models/xamz-target59.ts` |

### describeStorediScsiVolumes

- **Signature**: `describeStorediScsiVolumes(request: AwsStorageGateway.DescribeStorediScsiVolumesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeStorediScsiVolumesError>`
- **Wire**: `POST /#DescribeStorediSCSIVolumes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeStorediScsiVolumesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeStorediScsiVolumesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget35` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget35` | `xAmzTarget35Schema` | `src/models/xamz-target35.ts` |

### describeTapeArchives

- **Signature**: `describeTapeArchives(request: AwsStorageGateway.DescribeTapeArchivesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeTapeArchivesError>`
- **Wire**: `POST /#DescribeTapeArchives`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeTapeArchivesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeTapeArchivesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget62` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget62` | `xAmzTarget62Schema` | `src/models/xamz-target62.ts` |

### describeTapeRecoveryPoints

- **Signature**: `describeTapeRecoveryPoints(request: AwsStorageGateway.DescribeTapeRecoveryPointsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeTapeRecoveryPointsError>`
- **Wire**: `POST /#DescribeTapeRecoveryPoints`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeTapeRecoveryPointsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeTapeRecoveryPointsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget74` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget74` | `xAmzTarget74Schema` | `src/models/xamz-target74.ts` |

### describeTapes

- **Signature**: `describeTapes(request: AwsStorageGateway.DescribeTapesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeTapesError>`
- **Wire**: `POST /#DescribeTapes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeTapesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeTapesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget42` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget42` | `xAmzTarget42Schema` | `src/models/xamz-target42.ts` |

### describeUploadBuffer

- **Signature**: `describeUploadBuffer(request: AwsStorageGateway.DescribeUploadBufferRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeUploadBufferError>`
- **Wire**: `POST /#DescribeUploadBuffer`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeUploadBufferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeUploadBufferRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget15` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget15` | `xAmzTarget15Schema` | `src/models/xamz-target15.ts` |

### describeVtlDevices

- **Signature**: `describeVtlDevices(request: AwsStorageGateway.DescribeVtlDevicesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeVtlDevicesError>`
- **Wire**: `POST /#DescribeVTLDevices`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeVtlDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeVtlDevicesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget75` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget75` | `xAmzTarget75Schema` | `src/models/xamz-target75.ts` |

### describeWorkingStorage

- **Signature**: `describeWorkingStorage(request: AwsStorageGateway.DescribeWorkingStorageRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DescribeWorkingStorageError>`
- **Wire**: `POST /#DescribeWorkingStorage`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DescribeWorkingStorageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DescribeWorkingStorageRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget17` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget17` | `xAmzTarget17Schema` | `src/models/xamz-target17.ts` |

### detachVolume

- **Signature**: `detachVolume(request: AwsStorageGateway.DetachVolumeRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DetachVolumeError>`
- **Wire**: `POST /#DetachVolume`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DetachVolumeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DetachVolumeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget22` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget22` | `xAmzTarget22Schema` | `src/models/xamz-target22.ts` |

### disableGateway

- **Signature**: `disableGateway(request: AwsStorageGateway.DisableGatewayRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DisableGatewayError>`
- **Wire**: `POST /#DisableGateway`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DisableGatewayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DisableGatewayRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget56` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget56` | `xAmzTarget56Schema` | `src/models/xamz-target56.ts` |

### disassociateFileSystem

- **Signature**: `disassociateFileSystem(request: AwsStorageGateway.DisassociateFileSystemRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.DisassociateFileSystemError>`
- **Wire**: `POST /#DisassociateFileSystem`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.DisassociateFileSystemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.DisassociateFileSystemRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget19` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget19` | `xAmzTarget19Schema` | `src/models/xamz-target19.ts` |

### joinDomain

- **Signature**: `joinDomain(request: AwsStorageGateway.JoinDomainRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.JoinDomainError>`
- **Wire**: `POST /#JoinDomain`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.JoinDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.JoinDomainRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi` | `xAmzTarget2AwsStorageGatewayAwsStorageGatewayApiSchema` | `src/models/xamz-target2-aws-storage-gateway-aws-storage-gateway-api.ts` |

### listAutomaticTapeCreationPolicies

- **Signature**: `listAutomaticTapeCreationPolicies(request: AwsStorageGateway.ListAutomaticTapeCreationPoliciesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ListAutomaticTapeCreationPoliciesError>`
- **Wire**: `POST /#ListAutomaticTapeCreationPolicies`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ListAutomaticTapeCreationPoliciesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ListAutomaticTapeCreationPoliciesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget45` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget45` | `xAmzTarget45Schema` | `src/models/xamz-target45.ts` |

### listFileShares

- **Signature**: `listFileShares(request: AwsStorageGateway.ListFileSharesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ListFileSharesError>`
- **Wire**: `POST /#ListFileShares`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ListFileSharesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ListFileSharesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget54` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget54` | `xAmzTarget54Schema` | `src/models/xamz-target54.ts` |

### listFileSystemAssociations

- **Signature**: `listFileSystemAssociations(request: AwsStorageGateway.ListFileSystemAssociationsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ListFileSystemAssociationsError>`
- **Wire**: `POST /#ListFileSystemAssociations`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ListFileSystemAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ListFileSystemAssociationsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget68` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget68` | `xAmzTarget68Schema` | `src/models/xamz-target68.ts` |

### listGateways2

- **Signature**: `listGateways2(request: AwsStorageGateway.ListGateways2Request, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ListGateways2Error>`
- **Wire**: `POST /#ListGateways`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ListGateways2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ListGateways2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3` | `xAmzTarget3Schema` | `src/models/xamz-target3.ts` |

### listLocalDisks

- **Signature**: `listLocalDisks(request: AwsStorageGateway.ListLocalDisksRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ListLocalDisksError>`
- **Wire**: `POST /#ListLocalDisks`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ListLocalDisksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ListLocalDisksRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget76` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget76` | `xAmzTarget76Schema` | `src/models/xamz-target76.ts` |

### listTagsForResource

- **Signature**: `listTagsForResource(request: AwsStorageGateway.ListTagsForResourceRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ListTagsForResourceError>`
- **Wire**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ListTagsForResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ListTagsForResourceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget12` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget12` | `xAmzTarget12Schema` | `src/models/xamz-target12.ts` |

### listTapePools

- **Signature**: `listTapePools(request: AwsStorageGateway.ListTapePoolsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ListTapePoolsError>`
- **Wire**: `POST /#ListTapePools`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ListTapePoolsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ListTapePoolsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget38` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget38` | `xAmzTarget38Schema` | `src/models/xamz-target38.ts` |

### listTapes

- **Signature**: `listTapes(request: AwsStorageGateway.ListTapesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ListTapesError>`
- **Wire**: `POST /#ListTapes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ListTapesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ListTapesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget43` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget43` | `xAmzTarget43Schema` | `src/models/xamz-target43.ts` |

### listVolumeInitiators

- **Signature**: `listVolumeInitiators(request: AwsStorageGateway.ListVolumeInitiatorsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ListVolumeInitiatorsError>`
- **Wire**: `POST /#ListVolumeInitiators`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ListVolumeInitiatorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ListVolumeInitiatorsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget77` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget77` | `xAmzTarget77Schema` | `src/models/xamz-target77.ts` |

### listVolumeRecoveryPoints

- **Signature**: `listVolumeRecoveryPoints(request: AwsStorageGateway.ListVolumeRecoveryPointsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ListVolumeRecoveryPointsError>`
- **Wire**: `POST /#ListVolumeRecoveryPoints`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ListVolumeRecoveryPointsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ListVolumeRecoveryPointsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget78` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget78` | `xAmzTarget78Schema` | `src/models/xamz-target78.ts` |

### listVolumes2

- **Signature**: `listVolumes2(request: AwsStorageGateway.ListVolumes2Request, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ListVolumes2Error>`
- **Wire**: `POST /#ListVolumes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ListVolumes2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ListVolumes2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1` | `xAmzTarget1Schema` | `src/models/xamz-target1.ts` |

### notifyWhenUploaded

- **Signature**: `notifyWhenUploaded(request: AwsStorageGateway.NotifyWhenUploadedRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.NotifyWhenUploadedError>`
- **Wire**: `POST /#NotifyWhenUploaded`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.NotifyWhenUploadedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.NotifyWhenUploadedRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi` | `xAmzTarget3AwsStorageGatewayAwsStorageGatewayApiSchema` | `src/models/xamz-target3-aws-storage-gateway-aws-storage-gateway-api.ts` |

### refreshCache

- **Signature**: `refreshCache(request: AwsStorageGateway.RefreshCacheRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.RefreshCacheError>`
- **Wire**: `POST /#RefreshCache`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.RefreshCacheError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.RefreshCacheRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi` | `xAmzTarget4AwsStorageGatewayAwsStorageGatewayApiSchema` | `src/models/xamz-target4-aws-storage-gateway-aws-storage-gateway-api.ts` |

### removeTagsFromResource

- **Signature**: `removeTagsFromResource(request: AwsStorageGateway.RemoveTagsFromResourceRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.RemoveTagsFromResourceError>`
- **Wire**: `POST /#RemoveTagsFromResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.RemoveTagsFromResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.RemoveTagsFromResourceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget13` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget13` | `xAmzTarget13Schema` | `src/models/xamz-target13.ts` |

### resetCache

- **Signature**: `resetCache(request: AwsStorageGateway.ResetCacheRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ResetCacheError>`
- **Wire**: `POST /#ResetCache`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ResetCacheError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ResetCacheRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget10` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget10` | `xAmzTarget10Schema` | `src/models/xamz-target10.ts` |

### retrieveTapeArchive

- **Signature**: `retrieveTapeArchive(request: AwsStorageGateway.RetrieveTapeArchiveRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.RetrieveTapeArchiveError>`
- **Wire**: `POST /#RetrieveTapeArchive`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.RetrieveTapeArchiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.RetrieveTapeArchiveRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5` | `xAmzTarget5Schema` | `src/models/xamz-target5.ts` |

### retrieveTapeRecoveryPoint

- **Signature**: `retrieveTapeRecoveryPoint(request: AwsStorageGateway.RetrieveTapeRecoveryPointRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.RetrieveTapeRecoveryPointError>`
- **Wire**: `POST /#RetrieveTapeRecoveryPoint`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.RetrieveTapeRecoveryPointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.RetrieveTapeRecoveryPointRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6` | `xAmzTarget6Schema` | `src/models/xamz-target6.ts` |

### setLocalConsolePassword

- **Signature**: `setLocalConsolePassword(request: AwsStorageGateway.SetLocalConsolePasswordRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.SetLocalConsolePasswordError>`
- **Wire**: `POST /#SetLocalConsolePassword`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.SetLocalConsolePasswordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.SetLocalConsolePasswordRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget79` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget79` | `xAmzTarget79Schema` | `src/models/xamz-target79.ts` |

### setSmbGuestPassword

- **Signature**: `setSmbGuestPassword(request: AwsStorageGateway.SetSmbGuestPasswordRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.SetSmbGuestPasswordError>`
- **Wire**: `POST /#SetSMBGuestPassword`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.SetSmbGuestPasswordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.SetSmbGuestPasswordRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget80` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget80` | `xAmzTarget80Schema` | `src/models/xamz-target80.ts` |

### shutdownGateway

- **Signature**: `shutdownGateway(request: AwsStorageGateway.ShutdownGatewayRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.ShutdownGatewayError>`
- **Wire**: `POST /#ShutdownGateway`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.ShutdownGatewayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.ShutdownGatewayRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7` | `xAmzTarget7Schema` | `src/models/xamz-target7.ts` |

### startAvailabilityMonitorTest

- **Signature**: `startAvailabilityMonitorTest(request: AwsStorageGateway.StartAvailabilityMonitorTestRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.StartAvailabilityMonitorTestError>`
- **Wire**: `POST /#StartAvailabilityMonitorTest`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.StartAvailabilityMonitorTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.StartAvailabilityMonitorTestRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget64` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget64` | `xAmzTarget64Schema` | `src/models/xamz-target64.ts` |

### startGateway

- **Signature**: `startGateway(request: AwsStorageGateway.StartGatewayRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.StartGatewayError>`
- **Wire**: `POST /#StartGateway`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.StartGatewayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.StartGatewayRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget57` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget57` | `xAmzTarget57Schema` | `src/models/xamz-target57.ts` |

### updateAutomaticTapeCreationPolicy

- **Signature**: `updateAutomaticTapeCreationPolicy(request: AwsStorageGateway.UpdateAutomaticTapeCreationPolicyRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateAutomaticTapeCreationPolicyError>`
- **Wire**: `POST /#UpdateAutomaticTapeCreationPolicy`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateAutomaticTapeCreationPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateAutomaticTapeCreationPolicyRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget46` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget46` | `xAmzTarget46Schema` | `src/models/xamz-target46.ts` |

### updateBandwidthRateLimit

- **Signature**: `updateBandwidthRateLimit(request: AwsStorageGateway.UpdateBandwidthRateLimitRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateBandwidthRateLimitError>`
- **Wire**: `POST /#UpdateBandwidthRateLimit`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateBandwidthRateLimitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateBandwidthRateLimitRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget49` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget49` | `xAmzTarget49Schema` | `src/models/xamz-target49.ts` |

### updateBandwidthRateLimitSchedule

- **Signature**: `updateBandwidthRateLimitSchedule(request: AwsStorageGateway.UpdateBandwidthRateLimitScheduleRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateBandwidthRateLimitScheduleError>`
- **Wire**: `POST /#UpdateBandwidthRateLimitSchedule`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateBandwidthRateLimitScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateBandwidthRateLimitScheduleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget66` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget66` | `xAmzTarget66Schema` | `src/models/xamz-target66.ts` |

### updateChapCredentials

- **Signature**: `updateChapCredentials(request: AwsStorageGateway.UpdateChapCredentialsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateChapCredentialsError>`
- **Wire**: `POST /#UpdateChapCredentials`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateChapCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateChapCredentialsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget52` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget52` | `xAmzTarget52Schema` | `src/models/xamz-target52.ts` |

### updateFileSystemAssociation

- **Signature**: `updateFileSystemAssociation(request: AwsStorageGateway.UpdateFileSystemAssociationRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateFileSystemAssociationError>`
- **Wire**: `POST /#UpdateFileSystemAssociation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateFileSystemAssociationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateFileSystemAssociationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget69` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget69` | `xAmzTarget69Schema` | `src/models/xamz-target69.ts` |

### updateGatewayInformation

- **Signature**: `updateGatewayInformation(request: AwsStorageGateway.UpdateGatewayInformationRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateGatewayInformationError>`
- **Wire**: `POST /#UpdateGatewayInformation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateGatewayInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateGatewayInformationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget70` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget70` | `xAmzTarget70Schema` | `src/models/xamz-target70.ts` |

### updateGatewaySoftwareNow

- **Signature**: `updateGatewaySoftwareNow(request: AwsStorageGateway.UpdateGatewaySoftwareNowRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateGatewaySoftwareNowError>`
- **Wire**: `POST /#UpdateGatewaySoftwareNow`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateGatewaySoftwareNowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateGatewaySoftwareNowRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget81` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget81` | `xAmzTarget81Schema` | `src/models/xamz-target81.ts` |

### updateMaintenanceStartTime

- **Signature**: `updateMaintenanceStartTime(request: AwsStorageGateway.UpdateMaintenanceStartTimeRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateMaintenanceStartTimeError>`
- **Wire**: `POST /#UpdateMaintenanceStartTime`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateMaintenanceStartTimeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateMaintenanceStartTimeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget72` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget72` | `xAmzTarget72Schema` | `src/models/xamz-target72.ts` |

### updateNfsFileShare

- **Signature**: `updateNfsFileShare(request: AwsStorageGateway.UpdateNfsFileShareRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateNfsFileShareError>`
- **Wire**: `POST /#UpdateNFSFileShare`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateNfsFileShareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateNfsFileShareRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget28` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget28` | `xAmzTarget28Schema` | `src/models/xamz-target28.ts` |

### updateSmbFileShare

- **Signature**: `updateSmbFileShare(request: AwsStorageGateway.UpdateSmbFileShareRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateSmbFileShareError>`
- **Wire**: `POST /#UpdateSMBFileShare`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateSmbFileShareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateSmbFileShareRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget31` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget31` | `xAmzTarget31Schema` | `src/models/xamz-target31.ts` |

### updateSmbFileShareVisibility

- **Signature**: `updateSmbFileShareVisibility(request: AwsStorageGateway.UpdateSmbFileShareVisibilityRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateSmbFileShareVisibilityError>`
- **Wire**: `POST /#UpdateSMBFileShareVisibility`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateSmbFileShareVisibilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateSmbFileShareVisibilityRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget82` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget82` | `xAmzTarget82Schema` | `src/models/xamz-target82.ts` |

### updateSmbLocalGroups

- **Signature**: `updateSmbLocalGroups(request: AwsStorageGateway.UpdateSmbLocalGroupsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateSmbLocalGroupsError>`
- **Wire**: `POST /#UpdateSMBLocalGroups`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateSmbLocalGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateSmbLocalGroupsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget83` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget83` | `xAmzTarget83Schema` | `src/models/xamz-target83.ts` |

### updateSmbSecurityStrategy

- **Signature**: `updateSmbSecurityStrategy(request: AwsStorageGateway.UpdateSmbSecurityStrategyRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateSmbSecurityStrategyError>`
- **Wire**: `POST /#UpdateSMBSecurityStrategy`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateSmbSecurityStrategyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateSmbSecurityStrategyRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget84` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget84` | `xAmzTarget84Schema` | `src/models/xamz-target84.ts` |

### updateSnapshotSchedule

- **Signature**: `updateSnapshotSchedule(request: AwsStorageGateway.UpdateSnapshotScheduleRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateSnapshotScheduleError>`
- **Wire**: `POST /#UpdateSnapshotSchedule`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateSnapshotScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateSnapshotScheduleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget60` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget60` | `xAmzTarget60Schema` | `src/models/xamz-target60.ts` |

### updateVtlDeviceType

- **Signature**: `updateVtlDeviceType(request: AwsStorageGateway.UpdateVtlDeviceTypeRequest, options?: RequestOptions): ApiPromise<undefined, AwsStorageGateway.UpdateVtlDeviceTypeError>`
- **Wire**: `POST /#UpdateVTLDeviceType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AwsStorageGateway.UpdateVtlDeviceTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStorageGateway.UpdateVtlDeviceTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget85` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget85` | `xAmzTarget85Schema` | `src/models/xamz-target85.ts` |

