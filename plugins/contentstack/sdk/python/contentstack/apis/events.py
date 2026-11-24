from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_all_events_error import GetAllEventsErrorBody, get_all_events_error_mapper
from ..errors.track_events_error import TrackEventsErrorBody, track_events_error_mapper
from ..models.event_list import EventList
from ..models.track_event import TrackEvent, TrackEventDict
from ..server.server import Server


class Events:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = EventsWithRawResponse(client, server)

    def get_all_events(self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> EventList:
        """Retrieves all custom event definitions in the Personalize project. Events are used to track user interactions
        and trigger audience membership updates.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of all events in the project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.get_all_events(x_project_uid, request_options=request_options))

    def track_events(
        self,
        x_project_uid: str,
        x_cs_personalize_user_uid: str,
        body: list[TrackEvent | TrackEventDict],
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Records one or more user behavior events for experience analytics and audience evaluation. Supports both
        impression events (automatic tracking when experiences are shown) and custom events (defined in the Personalize
        Management API and triggered by specific user actions).

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            x_cs_personalize_user_uid: The unique identifier for the end user whose events are being tracked.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Events accepted for processing.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. The request is not authorized for this
                project. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            self._with_raw_response.track_events(
                x_project_uid, x_cs_personalize_user_uid, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EventsWithRawResponse:
        return self._with_raw_response


class AsyncEvents:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncEventsWithRawResponse(client, server)

    async def get_all_events(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EventList:
        """Retrieves all custom event definitions in the Personalize project. Events are used to track user interactions
        and trigger audience membership updates.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of all events in the project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(await self._with_raw_response.get_all_events(x_project_uid, request_options=request_options))

    async def track_events(
        self,
        x_project_uid: str,
        x_cs_personalize_user_uid: str,
        body: list[TrackEvent | TrackEventDict],
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Records one or more user behavior events for experience analytics and audience evaluation. Supports both
        impression events (automatic tracking when experiences are shown) and custom events (defined in the Personalize
        Management API and triggered by specific user actions).

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            x_cs_personalize_user_uid: The unique identifier for the end user whose events are being tracked.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Events accepted for processing.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. The request is not authorized for this
                project. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.track_events(
                x_project_uid, x_cs_personalize_user_uid, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEventsWithRawResponse:
        return self._with_raw_response


class EventsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_all_events(
        self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EventList, GetAllEventsErrorBody]:
        """Retrieves all custom event definitions in the Personalize project. Events are used to track user interactions
        and trigger audience membership updates.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_events_api("/events"),
            headers=[param[str]("x-project-uid", x_project_uid)],
            decoder=json_decoder[EventList],
            error_mapper=get_all_events_error_mapper,
            request_options=request_options,
        )

    def track_events(
        self,
        x_project_uid: str,
        x_cs_personalize_user_uid: str,
        body: list[TrackEvent | TrackEventDict],
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TrackEventsErrorBody]:
        """Records one or more user behavior events for experience analytics and audience evaluation. Supports both
        impression events (automatic tracking when experiences are shown) and custom events (defined in the Personalize
        Management API and triggered by specific user actions).

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            x_cs_personalize_user_uid: The unique identifier for the end user whose events are being tracked.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_events_api("/events"),
            headers=[
                param[str]("x-project-uid", x_project_uid),
                param[str]("x-cs-personalize-user-uid", x_cs_personalize_user_uid),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[TrackEvent | TrackEventDict]](body),
            decoder=empty_response,
            error_mapper=track_events_error_mapper,
            request_options=request_options,
        )


class AsyncEventsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_all_events(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EventList, GetAllEventsErrorBody]:
        """Retrieves all custom event definitions in the Personalize project. Events are used to track user interactions
        and trigger audience membership updates.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_events_api("/events"),
            headers=[param[str]("x-project-uid", x_project_uid)],
            decoder=async_json_decoder[EventList],
            error_mapper=get_all_events_error_mapper,
            request_options=request_options,
        )

    async def track_events(
        self,
        x_project_uid: str,
        x_cs_personalize_user_uid: str,
        body: list[TrackEvent | TrackEventDict],
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TrackEventsErrorBody]:
        """Records one or more user behavior events for experience analytics and audience evaluation. Supports both
        impression events (automatic tracking when experiences are shown) and custom events (defined in the Personalize
        Management API and triggered by specific user actions).

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            x_cs_personalize_user_uid: The unique identifier for the end user whose events are being tracked.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_events_api("/events"),
            headers=[
                param[str]("x-project-uid", x_project_uid),
                param[str]("x-cs-personalize-user-uid", x_cs_personalize_user_uid),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[TrackEvent | TrackEventDict]](body),
            decoder=async_empty_response,
            error_mapper=track_events_error_mapper,
            request_options=request_options,
        )
