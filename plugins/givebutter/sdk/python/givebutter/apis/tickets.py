from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.tickets_show_error import TicketsShowErrorBody, tickets_show_error_mapper
from ..models.ticket_resource import TicketResource
from ..models.v1_tickets_response import V1TicketsResponse
from ..server.server import Server


class Tickets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TicketsWithRawResponse(client, server, auth)

    def tickets_index(self, *, request_options: RequestOptionsOrDict | None = None) -> V1TicketsResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``TicketResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.tickets_index(request_options=request_options))

    def tickets_show(
        self, ticket: str | None, *, request_options: RequestOptionsOrDict | None = None
    ) -> TicketResource:
        """Send a ``GET`` request.

        Args:
            ticket: The ticket uid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``TicketResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.tickets_show(ticket, request_options=request_options))

    @property
    def with_raw_response(self) -> TicketsWithRawResponse:
        return self._with_raw_response


class AsyncTickets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTicketsWithRawResponse(client, server, auth)

    async def tickets_index(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1TicketsResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``TicketResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.tickets_index(request_options=request_options))

    async def tickets_show(
        self, ticket: str | None, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TicketResource:
        """Send a ``GET`` request.

        Args:
            ticket: The ticket uid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``TicketResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.tickets_show(ticket, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTicketsWithRawResponse:
        return self._with_raw_response


class TicketsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def tickets_index(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1TicketsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tickets"),
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1TicketsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def tickets_show(
        self, ticket: str | None, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TicketResource, TicketsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            ticket: The ticket uid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tickets/{ticket}"),
            path_params=[param[str | None]("ticket", ticket)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[TicketResource],
            error_mapper=tickets_show_error_mapper,
            request_options=request_options,
        )


class AsyncTicketsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def tickets_index(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1TicketsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tickets"),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1TicketsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def tickets_show(
        self, ticket: str | None, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TicketResource, TicketsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            ticket: The ticket uid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tickets/{ticket}"),
            path_params=[param[str | None]("ticket", ticket)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[TicketResource],
            error_mapper=tickets_show_error_mapper,
            request_options=request_options,
        )
