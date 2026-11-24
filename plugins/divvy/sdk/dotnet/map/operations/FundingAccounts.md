<!-- Generated file — do not edit; regenerated with the SDK. -->

# FundingAccounts — operations

Accessor: `client.FundingAccounts` · Source: `src/Divvy/Api/FundingAccounts.cs` · 15 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveBankAccount

- **Signature**: `ArchiveBankAccount(ArchiveBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BankAccountId`
- **Returns**: `OrganizationBankAccountResponseDto`
- **Error**: `ApiException<ArchiveBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveBankAccountRequest` | `src/Divvy/Requests/FundingAccounts/ArchiveBankAccountRequest.cs` |
| `OrganizationBankAccountResponseDto` | `src/Divvy/Models/OrganizationBankAccountResponseDto.cs` |
| `ArchiveBankAccountError` | `src/Divvy/Errors/ArchiveBankAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ArchiveBankAccountUser

- **Signature**: `ArchiveBankAccountUser(ArchiveBankAccountUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BankAccountUserId`
- **Returns**: `OrganizationBankAccountUserResponseDto`
- **Error**: `ApiException<ArchiveBankAccountUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveBankAccountUserRequest` | `src/Divvy/Requests/FundingAccounts/ArchiveBankAccountUserRequest.cs` |
| `OrganizationBankAccountUserResponseDto` | `src/Divvy/Models/OrganizationBankAccountUserResponseDto.cs` |
| `ArchiveBankAccountUserError` | `src/Divvy/Errors/ArchiveBankAccountUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateBankAccount

- **Signature**: `CreateBankAccount(CreateBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `OrganizationBankAccountResponseDto`
- **Error**: `ApiException<CreateBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBankAccountRequest` | `src/Divvy/Requests/FundingAccounts/CreateBankAccountRequest.cs` |
| `OrganizationBankAccountCreateRequestDto` | `src/Divvy/Models/OrganizationBankAccountCreateRequestDto.cs` |
| `OrganizationBankAccountResponseDto` | `src/Divvy/Models/OrganizationBankAccountResponseDto.cs` |
| `CreateBankAccountError` | `src/Divvy/Errors/CreateBankAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetBankAccount

- **Signature**: `GetBankAccount(GetBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BankAccountId`
- **Returns**: `OrganizationBankAccountResponseDto`
- **Error**: `ApiException<GetBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBankAccountRequest` | `src/Divvy/Requests/FundingAccounts/GetBankAccountRequest.cs` |
| `OrganizationBankAccountResponseDto` | `src/Divvy/Models/OrganizationBankAccountResponseDto.cs` |
| `GetBankAccountError` | `src/Divvy/Errors/GetBankAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetCardAccount

- **Signature**: `GetCardAccount(GetCardAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardAccountId`
- **Returns**: `CardAccountResponseDto`
- **Error**: `ApiException<GetCardAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCardAccountRequest` | `src/Divvy/Requests/FundingAccounts/GetCardAccountRequest.cs` |
| `CardAccountResponseDto` | `src/Divvy/Models/CardAccountResponseDto.cs` |
| `GetCardAccountError` | `src/Divvy/Errors/GetCardAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetFundingAccountPermission

- **Signature**: `GetFundingAccountPermission(GetFundingAccountPermissionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `FundingAccountPermissionResponseDto`
- **Error**: `ApiException<GetFundingAccountPermissionError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFundingAccountPermissionRequest` | `src/Divvy/Requests/FundingAccounts/GetFundingAccountPermissionRequest.cs` |
| `FundingAccountPermissionResponseDto` | `src/Divvy/Models/FundingAccountPermissionResponseDto.cs` |
| `GetFundingAccountPermissionError` | `src/Divvy/Errors/GetFundingAccountPermissionError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListBankAccountUsers

- **Signature**: `ListBankAccountUsers(ListBankAccountUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`, `currentUser` ← `CurrentUser`
- **Returns**: `ListResponseDtoOrganizationBankAccountUserResponseDto`
- **Error**: `ApiException<ListBankAccountUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBankAccountUsersRequest` | `src/Divvy/Requests/FundingAccounts/ListBankAccountUsersRequest.cs` |
| `ListResponseDtoOrganizationBankAccountUserResponseDto` | `src/Divvy/Models/ListResponseDtoOrganizationBankAccountUserResponseDto.cs` |
| `ListBankAccountUsersError` | `src/Divvy/Errors/ListBankAccountUsersError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListBankAccounts

- **Signature**: `ListBankAccounts(ListBankAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoOrganizationBankAccountResponseDto`
- **Error**: `ApiException<ListBankAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBankAccountsRequest` | `src/Divvy/Requests/FundingAccounts/ListBankAccountsRequest.cs` |
| `ListResponseDtoOrganizationBankAccountResponseDto` | `src/Divvy/Models/ListResponseDtoOrganizationBankAccountResponseDto.cs` |
| `ListBankAccountsError` | `src/Divvy/Errors/ListBankAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListCardAccountUsers

- **Signature**: `ListCardAccountUsers(ListCardAccountUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`, `currentUser` ← `CurrentUser`
- **Returns**: `ListResponseDtoOrganizationCardAccountUserResponseDto`
- **Error**: `ApiException<ListCardAccountUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCardAccountUsersRequest` | `src/Divvy/Requests/FundingAccounts/ListCardAccountUsersRequest.cs` |
| `ListResponseDtoOrganizationCardAccountUserResponseDto` | `src/Divvy/Models/ListResponseDtoOrganizationCardAccountUserResponseDto.cs` |
| `ListCardAccountUsersError` | `src/Divvy/Errors/ListCardAccountUsersError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListCardFundingPurposes

- **Signature**: `ListCardFundingPurposes(ListCardFundingPurposesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Brand`
- **Query params (wire ← C#)**: `vendorId` ← `VendorId`, `brand` ← `Brand`
- **Returns**: `ListCardFundingPurposesResponseDto`
- **Error**: `ApiException<ListCardFundingPurposesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCardFundingPurposesRequest` | `src/Divvy/Requests/FundingAccounts/ListCardFundingPurposesRequest.cs` |
| `ListCardFundingPurposesResponseDto` | `src/Divvy/Models/ListCardFundingPurposesResponseDto.cs` |
| `ListCardFundingPurposesError` | `src/Divvy/Errors/ListCardFundingPurposesError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListPayableApCards

- **Signature**: `ListPayableApCards(ListPayableApCardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<ApCardResponseDto>`
- **Error**: `ApiException<ListPayableApCardsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPayableApCardsRequest` | `src/Divvy/Requests/FundingAccounts/ListPayableApCardsRequest.cs` |
| `ApCardResponseDto` | `src/Divvy/Models/ApCardResponseDto.cs` |
| `ListPayableApCardsError` | `src/Divvy/Errors/ListPayableApCardsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListPayableCardAccounts

- **Signature**: `ListPayableCardAccounts(ListPayableCardAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardUserStatus`
- **Query params (wire ← C#)**: `cardUserStatus` ← `CardUserStatus`
- **Returns**: `ListPayableCardAccountsResponseDto`
- **Error**: `ApiException<ListPayableCardAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPayableCardAccountsRequest` | `src/Divvy/Requests/FundingAccounts/ListPayableCardAccountsRequest.cs` |
| `CardUserStatus` | `src/Divvy/Models/Enums/CardUserStatus.cs` |
| `ListPayableCardAccountsResponseDto` | `src/Divvy/Models/ListPayableCardAccountsResponseDto.cs` |
| `ListPayableCardAccountsError` | `src/Divvy/Errors/ListPayableCardAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### NominateBankAccountUser

- **Signature**: `NominateBankAccountUser(NominateBankAccountUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `StatusDto`
- **Error**: `ApiException<NominateBankAccountUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NominateBankAccountUserRequest` | `src/Divvy/Requests/FundingAccounts/NominateBankAccountUserRequest.cs` |
| `NominateBankAccountUserRequestDto` | `src/Divvy/Models/NominateBankAccountUserRequestDto.cs` |
| `StatusDto` | `src/Divvy/Models/StatusDto.cs` |
| `NominateBankAccountUserError` | `src/Divvy/Errors/NominateBankAccountUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateBankAccount

- **Signature**: `UpdateBankAccount(UpdateBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BankAccountId`, `Body`
- **Returns**: `OrganizationBankAccountResponseDto`
- **Error**: `ApiException<UpdateBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBankAccountRequest` | `src/Divvy/Requests/FundingAccounts/UpdateBankAccountRequest.cs` |
| `OrganizationBankAccountUpdateRequestDto` | `src/Divvy/Models/OrganizationBankAccountUpdateRequestDto.cs` |
| `OrganizationBankAccountResponseDto` | `src/Divvy/Models/OrganizationBankAccountResponseDto.cs` |
| `UpdateBankAccountError` | `src/Divvy/Errors/UpdateBankAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### VerifyBankAccount

- **Signature**: `VerifyBankAccount(VerifyBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BankAccountId`, `Body`
- **Returns**: `BankAccountVerifyResponseDto`
- **Error**: `ApiException<VerifyBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VerifyBankAccountRequest` | `src/Divvy/Requests/FundingAccounts/VerifyBankAccountRequest.cs` |
| `BankAccountVerifyRequestDto` | `src/Divvy/Models/BankAccountVerifyRequestDto.cs` |
| `BankAccountVerifyResponseDto` | `src/Divvy/Models/BankAccountVerifyResponseDto.cs` |
| `VerifyBankAccountError` | `src/Divvy/Errors/VerifyBankAccountError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

