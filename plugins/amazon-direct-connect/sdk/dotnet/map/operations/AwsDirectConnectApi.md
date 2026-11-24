<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsDirectConnectApi — operations

Accessor: `client.AwsDirectConnectApi` · Source: `src/AwsDirectConnect/Api/AwsDirectConnectApi.cs` · 63 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AcceptDirectConnectGatewayAssociationProposal

- **Auth**: `options.Sigv4`
- **Signature**: `AcceptDirectConnectGatewayAssociationProposal(AcceptDirectConnectGatewayAssociationProposalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AcceptDirectConnectGatewayAssociationProposalError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AcceptDirectConnectGatewayAssociationProposalOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/AcceptDirectConnectGatewayAssociationProposalOperationRequest.cs` |
| `XAmzTarget` | `src/AwsDirectConnect/Models/Enums/XAmzTarget.cs` |
| `AcceptDirectConnectGatewayAssociationProposalError` | `src/AwsDirectConnect/Errors/AcceptDirectConnectGatewayAssociationProposalError.cs` |

### AllocateConnectionOnInterconnect

- **Auth**: `options.Sigv4`
- **Signature**: `AllocateConnectionOnInterconnect(AllocateConnectionOnInterconnectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AllocateConnectionOnInterconnectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AllocateConnectionOnInterconnectOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/AllocateConnectionOnInterconnectOperationRequest.cs` |
| `XAmzTarget4` | `src/AwsDirectConnect/Models/Enums/XAmzTarget4.cs` |
| `AllocateConnectionOnInterconnectError` | `src/AwsDirectConnect/Errors/AllocateConnectionOnInterconnectError.cs` |

### AllocateHostedConnection

- **Auth**: `options.Sigv4`
- **Signature**: `AllocateHostedConnection(AllocateHostedConnectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AllocateHostedConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AllocateHostedConnectionOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/AllocateHostedConnectionOperationRequest.cs` |
| `XAmzTarget5` | `src/AwsDirectConnect/Models/Enums/XAmzTarget5.cs` |
| `AllocateHostedConnectionError` | `src/AwsDirectConnect/Errors/AllocateHostedConnectionError.cs` |

### AllocatePrivateVirtualInterface

- **Auth**: `options.Sigv4`
- **Signature**: `AllocatePrivateVirtualInterface(AllocatePrivateVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AllocatePrivateVirtualInterfaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AllocatePrivateVirtualInterfaceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/AllocatePrivateVirtualInterfaceOperationRequest.cs` |
| `XAmzTarget6` | `src/AwsDirectConnect/Models/Enums/XAmzTarget6.cs` |
| `AllocatePrivateVirtualInterfaceError` | `src/AwsDirectConnect/Errors/AllocatePrivateVirtualInterfaceError.cs` |

### AllocatePublicVirtualInterface

- **Auth**: `options.Sigv4`
- **Signature**: `AllocatePublicVirtualInterface(AllocatePublicVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AllocatePublicVirtualInterfaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AllocatePublicVirtualInterfaceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/AllocatePublicVirtualInterfaceOperationRequest.cs` |
| `XAmzTarget7` | `src/AwsDirectConnect/Models/Enums/XAmzTarget7.cs` |
| `AllocatePublicVirtualInterfaceError` | `src/AwsDirectConnect/Errors/AllocatePublicVirtualInterfaceError.cs` |

### AllocateTransitVirtualInterface

- **Auth**: `options.Sigv4`
- **Signature**: `AllocateTransitVirtualInterface(AllocateTransitVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AllocateTransitVirtualInterfaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AllocateTransitVirtualInterfaceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/AllocateTransitVirtualInterfaceOperationRequest.cs` |
| `XAmzTarget8` | `src/AwsDirectConnect/Models/Enums/XAmzTarget8.cs` |
| `AllocateTransitVirtualInterfaceError` | `src/AwsDirectConnect/Errors/AllocateTransitVirtualInterfaceError.cs` |

### AssociateConnectionWithLag

