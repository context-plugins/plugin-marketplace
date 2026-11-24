from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    RFC3339DateTime,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.check_entitlement_error import CheckEntitlementErrorBody, check_entitlement_error_mapper
from ..errors.create_customer_alias_by_external_id_error import (
    CreateCustomerAliasByExternalIdErrorBody,
    create_customer_alias_by_external_id_error_mapper,
)
from ..errors.create_customer_alias_error import CreateCustomerAliasErrorBody, create_customer_alias_error_mapper
from ..errors.create_customer_error import CreateCustomerErrorBody, create_customer_error_mapper
from ..errors.create_payment_method_error import CreatePaymentMethodErrorBody, create_payment_method_error_mapper
from ..errors.delete_customer_alias_by_external_id_error import (
    DeleteCustomerAliasByExternalIdErrorBody,
    delete_customer_alias_by_external_id_error_mapper,
)
from ..errors.delete_customer_alias_error import DeleteCustomerAliasErrorBody, delete_customer_alias_error_mapper
from ..errors.delete_customer_by_id_error import DeleteCustomerByIdErrorBody, delete_customer_by_id_error_mapper
from ..errors.delete_payment_method_error import DeletePaymentMethodErrorBody, delete_payment_method_error_mapper
from ..errors.get_costs_by_external_id_error import GetCostsByExternalIdErrorBody, get_costs_by_external_id_error_mapper
from ..errors.get_customer_by_id_error import GetCustomerByIdErrorBody, get_customer_by_id_error_mapper
from ..errors.get_customer_credit_balances_by_external_id_error import (
    GetCustomerCreditBalancesByExternalIdErrorBody,
    get_customer_credit_balances_by_external_id_error_mapper,
)
from ..errors.get_customer_credit_balances_error import (
    GetCustomerCreditBalancesErrorBody,
    get_customer_credit_balances_error_mapper,
)
from ..errors.get_customer_state_by_external_id_error import (
    GetCustomerStateByExternalIdErrorBody,
    get_customer_state_by_external_id_error_mapper,
)
from ..errors.get_customer_state_by_id_error import GetCustomerStateByIdErrorBody, get_customer_state_by_id_error_mapper
from ..errors.get_entitlements_error import GetEntitlementsErrorBody, get_entitlements_error_mapper
from ..errors.get_usage_by_external_id_error import GetUsageByExternalIdErrorBody, get_usage_by_external_id_error_mapper
from ..errors.grant_customer_credits_by_external_id_error import (
    GrantCustomerCreditsByExternalIdErrorBody,
    grant_customer_credits_by_external_id_error_mapper,
)
from ..errors.grant_customer_credits_error import GrantCustomerCreditsErrorBody, grant_customer_credits_error_mapper
from ..errors.list_customer_aliases_by_external_id_error import (
    ListCustomerAliasesByExternalIdErrorBody,
    list_customer_aliases_by_external_id_error_mapper,
)
from ..errors.list_customer_aliases_error import ListCustomerAliasesErrorBody, list_customer_aliases_error_mapper
from ..errors.list_customers_error import ListCustomersErrorBody, list_customers_error_mapper
from ..errors.list_payment_methods_error import ListPaymentMethodsErrorBody, list_payment_methods_error_mapper
from ..errors.update_customer_by_id_error import UpdateCustomerByIdErrorBody, update_customer_by_id_error_mapper
from ..errors.upsert_customer_user_by_external_id_error import (
    UpsertCustomerUserByExternalIdErrorBody,
    upsert_customer_user_by_external_id_error_mapper,
)
from ..models.cost_traces_response import CostTracesResponse
from ..models.create_customer_request import CreateCustomerRequest, CreateCustomerRequestDict
from ..models.credit_balance_list_response import CreditBalanceListResponse
from ..models.credit_grant_create_request import CreditGrantCreateRequest, CreditGrantCreateRequestDict
from ..models.customer import Customer
from ..models.customer1 import Customer1
from ..models.customer_alias import CustomerAlias
from ..models.customer_alias_create_request import CustomerAliasCreateRequest, CustomerAliasCreateRequestDict
from ..models.customer_alias_list_response import CustomerAliasListResponse
from ..models.customer_create import CustomerCreate, CustomerCreateDict
from ..models.customer_list_response import CustomerListResponse
from ..models.customer_state import CustomerState
from ..models.customer_update import CustomerUpdate, CustomerUpdateDict
from ..models.customer_user import CustomerUser
from ..models.customers_check_entitlement_response200 import CustomersCheckEntitlementResponse200
from ..models.customers_external_payment_methods_request import (
    CustomersExternalPaymentMethodsRequest,
    CustomersExternalPaymentMethodsRequestDict,
)
from ..models.entitlement_usage import EntitlementUsage
from ..models.enums.customers_customer_id_entitlement_get_parameters_view import (
    CustomersCustomerIdEntitlementGetParametersView,
    CustomersCustomerIdEntitlementGetParametersViewOrStr,
)
from ..models.enums.customers_get_parameters_creation_state import CustomersGetParametersCreationStateOrStr
from ..models.enums.customers_get_parameters_status import CustomersGetParametersStatusOrStr
from ..models.grant_customer_credits_response import GrantCustomerCreditsResponse
from ..models.payment_method import PaymentMethod
from ..models.update_customer_request import UpdateCustomerRequest, UpdateCustomerRequestDict
from ..models.upsert_customer_user_request import UpsertCustomerUserRequest, UpsertCustomerUserRequestDict
from ..models.usage_summaries_response import UsageSummariesResponse
from ..server.server import Server


