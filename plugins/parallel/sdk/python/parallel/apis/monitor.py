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
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.cancel_monitor_v1_monitors_monitor_id_cancel_post_error import (
    CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody,
    cancel_monitor_v1_monitors_monitor_id_cancel_post_error_mapper,
)
from ..errors.create_monitor_v1_monitors_post_error import (
    CreateMonitorV1MonitorsPostErrorBody,
    create_monitor_v1_monitors_post_error_mapper,
)
from ..errors.list_monitor_events_v1_monitors_monitor_id_events_get_error import (
    ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody,
    list_monitor_events_v1_monitors_monitor_id_events_get_error_mapper,
)
from ..errors.list_monitors_v1_monitors_get_error import (
    ListMonitorsV1MonitorsGetErrorBody,
    list_monitors_v1_monitors_get_error_mapper,
)
from ..errors.retrieve_monitor_v1_monitors_monitor_id_get_error import (
    RetrieveMonitorV1MonitorsMonitorIdGetErrorBody,
    retrieve_monitor_v1_monitors_monitor_id_get_error_mapper,
)
from ..errors.trigger_monitor_run_v1_monitors_monitor_id_trigger_post_error import (
    TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody,
    trigger_monitor_run_v1_monitors_monitor_id_trigger_post_error_mapper,
)
from ..errors.update_monitor_v1_monitors_monitor_id_update_post_error import (
    UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody,
    update_monitor_v1_monitors_monitor_id_update_post_error_mapper,
)
from ..models.create_monitor_request import CreateMonitorRequest, CreateMonitorRequestDict
from ..models.enums.status1 import Status1OrStr
from ..models.enums.type4 import Type4OrStr
from ..models.monitor_response import MonitorResponse
from ..models.paginated_monitor_events import PaginatedMonitorEvents
from ..models.paginated_monitor_response import PaginatedMonitorResponse
from ..models.update_monitor_request import UpdateMonitorRequest, UpdateMonitorRequestDict
from ..server.server import Server