- **Auth**: `options.Sigv4`
- **Signature**: `AssociateConnectionWithLag(AssociateConnectionWithLagOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssociateConnectionWithLagError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociateConnectionWithLagOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/AssociateConnectionWithLagOperationRequest.cs` |
| `XAmzTarget14` | `src/AwsDirectConnect/Models/Enums/XAmzTarget14.cs` |
| `AssociateConnectionWithLagError` | `src/AwsDirectConnect/Errors/AssociateConnectionWithLagError.cs` |

### AssociateHostedConnection

- **Auth**: `options.Sigv4`
- **Signature**: `AssociateHostedConnection(AssociateHostedConnectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssociateHostedConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociateHostedConnectionOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/AssociateHostedConnectionOperationRequest.cs` |
| `XAmzTarget21` | `src/AwsDirectConnect/Models/Enums/XAmzTarget21.cs` |
| `AssociateHostedConnectionError` | `src/AwsDirectConnect/Errors/AssociateHostedConnectionError.cs` |

### AssociateMacSecKey

- **Auth**: `options.Sigv4`
- **Signature**: `AssociateMacSecKey(AssociateMacSecKeyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssociateMacSecKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociateMacSecKeyOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/AssociateMacSecKeyOperationRequest.cs` |
| `XAmzTarget23` | `src/AwsDirectConnect/Models/Enums/XAmzTarget23.cs` |
| `AssociateMacSecKeyError` | `src/AwsDirectConnect/Errors/AssociateMacSecKeyError.cs` |

### AssociateVirtualInterface

- **Auth**: `options.Sigv4`
- **Signature**: `AssociateVirtualInterface(AssociateVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssociateVirtualInterfaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociateVirtualInterfaceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/AssociateVirtualInterfaceOperationRequest.cs` |
| `XAmzTarget25` | `src/AwsDirectConnect/Models/Enums/XAmzTarget25.cs` |
| `AssociateVirtualInterfaceError` | `src/AwsDirectConnect/Errors/AssociateVirtualInterfaceError.cs` |

### ConfirmConnection

- **Auth**: `options.Sigv4`
- **Signature**: `ConfirmConnection(ConfirmConnectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ConfirmConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConfirmConnectionOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/ConfirmConnectionOperationRequest.cs` |
| `XAmzTarget9` | `src/AwsDirectConnect/Models/Enums/XAmzTarget9.cs` |
| `ConfirmConnectionError` | `src/AwsDirectConnect/Errors/ConfirmConnectionError.cs` |

### ConfirmCustomerAgreement

- **Auth**: `options.Sigv4`
- **Signature**: `ConfirmCustomerAgreement(ConfirmCustomerAgreementOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ConfirmCustomerAgreementError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConfirmCustomerAgreementOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/ConfirmCustomerAgreementOperationRequest.cs` |
| `XAmzTarget10` | `src/AwsDirectConnect/Models/Enums/XAmzTarget10.cs` |
| `ConfirmCustomerAgreementError` | `src/AwsDirectConnect/Errors/ConfirmCustomerAgreementError.cs` |

### ConfirmPrivateVirtualInterface

- **Auth**: `options.Sigv4`
- **Signature**: `ConfirmPrivateVirtualInterface(ConfirmPrivateVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ConfirmPrivateVirtualInterfaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConfirmPrivateVirtualInterfaceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/ConfirmPrivateVirtualInterfaceOperationRequest.cs` |
| `XAmzTarget11` | `src/AwsDirectConnect/Models/Enums/XAmzTarget11.cs` |
| `ConfirmPrivateVirtualInterfaceError` | `src/AwsDirectConnect/Errors/ConfirmPrivateVirtualInterfaceError.cs` |

### ConfirmPublicVirtualInterface

