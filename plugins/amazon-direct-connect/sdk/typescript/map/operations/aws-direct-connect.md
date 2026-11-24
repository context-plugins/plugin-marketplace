<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsDirectConnect — operations

Accessor: `client.awsDirectConnect` · Source: `src/resources/aws-direct-connect.ts` · 63 operations · Request and error types: namespace `AwsDirectConnect`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-direct-connect`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acceptDirectConnectGatewayAssociationProposal

- **Signature**: `acceptDirectConnectGatewayAssociationProposal(request: AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalError>`
- **Wire**: `POST /#AcceptDirectConnectGatewayAssociationProposal`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget` | `xAmzTargetSchema` | `src/models/xamz-target.ts` |

### allocateConnectionOnInterconnect

- **Signature**: `allocateConnectionOnInterconnect(request: AwsDirectConnect.AllocateConnectionOnInterconnectRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.AllocateConnectionOnInterconnectError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /#AllocateConnectionOnInterconnect`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.AllocateConnectionOnInterconnectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.AllocateConnectionOnInterconnectRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4` | `xAmzTarget4Schema` | `src/models/xamz-target4.ts` |

### allocateHostedConnection

- **Signature**: `allocateHostedConnection(request: AwsDirectConnect.AllocateHostedConnectionRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.AllocateHostedConnectionError>`
- **Wire**: `POST /#AllocateHostedConnection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.AllocateHostedConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.AllocateHostedConnectionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5` | `xAmzTarget5Schema` | `src/models/xamz-target5.ts` |

### allocatePrivateVirtualInterface

- **Signature**: `allocatePrivateVirtualInterface(request: AwsDirectConnect.AllocatePrivateVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.AllocatePrivateVirtualInterfaceError>`
- **Wire**: `POST /#AllocatePrivateVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.AllocatePrivateVirtualInterfaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.AllocatePrivateVirtualInterfaceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6` | `xAmzTarget6Schema` | `src/models/xamz-target6.ts` |

### allocatePublicVirtualInterface

- **Signature**: `allocatePublicVirtualInterface(request: AwsDirectConnect.AllocatePublicVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.AllocatePublicVirtualInterfaceError>`
- **Wire**: `POST /#AllocatePublicVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.AllocatePublicVirtualInterfaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.AllocatePublicVirtualInterfaceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7` | `xAmzTarget7Schema` | `src/models/xamz-target7.ts` |

### allocateTransitVirtualInterface

- **Signature**: `allocateTransitVirtualInterface(request: AwsDirectConnect.AllocateTransitVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.AllocateTransitVirtualInterfaceError>`
- **Wire**: `POST /#AllocateTransitVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.AllocateTransitVirtualInterfaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.AllocateTransitVirtualInterfaceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8` | `xAmzTarget8Schema` | `src/models/xamz-target8.ts` |

### associateConnectionWithLag

- **Signature**: `associateConnectionWithLag(request: AwsDirectConnect.AssociateConnectionWithLagRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.AssociateConnectionWithLagError>`
- **Wire**: `POST /#AssociateConnectionWithLag`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.AssociateConnectionWithLagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.AssociateConnectionWithLagRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget14` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget14` | `xAmzTarget14Schema` | `src/models/xamz-target14.ts` |

### associateHostedConnection

- **Signature**: `associateHostedConnection(request: AwsDirectConnect.AssociateHostedConnectionRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.AssociateHostedConnectionError>`
- **Wire**: `POST /#AssociateHostedConnection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.AssociateHostedConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.AssociateHostedConnectionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget21` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget21` | `xAmzTarget21Schema` | `src/models/xamz-target21.ts` |

### associateMacSecKey

- **Signature**: `associateMacSecKey(request: AwsDirectConnect.AssociateMacSecKeyRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.AssociateMacSecKeyError>`
- **Wire**: `POST /#AssociateMacSecKey`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.AssociateMacSecKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.AssociateMacSecKeyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget23` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget23` | `xAmzTarget23Schema` | `src/models/xamz-target23.ts` |

### associateVirtualInterface

- **Signature**: `associateVirtualInterface(request: AwsDirectConnect.AssociateVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.AssociateVirtualInterfaceError>`
- **Wire**: `POST /#AssociateVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.AssociateVirtualInterfaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.AssociateVirtualInterfaceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget25` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget25` | `xAmzTarget25Schema` | `src/models/xamz-target25.ts` |

### confirmConnection

- **Signature**: `confirmConnection(request: AwsDirectConnect.ConfirmConnectionRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.ConfirmConnectionError>`
- **Wire**: `POST /#ConfirmConnection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.ConfirmConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.ConfirmConnectionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget9` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget9` | `xAmzTarget9Schema` | `src/models/xamz-target9.ts` |

### confirmCustomerAgreement

- **Signature**: `confirmCustomerAgreement(request: AwsDirectConnect.ConfirmCustomerAgreementRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.ConfirmCustomerAgreementError>`
- **Wire**: `POST /#ConfirmCustomerAgreement`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.ConfirmCustomerAgreementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.ConfirmCustomerAgreementRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget10` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget10` | `xAmzTarget10Schema` | `src/models/xamz-target10.ts` |

### confirmPrivateVirtualInterface

- **Signature**: `confirmPrivateVirtualInterface(request: AwsDirectConnect.ConfirmPrivateVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.ConfirmPrivateVirtualInterfaceError>`
- **Wire**: `POST /#ConfirmPrivateVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.ConfirmPrivateVirtualInterfaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.ConfirmPrivateVirtualInterfaceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget11` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget11` | `xAmzTarget11Schema` | `src/models/xamz-target11.ts` |

### confirmPublicVirtualInterface

- **Signature**: `confirmPublicVirtualInterface(request: AwsDirectConnect.ConfirmPublicVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.ConfirmPublicVirtualInterfaceError>`
- **Wire**: `POST /#ConfirmPublicVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.ConfirmPublicVirtualInterfaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.ConfirmPublicVirtualInterfaceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget12` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget12` | `xAmzTarget12Schema` | `src/models/xamz-target12.ts` |

### confirmTransitVirtualInterface

- **Signature**: `confirmTransitVirtualInterface(request: AwsDirectConnect.ConfirmTransitVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.ConfirmTransitVirtualInterfaceError>`
- **Wire**: `POST /#ConfirmTransitVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.ConfirmTransitVirtualInterfaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.ConfirmTransitVirtualInterfaceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget13` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget13` | `xAmzTarget13Schema` | `src/models/xamz-target13.ts` |

### createBgpPeer

- **Signature**: `createBgpPeer(request: AwsDirectConnect.CreateBgpPeerRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.CreateBgpPeerError>`
- **Wire**: `POST /#CreateBGPPeer`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.CreateBgpPeerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.CreateBgpPeerRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget28` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget28` | `xAmzTarget28Schema` | `src/models/xamz-target28.ts` |

### createConnection

- **Signature**: `createConnection(request: AwsDirectConnect.CreateConnectionRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.CreateConnectionError>`
- **Wire**: `POST /#CreateConnection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.CreateConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.CreateConnectionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget15` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget15` | `xAmzTarget15Schema` | `src/models/xamz-target15.ts` |

### createDirectConnectGateway

- **Signature**: `createDirectConnectGateway(request: AwsDirectConnect.CreateDirectConnectGatewayRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.CreateDirectConnectGatewayError>`
- **Wire**: `POST /#CreateDirectConnectGateway`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.CreateDirectConnectGatewayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.CreateDirectConnectGatewayRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget30` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget30` | `xAmzTarget30Schema` | `src/models/xamz-target30.ts` |

### createDirectConnectGatewayAssociation

- **Signature**: `createDirectConnectGatewayAssociation(request: AwsDirectConnect.CreateDirectConnectGatewayAssociationRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.CreateDirectConnectGatewayAssociationError>`
- **Wire**: `POST /#CreateDirectConnectGatewayAssociation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.CreateDirectConnectGatewayAssociationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.CreateDirectConnectGatewayAssociationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget34` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget34` | `xAmzTarget34Schema` | `src/models/xamz-target34.ts` |

### createDirectConnectGatewayAssociationProposal

- **Signature**: `createDirectConnectGatewayAssociationProposal(request: AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalError>`
- **Wire**: `POST /#CreateDirectConnectGatewayAssociationProposal`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1` | `xAmzTarget1Schema` | `src/models/xamz-target1.ts` |

### createInterconnect

- **Signature**: `createInterconnect(request: AwsDirectConnect.CreateInterconnectRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.CreateInterconnectError>`
- **Wire**: `POST /#CreateInterconnect`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.CreateInterconnectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.CreateInterconnectRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget38` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget38` | `xAmzTarget38Schema` | `src/models/xamz-target38.ts` |

### createLag

- **Signature**: `createLag(request: AwsDirectConnect.CreateLagRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.CreateLagError>`
- **Wire**: `POST /#CreateLag`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.CreateLagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.CreateLagRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget41` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget41` | `xAmzTarget41Schema` | `src/models/xamz-target41.ts` |

### createPrivateVirtualInterface

- **Signature**: `createPrivateVirtualInterface(request: AwsDirectConnect.CreatePrivateVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.CreatePrivateVirtualInterfaceError>`
- **Wire**: `POST /#CreatePrivateVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.CreatePrivateVirtualInterfaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.CreatePrivateVirtualInterfaceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget45` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget45` | `xAmzTarget45Schema` | `src/models/xamz-target45.ts` |

### createPublicVirtualInterface

- **Signature**: `createPublicVirtualInterface(request: AwsDirectConnect.CreatePublicVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.CreatePublicVirtualInterfaceError>`
- **Wire**: `POST /#CreatePublicVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.CreatePublicVirtualInterfaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.CreatePublicVirtualInterfaceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget46` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget46` | `xAmzTarget46Schema` | `src/models/xamz-target46.ts` |

### createTransitVirtualInterface

- **Signature**: `createTransitVirtualInterface(request: AwsDirectConnect.CreateTransitVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.CreateTransitVirtualInterfaceError>`
- **Wire**: `POST /#CreateTransitVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.CreateTransitVirtualInterfaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.CreateTransitVirtualInterfaceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget47` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget47` | `xAmzTarget47Schema` | `src/models/xamz-target47.ts` |

### deleteBgpPeer

- **Signature**: `deleteBgpPeer(request: AwsDirectConnect.DeleteBgpPeerRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DeleteBgpPeerError>`
- **Wire**: `POST /#DeleteBGPPeer`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DeleteBgpPeerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DeleteBgpPeerRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget29` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget29` | `xAmzTarget29Schema` | `src/models/xamz-target29.ts` |

### deleteConnection

- **Signature**: `deleteConnection(request: AwsDirectConnect.DeleteConnectionRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DeleteConnectionError>`
- **Wire**: `POST /#DeleteConnection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DeleteConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DeleteConnectionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget16` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget16` | `xAmzTarget16Schema` | `src/models/xamz-target16.ts` |

### deleteDirectConnectGateway

- **Signature**: `deleteDirectConnectGateway(request: AwsDirectConnect.DeleteDirectConnectGatewayRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DeleteDirectConnectGatewayError>`
- **Wire**: `POST /#DeleteDirectConnectGateway`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DeleteDirectConnectGatewayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DeleteDirectConnectGatewayRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget31` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget31` | `xAmzTarget31Schema` | `src/models/xamz-target31.ts` |

### deleteDirectConnectGatewayAssociation

- **Signature**: `deleteDirectConnectGatewayAssociation(request: AwsDirectConnect.DeleteDirectConnectGatewayAssociationRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DeleteDirectConnectGatewayAssociationError>`
- **Wire**: `POST /#DeleteDirectConnectGatewayAssociation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DeleteDirectConnectGatewayAssociationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DeleteDirectConnectGatewayAssociationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget35` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget35` | `xAmzTarget35Schema` | `src/models/xamz-target35.ts` |

### deleteDirectConnectGatewayAssociationProposal

- **Signature**: `deleteDirectConnectGatewayAssociationProposal(request: AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalError>`
- **Wire**: `POST /#DeleteDirectConnectGatewayAssociationProposal`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2` | `xAmzTarget2Schema` | `src/models/xamz-target2.ts` |

### deleteInterconnect

- **Signature**: `deleteInterconnect(request: AwsDirectConnect.DeleteInterconnectRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DeleteInterconnectError>`
- **Wire**: `POST /#DeleteInterconnect`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DeleteInterconnectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DeleteInterconnectRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget39` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget39` | `xAmzTarget39Schema` | `src/models/xamz-target39.ts` |

### deleteLag

- **Signature**: `deleteLag(request: AwsDirectConnect.DeleteLagRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DeleteLagError>`
- **Wire**: `POST /#DeleteLag`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DeleteLagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DeleteLagRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget42` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget42` | `xAmzTarget42Schema` | `src/models/xamz-target42.ts` |

### deleteVirtualInterface

- **Signature**: `deleteVirtualInterface(request: AwsDirectConnect.DeleteVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DeleteVirtualInterfaceError>`
- **Wire**: `POST /#DeleteVirtualInterface`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DeleteVirtualInterfaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DeleteVirtualInterfaceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget26` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget26` | `xAmzTarget26Schema` | `src/models/xamz-target26.ts` |

### describeConnectionLoa

- **Signature**: `describeConnectionLoa(request: AwsDirectConnect.DescribeConnectionLoaRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeConnectionLoaError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /#DescribeConnectionLoa`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeConnectionLoaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeConnectionLoaRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget48` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget48` | `xAmzTarget48Schema` | `src/models/xamz-target48.ts` |

### describeConnections

- **Signature**: `describeConnections(request: AwsDirectConnect.DescribeConnectionsRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeConnectionsError>`
- **Wire**: `POST /#DescribeConnections`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeConnectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeConnectionsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget17` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget17` | `xAmzTarget17Schema` | `src/models/xamz-target17.ts` |

### describeConnectionsOnInterconnect

- **Signature**: `describeConnectionsOnInterconnect(request: AwsDirectConnect.DescribeConnectionsOnInterconnectRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeConnectionsOnInterconnectError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /#DescribeConnectionsOnInterconnect`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeConnectionsOnInterconnectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeConnectionsOnInterconnectRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget18` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget18` | `xAmzTarget18Schema` | `src/models/xamz-target18.ts` |

### describeCustomerMetadata

- **Signature**: `describeCustomerMetadata(request: AwsDirectConnect.DescribeCustomerMetadataRequest, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeCustomerMetadataError>`
- **Wire**: `POST /#DescribeCustomerMetadata`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeCustomerMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeCustomerMetadataRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget49` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget49` | `xAmzTarget49Schema` | `src/models/xamz-target49.ts` |

### describeDirectConnectGatewayAssociationProposals

- **Signature**: `describeDirectConnectGatewayAssociationProposals(request: AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsError>`
- **Wire**: `POST /#DescribeDirectConnectGatewayAssociationProposals`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3` | `xAmzTarget3Schema` | `src/models/xamz-target3.ts` |

### describeDirectConnectGatewayAssociations

- **Signature**: `describeDirectConnectGatewayAssociations(request: AwsDirectConnect.DescribeDirectConnectGatewayAssociationsRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeDirectConnectGatewayAssociationsError>`
- **Wire**: `POST /#DescribeDirectConnectGatewayAssociations`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeDirectConnectGatewayAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeDirectConnectGatewayAssociationsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget36` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget36` | `xAmzTarget36Schema` | `src/models/xamz-target36.ts` |

### describeDirectConnectGatewayAttachments

- **Signature**: `describeDirectConnectGatewayAttachments(request: AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsError>`
- **Wire**: `POST /#DescribeDirectConnectGatewayAttachments`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget50` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget50` | `xAmzTarget50Schema` | `src/models/xamz-target50.ts` |

### describeDirectConnectGateways

- **Signature**: `describeDirectConnectGateways(request: AwsDirectConnect.DescribeDirectConnectGatewaysRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeDirectConnectGatewaysError>`
- **Wire**: `POST /#DescribeDirectConnectGateways`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeDirectConnectGatewaysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeDirectConnectGatewaysRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget32` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget32` | `xAmzTarget32Schema` | `src/models/xamz-target32.ts` |

### describeHostedConnections

- **Signature**: `describeHostedConnections(request: AwsDirectConnect.DescribeHostedConnectionsRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeHostedConnectionsError>`
- **Wire**: `POST /#DescribeHostedConnections`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeHostedConnectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeHostedConnectionsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget22` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget22` | `xAmzTarget22Schema` | `src/models/xamz-target22.ts` |

### describeInterconnectLoa

- **Signature**: `describeInterconnectLoa(request: AwsDirectConnect.DescribeInterconnectLoaRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeInterconnectLoaError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /#DescribeInterconnectLoa`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeInterconnectLoaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeInterconnectLoaRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget51` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget51` | `xAmzTarget51Schema` | `src/models/xamz-target51.ts` |

### describeInterconnects

- **Signature**: `describeInterconnects(request: AwsDirectConnect.DescribeInterconnectsRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeInterconnectsError>`
- **Wire**: `POST /#DescribeInterconnects`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeInterconnectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeInterconnectsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget40` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget40` | `xAmzTarget40Schema` | `src/models/xamz-target40.ts` |

### describeLags

- **Signature**: `describeLags(request: AwsDirectConnect.DescribeLagsRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeLagsError>`
- **Wire**: `POST /#DescribeLags`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeLagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeLagsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget43` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget43` | `xAmzTarget43Schema` | `src/models/xamz-target43.ts` |

### describeLoa

- **Signature**: `describeLoa(request: AwsDirectConnect.DescribeLoaRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeLoaError>`
- **Wire**: `POST /#DescribeLoa`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeLoaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeLoaRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget52` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget52` | `xAmzTarget52Schema` | `src/models/xamz-target52.ts` |

### describeLocations

- **Signature**: `describeLocations(request: AwsDirectConnect.DescribeLocationsRequest, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeLocationsError>`
- **Wire**: `POST /#DescribeLocations`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeLocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeLocationsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget53` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget53` | `xAmzTarget53Schema` | `src/models/xamz-target53.ts` |

### describeRouterConfiguration

- **Signature**: `describeRouterConfiguration(request: AwsDirectConnect.DescribeRouterConfigurationRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeRouterConfigurationError>`
- **Wire**: `POST /#DescribeRouterConfiguration`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeRouterConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeRouterConfigurationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget54` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget54` | `xAmzTarget54Schema` | `src/models/xamz-target54.ts` |

### describeTags

- **Signature**: `describeTags(request: AwsDirectConnect.DescribeTagsRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeTagsError>`
- **Wire**: `POST /#DescribeTags`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeTagsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget55` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget55` | `xAmzTarget55Schema` | `src/models/xamz-target55.ts` |

### describeVirtualGateways

- **Signature**: `describeVirtualGateways(request: AwsDirectConnect.DescribeVirtualGatewaysRequest, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeVirtualGatewaysError>`
- **Wire**: `POST /#DescribeVirtualGateways`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeVirtualGatewaysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeVirtualGatewaysRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget56` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget56` | `xAmzTarget56Schema` | `src/models/xamz-target56.ts` |

### describeVirtualInterfaces

- **Signature**: `describeVirtualInterfaces(request: AwsDirectConnect.DescribeVirtualInterfacesRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DescribeVirtualInterfacesError>`
- **Wire**: `POST /#DescribeVirtualInterfaces`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DescribeVirtualInterfacesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DescribeVirtualInterfacesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget27` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget27` | `xAmzTarget27Schema` | `src/models/xamz-target27.ts` |

### disassociateConnectionFromLag

- **Signature**: `disassociateConnectionFromLag(request: AwsDirectConnect.DisassociateConnectionFromLagRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DisassociateConnectionFromLagError>`
- **Wire**: `POST /#DisassociateConnectionFromLag`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DisassociateConnectionFromLagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DisassociateConnectionFromLagRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget19` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget19` | `xAmzTarget19Schema` | `src/models/xamz-target19.ts` |

### disassociateMacSecKey

- **Signature**: `disassociateMacSecKey(request: AwsDirectConnect.DisassociateMacSecKeyRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.DisassociateMacSecKeyError>`
- **Wire**: `POST /#DisassociateMacSecKey`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.DisassociateMacSecKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.DisassociateMacSecKeyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget24` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget24` | `xAmzTarget24Schema` | `src/models/xamz-target24.ts` |

### listVirtualInterfaceTestHistory

- **Signature**: `listVirtualInterfaceTestHistory(request: AwsDirectConnect.ListVirtualInterfaceTestHistoryRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.ListVirtualInterfaceTestHistoryError>`
- **Wire**: `POST /#ListVirtualInterfaceTestHistory`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.ListVirtualInterfaceTestHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.ListVirtualInterfaceTestHistoryRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget57` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget57` | `xAmzTarget57Schema` | `src/models/xamz-target57.ts` |

### startBgpFailoverTest

- **Signature**: `startBgpFailoverTest(request: AwsDirectConnect.StartBgpFailoverTestRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.StartBgpFailoverTestError>`
- **Wire**: `POST /#StartBgpFailoverTest`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.StartBgpFailoverTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.StartBgpFailoverTestRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget58` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget58` | `xAmzTarget58Schema` | `src/models/xamz-target58.ts` |

### stopBgpFailoverTest

- **Signature**: `stopBgpFailoverTest(request: AwsDirectConnect.StopBgpFailoverTestRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.StopBgpFailoverTestError>`
- **Wire**: `POST /#StopBgpFailoverTest`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.StopBgpFailoverTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.StopBgpFailoverTestRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget59` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget59` | `xAmzTarget59Schema` | `src/models/xamz-target59.ts` |

### tagResource

- **Signature**: `tagResource(request: AwsDirectConnect.TagResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.TagResourceError>`
- **Wire**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.TagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.TagResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget60` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget60` | `xAmzTarget60Schema` | `src/models/xamz-target60.ts` |

### untagResource

- **Signature**: `untagResource(request: AwsDirectConnect.UntagResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.UntagResourceError>`
- **Wire**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.UntagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.UntagResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget61` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget61` | `xAmzTarget61Schema` | `src/models/xamz-target61.ts` |

### updateConnection

- **Signature**: `updateConnection(request: AwsDirectConnect.UpdateConnectionRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.UpdateConnectionError>`
- **Wire**: `POST /#UpdateConnection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.UpdateConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.UpdateConnectionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget20` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget20` | `xAmzTarget20Schema` | `src/models/xamz-target20.ts` |

### updateDirectConnectGateway

- **Signature**: `updateDirectConnectGateway(request: AwsDirectConnect.UpdateDirectConnectGatewayRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.UpdateDirectConnectGatewayError>`
- **Wire**: `POST /#UpdateDirectConnectGateway`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.UpdateDirectConnectGatewayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.UpdateDirectConnectGatewayRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget33` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget33` | `xAmzTarget33Schema` | `src/models/xamz-target33.ts` |

### updateDirectConnectGatewayAssociation

- **Signature**: `updateDirectConnectGatewayAssociation(request: AwsDirectConnect.UpdateDirectConnectGatewayAssociationRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.UpdateDirectConnectGatewayAssociationError>`
- **Wire**: `POST /#UpdateDirectConnectGatewayAssociation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.UpdateDirectConnectGatewayAssociationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.UpdateDirectConnectGatewayAssociationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget37` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget37` | `xAmzTarget37Schema` | `src/models/xamz-target37.ts` |

### updateLag

- **Signature**: `updateLag(request: AwsDirectConnect.UpdateLagRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.UpdateLagError>`
- **Wire**: `POST /#UpdateLag`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.UpdateLagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.UpdateLagRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget44` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget44` | `xAmzTarget44Schema` | `src/models/xamz-target44.ts` |

### updateVirtualInterfaceAttributes

- **Signature**: `updateVirtualInterfaceAttributes(request: AwsDirectConnect.UpdateVirtualInterfaceAttributesRequestParams, options?: RequestOptions): ApiPromise<undefined, AwsDirectConnect.UpdateVirtualInterfaceAttributesError>`
- **Wire**: `POST /#UpdateVirtualInterfaceAttributes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `AwsDirectConnect.UpdateVirtualInterfaceAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsDirectConnect.UpdateVirtualInterfaceAttributesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget62` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget62` | `xAmzTarget62Schema` | `src/models/xamz-target62.ts` |

