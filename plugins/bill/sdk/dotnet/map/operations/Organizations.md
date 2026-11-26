<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.Organizations` · Source: `src/Bill/Api/Organizations.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBillingStatementDetail

- **Signature**: `GetBillingStatementDetail(GetBillingStatementDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`, `BillingStatementId`
- **Returns**: `BillingStatementDetailResponseDto`
- **Error**: `ApiException<GetBillingStatementDetailError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBillingStatementDetailRequest` | `src/Bill/Requests/Organizations/GetBillingStatementDetailRequest.cs` |
| `BillingStatementDetailResponseDto` | `src/Bill/Models/BillingStatementDetailResponseDto.cs` |
| `GetBillingStatementDetailError` | `src/Bill/Errors/GetBillingStatementDetailError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetOrganization

- **Signature**: `GetOrganization(GetOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`
- **Returns**: `OrganizationResponseDto`
- **Error**: `ApiException<GetOrganizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationRequest` | `src/Bill/Requests/Organizations/GetOrganizationRequest.cs` |
| `OrganizationResponseDto` | `src/Bill/Models/OrganizationResponseDto.cs` |
| `GetOrganizationError` | `src/Bill/Errors/GetOrganizationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetPricePlan

- **Signature**: `GetPricePlan(GetPricePlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`
- **Returns**: `PricePlanResponseDto`
- **Error**: `ApiException<GetPricePlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPricePlanRequest` | `src/Bill/Requests/Organizations/GetPricePlanRequest.cs` |
| `PricePlanResponseDto` | `src/Bill/Models/PricePlanResponseDto.cs` |
| `GetPricePlanError` | `src/Bill/Errors/GetPricePlanError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListBillingStatements

- **Signature**: `ListBillingStatements(ListBillingStatementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`
- **Query params (wire ← C#)**: `max` ← `Max`, `invoiceDateFrom` ← `InvoiceDateFrom`, `invoiceDateTo` ← `InvoiceDateTo`, `page` ← `Page`
- **Returns**: `ListResponseDtoBillingStatementResponseDto`
- **Error**: `ApiException<ListBillingStatementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillingStatementsRequest` | `src/Bill/Requests/Organizations/ListBillingStatementsRequest.cs` |
| `ListResponseDtoBillingStatementResponseDto` | `src/Bill/Models/ListResponseDtoBillingStatementResponseDto.cs` |
| `ListBillingStatementsError` | `src/Bill/Errors/ListBillingStatementsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListIndustries

- **Signature**: `ListIndustries(ListIndustriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListIndustriesResponseDto`
- **Error**: `ApiException<ListIndustriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListIndustriesRequest` | `src/Bill/Requests/Organizations/ListIndustriesRequest.cs` |
| `ListIndustriesResponseDto` | `src/Bill/Models/ListIndustriesResponseDto.cs` |
| `ListIndustriesError` | `src/Bill/Errors/ListIndustriesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateOrganization

- **Signature**: `UpdateOrganization(UpdateOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`, `Body`
- **Returns**: `OrganizationResponseDto`
- **Error**: `ApiException<UpdateOrganizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateOrganizationRequest` | `src/Bill/Requests/Organizations/UpdateOrganizationRequest.cs` |
| `OrganizationUpdateRequestDto` | `src/Bill/Models/OrganizationUpdateRequestDto.cs` |
| `OrganizationResponseDto` | `src/Bill/Models/OrganizationResponseDto.cs` |
| `UpdateOrganizationError` | `src/Bill/Errors/UpdateOrganizationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

