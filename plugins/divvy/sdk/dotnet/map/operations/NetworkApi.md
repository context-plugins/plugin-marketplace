<!-- Generated file — do not edit; regenerated with the SDK. -->

# NetworkApi — operations

Accessor: `client.NetworkApi` · Source: `src/Divvy/Api/NetworkApi.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AcceptInvitation

- **Signature**: `AcceptInvitation(AcceptInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AcceptInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AcceptInvitationRequest` | `src/Divvy/Requests/NetworkApi/AcceptInvitationRequest.cs` |
| `AcceptInvitationRequestDto` | `src/Divvy/Models/AcceptInvitationRequestDto.cs` |
| `AcceptInvitationError` | `src/Divvy/Errors/AcceptInvitationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateCustomerInvitation

- **Signature**: `CreateCustomerInvitation(CreateCustomerInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateCustomerInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerInvitationRequest` | `src/Divvy/Requests/NetworkApi/CreateCustomerInvitationRequest.cs` |
| `CreateInvitationRequestDto` | `src/Divvy/Models/CreateInvitationRequestDto.cs` |
| `CreateCustomerInvitationError` | `src/Divvy/Errors/CreateCustomerInvitationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateVendorInvitation

- **Signature**: `CreateVendorInvitation(CreateVendorInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateVendorInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVendorInvitationRequest` | `src/Divvy/Requests/NetworkApi/CreateVendorInvitationRequest.cs` |
| `CreateInvitationRequestDto` | `src/Divvy/Models/CreateInvitationRequestDto.cs` |
| `CreateVendorInvitationError` | `src/Divvy/Errors/CreateVendorInvitationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### DeleteCustomerInvitation

- **Signature**: `DeleteCustomerInvitation(DeleteCustomerInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCustomerInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomerInvitationRequest` | `src/Divvy/Requests/NetworkApi/DeleteCustomerInvitationRequest.cs` |
| `DeleteCustomerInvitationError` | `src/Divvy/Errors/DeleteCustomerInvitationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### DeleteVendorInvitation

- **Signature**: `DeleteVendorInvitation(DeleteVendorInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteVendorInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVendorInvitationRequest` | `src/Divvy/Requests/NetworkApi/DeleteVendorInvitationRequest.cs` |
| `DeleteVendorInvitationError` | `src/Divvy/Errors/DeleteVendorInvitationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetCustomerInvitation

- **Signature**: `GetCustomerInvitation(GetCustomerInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `GetInvitationResponseDto`
- **Error**: `ApiException<GetCustomerInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerInvitationRequest` | `src/Divvy/Requests/NetworkApi/GetCustomerInvitationRequest.cs` |
| `GetInvitationResponseDto` | `src/Divvy/Models/GetInvitationResponseDto.cs` |
| `GetCustomerInvitationError` | `src/Divvy/Errors/GetCustomerInvitationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetVendorInvitation

- **Signature**: `GetVendorInvitation(GetVendorInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `GetInvitationResponseDto`
- **Error**: `ApiException<GetVendorInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVendorInvitationRequest` | `src/Divvy/Requests/NetworkApi/GetVendorInvitationRequest.cs` |
| `GetInvitationResponseDto` | `src/Divvy/Models/GetInvitationResponseDto.cs` |
| `GetVendorInvitationError` | `src/Divvy/Errors/GetVendorInvitationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### InviteVendorNotInBillNetwork

- **Signature**: `InviteVendorNotInBillNetwork(InviteVendorNotInBillNetworkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<InviteVendorNotInBillNetworkError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InviteVendorNotInBillNetworkRequest` | `src/Divvy/Requests/NetworkApi/InviteVendorNotInBillNetworkRequest.cs` |
| `InviteVendorNotInBillNetworkRequestDto` | `src/Divvy/Models/InviteVendorNotInBillNetworkRequestDto.cs` |
| `InviteVendorNotInBillNetworkError` | `src/Divvy/Errors/InviteVendorNotInBillNetworkError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### Search

- **Signature**: `Search(SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Query params (wire ← C#)**: `name` ← `Name`, `scope` ← `Scope`, `zipOrPostalCode` ← `ZipOrPostalCode`, `accountNumber` ← `AccountNumber`
- **Returns**: `NetworkSearchResponseDto`
- **Error**: `ApiException<SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchRequest` | `src/Divvy/Requests/NetworkApi/SearchRequest.cs` |
| `ScopeType` | `src/Divvy/Models/Enums/ScopeType.cs` |
| `NetworkSearchResponseDto` | `src/Divvy/Models/NetworkSearchResponseDto.cs` |
| `SearchError` | `src/Divvy/Errors/SearchError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

