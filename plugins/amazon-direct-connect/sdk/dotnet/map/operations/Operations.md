<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/AwsDirectConnect/Api/Operations.cs` · 15 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AllocateConnectionOnInterconnect2

- **Auth**: `options.Sigv4`
- **Signature**: `AllocateConnectionOnInterconnect2(AllocateConnectionOnInterconnect2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AllocateConnectionOnInterconnect2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AllocateConnectionOnInterconnect2Request` | `src/AwsDirectConnect/Requests/Operations/AllocateConnectionOnInterconnect2Request.cs` |
| `XAmzTargetAwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTargetAwsDirectConnectOperationsApi.cs` |
| `AllocateConnectionOnInterconnect2Error` | `src/AwsDirectConnect/Errors/AllocateConnectionOnInterconnect2Error.cs` |

### AllocateHostedConnection2

- **Auth**: `options.Sigv4`
- **Signature**: `AllocateHostedConnection2(AllocateHostedConnection2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AllocateHostedConnection2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AllocateHostedConnection2Request` | `src/AwsDirectConnect/Requests/Operations/AllocateHostedConnection2Request.cs` |
| `XAmzTarget1AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget1AwsDirectConnectOperationsApi.cs` |
| `AllocateHostedConnection2Error` | `src/AwsDirectConnect/Errors/AllocateHostedConnection2Error.cs` |

### AllocatePrivateVirtualInterface2

- **Auth**: `options.Sigv4`
- **Signature**: `AllocatePrivateVirtualInterface2(AllocatePrivateVirtualInterface2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AllocatePrivateVirtualInterface2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AllocatePrivateVirtualInterface2Request` | `src/AwsDirectConnect/Requests/Operations/AllocatePrivateVirtualInterface2Request.cs` |
| `XAmzTarget2AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget2AwsDirectConnectOperationsApi.cs` |
| `AllocatePrivateVirtualInterface2Error` | `src/AwsDirectConnect/Errors/AllocatePrivateVirtualInterface2Error.cs` |

### AllocatePublicVirtualInterface2

- **Auth**: `options.Sigv4`
- **Signature**: `AllocatePublicVirtualInterface2(AllocatePublicVirtualInterface2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AllocatePublicVirtualInterface2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AllocatePublicVirtualInterface2Request` | `src/AwsDirectConnect/Requests/Operations/AllocatePublicVirtualInterface2Request.cs` |
| `XAmzTarget3AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget3AwsDirectConnectOperationsApi.cs` |
| `AllocatePublicVirtualInterface2Error` | `src/AwsDirectConnect/Errors/AllocatePublicVirtualInterface2Error.cs` |

### AllocateTransitVirtualInterface2

- **Auth**: `options.Sigv4`
- **Signature**: `AllocateTransitVirtualInterface2(AllocateTransitVirtualInterface2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AllocateTransitVirtualInterface2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AllocateTransitVirtualInterface2Request` | `src/AwsDirectConnect/Requests/Operations/AllocateTransitVirtualInterface2Request.cs` |
| `XAmzTarget4AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget4AwsDirectConnectOperationsApi.cs` |
| `AllocateTransitVirtualInterface2Error` | `src/AwsDirectConnect/Errors/AllocateTransitVirtualInterface2Error.cs` |

### AssociateConnectionsToResiliencyGroup

- **Auth**: `options.Sigv4`
- **Signature**: `AssociateConnectionsToResiliencyGroup(AssociateConnectionsToResiliencyGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssociateConnectionsToResiliencyGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociateConnectionsToResiliencyGroupOperationRequest` | `src/AwsDirectConnect/Requests/Operations/AssociateConnectionsToResiliencyGroupOperationRequest.cs` |
| `XAmzTarget10AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget10AwsDirectConnectOperationsApi.cs` |
| `AssociateConnectionsToResiliencyGroupError` | `src/AwsDirectConnect/Errors/AssociateConnectionsToResiliencyGroupError.cs` |

### ConfirmConnection2

- **Auth**: `options.Sigv4`
- **Signature**: `ConfirmConnection2(ConfirmConnection2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ConfirmConnection2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConfirmConnection2Request` | `src/AwsDirectConnect/Requests/Operations/ConfirmConnection2Request.cs` |
| `XAmzTarget5AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget5AwsDirectConnectOperationsApi.cs` |
| `ConfirmConnection2Error` | `src/AwsDirectConnect/Errors/ConfirmConnection2Error.cs` |

### ConfirmCustomerAgreement2

- **Auth**: `options.Sigv4`
- **Signature**: `ConfirmCustomerAgreement2(ConfirmCustomerAgreement2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ConfirmCustomerAgreement2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConfirmCustomerAgreement2Request` | `src/AwsDirectConnect/Requests/Operations/ConfirmCustomerAgreement2Request.cs` |
| `XAmzTarget6AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget6AwsDirectConnectOperationsApi.cs` |
| `ConfirmCustomerAgreement2Error` | `src/AwsDirectConnect/Errors/ConfirmCustomerAgreement2Error.cs` |

### ConfirmPrivateVirtualInterface2

- **Auth**: `options.Sigv4`
- **Signature**: `ConfirmPrivateVirtualInterface2(ConfirmPrivateVirtualInterface2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ConfirmPrivateVirtualInterface2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConfirmPrivateVirtualInterface2Request` | `src/AwsDirectConnect/Requests/Operations/ConfirmPrivateVirtualInterface2Request.cs` |
| `XAmzTarget7AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget7AwsDirectConnectOperationsApi.cs` |
| `ConfirmPrivateVirtualInterface2Error` | `src/AwsDirectConnect/Errors/ConfirmPrivateVirtualInterface2Error.cs` |

### ConfirmPublicVirtualInterface2

- **Auth**: `options.Sigv4`
- **Signature**: `ConfirmPublicVirtualInterface2(ConfirmPublicVirtualInterface2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ConfirmPublicVirtualInterface2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConfirmPublicVirtualInterface2Request` | `src/AwsDirectConnect/Requests/Operations/ConfirmPublicVirtualInterface2Request.cs` |
| `XAmzTarget8AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget8AwsDirectConnectOperationsApi.cs` |
| `ConfirmPublicVirtualInterface2Error` | `src/AwsDirectConnect/Errors/ConfirmPublicVirtualInterface2Error.cs` |

### ConfirmTransitVirtualInterface2

- **Auth**: `options.Sigv4`
- **Signature**: `ConfirmTransitVirtualInterface2(ConfirmTransitVirtualInterface2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ConfirmTransitVirtualInterface2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConfirmTransitVirtualInterface2Request` | `src/AwsDirectConnect/Requests/Operations/ConfirmTransitVirtualInterface2Request.cs` |
| `XAmzTarget9AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget9AwsDirectConnectOperationsApi.cs` |
| `ConfirmTransitVirtualInterface2Error` | `src/AwsDirectConnect/Errors/ConfirmTransitVirtualInterface2Error.cs` |

### DisassociateConnectionsFromResiliencyGroup

- **Auth**: `options.Sigv4`
- **Signature**: `DisassociateConnectionsFromResiliencyGroup(DisassociateConnectionsFromResiliencyGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DisassociateConnectionsFromResiliencyGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisassociateConnectionsFromResiliencyGroupOperationRequest` | `src/AwsDirectConnect/Requests/Operations/DisassociateConnectionsFromResiliencyGroupOperationRequest.cs` |
| `XAmzTarget11AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget11AwsDirectConnectOperationsApi.cs` |
| `DisassociateConnectionsFromResiliencyGroupError` | `src/AwsDirectConnect/Errors/DisassociateConnectionsFromResiliencyGroupError.cs` |

### ListResiliencyGroupAssociations

- **Auth**: `options.Sigv4`
- **Signature**: `ListResiliencyGroupAssociations(ListResiliencyGroupAssociationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListResiliencyGroupAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListResiliencyGroupAssociationsOperationRequest` | `src/AwsDirectConnect/Requests/Operations/ListResiliencyGroupAssociationsOperationRequest.cs` |
| `XAmzTarget12AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget12AwsDirectConnectOperationsApi.cs` |
| `ListResiliencyGroupAssociationsError` | `src/AwsDirectConnect/Errors/ListResiliencyGroupAssociationsError.cs` |

### ListVirtualInterfaceRoutes

- **Auth**: `options.Sigv4`
- **Signature**: `ListVirtualInterfaceRoutes(ListVirtualInterfaceRoutesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListVirtualInterfaceRoutesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVirtualInterfaceRoutesOperationRequest` | `src/AwsDirectConnect/Requests/Operations/ListVirtualInterfaceRoutesOperationRequest.cs` |
| `XAmzTarget13AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget13AwsDirectConnectOperationsApi.cs` |
| `ListVirtualInterfaceRoutesError` | `src/AwsDirectConnect/Errors/ListVirtualInterfaceRoutesError.cs` |

### UpdateConnectionsBillingMode

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateConnectionsBillingMode(UpdateConnectionsBillingModeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateConnectionsBillingModeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateConnectionsBillingModeOperationRequest` | `src/AwsDirectConnect/Requests/Operations/UpdateConnectionsBillingModeOperationRequest.cs` |
| `XAmzTarget14AwsDirectConnectOperationsApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget14AwsDirectConnectOperationsApi.cs` |
| `UpdateConnectionsBillingModeError` | `src/AwsDirectConnect/Errors/UpdateConnectionsBillingModeError.cs` |

