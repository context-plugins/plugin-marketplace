from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.agent import Agent
from ..server.server import Server


class AgentsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AgentsApiWithRawResponse(client, server, auth)

    def get_agent(self, org: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            id_: Agent UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Agent record

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_agent(org, id_, request_options=request_options))

    def list_agents(self, org: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Agent]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of agents

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_agents(org, request_options=request_options))

    def stop_agent(self, org: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            id_: Agent UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Agent stopped

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.stop_agent(org, id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AgentsApiWithRawResponse:
        return self._with_raw_response


class AsyncAgentsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAgentsApiWithRawResponse(client, server, auth)

    async def get_agent(self, org: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            id_: Agent UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Agent record

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_agent(org, id_, request_options=request_options))

    async def list_agents(self, org: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[Agent]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of agents

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_agents(org, request_options=request_options))

    async def stop_agent(self, org: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            id_: Agent UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Agent stopped

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.stop_agent(org, id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAgentsApiWithRawResponse:
        return self._with_raw_response


class AgentsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_agent(
        self, org: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            id_: Agent UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{org}/agents/{id}"),
            path_params=[param[str]("org", org), param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_agents(
        self, org: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Agent], RawError]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{org}/agents"),
            path_params=[param[str]("org", org)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[list[Agent]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def stop_agent(
        self, org: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            id_: Agent UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/organizations/{org}/agents/{id}/stop"),
            path_params=[param[str]("org", org), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAgentsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_agent(
        self, org: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            id_: Agent UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{org}/agents/{id}"),
            path_params=[param[str]("org", org), param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_agents(
        self, org: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Agent], RawError]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{org}/agents"),
            path_params=[param[str]("org", org)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[list[Agent]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def stop_agent(
        self, org: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            id_: Agent UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/organizations/{org}/agents/{id}/stop"),
            path_params=[param[str]("org", org), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
