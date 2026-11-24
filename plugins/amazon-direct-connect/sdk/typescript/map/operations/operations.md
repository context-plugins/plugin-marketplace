<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `src/resources/operations.ts` · 15 operations · Request and error types: namespace `Operations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-direct-connect`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### allocateConnectionOnInterconnect2

- **Signature**: `allocateConnectionOnInterconnect2(request: Operations.AllocateConnectionOnInterconnect2Request, options?: RequestOptions): ApiPromise<undefined, Operations.AllocateConnectionOnInterconnect2Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /#AllocateConnectionOnInterconnect`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.AllocateConnectionOnInterconnect2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.AllocateConnectionOnInterconnect2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsDirectConnectOperationsApi` | `xAmzTargetAwsDirectConnectOperationsApiSchema` | `src/models/xamz-target-aws-direct-connect-operations-api.ts` |

### allocateHostedConnection2

- **Signature**: `allocateHostedConnection2(request: Operations.AllocateHostedConnection2Request, options?: RequestOptions): ApiPromise<undefined, Operations.AllocateHostedConnection2Error>`
- **Wire**: `POST /#AllocateHostedConnection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.AllocateHostedConnection2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.AllocateHostedConnection2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsDirectConnectOperationsApi` | `xAmzTarget1AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target1-aws-direct-connect-operations-api.ts` |

### allocatePrivateVirtualInterface2

- **Signature**: `allocatePrivateVirtualInterface2(request: Operations.AllocatePrivateVirtualInterface2Request, options?: RequestOptions): ApiPromise<undefined, Operations.AllocatePrivateVirtualInterface2Error>`
- **Wire**: `POST /#AllocatePrivateVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.AllocatePrivateVirtualInterface2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.AllocatePrivateVirtualInterface2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsDirectConnectOperationsApi` | `xAmzTarget2AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target2-aws-direct-connect-operations-api.ts` |

### allocatePublicVirtualInterface2

- **Signature**: `allocatePublicVirtualInterface2(request: Operations.AllocatePublicVirtualInterface2Request, options?: RequestOptions): ApiPromise<undefined, Operations.AllocatePublicVirtualInterface2Error>`
- **Wire**: `POST /#AllocatePublicVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.AllocatePublicVirtualInterface2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.AllocatePublicVirtualInterface2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsDirectConnectOperationsApi` | `xAmzTarget3AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target3-aws-direct-connect-operations-api.ts` |

### allocateTransitVirtualInterface2

- **Signature**: `allocateTransitVirtualInterface2(request: Operations.AllocateTransitVirtualInterface2Request, options?: RequestOptions): ApiPromise<undefined, Operations.AllocateTransitVirtualInterface2Error>`
- **Wire**: `POST /#AllocateTransitVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.AllocateTransitVirtualInterface2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.AllocateTransitVirtualInterface2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsDirectConnectOperationsApi` | `xAmzTarget4AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target4-aws-direct-connect-operations-api.ts` |

### associateConnectionsToResiliencyGroup

- **Signature**: `associateConnectionsToResiliencyGroup(request: Operations.AssociateConnectionsToResiliencyGroupRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.AssociateConnectionsToResiliencyGroupError>`
- **Wire**: `POST /#AssociateConnectionsToResiliencyGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.AssociateConnectionsToResiliencyGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.AssociateConnectionsToResiliencyGroupRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget10AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget10AwsDirectConnectOperationsApi` | `xAmzTarget10AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target10-aws-direct-connect-operations-api.ts` |

### confirmConnection2

- **Signature**: `confirmConnection2(request: Operations.ConfirmConnection2Request, options?: RequestOptions): ApiPromise<undefined, Operations.ConfirmConnection2Error>`
- **Wire**: `POST /#ConfirmConnection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.ConfirmConnection2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ConfirmConnection2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5AwsDirectConnectOperationsApi` | `xAmzTarget5AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target5-aws-direct-connect-operations-api.ts` |

### confirmCustomerAgreement2

