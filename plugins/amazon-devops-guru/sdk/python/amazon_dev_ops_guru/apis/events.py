from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.list_events_error import ListEventsErrorBody, list_events_error_mapper
from ..models.events_request import EventsRequest, EventsRequestDict
from ..models.list_events_response import ListEventsResponse
from ..server.server import Server


class Events:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EventsWithRawResponse(client, server, auth)

    def list_events(
        self,
        *,
        body: EventsRequest | EventsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListEventsResponse:
        """Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters
        to specify which events are returned.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_events(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> EventsWithRawResponse:
        return self._with_raw_response


class AsyncEvents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEventsWithRawResponse(client, server, auth)

    async def list_events(
        self,
        *,
        body: EventsRequest | EventsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListEventsResponse:
        """Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters
        to specify which events are returned.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.list_events(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncEventsWithRawResponse:
        return self._with_raw_response


class EventsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_events(
        self,
        *,
        body: EventsRequest | EventsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListEventsResponse, ListEventsErrorBody]:
        """Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters
        to specify which events are returned.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/events"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EventsRequest | EventsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListEventsResponse],
            error_mapper=list_events_error_mapper,
            request_options=request_options,
        )


class AsyncEventsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_events(
        self,
        *,
        body: EventsRequest | EventsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListEventsResponse, ListEventsErrorBody]:
        """Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters
        to specify which events are returned.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/events"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EventsRequest | EventsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListEventsResponse],
            error_mapper=list_events_error_mapper,
            request_options=request_options,
        )
