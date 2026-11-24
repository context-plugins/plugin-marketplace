<!-- Generated file — do not edit; regenerated with the SDK. -->

# AmazonStorageGatewayRestApi — operations

Accessor: `client.amazonStorageGatewayRestApi` · Source: `src/resources/amazon-storage-gateway-rest-api.ts` · 5 operations · Request and error types: namespace `AmazonStorageGatewayRestApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-storage-gateway`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activateGateway

- **Signature**: `activateGateway(request: AmazonStorageGatewayRestApi.ActivateGatewayRequest, options?: RequestOptions): ApiPromise<undefined, AmazonStorageGatewayRestApi.ActivateGatewayError>`
- **Wire**: `POST /#ActivateGateway`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AmazonStorageGatewayRestApi.ActivateGatewayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonStorageGatewayRestApi.ActivateGatewayRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget` | `xAmzTargetSchema` | `src/models/xamz-target.ts` |

### createNfsFileShare

- **Signature**: `createNfsFileShare(request: AmazonStorageGatewayRestApi.CreateNfsFileShareRequest, options?: RequestOptions): ApiPromise<undefined, AmazonStorageGatewayRestApi.CreateNfsFileShareError>`
- **Wire**: `POST /#CreateNFSFileShare`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AmazonStorageGatewayRestApi.CreateNfsFileShareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonStorageGatewayRestApi.CreateNfsFileShareRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2` | `xAmzTarget2Schema` | `src/models/xamz-target2.ts` |

### describeGatewayInformation

- **Signature**: `describeGatewayInformation(request: AmazonStorageGatewayRestApi.DescribeGatewayInformationRequest, options?: RequestOptions): ApiPromise<undefined, AmazonStorageGatewayRestApi.DescribeGatewayInformationError>`
- **Wire**: `POST /#DescribeGatewayInformation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AmazonStorageGatewayRestApi.DescribeGatewayInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonStorageGatewayRestApi.DescribeGatewayInformationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4` | `xAmzTarget4Schema` | `src/models/xamz-target4.ts` |

### listGateways

- **Signature**: `listGateways(request: AmazonStorageGatewayRestApi.ListGatewaysRequest, options?: RequestOptions): ApiPromise<undefined, AmazonStorageGatewayRestApi.ListGatewaysError>`
- **Wire**: `POST /#ListGateways`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AmazonStorageGatewayRestApi.ListGatewaysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonStorageGatewayRestApi.ListGatewaysRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3` | `xAmzTarget3Schema` | `src/models/xamz-target3.ts` |

### listVolumes

- **Signature**: `listVolumes(request: AmazonStorageGatewayRestApi.ListVolumesRequest, options?: RequestOptions): ApiPromise<undefined, AmazonStorageGatewayRestApi.ListVolumesError>`
- **Wire**: `POST /#ListVolumes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStorageGatewayError` with `kind: "api"`, an instance of `AmazonStorageGatewayRestApi.ListVolumesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonStorageGatewayRestApi.ListVolumesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1` | `xAmzTarget1Schema` | `src/models/xamz-target1.ts` |

