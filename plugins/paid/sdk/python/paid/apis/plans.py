from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_plan_error import CreatePlanErrorBody, create_plan_error_mapper
from ..errors.get_by_id_error import GetByIdErrorBody, get_by_id_error_mapper
from ..errors.get_current_error import GetCurrentErrorBody, get_current_error_mapper
from ..errors.get_group_by_id_error import GetGroupByIdErrorBody, get_group_by_id_error_mapper
from ..errors.get_group_plans_error import GetGroupPlansErrorBody, get_group_plans_error_mapper
from ..errors.get_plan_by_external_id_error import GetPlanByExternalIdErrorBody, get_plan_by_external_id_error_mapper
from ..errors.get_plan_by_id_error import GetPlanByIdErrorBody, get_plan_by_id_error_mapper
from ..errors.get_usage_error import GetUsageErrorBody, get_usage_error_mapper
from ..errors.list_plans_error import ListPlansErrorBody, list_plans_error_mapper
from ..errors.subscribe_error import SubscribeErrorBody, subscribe_error_mapper
from ..errors.unsubscribe_error import UnsubscribeErrorBody, unsubscribe_error_mapper
from ..errors.update_plan_by_external_id_error import (
    UpdatePlanByExternalIdErrorBody,
    update_plan_by_external_id_error_mapper,
)
from ..errors.update_plan_by_id_error import UpdatePlanByIdErrorBody, update_plan_by_id_error_mapper
from ..errors.update_plan_upgrade_path_error import (
    UpdatePlanUpgradePathErrorBody,
    update_plan_upgrade_path_error_mapper,
)
from ..errors.upgrade_error import UpgradeErrorBody, upgrade_error_mapper
from ..models.cancel_renewal_response import CancelRenewalResponse
from ..models.create_plan_request import CreatePlanRequest, CreatePlanRequestDict
from ..models.order import Order
from ..models.plan import Plan
from ..models.plan1 import Plan1
from ..models.plan_group import PlanGroup
from ..models.plan_list_response import PlanListResponse
from ..models.plan_upgrade_path_response import PlanUpgradePathResponse
from ..models.plan_with_features import PlanWithFeatures
from ..models.plans_get_current_response200 import PlansGetCurrentResponse200
from ..models.proration_upgrade_response import ProrationUpgradeResponse
from ..models.update_plan_request import UpdatePlanRequest, UpdatePlanRequestDict
from ..models.update_plan_upgrade_path_request import UpdatePlanUpgradePathRequest, UpdatePlanUpgradePathRequestDict
from ..models.usage_summaries_response import UsageSummariesResponse
from ..server.server import Server