- **Signature**: `confirmCustomerAgreement2(request: Operations.ConfirmCustomerAgreement2Request, options?: RequestOptions): ApiPromise<undefined, Operations.ConfirmCustomerAgreement2Error>`
- **Wire**: `POST /#ConfirmCustomerAgreement`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.ConfirmCustomerAgreement2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ConfirmCustomerAgreement2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6AwsDirectConnectOperationsApi` | `xAmzTarget6AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target6-aws-direct-connect-operations-api.ts` |

### confirmPrivateVirtualInterface2

- **Signature**: `confirmPrivateVirtualInterface2(request: Operations.ConfirmPrivateVirtualInterface2Request, options?: RequestOptions): ApiPromise<undefined, Operations.ConfirmPrivateVirtualInterface2Error>`
- **Wire**: `POST /#ConfirmPrivateVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.ConfirmPrivateVirtualInterface2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ConfirmPrivateVirtualInterface2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7AwsDirectConnectOperationsApi` | `xAmzTarget7AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target7-aws-direct-connect-operations-api.ts` |

### confirmPublicVirtualInterface2

- **Signature**: `confirmPublicVirtualInterface2(request: Operations.ConfirmPublicVirtualInterface2Request, options?: RequestOptions): ApiPromise<undefined, Operations.ConfirmPublicVirtualInterface2Error>`
- **Wire**: `POST /#ConfirmPublicVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.ConfirmPublicVirtualInterface2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ConfirmPublicVirtualInterface2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8AwsDirectConnectOperationsApi` | `xAmzTarget8AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target8-aws-direct-connect-operations-api.ts` |

### confirmTransitVirtualInterface2

- **Signature**: `confirmTransitVirtualInterface2(request: Operations.ConfirmTransitVirtualInterface2Request, options?: RequestOptions): ApiPromise<undefined, Operations.ConfirmTransitVirtualInterface2Error>`
- **Wire**: `POST /#ConfirmTransitVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.ConfirmTransitVirtualInterface2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ConfirmTransitVirtualInterface2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget9AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget9AwsDirectConnectOperationsApi` | `xAmzTarget9AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target9-aws-direct-connect-operations-api.ts` |

### disassociateConnectionsFromResiliencyGroup

- **Signature**: `disassociateConnectionsFromResiliencyGroup(request: Operations.DisassociateConnectionsFromResiliencyGroupRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.DisassociateConnectionsFromResiliencyGroupError>`
- **Wire**: `POST /#DisassociateConnectionsFromResiliencyGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.DisassociateConnectionsFromResiliencyGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DisassociateConnectionsFromResiliencyGroupRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget11AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget11AwsDirectConnectOperationsApi` | `xAmzTarget11AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target11-aws-direct-connect-operations-api.ts` |

### listResiliencyGroupAssociations

- **Signature**: `listResiliencyGroupAssociations(request: Operations.ListResiliencyGroupAssociationsRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.ListResiliencyGroupAssociationsError>`
- **Wire**: `POST /#ListResiliencyGroupAssociations`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.ListResiliencyGroupAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ListResiliencyGroupAssociationsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget12AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget12AwsDirectConnectOperationsApi` | `xAmzTarget12AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target12-aws-direct-connect-operations-api.ts` |

### listVirtualInterfaceRoutes

- **Signature**: `listVirtualInterfaceRoutes(request: Operations.ListVirtualInterfaceRoutesRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.ListVirtualInterfaceRoutesError>`
- **Wire**: `POST /#ListVirtualInterfaceRoutes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.ListVirtualInterfaceRoutesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ListVirtualInterfaceRoutesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget13AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget13AwsDirectConnectOperationsApi` | `xAmzTarget13AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target13-aws-direct-connect-operations-api.ts` |

### updateConnectionsBillingMode

- **Signature**: `updateConnectionsBillingMode(request: Operations.UpdateConnectionsBillingModeRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.UpdateConnectionsBillingModeError>`
- **Wire**: `POST /#UpdateConnectionsBillingMode`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `Operations.UpdateConnectionsBillingModeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.UpdateConnectionsBillingModeRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget14AwsDirectConnectOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget14AwsDirectConnectOperationsApi` | `xAmzTarget14AwsDirectConnectOperationsApiSchema` | `src/models/xamz-target14-aws-direct-connect-operations-api.ts` |

