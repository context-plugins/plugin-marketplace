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
    async_empty_response,
    empty_response,
    json_body,
    param,
    unwrap,
)
from ..errors.create_compass_event_error import CreateCompassEventErrorBody, create_compass_event_error_mapper
from ..models.create_streamlined_event_request import CreateStreamlinedEventRequest, CreateStreamlinedEventRequestDict
from ..server.server import Server


class Events:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EventsWithRawResponse(client, server, auth)

    def create_compass_event(
        self,
        body: CreateStreamlinedEventRequest | CreateStreamlinedEventRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Sends an event into an event source. This API is rate limited. Only 100 requests per user per minute are
        allowed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the process of sending of an event is started.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the event source is not found. Returned if the
                request exceeds the rate limit. ``error`` is ``ErrorResponseDto | RawError``."""
        return unwrap(self._with_raw_response.create_compass_event(body, request_options=request_options))

    @property
    def with_raw_response(self) -> EventsWithRawResponse:
        return self._with_raw_response


class AsyncEvents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEventsWithRawResponse(client, server, auth)

    async def create_compass_event(
        self,
        body: CreateStreamlinedEventRequest | CreateStreamlinedEventRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Sends an event into an event source. This API is rate limited. Only 100 requests per user per minute are
        allowed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the process of sending of an event is started.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the event source is not found. Returned if the
                request exceeds the rate limit. ``error`` is ``ErrorResponseDto | RawError``."""
        return unwrap(await self._with_raw_response.create_compass_event(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncEventsWithRawResponse:
        return self._with_raw_response


class EventsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_compass_event(
        self,
        body: CreateStreamlinedEventRequest | CreateStreamlinedEventRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateCompassEventErrorBody]:
        """Sends an event into an event source. This API is rate limited. Only 100 requests per user per minute are
        allowed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/compass/v1/events"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStreamlinedEventRequest | CreateStreamlinedEventRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=create_compass_event_error_mapper,
            request_options=request_options,
        )


class AsyncEventsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_compass_event(
        self,
        body: CreateStreamlinedEventRequest | CreateStreamlinedEventRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateCompassEventErrorBody]:
        """Sends an event into an event source. This API is rate limited. Only 100 requests per user per minute are
        allowed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/compass/v1/events"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStreamlinedEventRequest | CreateStreamlinedEventRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=create_compass_event_error_mapper,
            request_options=request_options,
        )
