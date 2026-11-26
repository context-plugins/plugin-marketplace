<!-- Generated file — do not edit; regenerated with the SDK. -->

# FundingAccounts — operations

Accessor: `client.FundingAccounts` · Source: `src/Bill/Api/FundingAccounts.cs` · 15 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveBankAccount

- **Signature**: `ArchiveBankAccount(ArchiveBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BankAccountId`
- **Returns**: `OrganizationBankAccountResponseDto`
- **Error**: `ApiException<ArchiveBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveBankAccountRequest` | `src/Bill/Requests/FundingAccounts/ArchiveBankAccountRequest.cs` |
| `OrganizationBankAccountResponseDto` | `src/Bill/Models/OrganizationBankAccountResponseDto.cs` |
| `ArchiveBankAccountError` | `src/Bill/Errors/ArchiveBankAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ArchiveBankAccountUser

- **Signature**: `ArchiveBankAccountUser(ArchiveBankAccountUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BankAccountUserId`
- **Returns**: `OrganizationBankAccountUserResponseDto`
- **Error**: `ApiException<ArchiveBankAccountUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveBankAccountUserRequest` | `src/Bill/Requests/FundingAccounts/ArchiveBankAccountUserRequest.cs` |
| `OrganizationBankAccountUserResponseDto` | `src/Bill/Models/OrganizationBankAccountUserResponseDto.cs` |
| `ArchiveBankAccountUserError` | `src/Bill/Errors/ArchiveBankAccountUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateBankAccount

- **Signature**: `CreateBankAccount(CreateBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `OrganizationBankAccountResponseDto`
- **Error**: `ApiException<CreateBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBankAccountRequest` | `src/Bill/Requests/FundingAccounts/CreateBankAccountRequest.cs` |
| `OrganizationBankAccountCreateRequestDto` | `src/Bill/Models/OrganizationBankAccountCreateRequestDto.cs` |
| `OrganizationBankAccountResponseDto` | `src/Bill/Models/OrganizationBankAccountResponseDto.cs` |
| `CreateBankAccountError` | `src/Bill/Errors/CreateBankAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetBankAccount

- **Signature**: `GetBankAccount(GetBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BankAccountId`
- **Returns**: `OrganizationBankAccountResponseDto`
- **Error**: `ApiException<GetBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBankAccountRequest` | `src/Bill/Requests/FundingAccounts/GetBankAccountRequest.cs` |
| `OrganizationBankAccountResponseDto` | `src/Bill/Models/OrganizationBankAccountResponseDto.cs` |
| `GetBankAccountError` | `src/Bill/Errors/GetBankAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetCardAccount

- **Signature**: `GetCardAccount(GetCardAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardAccountId`
- **Returns**: `CardAccountResponseDto`
- **Error**: `ApiException<GetCardAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCardAccountRequest` | `src/Bill/Requests/FundingAccounts/GetCardAccountRequest.cs` |
| `CardAccountResponseDto` | `src/Bill/Models/CardAccountResponseDto.cs` |
| `GetCardAccountError` | `src/Bill/Errors/GetCardAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetFundingAccountPermission

- **Signature**: `GetFundingAccountPermission(GetFundingAccountPermissionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `FundingAccountPermissionResponseDto`
- **Error**: `ApiException<GetFundingAccountPermissionError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFundingAccountPermissionRequest` | `src/Bill/Requests/FundingAccounts/GetFundingAccountPermissionRequest.cs` |
| `FundingAccountPermissionResponseDto` | `src/Bill/Models/FundingAccountPermissionResponseDto.cs` |
| `GetFundingAccountPermissionError` | `src/Bill/Errors/GetFundingAccountPermissionError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListBankAccountUsers

- **Signature**: `ListBankAccountUsers(ListBankAccountUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`, `currentUser` ← `CurrentUser`
- **Returns**: `ListResponseDtoOrganizationBankAccountUserResponseDto`
- **Error**: `ApiException<ListBankAccountUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBankAccountUsersRequest` | `src/Bill/Requests/FundingAccounts/ListBankAccountUsersRequest.cs` |
| `ListResponseDtoOrganizationBankAccountUserResponseDto` | `src/Bill/Models/ListResponseDtoOrganizationBankAccountUserResponseDto.cs` |
| `ListBankAccountUsersError` | `src/Bill/Errors/ListBankAccountUsersError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListBankAccounts

- **Signature**: `ListBankAccounts(ListBankAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoOrganizationBankAccountResponseDto`
- **Error**: `ApiException<ListBankAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBankAccountsRequest` | `src/Bill/Requests/FundingAccounts/ListBankAccountsRequest.cs` |
| `ListResponseDtoOrganizationBankAccountResponseDto` | `src/Bill/Models/ListResponseDtoOrganizationBankAccountResponseDto.cs` |
| `ListBankAccountsError` | `src/Bill/Errors/ListBankAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListCardAccountUsers

- **Signature**: `ListCardAccountUsers(ListCardAccountUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`, `currentUser` ← `CurrentUser`
- **Returns**: `ListResponseDtoOrganizationCardAccountUserResponseDto`
- **Error**: `ApiException<ListCardAccountUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCardAccountUsersRequest` | `src/Bill/Requests/FundingAccounts/ListCardAccountUsersRequest.cs` |
| `ListResponseDtoOrganizationCardAccountUserResponseDto` | `src/Bill/Models/ListResponseDtoOrganizationCardAccountUserResponseDto.cs` |
| `ListCardAccountUsersError` | `src/Bill/Errors/ListCardAccountUsersError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListCardFundingPurposes

- **Signature**: `ListCardFundingPurposes(ListCardFundingPurposesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Brand`
- **Query params (wire ← C#)**: `vendorId` ← `VendorId`, `brand` ← `Brand`
- **Returns**: `ListCardFundingPurposesResponseDto`
- **Error**: `ApiException<ListCardFundingPurposesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCardFundingPurposesRequest` | `src/Bill/Requests/FundingAccounts/ListCardFundingPurposesRequest.cs` |
| `ListCardFundingPurposesResponseDto` | `src/Bill/Models/ListCardFundingPurposesResponseDto.cs` |
| `ListCardFundingPurposesError` | `src/Bill/Errors/ListCardFundingPurposesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListPayableApCards

- **Signature**: `ListPayableApCards(ListPayableApCardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<ApCardResponseDto>`
- **Error**: `ApiException<ListPayableApCardsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPayableApCardsRequest` | `src/Bill/Requests/FundingAccounts/ListPayableApCardsRequest.cs` |
| `ApCardResponseDto` | `src/Bill/Models/ApCardResponseDto.cs` |
| `ListPayableApCardsError` | `src/Bill/Errors/ListPayableApCardsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListPayableCardAccounts

- **Signature**: `ListPayableCardAccounts(ListPayableCardAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardUserStatus`
- **Query params (wire ← C#)**: `cardUserStatus` ← `CardUserStatus`
- **Returns**: `ListPayableCardAccountsResponseDto`
- **Error**: `ApiException<ListPayableCardAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPayableCardAccountsRequest` | `src/Bill/Requests/FundingAccounts/ListPayableCardAccountsRequest.cs` |
| `CardUserStatus` | `src/Bill/Models/Enums/CardUserStatus.cs` |
| `ListPayableCardAccountsResponseDto` | `src/Bill/Models/ListPayableCardAccountsResponseDto.cs` |
| `ListPayableCardAccountsError` | `src/Bill/Errors/ListPayableCardAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### NominateBankAccountUser

- **Signature**: `NominateBankAccountUser(NominateBankAccountUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `StatusDto`
- **Error**: `ApiException<NominateBankAccountUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NominateBankAccountUserRequest` | `src/Bill/Requests/FundingAccounts/NominateBankAccountUserRequest.cs` |
| `NominateBankAccountUserRequestDto` | `src/Bill/Models/NominateBankAccountUserRequestDto.cs` |
| `StatusDto` | `src/Bill/Models/StatusDto.cs` |
| `NominateBankAccountUserError` | `src/Bill/Errors/NominateBankAccountUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateBankAccount

- **Signature**: `UpdateBankAccount(UpdateBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BankAccountId`, `Body`
- **Returns**: `OrganizationBankAccountResponseDto`
- **Error**: `ApiException<UpdateBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBankAccountRequest` | `src/Bill/Requests/FundingAccounts/UpdateBankAccountRequest.cs` |
| `OrganizationBankAccountUpdateRequestDto` | `src/Bill/Models/OrganizationBankAccountUpdateRequestDto.cs` |
| `OrganizationBankAccountResponseDto` | `src/Bill/Models/OrganizationBankAccountResponseDto.cs` |
| `UpdateBankAccountError` | `src/Bill/Errors/UpdateBankAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### VerifyBankAccount

- **Signature**: `VerifyBankAccount(VerifyBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BankAccountId`, `Body`
- **Returns**: `BankAccountVerifyResponseDto`
- **Error**: `ApiException<VerifyBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VerifyBankAccountRequest` | `src/Bill/Requests/FundingAccounts/VerifyBankAccountRequest.cs` |
| `BankAccountVerifyRequestDto` | `src/Bill/Models/BankAccountVerifyRequestDto.cs` |
| `BankAccountVerifyResponseDto` | `src/Bill/Models/BankAccountVerifyResponseDto.cs` |
| `VerifyBankAccountError` | `src/Bill/Errors/VerifyBankAccountError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

