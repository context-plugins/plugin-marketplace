<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.Customers` · Source: `src/Bill/Api/Customers.cs` · 18 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveCustomer

- **Signature**: `ArchiveCustomer(ArchiveCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `CustomerResponseDto`
- **Error**: `ApiException<ArchiveCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveCustomerRequest` | `src/Bill/Requests/Customers/ArchiveCustomerRequest.cs` |
| `CustomerResponseDto` | `src/Bill/Models/CustomerResponseDto.cs` |
| `ArchiveCustomerError` | `src/Bill/Errors/ArchiveCustomerError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ArchiveCustomerBankAccount

- **Signature**: `ArchiveCustomerBankAccount(ArchiveCustomerBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `BankAccountId`
- **Returns**: `CustomerBankAccountResponseDto`
- **Error**: `ApiException<ArchiveCustomerBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveCustomerBankAccountRequest` | `src/Bill/Requests/Customers/ArchiveCustomerBankAccountRequest.cs` |
| `CustomerBankAccountResponseDto` | `src/Bill/Models/CustomerBankAccountResponseDto.cs` |
| `ArchiveCustomerBankAccountError` | `src/Bill/Errors/ArchiveCustomerBankAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ArchiveCustomerContact

- **Signature**: `ArchiveCustomerContact(ArchiveCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `ContactId`
- **Returns**: `CustomerContactResponseDto`
- **Error**: `ApiException<ArchiveCustomerContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveCustomerContactRequest` | `src/Bill/Requests/Customers/ArchiveCustomerContactRequest.cs` |
| `CustomerContactResponseDto` | `src/Bill/Models/CustomerContactResponseDto.cs` |
| `ArchiveCustomerContactError` | `src/Bill/Errors/ArchiveCustomerContactError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### AuthorizeToChargeCustomer

- **Signature**: `AuthorizeToChargeCustomer(AuthorizeToChargeCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Body`
- **Returns**: `ChargeAuthorizationResponseDto`
- **Error**: `ApiException<AuthorizeToChargeCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AuthorizeToChargeCustomerRequest` | `src/Bill/Requests/Customers/AuthorizeToChargeCustomerRequest.cs` |
| `ChargeAuthorizationRequestDto` | `src/Bill/Models/ChargeAuthorizationRequestDto.cs` |
| `ChargeAuthorizationResponseDto` | `src/Bill/Models/ChargeAuthorizationResponseDto.cs` |
| `AuthorizeToChargeCustomerError` | `src/Bill/Errors/AuthorizeToChargeCustomerError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateCustomer

- **Signature**: `CreateCustomer(CreateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CustomerResponseDto`
- **Error**: `ApiException<CreateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerRequest` | `src/Bill/Requests/Customers/CreateCustomerRequest.cs` |
| `CustomerCreateRequestDto` | `src/Bill/Models/CustomerCreateRequestDto.cs` |
| `CustomerResponseDto` | `src/Bill/Models/CustomerResponseDto.cs` |
| `CreateCustomerError` | `src/Bill/Errors/CreateCustomerError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateCustomerBankAccount

- **Signature**: `CreateCustomerBankAccount(CreateCustomerBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Body`
- **Returns**: `CustomerBankAccountResponseDto`
- **Error**: `ApiException<CreateCustomerBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerBankAccountRequest` | `src/Bill/Requests/Customers/CreateCustomerBankAccountRequest.cs` |
| `CreateCustomerBankAccountRequestDto` | `src/Bill/Models/CreateCustomerBankAccountRequestDto.cs` |
| `CustomerBankAccountResponseDto` | `src/Bill/Models/CustomerBankAccountResponseDto.cs` |
| `CreateCustomerBankAccountError` | `src/Bill/Errors/CreateCustomerBankAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateCustomerContact

- **Signature**: `CreateCustomerContact(CreateCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Body`
- **Returns**: `CustomerContactResponseDto`
- **Error**: `ApiException<CreateCustomerContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerContactRequest` | `src/Bill/Requests/Customers/CreateCustomerContactRequest.cs` |
| `CreateCustomerContactRequestDto` | `src/Bill/Models/CreateCustomerContactRequestDto.cs` |
| `CustomerContactResponseDto` | `src/Bill/Models/CustomerContactResponseDto.cs` |
| `CreateCustomerContactError` | `src/Bill/Errors/CreateCustomerContactError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetCustomer

- **Signature**: `GetCustomer(GetCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `CustomerResponseDto`
- **Error**: `ApiException<GetCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerRequest` | `src/Bill/Requests/Customers/GetCustomerRequest.cs` |
| `CustomerResponseDto` | `src/Bill/Models/CustomerResponseDto.cs` |
| `GetCustomerError` | `src/Bill/Errors/GetCustomerError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetCustomerBankAccount

- **Signature**: `GetCustomerBankAccount(GetCustomerBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `BankAccountId`
- **Returns**: `CustomerBankAccountResponseDto`
- **Error**: `ApiException<GetCustomerBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerBankAccountRequest` | `src/Bill/Requests/Customers/GetCustomerBankAccountRequest.cs` |
| `CustomerBankAccountResponseDto` | `src/Bill/Models/CustomerBankAccountResponseDto.cs` |
| `GetCustomerBankAccountError` | `src/Bill/Errors/GetCustomerBankAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetCustomerContact

- **Signature**: `GetCustomerContact(GetCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `ContactId`
- **Returns**: `CustomerContactResponseDto`
- **Error**: `ApiException<GetCustomerContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerContactRequest` | `src/Bill/Requests/Customers/GetCustomerContactRequest.cs` |
| `CustomerContactResponseDto` | `src/Bill/Models/CustomerContactResponseDto.cs` |
| `GetCustomerContactError` | `src/Bill/Errors/GetCustomerContactError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListCustomerBankAccounts

- **Signature**: `ListCustomerBankAccounts(ListCustomerBankAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoCustomerBankAccountResponseDto`
- **Error**: `ApiException<ListCustomerBankAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerBankAccountsRequest` | `src/Bill/Requests/Customers/ListCustomerBankAccountsRequest.cs` |
| `ListResponseDtoCustomerBankAccountResponseDto` | `src/Bill/Models/ListResponseDtoCustomerBankAccountResponseDto.cs` |
| `ListCustomerBankAccountsError` | `src/Bill/Errors/ListCustomerBankAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListCustomerContacts

- **Signature**: `ListCustomerContacts(ListCustomerContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoCustomerContactResponseDto`
- **Error**: `ApiException<ListCustomerContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerContactsRequest` | `src/Bill/Requests/Customers/ListCustomerContactsRequest.cs` |
| `ListResponseDtoCustomerContactResponseDto` | `src/Bill/Models/ListResponseDtoCustomerContactResponseDto.cs` |
| `ListCustomerContactsError` | `src/Bill/Errors/ListCustomerContactsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListCustomers

- **Signature**: `ListCustomers(ListCustomersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoCustomerResponseDto`
- **Error**: `ApiException<ListCustomersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomersRequest` | `src/Bill/Requests/Customers/ListCustomersRequest.cs` |
| `ListResponseDtoCustomerResponseDto` | `src/Bill/Models/ListResponseDtoCustomerResponseDto.cs` |
| `ListCustomersError` | `src/Bill/Errors/ListCustomersError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreCustomer

- **Signature**: `RestoreCustomer(RestoreCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `CustomerResponseDto`
- **Error**: `ApiException<RestoreCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreCustomerRequest` | `src/Bill/Requests/Customers/RestoreCustomerRequest.cs` |
| `CustomerResponseDto` | `src/Bill/Models/CustomerResponseDto.cs` |
| `RestoreCustomerError` | `src/Bill/Errors/RestoreCustomerError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreCustomerContact

- **Signature**: `RestoreCustomerContact(RestoreCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `ContactId`
- **Returns**: `CustomerContactResponseDto`
- **Error**: `ApiException<RestoreCustomerContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreCustomerContactRequest` | `src/Bill/Requests/Customers/RestoreCustomerContactRequest.cs` |
| `CustomerContactResponseDto` | `src/Bill/Models/CustomerContactResponseDto.cs` |
| `RestoreCustomerContactError` | `src/Bill/Errors/RestoreCustomerContactError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateCustomer

- **Signature**: `UpdateCustomer(UpdateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Body`
- **Returns**: `CustomerResponseDto`
- **Error**: `ApiException<UpdateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerRequest` | `src/Bill/Requests/Customers/UpdateCustomerRequest.cs` |
| `CustomerUpdateRequestDto` | `src/Bill/Models/CustomerUpdateRequestDto.cs` |
| `CustomerResponseDto` | `src/Bill/Models/CustomerResponseDto.cs` |
| `UpdateCustomerError` | `src/Bill/Errors/UpdateCustomerError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateCustomerBankAccount

- **Signature**: `UpdateCustomerBankAccount(UpdateCustomerBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `BankAccountId`, `Body`
- **Returns**: `CustomerBankAccountResponseDto`
- **Error**: `ApiException<UpdateCustomerBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerBankAccountRequest` | `src/Bill/Requests/Customers/UpdateCustomerBankAccountRequest.cs` |
| `UpdateCustomerBankAccountRequestDto` | `src/Bill/Models/UpdateCustomerBankAccountRequestDto.cs` |
| `CustomerBankAccountResponseDto` | `src/Bill/Models/CustomerBankAccountResponseDto.cs` |
| `UpdateCustomerBankAccountError` | `src/Bill/Errors/UpdateCustomerBankAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateCustomerContact

- **Signature**: `UpdateCustomerContact(UpdateCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `ContactId`, `Body`
- **Returns**: `CustomerContactResponseDto`
- **Error**: `ApiException<UpdateCustomerContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerContactRequest` | `src/Bill/Requests/Customers/UpdateCustomerContactRequest.cs` |
| `UpdateCustomerContactRequestDto` | `src/Bill/Models/UpdateCustomerContactRequestDto.cs` |
| `CustomerContactResponseDto` | `src/Bill/Models/CustomerContactResponseDto.cs` |
| `UpdateCustomerContactError` | `src/Bill/Errors/UpdateCustomerContactError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