class Plans:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = PlansWithRawResponse(client, server)

    def create_plan(
        self,
        authorization: str,
        *,
        body: CreatePlanRequest | CreatePlanRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Plan1:
        """Creates a new plan for a product.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_plan(authorization, body=body, request_options=request_options))

    def get_by_id(
        self, plan_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Plan:
        """Send a ``GET`` request.

        Args:
            plan_id: The ID of the plan
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Forbidden - Invalid or missing API key Plan not found ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_by_id(plan_id, authorization, request_options=request_options))

    def get_current(
        self, customer_external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PlansGetCurrentResponse200:
        """Retrieves the currently active plan subscription for a customer by their external ID. Returns the plan
        details and subscription information.

        Args:
            customer_external_id: The external ID of the customer
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Bad request - Missing customerExternalId parameter Forbidden - Invalid or missing API key Customer
                not found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_current(customer_external_id, authorization, request_options=request_options)
        )

    def get_group_by_id(
        self, plan_group_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PlanGroup:
        """Send a ``GET`` request.

        Args:
            plan_group_id: The ID of the plan group
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Forbidden - Invalid or missing API key Plan group not found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_by_id(plan_group_id, authorization, request_options=request_options)
        )

    def get_group_plans(
        self, plan_group_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[PlanWithFeatures]:
        """Retrieves all plans in a plan group with their features (product-attribute pairs)

        Args:
            plan_group_id: The ID of the plan group
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Forbidden - Invalid or missing API key Plan group not found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_plans(plan_group_id, authorization, request_options=request_options)
        )

    def get_plan_by_external_id(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Plan1:
        """Get a plan by your external plan ID.

        Args:
            external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_plan_by_external_id(external_id, authorization, request_options=request_options)
        )

    def get_plan_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Plan1:
        """Get a plan by Paid plan ID.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_plan_by_id(id_, authorization, request_options=request_options))

    def get_usage(
        self,
        plan_id: UUID,
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
            plan_id: The ID of the plan
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
            ApiError: Bad request - Invalid query parameters Forbidden - Invalid or missing API key Plan or customer not
                found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_usage(
                plan_id,
                external_id,
                authorization,
                limit=limit,
                offset=offset,
                start_time=start_time,
                end_time=end_time,
                request_options=request_options,
            ),
        )

    def list_plans(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        product_id: str | None = None,
        external_product_id: str | None = None,
        include_archived: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PlanListResponse:
        """Returns plans for your organization, including archived plans by default, optionally filtered to a product.

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            product_id: Value sent with the request.
            external_product_id: Value sent with the request.
            include_archived: Whether to include archived plans in the response. Defaults to true.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_plans(
                authorization,
                limit=limit,
                offset=offset,
                product_id=product_id,
                external_product_id=external_product_id,
                include_archived=include_archived,
                request_options=request_options,
            ),
        )

    def subscribe(
        self,
        plan_id: UUID,
        customer_external_id: str,
        currency: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Order:
        """Creates a new order for a customer subscribing to a plan. The order will be created with the plan's products
        and pricing attributes.

        Args:
            plan_id: The ID of the plan
            customer_external_id: The external ID of the customer
            currency: The currency code for the order (e.g., "USD", "EUR")
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer subscribed to plan successfully

        Raises:
            ApiError: Bad request - Missing required parameters or invalid plan type Forbidden - Invalid or missing API
                key Plan or customer not found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.subscribe(
                plan_id, customer_external_id, currency, authorization, request_options=request_options
            ),
        )

    def unsubscribe(
        self,
        plan_id: UUID,
        customer_external_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CancelRenewalResponse:
        """Cancels the renewal of an active order for a customer's plan subscription. The order will remain active until
        the cancellation date.

        Args:
            plan_id: The ID of the plan
            customer_external_id: The external ID of the customer
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer unsubscribed from plan successfully

        Raises:
            ApiError: Bad request - Missing required parameters Forbidden - Invalid or missing API key Plan, customer,
                or order not found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.unsubscribe(
                plan_id, customer_external_id, authorization, request_options=request_options
            ),
        )

    def update_plan_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: UpdatePlanRequest | UpdatePlanRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Plan1:
        """Update a plan by your external plan ID. If attributes are provided, they replace the plan's existing
        attributes. Set status to archive or restore the plan.

        Args:
            external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_plan_by_external_id(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    def update_plan_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdatePlanRequest | UpdatePlanRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Plan1:
        """Update a plan by Paid plan ID. If attributes are provided, they replace the plan's existing attributes. Set
        status to archive or restore the plan.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_plan_by_id(id_, authorization, body=body, request_options=request_options)
        )

    def update_plan_upgrade_path(
        self,
        authorization: str,
        *,
        body: UpdatePlanUpgradePathRequest | UpdatePlanUpgradePathRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PlanUpgradePathResponse:
        """Updates upgrade path ordering for plans within a product, grouped by billing frequency.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_plan_upgrade_path(authorization, body=body, request_options=request_options)
        )

    def upgrade(
        self,
        customer_external_id: str,
        old_plan_id: UUID,
        new_plan_id: UUID,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProrationUpgradeResponse:
        """Upgrades a customer from one plan to another with automatic proration. Credits are applied for the unused
        portion of the current billing period, and the order is updated with the new plan's pricing.

        Args:
            customer_external_id: The external ID of the customer
            old_plan_id: The ID of the current plan
            new_plan_id: The ID of the plan to upgrade to
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plan upgrade completed successfully

        Raises:
            ApiError: Bad request - Missing required parameters, no matching attributes, or invalid plan configuration
                Forbidden - Invalid or missing API key Plan, customer, or order not found ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.upgrade(
                customer_external_id, old_plan_id, new_plan_id, authorization, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PlansWithRawResponse:
        return self._with_raw_response


class AsyncPlans:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncPlansWithRawResponse(client, server)

    async def create_plan(
        self,
        authorization: str,
        *,
        body: CreatePlanRequest | CreatePlanRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Plan1:
        """Creates a new plan for a product.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_plan(authorization, body=body, request_options=request_options)
        )

    async def get_by_id(
        self, plan_id: UUID, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Plan:
        """Send a ``GET`` request.

        Args:
            plan_id: The ID of the plan
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Forbidden - Invalid or missing API key Plan not found ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_by_id(plan_id, authorization, request_options=request_options))

    async def get_current(
        self, customer_external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PlansGetCurrentResponse200:
        """Retrieves the currently active plan subscription for a customer by their external ID. Returns the plan
        details and subscription information.

        Args:
            customer_external_id: The external ID of the customer
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Bad request - Missing customerExternalId parameter Forbidden - Invalid or missing API key Customer
                not found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_current(
                customer_external_id, authorization, request_options=request_options
            ),
        )

    async def get_group_by_id(
        self, plan_group_id: UUID, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PlanGroup:
        """Send a ``GET`` request.

        Args:
            plan_group_id: The ID of the plan group
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Forbidden - Invalid or missing API key Plan group not found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_by_id(plan_group_id, authorization, request_options=request_options)
        )

    async def get_group_plans(
        self, plan_group_id: UUID, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[PlanWithFeatures]:
        """Retrieves all plans in a plan group with their features (product-attribute pairs)

        Args:
            plan_group_id: The ID of the plan group
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Forbidden - Invalid or missing API key Plan group not found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_plans(plan_group_id, authorization, request_options=request_options)
        )

    async def get_plan_by_external_id(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Plan1:
        """Get a plan by your external plan ID.

        Args:
            external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_plan_by_external_id(
                external_id, authorization, request_options=request_options
            ),
        )

    async def get_plan_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Plan1:
        """Get a plan by Paid plan ID.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_plan_by_id(id_, authorization, request_options=request_options))

    async def get_usage(
        self,
        plan_id: UUID,
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
            plan_id: The ID of the plan
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
            ApiError: Bad request - Invalid query parameters Forbidden - Invalid or missing API key Plan or customer not
                found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_usage(
                plan_id,
                external_id,
                authorization,
                limit=limit,
                offset=offset,
                start_time=start_time,
                end_time=end_time,
                request_options=request_options,
            ),
        )

    async def list_plans(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        product_id: str | None = None,
        external_product_id: str | None = None,
        include_archived: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PlanListResponse:
        """Returns plans for your organization, including archived plans by default, optionally filtered to a product.

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            product_id: Value sent with the request.
            external_product_id: Value sent with the request.
            include_archived: Whether to include archived plans in the response. Defaults to true.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_plans(
                authorization,
                limit=limit,
                offset=offset,
                product_id=product_id,
                external_product_id=external_product_id,
                include_archived=include_archived,
                request_options=request_options,
            ),
        )

    async def subscribe(
        self,
        plan_id: UUID,
        customer_external_id: str,
        currency: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Order:
        """Creates a new order for a customer subscribing to a plan. The order will be created with the plan's products
        and pricing attributes.

        Args:
            plan_id: The ID of the plan
            customer_external_id: The external ID of the customer
            currency: The currency code for the order (e.g., "USD", "EUR")
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer subscribed to plan successfully

        Raises:
            ApiError: Bad request - Missing required parameters or invalid plan type Forbidden - Invalid or missing API
                key Plan or customer not found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.subscribe(
                plan_id, customer_external_id, currency, authorization, request_options=request_options
            ),
        )

    async def unsubscribe(
        self,
        plan_id: UUID,
        customer_external_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CancelRenewalResponse:
        """Cancels the renewal of an active order for a customer's plan subscription. The order will remain active until
        the cancellation date.

        Args:
            plan_id: The ID of the plan
            customer_external_id: The external ID of the customer
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer unsubscribed from plan successfully

        Raises:
            ApiError: Bad request - Missing required parameters Forbidden - Invalid or missing API key Plan, customer,
                or order not found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.unsubscribe(
                plan_id, customer_external_id, authorization, request_options=request_options
            ),
        )

    async def update_plan_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: UpdatePlanRequest | UpdatePlanRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Plan1:
        """Update a plan by your external plan ID. If attributes are provided, they replace the plan's existing
        attributes. Set status to archive or restore the plan.

        Args:
            external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_plan_by_external_id(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    async def update_plan_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdatePlanRequest | UpdatePlanRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Plan1:
        """Update a plan by Paid plan ID. If attributes are provided, they replace the plan's existing attributes. Set
        status to archive or restore the plan.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_plan_by_id(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def update_plan_upgrade_path(
        self,
        authorization: str,
        *,
        body: UpdatePlanUpgradePathRequest | UpdatePlanUpgradePathRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PlanUpgradePathResponse:
        """Updates upgrade path ordering for plans within a product, grouped by billing frequency.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_plan_upgrade_path(
                authorization, body=body, request_options=request_options
            ),
        )

    async def upgrade(
        self,
        customer_external_id: str,
        old_plan_id: UUID,
        new_plan_id: UUID,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProrationUpgradeResponse:
        """Upgrades a customer from one plan to another with automatic proration. Credits are applied for the unused
        portion of the current billing period, and the order is updated with the new plan's pricing.

        Args:
            customer_external_id: The external ID of the customer
            old_plan_id: The ID of the current plan
            new_plan_id: The ID of the plan to upgrade to
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plan upgrade completed successfully

        Raises:
            ApiError: Bad request - Missing required parameters, no matching attributes, or invalid plan configuration
                Forbidden - Invalid or missing API key Plan, customer, or order not found ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.upgrade(
                customer_external_id, old_plan_id, new_plan_id, authorization, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPlansWithRawResponse:
        return self._with_raw_response


class PlansWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_plan(
        self,
        authorization: str,
        *,
        body: CreatePlanRequest | CreatePlanRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Plan1, CreatePlanErrorBody]:
        """Creates a new plan for a product.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/plans/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreatePlanRequest | CreatePlanRequestDict | None](body),
            decoder=json_decoder[Plan1],
            error_mapper=create_plan_error_mapper,
            request_options=request_options,
        )

    def get_by_id(
        self, plan_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Plan, GetByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            plan_id: The ID of the plan
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/{planId}"),
            path_params=[param[UUID]("planId", plan_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Plan],
            error_mapper=get_by_id_error_mapper,
            request_options=request_options,
        )

    def get_current(
        self, customer_external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PlansGetCurrentResponse200, GetCurrentErrorBody]:
        """Retrieves the currently active plan subscription for a customer by their external ID. Returns the plan
        details and subscription information.

        Args:
            customer_external_id: The external ID of the customer
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/current"),
            query_params=[param[str]("customerExternalId", customer_external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PlansGetCurrentResponse200],
            error_mapper=get_current_error_mapper,
            request_options=request_options,
        )

    def get_group_by_id(
        self, plan_group_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PlanGroup, GetGroupByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            plan_group_id: The ID of the plan group
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/planGroup/{planGroupId}"),
            path_params=[param[UUID]("planGroupId", plan_group_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PlanGroup],
            error_mapper=get_group_by_id_error_mapper,
            request_options=request_options,
        )

    def get_group_plans(
        self, plan_group_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[PlanWithFeatures], GetGroupPlansErrorBody]:
        """Retrieves all plans in a plan group with their features (product-attribute pairs)

        Args:
            plan_group_id: The ID of the plan group
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/planGroup/{planGroupId}/plans"),
            path_params=[param[UUID]("planGroupId", plan_group_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[list[PlanWithFeatures]],
            error_mapper=get_group_plans_error_mapper,
            request_options=request_options,
        )

    def get_plan_by_external_id(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Plan1, GetPlanByExternalIdErrorBody]:
        """Get a plan by your external plan ID.

        Args:
            external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Plan1],
            error_mapper=get_plan_by_external_id_error_mapper,
            request_options=request_options,
        )

    def get_plan_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Plan1, GetPlanByIdErrorBody]:
        """Get a plan by Paid plan ID.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Plan1],
            error_mapper=get_plan_by_id_error_mapper,
            request_options=request_options,
        )

    def get_usage(
        self,
        plan_id: UUID,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UsageSummariesResponse, GetUsageErrorBody]:
        """Send a ``GET`` request.

        Args:
            plan_id: The ID of the plan
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
            url_template=self._server.default("/plans/{planId}/usage"),
            path_params=[param[UUID]("planId", plan_id)],
            query_params=[
                param[str]("externalId", external_id),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[RFC3339DateTime | None]("startTime", start_time),
                param[RFC3339DateTime | None]("endTime", end_time),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[UsageSummariesResponse],
            error_mapper=get_usage_error_mapper,
            request_options=request_options,
        )

    def list_plans(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        product_id: str | None = None,
        external_product_id: str | None = None,
        include_archived: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PlanListResponse, ListPlansErrorBody]:
        """Returns plans for your organization, including archived plans by default, optionally filtered to a product.

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            product_id: Value sent with the request.
            external_product_id: Value sent with the request.
            include_archived: Whether to include archived plans in the response. Defaults to true.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("productId", product_id),
                param[str | None]("externalProductId", external_product_id),
                param[bool | None]("includeArchived", include_archived),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PlanListResponse],
            error_mapper=list_plans_error_mapper,
            request_options=request_options,
        )

    def subscribe(
        self,
        plan_id: UUID,
        customer_external_id: str,
        currency: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Order, SubscribeErrorBody]:
        """Creates a new order for a customer subscribing to a plan. The order will be created with the plan's products
        and pricing attributes.

        Args:
            plan_id: The ID of the plan
            customer_external_id: The external ID of the customer
            currency: The currency code for the order (e.g., "USD", "EUR")
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/plans/{planId}/subscribe"),
            path_params=[param[UUID]("planId", plan_id)],
            query_params=[param[str]("customerExternalId", customer_external_id), param[str]("currency", currency)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Order],
            error_mapper=subscribe_error_mapper,
            request_options=request_options,
        )

    def unsubscribe(
        self,
        plan_id: UUID,
        customer_external_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CancelRenewalResponse, UnsubscribeErrorBody]:
        """Cancels the renewal of an active order for a customer's plan subscription. The order will remain active until
        the cancellation date.

        Args:
            plan_id: The ID of the plan
            customer_external_id: The external ID of the customer
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/plans/{planId}/unsubscribe"),
            path_params=[param[UUID]("planId", plan_id)],
            query_params=[param[str]("customerExternalId", customer_external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[CancelRenewalResponse],
            error_mapper=unsubscribe_error_mapper,
            request_options=request_options,
        )

    def update_plan_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: UpdatePlanRequest | UpdatePlanRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Plan1, UpdatePlanByExternalIdErrorBody]:
        """Update a plan by your external plan ID. If attributes are provided, they replace the plan's existing
        attributes. Set status to archive or restore the plan.

        Args:
            external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/plans/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdatePlanRequest | UpdatePlanRequestDict | None](body),
            decoder=json_decoder[Plan1],
            error_mapper=update_plan_by_external_id_error_mapper,
            request_options=request_options,
        )

    def update_plan_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdatePlanRequest | UpdatePlanRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Plan1, UpdatePlanByIdErrorBody]:
        """Update a plan by Paid plan ID. If attributes are provided, they replace the plan's existing attributes. Set
        status to archive or restore the plan.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/plans/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdatePlanRequest | UpdatePlanRequestDict | None](body),
            decoder=json_decoder[Plan1],
            error_mapper=update_plan_by_id_error_mapper,
            request_options=request_options,
        )

    def update_plan_upgrade_path(
        self,
        authorization: str,
        *,
        body: UpdatePlanUpgradePathRequest | UpdatePlanUpgradePathRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PlanUpgradePathResponse, UpdatePlanUpgradePathErrorBody]:
        """Updates upgrade path ordering for plans within a product, grouped by billing frequency.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/plans/upgrade-path"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdatePlanUpgradePathRequest | UpdatePlanUpgradePathRequestDict | None](body),
            decoder=json_decoder[PlanUpgradePathResponse],
            error_mapper=update_plan_upgrade_path_error_mapper,
            request_options=request_options,
        )

    def upgrade(
        self,
        customer_external_id: str,
        old_plan_id: UUID,
        new_plan_id: UUID,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProrationUpgradeResponse, UpgradeErrorBody]:
        """Upgrades a customer from one plan to another with automatic proration. Credits are applied for the unused
        portion of the current billing period, and the order is updated with the new plan's pricing.

        Args:
            customer_external_id: The external ID of the customer
            old_plan_id: The ID of the current plan
            new_plan_id: The ID of the plan to upgrade to
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/plans/upgrade"),
            query_params=[
                param[str]("customerExternalId", customer_external_id),
                param[UUID]("oldPlanId", old_plan_id),
                param[UUID]("newPlanId", new_plan_id),
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[ProrationUpgradeResponse],
            error_mapper=upgrade_error_mapper,
            request_options=request_options,
        )


class AsyncPlansWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_plan(
        self,
        authorization: str,
        *,
        body: CreatePlanRequest | CreatePlanRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Plan1, CreatePlanErrorBody]:
        """Creates a new plan for a product.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/plans/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreatePlanRequest | CreatePlanRequestDict | None](body),
            decoder=async_json_decoder[Plan1],
            error_mapper=create_plan_error_mapper,
            request_options=request_options,
        )

    async def get_by_id(
        self, plan_id: UUID, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Plan, GetByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            plan_id: The ID of the plan
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/{planId}"),
            path_params=[param[UUID]("planId", plan_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Plan],
            error_mapper=get_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_current(
        self, customer_external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PlansGetCurrentResponse200, GetCurrentErrorBody]:
        """Retrieves the currently active plan subscription for a customer by their external ID. Returns the plan
        details and subscription information.

        Args:
            customer_external_id: The external ID of the customer
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/current"),
            query_params=[param[str]("customerExternalId", customer_external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PlansGetCurrentResponse200],
            error_mapper=get_current_error_mapper,
            request_options=request_options,
        )

    async def get_group_by_id(
        self, plan_group_id: UUID, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PlanGroup, GetGroupByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            plan_group_id: The ID of the plan group
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/planGroup/{planGroupId}"),
            path_params=[param[UUID]("planGroupId", plan_group_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PlanGroup],
            error_mapper=get_group_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_group_plans(
        self, plan_group_id: UUID, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[PlanWithFeatures], GetGroupPlansErrorBody]:
        """Retrieves all plans in a plan group with their features (product-attribute pairs)

        Args:
            plan_group_id: The ID of the plan group
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/planGroup/{planGroupId}/plans"),
            path_params=[param[UUID]("planGroupId", plan_group_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[list[PlanWithFeatures]],
            error_mapper=get_group_plans_error_mapper,
            request_options=request_options,
        )

    async def get_plan_by_external_id(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Plan1, GetPlanByExternalIdErrorBody]:
        """Get a plan by your external plan ID.

        Args:
            external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Plan1],
            error_mapper=get_plan_by_external_id_error_mapper,
            request_options=request_options,
        )

    async def get_plan_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Plan1, GetPlanByIdErrorBody]:
        """Get a plan by Paid plan ID.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Plan1],
            error_mapper=get_plan_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_usage(
        self,
        plan_id: UUID,
        external_id: str,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UsageSummariesResponse, GetUsageErrorBody]:
        """Send a ``GET`` request.

        Args:
            plan_id: The ID of the plan
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
            url_template=self._server.default("/plans/{planId}/usage"),
            path_params=[param[UUID]("planId", plan_id)],
            query_params=[
                param[str]("externalId", external_id),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[RFC3339DateTime | None]("startTime", start_time),
                param[RFC3339DateTime | None]("endTime", end_time),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[UsageSummariesResponse],
            error_mapper=get_usage_error_mapper,
            request_options=request_options,
        )

    async def list_plans(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        product_id: str | None = None,
        external_product_id: str | None = None,
        include_archived: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PlanListResponse, ListPlansErrorBody]:
        """Returns plans for your organization, including archived plans by default, optionally filtered to a product.

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            product_id: Value sent with the request.
            external_product_id: Value sent with the request.
            include_archived: Whether to include archived plans in the response. Defaults to true.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("productId", product_id),
                param[str | None]("externalProductId", external_product_id),
                param[bool | None]("includeArchived", include_archived),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PlanListResponse],
            error_mapper=list_plans_error_mapper,
            request_options=request_options,
        )

    async def subscribe(
        self,
        plan_id: UUID,
        customer_external_id: str,
        currency: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Order, SubscribeErrorBody]:
        """Creates a new order for a customer subscribing to a plan. The order will be created with the plan's products
        and pricing attributes.

        Args:
            plan_id: The ID of the plan
            customer_external_id: The external ID of the customer
            currency: The currency code for the order (e.g., "USD", "EUR")
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/plans/{planId}/subscribe"),
            path_params=[param[UUID]("planId", plan_id)],
            query_params=[param[str]("customerExternalId", customer_external_id), param[str]("currency", currency)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Order],
            error_mapper=subscribe_error_mapper,
            request_options=request_options,
        )

    async def unsubscribe(
        self,
        plan_id: UUID,
        customer_external_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CancelRenewalResponse, UnsubscribeErrorBody]:
        """Cancels the renewal of an active order for a customer's plan subscription. The order will remain active until
        the cancellation date.

        Args:
            plan_id: The ID of the plan
            customer_external_id: The external ID of the customer
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/plans/{planId}/unsubscribe"),
            path_params=[param[UUID]("planId", plan_id)],
            query_params=[param[str]("customerExternalId", customer_external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[CancelRenewalResponse],
            error_mapper=unsubscribe_error_mapper,
            request_options=request_options,
        )

    async def update_plan_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: UpdatePlanRequest | UpdatePlanRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Plan1, UpdatePlanByExternalIdErrorBody]:
        """Update a plan by your external plan ID. If attributes are provided, they replace the plan's existing
        attributes. Set status to archive or restore the plan.

        Args:
            external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/plans/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdatePlanRequest | UpdatePlanRequestDict | None](body),
            decoder=async_json_decoder[Plan1],
            error_mapper=update_plan_by_external_id_error_mapper,
            request_options=request_options,
        )

    async def update_plan_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdatePlanRequest | UpdatePlanRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Plan1, UpdatePlanByIdErrorBody]:
        """Update a plan by Paid plan ID. If attributes are provided, they replace the plan's existing attributes. Set
        status to archive or restore the plan.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/plans/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdatePlanRequest | UpdatePlanRequestDict | None](body),
            decoder=async_json_decoder[Plan1],
            error_mapper=update_plan_by_id_error_mapper,
            request_options=request_options,
        )

    async def update_plan_upgrade_path(
        self,
        authorization: str,
        *,
        body: UpdatePlanUpgradePathRequest | UpdatePlanUpgradePathRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PlanUpgradePathResponse, UpdatePlanUpgradePathErrorBody]:
        """Updates upgrade path ordering for plans within a product, grouped by billing frequency.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/plans/upgrade-path"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdatePlanUpgradePathRequest | UpdatePlanUpgradePathRequestDict | None](body),
            decoder=async_json_decoder[PlanUpgradePathResponse],
            error_mapper=update_plan_upgrade_path_error_mapper,
            request_options=request_options,
        )

    async def upgrade(
        self,
        customer_external_id: str,
        old_plan_id: UUID,
        new_plan_id: UUID,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProrationUpgradeResponse, UpgradeErrorBody]:
        """Upgrades a customer from one plan to another with automatic proration. Credits are applied for the unused
        portion of the current billing period, and the order is updated with the new plan's pricing.

        Args:
            customer_external_id: The external ID of the customer
            old_plan_id: The ID of the current plan
            new_plan_id: The ID of the plan to upgrade to
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/plans/upgrade"),
            query_params=[
                param[str]("customerExternalId", customer_external_id),
                param[UUID]("oldPlanId", old_plan_id),
                param[UUID]("newPlanId", new_plan_id),
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[ProrationUpgradeResponse],
            error_mapper=upgrade_error_mapper,
            request_options=request_options,
        )
