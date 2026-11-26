<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vendors — operations

Accessor: `client.Vendors` · Source: `src/Bill/Api/Vendors.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveVendor

- **Signature**: `ArchiveVendor(ArchiveVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `VendorResponseDto`
- **Error**: `ApiException<ArchiveVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveVendorRequest` | `src/Bill/Requests/Vendors/ArchiveVendorRequest.cs` |
| `VendorResponseDto` | `src/Bill/Models/VendorResponseDto.cs` |
| `ArchiveVendorError` | `src/Bill/Errors/ArchiveVendorError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateBulkVendor

- **Signature**: `CreateBulkVendor(CreateBulkVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BulkVendorResponseDto`
- **Error**: `ApiException<CreateBulkVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBulkVendorRequest` | `src/Bill/Requests/Vendors/CreateBulkVendorRequest.cs` |
| `VendorRequestDto` | `src/Bill/Models/VendorRequestDto.cs` |
| `BulkVendorResponseDto` | `src/Bill/Models/BulkVendorResponseDto.cs` |
| `CreateBulkVendorError` | `src/Bill/Errors/CreateBulkVendorError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateVendor

- **Signature**: `CreateVendor(CreateVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `VendorResponseDto`
- **Error**: `ApiException<CreateVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVendorRequest` | `src/Bill/Requests/Vendors/CreateVendorRequest.cs` |
| `VendorRequestDto` | `src/Bill/Models/VendorRequestDto.cs` |
| `VendorResponseDto` | `src/Bill/Models/VendorResponseDto.cs` |
| `CreateVendorError` | `src/Bill/Errors/CreateVendorError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateVendorBankAccount

- **Signature**: `CreateVendorBankAccount(CreateVendorBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Body`
- **Returns**: `VendorBankAccountResponseDto`
- **Error**: `ApiException<CreateVendorBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVendorBankAccountRequest` | `src/Bill/Requests/Vendors/CreateVendorBankAccountRequest.cs` |
| `VendorBankAccountRequestDto` | `src/Bill/Models/VendorBankAccountRequestDto.cs` |
| `VendorBankAccountResponseDto` | `src/Bill/Models/VendorBankAccountResponseDto.cs` |
| `CreateVendorBankAccountError` | `src/Bill/Errors/CreateVendorBankAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteVendorBankAccount

- **Signature**: `DeleteVendorBankAccount(DeleteVendorBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteVendorBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVendorBankAccountRequest` | `src/Bill/Requests/Vendors/DeleteVendorBankAccountRequest.cs` |
| `DeleteVendorBankAccountError` | `src/Bill/Errors/DeleteVendorBankAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetConfigurationByVendorId

- **Signature**: `GetConfigurationByVendorId(GetConfigurationByVendorIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `VendorConfigurationResponseDto`
- **Error**: `ApiException<GetConfigurationByVendorIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetConfigurationByVendorIdRequest` | `src/Bill/Requests/Vendors/GetConfigurationByVendorIdRequest.cs` |
| `VendorConfigurationResponseDto` | `src/Bill/Models/VendorConfigurationResponseDto.cs` |
| `GetConfigurationByVendorIdError` | `src/Bill/Errors/GetConfigurationByVendorIdError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetIntlConfig

- **Signature**: `GetIntlConfig(GetIntlConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`, `BillCurrency`, `AccountType`
- **Query params (wire ← C#)**: `country` ← `Country`, `billCurrency` ← `BillCurrency`, `accountType` ← `AccountType`
- **Returns**: `IntlPmtsConfigurationResponseDto`
- **Error**: `ApiException<GetIntlConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIntlConfigRequest` | `src/Bill/Requests/Vendors/GetIntlConfigRequest.cs` |
| `CountryCode` | `src/Bill/Models/Enums/CountryCode.cs` |
| `CurrencyCode` | `src/Bill/Models/Enums/CurrencyCode.cs` |
| `AccountTypeRequest` | `src/Bill/Models/Enums/AccountTypeRequest.cs` |
| `IntlPmtsConfigurationResponseDto` | `src/Bill/Models/IntlPmtsConfigurationResponseDto.cs` |
| `GetIntlConfigError` | `src/Bill/Errors/GetIntlConfigError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetVendor

- **Signature**: `GetVendor(GetVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `VendorResponseDto`
- **Error**: `ApiException<GetVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVendorRequest` | `src/Bill/Requests/Vendors/GetVendorRequest.cs` |
| `VendorResponseDto` | `src/Bill/Models/VendorResponseDto.cs` |
| `GetVendorError` | `src/Bill/Errors/GetVendorError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetVendorBankAccount

- **Signature**: `GetVendorBankAccount(GetVendorBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `VendorBankAccountResponseDto`
- **Error**: `ApiException<GetVendorBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVendorBankAccountRequest` | `src/Bill/Requests/Vendors/GetVendorBankAccountRequest.cs` |
| `VendorBankAccountResponseDto` | `src/Bill/Models/VendorBankAccountResponseDto.cs` |
| `GetVendorBankAccountError` | `src/Bill/Errors/GetVendorBankAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListVendors

- **Signature**: `ListVendors(ListVendorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListVendorResponseDto`
- **Error**: `ApiException<ListVendorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVendorsRequest` | `src/Bill/Requests/Vendors/ListVendorsRequest.cs` |
| `ListVendorResponseDto` | `src/Bill/Models/ListVendorResponseDto.cs` |
| `ListVendorsError` | `src/Bill/Errors/ListVendorsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreVendor

- **Signature**: `RestoreVendor(RestoreVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `VendorResponseDto`
- **Error**: `ApiException<RestoreVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreVendorRequest` | `src/Bill/Requests/Vendors/RestoreVendorRequest.cs` |
| `VendorResponseDto` | `src/Bill/Models/VendorResponseDto.cs` |
| `RestoreVendorError` | `src/Bill/Errors/RestoreVendorError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateVendor

- **Signature**: `UpdateVendor(UpdateVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Body`
- **Returns**: `VendorResponseDto`
- **Error**: `ApiException<UpdateVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateVendorRequest` | `src/Bill/Requests/Vendors/UpdateVendorRequest.cs` |
| `VendorUpdateRequestDto` | `src/Bill/Models/VendorUpdateRequestDto.cs` |
| `VendorResponseDto` | `src/Bill/Models/VendorResponseDto.cs` |
| `UpdateVendorError` | `src/Bill/Errors/UpdateVendorError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

