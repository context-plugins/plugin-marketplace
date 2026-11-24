from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.plans_index_error import PlansIndexErrorBody, plans_index_error_mapper
from ..errors.plans_show_error import PlansShowErrorBody, plans_show_error_mapper
from ..models.recurring_plan_resource import RecurringPlanResource
from ..models.v1_plans_response import V1PlansResponse
from ..server.server import Server


class RecurringPlans:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RecurringPlansWithRawResponse(client, server, auth)

    def plans_index(
        self, *, contacts: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1PlansResponse:
        """Send a ``GET`` request.

        Args:
            contacts: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``RecurringPlanResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.plans_index(contacts=contacts, request_options=request_options))

    def plans_show(
        self,
        plan: str | None,
        *,
        first_name: str | None = None,
        last_name: str | None = None,
        email: str | None = None,
        amount: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringPlanResource:
        """Send a ``GET`` request.

        Args:
            plan: The plan uid
            first_name: Value sent with the request.
            last_name: Value sent with the request.
            email: Value sent with the request.
            amount: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``RecurringPlanResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.plans_show(
                plan,
                first_name=first_name,
                last_name=last_name,
                email=email,
                amount=amount,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> RecurringPlansWithRawResponse:
        return self._with_raw_response


class AsyncRecurringPlans:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRecurringPlansWithRawResponse(client, server, auth)

    async def plans_index(
        self, *, contacts: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1PlansResponse:
        """Send a ``GET`` request.

        Args:
            contacts: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``RecurringPlanResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(await self._with_raw_response.plans_index(contacts=contacts, request_options=request_options))

    async def plans_show(
        self,
        plan: str | None,
        *,
        first_name: str | None = None,
        last_name: str | None = None,
        email: str | None = None,
        amount: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringPlanResource:
        """Send a ``GET`` request.

        Args:
            plan: The plan uid
            first_name: Value sent with the request.
            last_name: Value sent with the request.
            email: Value sent with the request.
            amount: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``RecurringPlanResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.plans_show(
                plan,
                first_name=first_name,
                last_name=last_name,
                email=email,
                amount=amount,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRecurringPlansWithRawResponse:
        return self._with_raw_response


class RecurringPlansWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def plans_index(
        self, *, contacts: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PlansResponse, PlansIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            contacts: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/plans"),
            query_params=[param[str | None]("contacts", contacts)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1PlansResponse],
            error_mapper=plans_index_error_mapper,
            request_options=request_options,
        )

    def plans_show(
        self,
        plan: str | None,
        *,
        first_name: str | None = None,
        last_name: str | None = None,
        email: str | None = None,
        amount: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringPlanResource, PlansShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            plan: The plan uid
            first_name: Value sent with the request.
            last_name: Value sent with the request.
            email: Value sent with the request.
            amount: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/plans/{plan}"),
            path_params=[param[str | None]("plan", plan)],
            query_params=[
                param[str | None]("first_name", first_name),
                param[str | None]("last_name", last_name),
                param[str | None]("email", email),
                param[str | None]("amount", amount),
            ],
            auth_scheme=self._auth.http,
            decoder=json_decoder[RecurringPlanResource],
            error_mapper=plans_show_error_mapper,
            request_options=request_options,
        )


class AsyncRecurringPlansWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def plans_index(
        self, *, contacts: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1PlansResponse, PlansIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            contacts: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/plans"),
            query_params=[param[str | None]("contacts", contacts)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1PlansResponse],
            error_mapper=plans_index_error_mapper,
            request_options=request_options,
        )

    async def plans_show(
        self,
        plan: str | None,
        *,
        first_name: str | None = None,
        last_name: str | None = None,
        email: str | None = None,
        amount: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringPlanResource, PlansShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            plan: The plan uid
            first_name: Value sent with the request.
            last_name: Value sent with the request.
            email: Value sent with the request.
            amount: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/plans/{plan}"),
            path_params=[param[str | None]("plan", plan)],
            query_params=[
                param[str | None]("first_name", first_name),
                param[str | None]("last_name", last_name),
                param[str | None]("email", email),
                param[str | None]("amount", amount),
            ],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[RecurringPlanResource],
            error_mapper=plans_show_error_mapper,
            request_options=request_options,
        )
