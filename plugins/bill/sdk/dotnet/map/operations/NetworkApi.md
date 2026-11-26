<!-- Generated file — do not edit; regenerated with the SDK. -->

# NetworkApi — operations

Accessor: `client.NetworkApi` · Source: `src/Bill/Api/NetworkApi.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AcceptInvitation

- **Signature**: `AcceptInvitation(AcceptInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AcceptInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AcceptInvitationRequest` | `src/Bill/Requests/NetworkApi/AcceptInvitationRequest.cs` |
| `AcceptInvitationRequestDto` | `src/Bill/Models/AcceptInvitationRequestDto.cs` |
| `AcceptInvitationError` | `src/Bill/Errors/AcceptInvitationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateCustomerInvitation

- **Signature**: `CreateCustomerInvitation(CreateCustomerInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateCustomerInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerInvitationRequest` | `src/Bill/Requests/NetworkApi/CreateCustomerInvitationRequest.cs` |
| `CreateInvitationRequestDto` | `src/Bill/Models/CreateInvitationRequestDto.cs` |
| `CreateCustomerInvitationError` | `src/Bill/Errors/CreateCustomerInvitationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateVendorInvitation

- **Signature**: `CreateVendorInvitation(CreateVendorInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateVendorInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVendorInvitationRequest` | `src/Bill/Requests/NetworkApi/CreateVendorInvitationRequest.cs` |
| `CreateInvitationRequestDto` | `src/Bill/Models/CreateInvitationRequestDto.cs` |
| `CreateVendorInvitationError` | `src/Bill/Errors/CreateVendorInvitationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteCustomerInvitation

- **Signature**: `DeleteCustomerInvitation(DeleteCustomerInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCustomerInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomerInvitationRequest` | `src/Bill/Requests/NetworkApi/DeleteCustomerInvitationRequest.cs` |
| `DeleteCustomerInvitationError` | `src/Bill/Errors/DeleteCustomerInvitationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteVendorInvitation

- **Signature**: `DeleteVendorInvitation(DeleteVendorInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteVendorInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVendorInvitationRequest` | `src/Bill/Requests/NetworkApi/DeleteVendorInvitationRequest.cs` |
| `DeleteVendorInvitationError` | `src/Bill/Errors/DeleteVendorInvitationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetCustomerInvitation

- **Signature**: `GetCustomerInvitation(GetCustomerInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `GetInvitationResponseDto`
- **Error**: `ApiException<GetCustomerInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerInvitationRequest` | `src/Bill/Requests/NetworkApi/GetCustomerInvitationRequest.cs` |
| `GetInvitationResponseDto` | `src/Bill/Models/GetInvitationResponseDto.cs` |
| `GetCustomerInvitationError` | `src/Bill/Errors/GetCustomerInvitationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetVendorInvitation

- **Signature**: `GetVendorInvitation(GetVendorInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `GetInvitationResponseDto`
- **Error**: `ApiException<GetVendorInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVendorInvitationRequest` | `src/Bill/Requests/NetworkApi/GetVendorInvitationRequest.cs` |
| `GetInvitationResponseDto` | `src/Bill/Models/GetInvitationResponseDto.cs` |
| `GetVendorInvitationError` | `src/Bill/Errors/GetVendorInvitationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### InviteVendorNotInBillNetwork

- **Signature**: `InviteVendorNotInBillNetwork(InviteVendorNotInBillNetworkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<InviteVendorNotInBillNetworkError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InviteVendorNotInBillNetworkRequest` | `src/Bill/Requests/NetworkApi/InviteVendorNotInBillNetworkRequest.cs` |
| `InviteVendorNotInBillNetworkRequestDto` | `src/Bill/Models/InviteVendorNotInBillNetworkRequestDto.cs` |
| `InviteVendorNotInBillNetworkError` | `src/Bill/Errors/InviteVendorNotInBillNetworkError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### Search

- **Signature**: `Search(SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Query params (wire ← C#)**: `name` ← `Name`, `scope` ← `Scope`, `zipOrPostalCode` ← `ZipOrPostalCode`, `accountNumber` ← `AccountNumber`
- **Returns**: `NetworkSearchResponseDto`
- **Error**: `ApiException<SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchRequest` | `src/Bill/Requests/NetworkApi/SearchRequest.cs` |
| `ScopeType` | `src/Bill/Models/Enums/ScopeType.cs` |
| `NetworkSearchResponseDto` | `src/Bill/Models/NetworkSearchResponseDto.cs` |
| `SearchError` | `src/Bill/Errors/SearchError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