- **Auth**: `options.Sigv4`
- **Signature**: `ConfirmPublicVirtualInterface(ConfirmPublicVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ConfirmPublicVirtualInterfaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConfirmPublicVirtualInterfaceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/ConfirmPublicVirtualInterfaceOperationRequest.cs` |
| `XAmzTarget12` | `src/AwsDirectConnect/Models/Enums/XAmzTarget12.cs` |
| `ConfirmPublicVirtualInterfaceError` | `src/AwsDirectConnect/Errors/ConfirmPublicVirtualInterfaceError.cs` |

### ConfirmTransitVirtualInterface

- **Auth**: `options.Sigv4`
- **Signature**: `ConfirmTransitVirtualInterface(ConfirmTransitVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ConfirmTransitVirtualInterfaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConfirmTransitVirtualInterfaceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/ConfirmTransitVirtualInterfaceOperationRequest.cs` |
| `XAmzTarget13` | `src/AwsDirectConnect/Models/Enums/XAmzTarget13.cs` |
| `ConfirmTransitVirtualInterfaceError` | `src/AwsDirectConnect/Errors/ConfirmTransitVirtualInterfaceError.cs` |

### CreateBgpPeer

- **Auth**: `options.Sigv4`
- **Signature**: `CreateBgpPeer(CreateBgpPeerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateBgpPeerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBgpPeerOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateBgpPeerOperationRequest.cs` |
| `XAmzTarget28` | `src/AwsDirectConnect/Models/Enums/XAmzTarget28.cs` |
| `CreateBgpPeerError` | `src/AwsDirectConnect/Errors/CreateBgpPeerError.cs` |

### CreateConnection

- **Auth**: `options.Sigv4`
- **Signature**: `CreateConnection(CreateConnectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateConnectionOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateConnectionOperationRequest.cs` |
| `XAmzTarget15` | `src/AwsDirectConnect/Models/Enums/XAmzTarget15.cs` |
| `CreateConnectionError` | `src/AwsDirectConnect/Errors/CreateConnectionError.cs` |

### CreateDirectConnectGateway

- **Auth**: `options.Sigv4`
- **Signature**: `CreateDirectConnectGateway(CreateDirectConnectGatewayOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateDirectConnectGatewayError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDirectConnectGatewayOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateDirectConnectGatewayOperationRequest.cs` |
| `XAmzTarget30` | `src/AwsDirectConnect/Models/Enums/XAmzTarget30.cs` |
| `CreateDirectConnectGatewayError` | `src/AwsDirectConnect/Errors/CreateDirectConnectGatewayError.cs` |

### CreateDirectConnectGatewayAssociation

- **Auth**: `options.Sigv4`
- **Signature**: `CreateDirectConnectGatewayAssociation(CreateDirectConnectGatewayAssociationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateDirectConnectGatewayAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDirectConnectGatewayAssociationOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateDirectConnectGatewayAssociationOperationRequest.cs` |
| `XAmzTarget34` | `src/AwsDirectConnect/Models/Enums/XAmzTarget34.cs` |
| `CreateDirectConnectGatewayAssociationError` | `src/AwsDirectConnect/Errors/CreateDirectConnectGatewayAssociationError.cs` |

### CreateDirectConnectGatewayAssociationProposal

- **Auth**: `options.Sigv4`
- **Signature**: `CreateDirectConnectGatewayAssociationProposal(CreateDirectConnectGatewayAssociationProposalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateDirectConnectGatewayAssociationProposalError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDirectConnectGatewayAssociationProposalOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateDirectConnectGatewayAssociationProposalOperationRequest.cs` |
| `XAmzTarget1` | `src/AwsDirectConnect/Models/Enums/XAmzTarget1.cs` |
| `CreateDirectConnectGatewayAssociationProposalError` | `src/AwsDirectConnect/Errors/CreateDirectConnectGatewayAssociationProposalError.cs` |

### CreateInterconnect

- **Auth**: `options.Sigv4`
- **Signature**: `CreateInterconnect(CreateInterconnectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateInterconnectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateInterconnectOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateInterconnectOperationRequest.cs` |
| `XAmzTarget38` | `src/AwsDirectConnect/Models/Enums/XAmzTarget38.cs` |
| `CreateInterconnectError` | `src/AwsDirectConnect/Errors/CreateInterconnectError.cs` |

