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
from ..errors.get_api_v1_event_types_error import GetApiV1EventTypesErrorBody, get_api_v1_event_types_error_mapper
from ..models.api_v1_event_types_response import ApiV1EventTypesResponse
from ..server.server import Server


class EventTypes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EventTypesWithRawResponse(client, server, auth)

    def get_api_v1_event_types(
        self, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1EventTypesResponse:
        """Returns all active event types, grouped by category (in the categories' defined order) and ordered by slug
        within each. Event type slugs are the values for the ``event_type`` filter on ``GET /api/v1/events``.

        Args:
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``slug``, ``label``,
                ``category``, ``summary``. ``id`` is always included.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Event types retrieved successfully

        Raises:
            ApiError: unauthorized forbidden - missing scope ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_event_types(fields=fields, request_options=request_options))

    @property
    def with_raw_response(self) -> EventTypesWithRawResponse:
        return self._with_raw_response


class AsyncEventTypes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEventTypesWithRawResponse(client, server, auth)

    async def get_api_v1_event_types(
        self, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1EventTypesResponse:
        """Returns all active event types, grouped by category (in the categories' defined order) and ordered by slug
        within each. Event type slugs are the values for the ``event_type`` filter on ``GET /api/v1/events``.

        Args:
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``slug``, ``label``,
                ``category``, ``summary``. ``id`` is always included.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Event types retrieved successfully

        Raises:
            ApiError: unauthorized forbidden - missing scope ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_event_types(fields=fields, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncEventTypesWithRawResponse:
        return self._with_raw_response


class EventTypesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_event_types(
        self, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1EventTypesResponse, GetApiV1EventTypesErrorBody]:
        """Returns all active event types, grouped by category (in the categories' defined order) and ordered by slug
        within each. Event type slugs are the values for the ``event_type`` filter on ``GET /api/v1/events``.

        Args:
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``slug``, ``label``,
                ``category``, ``summary``. ``id`` is always included.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/event_types"),
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1EventTypesResponse],
            error_mapper=get_api_v1_event_types_error_mapper,
            request_options=request_options,
        )


class AsyncEventTypesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_event_types(
        self, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1EventTypesResponse, GetApiV1EventTypesErrorBody]:
        """Returns all active event types, grouped by category (in the categories' defined order) and ordered by slug
        within each. Event type slugs are the values for the ``event_type`` filter on ``GET /api/v1/events``.

        Args:
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``slug``, ``label``,
                ``category``, ``summary``. ``id`` is always included.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/event_types"),
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1EventTypesResponse],
            error_mapper=get_api_v1_event_types_error_mapper,
            request_options=request_options,
        )
