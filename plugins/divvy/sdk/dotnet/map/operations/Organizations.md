<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.Organizations` · Source: `src/Divvy/Api/Organizations.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBillingStatementDetail

- **Signature**: `GetBillingStatementDetail(GetBillingStatementDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`, `BillingStatementId`
- **Returns**: `BillingStatementDetailResponseDto`
- **Error**: `ApiException<GetBillingStatementDetailError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBillingStatementDetailRequest` | `src/Divvy/Requests/Organizations/GetBillingStatementDetailRequest.cs` |
| `BillingStatementDetailResponseDto` | `src/Divvy/Models/BillingStatementDetailResponseDto.cs` |
| `GetBillingStatementDetailError` | `src/Divvy/Errors/GetBillingStatementDetailError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetOrganization

- **Signature**: `GetOrganization(GetOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`
- **Returns**: `OrganizationResponseDto`
- **Error**: `ApiException<GetOrganizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationRequest` | `src/Divvy/Requests/Organizations/GetOrganizationRequest.cs` |
| `OrganizationResponseDto` | `src/Divvy/Models/OrganizationResponseDto.cs` |
| `GetOrganizationError` | `src/Divvy/Errors/GetOrganizationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetPricePlan

- **Signature**: `GetPricePlan(GetPricePlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`
- **Returns**: `PricePlanResponseDto`
- **Error**: `ApiException<GetPricePlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPricePlanRequest` | `src/Divvy/Requests/Organizations/GetPricePlanRequest.cs` |
| `PricePlanResponseDto` | `src/Divvy/Models/PricePlanResponseDto.cs` |
| `GetPricePlanError` | `src/Divvy/Errors/GetPricePlanError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListBillingStatements

- **Signature**: `ListBillingStatements(ListBillingStatementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`
- **Query params (wire ← C#)**: `max` ← `Max`, `invoiceDateFrom` ← `InvoiceDateFrom`, `invoiceDateTo` ← `InvoiceDateTo`, `page` ← `Page`
- **Returns**: `ListResponseDtoBillingStatementResponseDto`
- **Error**: `ApiException<ListBillingStatementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillingStatementsRequest` | `src/Divvy/Requests/Organizations/ListBillingStatementsRequest.cs` |
| `ListResponseDtoBillingStatementResponseDto` | `src/Divvy/Models/ListResponseDtoBillingStatementResponseDto.cs` |
| `ListBillingStatementsError` | `src/Divvy/Errors/ListBillingStatementsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListIndustries

- **Signature**: `ListIndustries(ListIndustriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListIndustriesResponseDto`
- **Error**: `ApiException<ListIndustriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListIndustriesRequest` | `src/Divvy/Requests/Organizations/ListIndustriesRequest.cs` |
| `ListIndustriesResponseDto` | `src/Divvy/Models/ListIndustriesResponseDto.cs` |
| `ListIndustriesError` | `src/Divvy/Errors/ListIndustriesError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateOrganization

- **Signature**: `UpdateOrganization(UpdateOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`, `Body`
- **Returns**: `OrganizationResponseDto`
- **Error**: `ApiException<UpdateOrganizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateOrganizationRequest` | `src/Divvy/Requests/Organizations/UpdateOrganizationRequest.cs` |
| `OrganizationUpdateRequestDto` | `src/Divvy/Models/OrganizationUpdateRequestDto.cs` |
| `OrganizationResponseDto` | `src/Divvy/Models/OrganizationResponseDto.cs` |
| `UpdateOrganizationError` | `src/Divvy/Errors/UpdateOrganizationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

