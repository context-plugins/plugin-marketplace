from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.publish_event_error import PublishEventErrorBody, publish_event_error_mapper
from ..models.event_request import EventRequest, EventRequestDict
from ..models.event_response import EventResponse
from ..server.server import Server


class EventsControllerV2:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = EventsControllerV2WithRawResponse(client, server)

    def publish_event(
        self, body: EventRequest | EventRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> EventResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.publish_event(body, request_options=request_options))

    @property
    def with_raw_response(self) -> EventsControllerV2WithRawResponse:
        return self._with_raw_response


class AsyncEventsControllerV2:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncEventsControllerV2WithRawResponse(client, server)

    async def publish_event(
        self, body: EventRequest | EventRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EventResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.publish_event(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncEventsControllerV2WithRawResponse:
        return self._with_raw_response


class EventsControllerV2WithRawResponse(BaseRawResponse[RawClient, Server]):
    def publish_event(
        self, body: EventRequest | EventRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EventResponse, PublishEventErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/events"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EventRequest | EventRequestDict](body),
            decoder=json_decoder[EventResponse],
            error_mapper=publish_event_error_mapper,
            request_options=request_options,
        )


class AsyncEventsControllerV2WithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def publish_event(
        self, body: EventRequest | EventRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EventResponse, PublishEventErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/events"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EventRequest | EventRequestDict](body),
            decoder=async_json_decoder[EventResponse],
            error_mapper=publish_event_error_mapper,
            request_options=request_options,
        )
