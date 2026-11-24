<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `paid/apis/customers.py` · 33 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.customers.check_entitlement

- **Route**: `GET /customers/{customerId}/entitlement`
- **Server**: `default`
- **Signature**: `def check_entitlement(customer_id: str, event_name: str, authorization: str, *, view: CustomersCustomerIdEntitlementGetParametersViewOrStr | None = CustomersCustomerIdEntitlementGetParametersView.ACTIVE_ONLY, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `event_name`, `authorization`
- **Params**: `customer_id` — path `customerId` · `event_name` — query · `view` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomersCheckEntitlementResponse200`
- **Returns (raw)**: `ApiResult[CustomersCheckEntitlementResponse200, CheckEntitlementErrorBody]`
- **Error**: `CheckEntitlementErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomersCustomerIdEntitlementGetParametersViewOrStr` | `paid/models/enums/customers_customer_id_entitlement_get_parameters_view.py` |
| `CustomersCheckEntitlementResponse200` | `paid/models/customers_check_entitlement_response200.py` |
| `CheckEntitlementErrorBody` | `paid/errors/check_entitlement_error.py` |
| `Error` | `paid/models/error.py` |

### client.customers.create_customer

- **Route**: `POST /customers/`
- **Server**: `default`
- **Signature**: `def create_customer(authorization: str, *, body: CreateCustomerRequest | CreateCustomerRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Customer1`
- **Returns (raw)**: `ApiResult[Customer1, CreateCustomerErrorBody]`
- **Error**: `CreateCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCustomerRequest` | `paid/models/create_customer_request.py` |
| `CreateCustomerRequestDict` | `paid/models/create_customer_request.py` |
| `Customer1` | `paid/models/customer1.py` |
| `CreateCustomerErrorBody` | `paid/errors/create_customer_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.create_customer_alias

- **Route**: `POST /customers/{id}/aliases`
- **Server**: `default`
- **Signature**: `def create_customer_alias(id_: str, authorization: str, *, body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomerAlias`
- **Returns (raw)**: `ApiResult[CustomerAlias, CreateCustomerAliasErrorBody]`
- **Error**: `CreateCustomerAliasErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerAliasCreateRequest` | `paid/models/customer_alias_create_request.py` |
| `CustomerAliasCreateRequestDict` | `paid/models/customer_alias_create_request.py` |
| `CustomerAlias` | `paid/models/customer_alias.py` |
| `CreateCustomerAliasErrorBody` | `paid/errors/create_customer_alias_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.create_customer_alias_by_external_id

- **Route**: `POST /customers/external/{externalId}/aliases`
- **Server**: `default`
- **Signature**: `def create_customer_alias_by_external_id(external_id: str, authorization: str, *, body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomerAlias`
- **Returns (raw)**: `ApiResult[CustomerAlias, CreateCustomerAliasByExternalIdErrorBody]`
- **Error**: `CreateCustomerAliasByExternalIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerAliasCreateRequest` | `paid/models/customer_alias_create_request.py` |
| `CustomerAliasCreateRequestDict` | `paid/models/customer_alias_create_request.py` |
| `CustomerAlias` | `paid/models/customer_alias.py` |
| `CreateCustomerAliasByExternalIdErrorBody` | `paid/errors/create_customer_alias_by_external_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.create_payment_method

- **Route**: `POST /customers/external/{externalId}/payment-methods`
- **Server**: `default`
- **Signature**: `def create_payment_method(external_id: str, authorization: str, *, body: CustomersExternalPaymentMethodsRequest | CustomersExternalPaymentMethodsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `PaymentMethod`
- **Returns (raw)**: `ApiResult[PaymentMethod, CreatePaymentMethodErrorBody]`
- **Error**: `CreatePaymentMethodErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomersExternalPaymentMethodsRequest` | `paid/models/customers_external_payment_methods_request.py` |
| `CustomersExternalPaymentMethodsRequestDict` | `paid/models/customers_external_payment_methods_request.py` |
| `PaymentMethod` | `paid/models/payment_method.py` |
| `CreatePaymentMethodErrorBody` | `paid/errors/create_payment_method_error.py` |
| `Error` | `paid/models/error.py` |

### client.customers.create3

- **Route**: `POST /customers`
- **Server**: `default`
- **Signature**: `def create3(authorization: str, *, body: CustomerCreate | CustomerCreateDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Customer`
- **Returns (raw)**: `ApiResult[Customer, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CustomerCreate` | `paid/models/customer_create.py` |
| `CustomerCreateDict` | `paid/models/customer_create.py` |
| `Customer` | `paid/models/customer.py` |

### client.customers.delete_by_external_id3

- **Route**: `DELETE /customers/external/{externalId}`
- **Server**: `default`
- **Signature**: `def delete_by_external_id3(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.customers.delete_customer_alias

- **Route**: `DELETE /customers/{id}/aliases/{alias}`
- **Server**: `default`
- **Signature**: `def delete_customer_alias(id_: str, alias: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `alias`, `authorization`
- **Params**: `id_` — path `id` · `alias` — path · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteCustomerAliasErrorBody]`
- **Error**: `DeleteCustomerAliasErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCustomerAliasErrorBody` | `paid/errors/delete_customer_alias_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.delete_customer_alias_by_external_id

- **Route**: `DELETE /customers/external/{externalId}/aliases/{alias}`
- **Server**: `default`
- **Signature**: `def delete_customer_alias_by_external_id(external_id: str, alias: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `alias`, `authorization`
- **Params**: `external_id` — path `externalId` · `alias` — path · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteCustomerAliasByExternalIdErrorBody]`
- **Error**: `DeleteCustomerAliasByExternalIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCustomerAliasByExternalIdErrorBody` | `paid/errors/delete_customer_alias_by_external_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.delete_customer_by_id

- **Route**: `DELETE /customers/{id}`
- **Server**: `default`
- **Signature**: `def delete_customer_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteCustomerByIdErrorBody]`
- **Error**: `DeleteCustomerByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCustomerByIdErrorBody` | `paid/errors/delete_customer_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.delete_payment_method

- **Route**: `DELETE /customers/external/{externalId}/payment-methods/{paymentMethodId}`
- **Server**: `default`
- **Signature**: `def delete_payment_method(external_id: str, payment_method_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `payment_method_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `payment_method_id` — path `paymentMethodId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeletePaymentMethodErrorBody]`
- **Error**: `DeletePaymentMethodErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeletePaymentMethodErrorBody` | `paid/errors/delete_payment_method_error.py` |
| `Error` | `paid/models/error.py` |

### client.customers.delete3

- **Route**: `DELETE /customers/{customerId}`
- **Server**: `default`
- **Signature**: `def delete3(customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `authorization`
- **Params**: `customer_id` — path `customerId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.customers.get_by_external_id3

- **Route**: `GET /customers/external/{externalId}`
- **Server**: `default`
- **Signature**: `def get_by_external_id3(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Customer`
- **Returns (raw)**: `ApiResult[Customer, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Customer` | `paid/models/customer.py` |

### client.customers.get_costs_by_external_id

- **Route**: `GET /customers/external/{externalId}/costs`
- **Server**: `default`
- **Signature**: `def get_costs_by_external_id(external_id: str, authorization: str, *, limit: int | None = 100, offset: int | None = 0, start_time: RFC3339DateTime | None = None, end_time: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `limit` — query · `offset` — query · `start_time` — query `startTime` · `end_time` — query `endTime` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CostTracesResponse`
- **Returns (raw)**: `ApiResult[CostTracesResponse, GetCostsByExternalIdErrorBody]`
- **Error**: `GetCostsByExternalIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CostTracesResponse` | `paid/models/cost_traces_response.py` |
| `GetCostsByExternalIdErrorBody` | `paid/errors/get_costs_by_external_id_error.py` |
| `Error` | `paid/models/error.py` |

### client.customers.get_customer_by_id

- **Route**: `GET /customers/{id}`
- **Server**: `default`
- **Signature**: `def get_customer_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Customer1`
- **Returns (raw)**: `ApiResult[Customer1, GetCustomerByIdErrorBody]`
- **Error**: `GetCustomerByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Customer1` | `paid/models/customer1.py` |
| `GetCustomerByIdErrorBody` | `paid/errors/get_customer_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.get_customer_credit_balances

- **Route**: `GET /customers/{id}/credits/balances`
- **Server**: `default`
- **Signature**: `def get_customer_credit_balances(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CreditBalanceListResponse`
- **Returns (raw)**: `ApiResult[CreditBalanceListResponse, GetCustomerCreditBalancesErrorBody]`
- **Error**: `GetCustomerCreditBalancesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreditBalanceListResponse` | `paid/models/credit_balance_list_response.py` |
| `GetCustomerCreditBalancesErrorBody` | `paid/errors/get_customer_credit_balances_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.get_customer_credit_balances_by_external_id

- **Route**: `GET /customers/external/{externalId}/credits/balances`
- **Server**: `default`
- **Signature**: `def get_customer_credit_balances_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CreditBalanceListResponse`
- **Returns (raw)**: `ApiResult[CreditBalanceListResponse, GetCustomerCreditBalancesByExternalIdErrorBody]`
- **Error**: `GetCustomerCreditBalancesByExternalIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreditBalanceListResponse` | `paid/models/credit_balance_list_response.py` |
| `GetCustomerCreditBalancesByExternalIdErrorBody` | `paid/errors/get_customer_credit_balances_by_external_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.get_customer_state_by_external_id

- **Route**: `GET /customers/external/{externalId}/state`
- **Server**: `default`
- **Signature**: `def get_customer_state_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomerState`
- **Returns (raw)**: `ApiResult[CustomerState, GetCustomerStateByExternalIdErrorBody]`
- **Error**: `GetCustomerStateByExternalIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerState` | `paid/models/customer_state.py` |
| `GetCustomerStateByExternalIdErrorBody` | `paid/errors/get_customer_state_by_external_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.get_customer_state_by_id

- **Route**: `GET /customers/{id}/state`
- **Server**: `default`
- **Signature**: `def get_customer_state_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomerState`
- **Returns (raw)**: `ApiResult[CustomerState, GetCustomerStateByIdErrorBody]`
- **Error**: `GetCustomerStateByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerState` | `paid/models/customer_state.py` |
| `GetCustomerStateByIdErrorBody` | `paid/errors/get_customer_state_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.get_entitlements

- **Route**: `GET /customers/{customerId}/credit-bundles`
- **Server**: `default`
- **Signature**: `def get_entitlements(customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `authorization`
- **Params**: `customer_id` — path `customerId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `list[EntitlementUsage]`
- **Returns (raw)**: `ApiResult[list[EntitlementUsage], GetEntitlementsErrorBody]`
- **Error**: `GetEntitlementsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntitlementUsage` | `paid/models/entitlement_usage.py` |
| `GetEntitlementsErrorBody` | `paid/errors/get_entitlements_error.py` |
| `Error` | `paid/models/error.py` |

### client.customers.get_usage_by_external_id

- **Route**: `GET /customers/external/{externalId}/usage`
- **Server**: `default`
- **Signature**: `def get_usage_by_external_id(external_id: str, authorization: str, *, limit: int | None = 100, offset: int | None = 0, start_time: RFC3339DateTime | None = None, end_time: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `limit` — query · `offset` — query · `start_time` — query `startTime` · `end_time` — query `endTime` · `authorization` — header `Authorization`
- **Returns (parsed)**: `UsageSummariesResponse`
- **Returns (raw)**: `ApiResult[UsageSummariesResponse, GetUsageByExternalIdErrorBody]`
- **Error**: `GetUsageByExternalIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsageSummariesResponse` | `paid/models/usage_summaries_response.py` |
| `GetUsageByExternalIdErrorBody` | `paid/errors/get_usage_by_external_id_error.py` |
| `Error` | `paid/models/error.py` |

### client.customers.get3

- **Route**: `GET /customers/{customerId}`
- **Server**: `default`
- **Signature**: `def get3(customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `authorization`
- **Params**: `customer_id` — path `customerId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Customer`
- **Returns (raw)**: `ApiResult[Customer, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Customer` | `paid/models/customer.py` |

### client.customers.grant_customer_credits

- **Route**: `POST /customers/{id}/credits/grants`
- **Server**: `default`
- **Signature**: `def grant_customer_credits(id_: str, authorization: str, *, body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `GrantCustomerCreditsResponse`
- **Returns (raw)**: `ApiResult[GrantCustomerCreditsResponse, GrantCustomerCreditsErrorBody]`
- **Error**: `GrantCustomerCreditsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreditGrantCreateRequest` | `paid/models/credit_grant_create_request.py` |
| `CreditGrantCreateRequestDict` | `paid/models/credit_grant_create_request.py` |
| `GrantCustomerCreditsResponse` | `paid/models/grant_customer_credits_response.py` |
| `GrantCustomerCreditsErrorBody` | `paid/errors/grant_customer_credits_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.grant_customer_credits_by_external_id

- **Route**: `POST /customers/external/{externalId}/credits/grants`
- **Server**: `default`
- **Signature**: `def grant_customer_credits_by_external_id(external_id: str, authorization: str, *, body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `GrantCustomerCreditsResponse`
- **Returns (raw)**: `ApiResult[GrantCustomerCreditsResponse, GrantCustomerCreditsByExternalIdErrorBody]`
- **Error**: `GrantCustomerCreditsByExternalIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreditGrantCreateRequest` | `paid/models/credit_grant_create_request.py` |
| `CreditGrantCreateRequestDict` | `paid/models/credit_grant_create_request.py` |
| `GrantCustomerCreditsResponse` | `paid/models/grant_customer_credits_response.py` |
| `GrantCustomerCreditsByExternalIdErrorBody` | `paid/errors/grant_customer_credits_by_external_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.list_customer_aliases

- **Route**: `GET /customers/{id}/aliases`
- **Server**: `default`
- **Signature**: `def list_customer_aliases(id_: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomerAliasListResponse`
- **Returns (raw)**: `ApiResult[CustomerAliasListResponse, ListCustomerAliasesErrorBody]`
- **Error**: `ListCustomerAliasesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerAliasListResponse` | `paid/models/customer_alias_list_response.py` |
| `ListCustomerAliasesErrorBody` | `paid/errors/list_customer_aliases_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.list_customer_aliases_by_external_id

- **Route**: `GET /customers/external/{externalId}/aliases`
- **Server**: `default`
- **Signature**: `def list_customer_aliases_by_external_id(external_id: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `limit` — query · `offset` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomerAliasListResponse`
- **Returns (raw)**: `ApiResult[CustomerAliasListResponse, ListCustomerAliasesByExternalIdErrorBody]`
- **Error**: `ListCustomerAliasesByExternalIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerAliasListResponse` | `paid/models/customer_alias_list_response.py` |
| `ListCustomerAliasesByExternalIdErrorBody` | `paid/errors/list_customer_aliases_by_external_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.list_customers

- **Route**: `GET /customers/`
- **Server**: `default`
- **Signature**: `def list_customers(authorization: str, *, limit: int | None = 10, offset: int | None = None, name: str | None = None, status: CustomersGetParametersStatusOrStr | None = None, creation_state: CustomersGetParametersCreationStateOrStr | None = None, created_at_from: str | None = None, created_at_to: str | None = None, external_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `limit` — query · `offset` — query · `name` — query · `status` — query · `creation_state` — query `creationState` · `created_at_from` — query `createdAtFrom` · `created_at_to` — query `createdAtTo` · `external_id` — query `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomerListResponse`
- **Returns (raw)**: `ApiResult[CustomerListResponse, ListCustomersErrorBody]`
- **Error**: `ListCustomersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomersGetParametersStatusOrStr` | `paid/models/enums/customers_get_parameters_status.py` |
| `CustomersGetParametersCreationStateOrStr` | `paid/models/enums/customers_get_parameters_creation_state.py` |
| `CustomerListResponse` | `paid/models/customer_list_response.py` |
| `ListCustomersErrorBody` | `paid/errors/list_customers_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.list_payment_methods

- **Route**: `GET /customers/external/{externalId}/payment-methods`
- **Server**: `default`
- **Signature**: `def list_payment_methods(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `list[PaymentMethod]`
- **Returns (raw)**: `ApiResult[list[PaymentMethod], ListPaymentMethodsErrorBody]`
- **Error**: `ListPaymentMethodsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentMethod` | `paid/models/payment_method.py` |
| `ListPaymentMethodsErrorBody` | `paid/errors/list_payment_methods_error.py` |
| `Error` | `paid/models/error.py` |

### client.customers.list3

- **Route**: `GET /customers`
- **Server**: `default`
- **Signature**: `def list3(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `list[Customer]`
- **Returns (raw)**: `ApiResult[list[Customer], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Customer` | `paid/models/customer.py` |

### client.customers.update_by_external_id2

- **Route**: `PUT /customers/external/{externalId}`
- **Server**: `default`
- **Signature**: `def update_by_external_id2(external_id: str, authorization: str, *, body: CustomerUpdate | CustomerUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Customer`
- **Returns (raw)**: `ApiResult[Customer, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CustomerUpdate` | `paid/models/customer_update.py` |
| `CustomerUpdateDict` | `paid/models/customer_update.py` |
| `Customer` | `paid/models/customer.py` |

### client.customers.update_customer_by_id

- **Route**: `PUT /customers/{id}`
- **Server**: `default`
- **Signature**: `def update_customer_by_id(id_: str, authorization: str, *, body: UpdateCustomerRequest | UpdateCustomerRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Customer1`
- **Returns (raw)**: `ApiResult[Customer1, UpdateCustomerByIdErrorBody]`
- **Error**: `UpdateCustomerByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCustomerRequest` | `paid/models/update_customer_request.py` |
| `UpdateCustomerRequestDict` | `paid/models/update_customer_request.py` |
| `Customer1` | `paid/models/customer1.py` |
| `UpdateCustomerByIdErrorBody` | `paid/errors/update_customer_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customers.update2

- **Route**: `PUT /customers/{customerId}`
- **Server**: `default`
- **Signature**: `def update2(customer_id: str, authorization: str, *, body: CustomerUpdate | CustomerUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `authorization`
- **Params**: `customer_id` — path `customerId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Customer`
- **Returns (raw)**: `ApiResult[Customer, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CustomerUpdate` | `paid/models/customer_update.py` |
| `CustomerUpdateDict` | `paid/models/customer_update.py` |
| `Customer` | `paid/models/customer.py` |

### client.customers.upsert_customer_user_by_external_id

- **Route**: `PUT /customers/{customerExternalId}/users/{userExternalId}`
- **Server**: `default`
- **Signature**: `def upsert_customer_user_by_external_id(customer_external_id: str, user_external_id: str, authorization: str, *, body: UpsertCustomerUserRequest | UpsertCustomerUserRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_external_id`, `user_external_id`, `authorization`
- **Params**: `customer_external_id` — path `customerExternalId` · `user_external_id` — path `userExternalId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomerUser`
- **Returns (raw)**: `ApiResult[CustomerUser, UpsertCustomerUserByExternalIdErrorBody]`
- **Error**: `UpsertCustomerUserByExternalIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpsertCustomerUserRequest` | `paid/models/upsert_customer_user_request.py` |
| `UpsertCustomerUserRequestDict` | `paid/models/upsert_customer_user_request.py` |
| `CustomerUser` | `paid/models/customer_user.py` |
| `UpsertCustomerUserByExternalIdErrorBody` | `paid/errors/upsert_customer_user_by_external_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