class Monitor:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MonitorWithRawResponse(client, server, auth)

    def cancel_monitor_v1_monitors_monitor_id_cancel_post(
        self, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> MonitorResponse:
        """Cancel a monitor.

        Permanently stops the monitor from running. Cancellation is irreversible — create a new monitor to resume
        monitoring. Cancelling an already-cancelled monitor is a no-op.

        Args:
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor cancelled successfully.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Monitor not found Unprocessable content: request
                validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.cancel_monitor_v1_monitors_monitor_id_cancel_post(
                monitor_id, request_options=request_options
            ),
        )

    def create_monitor_v1_monitors_post(
        self,
        body: CreateMonitorRequest | CreateMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MonitorResponse:
        """Create a monitor.

        Monitors run on a fixed frequency to detect material changes in web content. Set ``type=event_stream`` to
        monitor a search query, or ``type=snapshot`` to monitor a specific task run's output. The monitor runs once
        immediately at creation, then continues on the configured schedule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor created successfully.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Unprocessable content: request validation error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_monitor_v1_monitors_post(body, request_options=request_options))

    def list_monitor_events_v1_monitors_monitor_id_events_get(
        self,
        monitor_id: str,
        *,
        event_group_id: str | None = None,
        cursor: str | None = None,
        limit: int | None = None,
        include_completions: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedMonitorEvents:
        """List events for a monitor, newest first.

        Pass ``event_group_id`` to narrow results to a single execution. Otherwise returns all executions newest-first;
        use ``next_cursor`` to paginate. Set ``include_completions=true`` to also include no-change executions.

        Args:
            monitor_id: Value sent with the request.
            event_group_id: Filter to a single execution. Values come from ``event_group_id`` in webhook events and
                listed events. Pagination params are ignored when set.
            cursor: Pass ``next_cursor`` from a previous response to retrieve more events.
            limit: Maximum number of events to return. Defaults to 20. Between 1 and 100.
            include_completions: When true, include completion events for executions that ran but detected no material
                changes. Useful for auditing execution history.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor events retrieved successfully.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Monitor not found Unprocessable content: invalid
                cursor or request validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_monitor_events_v1_monitors_monitor_id_events_get(
                monitor_id,
                event_group_id=event_group_id,
                cursor=cursor,
                limit=limit,
                include_completions=include_completions,
                request_options=request_options,
            ),
        )

    def list_monitors_v1_monitors_get(
        self,
        *,
        cursor: str | None = None,
        limit: int | None = None,
        type_: list[Type4OrStr] | None = None,
        status: list[Status1OrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedMonitorResponse:
        """List monitors ordered by creation time, newest first.

        Monitors are sorted by ``created_at`` descending. ``limit`` defaults to 100. Use ``next_cursor`` from the
        response and pass it as ``cursor`` to fetch the next page. Pagination ends when ``next_cursor`` is absent.

        By default only ``active`` monitors are returned. Pass ``status=cancelled`` or both values to include cancelled
        monitors.

        The legacy Monitor API (``/v1alpha/monitors`` endpoints) is documented under the ``Monitor (Alpha)`` tag.

        Args:
            cursor: Pagination token from ``next_cursor`` in a previous response. Omit to start from the most recently
                created monitor.
            limit: Maximum number of monitors to return. Defaults to 100. Between 1 and 10000.
            type_: Filter by monitor type. Pass multiple times to filter by multiple values. Omit to return all types.
            status: Filter by monitor status. Pass multiple times to filter by multiple values. Defaults to ``active``
                only.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of monitors.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Validation Error ``error`` is ``ErrorResponse |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_monitors_v1_monitors_get(
                cursor=cursor, limit=limit, type_=type_, status=status, request_options=request_options
            ),
        )

    def retrieve_monitor_v1_monitors_monitor_id_get(
        self, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> MonitorResponse:
        """Retrieve a monitor.

        Retrieves a specific monitor by ``monitor_id``. Returns the monitor configuration including status, frequency,
        query, and webhook settings.

        Args:
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor retrieved successfully.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Monitor not found Validation Error ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.retrieve_monitor_v1_monitors_monitor_id_get(
                monitor_id, request_options=request_options
            ),
        )

    def trigger_monitor_run_v1_monitors_monitor_id_trigger_post(
        self, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Trigger an immediate monitor run.

        Enqueues a one-off execution of the monitor outside its normal schedule. The monitor's regular schedule is not
        affected. An event is only emitted if the execution detects a material change. Cancelled monitors cannot be
        triggered.

        Args:
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor run enqueued.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Monitor not found Unprocessable content: request
                validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.trigger_monitor_run_v1_monitors_monitor_id_trigger_post(
                monitor_id, request_options=request_options
            ),
        )

    def update_monitor_v1_monitors_monitor_id_update_post(
        self,
        monitor_id: str,
        body: UpdateMonitorRequest | UpdateMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MonitorResponse:
        """Update a monitor.

        Only fields explicitly included in the request body are changed. Pass ``null`` for ``webhook`` or ``metadata``
        to clear those fields. Pass ``type`` and ``settings`` to update type-specific settings on an ``event_stream``
        monitor. At least one field must be provided. Cancelled monitors cannot be updated.

        Args:
            monitor_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor updated successfully.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Monitor not found Unprocessable content: request
                validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_monitor_v1_monitors_monitor_id_update_post(
                monitor_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> MonitorWithRawResponse:
        return self._with_raw_response


class AsyncMonitor:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMonitorWithRawResponse(client, server, auth)

    async def cancel_monitor_v1_monitors_monitor_id_cancel_post(
        self, monitor_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MonitorResponse:
        """Cancel a monitor.

        Permanently stops the monitor from running. Cancellation is irreversible — create a new monitor to resume
        monitoring. Cancelling an already-cancelled monitor is a no-op.

        Args:
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor cancelled successfully.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Monitor not found Unprocessable content: request
                validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_monitor_v1_monitors_monitor_id_cancel_post(
                monitor_id, request_options=request_options
            ),
        )

    async def create_monitor_v1_monitors_post(
        self,
        body: CreateMonitorRequest | CreateMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MonitorResponse:
        """Create a monitor.

        Monitors run on a fixed frequency to detect material changes in web content. Set ``type=event_stream`` to
        monitor a search query, or ``type=snapshot`` to monitor a specific task run's output. The monitor runs once
        immediately at creation, then continues on the configured schedule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor created successfully.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Unprocessable content: request validation error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_monitor_v1_monitors_post(body, request_options=request_options)
        )

    async def list_monitor_events_v1_monitors_monitor_id_events_get(
        self,
        monitor_id: str,
        *,
        event_group_id: str | None = None,
        cursor: str | None = None,
        limit: int | None = None,
        include_completions: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedMonitorEvents:
        """List events for a monitor, newest first.

        Pass ``event_group_id`` to narrow results to a single execution. Otherwise returns all executions newest-first;
        use ``next_cursor`` to paginate. Set ``include_completions=true`` to also include no-change executions.

        Args:
            monitor_id: Value sent with the request.
            event_group_id: Filter to a single execution. Values come from ``event_group_id`` in webhook events and
                listed events. Pagination params are ignored when set.
            cursor: Pass ``next_cursor`` from a previous response to retrieve more events.
            limit: Maximum number of events to return. Defaults to 20. Between 1 and 100.
            include_completions: When true, include completion events for executions that ran but detected no material
                changes. Useful for auditing execution history.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor events retrieved successfully.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Monitor not found Unprocessable content: invalid
                cursor or request validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_monitor_events_v1_monitors_monitor_id_events_get(
                monitor_id,
                event_group_id=event_group_id,
                cursor=cursor,
                limit=limit,
                include_completions=include_completions,
                request_options=request_options,
            ),
        )

    async def list_monitors_v1_monitors_get(
        self,
        *,
        cursor: str | None = None,
        limit: int | None = None,
        type_: list[Type4OrStr] | None = None,
        status: list[Status1OrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedMonitorResponse:
        """List monitors ordered by creation time, newest first.

        Monitors are sorted by ``created_at`` descending. ``limit`` defaults to 100. Use ``next_cursor`` from the
        response and pass it as ``cursor`` to fetch the next page. Pagination ends when ``next_cursor`` is absent.

        By default only ``active`` monitors are returned. Pass ``status=cancelled`` or both values to include cancelled
        monitors.

        The legacy Monitor API (``/v1alpha/monitors`` endpoints) is documented under the ``Monitor (Alpha)`` tag.

        Args:
            cursor: Pagination token from ``next_cursor`` in a previous response. Omit to start from the most recently
                created monitor.
            limit: Maximum number of monitors to return. Defaults to 100. Between 1 and 10000.
            type_: Filter by monitor type. Pass multiple times to filter by multiple values. Omit to return all types.
            status: Filter by monitor status. Pass multiple times to filter by multiple values. Defaults to ``active``
                only.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of monitors.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Validation Error ``error`` is ``ErrorResponse |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_monitors_v1_monitors_get(
                cursor=cursor, limit=limit, type_=type_, status=status, request_options=request_options
            ),
        )

    async def retrieve_monitor_v1_monitors_monitor_id_get(
        self, monitor_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MonitorResponse:
        """Retrieve a monitor.

        Retrieves a specific monitor by ``monitor_id``. Returns the monitor configuration including status, frequency,
        query, and webhook settings.

        Args:
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor retrieved successfully.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Monitor not found Validation Error ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.retrieve_monitor_v1_monitors_monitor_id_get(
                monitor_id, request_options=request_options
            ),
        )

    async def trigger_monitor_run_v1_monitors_monitor_id_trigger_post(
        self, monitor_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Trigger an immediate monitor run.

        Enqueues a one-off execution of the monitor outside its normal schedule. The monitor's regular schedule is not
        affected. An event is only emitted if the execution detects a material change. Cancelled monitors cannot be
        triggered.

        Args:
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor run enqueued.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Monitor not found Unprocessable content: request
                validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.trigger_monitor_run_v1_monitors_monitor_id_trigger_post(
                monitor_id, request_options=request_options
            ),
        )

    async def update_monitor_v1_monitors_monitor_id_update_post(
        self,
        monitor_id: str,
        body: UpdateMonitorRequest | UpdateMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MonitorResponse:
        """Update a monitor.

        Only fields explicitly included in the request body are changed. Pass ``null`` for ``webhook`` or ``metadata``
        to clear those fields. Pass ``type`` and ``settings`` to update type-specific settings on an ``event_stream``
        monitor. At least one field must be provided. Cancelled monitors cannot be updated.

        Args:
            monitor_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor updated successfully.

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Monitor not found Unprocessable content: request
                validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_monitor_v1_monitors_monitor_id_update_post(
                monitor_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMonitorWithRawResponse:
        return self._with_raw_response


class MonitorWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_monitor_v1_monitors_monitor_id_cancel_post(
        self, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResponse, CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody]:
        """Cancel a monitor.

        Permanently stops the monitor from running. Cancellation is irreversible — create a new monitor to resume
        monitoring. Cancelling an already-cancelled monitor is a no-op.

        Args:
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitors/{monitor_id}/cancel"),
            path_params=[param[str]("monitor_id", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorResponse],
            error_mapper=cancel_monitor_v1_monitors_monitor_id_cancel_post_error_mapper,
            request_options=request_options,
        )

    def create_monitor_v1_monitors_post(
        self,
        body: CreateMonitorRequest | CreateMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorResponse, CreateMonitorV1MonitorsPostErrorBody]:
        """Create a monitor.

        Monitors run on a fixed frequency to detect material changes in web content. Set ``type=event_stream`` to
        monitor a search query, or ``type=snapshot`` to monitor a specific task run's output. The monitor runs once
        immediately at creation, then continues on the configured schedule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitors"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateMonitorRequest | CreateMonitorRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorResponse],
            error_mapper=create_monitor_v1_monitors_post_error_mapper,
            request_options=request_options,
        )

    def list_monitor_events_v1_monitors_monitor_id_events_get(
        self,
        monitor_id: str,
        *,
        event_group_id: str | None = None,
        cursor: str | None = None,
        limit: int | None = None,
        include_completions: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedMonitorEvents, ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody]:
        """List events for a monitor, newest first.

        Pass ``event_group_id`` to narrow results to a single execution. Otherwise returns all executions newest-first;
        use ``next_cursor`` to paginate. Set ``include_completions=true`` to also include no-change executions.

        Args:
            monitor_id: Value sent with the request.
            event_group_id: Filter to a single execution. Values come from ``event_group_id`` in webhook events and
                listed events. Pagination params are ignored when set.
            cursor: Pass ``next_cursor`` from a previous response to retrieve more events.
            limit: Maximum number of events to return. Defaults to 20. Between 1 and 100.
            include_completions: When true, include completion events for executions that ran but detected no material
                changes. Useful for auditing execution history.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/monitors/{monitor_id}/events"),
            path_params=[param[str]("monitor_id", monitor_id)],
            query_params=[
                param[str | None]("event_group_id", event_group_id),
                param[str | None]("cursor", cursor),
                param[int | None]("limit", limit),
                param[bool | None]("include_completions", include_completions),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[PaginatedMonitorEvents],
            error_mapper=list_monitor_events_v1_monitors_monitor_id_events_get_error_mapper,
            request_options=request_options,
        )

    def list_monitors_v1_monitors_get(
        self,
        *,
        cursor: str | None = None,
        limit: int | None = None,
        type_: list[Type4OrStr] | None = None,
        status: list[Status1OrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedMonitorResponse, ListMonitorsV1MonitorsGetErrorBody]:
        """List monitors ordered by creation time, newest first.

        Monitors are sorted by ``created_at`` descending. ``limit`` defaults to 100. Use ``next_cursor`` from the
        response and pass it as ``cursor`` to fetch the next page. Pagination ends when ``next_cursor`` is absent.

        By default only ``active`` monitors are returned. Pass ``status=cancelled`` or both values to include cancelled
        monitors.

        The legacy Monitor API (``/v1alpha/monitors`` endpoints) is documented under the ``Monitor (Alpha)`` tag.

        Args:
            cursor: Pagination token from ``next_cursor`` in a previous response. Omit to start from the most recently
                created monitor.
            limit: Maximum number of monitors to return. Defaults to 100. Between 1 and 10000.
            type_: Filter by monitor type. Pass multiple times to filter by multiple values. Omit to return all types.
            status: Filter by monitor status. Pass multiple times to filter by multiple values. Defaults to ``active``
                only.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/monitors"),
            query_params=[
                param[str | None]("cursor", cursor),
                param[int | None]("limit", limit),
                param[list[Type4OrStr] | None]("type", type_),
                param[list[Status1OrStr] | None]("status", status),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[PaginatedMonitorResponse],
            error_mapper=list_monitors_v1_monitors_get_error_mapper,
            request_options=request_options,
        )

    def retrieve_monitor_v1_monitors_monitor_id_get(
        self, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResponse, RetrieveMonitorV1MonitorsMonitorIdGetErrorBody]:
        """Retrieve a monitor.

        Retrieves a specific monitor by ``monitor_id``. Returns the monitor configuration including status, frequency,
        query, and webhook settings.

        Args:
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/monitors/{monitor_id}"),
            path_params=[param[str]("monitor_id", monitor_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorResponse],
            error_mapper=retrieve_monitor_v1_monitors_monitor_id_get_error_mapper,
            request_options=request_options,
        )

    def trigger_monitor_run_v1_monitors_monitor_id_trigger_post(
        self, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody]:
        """Trigger an immediate monitor run.

        Enqueues a one-off execution of the monitor outside its normal schedule. The monitor's regular schedule is not
        affected. An event is only emitted if the execution detects a material change. Cancelled monitors cannot be
        triggered.

        Args:
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitors/{monitor_id}/trigger"),
            path_params=[param[str]("monitor_id", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=trigger_monitor_run_v1_monitors_monitor_id_trigger_post_error_mapper,
            request_options=request_options,
        )

    def update_monitor_v1_monitors_monitor_id_update_post(
        self,
        monitor_id: str,
        body: UpdateMonitorRequest | UpdateMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorResponse, UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody]:
        """Update a monitor.

        Only fields explicitly included in the request body are changed. Pass ``null`` for ``webhook`` or ``metadata``
        to clear those fields. Pass ``type`` and ``settings`` to update type-specific settings on an ``event_stream``
        monitor. At least one field must be provided. Cancelled monitors cannot be updated.

        Args:
            monitor_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitors/{monitor_id}/update"),
            path_params=[param[str]("monitor_id", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateMonitorRequest | UpdateMonitorRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorResponse],
            error_mapper=update_monitor_v1_monitors_monitor_id_update_post_error_mapper,
            request_options=request_options,
        )


class AsyncMonitorWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_monitor_v1_monitors_monitor_id_cancel_post(
        self, monitor_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResponse, CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody]:
        """Cancel a monitor.

        Permanently stops the monitor from running. Cancellation is irreversible — create a new monitor to resume
        monitoring. Cancelling an already-cancelled monitor is a no-op.

        Args:
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitors/{monitor_id}/cancel"),
            path_params=[param[str]("monitor_id", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorResponse],
            error_mapper=cancel_monitor_v1_monitors_monitor_id_cancel_post_error_mapper,
            request_options=request_options,
        )

    async def create_monitor_v1_monitors_post(
        self,
        body: CreateMonitorRequest | CreateMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorResponse, CreateMonitorV1MonitorsPostErrorBody]:
        """Create a monitor.

        Monitors run on a fixed frequency to detect material changes in web content. Set ``type=event_stream`` to
        monitor a search query, or ``type=snapshot`` to monitor a specific task run's output. The monitor runs once
        immediately at creation, then continues on the configured schedule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitors"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateMonitorRequest | CreateMonitorRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorResponse],
            error_mapper=create_monitor_v1_monitors_post_error_mapper,
            request_options=request_options,
        )

    async def list_monitor_events_v1_monitors_monitor_id_events_get(
        self,
        monitor_id: str,
        *,
        event_group_id: str | None = None,
        cursor: str | None = None,
        limit: int | None = None,
        include_completions: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedMonitorEvents, ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody]:
        """List events for a monitor, newest first.

        Pass ``event_group_id`` to narrow results to a single execution. Otherwise returns all executions newest-first;
        use ``next_cursor`` to paginate. Set ``include_completions=true`` to also include no-change executions.

        Args:
            monitor_id: Value sent with the request.
            event_group_id: Filter to a single execution. Values come from ``event_group_id`` in webhook events and
                listed events. Pagination params are ignored when set.
            cursor: Pass ``next_cursor`` from a previous response to retrieve more events.
            limit: Maximum number of events to return. Defaults to 20. Between 1 and 100.
            include_completions: When true, include completion events for executions that ran but detected no material
                changes. Useful for auditing execution history.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/monitors/{monitor_id}/events"),
            path_params=[param[str]("monitor_id", monitor_id)],
            query_params=[
                param[str | None]("event_group_id", event_group_id),
                param[str | None]("cursor", cursor),
                param[int | None]("limit", limit),
                param[bool | None]("include_completions", include_completions),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[PaginatedMonitorEvents],
            error_mapper=list_monitor_events_v1_monitors_monitor_id_events_get_error_mapper,
            request_options=request_options,
        )

    async def list_monitors_v1_monitors_get(
        self,
        *,
        cursor: str | None = None,
        limit: int | None = None,
        type_: list[Type4OrStr] | None = None,
        status: list[Status1OrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedMonitorResponse, ListMonitorsV1MonitorsGetErrorBody]:
        """List monitors ordered by creation time, newest first.

        Monitors are sorted by ``created_at`` descending. ``limit`` defaults to 100. Use ``next_cursor`` from the
        response and pass it as ``cursor`` to fetch the next page. Pagination ends when ``next_cursor`` is absent.

        By default only ``active`` monitors are returned. Pass ``status=cancelled`` or both values to include cancelled
        monitors.

        The legacy Monitor API (``/v1alpha/monitors`` endpoints) is documented under the ``Monitor (Alpha)`` tag.

        Args:
            cursor: Pagination token from ``next_cursor`` in a previous response. Omit to start from the most recently
                created monitor.
            limit: Maximum number of monitors to return. Defaults to 100. Between 1 and 10000.
            type_: Filter by monitor type. Pass multiple times to filter by multiple values. Omit to return all types.
            status: Filter by monitor status. Pass multiple times to filter by multiple values. Defaults to ``active``
                only.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/monitors"),
            query_params=[
                param[str | None]("cursor", cursor),
                param[int | None]("limit", limit),
                param[list[Type4OrStr] | None]("type", type_),
                param[list[Status1OrStr] | None]("status", status),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[PaginatedMonitorResponse],
            error_mapper=list_monitors_v1_monitors_get_error_mapper,
            request_options=request_options,
        )

    async def retrieve_monitor_v1_monitors_monitor_id_get(
        self, monitor_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResponse, RetrieveMonitorV1MonitorsMonitorIdGetErrorBody]:
        """Retrieve a monitor.

        Retrieves a specific monitor by ``monitor_id``. Returns the monitor configuration including status, frequency,
        query, and webhook settings.

        Args:
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/monitors/{monitor_id}"),
            path_params=[param[str]("monitor_id", monitor_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorResponse],
            error_mapper=retrieve_monitor_v1_monitors_monitor_id_get_error_mapper,
            request_options=request_options,
        )

    async def trigger_monitor_run_v1_monitors_monitor_id_trigger_post(
        self, monitor_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody]:
        """Trigger an immediate monitor run.

        Enqueues a one-off execution of the monitor outside its normal schedule. The monitor's regular schedule is not
        affected. An event is only emitted if the execution detects a material change. Cancelled monitors cannot be
        triggered.

        Args:
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitors/{monitor_id}/trigger"),
            path_params=[param[str]("monitor_id", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=trigger_monitor_run_v1_monitors_monitor_id_trigger_post_error_mapper,
            request_options=request_options,
        )

    async def update_monitor_v1_monitors_monitor_id_update_post(
        self,
        monitor_id: str,
        body: UpdateMonitorRequest | UpdateMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorResponse, UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody]:
        """Update a monitor.

        Only fields explicitly included in the request body are changed. Pass ``null`` for ``webhook`` or ``metadata``
        to clear those fields. Pass ``type`` and ``settings`` to update type-specific settings on an ``event_stream``
        monitor. At least one field must be provided. Cancelled monitors cannot be updated.

        Args:
            monitor_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitors/{monitor_id}/update"),
            path_params=[param[str]("monitor_id", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateMonitorRequest | UpdateMonitorRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorResponse],
            error_mapper=update_monitor_v1_monitors_monitor_id_update_post_error_mapper,
            request_options=request_options,
        )
