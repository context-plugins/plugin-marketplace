<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.Customers` · Source: `src/Divvy/Api/Customers.cs` · 18 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveCustomer

- **Signature**: `ArchiveCustomer(ArchiveCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `CustomerResponseDto`
- **Error**: `ApiException<ArchiveCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveCustomerRequest` | `src/Divvy/Requests/Customers/ArchiveCustomerRequest.cs` |
| `CustomerResponseDto` | `src/Divvy/Models/CustomerResponseDto.cs` |
| `ArchiveCustomerError` | `src/Divvy/Errors/ArchiveCustomerError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ArchiveCustomerBankAccount

- **Signature**: `ArchiveCustomerBankAccount(ArchiveCustomerBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `BankAccountId`
- **Returns**: `CustomerBankAccountResponseDto`
- **Error**: `ApiException<ArchiveCustomerBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveCustomerBankAccountRequest` | `src/Divvy/Requests/Customers/ArchiveCustomerBankAccountRequest.cs` |
| `CustomerBankAccountResponseDto` | `src/Divvy/Models/CustomerBankAccountResponseDto.cs` |
| `ArchiveCustomerBankAccountError` | `src/Divvy/Errors/ArchiveCustomerBankAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ArchiveCustomerContact

- **Signature**: `ArchiveCustomerContact(ArchiveCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `ContactId`
- **Returns**: `CustomerContactResponseDto`
- **Error**: `ApiException<ArchiveCustomerContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveCustomerContactRequest` | `src/Divvy/Requests/Customers/ArchiveCustomerContactRequest.cs` |
| `CustomerContactResponseDto` | `src/Divvy/Models/CustomerContactResponseDto.cs` |
| `ArchiveCustomerContactError` | `src/Divvy/Errors/ArchiveCustomerContactError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### AuthorizeToChargeCustomer

- **Signature**: `AuthorizeToChargeCustomer(AuthorizeToChargeCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Body`
- **Returns**: `ChargeAuthorizationResponseDto`
- **Error**: `ApiException<AuthorizeToChargeCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AuthorizeToChargeCustomerRequest` | `src/Divvy/Requests/Customers/AuthorizeToChargeCustomerRequest.cs` |
| `ChargeAuthorizationRequestDto` | `src/Divvy/Models/ChargeAuthorizationRequestDto.cs` |
| `ChargeAuthorizationResponseDto` | `src/Divvy/Models/ChargeAuthorizationResponseDto.cs` |
| `AuthorizeToChargeCustomerError` | `src/Divvy/Errors/AuthorizeToChargeCustomerError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateCustomer

- **Signature**: `CreateCustomer(CreateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CustomerResponseDto`
- **Error**: `ApiException<CreateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerRequest` | `src/Divvy/Requests/Customers/CreateCustomerRequest.cs` |
| `CustomerCreateRequestDto` | `src/Divvy/Models/CustomerCreateRequestDto.cs` |
| `CustomerResponseDto` | `src/Divvy/Models/CustomerResponseDto.cs` |
| `CreateCustomerError` | `src/Divvy/Errors/CreateCustomerError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateCustomerBankAccount

- **Signature**: `CreateCustomerBankAccount(CreateCustomerBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Body`
- **Returns**: `CustomerBankAccountResponseDto`
- **Error**: `ApiException<CreateCustomerBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerBankAccountRequest` | `src/Divvy/Requests/Customers/CreateCustomerBankAccountRequest.cs` |
| `CreateCustomerBankAccountRequestDto` | `src/Divvy/Models/CreateCustomerBankAccountRequestDto.cs` |
| `CustomerBankAccountResponseDto` | `src/Divvy/Models/CustomerBankAccountResponseDto.cs` |
| `CreateCustomerBankAccountError` | `src/Divvy/Errors/CreateCustomerBankAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateCustomerContact

- **Signature**: `CreateCustomerContact(CreateCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Body`
- **Returns**: `CustomerContactResponseDto`
- **Error**: `ApiException<CreateCustomerContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerContactRequest` | `src/Divvy/Requests/Customers/CreateCustomerContactRequest.cs` |
| `CreateCustomerContactRequestDto` | `src/Divvy/Models/CreateCustomerContactRequestDto.cs` |
| `CustomerContactResponseDto` | `src/Divvy/Models/CustomerContactResponseDto.cs` |
| `CreateCustomerContactError` | `src/Divvy/Errors/CreateCustomerContactError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetCustomer

- **Signature**: `GetCustomer(GetCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `CustomerResponseDto`
- **Error**: `ApiException<GetCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerRequest` | `src/Divvy/Requests/Customers/GetCustomerRequest.cs` |
| `CustomerResponseDto` | `src/Divvy/Models/CustomerResponseDto.cs` |
| `GetCustomerError` | `src/Divvy/Errors/GetCustomerError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetCustomerBankAccount

- **Signature**: `GetCustomerBankAccount(GetCustomerBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `BankAccountId`
- **Returns**: `CustomerBankAccountResponseDto`
- **Error**: `ApiException<GetCustomerBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerBankAccountRequest` | `src/Divvy/Requests/Customers/GetCustomerBankAccountRequest.cs` |
| `CustomerBankAccountResponseDto` | `src/Divvy/Models/CustomerBankAccountResponseDto.cs` |
| `GetCustomerBankAccountError` | `src/Divvy/Errors/GetCustomerBankAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetCustomerContact

- **Signature**: `GetCustomerContact(GetCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `ContactId`
- **Returns**: `CustomerContactResponseDto`
- **Error**: `ApiException<GetCustomerContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerContactRequest` | `src/Divvy/Requests/Customers/GetCustomerContactRequest.cs` |
| `CustomerContactResponseDto` | `src/Divvy/Models/CustomerContactResponseDto.cs` |
| `GetCustomerContactError` | `src/Divvy/Errors/GetCustomerContactError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListCustomerBankAccounts

- **Signature**: `ListCustomerBankAccounts(ListCustomerBankAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoCustomerBankAccountResponseDto`
- **Error**: `ApiException<ListCustomerBankAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerBankAccountsRequest` | `src/Divvy/Requests/Customers/ListCustomerBankAccountsRequest.cs` |
| `ListResponseDtoCustomerBankAccountResponseDto` | `src/Divvy/Models/ListResponseDtoCustomerBankAccountResponseDto.cs` |
| `ListCustomerBankAccountsError` | `src/Divvy/Errors/ListCustomerBankAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListCustomerContacts

- **Signature**: `ListCustomerContacts(ListCustomerContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoCustomerContactResponseDto`
- **Error**: `ApiException<ListCustomerContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerContactsRequest` | `src/Divvy/Requests/Customers/ListCustomerContactsRequest.cs` |
| `ListResponseDtoCustomerContactResponseDto` | `src/Divvy/Models/ListResponseDtoCustomerContactResponseDto.cs` |
| `ListCustomerContactsError` | `src/Divvy/Errors/ListCustomerContactsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListCustomers

- **Signature**: `ListCustomers(ListCustomersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoCustomerResponseDto`
- **Error**: `ApiException<ListCustomersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomersRequest` | `src/Divvy/Requests/Customers/ListCustomersRequest.cs` |
| `ListResponseDtoCustomerResponseDto` | `src/Divvy/Models/ListResponseDtoCustomerResponseDto.cs` |
| `ListCustomersError` | `src/Divvy/Errors/ListCustomersError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreCustomer

- **Signature**: `RestoreCustomer(RestoreCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `CustomerResponseDto`
- **Error**: `ApiException<RestoreCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreCustomerRequest` | `src/Divvy/Requests/Customers/RestoreCustomerRequest.cs` |
| `CustomerResponseDto` | `src/Divvy/Models/CustomerResponseDto.cs` |
| `RestoreCustomerError` | `src/Divvy/Errors/RestoreCustomerError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreCustomerContact

- **Signature**: `RestoreCustomerContact(RestoreCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `ContactId`
- **Returns**: `CustomerContactResponseDto`
- **Error**: `ApiException<RestoreCustomerContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreCustomerContactRequest` | `src/Divvy/Requests/Customers/RestoreCustomerContactRequest.cs` |
| `CustomerContactResponseDto` | `src/Divvy/Models/CustomerContactResponseDto.cs` |
| `RestoreCustomerContactError` | `src/Divvy/Errors/RestoreCustomerContactError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateCustomer

- **Signature**: `UpdateCustomer(UpdateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Body`
- **Returns**: `CustomerResponseDto`
- **Error**: `ApiException<UpdateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerRequest` | `src/Divvy/Requests/Customers/UpdateCustomerRequest.cs` |
| `CustomerUpdateRequestDto` | `src/Divvy/Models/CustomerUpdateRequestDto.cs` |
| `CustomerResponseDto` | `src/Divvy/Models/CustomerResponseDto.cs` |
| `UpdateCustomerError` | `src/Divvy/Errors/UpdateCustomerError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateCustomerBankAccount

- **Signature**: `UpdateCustomerBankAccount(UpdateCustomerBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `BankAccountId`, `Body`
- **Returns**: `CustomerBankAccountResponseDto`
- **Error**: `ApiException<UpdateCustomerBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerBankAccountRequest` | `src/Divvy/Requests/Customers/UpdateCustomerBankAccountRequest.cs` |
| `UpdateCustomerBankAccountRequestDto` | `src/Divvy/Models/UpdateCustomerBankAccountRequestDto.cs` |
| `CustomerBankAccountResponseDto` | `src/Divvy/Models/CustomerBankAccountResponseDto.cs` |
| `UpdateCustomerBankAccountError` | `src/Divvy/Errors/UpdateCustomerBankAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateCustomerContact

- **Signature**: `UpdateCustomerContact(UpdateCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `ContactId`, `Body`
- **Returns**: `CustomerContactResponseDto`
- **Error**: `ApiException<UpdateCustomerContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerContactRequest` | `src/Divvy/Requests/Customers/UpdateCustomerContactRequest.cs` |
| `UpdateCustomerContactRequestDto` | `src/Divvy/Models/UpdateCustomerContactRequestDto.cs` |
| `CustomerContactResponseDto` | `src/Divvy/Models/CustomerContactResponseDto.cs` |
| `UpdateCustomerContactError` | `src/Divvy/Errors/UpdateCustomerContactError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