### CreateLag

- **Auth**: `options.Sigv4`
- **Signature**: `CreateLag(CreateLagOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateLagError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateLagOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateLagOperationRequest.cs` |
| `XAmzTarget41` | `src/AwsDirectConnect/Models/Enums/XAmzTarget41.cs` |
| `CreateLagError` | `src/AwsDirectConnect/Errors/CreateLagError.cs` |

### CreatePrivateVirtualInterface

- **Auth**: `options.Sigv4`
- **Signature**: `CreatePrivateVirtualInterface(CreatePrivateVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreatePrivateVirtualInterfaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePrivateVirtualInterfaceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreatePrivateVirtualInterfaceOperationRequest.cs` |
| `XAmzTarget45` | `src/AwsDirectConnect/Models/Enums/XAmzTarget45.cs` |
| `CreatePrivateVirtualInterfaceError` | `src/AwsDirectConnect/Errors/CreatePrivateVirtualInterfaceError.cs` |

### CreatePublicVirtualInterface

- **Auth**: `options.Sigv4`
- **Signature**: `CreatePublicVirtualInterface(CreatePublicVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreatePublicVirtualInterfaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePublicVirtualInterfaceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreatePublicVirtualInterfaceOperationRequest.cs` |
| `XAmzTarget46` | `src/AwsDirectConnect/Models/Enums/XAmzTarget46.cs` |
| `CreatePublicVirtualInterfaceError` | `src/AwsDirectConnect/Errors/CreatePublicVirtualInterfaceError.cs` |

### CreateTransitVirtualInterface

- **Auth**: `options.Sigv4`
- **Signature**: `CreateTransitVirtualInterface(CreateTransitVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateTransitVirtualInterfaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTransitVirtualInterfaceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateTransitVirtualInterfaceOperationRequest.cs` |
| `XAmzTarget47` | `src/AwsDirectConnect/Models/Enums/XAmzTarget47.cs` |
| `CreateTransitVirtualInterfaceError` | `src/AwsDirectConnect/Errors/CreateTransitVirtualInterfaceError.cs` |

