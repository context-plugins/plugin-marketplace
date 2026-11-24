from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.event_catalog_dto import EventCatalogDto
from ..models.event_dto import EventDto
from ..models.pagination_dto_event_with_retries_dto import PaginationDtoEventWithRetriesDto
from ..server.server import Server


class Events:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = EventsWithRawResponse(client, server)

    def get_event_catalog(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[EventCatalogDto]:
        """Get the complete list of available events that you can subscribe to.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            getEventCatalog 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_event_catalog(
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def get_events_for_subscription(
        self,
        subscription_id: str,
        *,
        entity_id: str | None = None,
        max_: int | None = None,
        created_time_from: str | None = None,
        created_time_to: str | None = None,
        ascending: bool | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginationDtoEventWithRetriesDto:
        """Get a list of event notifications sent to you for a subscription. You can use this endpoint to address any
        issues with notification retries.

        In the request, set ``createdTimeFrom`` and ``createdTimeTo`` to get event notifications for the specified time
        range. If you do not set ``createdTimeTo``, the current date and time is used. By default, you get 20 results on
        one page of results. Set ``max`` in your request to get up to 100 results on one page.

        **Note**: In this list operation, pagination is available only in one direction. The ``nextPage`` value is
        available in the response for you to retrieve the next page of results. However, you cannot retrieve the
        previous page of results.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            entity_id: Value sent with the request.
            max_: Value sent with the request.
            created_time_from: Value sent with the request.
            created_time_to: Value sent with the request.
            ascending: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            getEventsForSubscription 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_events_for_subscription(
                subscription_id,
                entity_id=entity_id,
                max_=max_,
                created_time_from=created_time_from,
                created_time_to=created_time_to,
                ascending=ascending,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def resend_event(
        self,
        subscription_id: str,
        event_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventDto:
        """Resend an existing event notification.

        **Note**: When an event notification fails, BILL tries to send the notification again with exponential backoff.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            event_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            resendEvent 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.resend_event(
                subscription_id,
                event_id,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> EventsWithRawResponse:
        return self._with_raw_response


class AsyncEvents:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncEventsWithRawResponse(client, server)

    async def get_event_catalog(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[EventCatalogDto]:
        """Get the complete list of available events that you can subscribe to.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            getEventCatalog 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_event_catalog(
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def get_events_for_subscription(
        self,
        subscription_id: str,
        *,
        entity_id: str | None = None,
        max_: int | None = None,
        created_time_from: str | None = None,
        created_time_to: str | None = None,
        ascending: bool | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginationDtoEventWithRetriesDto:
        """Get a list of event notifications sent to you for a subscription. You can use this endpoint to address any
        issues with notification retries.

        In the request, set ``createdTimeFrom`` and ``createdTimeTo`` to get event notifications for the specified time
        range. If you do not set ``createdTimeTo``, the current date and time is used. By default, you get 20 results on
        one page of results. Set ``max`` in your request to get up to 100 results on one page.

        **Note**: In this list operation, pagination is available only in one direction. The ``nextPage`` value is
        available in the response for you to retrieve the next page of results. However, you cannot retrieve the
        previous page of results.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            entity_id: Value sent with the request.
            max_: Value sent with the request.
            created_time_from: Value sent with the request.
            created_time_to: Value sent with the request.
            ascending: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            getEventsForSubscription 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_events_for_subscription(
                subscription_id,
                entity_id=entity_id,
                max_=max_,
                created_time_from=created_time_from,
                created_time_to=created_time_to,
                ascending=ascending,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def resend_event(
        self,
        subscription_id: str,
        event_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EventDto:
        """Resend an existing event notification.

        **Note**: When an event notification fails, BILL tries to send the notification again with exponential backoff.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            event_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            resendEvent 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.resend_event(
                subscription_id,
                event_id,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEventsWithRawResponse:
        return self._with_raw_response


class EventsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_event_catalog(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[EventCatalogDto], RawError]:
        """Get the complete list of available events that you can subscribe to.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_connect_events_api("/v3/events/catalog"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
            ],
            decoder=json_decoder[list[EventCatalogDto]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_events_for_subscription(
        self,
        subscription_id: str,
        *,
        entity_id: str | None = None,
        max_: int | None = None,
        created_time_from: str | None = None,
        created_time_to: str | None = None,
        ascending: bool | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationDtoEventWithRetriesDto, RawError]:
        """Get a list of event notifications sent to you for a subscription. You can use this endpoint to address any
        issues with notification retries.

        In the request, set ``createdTimeFrom`` and ``createdTimeTo`` to get event notifications for the specified time
        range. If you do not set ``createdTimeTo``, the current date and time is used. By default, you get 20 results on
        one page of results. Set ``max`` in your request to get up to 100 results on one page.

        **Note**: In this list operation, pagination is available only in one direction. The ``nextPage`` value is
        available in the response for you to retrieve the next page of results. However, you cannot retrieve the
        previous page of results.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            entity_id: Value sent with the request.
            max_: Value sent with the request.
            created_time_from: Value sent with the request.
            created_time_to: Value sent with the request.
            ascending: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_connect_events_api("/v3/events/subscription/{subscriptionId}"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            query_params=[
                param[str | None]("entityId", entity_id),
                param[int | None]("max", max_),
                param[str | None]("createdTimeFrom", created_time_from),
                param[str | None]("createdTimeTo", created_time_to),
                param[bool | None]("ascending", ascending),
                param[str | None]("page", page),
            ],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
            ],
            decoder=json_decoder[PaginationDtoEventWithRetriesDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def resend_event(
        self,
        subscription_id: str,
        event_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EventDto, RawError]:
        """Resend an existing event notification.

        **Note**: When an event notification fails, BILL tries to send the notification again with exponential backoff.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            event_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_connect_events_api(
                "/v3/events/subscription/{subscriptionId}/event/{eventId}"
            ),
            path_params=[param[str]("subscriptionId", subscription_id), param[str]("eventId", event_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[EventDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncEventsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_event_catalog(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[EventCatalogDto], RawError]:
        """Get the complete list of available events that you can subscribe to.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_connect_events_api("/v3/events/catalog"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
            ],
            decoder=async_json_decoder[list[EventCatalogDto]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_events_for_subscription(
        self,
        subscription_id: str,
        *,
        entity_id: str | None = None,
        max_: int | None = None,
        created_time_from: str | None = None,
        created_time_to: str | None = None,
        ascending: bool | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationDtoEventWithRetriesDto, RawError]:
        """Get a list of event notifications sent to you for a subscription. You can use this endpoint to address any
        issues with notification retries.

        In the request, set ``createdTimeFrom`` and ``createdTimeTo`` to get event notifications for the specified time
        range. If you do not set ``createdTimeTo``, the current date and time is used. By default, you get 20 results on
        one page of results. Set ``max`` in your request to get up to 100 results on one page.

        **Note**: In this list operation, pagination is available only in one direction. The ``nextPage`` value is
        available in the response for you to retrieve the next page of results. However, you cannot retrieve the
        previous page of results.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            entity_id: Value sent with the request.
            max_: Value sent with the request.
            created_time_from: Value sent with the request.
            created_time_to: Value sent with the request.
            ascending: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_connect_events_api("/v3/events/subscription/{subscriptionId}"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            query_params=[
                param[str | None]("entityId", entity_id),
                param[int | None]("max", max_),
                param[str | None]("createdTimeFrom", created_time_from),
                param[str | None]("createdTimeTo", created_time_to),
                param[bool | None]("ascending", ascending),
                param[str | None]("page", page),
            ],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
            ],
            decoder=async_json_decoder[PaginationDtoEventWithRetriesDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def resend_event(
        self,
        subscription_id: str,
        event_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EventDto, RawError]:
        """Resend an existing event notification.

        **Note**: When an event notification fails, BILL tries to send the notification again with exponential backoff.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            event_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_connect_events_api(
                "/v3/events/subscription/{subscriptionId}/event/{eventId}"
            ),
            path_params=[param[str]("subscriptionId", subscription_id), param[str]("eventId", event_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[EventDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
