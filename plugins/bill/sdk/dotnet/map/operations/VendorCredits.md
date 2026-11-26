<!-- Generated file — do not edit; regenerated with the SDK. -->

# VendorCredits — operations

Accessor: `client.VendorCredits` · Source: `src/Bill/Api/VendorCredits.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveVendorCredit

- **Signature**: `ArchiveVendorCredit(ArchiveVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorCreditId`
- **Returns**: `VendorCreditResponseDto`
- **Error**: `ApiException<ArchiveVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveVendorCreditRequest` | `src/Bill/Requests/VendorCredits/ArchiveVendorCreditRequest.cs` |
| `VendorCreditResponseDto` | `src/Bill/Models/VendorCreditResponseDto.cs` |
| `ArchiveVendorCreditError` | `src/Bill/Errors/ArchiveVendorCreditError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkArchiveVendorCredit

- **Signature**: `BulkArchiveVendorCredit(BulkArchiveVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `VendorCreditBulkResponseDto`
- **Error**: `ApiException<BulkArchiveVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveVendorCreditRequest` | `src/Bill/Requests/VendorCredits/BulkArchiveVendorCreditRequest.cs` |
| `VendorCreditBulkResponseDto` | `src/Bill/Models/VendorCreditBulkResponseDto.cs` |
| `BulkArchiveVendorCreditError` | `src/Bill/Errors/BulkArchiveVendorCreditError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkCreateVendorCredit

- **Signature**: `BulkCreateVendorCredit(BulkCreateVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `VendorCreditBulkResponseDto`
- **Error**: `ApiException<BulkCreateVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateVendorCreditRequest` | `src/Bill/Requests/VendorCredits/BulkCreateVendorCreditRequest.cs` |
| `CreateVendorCreditRequestDto` | `src/Bill/Models/CreateVendorCreditRequestDto.cs` |
| `VendorCreditBulkResponseDto` | `src/Bill/Models/VendorCreditBulkResponseDto.cs` |
| `BulkCreateVendorCreditError` | `src/Bill/Errors/BulkCreateVendorCreditError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkReplaceVendorCredit

- **Signature**: `BulkReplaceVendorCredit(BulkReplaceVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `VendorCreditBulkResponseDto`
- **Error**: `ApiException<BulkReplaceVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkReplaceVendorCreditRequest` | `src/Bill/Requests/VendorCredits/BulkReplaceVendorCreditRequest.cs` |
| `ReplaceVendorCreditWithIdRequestDto` | `src/Bill/Models/ReplaceVendorCreditWithIdRequestDto.cs` |
| `VendorCreditBulkResponseDto` | `src/Bill/Models/VendorCreditBulkResponseDto.cs` |
| `BulkReplaceVendorCreditError` | `src/Bill/Errors/BulkReplaceVendorCreditError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkUpdateVendorCredit

- **Signature**: `BulkUpdateVendorCredit(BulkUpdateVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `VendorCreditBulkResponseDto`
- **Error**: `ApiException<BulkUpdateVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateVendorCreditRequest` | `src/Bill/Requests/VendorCredits/BulkUpdateVendorCreditRequest.cs` |
| `UpdateVendorCreditWithIdRequestDto` | `src/Bill/Models/UpdateVendorCreditWithIdRequestDto.cs` |
| `VendorCreditBulkResponseDto` | `src/Bill/Models/VendorCreditBulkResponseDto.cs` |
| `BulkUpdateVendorCreditError` | `src/Bill/Errors/BulkUpdateVendorCreditError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateVendorCredit

- **Signature**: `CreateVendorCredit(CreateVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `VendorCreditResponseDto`
- **Error**: `ApiException<CreateVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVendorCreditRequest` | `src/Bill/Requests/VendorCredits/CreateVendorCreditRequest.cs` |
| `CreateVendorCreditRequestDto` | `src/Bill/Models/CreateVendorCreditRequestDto.cs` |
| `VendorCreditResponseDto` | `src/Bill/Models/VendorCreditResponseDto.cs` |
| `CreateVendorCreditError` | `src/Bill/Errors/CreateVendorCreditError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetVendorCredit

- **Signature**: `GetVendorCredit(GetVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorCreditId`
- **Returns**: `VendorCreditWithUsageResponseDto`
- **Error**: `ApiException<GetVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVendorCreditRequest` | `src/Bill/Requests/VendorCredits/GetVendorCreditRequest.cs` |
| `VendorCreditWithUsageResponseDto` | `src/Bill/Models/VendorCreditWithUsageResponseDto.cs` |
| `GetVendorCreditError` | `src/Bill/Errors/GetVendorCreditError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListVendorCredits

- **Signature**: `ListVendorCredits(ListVendorCreditsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoVendorCreditWithUsageResponseDto`
- **Error**: `ApiException<ListVendorCreditsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVendorCreditsRequest` | `src/Bill/Requests/VendorCredits/ListVendorCreditsRequest.cs` |
| `ListResponseDtoVendorCreditWithUsageResponseDto` | `src/Bill/Models/ListResponseDtoVendorCreditWithUsageResponseDto.cs` |
| `ListVendorCreditsError` | `src/Bill/Errors/ListVendorCreditsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ReplaceVendorCredit

- **Signature**: `ReplaceVendorCredit(ReplaceVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorCreditId`, `Body`
- **Returns**: `VendorCreditResponseDto`
- **Error**: `ApiException<ReplaceVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceVendorCreditRequest` | `src/Bill/Requests/VendorCredits/ReplaceVendorCreditRequest.cs` |
| `ReplaceVendorCreditRequestDto` | `src/Bill/Models/ReplaceVendorCreditRequestDto.cs` |
| `VendorCreditResponseDto` | `src/Bill/Models/VendorCreditResponseDto.cs` |
| `ReplaceVendorCreditError` | `src/Bill/Errors/ReplaceVendorCreditError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateVendorCredit

- **Signature**: `UpdateVendorCredit(UpdateVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorCreditId`, `Body`
- **Returns**: `VendorCreditResponseDto`
- **Error**: `ApiException<UpdateVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateVendorCreditRequest` | `src/Bill/Requests/VendorCredits/UpdateVendorCreditRequest.cs` |
| `UpdateVendorCreditRequestDto` | `src/Bill/Models/UpdateVendorCreditRequestDto.cs` |
| `VendorCreditResponseDto` | `src/Bill/Models/VendorCreditResponseDto.cs` |
| `UpdateVendorCreditError` | `src/Bill/Errors/UpdateVendorCreditError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