### DeleteBgpPeer

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBgpPeer(DeleteBgpPeerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteBgpPeerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBgpPeerOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteBgpPeerOperationRequest.cs` |
| `XAmzTarget29` | `src/AwsDirectConnect/Models/Enums/XAmzTarget29.cs` |
| `DeleteBgpPeerError` | `src/AwsDirectConnect/Errors/DeleteBgpPeerError.cs` |

### DeleteConnection

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteConnection(DeleteConnectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteConnectionOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteConnectionOperationRequest.cs` |
| `XAmzTarget16` | `src/AwsDirectConnect/Models/Enums/XAmzTarget16.cs` |
| `DeleteConnectionError` | `src/AwsDirectConnect/Errors/DeleteConnectionError.cs` |

### DeleteDirectConnectGateway

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteDirectConnectGateway(DeleteDirectConnectGatewayOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDirectConnectGatewayError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDirectConnectGatewayOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteDirectConnectGatewayOperationRequest.cs` |
| `XAmzTarget31` | `src/AwsDirectConnect/Models/Enums/XAmzTarget31.cs` |
| `DeleteDirectConnectGatewayError` | `src/AwsDirectConnect/Errors/DeleteDirectConnectGatewayError.cs` |

### DeleteDirectConnectGatewayAssociation

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteDirectConnectGatewayAssociation(DeleteDirectConnectGatewayAssociationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDirectConnectGatewayAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDirectConnectGatewayAssociationOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteDirectConnectGatewayAssociationOperationRequest.cs` |
| `XAmzTarget35` | `src/AwsDirectConnect/Models/Enums/XAmzTarget35.cs` |
| `DeleteDirectConnectGatewayAssociationError` | `src/AwsDirectConnect/Errors/DeleteDirectConnectGatewayAssociationError.cs` |

### DeleteDirectConnectGatewayAssociationProposal

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteDirectConnectGatewayAssociationProposal(DeleteDirectConnectGatewayAssociationProposalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDirectConnectGatewayAssociationProposalError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDirectConnectGatewayAssociationProposalOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteDirectConnectGatewayAssociationProposalOperationRequest.cs` |
| `XAmzTarget2` | `src/AwsDirectConnect/Models/Enums/XAmzTarget2.cs` |
| `DeleteDirectConnectGatewayAssociationProposalError` | `src/AwsDirectConnect/Errors/DeleteDirectConnectGatewayAssociationProposalError.cs` |

### DeleteInterconnect

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteInterconnect(DeleteInterconnectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteInterconnectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteInterconnectOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteInterconnectOperationRequest.cs` |
| `XAmzTarget39` | `src/AwsDirectConnect/Models/Enums/XAmzTarget39.cs` |
| `DeleteInterconnectError` | `src/AwsDirectConnect/Errors/DeleteInterconnectError.cs` |

### DeleteLag

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteLag(DeleteLagOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteLagError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteLagOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteLagOperationRequest.cs` |
| `XAmzTarget42` | `src/AwsDirectConnect/Models/Enums/XAmzTarget42.cs` |
| `DeleteLagError` | `src/AwsDirectConnect/Errors/DeleteLagError.cs` |

### DeleteVirtualInterface

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteVirtualInterface(DeleteVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteVirtualInterfaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVirtualInterfaceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteVirtualInterfaceOperationRequest.cs` |
| `XAmzTarget26` | `src/AwsDirectConnect/Models/Enums/XAmzTarget26.cs` |
| `DeleteVirtualInterfaceError` | `src/AwsDirectConnect/Errors/DeleteVirtualInterfaceError.cs` |

### DescribeConnectionLoa

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeConnectionLoa(DescribeConnectionLoaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeConnectionLoaError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeConnectionLoaOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeConnectionLoaOperationRequest.cs` |
| `XAmzTarget48` | `src/AwsDirectConnect/Models/Enums/XAmzTarget48.cs` |
| `DescribeConnectionLoaError` | `src/AwsDirectConnect/Errors/DescribeConnectionLoaError.cs` |

### DescribeConnections

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeConnections(DescribeConnectionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeConnectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeConnectionsOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeConnectionsOperationRequest.cs` |
| `XAmzTarget17` | `src/AwsDirectConnect/Models/Enums/XAmzTarget17.cs` |
| `DescribeConnectionsError` | `src/AwsDirectConnect/Errors/DescribeConnectionsError.cs` |

### DescribeConnectionsOnInterconnect

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeConnectionsOnInterconnect(DescribeConnectionsOnInterconnectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeConnectionsOnInterconnectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeConnectionsOnInterconnectOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeConnectionsOnInterconnectOperationRequest.cs` |
| `XAmzTarget18` | `src/AwsDirectConnect/Models/Enums/XAmzTarget18.cs` |
| `DescribeConnectionsOnInterconnectError` | `src/AwsDirectConnect/Errors/DescribeConnectionsOnInterconnectError.cs` |

### DescribeCustomerMetadata

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeCustomerMetadata(DescribeCustomerMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeCustomerMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeCustomerMetadataRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeCustomerMetadataRequest.cs` |
| `XAmzTarget49` | `src/AwsDirectConnect/Models/Enums/XAmzTarget49.cs` |
| `DescribeCustomerMetadataError` | `src/AwsDirectConnect/Errors/DescribeCustomerMetadataError.cs` |

### DescribeDirectConnectGatewayAssociationProposals

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDirectConnectGatewayAssociationProposals(DescribeDirectConnectGatewayAssociationProposalsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDirectConnectGatewayAssociationProposalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDirectConnectGatewayAssociationProposalsOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeDirectConnectGatewayAssociationProposalsOperationRequest.cs` |
| `XAmzTarget3` | `src/AwsDirectConnect/Models/Enums/XAmzTarget3.cs` |
| `DescribeDirectConnectGatewayAssociationProposalsError` | `src/AwsDirectConnect/Errors/DescribeDirectConnectGatewayAssociationProposalsError.cs` |

### DescribeDirectConnectGatewayAssociations

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDirectConnectGatewayAssociations(DescribeDirectConnectGatewayAssociationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDirectConnectGatewayAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDirectConnectGatewayAssociationsOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeDirectConnectGatewayAssociationsOperationRequest.cs` |
| `XAmzTarget36` | `src/AwsDirectConnect/Models/Enums/XAmzTarget36.cs` |
| `DescribeDirectConnectGatewayAssociationsError` | `src/AwsDirectConnect/Errors/DescribeDirectConnectGatewayAssociationsError.cs` |

### DescribeDirectConnectGatewayAttachments

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDirectConnectGatewayAttachments(DescribeDirectConnectGatewayAttachmentsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDirectConnectGatewayAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDirectConnectGatewayAttachmentsOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeDirectConnectGatewayAttachmentsOperationRequest.cs` |
| `XAmzTarget50` | `src/AwsDirectConnect/Models/Enums/XAmzTarget50.cs` |
| `DescribeDirectConnectGatewayAttachmentsError` | `src/AwsDirectConnect/Errors/DescribeDirectConnectGatewayAttachmentsError.cs` |

### DescribeDirectConnectGateways

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDirectConnectGateways(DescribeDirectConnectGatewaysOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDirectConnectGatewaysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDirectConnectGatewaysOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeDirectConnectGatewaysOperationRequest.cs` |
| `XAmzTarget32` | `src/AwsDirectConnect/Models/Enums/XAmzTarget32.cs` |
| `DescribeDirectConnectGatewaysError` | `src/AwsDirectConnect/Errors/DescribeDirectConnectGatewaysError.cs` |

### DescribeHostedConnections

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeHostedConnections(DescribeHostedConnectionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeHostedConnectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeHostedConnectionsOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeHostedConnectionsOperationRequest.cs` |
| `XAmzTarget22` | `src/AwsDirectConnect/Models/Enums/XAmzTarget22.cs` |
| `DescribeHostedConnectionsError` | `src/AwsDirectConnect/Errors/DescribeHostedConnectionsError.cs` |

### DescribeInterconnectLoa

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeInterconnectLoa(DescribeInterconnectLoaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeInterconnectLoaError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeInterconnectLoaOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeInterconnectLoaOperationRequest.cs` |
| `XAmzTarget51` | `src/AwsDirectConnect/Models/Enums/XAmzTarget51.cs` |
| `DescribeInterconnectLoaError` | `src/AwsDirectConnect/Errors/DescribeInterconnectLoaError.cs` |

### DescribeInterconnects

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeInterconnects(DescribeInterconnectsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeInterconnectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeInterconnectsOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeInterconnectsOperationRequest.cs` |
| `XAmzTarget40` | `src/AwsDirectConnect/Models/Enums/XAmzTarget40.cs` |
| `DescribeInterconnectsError` | `src/AwsDirectConnect/Errors/DescribeInterconnectsError.cs` |

### DescribeLags

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeLags(DescribeLagsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeLagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeLagsOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeLagsOperationRequest.cs` |
| `XAmzTarget43` | `src/AwsDirectConnect/Models/Enums/XAmzTarget43.cs` |
| `DescribeLagsError` | `src/AwsDirectConnect/Errors/DescribeLagsError.cs` |

### DescribeLoa

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeLoa(DescribeLoaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeLoaError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeLoaOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeLoaOperationRequest.cs` |
| `XAmzTarget52` | `src/AwsDirectConnect/Models/Enums/XAmzTarget52.cs` |
| `DescribeLoaError` | `src/AwsDirectConnect/Errors/DescribeLoaError.cs` |

### DescribeLocations

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeLocations(DescribeLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeLocationsRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeLocationsRequest.cs` |
| `XAmzTarget53` | `src/AwsDirectConnect/Models/Enums/XAmzTarget53.cs` |
| `DescribeLocationsError` | `src/AwsDirectConnect/Errors/DescribeLocationsError.cs` |

### DescribeRouterConfiguration

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeRouterConfiguration(DescribeRouterConfigurationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeRouterConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeRouterConfigurationOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeRouterConfigurationOperationRequest.cs` |
| `XAmzTarget54` | `src/AwsDirectConnect/Models/Enums/XAmzTarget54.cs` |
| `DescribeRouterConfigurationError` | `src/AwsDirectConnect/Errors/DescribeRouterConfigurationError.cs` |

### DescribeTags

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeTags(DescribeTagsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeTagsOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeTagsOperationRequest.cs` |
| `XAmzTarget55` | `src/AwsDirectConnect/Models/Enums/XAmzTarget55.cs` |
| `DescribeTagsError` | `src/AwsDirectConnect/Errors/DescribeTagsError.cs` |

### DescribeVirtualGateways

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeVirtualGateways(DescribeVirtualGatewaysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeVirtualGatewaysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeVirtualGatewaysRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeVirtualGatewaysRequest.cs` |
| `XAmzTarget56` | `src/AwsDirectConnect/Models/Enums/XAmzTarget56.cs` |
| `DescribeVirtualGatewaysError` | `src/AwsDirectConnect/Errors/DescribeVirtualGatewaysError.cs` |

### DescribeVirtualInterfaces

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeVirtualInterfaces(DescribeVirtualInterfacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeVirtualInterfacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeVirtualInterfacesOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeVirtualInterfacesOperationRequest.cs` |
| `XAmzTarget27` | `src/AwsDirectConnect/Models/Enums/XAmzTarget27.cs` |
| `DescribeVirtualInterfacesError` | `src/AwsDirectConnect/Errors/DescribeVirtualInterfacesError.cs` |

### DisassociateConnectionFromLag

- **Auth**: `options.Sigv4`
- **Signature**: `DisassociateConnectionFromLag(DisassociateConnectionFromLagOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DisassociateConnectionFromLagError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisassociateConnectionFromLagOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DisassociateConnectionFromLagOperationRequest.cs` |
| `XAmzTarget19` | `src/AwsDirectConnect/Models/Enums/XAmzTarget19.cs` |
| `DisassociateConnectionFromLagError` | `src/AwsDirectConnect/Errors/DisassociateConnectionFromLagError.cs` |

### DisassociateMacSecKey

- **Auth**: `options.Sigv4`
- **Signature**: `DisassociateMacSecKey(DisassociateMacSecKeyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DisassociateMacSecKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisassociateMacSecKeyOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/DisassociateMacSecKeyOperationRequest.cs` |
| `XAmzTarget24` | `src/AwsDirectConnect/Models/Enums/XAmzTarget24.cs` |
| `DisassociateMacSecKeyError` | `src/AwsDirectConnect/Errors/DisassociateMacSecKeyError.cs` |

### ListVirtualInterfaceTestHistory

- **Auth**: `options.Sigv4`
- **Signature**: `ListVirtualInterfaceTestHistory(ListVirtualInterfaceTestHistoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListVirtualInterfaceTestHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVirtualInterfaceTestHistoryOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/ListVirtualInterfaceTestHistoryOperationRequest.cs` |
| `XAmzTarget57` | `src/AwsDirectConnect/Models/Enums/XAmzTarget57.cs` |
| `ListVirtualInterfaceTestHistoryError` | `src/AwsDirectConnect/Errors/ListVirtualInterfaceTestHistoryError.cs` |

### StartBgpFailoverTest

- **Auth**: `options.Sigv4`
- **Signature**: `StartBgpFailoverTest(StartBgpFailoverTestOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartBgpFailoverTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartBgpFailoverTestOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/StartBgpFailoverTestOperationRequest.cs` |
| `XAmzTarget58` | `src/AwsDirectConnect/Models/Enums/XAmzTarget58.cs` |
| `StartBgpFailoverTestError` | `src/AwsDirectConnect/Errors/StartBgpFailoverTestError.cs` |

### StopBgpFailoverTest

- **Auth**: `options.Sigv4`
- **Signature**: `StopBgpFailoverTest(StopBgpFailoverTestOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopBgpFailoverTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopBgpFailoverTestOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/StopBgpFailoverTestOperationRequest.cs` |
| `XAmzTarget59` | `src/AwsDirectConnect/Models/Enums/XAmzTarget59.cs` |
| `StopBgpFailoverTestError` | `src/AwsDirectConnect/Errors/StopBgpFailoverTestError.cs` |

### TagResource

- **Auth**: `options.Sigv4`
- **Signature**: `TagResource(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResourceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/TagResourceOperationRequest.cs` |
| `XAmzTarget60` | `src/AwsDirectConnect/Models/Enums/XAmzTarget60.cs` |
| `TagResourceError` | `src/AwsDirectConnect/Errors/TagResourceError.cs` |

### UntagResource

- **Auth**: `options.Sigv4`
- **Signature**: `UntagResource(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UntagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagResourceOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/UntagResourceOperationRequest.cs` |
| `XAmzTarget61` | `src/AwsDirectConnect/Models/Enums/XAmzTarget61.cs` |
| `UntagResourceError` | `src/AwsDirectConnect/Errors/UntagResourceError.cs` |

### UpdateConnection

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateConnection(UpdateConnectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateConnectionOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/UpdateConnectionOperationRequest.cs` |
| `XAmzTarget20` | `src/AwsDirectConnect/Models/Enums/XAmzTarget20.cs` |
| `UpdateConnectionError` | `src/AwsDirectConnect/Errors/UpdateConnectionError.cs` |

### UpdateDirectConnectGateway

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateDirectConnectGateway(UpdateDirectConnectGatewayOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateDirectConnectGatewayError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDirectConnectGatewayOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/UpdateDirectConnectGatewayOperationRequest.cs` |
| `XAmzTarget33` | `src/AwsDirectConnect/Models/Enums/XAmzTarget33.cs` |
| `UpdateDirectConnectGatewayError` | `src/AwsDirectConnect/Errors/UpdateDirectConnectGatewayError.cs` |

### UpdateDirectConnectGatewayAssociation

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateDirectConnectGatewayAssociation(UpdateDirectConnectGatewayAssociationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateDirectConnectGatewayAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDirectConnectGatewayAssociationOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/UpdateDirectConnectGatewayAssociationOperationRequest.cs` |
| `XAmzTarget37` | `src/AwsDirectConnect/Models/Enums/XAmzTarget37.cs` |
| `UpdateDirectConnectGatewayAssociationError` | `src/AwsDirectConnect/Errors/UpdateDirectConnectGatewayAssociationError.cs` |

### UpdateLag

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateLag(UpdateLagOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateLagError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateLagOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/UpdateLagOperationRequest.cs` |
| `XAmzTarget44` | `src/AwsDirectConnect/Models/Enums/XAmzTarget44.cs` |
| `UpdateLagError` | `src/AwsDirectConnect/Errors/UpdateLagError.cs` |

### UpdateVirtualInterfaceAttributes

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateVirtualInterfaceAttributes(UpdateVirtualInterfaceAttributesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateVirtualInterfaceAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateVirtualInterfaceAttributesOperationRequest` | `src/AwsDirectConnect/Requests/AwsDirectConnectApi/UpdateVirtualInterfaceAttributesOperationRequest.cs` |
| `XAmzTarget62` | `src/AwsDirectConnect/Models/Enums/XAmzTarget62.cs` |
| `UpdateVirtualInterfaceAttributesError` | `src/AwsDirectConnect/Errors/UpdateVirtualInterfaceAttributesError.cs` |

