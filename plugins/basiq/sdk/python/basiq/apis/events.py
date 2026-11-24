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
from ..errors.get_event_type_by_id_error import GetEventTypeByIdErrorBody, get_event_type_by_id_error_mapper
from ..errors.get_events_error import GetEventsErrorBody, get_events_error_mapper
from ..errors.get_type_by_id_error import GetTypeByIdErrorBody, get_type_by_id_error_mapper
from ..errors.list_event_types_error import ListEventTypesErrorBody, list_event_types_error_mapper
from ..models.events_get_response_resource import EventsGetResponseResource
from ..models.events_response import EventsResponse
from ..models.events_types_response import EventsTypesResponse
from ..models.events_types_response1 import EventsTypesResponse1
from ..server.server import Server


class Events:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EventsWithRawResponse(client, server, auth)

    def get_event_type_by_id(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> EventsTypesResponse1:
        """Returns a single event type based on the parameter input.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Error status response code indicates that the request has not been applied because it lacks valid
                authentication credentials for the target resource. Error status response code indicates that the
                request has not been applied because it lacks valid authentication credentials for the target resource.
                Error that access is forbidden and tied to the application logic, such as insufficient rights to a
                resource. Not Found Too many requests Returns error response code indicates that the server encountered
                an unexpected condition that prevented it from fulfilling the request. Returns error response code
                indicates that the server is not ready to handle the request. ``error`` is ``EventsTypes400Error1 |
                EventsTypes401Error1 | EventsTypes403Error1 | EventsTypes404Error1 | EventsTypes429Error1 |
                EventsTypes500Error1 | EventsTypes503Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_event_type_by_id(id_, request_options=request_options))

    def get_events(
        self, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> EventsGetResponseResource:
        """Returns a list of all events that have taken place.

        Args:
            filter_: Retrieves the details of all events associated with a user. **Note:** This endpoint only returns
                events that happened in the last 7 days. **Filtering Options:** - ``userId``: User ID for the specific
                user you wish to retrieve events for. e.g., ``user.id.eq(userId)`` - ``entity``: Filter events by entity
                type. e.g., ``event.entity.eq(entity)`` - ``type``: Filter events by event type. e.g.,
                ``event.type.eq(type)``
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns details of events.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. Returns error
                response code indicates that the server is not ready to handle the request. ``error`` is
                ``Events400Error1 | Events401Error1 | Events403Error1 | Events404Error1 | Events500Error1 |
                Events503Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_events(filter_=filter_, request_options=request_options))

    def get_type_by_id(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> EventsResponse:
        """Returns a single event type based on the parameter input.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns the ID of an event.

        Raises:
            ApiError: Error status response code indicates that the request has not been applied because it lacks valid
                authentication credentials for the target resource. Error status response code indicates that the
                request has not been applied because it lacks valid authentication credentials for the target resource.
                Error that access is forbidden and tied to the application logic, such as insufficient rights to a
                resource. Not Found Too many requests Returns error response code indicates that the server encountered
                an unexpected condition that prevented it from fulfilling the request. Returns error response code
                indicates that the server is not ready to handle the request. ``error`` is ``Events400Error21 |
                Events401Error21 | Events403Error21 | Events404Error21 | Events429Error1 | Events500Error21 |
                Events503Error21 | RawError``."""
        return unwrap(self._with_raw_response.get_type_by_id(id_, request_options=request_options))

    def list_event_types(self, *, request_options: RequestOptionsOrDict | None = None) -> EventsTypesResponse:
        """Returns a list of event types.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Error status response code indicates that the request has not been applied because it lacks valid
                authentication credentials for the target resource. Error that access is forbidden and tied to the
                application logic, such as insufficient rights to a resource. Too many requests Returns error response
                code indicates that the server encountered an unexpected condition that prevented it from fulfilling the
                request. Returns error response code indicates that the server is not ready to handle the request.
                ``error`` is ``EventsTypes401Error1 | EventsTypes403Error1 | EventsTypes429Error1 | EventsTypes500Error1
                | EventsTypes503Error1 | RawError``."""
        return unwrap(self._with_raw_response.list_event_types(request_options=request_options))

    @property
    def with_raw_response(self) -> EventsWithRawResponse:
        return self._with_raw_response


class AsyncEvents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEventsWithRawResponse(client, server, auth)

    async def get_event_type_by_id(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EventsTypesResponse1:
        """Returns a single event type based on the parameter input.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Error status response code indicates that the request has not been applied because it lacks valid
                authentication credentials for the target resource. Error status response code indicates that the
                request has not been applied because it lacks valid authentication credentials for the target resource.
                Error that access is forbidden and tied to the application logic, such as insufficient rights to a
                resource. Not Found Too many requests Returns error response code indicates that the server encountered
                an unexpected condition that prevented it from fulfilling the request. Returns error response code
                indicates that the server is not ready to handle the request. ``error`` is ``EventsTypes400Error1 |
                EventsTypes401Error1 | EventsTypes403Error1 | EventsTypes404Error1 | EventsTypes429Error1 |
                EventsTypes500Error1 | EventsTypes503Error1 | RawError``."""
        return unwrap(await self._with_raw_response.get_event_type_by_id(id_, request_options=request_options))

    async def get_events(
        self, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EventsGetResponseResource:
        """Returns a list of all events that have taken place.

        Args:
            filter_: Retrieves the details of all events associated with a user. **Note:** This endpoint only returns
                events that happened in the last 7 days. **Filtering Options:** - ``userId``: User ID for the specific
                user you wish to retrieve events for. e.g., ``user.id.eq(userId)`` - ``entity``: Filter events by entity
                type. e.g., ``event.entity.eq(entity)`` - ``type``: Filter events by event type. e.g.,
                ``event.type.eq(type)``
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns details of events.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. Returns error
                response code indicates that the server is not ready to handle the request. ``error`` is
                ``Events400Error1 | Events401Error1 | Events403Error1 | Events404Error1 | Events500Error1 |
                Events503Error1 | RawError``."""
        return unwrap(await self._with_raw_response.get_events(filter_=filter_, request_options=request_options))

    async def get_type_by_id(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EventsResponse:
        """Returns a single event type based on the parameter input.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns the ID of an event.

        Raises:
            ApiError: Error status response code indicates that the request has not been applied because it lacks valid
                authentication credentials for the target resource. Error status response code indicates that the
                request has not been applied because it lacks valid authentication credentials for the target resource.
                Error that access is forbidden and tied to the application logic, such as insufficient rights to a
                resource. Not Found Too many requests Returns error response code indicates that the server encountered
                an unexpected condition that prevented it from fulfilling the request. Returns error response code
                indicates that the server is not ready to handle the request. ``error`` is ``Events400Error21 |
                Events401Error21 | Events403Error21 | Events404Error21 | Events429Error1 | Events500Error21 |
                Events503Error21 | RawError``."""
        return unwrap(await self._with_raw_response.get_type_by_id(id_, request_options=request_options))

    async def list_event_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EventsTypesResponse:
        """Returns a list of event types.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Error status response code indicates that the request has not been applied because it lacks valid
                authentication credentials for the target resource. Error that access is forbidden and tied to the
                application logic, such as insufficient rights to a resource. Too many requests Returns error response
                code indicates that the server encountered an unexpected condition that prevented it from fulfilling the
                request. Returns error response code indicates that the server is not ready to handle the request.
                ``error`` is ``EventsTypes401Error1 | EventsTypes403Error1 | EventsTypes429Error1 | EventsTypes500Error1
                | EventsTypes503Error1 | RawError``."""
        return unwrap(await self._with_raw_response.list_event_types(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncEventsWithRawResponse:
        return self._with_raw_response


class EventsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_event_type_by_id(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EventsTypesResponse1, GetEventTypeByIdErrorBody]:
        """Returns a single event type based on the parameter input.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/types/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[EventsTypesResponse1],
            error_mapper=get_event_type_by_id_error_mapper,
            request_options=request_options,
        )

    def get_events(
        self, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EventsGetResponseResource, GetEventsErrorBody]:
        """Returns a list of all events that have taken place.

        Args:
            filter_: Retrieves the details of all events associated with a user. **Note:** This endpoint only returns
                events that happened in the last 7 days. **Filtering Options:** - ``userId``: User ID for the specific
                user you wish to retrieve events for. e.g., ``user.id.eq(userId)`` - ``entity``: Filter events by entity
                type. e.g., ``event.entity.eq(entity)`` - ``type``: Filter events by event type. e.g.,
                ``event.type.eq(type)``
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events"),
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[EventsGetResponseResource],
            error_mapper=get_events_error_mapper,
            request_options=request_options,
        )

    def get_type_by_id(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EventsResponse, GetTypeByIdErrorBody]:
        """Returns a single event type based on the parameter input.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[EventsResponse],
            error_mapper=get_type_by_id_error_mapper,
            request_options=request_options,
        )

    def list_event_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EventsTypesResponse, ListEventTypesErrorBody]:
        """Returns a list of event types.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/types"),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[EventsTypesResponse],
            error_mapper=list_event_types_error_mapper,
            request_options=request_options,
        )


class AsyncEventsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_event_type_by_id(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EventsTypesResponse1, GetEventTypeByIdErrorBody]:
        """Returns a single event type based on the parameter input.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/types/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[EventsTypesResponse1],
            error_mapper=get_event_type_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_events(
        self, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EventsGetResponseResource, GetEventsErrorBody]:
        """Returns a list of all events that have taken place.

        Args:
            filter_: Retrieves the details of all events associated with a user. **Note:** This endpoint only returns
                events that happened in the last 7 days. **Filtering Options:** - ``userId``: User ID for the specific
                user you wish to retrieve events for. e.g., ``user.id.eq(userId)`` - ``entity``: Filter events by entity
                type. e.g., ``event.entity.eq(entity)`` - ``type``: Filter events by event type. e.g.,
                ``event.type.eq(type)``
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events"),
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[EventsGetResponseResource],
            error_mapper=get_events_error_mapper,
            request_options=request_options,
        )

    async def get_type_by_id(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EventsResponse, GetTypeByIdErrorBody]:
        """Returns a single event type based on the parameter input.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[EventsResponse],
            error_mapper=get_type_by_id_error_mapper,
            request_options=request_options,
        )

    async def list_event_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EventsTypesResponse, ListEventTypesErrorBody]:
        """Returns a list of event types.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/types"),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[EventsTypesResponse],
            error_mapper=list_event_types_error_mapper,
            request_options=request_options,
        )
