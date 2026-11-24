from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_plan_error import CreatePlanErrorBody, create_plan_error_mapper
from ..errors.fetch_plan_error import FetchPlanErrorBody, fetch_plan_error_mapper
from ..errors.list_plans_error import ListPlansErrorBody, list_plans_error_mapper
from ..models.plan import Plan
from ..models.plans_request import PlansRequest, PlansRequestDict
from ..models.plans_response import PlansResponse
from ..server.server import Server


class Plans:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PlansWithRawResponse(client, server, auth)

    def create_plan(
        self, body: PlansRequest | PlansRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Plan:
        """Define a recurring billing plan with a fixed period, interval, and amount. Plans are reusable across multiple
        subscriptions. Once created, plan details cannot be modified.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plan created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_plan(body, request_options=request_options))

    def fetch_plan(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Plan:
        """Get details of a specific billing plan.

        Args:
            id_: Plan ID (plan_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plan details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_plan(id_, request_options=request_options))

    def list_plans(
        self, *, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None
    ) -> PlansResponse:
        """Retrieve all billing plans. Supports pagination.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of plans.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_plans(count=count, skip=skip, request_options=request_options))

    @property
    def with_raw_response(self) -> PlansWithRawResponse:
        return self._with_raw_response


class AsyncPlans:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPlansWithRawResponse(client, server, auth)

    async def create_plan(
        self, body: PlansRequest | PlansRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Plan:
        """Define a recurring billing plan with a fixed period, interval, and amount. Plans are reusable across multiple
        subscriptions. Once created, plan details cannot be modified.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plan created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_plan(body, request_options=request_options))

    async def fetch_plan(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Plan:
        """Get details of a specific billing plan.

        Args:
            id_: Plan ID (plan_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plan details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_plan(id_, request_options=request_options))

    async def list_plans(
        self, *, count: int | None = 10, skip: int | None = 0, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PlansResponse:
        """Retrieve all billing plans. Supports pagination.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of plans.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_plans(count=count, skip=skip, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPlansWithRawResponse:
        return self._with_raw_response


class PlansWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_plan(
        self, body: PlansRequest | PlansRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Plan, CreatePlanErrorBody]:
        """Define a recurring billing plan with a fixed period, interval, and amount. Plans are reusable across multiple
        subscriptions. Once created, plan details cannot be modified.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/plans"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PlansRequest | PlansRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Plan],
            error_mapper=create_plan_error_mapper,
            request_options=request_options,
        )

    def fetch_plan(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Plan, FetchPlanErrorBody]:
        """Get details of a specific billing plan.

        Args:
            id_: Plan ID (plan_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Plan],
            error_mapper=fetch_plan_error_mapper,
            request_options=request_options,
        )

    def list_plans(
        self, *, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PlansResponse, ListPlansErrorBody]:
        """Retrieve all billing plans. Supports pagination.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans"),
            query_params=[param[int | None]("count", count), param[int | None]("skip", skip)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PlansResponse],
            error_mapper=list_plans_error_mapper,
            request_options=request_options,
        )


class AsyncPlansWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_plan(
        self, body: PlansRequest | PlansRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Plan, CreatePlanErrorBody]:
        """Define a recurring billing plan with a fixed period, interval, and amount. Plans are reusable across multiple
        subscriptions. Once created, plan details cannot be modified.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/plans"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PlansRequest | PlansRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Plan],
            error_mapper=create_plan_error_mapper,
            request_options=request_options,
        )

    async def fetch_plan(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Plan, FetchPlanErrorBody]:
        """Get details of a specific billing plan.

        Args:
            id_: Plan ID (plan_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Plan],
            error_mapper=fetch_plan_error_mapper,
            request_options=request_options,
        )

    async def list_plans(
        self, *, count: int | None = 10, skip: int | None = 0, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PlansResponse, ListPlansErrorBody]:
        """Retrieve all billing plans. Supports pagination.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/plans"),
            query_params=[param[int | None]("count", count), param[int | None]("skip", skip)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PlansResponse],
            error_mapper=list_plans_error_mapper,
            request_options=request_options,
        )
