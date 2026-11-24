<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vendors — operations

Accessor: `client.Vendors` · Source: `src/Divvy/Api/Vendors.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveVendor

- **Signature**: `ArchiveVendor(ArchiveVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `VendorResponseDto`
- **Error**: `ApiException<ArchiveVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveVendorRequest` | `src/Divvy/Requests/Vendors/ArchiveVendorRequest.cs` |
| `VendorResponseDto` | `src/Divvy/Models/VendorResponseDto.cs` |
| `ArchiveVendorError` | `src/Divvy/Errors/ArchiveVendorError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateBulkVendor

- **Signature**: `CreateBulkVendor(CreateBulkVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BulkVendorResponseDto`
- **Error**: `ApiException<CreateBulkVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBulkVendorRequest` | `src/Divvy/Requests/Vendors/CreateBulkVendorRequest.cs` |
| `VendorRequestDto` | `src/Divvy/Models/VendorRequestDto.cs` |
| `BulkVendorResponseDto` | `src/Divvy/Models/BulkVendorResponseDto.cs` |
| `CreateBulkVendorError` | `src/Divvy/Errors/CreateBulkVendorError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateVendor

- **Signature**: `CreateVendor(CreateVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `VendorResponseDto`
- **Error**: `ApiException<CreateVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVendorRequest` | `src/Divvy/Requests/Vendors/CreateVendorRequest.cs` |
| `VendorRequestDto` | `src/Divvy/Models/VendorRequestDto.cs` |
| `VendorResponseDto` | `src/Divvy/Models/VendorResponseDto.cs` |
| `CreateVendorError` | `src/Divvy/Errors/CreateVendorError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateVendorBankAccount

- **Signature**: `CreateVendorBankAccount(CreateVendorBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Body`
- **Returns**: `VendorBankAccountResponseDto`
- **Error**: `ApiException<CreateVendorBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVendorBankAccountRequest` | `src/Divvy/Requests/Vendors/CreateVendorBankAccountRequest.cs` |
| `VendorBankAccountRequestDto` | `src/Divvy/Models/VendorBankAccountRequestDto.cs` |
| `VendorBankAccountResponseDto` | `src/Divvy/Models/VendorBankAccountResponseDto.cs` |
| `CreateVendorBankAccountError` | `src/Divvy/Errors/CreateVendorBankAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### DeleteVendorBankAccount

- **Signature**: `DeleteVendorBankAccount(DeleteVendorBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteVendorBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVendorBankAccountRequest` | `src/Divvy/Requests/Vendors/DeleteVendorBankAccountRequest.cs` |
| `DeleteVendorBankAccountError` | `src/Divvy/Errors/DeleteVendorBankAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetConfigurationByVendorId

- **Signature**: `GetConfigurationByVendorId(GetConfigurationByVendorIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `VendorConfigurationResponseDto`
- **Error**: `ApiException<GetConfigurationByVendorIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetConfigurationByVendorIdRequest` | `src/Divvy/Requests/Vendors/GetConfigurationByVendorIdRequest.cs` |
| `VendorConfigurationResponseDto` | `src/Divvy/Models/VendorConfigurationResponseDto.cs` |
| `GetConfigurationByVendorIdError` | `src/Divvy/Errors/GetConfigurationByVendorIdError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetIntlConfig

- **Signature**: `GetIntlConfig(GetIntlConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`, `BillCurrency`, `AccountType`
- **Query params (wire ← C#)**: `country` ← `Country`, `billCurrency` ← `BillCurrency`, `accountType` ← `AccountType`
- **Returns**: `IntlPmtsConfigurationResponseDto`
- **Error**: `ApiException<GetIntlConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIntlConfigRequest` | `src/Divvy/Requests/Vendors/GetIntlConfigRequest.cs` |
| `CountryCode` | `src/Divvy/Models/Enums/CountryCode.cs` |
| `CurrencyCode` | `src/Divvy/Models/Enums/CurrencyCode.cs` |
| `AccountTypeRequest` | `src/Divvy/Models/Enums/AccountTypeRequest.cs` |
| `IntlPmtsConfigurationResponseDto` | `src/Divvy/Models/IntlPmtsConfigurationResponseDto.cs` |
| `GetIntlConfigError` | `src/Divvy/Errors/GetIntlConfigError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetVendor

- **Signature**: `GetVendor(GetVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `VendorResponseDto`
- **Error**: `ApiException<GetVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVendorRequest` | `src/Divvy/Requests/Vendors/GetVendorRequest.cs` |
| `VendorResponseDto` | `src/Divvy/Models/VendorResponseDto.cs` |
| `GetVendorError` | `src/Divvy/Errors/GetVendorError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetVendorBankAccount

- **Signature**: `GetVendorBankAccount(GetVendorBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `VendorBankAccountResponseDto`
- **Error**: `ApiException<GetVendorBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVendorBankAccountRequest` | `src/Divvy/Requests/Vendors/GetVendorBankAccountRequest.cs` |
| `VendorBankAccountResponseDto` | `src/Divvy/Models/VendorBankAccountResponseDto.cs` |
| `GetVendorBankAccountError` | `src/Divvy/Errors/GetVendorBankAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListVendors

- **Signature**: `ListVendors(ListVendorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListVendorResponseDto`
- **Error**: `ApiException<ListVendorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVendorsRequest` | `src/Divvy/Requests/Vendors/ListVendorsRequest.cs` |
| `ListVendorResponseDto` | `src/Divvy/Models/ListVendorResponseDto.cs` |
| `ListVendorsError` | `src/Divvy/Errors/ListVendorsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreVendor

- **Signature**: `RestoreVendor(RestoreVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Returns**: `VendorResponseDto`
- **Error**: `ApiException<RestoreVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreVendorRequest` | `src/Divvy/Requests/Vendors/RestoreVendorRequest.cs` |
| `VendorResponseDto` | `src/Divvy/Models/VendorResponseDto.cs` |
| `RestoreVendorError` | `src/Divvy/Errors/RestoreVendorError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateVendor

- **Signature**: `UpdateVendor(UpdateVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Body`
- **Returns**: `VendorResponseDto`
- **Error**: `ApiException<UpdateVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateVendorRequest` | `src/Divvy/Requests/Vendors/UpdateVendorRequest.cs` |
| `VendorUpdateRequestDto` | `src/Divvy/Models/VendorUpdateRequestDto.cs` |
| `VendorResponseDto` | `src/Divvy/Models/VendorResponseDto.cs` |
| `UpdateVendorError` | `src/Divvy/Errors/UpdateVendorError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

