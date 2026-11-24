<!-- Generated file — do not edit; regenerated with the SDK. -->

# VendorCredits — operations

Accessor: `client.VendorCredits` · Source: `src/Divvy/Api/VendorCredits.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveVendorCredit

- **Signature**: `ArchiveVendorCredit(ArchiveVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorCreditId`
- **Returns**: `VendorCreditResponseDto`
- **Error**: `ApiException<ArchiveVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveVendorCreditRequest` | `src/Divvy/Requests/VendorCredits/ArchiveVendorCreditRequest.cs` |
| `VendorCreditResponseDto` | `src/Divvy/Models/VendorCreditResponseDto.cs` |
| `ArchiveVendorCreditError` | `src/Divvy/Errors/ArchiveVendorCreditError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkArchiveVendorCredit

- **Signature**: `BulkArchiveVendorCredit(BulkArchiveVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `VendorCreditBulkResponseDto`
- **Error**: `ApiException<BulkArchiveVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveVendorCreditRequest` | `src/Divvy/Requests/VendorCredits/BulkArchiveVendorCreditRequest.cs` |
| `VendorCreditBulkResponseDto` | `src/Divvy/Models/VendorCreditBulkResponseDto.cs` |
| `BulkArchiveVendorCreditError` | `src/Divvy/Errors/BulkArchiveVendorCreditError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkCreateVendorCredit

- **Signature**: `BulkCreateVendorCredit(BulkCreateVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `VendorCreditBulkResponseDto`
- **Error**: `ApiException<BulkCreateVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateVendorCreditRequest` | `src/Divvy/Requests/VendorCredits/BulkCreateVendorCreditRequest.cs` |
| `CreateVendorCreditRequestDto` | `src/Divvy/Models/CreateVendorCreditRequestDto.cs` |
| `VendorCreditBulkResponseDto` | `src/Divvy/Models/VendorCreditBulkResponseDto.cs` |
| `BulkCreateVendorCreditError` | `src/Divvy/Errors/BulkCreateVendorCreditError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkReplaceVendorCredit

- **Signature**: `BulkReplaceVendorCredit(BulkReplaceVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `VendorCreditBulkResponseDto`
- **Error**: `ApiException<BulkReplaceVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkReplaceVendorCreditRequest` | `src/Divvy/Requests/VendorCredits/BulkReplaceVendorCreditRequest.cs` |
| `ReplaceVendorCreditWithIdRequestDto` | `src/Divvy/Models/ReplaceVendorCreditWithIdRequestDto.cs` |
| `VendorCreditBulkResponseDto` | `src/Divvy/Models/VendorCreditBulkResponseDto.cs` |
| `BulkReplaceVendorCreditError` | `src/Divvy/Errors/BulkReplaceVendorCreditError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkUpdateVendorCredit

- **Signature**: `BulkUpdateVendorCredit(BulkUpdateVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `VendorCreditBulkResponseDto`
- **Error**: `ApiException<BulkUpdateVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateVendorCreditRequest` | `src/Divvy/Requests/VendorCredits/BulkUpdateVendorCreditRequest.cs` |
| `UpdateVendorCreditWithIdRequestDto` | `src/Divvy/Models/UpdateVendorCreditWithIdRequestDto.cs` |
| `VendorCreditBulkResponseDto` | `src/Divvy/Models/VendorCreditBulkResponseDto.cs` |
| `BulkUpdateVendorCreditError` | `src/Divvy/Errors/BulkUpdateVendorCreditError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateVendorCredit

- **Signature**: `CreateVendorCredit(CreateVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `VendorCreditResponseDto`
- **Error**: `ApiException<CreateVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVendorCreditRequest` | `src/Divvy/Requests/VendorCredits/CreateVendorCreditRequest.cs` |
| `CreateVendorCreditRequestDto` | `src/Divvy/Models/CreateVendorCreditRequestDto.cs` |
| `VendorCreditResponseDto` | `src/Divvy/Models/VendorCreditResponseDto.cs` |
| `CreateVendorCreditError` | `src/Divvy/Errors/CreateVendorCreditError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetVendorCredit

- **Signature**: `GetVendorCredit(GetVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorCreditId`
- **Returns**: `VendorCreditWithUsageResponseDto`
- **Error**: `ApiException<GetVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVendorCreditRequest` | `src/Divvy/Requests/VendorCredits/GetVendorCreditRequest.cs` |
| `VendorCreditWithUsageResponseDto` | `src/Divvy/Models/VendorCreditWithUsageResponseDto.cs` |
| `GetVendorCreditError` | `src/Divvy/Errors/GetVendorCreditError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListVendorCredits

- **Signature**: `ListVendorCredits(ListVendorCreditsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoVendorCreditWithUsageResponseDto`
- **Error**: `ApiException<ListVendorCreditsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVendorCreditsRequest` | `src/Divvy/Requests/VendorCredits/ListVendorCreditsRequest.cs` |
| `ListResponseDtoVendorCreditWithUsageResponseDto` | `src/Divvy/Models/ListResponseDtoVendorCreditWithUsageResponseDto.cs` |
| `ListVendorCreditsError` | `src/Divvy/Errors/ListVendorCreditsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ReplaceVendorCredit

- **Signature**: `ReplaceVendorCredit(ReplaceVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorCreditId`, `Body`
- **Returns**: `VendorCreditResponseDto`
- **Error**: `ApiException<ReplaceVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceVendorCreditRequest` | `src/Divvy/Requests/VendorCredits/ReplaceVendorCreditRequest.cs` |
| `ReplaceVendorCreditRequestDto` | `src/Divvy/Models/ReplaceVendorCreditRequestDto.cs` |
| `VendorCreditResponseDto` | `src/Divvy/Models/VendorCreditResponseDto.cs` |
| `ReplaceVendorCreditError` | `src/Divvy/Errors/ReplaceVendorCreditError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateVendorCredit

- **Signature**: `UpdateVendorCredit(UpdateVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorCreditId`, `Body`
- **Returns**: `VendorCreditResponseDto`
- **Error**: `ApiException<UpdateVendorCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateVendorCreditRequest` | `src/Divvy/Requests/VendorCredits/UpdateVendorCreditRequest.cs` |
| `UpdateVendorCreditRequestDto` | `src/Divvy/Models/UpdateVendorCreditRequestDto.cs` |
| `VendorCreditResponseDto` | `src/Divvy/Models/VendorCreditResponseDto.cs` |
| `UpdateVendorCreditError` | `src/Divvy/Errors/UpdateVendorCreditError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

