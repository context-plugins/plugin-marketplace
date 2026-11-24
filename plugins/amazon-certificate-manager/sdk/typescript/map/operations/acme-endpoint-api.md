<!-- Generated file — do not edit; regenerated with the SDK. -->

# AcmeEndpointApi — operations

Accessor: `client.acmeEndpointApi` · Source: `src/resources/acme-endpoint-api.ts` · 5 operations · Request and error types: namespace `AcmeEndpointApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-certificate-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAcmeEndpoint

- **Signature**: `createAcmeEndpoint(request: AcmeEndpointApi.CreateAcmeEndpointRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeEndpointApi.CreateAcmeEndpointError>`
- **Wire**: `POST /#CreateAcmeEndpoint`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeEndpointApi.CreateAcmeEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeEndpointApi.CreateAcmeEndpointRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCertificateManagerAcmeEndpointApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCertificateManagerAcmeEndpointApi` | `xAmzTargetAwsCertificateManagerAcmeEndpointApiSchema` | `src/models/xamz-target-aws-certificate-manager-acme-endpoint-api.ts` |

### deleteAcmeEndpoint

- **Signature**: `deleteAcmeEndpoint(request: AcmeEndpointApi.DeleteAcmeEndpointRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeEndpointApi.DeleteAcmeEndpointError>`
- **Wire**: `POST /#DeleteAcmeEndpoint`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeEndpointApi.DeleteAcmeEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeEndpointApi.DeleteAcmeEndpointRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsCertificateManagerAcmeEndpointApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsCertificateManagerAcmeEndpointApi` | `xAmzTarget1AwsCertificateManagerAcmeEndpointApiSchema` | `src/models/xamz-target1-aws-certificate-manager-acme-endpoint-api.ts` |

### describeAcmeEndpoint

- **Signature**: `describeAcmeEndpoint(request: AcmeEndpointApi.DescribeAcmeEndpointRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeEndpointApi.DescribeAcmeEndpointError>`
- **Wire**: `POST /#DescribeAcmeEndpoint`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeEndpointApi.DescribeAcmeEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeEndpointApi.DescribeAcmeEndpointRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsCertificateManagerAcmeEndpointApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsCertificateManagerAcmeEndpointApi` | `xAmzTarget2AwsCertificateManagerAcmeEndpointApiSchema` | `src/models/xamz-target2-aws-certificate-manager-acme-endpoint-api.ts` |

### listAcmeEndpoints

- **Signature**: `listAcmeEndpoints(request: AcmeEndpointApi.ListAcmeEndpointsRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeEndpointApi.ListAcmeEndpointsError>`
- **Wire**: `POST /#ListAcmeEndpoints`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeEndpointApi.ListAcmeEndpointsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeEndpointApi.ListAcmeEndpointsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsCertificateManagerAcmeEndpointApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsCertificateManagerAcmeEndpointApi` | `xAmzTarget3AwsCertificateManagerAcmeEndpointApiSchema` | `src/models/xamz-target3-aws-certificate-manager-acme-endpoint-api.ts` |

### updateAcmeEndpoint

- **Signature**: `updateAcmeEndpoint(request: AcmeEndpointApi.UpdateAcmeEndpointRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeEndpointApi.UpdateAcmeEndpointError>`
- **Wire**: `POST /#UpdateAcmeEndpoint`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeEndpointApi.UpdateAcmeEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeEndpointApi.UpdateAcmeEndpointRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsCertificateManagerAcmeEndpointApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsCertificateManagerAcmeEndpointApi` | `xAmzTarget4AwsCertificateManagerAcmeEndpointApiSchema` | `src/models/xamz-target4-aws-certificate-manager-acme-endpoint-api.ts` |