class Customers:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CustomersWithRawResponse(client, server)

    def check_entitlement(
        self,
        customer_id: str,
        event_name: str,
        authorization: str,
        *,
        view: (
            CustomersCustomerIdEntitlementGetParametersViewOrStr | None
        ) = CustomersCustomerIdEntitlementGetParametersView.ACTIVE_ONLY,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomersCheckEntitlementResponse200:
        """Send a ``GET`` request.

        Args:
            customer_id: The customer ID
            event_name: The name of the usage event to check entitlement for
            authorization: Bearer authentication
            view: Filter view - 'all' returns all entitlements regardless of status, 'active_only' returns only
                currently active entitlements with available credits
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Bad request (missing event_name parameter) Customer not found ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.check_entitlement(
                customer_id, event_name, authorization, view=view, request_options=request_options
            ),
        )

    def create_customer(
        self,
        authorization: str,
        *,
        body: CreateCustomerRequest | CreateCustomerRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Customer1:
        """Creates a new customer for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_customer(authorization, body=body, request_options=request_options)
        )

    def create_customer_alias(
        self,
        id_: str,
        authorization: str,
        *,
        body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerAlias:
        """Create an alternate external identifier for a customer by Paid display ID.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_customer_alias(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    def create_customer_alias_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerAlias:
        """Create an alternate external identifier for a customer by external ID.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_customer_alias_by_external_id(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    def create_payment_method(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CustomersExternalPaymentMethodsRequest | CustomersExternalPaymentMethodsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentMethod:
        """Creates a new payment method for a customer using a Stripe confirmation token.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment method created successfully

        Raises:
            ApiError: Bad request - Missing confirmation token or invalid request Forbidden - Invalid or missing API key
                Customer not found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_payment_method(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    def create3(
        self,
        authorization: str,
        *,
        body: CustomerCreate | CustomerCreateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Customer:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response - customer already exists with this externalId

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create3(authorization, body=body, request_options=request_options))

    def delete_by_external_id3(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_by_external_id3(external_id, authorization, request_options=request_options)
        )

    def delete_customer_alias(
        self, id_: str, alias: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Remove an alternate external identifier from a customer by Paid display ID.

        Args:
            id_: Paid customer display id
            alias: Customer alias value.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_customer_alias(id_, alias, authorization, request_options=request_options)
        )

    def delete_customer_alias_by_external_id(
        self, external_id: str, alias: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Remove an alternate external identifier from a customer by external ID.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            alias: Customer alias value.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_customer_alias_by_external_id(
                external_id, alias, authorization, request_options=request_options
            ),
        )

    def delete_customer_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Delete a customer by Paid display ID. Use the value returned as ``customer.id``, for example ``cus_abc123``.
        If you have your own customer ID, use ``DELETE /api/v2/customers/external/{externalId}``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_customer_by_id(id_, authorization, request_options=request_options)
        )

    def delete_payment_method(
        self,
        external_id: str,
        payment_method_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a specific payment method from a customer's account.

        Args:
            external_id: The external ID of the customer
            payment_method_id: The ID of the payment method to delete
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment method deleted successfully

        Raises:
            ApiError: Forbidden - Invalid or missing API key Customer or payment method not found ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_payment_method(
                external_id, payment_method_id, authorization, request_options=request_options
            ),
        )

    def delete3(
        self, customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            customer_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete3(customer_id, authorization, request_options=request_options))

    def get_by_external_id3(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Customer:
        """Send a ``GET`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_by_external_id3(external_id, authorization, request_options=request_options)
        )

    def get_costs_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CostTracesResponse:
        """Send a ``GET`` request.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            limit: Maximum number of traces to return (1-1000)
            offset: Number of traces to skip for pagination
            start_time: Filter traces starting from this time (ISO 8601 format)
            end_time: Filter traces up to this time (ISO 8601 format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Bad request - Invalid query parameters Forbidden - Invalid or missing API key Customer not found
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_costs_by_external_id(
                external_id,
                authorization,
                limit=limit,
                offset=offset,
                start_time=start_time,
                end_time=end_time,
                request_options=request_options,
            ),
        )

    def get_customer_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Customer1:
        """Get a customer by Paid display ID. Use the value returned as ``customer.id``, for example ``cus_abc123``. If
        you have your own customer ID, use ``GET /api/v2/customers/external/{externalId}``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_customer_by_id(id_, authorization, request_options=request_options))

    def get_customer_credit_balances(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CreditBalanceListResponse:
        """Get current customer credit balances grouped by currency for a Paid customer display ID. Use the value
        returned as ``customer.id``, for example ``cus_abc123``. If you have your own customer ID, use
        ``/api/v2/customers/external/{externalId}/credits/balances``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_customer_credit_balances(id_, authorization, request_options=request_options)
        )

    def get_customer_credit_balances_by_external_id(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CreditBalanceListResponse:
        """Get current customer credit balances grouped by currency, looked up by external ID

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_customer_credit_balances_by_external_id(
                external_id, authorization, request_options=request_options
            ),
        )

    def get_customer_state_by_external_id(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomerState:
        """Primary integration endpoint for agents and programmatic clients using their own customer IDs. Use the value
        you stored on ``customer.externalId``, for example ``customer_123``.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_customer_state_by_external_id(
                external_id, authorization, request_options=request_options
            ),
        )

    def get_customer_state_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomerState:
        """Get the current customer state by Paid display ID

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_customer_state_by_id(id_, authorization, request_options=request_options)
        )

    def get_entitlements(
        self, customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[EntitlementUsage]:
        """Send a ``GET`` request.

        Args:
            customer_id: The customer ID
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Forbidden ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_entitlements(customer_id, authorization, request_options=request_options)
        )

    def get_usage_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UsageSummariesResponse:
        """Send a ``GET`` request.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            limit: Maximum number of usage summaries to return (1-1000)
            offset: Number of usage summaries to skip for pagination
            start_time: Filter usage summaries starting from this time (ISO 8601 format). Returns summaries that overlap
                with the time range.
            end_time: Filter usage summaries up to this time (ISO 8601 format). Returns summaries that overlap with the
                time range.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Bad request - Invalid query parameters Forbidden - Invalid or missing API key Customer not found
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_usage_by_external_id(
                external_id,
                authorization,
                limit=limit,
                offset=offset,
                start_time=start_time,
                end_time=end_time,
                request_options=request_options,
            ),
        )

    def get3(
        self, customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Customer:
        """Send a ``GET`` request.

        Args:
            customer_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get3(customer_id, authorization, request_options=request_options))

    def grant_customer_credits(
        self,
        id_: str,
        authorization: str,
        *,
        body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GrantCustomerCreditsResponse:
        """Immediately grant credits to a customer using an active credit currency key.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.grant_customer_credits(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    def grant_customer_credits_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GrantCustomerCreditsResponse:
        """Immediately grant credits to a customer looked up by external ID using an active credit currency key.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.grant_customer_credits_by_external_id(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    def list_customer_aliases(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerAliasListResponse:
        """List alternate external identifiers that resolve to a customer by Paid display ID.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_customer_aliases(
                id_, authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def list_customer_aliases_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerAliasListResponse:
        """List alternate external identifiers that resolve to a customer by external ID.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_customer_aliases_by_external_id(
                external_id, authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def list_customers(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        name: str | None = None,
        status: CustomersGetParametersStatusOrStr | None = None,
        creation_state: CustomersGetParametersCreationStateOrStr | None = None,
        created_at_from: str | None = None,
        created_at_to: str | None = None,
        external_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerListResponse:
        """Get a list of customers for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            name: Search by customer name (case-insensitive, matches anywhere in the name).
            status: Filter by customer status. churned: customers marked as churned. active: everyone else.
            creation_state: Filter by creation state: draft or active.
            created_at_from: Only customers created on or after this date. Accepts an ISO 8601 date or date-time.
                Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset
                are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            created_at_to: Only customers created on or before this date. Accepts an ISO 8601 date or date-time.
                Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset
                are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            external_id: Filter by your external customer ID (exact match).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_customers(
                authorization,
                limit=limit,
                offset=offset,
                name=name,
                status=status,
                creation_state=creation_state,
                created_at_from=created_at_from,
                created_at_to=created_at_to,
                external_id=external_id,
                request_options=request_options,
            ),
        )

    def list_payment_methods(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[PaymentMethod]:
        """Retrieves all payment methods associated with a customer identified by their external ID.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Forbidden - Invalid or missing API key Customer not found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_payment_methods(external_id, authorization, request_options=request_options)
        )

    def list3(self, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Customer]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list3(authorization, request_options=request_options))

    def update_by_external_id2(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CustomerUpdate | CustomerUpdateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Customer:
        """Send a ``PUT`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_by_external_id2(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    def update_customer_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateCustomerRequest | UpdateCustomerRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Customer1:
        """Update a customer by Paid display ID. Use the value returned as ``customer.id``, for example ``cus_abc123``.
        If you have your own customer ID, use ``PUT /api/v2/customers/external/{externalId}``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_customer_by_id(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    def update2(
        self,
        customer_id: str,
        authorization: str,
        *,
        body: CustomerUpdate | CustomerUpdateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Customer:
        """Send a ``PUT`` request.

        Args:
            customer_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer updated successfully

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update2(customer_id, authorization, body=body, request_options=request_options)
        )

    def upsert_customer_user_by_external_id(
        self,
        customer_external_id: str,
        user_external_id: str,
        authorization: str,
        *,
        body: UpsertCustomerUserRequest | UpsertCustomerUserRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerUser:
        """Create or update a customer user using customer and user external IDs

        Args:
            customer_external_id: Value sent with the request.
            user_external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.upsert_customer_user_by_external_id(
                customer_external_id, user_external_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CustomersWithRawResponse:
        return self._with_raw_response


class AsyncCustomers:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCustomersWithRawResponse(client, server)

    async def check_entitlement(
        self,
        customer_id: str,
        event_name: str,
        authorization: str,
        *,
        view: (
            CustomersCustomerIdEntitlementGetParametersViewOrStr | None
        ) = CustomersCustomerIdEntitlementGetParametersView.ACTIVE_ONLY,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomersCheckEntitlementResponse200:
        """Send a ``GET`` request.

        Args:
            customer_id: The customer ID
            event_name: The name of the usage event to check entitlement for
            authorization: Bearer authentication
            view: Filter view - 'all' returns all entitlements regardless of status, 'active_only' returns only
                currently active entitlements with available credits
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Bad request (missing event_name parameter) Customer not found ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.check_entitlement(
                customer_id, event_name, authorization, view=view, request_options=request_options
            ),
        )

    async def create_customer(
        self,
        authorization: str,
        *,
        body: CreateCustomerRequest | CreateCustomerRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Customer1:
        """Creates a new customer for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_customer(authorization, body=body, request_options=request_options)
        )

    async def create_customer_alias(
        self,
        id_: str,
        authorization: str,
        *,
        body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerAlias:
        """Create an alternate external identifier for a customer by Paid display ID.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_customer_alias(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def create_customer_alias_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerAlias:
        """Create an alternate external identifier for a customer by external ID.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_customer_alias_by_external_id(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    async def create_payment_method(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CustomersExternalPaymentMethodsRequest | CustomersExternalPaymentMethodsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentMethod:
        """Creates a new payment method for a customer using a Stripe confirmation token.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment method created successfully

        Raises:
            ApiError: Bad request - Missing confirmation token or invalid request Forbidden - Invalid or missing API key
                Customer not found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_payment_method(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    async def create3(
        self,
        authorization: str,
        *,
        body: CustomerCreate | CustomerCreateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Customer:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response - customer already exists with this externalId

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create3(authorization, body=body, request_options=request_options))

    async def delete_by_external_id3(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_by_external_id3(
                external_id, authorization, request_options=request_options
            ),
        )

    async def delete_customer_alias(
        self, id_: str, alias: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Remove an alternate external identifier from a customer by Paid display ID.

        Args:
            id_: Paid customer display id
            alias: Customer alias value.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_customer_alias(
                id_, alias, authorization, request_options=request_options
            ),
        )

    async def delete_customer_alias_by_external_id(
        self,
        external_id: str,
        alias: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Remove an alternate external identifier from a customer by external ID.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            alias: Customer alias value.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_customer_alias_by_external_id(
                external_id, alias, authorization, request_options=request_options
            ),
        )

    async def delete_customer_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Delete a customer by Paid display ID. Use the value returned as ``customer.id``, for example ``cus_abc123``.
        If you have your own customer ID, use ``DELETE /api/v2/customers/external/{externalId}``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_customer_by_id(id_, authorization, request_options=request_options)
        )

    async def delete_payment_method(
        self,
        external_id: str,
        payment_method_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a specific payment method from a customer's account.

        Args:
            external_id: The external ID of the customer
            payment_method_id: The ID of the payment method to delete
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment method deleted successfully

        Raises:
            ApiError: Forbidden - Invalid or missing API key Customer or payment method not found ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_payment_method(
                external_id, payment_method_id, authorization, request_options=request_options
            ),
        )

    async def delete3(
        self, customer_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            customer_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete3(customer_id, authorization, request_options=request_options)
        )

    async def get_by_external_id3(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Customer:
        """Send a ``GET`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_by_external_id3(
                external_id, authorization, request_options=request_options
            ),
        )

    async def get_costs_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CostTracesResponse:
        """Send a ``GET`` request.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            limit: Maximum number of traces to return (1-1000)
            offset: Number of traces to skip for pagination
            start_time: Filter traces starting from this time (ISO 8601 format)
            end_time: Filter traces up to this time (ISO 8601 format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Bad request - Invalid query parameters Forbidden - Invalid or missing API key Customer not found
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_costs_by_external_id(
                external_id,
                authorization,
                limit=limit,
                offset=offset,
                start_time=start_time,
                end_time=end_time,
                request_options=request_options,
            ),
        )

    async def get_customer_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Customer1:
        """Get a customer by Paid display ID. Use the value returned as ``customer.id``, for example ``cus_abc123``. If
        you have your own customer ID, use ``GET /api/v2/customers/external/{externalId}``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_customer_by_id(id_, authorization, request_options=request_options)
        )

    async def get_customer_credit_balances(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CreditBalanceListResponse:
        """Get current customer credit balances grouped by currency for a Paid customer display ID. Use the value
        returned as ``customer.id``, for example ``cus_abc123``. If you have your own customer ID, use
        ``/api/v2/customers/external/{externalId}/credits/balances``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_customer_credit_balances(
                id_, authorization, request_options=request_options
            ),
        )

    async def get_customer_credit_balances_by_external_id(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CreditBalanceListResponse:
        """Get current customer credit balances grouped by currency, looked up by external ID

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_customer_credit_balances_by_external_id(
                external_id, authorization, request_options=request_options
            ),
        )

    async def get_customer_state_by_external_id(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomerState:
        """Primary integration endpoint for agents and programmatic clients using their own customer IDs. Use the value
        you stored on ``customer.externalId``, for example ``customer_123``.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_customer_state_by_external_id(
                external_id, authorization, request_options=request_options
            ),
        )

    async def get_customer_state_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomerState:
        """Get the current customer state by Paid display ID

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_customer_state_by_id(id_, authorization, request_options=request_options)
        )

    async def get_entitlements(
        self, customer_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[EntitlementUsage]:
        """Send a ``GET`` request.

        Args:
            customer_id: The customer ID
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Forbidden ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_entitlements(customer_id, authorization, request_options=request_options)
        )

    async def get_usage_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UsageSummariesResponse:
        """Send a ``GET`` request.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            limit: Maximum number of usage summaries to return (1-1000)
            offset: Number of usage summaries to skip for pagination
            start_time: Filter usage summaries starting from this time (ISO 8601 format). Returns summaries that overlap
                with the time range.
            end_time: Filter usage summaries up to this time (ISO 8601 format). Returns summaries that overlap with the
                time range.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Bad request - Invalid query parameters Forbidden - Invalid or missing API key Customer not found
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_usage_by_external_id(
                external_id,
                authorization,
                limit=limit,
                offset=offset,
                start_time=start_time,
                end_time=end_time,
                request_options=request_options,
            ),
        )

    async def get3(
        self, customer_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Customer:
        """Send a ``GET`` request.

        Args:
            customer_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get3(customer_id, authorization, request_options=request_options))

    async def grant_customer_credits(
        self,
        id_: str,
        authorization: str,
        *,
        body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GrantCustomerCreditsResponse:
        """Immediately grant credits to a customer using an active credit currency key.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.grant_customer_credits(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def grant_customer_credits_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GrantCustomerCreditsResponse:
        """Immediately grant credits to a customer looked up by external ID using an active credit currency key.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.grant_customer_credits_by_external_id(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    async def list_customer_aliases(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerAliasListResponse:
        """List alternate external identifiers that resolve to a customer by Paid display ID.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_customer_aliases(
                id_, authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def list_customer_aliases_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerAliasListResponse:
        """List alternate external identifiers that resolve to a customer by external ID.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_customer_aliases_by_external_id(
                external_id, authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def list_customers(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        name: str | None = None,
        status: CustomersGetParametersStatusOrStr | None = None,
        creation_state: CustomersGetParametersCreationStateOrStr | None = None,
        created_at_from: str | None = None,
        created_at_to: str | None = None,
        external_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerListResponse:
        """Get a list of customers for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            name: Search by customer name (case-insensitive, matches anywhere in the name).
            status: Filter by customer status. churned: customers marked as churned. active: everyone else.
            creation_state: Filter by creation state: draft or active.
            created_at_from: Only customers created on or after this date. Accepts an ISO 8601 date or date-time.
                Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset
                are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            created_at_to: Only customers created on or before this date. Accepts an ISO 8601 date or date-time.
                Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset
                are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            external_id: Filter by your external customer ID (exact match).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_customers(
                authorization,
                limit=limit,
                offset=offset,
                name=name,
                status=status,
                creation_state=creation_state,
                created_at_from=created_at_from,
                created_at_to=created_at_to,
                external_id=external_id,
                request_options=request_options,
            ),
        )

    async def list_payment_methods(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[PaymentMethod]:
        """Retrieves all payment methods associated with a customer identified by their external ID.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Forbidden - Invalid or missing API key Customer not found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_payment_methods(
                external_id, authorization, request_options=request_options
            ),
        )

    async def list3(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Customer]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list3(authorization, request_options=request_options))

    async def update_by_external_id2(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CustomerUpdate | CustomerUpdateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Customer:
        """Send a ``PUT`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_by_external_id2(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    async def update_customer_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateCustomerRequest | UpdateCustomerRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Customer1:
        """Update a customer by Paid display ID. Use the value returned as ``customer.id``, for example ``cus_abc123``.
        If you have your own customer ID, use ``PUT /api/v2/customers/external/{externalId}``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_customer_by_id(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def update2(
        self,
        customer_id: str,
        authorization: str,
        *,
        body: CustomerUpdate | CustomerUpdateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Customer:
        """Send a ``PUT`` request.

        Args:
            customer_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer updated successfully

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update2(
                customer_id, authorization, body=body, request_options=request_options
            ),
        )

    async def upsert_customer_user_by_external_id(
        self,
        customer_external_id: str,
        user_external_id: str,
        authorization: str,
        *,
        body: UpsertCustomerUserRequest | UpsertCustomerUserRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerUser:
        """Create or update a customer user using customer and user external IDs

        Args:
            customer_external_id: Value sent with the request.
            user_external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.upsert_customer_user_by_external_id(
                customer_external_id, user_external_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCustomersWithRawResponse:
        return self._with_raw_response


class CustomersWithRawResponse(BaseRawResponse[RawClient, Server]):
    def check_entitlement(
        self,
        customer_id: str,
        event_name: str,
        authorization: str,
        *,
        view: (
            CustomersCustomerIdEntitlementGetParametersViewOrStr | None
        ) = CustomersCustomerIdEntitlementGetParametersView.ACTIVE_ONLY,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomersCheckEntitlementResponse200, CheckEntitlementErrorBody]:
        """Send a ``GET`` request.

        Args:
            customer_id: The customer ID
            event_name: The name of the usage event to check entitlement for
            authorization: Bearer authentication
            view: Filter view - 'all' returns all entitlements regardless of status, 'active_only' returns only
                currently active entitlements with available credits
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{customerId}/entitlement"),
            path_params=[param[str]("customerId", customer_id)],
            query_params=[
                param[str]("event_name", event_name),
                param[CustomersCustomerIdEntitlementGetParametersViewOrStr | None]("view", view),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomersCheckEntitlementResponse200],
            error_mapper=check_entitlement_error_mapper,
            request_options=request_options,
        )

    def create_customer(
        self,
        authorization: str,
        *,
        body: CreateCustomerRequest | CreateCustomerRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer1, CreateCustomerErrorBody]:
        """Creates a new customer for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomerRequest | CreateCustomerRequestDict | None](body),
            decoder=json_decoder[Customer1],
            error_mapper=create_customer_error_mapper,
            request_options=request_options,
        )

    def create_customer_alias(
        self,
        id_: str,
        authorization: str,
        *,
        body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerAlias, CreateCustomerAliasErrorBody]:
        """Create an alternate external identifier for a customer by Paid display ID.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/{id}/aliases"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None](body),
            decoder=json_decoder[CustomerAlias],
            error_mapper=create_customer_alias_error_mapper,
            request_options=request_options,
        )

    def create_customer_alias_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerAlias, CreateCustomerAliasByExternalIdErrorBody]:
        """Create an alternate external identifier for a customer by external ID.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/external/{externalId}/aliases"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None](body),
            decoder=json_decoder[CustomerAlias],
            error_mapper=create_customer_alias_by_external_id_error_mapper,
            request_options=request_options,
        )

    def create_payment_method(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CustomersExternalPaymentMethodsRequest | CustomersExternalPaymentMethodsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentMethod, CreatePaymentMethodErrorBody]:
        """Creates a new payment method for a customer using a Stripe confirmation token.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/external/{externalId}/payment-methods"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomersExternalPaymentMethodsRequest | CustomersExternalPaymentMethodsRequestDict | None](
                body
            ),
            decoder=json_decoder[PaymentMethod],
            error_mapper=create_payment_method_error_mapper,
            request_options=request_options,
        )

    def create3(
        self,
        authorization: str,
        *,
        body: CustomerCreate | CustomerCreateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer, RawError]:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerCreate | CustomerCreateDict | None](body),
            decoder=json_decoder[Customer],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_by_external_id3(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/customers/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_customer_alias(
        self, id_: str, alias: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteCustomerAliasErrorBody]:
        """Remove an alternate external identifier from a customer by Paid display ID.

        Args:
            id_: Paid customer display id
            alias: Customer alias value.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/customers/{id}/aliases/{alias}"),
            path_params=[param[str]("id", id_), param[str]("alias", alias)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=delete_customer_alias_error_mapper,
            request_options=request_options,
        )

    def delete_customer_alias_by_external_id(
        self, external_id: str, alias: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteCustomerAliasByExternalIdErrorBody]:
        """Remove an alternate external identifier from a customer by external ID.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            alias: Customer alias value.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/customers/external/{externalId}/aliases/{alias}"),
            path_params=[param[str]("externalId", external_id), param[str]("alias", alias)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=delete_customer_alias_by_external_id_error_mapper,
            request_options=request_options,
        )

    def delete_customer_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteCustomerByIdErrorBody]:
        """Delete a customer by Paid display ID. Use the value returned as ``customer.id``, for example ``cus_abc123``.
        If you have your own customer ID, use ``DELETE /api/v2/customers/external/{externalId}``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/customers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=delete_customer_by_id_error_mapper,
            request_options=request_options,
        )

    def delete_payment_method(
        self,
        external_id: str,
        payment_method_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeletePaymentMethodErrorBody]:
        """Deletes a specific payment method from a customer's account.

        Args:
            external_id: The external ID of the customer
            payment_method_id: The ID of the payment method to delete
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/customers/external/{externalId}/payment-methods/{paymentMethodId}"),
            path_params=[param[str]("externalId", external_id), param[str]("paymentMethodId", payment_method_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=delete_payment_method_error_mapper,
            request_options=request_options,
        )

    def delete3(
        self, customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            customer_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_by_external_id3(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Customer, RawError]:
        """Send a ``GET`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Customer],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_costs_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CostTracesResponse, GetCostsByExternalIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            limit: Maximum number of traces to return (1-1000)
            offset: Number of traces to skip for pagination
            start_time: Filter traces starting from this time (ISO 8601 format)
            end_time: Filter traces up to this time (ISO 8601 format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}/costs"),
            path_params=[param[str]("externalId", external_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[RFC3339DateTime | None]("startTime", start_time),
                param[RFC3339DateTime | None]("endTime", end_time),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CostTracesResponse],
            error_mapper=get_costs_by_external_id_error_mapper,
            request_options=request_options,
        )

    def get_customer_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Customer1, GetCustomerByIdErrorBody]:
        """Get a customer by Paid display ID. Use the value returned as ``customer.id``, for example ``cus_abc123``. If
        you have your own customer ID, use ``GET /api/v2/customers/external/{externalId}``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Customer1],
            error_mapper=get_customer_by_id_error_mapper,
            request_options=request_options,
        )

    def get_customer_credit_balances(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CreditBalanceListResponse, GetCustomerCreditBalancesErrorBody]:
        """Get current customer credit balances grouped by currency for a Paid customer display ID. Use the value
        returned as ``customer.id``, for example ``cus_abc123``. If you have your own customer ID, use
        ``/api/v2/customers/external/{externalId}/credits/balances``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{id}/credits/balances"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CreditBalanceListResponse],
            error_mapper=get_customer_credit_balances_error_mapper,
            request_options=request_options,
        )

    def get_customer_credit_balances_by_external_id(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CreditBalanceListResponse, GetCustomerCreditBalancesByExternalIdErrorBody]:
        """Get current customer credit balances grouped by currency, looked up by external ID

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}/credits/balances"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CreditBalanceListResponse],
            error_mapper=get_customer_credit_balances_by_external_id_error_mapper,
            request_options=request_options,
        )

    def get_customer_state_by_external_id(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomerState, GetCustomerStateByExternalIdErrorBody]:
        """Primary integration endpoint for agents and programmatic clients using their own customer IDs. Use the value
        you stored on ``customer.externalId``, for example ``customer_123``.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}/state"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomerState],
            error_mapper=get_customer_state_by_external_id_error_mapper,
            request_options=request_options,
        )

    def get_customer_state_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomerState, GetCustomerStateByIdErrorBody]:
        """Get the current customer state by Paid display ID

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{id}/state"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomerState],
            error_mapper=get_customer_state_by_id_error_mapper,
            request_options=request_options,
        )

    def get_entitlements(
        self, customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[EntitlementUsage], GetEntitlementsErrorBody]:
        """Send a ``GET`` request.

        Args:
            customer_id: The customer ID
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{customerId}/credit-bundles"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[list[EntitlementUsage]],
            error_mapper=get_entitlements_error_mapper,
            request_options=request_options,
        )

    def get_usage_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UsageSummariesResponse, GetUsageByExternalIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            limit: Maximum number of usage summaries to return (1-1000)
            offset: Number of usage summaries to skip for pagination
            start_time: Filter usage summaries starting from this time (ISO 8601 format). Returns summaries that overlap
                with the time range.
            end_time: Filter usage summaries up to this time (ISO 8601 format). Returns summaries that overlap with the
                time range.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}/usage"),
            path_params=[param[str]("externalId", external_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[RFC3339DateTime | None]("startTime", start_time),
                param[RFC3339DateTime | None]("endTime", end_time),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[UsageSummariesResponse],
            error_mapper=get_usage_by_external_id_error_mapper,
            request_options=request_options,
        )

    def get3(
        self, customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Customer, RawError]:
        """Send a ``GET`` request.

        Args:
            customer_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Customer],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def grant_customer_credits(
        self,
        id_: str,
        authorization: str,
        *,
        body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GrantCustomerCreditsResponse, GrantCustomerCreditsErrorBody]:
        """Immediately grant credits to a customer using an active credit currency key.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/{id}/credits/grants"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreditGrantCreateRequest | CreditGrantCreateRequestDict | None](body),
            decoder=json_decoder[GrantCustomerCreditsResponse],
            error_mapper=grant_customer_credits_error_mapper,
            request_options=request_options,
        )

    def grant_customer_credits_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GrantCustomerCreditsResponse, GrantCustomerCreditsByExternalIdErrorBody]:
        """Immediately grant credits to a customer looked up by external ID using an active credit currency key.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/external/{externalId}/credits/grants"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreditGrantCreateRequest | CreditGrantCreateRequestDict | None](body),
            decoder=json_decoder[GrantCustomerCreditsResponse],
            error_mapper=grant_customer_credits_by_external_id_error_mapper,
            request_options=request_options,
        )

    def list_customer_aliases(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerAliasListResponse, ListCustomerAliasesErrorBody]:
        """List alternate external identifiers that resolve to a customer by Paid display ID.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{id}/aliases"),
            path_params=[param[str]("id", id_)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomerAliasListResponse],
            error_mapper=list_customer_aliases_error_mapper,
            request_options=request_options,
        )

    def list_customer_aliases_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerAliasListResponse, ListCustomerAliasesByExternalIdErrorBody]:
        """List alternate external identifiers that resolve to a customer by external ID.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}/aliases"),
            path_params=[param[str]("externalId", external_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomerAliasListResponse],
            error_mapper=list_customer_aliases_by_external_id_error_mapper,
            request_options=request_options,
        )

    def list_customers(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        name: str | None = None,
        status: CustomersGetParametersStatusOrStr | None = None,
        creation_state: CustomersGetParametersCreationStateOrStr | None = None,
        created_at_from: str | None = None,
        created_at_to: str | None = None,
        external_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerListResponse, ListCustomersErrorBody]:
        """Get a list of customers for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            name: Search by customer name (case-insensitive, matches anywhere in the name).
            status: Filter by customer status. churned: customers marked as churned. active: everyone else.
            creation_state: Filter by creation state: draft or active.
            created_at_from: Only customers created on or after this date. Accepts an ISO 8601 date or date-time.
                Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset
                are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            created_at_to: Only customers created on or before this date. Accepts an ISO 8601 date or date-time.
                Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset
                are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            external_id: Filter by your external customer ID (exact match).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("name", name),
                param[CustomersGetParametersStatusOrStr | None]("status", status),
                param[CustomersGetParametersCreationStateOrStr | None]("creationState", creation_state),
                param[str | None]("createdAtFrom", created_at_from),
                param[str | None]("createdAtTo", created_at_to),
                param[str | None]("externalId", external_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomerListResponse],
            error_mapper=list_customers_error_mapper,
            request_options=request_options,
        )

    def list_payment_methods(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[PaymentMethod], ListPaymentMethodsErrorBody]:
        """Retrieves all payment methods associated with a customer identified by their external ID.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}/payment-methods"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[list[PaymentMethod]],
            error_mapper=list_payment_methods_error_mapper,
            request_options=request_options,
        )

    def list3(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Customer], RawError]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[list[Customer]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_by_external_id2(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CustomerUpdate | CustomerUpdateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer, RawError]:
        """Send a ``PUT`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/customers/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerUpdate | CustomerUpdateDict | None](body),
            decoder=json_decoder[Customer],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_customer_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateCustomerRequest | UpdateCustomerRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer1, UpdateCustomerByIdErrorBody]:
        """Update a customer by Paid display ID. Use the value returned as ``customer.id``, for example ``cus_abc123``.
        If you have your own customer ID, use ``PUT /api/v2/customers/external/{externalId}``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/customers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomerRequest | UpdateCustomerRequestDict | None](body),
            decoder=json_decoder[Customer1],
            error_mapper=update_customer_by_id_error_mapper,
            request_options=request_options,
        )

    def update2(
        self,
        customer_id: str,
        authorization: str,
        *,
        body: CustomerUpdate | CustomerUpdateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer, RawError]:
        """Send a ``PUT`` request.

        Args:
            customer_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerUpdate | CustomerUpdateDict | None](body),
            decoder=json_decoder[Customer],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def upsert_customer_user_by_external_id(
        self,
        customer_external_id: str,
        user_external_id: str,
        authorization: str,
        *,
        body: UpsertCustomerUserRequest | UpsertCustomerUserRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerUser, UpsertCustomerUserByExternalIdErrorBody]:
        """Create or update a customer user using customer and user external IDs

        Args:
            customer_external_id: Value sent with the request.
            user_external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/customers/{customerExternalId}/users/{userExternalId}"),
            path_params=[
                param[str]("customerExternalId", customer_external_id), param[str]("userExternalId", user_external_id)
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpsertCustomerUserRequest | UpsertCustomerUserRequestDict | None](body),
            decoder=json_decoder[CustomerUser],
            error_mapper=upsert_customer_user_by_external_id_error_mapper,
            request_options=request_options,
        )


class AsyncCustomersWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def check_entitlement(
        self,
        customer_id: str,
        event_name: str,
        authorization: str,
        *,
        view: (
            CustomersCustomerIdEntitlementGetParametersViewOrStr | None
        ) = CustomersCustomerIdEntitlementGetParametersView.ACTIVE_ONLY,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomersCheckEntitlementResponse200, CheckEntitlementErrorBody]:
        """Send a ``GET`` request.

        Args:
            customer_id: The customer ID
            event_name: The name of the usage event to check entitlement for
            authorization: Bearer authentication
            view: Filter view - 'all' returns all entitlements regardless of status, 'active_only' returns only
                currently active entitlements with available credits
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{customerId}/entitlement"),
            path_params=[param[str]("customerId", customer_id)],
            query_params=[
                param[str]("event_name", event_name),
                param[CustomersCustomerIdEntitlementGetParametersViewOrStr | None]("view", view),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomersCheckEntitlementResponse200],
            error_mapper=check_entitlement_error_mapper,
            request_options=request_options,
        )

    async def create_customer(
        self,
        authorization: str,
        *,
        body: CreateCustomerRequest | CreateCustomerRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer1, CreateCustomerErrorBody]:
        """Creates a new customer for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomerRequest | CreateCustomerRequestDict | None](body),
            decoder=async_json_decoder[Customer1],
            error_mapper=create_customer_error_mapper,
            request_options=request_options,
        )

    async def create_customer_alias(
        self,
        id_: str,
        authorization: str,
        *,
        body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerAlias, CreateCustomerAliasErrorBody]:
        """Create an alternate external identifier for a customer by Paid display ID.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/{id}/aliases"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None](body),
            decoder=async_json_decoder[CustomerAlias],
            error_mapper=create_customer_alias_error_mapper,
            request_options=request_options,
        )

    async def create_customer_alias_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerAlias, CreateCustomerAliasByExternalIdErrorBody]:
        """Create an alternate external identifier for a customer by external ID.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/external/{externalId}/aliases"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None](body),
            decoder=async_json_decoder[CustomerAlias],
            error_mapper=create_customer_alias_by_external_id_error_mapper,
            request_options=request_options,
        )

    async def create_payment_method(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CustomersExternalPaymentMethodsRequest | CustomersExternalPaymentMethodsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentMethod, CreatePaymentMethodErrorBody]:
        """Creates a new payment method for a customer using a Stripe confirmation token.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/external/{externalId}/payment-methods"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomersExternalPaymentMethodsRequest | CustomersExternalPaymentMethodsRequestDict | None](
                body
            ),
            decoder=async_json_decoder[PaymentMethod],
            error_mapper=create_payment_method_error_mapper,
            request_options=request_options,
        )

    async def create3(
        self,
        authorization: str,
        *,
        body: CustomerCreate | CustomerCreateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer, RawError]:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerCreate | CustomerCreateDict | None](body),
            decoder=async_json_decoder[Customer],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_by_external_id3(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/customers/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_customer_alias(
        self, id_: str, alias: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteCustomerAliasErrorBody]:
        """Remove an alternate external identifier from a customer by Paid display ID.

        Args:
            id_: Paid customer display id
            alias: Customer alias value.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/customers/{id}/aliases/{alias}"),
            path_params=[param[str]("id", id_), param[str]("alias", alias)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=delete_customer_alias_error_mapper,
            request_options=request_options,
        )

    async def delete_customer_alias_by_external_id(
        self,
        external_id: str,
        alias: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteCustomerAliasByExternalIdErrorBody]:
        """Remove an alternate external identifier from a customer by external ID.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            alias: Customer alias value.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/customers/external/{externalId}/aliases/{alias}"),
            path_params=[param[str]("externalId", external_id), param[str]("alias", alias)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=delete_customer_alias_by_external_id_error_mapper,
            request_options=request_options,
        )

    async def delete_customer_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteCustomerByIdErrorBody]:
        """Delete a customer by Paid display ID. Use the value returned as ``customer.id``, for example ``cus_abc123``.
        If you have your own customer ID, use ``DELETE /api/v2/customers/external/{externalId}``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/customers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=delete_customer_by_id_error_mapper,
            request_options=request_options,
        )

    async def delete_payment_method(
        self,
        external_id: str,
        payment_method_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeletePaymentMethodErrorBody]:
        """Deletes a specific payment method from a customer's account.

        Args:
            external_id: The external ID of the customer
            payment_method_id: The ID of the payment method to delete
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/customers/external/{externalId}/payment-methods/{paymentMethodId}"),
            path_params=[param[str]("externalId", external_id), param[str]("paymentMethodId", payment_method_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=delete_payment_method_error_mapper,
            request_options=request_options,
        )

    async def delete3(
        self, customer_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            customer_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_by_external_id3(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Customer, RawError]:
        """Send a ``GET`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Customer],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_costs_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CostTracesResponse, GetCostsByExternalIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            limit: Maximum number of traces to return (1-1000)
            offset: Number of traces to skip for pagination
            start_time: Filter traces starting from this time (ISO 8601 format)
            end_time: Filter traces up to this time (ISO 8601 format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}/costs"),
            path_params=[param[str]("externalId", external_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[RFC3339DateTime | None]("startTime", start_time),
                param[RFC3339DateTime | None]("endTime", end_time),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CostTracesResponse],
            error_mapper=get_costs_by_external_id_error_mapper,
            request_options=request_options,
        )

    async def get_customer_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Customer1, GetCustomerByIdErrorBody]:
        """Get a customer by Paid display ID. Use the value returned as ``customer.id``, for example ``cus_abc123``. If
        you have your own customer ID, use ``GET /api/v2/customers/external/{externalId}``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Customer1],
            error_mapper=get_customer_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_customer_credit_balances(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CreditBalanceListResponse, GetCustomerCreditBalancesErrorBody]:
        """Get current customer credit balances grouped by currency for a Paid customer display ID. Use the value
        returned as ``customer.id``, for example ``cus_abc123``. If you have your own customer ID, use
        ``/api/v2/customers/external/{externalId}/credits/balances``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{id}/credits/balances"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CreditBalanceListResponse],
            error_mapper=get_customer_credit_balances_error_mapper,
            request_options=request_options,
        )

    async def get_customer_credit_balances_by_external_id(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CreditBalanceListResponse, GetCustomerCreditBalancesByExternalIdErrorBody]:
        """Get current customer credit balances grouped by currency, looked up by external ID

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}/credits/balances"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CreditBalanceListResponse],
            error_mapper=get_customer_credit_balances_by_external_id_error_mapper,
            request_options=request_options,
        )

    async def get_customer_state_by_external_id(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomerState, GetCustomerStateByExternalIdErrorBody]:
        """Primary integration endpoint for agents and programmatic clients using their own customer IDs. Use the value
        you stored on ``customer.externalId``, for example ``customer_123``.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}/state"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomerState],
            error_mapper=get_customer_state_by_external_id_error_mapper,
            request_options=request_options,
        )

    async def get_customer_state_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomerState, GetCustomerStateByIdErrorBody]:
        """Get the current customer state by Paid display ID

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{id}/state"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomerState],
            error_mapper=get_customer_state_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_entitlements(
        self, customer_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[EntitlementUsage], GetEntitlementsErrorBody]:
        """Send a ``GET`` request.

        Args:
            customer_id: The customer ID
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{customerId}/credit-bundles"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[list[EntitlementUsage]],
            error_mapper=get_entitlements_error_mapper,
            request_options=request_options,
        )

    async def get_usage_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UsageSummariesResponse, GetUsageByExternalIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            limit: Maximum number of usage summaries to return (1-1000)
            offset: Number of usage summaries to skip for pagination
            start_time: Filter usage summaries starting from this time (ISO 8601 format). Returns summaries that overlap
                with the time range.
            end_time: Filter usage summaries up to this time (ISO 8601 format). Returns summaries that overlap with the
                time range.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}/usage"),
            path_params=[param[str]("externalId", external_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[RFC3339DateTime | None]("startTime", start_time),
                param[RFC3339DateTime | None]("endTime", end_time),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[UsageSummariesResponse],
            error_mapper=get_usage_by_external_id_error_mapper,
            request_options=request_options,
        )

    async def get3(
        self, customer_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Customer, RawError]:
        """Send a ``GET`` request.

        Args:
            customer_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Customer],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def grant_customer_credits(
        self,
        id_: str,
        authorization: str,
        *,
        body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GrantCustomerCreditsResponse, GrantCustomerCreditsErrorBody]:
        """Immediately grant credits to a customer using an active credit currency key.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/{id}/credits/grants"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreditGrantCreateRequest | CreditGrantCreateRequestDict | None](body),
            decoder=async_json_decoder[GrantCustomerCreditsResponse],
            error_mapper=grant_customer_credits_error_mapper,
            request_options=request_options,
        )

    async def grant_customer_credits_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GrantCustomerCreditsResponse, GrantCustomerCreditsByExternalIdErrorBody]:
        """Immediately grant credits to a customer looked up by external ID using an active credit currency key.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/external/{externalId}/credits/grants"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreditGrantCreateRequest | CreditGrantCreateRequestDict | None](body),
            decoder=async_json_decoder[GrantCustomerCreditsResponse],
            error_mapper=grant_customer_credits_by_external_id_error_mapper,
            request_options=request_options,
        )

    async def list_customer_aliases(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerAliasListResponse, ListCustomerAliasesErrorBody]:
        """List alternate external identifiers that resolve to a customer by Paid display ID.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{id}/aliases"),
            path_params=[param[str]("id", id_)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomerAliasListResponse],
            error_mapper=list_customer_aliases_error_mapper,
            request_options=request_options,
        )

    async def list_customer_aliases_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerAliasListResponse, ListCustomerAliasesByExternalIdErrorBody]:
        """List alternate external identifiers that resolve to a customer by external ID.

        Args:
            external_id: Customer ID from the integrator's system, stored on Paid as ``externalId``.
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}/aliases"),
            path_params=[param[str]("externalId", external_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomerAliasListResponse],
            error_mapper=list_customer_aliases_by_external_id_error_mapper,
            request_options=request_options,
        )

    async def list_customers(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        name: str | None = None,
        status: CustomersGetParametersStatusOrStr | None = None,
        creation_state: CustomersGetParametersCreationStateOrStr | None = None,
        created_at_from: str | None = None,
        created_at_to: str | None = None,
        external_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerListResponse, ListCustomersErrorBody]:
        """Get a list of customers for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            name: Search by customer name (case-insensitive, matches anywhere in the name).
            status: Filter by customer status. churned: customers marked as churned. active: everyone else.
            creation_state: Filter by creation state: draft or active.
            created_at_from: Only customers created on or after this date. Accepts an ISO 8601 date or date-time.
                Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset
                are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            created_at_to: Only customers created on or before this date. Accepts an ISO 8601 date or date-time.
                Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset
                are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            external_id: Filter by your external customer ID (exact match).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("name", name),
                param[CustomersGetParametersStatusOrStr | None]("status", status),
                param[CustomersGetParametersCreationStateOrStr | None]("creationState", creation_state),
                param[str | None]("createdAtFrom", created_at_from),
                param[str | None]("createdAtTo", created_at_to),
                param[str | None]("externalId", external_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomerListResponse],
            error_mapper=list_customers_error_mapper,
            request_options=request_options,
        )

    async def list_payment_methods(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[PaymentMethod], ListPaymentMethodsErrorBody]:
        """Retrieves all payment methods associated with a customer identified by their external ID.

        Args:
            external_id: The external ID of the customer
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/external/{externalId}/payment-methods"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[list[PaymentMethod]],
            error_mapper=list_payment_methods_error_mapper,
            request_options=request_options,
        )

    async def list3(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Customer], RawError]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[list[Customer]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_by_external_id2(
        self,
        external_id: str,
        authorization: str,
        *,
        body: CustomerUpdate | CustomerUpdateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer, RawError]:
        """Send a ``PUT`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/customers/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerUpdate | CustomerUpdateDict | None](body),
            decoder=async_json_decoder[Customer],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_customer_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateCustomerRequest | UpdateCustomerRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer1, UpdateCustomerByIdErrorBody]:
        """Update a customer by Paid display ID. Use the value returned as ``customer.id``, for example ``cus_abc123``.
        If you have your own customer ID, use ``PUT /api/v2/customers/external/{externalId}``.

        Args:
            id_: Paid customer display id
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/customers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomerRequest | UpdateCustomerRequestDict | None](body),
            decoder=async_json_decoder[Customer1],
            error_mapper=update_customer_by_id_error_mapper,
            request_options=request_options,
        )

    async def update2(
        self,
        customer_id: str,
        authorization: str,
        *,
        body: CustomerUpdate | CustomerUpdateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer, RawError]:
        """Send a ``PUT`` request.

        Args:
            customer_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerUpdate | CustomerUpdateDict | None](body),
            decoder=async_json_decoder[Customer],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def upsert_customer_user_by_external_id(
        self,
        customer_external_id: str,
        user_external_id: str,
        authorization: str,
        *,
        body: UpsertCustomerUserRequest | UpsertCustomerUserRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerUser, UpsertCustomerUserByExternalIdErrorBody]:
        """Create or update a customer user using customer and user external IDs

        Args:
            customer_external_id: Value sent with the request.
            user_external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/customers/{customerExternalId}/users/{userExternalId}"),
            path_params=[
                param[str]("customerExternalId", customer_external_id), param[str]("userExternalId", user_external_id)
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpsertCustomerUserRequest | UpsertCustomerUserRequestDict | None](body),
            decoder=async_json_decoder[CustomerUser],
            error_mapper=upsert_customer_user_by_external_id_error_mapper,
            request_options=request_options,
        )
