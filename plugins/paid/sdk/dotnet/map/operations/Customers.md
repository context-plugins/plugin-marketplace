<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.Customers` · Source: `src/Paid/Api/Customers.cs` · 33 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CheckEntitlement

- **Signature**: `CheckEntitlement(CheckEntitlementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `EventName`, `Authorization`
- **Query params (wire ← C#)**: `event_name` ← `EventName`, `view` ← `View`
- **Returns**: `CustomersCheckEntitlementResponse200`
- **Error**: `ApiException<CheckEntitlementError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CheckEntitlementRequest` | `src/Paid/Requests/Customers/CheckEntitlementRequest.cs` |
| `CustomersCustomerIdEntitlementGetParametersView` | `src/Paid/Models/Enums/CustomersCustomerIdEntitlementGetParametersView.cs` |
| `CustomersCheckEntitlementResponse200` | `src/Paid/Models/CustomersCheckEntitlementResponse200.cs` |
| `CheckEntitlementError` | `src/Paid/Errors/CheckEntitlementError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### Create3

- **Signature**: `Create3(Create3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `Customer`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Create3Request` | `src/Paid/Requests/Customers/Create3Request.cs` |
| `CustomerCreate` | `src/Paid/Models/CustomerCreate.cs` |
| `Customer` | `src/Paid/Models/Customer.cs` |

### CreateCustomer

- **Signature**: `CreateCustomer(CreateCustomerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `Customer1`
- **Error**: `ApiException<CreateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerOperationRequest` | `src/Paid/Requests/Customers/CreateCustomerOperationRequest.cs` |
| `CreateCustomerRequest` | `src/Paid/Models/CreateCustomerRequest.cs` |
| `Customer1` | `src/Paid/Models/Customer1.cs` |
| `CreateCustomerError` | `src/Paid/Errors/CreateCustomerError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### CreateCustomerAlias

- **Signature**: `CreateCustomerAlias(CreateCustomerAliasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `CustomerAlias`
- **Error**: `ApiException<CreateCustomerAliasError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerAliasRequest` | `src/Paid/Requests/Customers/CreateCustomerAliasRequest.cs` |
| `CustomerAliasCreateRequest` | `src/Paid/Models/CustomerAliasCreateRequest.cs` |
| `CustomerAlias` | `src/Paid/Models/CustomerAlias.cs` |
| `CreateCustomerAliasError` | `src/Paid/Errors/CreateCustomerAliasError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### CreateCustomerAliasByExternalId

- **Signature**: `CreateCustomerAliasByExternalId(CreateCustomerAliasByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `CustomerAlias`
- **Error**: `ApiException<CreateCustomerAliasByExternalIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerAliasByExternalIdRequest` | `src/Paid/Requests/Customers/CreateCustomerAliasByExternalIdRequest.cs` |
| `CustomerAliasCreateRequest` | `src/Paid/Models/CustomerAliasCreateRequest.cs` |
| `CustomerAlias` | `src/Paid/Models/CustomerAlias.cs` |
| `CreateCustomerAliasByExternalIdError` | `src/Paid/Errors/CreateCustomerAliasByExternalIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### CreatePaymentMethod

- **Signature**: `CreatePaymentMethod(CreatePaymentMethodRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `PaymentMethod`
- **Error**: `ApiException<CreatePaymentMethodError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePaymentMethodRequest` | `src/Paid/Requests/Customers/CreatePaymentMethodRequest.cs` |
| `CustomersExternalPaymentMethodsRequest` | `src/Paid/Models/CustomersExternalPaymentMethodsRequest.cs` |
| `PaymentMethod` | `src/Paid/Models/PaymentMethod.cs` |
| `CreatePaymentMethodError` | `src/Paid/Errors/CreatePaymentMethodError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### Delete3

- **Signature**: `Delete3(Delete3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Delete3Request` | `src/Paid/Requests/Customers/Delete3Request.cs` |

### DeleteByExternalId3

- **Signature**: `DeleteByExternalId3(DeleteByExternalId3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteByExternalId3Request` | `src/Paid/Requests/Customers/DeleteByExternalId3Request.cs` |

### DeleteCustomerAlias

- **Signature**: `DeleteCustomerAlias(DeleteCustomerAliasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Alias`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<DeleteCustomerAliasError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomerAliasRequest` | `src/Paid/Requests/Customers/DeleteCustomerAliasRequest.cs` |
| `DeleteCustomerAliasError` | `src/Paid/Errors/DeleteCustomerAliasError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### DeleteCustomerAliasByExternalId

- **Signature**: `DeleteCustomerAliasByExternalId(DeleteCustomerAliasByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Alias`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<DeleteCustomerAliasByExternalIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomerAliasByExternalIdRequest` | `src/Paid/Requests/Customers/DeleteCustomerAliasByExternalIdRequest.cs` |
| `DeleteCustomerAliasByExternalIdError` | `src/Paid/Errors/DeleteCustomerAliasByExternalIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### DeleteCustomerById

- **Signature**: `DeleteCustomerById(DeleteCustomerByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<DeleteCustomerByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomerByIdRequest` | `src/Paid/Requests/Customers/DeleteCustomerByIdRequest.cs` |
| `DeleteCustomerByIdError` | `src/Paid/Errors/DeleteCustomerByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### DeletePaymentMethod

- **Signature**: `DeletePaymentMethod(DeletePaymentMethodRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `PaymentMethodId`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<DeletePaymentMethodError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePaymentMethodRequest` | `src/Paid/Requests/Customers/DeletePaymentMethodRequest.cs` |
| `DeletePaymentMethodError` | `src/Paid/Errors/DeletePaymentMethodError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### Get3

- **Signature**: `Get3(Get3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Authorization`
- **Returns**: `Customer`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Get3Request` | `src/Paid/Requests/Customers/Get3Request.cs` |
| `Customer` | `src/Paid/Models/Customer.cs` |

### GetByExternalId3

- **Signature**: `GetByExternalId3(GetByExternalId3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `Customer`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetByExternalId3Request` | `src/Paid/Requests/Customers/GetByExternalId3Request.cs` |
| `Customer` | `src/Paid/Models/Customer.cs` |

### GetCostsByExternalId

- **Signature**: `GetCostsByExternalId(GetCostsByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `startTime` ← `StartTime`, `endTime` ← `EndTime`
- **Returns**: `CostTracesResponse`
- **Error**: `ApiException<GetCostsByExternalIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCostsByExternalIdRequest` | `src/Paid/Requests/Customers/GetCostsByExternalIdRequest.cs` |
| `CostTracesResponse` | `src/Paid/Models/CostTracesResponse.cs` |
| `GetCostsByExternalIdError` | `src/Paid/Errors/GetCostsByExternalIdError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### GetCustomerById

- **Signature**: `GetCustomerById(GetCustomerByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `Customer1`
- **Error**: `ApiException<GetCustomerByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerByIdRequest` | `src/Paid/Requests/Customers/GetCustomerByIdRequest.cs` |
| `Customer1` | `src/Paid/Models/Customer1.cs` |
| `GetCustomerByIdError` | `src/Paid/Errors/GetCustomerByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetCustomerCreditBalances

- **Signature**: `GetCustomerCreditBalances(GetCustomerCreditBalancesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `CreditBalanceListResponse`
- **Error**: `ApiException<GetCustomerCreditBalancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerCreditBalancesRequest` | `src/Paid/Requests/Customers/GetCustomerCreditBalancesRequest.cs` |
| `CreditBalanceListResponse` | `src/Paid/Models/CreditBalanceListResponse.cs` |
| `GetCustomerCreditBalancesError` | `src/Paid/Errors/GetCustomerCreditBalancesError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetCustomerCreditBalancesByExternalId

- **Signature**: `GetCustomerCreditBalancesByExternalId(GetCustomerCreditBalancesByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `CreditBalanceListResponse`
- **Error**: `ApiException<GetCustomerCreditBalancesByExternalIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerCreditBalancesByExternalIdRequest` | `src/Paid/Requests/Customers/GetCustomerCreditBalancesByExternalIdRequest.cs` |
| `CreditBalanceListResponse` | `src/Paid/Models/CreditBalanceListResponse.cs` |
| `GetCustomerCreditBalancesByExternalIdError` | `src/Paid/Errors/GetCustomerCreditBalancesByExternalIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetCustomerStateByExternalId

- **Signature**: `GetCustomerStateByExternalId(GetCustomerStateByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `CustomerState`
- **Error**: `ApiException<GetCustomerStateByExternalIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerStateByExternalIdRequest` | `src/Paid/Requests/Customers/GetCustomerStateByExternalIdRequest.cs` |
| `CustomerState` | `src/Paid/Models/CustomerState.cs` |
| `GetCustomerStateByExternalIdError` | `src/Paid/Errors/GetCustomerStateByExternalIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetCustomerStateById

- **Signature**: `GetCustomerStateById(GetCustomerStateByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `CustomerState`
- **Error**: `ApiException<GetCustomerStateByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerStateByIdRequest` | `src/Paid/Requests/Customers/GetCustomerStateByIdRequest.cs` |
| `CustomerState` | `src/Paid/Models/CustomerState.cs` |
| `GetCustomerStateByIdError` | `src/Paid/Errors/GetCustomerStateByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetEntitlements

- **Signature**: `GetEntitlements(GetEntitlementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Authorization`
- **Returns**: `IReadOnlyList<EntitlementUsage>`
- **Error**: `ApiException<GetEntitlementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEntitlementsRequest` | `src/Paid/Requests/Customers/GetEntitlementsRequest.cs` |
| `EntitlementUsage` | `src/Paid/Models/EntitlementUsage.cs` |
| `GetEntitlementsError` | `src/Paid/Errors/GetEntitlementsError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### GetUsageByExternalId

- **Signature**: `GetUsageByExternalId(GetUsageByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `startTime` ← `StartTime`, `endTime` ← `EndTime`
- **Returns**: `UsageSummariesResponse`
- **Error**: `ApiException<GetUsageByExternalIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsageByExternalIdRequest` | `src/Paid/Requests/Customers/GetUsageByExternalIdRequest.cs` |
| `UsageSummariesResponse` | `src/Paid/Models/UsageSummariesResponse.cs` |
| `GetUsageByExternalIdError` | `src/Paid/Errors/GetUsageByExternalIdError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### GrantCustomerCredits

- **Signature**: `GrantCustomerCredits(GrantCustomerCreditsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `GrantCustomerCreditsResponse`
- **Error**: `ApiException<GrantCustomerCreditsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GrantCustomerCreditsRequest` | `src/Paid/Requests/Customers/GrantCustomerCreditsRequest.cs` |
| `CreditGrantCreateRequest` | `src/Paid/Models/CreditGrantCreateRequest.cs` |
| `GrantCustomerCreditsResponse` | `src/Paid/Models/GrantCustomerCreditsResponse.cs` |
| `GrantCustomerCreditsError` | `src/Paid/Errors/GrantCustomerCreditsError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GrantCustomerCreditsByExternalId

- **Signature**: `GrantCustomerCreditsByExternalId(GrantCustomerCreditsByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `GrantCustomerCreditsResponse`
- **Error**: `ApiException<GrantCustomerCreditsByExternalIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GrantCustomerCreditsByExternalIdRequest` | `src/Paid/Requests/Customers/GrantCustomerCreditsByExternalIdRequest.cs` |
| `CreditGrantCreateRequest` | `src/Paid/Models/CreditGrantCreateRequest.cs` |
| `GrantCustomerCreditsResponse` | `src/Paid/Models/GrantCustomerCreditsResponse.cs` |
| `GrantCustomerCreditsByExternalIdError` | `src/Paid/Errors/GrantCustomerCreditsByExternalIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### List3

- **Signature**: `List3(List3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `IReadOnlyList<Customer>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `List3Request` | `src/Paid/Requests/Customers/List3Request.cs` |
| `Customer` | `src/Paid/Models/Customer.cs` |

### ListCustomerAliases

- **Signature**: `ListCustomerAliases(ListCustomerAliasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `CustomerAliasListResponse`
- **Error**: `ApiException<ListCustomerAliasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerAliasesRequest` | `src/Paid/Requests/Customers/ListCustomerAliasesRequest.cs` |
| `CustomerAliasListResponse` | `src/Paid/Models/CustomerAliasListResponse.cs` |
| `ListCustomerAliasesError` | `src/Paid/Errors/ListCustomerAliasesError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### ListCustomerAliasesByExternalId

- **Signature**: `ListCustomerAliasesByExternalId(ListCustomerAliasesByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `CustomerAliasListResponse`
- **Error**: `ApiException<ListCustomerAliasesByExternalIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerAliasesByExternalIdRequest` | `src/Paid/Requests/Customers/ListCustomerAliasesByExternalIdRequest.cs` |
| `CustomerAliasListResponse` | `src/Paid/Models/CustomerAliasListResponse.cs` |
| `ListCustomerAliasesByExternalIdError` | `src/Paid/Errors/ListCustomerAliasesByExternalIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### ListCustomers

- **Signature**: `ListCustomers(ListCustomersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `name` ← `Name`, `status` ← `Status`, `creationState` ← `CreationState`, `createdAtFrom` ← `CreatedAtFrom`, `createdAtTo` ← `CreatedAtTo`, `externalId` ← `ExternalId`
- **Returns**: `CustomerListResponse`
- **Error**: `ApiException<ListCustomersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomersRequest` | `src/Paid/Requests/Customers/ListCustomersRequest.cs` |
| `CustomersGetParametersStatus` | `src/Paid/Models/Enums/CustomersGetParametersStatus.cs` |
| `CustomersGetParametersCreationState` | `src/Paid/Models/Enums/CustomersGetParametersCreationState.cs` |
| `CustomerListResponse` | `src/Paid/Models/CustomerListResponse.cs` |
| `ListCustomersError` | `src/Paid/Errors/ListCustomersError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### ListPaymentMethods

- **Signature**: `ListPaymentMethods(ListPaymentMethodsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `IReadOnlyList<PaymentMethod>`
- **Error**: `ApiException<ListPaymentMethodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPaymentMethodsRequest` | `src/Paid/Requests/Customers/ListPaymentMethodsRequest.cs` |
| `PaymentMethod` | `src/Paid/Models/PaymentMethod.cs` |
| `ListPaymentMethodsError` | `src/Paid/Errors/ListPaymentMethodsError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### Update2

- **Signature**: `Update2(Update2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Authorization`
- **Returns**: `Customer`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Update2Request` | `src/Paid/Requests/Customers/Update2Request.cs` |
| `CustomerUpdate` | `src/Paid/Models/CustomerUpdate.cs` |
| `Customer` | `src/Paid/Models/Customer.cs` |

### UpdateByExternalId2

- **Signature**: `UpdateByExternalId2(UpdateByExternalId2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `Customer`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateByExternalId2Request` | `src/Paid/Requests/Customers/UpdateByExternalId2Request.cs` |
| `CustomerUpdate` | `src/Paid/Models/CustomerUpdate.cs` |
| `Customer` | `src/Paid/Models/Customer.cs` |

### UpdateCustomerById

- **Signature**: `UpdateCustomerById(UpdateCustomerByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `Customer1`
- **Error**: `ApiException<UpdateCustomerByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerByIdRequest` | `src/Paid/Requests/Customers/UpdateCustomerByIdRequest.cs` |
| `UpdateCustomerRequest` | `src/Paid/Models/UpdateCustomerRequest.cs` |
| `Customer1` | `src/Paid/Models/Customer1.cs` |
| `UpdateCustomerByIdError` | `src/Paid/Errors/UpdateCustomerByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpsertCustomerUserByExternalId

- **Signature**: `UpsertCustomerUserByExternalId(UpsertCustomerUserByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerExternalId`, `UserExternalId`, `Authorization`
- **Returns**: `CustomerUser`
- **Error**: `ApiException<UpsertCustomerUserByExternalIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpsertCustomerUserByExternalIdRequest` | `src/Paid/Requests/Customers/UpsertCustomerUserByExternalIdRequest.cs` |
| `UpsertCustomerUserRequest` | `src/Paid/Models/UpsertCustomerUserRequest.cs` |
| `CustomerUser` | `src/Paid/Models/CustomerUser.cs` |
| `UpsertCustomerUserByExternalIdError` | `src/Paid/Errors/UpsertCustomerUserByExternalIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

