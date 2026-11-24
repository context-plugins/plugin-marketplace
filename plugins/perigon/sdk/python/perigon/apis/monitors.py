from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.activate_monitor_api_error import ActivateMonitorApiErrorBody, activate_monitor_api_error_mapper
from ..errors.archive_monitor_api_error import ArchiveMonitorApiErrorBody, archive_monitor_api_error_mapper
from ..errors.create_monitor_api_error import CreateMonitorApiErrorBody, create_monitor_api_error_mapper
from ..errors.get_monitor_api_error import GetMonitorApiErrorBody, get_monitor_api_error_mapper
from ..errors.list_monitor_events_api_error import ListMonitorEventsApiErrorBody, list_monitor_events_api_error_mapper
from ..errors.list_monitor_newsletters_api_error import (
    ListMonitorNewslettersApiErrorBody,
    list_monitor_newsletters_api_error_mapper,
)
from ..errors.list_monitor_summaries_api_error import (
    ListMonitorSummariesApiErrorBody,
    list_monitor_summaries_api_error_mapper,
)
from ..errors.list_monitors_api_error import ListMonitorsApiErrorBody, list_monitors_api_error_mapper
from ..errors.pause_monitor_api_error import PauseMonitorApiErrorBody, pause_monitor_api_error_mapper
from ..errors.update_monitor_api_error import UpdateMonitorApiErrorBody, update_monitor_api_error_mapper
from ..models.enums.classification_type3 import ClassificationType3OrStr
from ..models.enums.nulls import NullsOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..models.enums.status2 import Status2OrStr
from ..models.monitor_event_list_result import MonitorEventListResult
from ..models.monitor_list_result import MonitorListResult
from ..models.monitor_newsletter_list_result import MonitorNewsletterListResult
from ..models.monitor_result import MonitorResult
from ..models.monitor_summary_list_result import MonitorSummaryListResult
from ..models.signal_api_create_body import SignalApiCreateBody, SignalApiCreateBodyDict
from ..models.signal_api_update_body import SignalApiUpdateBody, SignalApiUpdateBodyDict
from ..server.server import Server


class Monitors:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MonitorsWithRawResponse(client, server, auth)

    def activate_monitor_api(self, uuid: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MonitorResult:
        """Activate a monitor, starting its processing pipeline.

        Args:
            uuid: UUID of the monitor to activate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.activate_monitor_api(uuid, request_options=request_options))

    def archive_monitor_api(self, uuid: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MonitorResult:
        """Archive a monitor. Archived monitors are excluded from list results by default.

        Args:
            uuid: UUID of the monitor to archive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.archive_monitor_api(uuid, request_options=request_options))

    def create_monitor_api(
        self,
        body: SignalApiCreateBody | SignalApiCreateBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MonitorResult:
        """Create a new AI monitor. Only AI_SIGNAL type is supported; status is required and accepts ACTIVE or DRAFT.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_monitor_api(body, request_options=request_options))

    def get_monitor_api(self, uuid: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MonitorResult:
        """Retrieve a monitor by UUID for the organization associated with the API key.

        Args:
            uuid: UUID of the monitor to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_monitor_api(uuid, request_options=request_options))

    def list_monitor_events_api(
        self,
        uuid: UUID,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        event_type: str | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MonitorEventListResult:
        """List structured events emitted by a monitor. Events represent individual matches detected by the monitor
        (e.g. a news article matching the monitor's criteria) and are produced asynchronously as new content is
        ingested.

        Args:
            uuid: UUID of the monitor whose events to retrieve.
            sort_by: Required field used to sort events. Accepts createdAt, updatedAt, or eventDate.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            event_type: Filter for events with this exact event type.
            from_: Filter for events created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for events created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_monitor_events_api(
                uuid,
                sort_by,
                sort_order,
                event_type=event_type,
                from_=from_,
                to=to,
                page=page,
                size=size,
                nulls=nulls,
                request_options=request_options,
            ),
        )

    def list_monitor_newsletters_api(
        self,
        uuid: UUID,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        title: str | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MonitorNewsletterListResult:
        """List newsletters generated for a monitor. Newsletters bundle a monitor's recent events into a human-readable
        digest and are produced on the monitor's configured schedule.

        Args:
            uuid: UUID of the monitor whose newsletters to retrieve.
            sort_by: Required field used to sort newsletters. Accepts createdAt or updatedAt.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            title: Filter by newsletter title using a case-insensitive partial match.
            from_: Filter for newsletters created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for newsletters created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_monitor_newsletters_api(
                uuid,
                sort_by,
                sort_order,
                title=title,
                from_=from_,
                to=to,
                page=page,
                size=size,
                nulls=nulls,
                request_options=request_options,
            ),
        )

    def list_monitor_summaries_api(
        self,
        uuid: UUID,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MonitorSummaryListResult:
        """List AI-generated summaries produced for a monitor as matching content is processed.

        Args:
            uuid: UUID of the monitor whose summaries to retrieve.
            sort_by: Required field used to sort summaries. Accepts createdAt or updatedAt.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            from_: Filter for summaries created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for summaries created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_monitor_summaries_api(
                uuid,
                sort_by,
                sort_order,
                from_=from_,
                to=to,
                page=page,
                size=size,
                nulls=nulls,
                request_options=request_options,
            ),
        )

    def list_monitors_api(
        self,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        uuid: list[UUID] | None = None,
        name: str | None = None,
        status: list[Status2OrStr] | None = None,
        classification_type: list[ClassificationType3OrStr] | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MonitorListResult:
        """List AI monitors for the organization associated with the API key. Excludes archived monitors by default. Use
        the status parameter to filter.

        Args:
            sort_by: Required field used to sort monitors. Accepts createdAt or updatedAt.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            uuid: Filter by one or more monitor UUIDs. Multiple values are combined with OR.
            name: Filter by monitor name using a case-insensitive partial match.
            status: Filter by status: DRAFT, ACTIVE, STOPPED, or ARCHIVED. When omitted, archived monitors are excluded.
            classification_type: Filter by classification type: EVENT, MENTIONS, or TOPIC. Multiple values are combined
                with OR.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_monitors_api(
                sort_by,
                sort_order,
                uuid=uuid,
                name=name,
                status=status,
                classification_type=classification_type,
                page=page,
                size=size,
                nulls=nulls,
                request_options=request_options,
            ),
        )

    def pause_monitor_api(self, uuid: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MonitorResult:
        """Pause a monitor, stopping its processing pipeline.

        Args:
            uuid: UUID of the monitor to pause.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.pause_monitor_api(uuid, request_options=request_options))

    def update_monitor_api(
        self,
        uuid: UUID,
        body: SignalApiUpdateBody | SignalApiUpdateBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MonitorResult:
        """Partially update a monitor. Only provided fields are modified. Use /activate, /pause, or DELETE to change
        monitor status.

        Args:
            uuid: UUID of the monitor to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_monitor_api(uuid, body, request_options=request_options))

    @property
    def with_raw_response(self) -> MonitorsWithRawResponse:
        return self._with_raw_response


class AsyncMonitors:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMonitorsWithRawResponse(client, server, auth)

    async def activate_monitor_api(
        self, uuid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MonitorResult:
        """Activate a monitor, starting its processing pipeline.

        Args:
            uuid: UUID of the monitor to activate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.activate_monitor_api(uuid, request_options=request_options))

    async def archive_monitor_api(
        self, uuid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MonitorResult:
        """Archive a monitor. Archived monitors are excluded from list results by default.

        Args:
            uuid: UUID of the monitor to archive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.archive_monitor_api(uuid, request_options=request_options))

    async def create_monitor_api(
        self,
        body: SignalApiCreateBody | SignalApiCreateBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MonitorResult:
        """Create a new AI monitor. Only AI_SIGNAL type is supported; status is required and accepts ACTIVE or DRAFT.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_monitor_api(body, request_options=request_options))

    async def get_monitor_api(
        self, uuid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MonitorResult:
        """Retrieve a monitor by UUID for the organization associated with the API key.

        Args:
            uuid: UUID of the monitor to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_monitor_api(uuid, request_options=request_options))

    async def list_monitor_events_api(
        self,
        uuid: UUID,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        event_type: str | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MonitorEventListResult:
        """List structured events emitted by a monitor. Events represent individual matches detected by the monitor
        (e.g. a news article matching the monitor's criteria) and are produced asynchronously as new content is
        ingested.

        Args:
            uuid: UUID of the monitor whose events to retrieve.
            sort_by: Required field used to sort events. Accepts createdAt, updatedAt, or eventDate.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            event_type: Filter for events with this exact event type.
            from_: Filter for events created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for events created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_monitor_events_api(
                uuid,
                sort_by,
                sort_order,
                event_type=event_type,
                from_=from_,
                to=to,
                page=page,
                size=size,
                nulls=nulls,
                request_options=request_options,
            ),
        )

    async def list_monitor_newsletters_api(
        self,
        uuid: UUID,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        title: str | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MonitorNewsletterListResult:
        """List newsletters generated for a monitor. Newsletters bundle a monitor's recent events into a human-readable
        digest and are produced on the monitor's configured schedule.

        Args:
            uuid: UUID of the monitor whose newsletters to retrieve.
            sort_by: Required field used to sort newsletters. Accepts createdAt or updatedAt.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            title: Filter by newsletter title using a case-insensitive partial match.
            from_: Filter for newsletters created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for newsletters created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_monitor_newsletters_api(
                uuid,
                sort_by,
                sort_order,
                title=title,
                from_=from_,
                to=to,
                page=page,
                size=size,
                nulls=nulls,
                request_options=request_options,
            ),
        )

    async def list_monitor_summaries_api(
        self,
        uuid: UUID,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MonitorSummaryListResult:
        """List AI-generated summaries produced for a monitor as matching content is processed.

        Args:
            uuid: UUID of the monitor whose summaries to retrieve.
            sort_by: Required field used to sort summaries. Accepts createdAt or updatedAt.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            from_: Filter for summaries created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for summaries created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_monitor_summaries_api(
                uuid,
                sort_by,
                sort_order,
                from_=from_,
                to=to,
                page=page,
                size=size,
                nulls=nulls,
                request_options=request_options,
            ),
        )

    async def list_monitors_api(
        self,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        uuid: list[UUID] | None = None,
        name: str | None = None,
        status: list[Status2OrStr] | None = None,
        classification_type: list[ClassificationType3OrStr] | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MonitorListResult:
        """List AI monitors for the organization associated with the API key. Excludes archived monitors by default. Use
        the status parameter to filter.

        Args:
            sort_by: Required field used to sort monitors. Accepts createdAt or updatedAt.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            uuid: Filter by one or more monitor UUIDs. Multiple values are combined with OR.
            name: Filter by monitor name using a case-insensitive partial match.
            status: Filter by status: DRAFT, ACTIVE, STOPPED, or ARCHIVED. When omitted, archived monitors are excluded.
            classification_type: Filter by classification type: EVENT, MENTIONS, or TOPIC. Multiple values are combined
                with OR.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_monitors_api(
                sort_by,
                sort_order,
                uuid=uuid,
                name=name,
                status=status,
                classification_type=classification_type,
                page=page,
                size=size,
                nulls=nulls,
                request_options=request_options,
            ),
        )

    async def pause_monitor_api(
        self, uuid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MonitorResult:
        """Pause a monitor, stopping its processing pipeline.

        Args:
            uuid: UUID of the monitor to pause.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.pause_monitor_api(uuid, request_options=request_options))

    async def update_monitor_api(
        self,
        uuid: UUID,
        body: SignalApiUpdateBody | SignalApiUpdateBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MonitorResult:
        """Partially update a monitor. Only provided fields are modified. Use /activate, /pause, or DELETE to change
        monitor status.

        Args:
            uuid: UUID of the monitor to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_monitor_api(uuid, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMonitorsWithRawResponse:
        return self._with_raw_response


class MonitorsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def activate_monitor_api(
        self, uuid: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResult, ActivateMonitorApiErrorBody]:
        """Activate a monitor, starting its processing pipeline.

        Args:
            uuid: UUID of the monitor to activate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/api/monitors/{uuid}/activate"),
            path_params=[param[UUID]("uuid", uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorResult],
            error_mapper=activate_monitor_api_error_mapper,
            request_options=request_options,
        )

    def archive_monitor_api(
        self, uuid: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResult, ArchiveMonitorApiErrorBody]:
        """Archive a monitor. Archived monitors are excluded from list results by default.

        Args:
            uuid: UUID of the monitor to archive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/api/monitors/{uuid}"),
            path_params=[param[UUID]("uuid", uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorResult],
            error_mapper=archive_monitor_api_error_mapper,
            request_options=request_options,
        )

    def create_monitor_api(
        self,
        body: SignalApiCreateBody | SignalApiCreateBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorResult, CreateMonitorApiErrorBody]:
        """Create a new AI monitor. Only AI_SIGNAL type is supported; status is required and accepts ACTIVE or DRAFT.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/api/monitors"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignalApiCreateBody | SignalApiCreateBodyDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorResult],
            error_mapper=create_monitor_api_error_mapper,
            request_options=request_options,
        )

    def get_monitor_api(
        self, uuid: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResult, GetMonitorApiErrorBody]:
        """Retrieve a monitor by UUID for the organization associated with the API key.

        Args:
            uuid: UUID of the monitor to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/monitors/{uuid}"),
            path_params=[param[UUID]("uuid", uuid)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorResult],
            error_mapper=get_monitor_api_error_mapper,
            request_options=request_options,
        )

    def list_monitor_events_api(
        self,
        uuid: UUID,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        event_type: str | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorEventListResult, ListMonitorEventsApiErrorBody]:
        """List structured events emitted by a monitor. Events represent individual matches detected by the monitor
        (e.g. a news article matching the monitor's criteria) and are produced asynchronously as new content is
        ingested.

        Args:
            uuid: UUID of the monitor whose events to retrieve.
            sort_by: Required field used to sort events. Accepts createdAt, updatedAt, or eventDate.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            event_type: Filter for events with this exact event type.
            from_: Filter for events created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for events created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/monitors/{uuid}/events"),
            path_params=[param[UUID]("uuid", uuid)],
            query_params=[
                param[str]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[str | None]("eventType", event_type),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorEventListResult],
            error_mapper=list_monitor_events_api_error_mapper,
            request_options=request_options,
        )

    def list_monitor_newsletters_api(
        self,
        uuid: UUID,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        title: str | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorNewsletterListResult, ListMonitorNewslettersApiErrorBody]:
        """List newsletters generated for a monitor. Newsletters bundle a monitor's recent events into a human-readable
        digest and are produced on the monitor's configured schedule.

        Args:
            uuid: UUID of the monitor whose newsletters to retrieve.
            sort_by: Required field used to sort newsletters. Accepts createdAt or updatedAt.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            title: Filter by newsletter title using a case-insensitive partial match.
            from_: Filter for newsletters created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for newsletters created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/monitors/{uuid}/newsletters"),
            path_params=[param[UUID]("uuid", uuid)],
            query_params=[
                param[str]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[str | None]("title", title),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorNewsletterListResult],
            error_mapper=list_monitor_newsletters_api_error_mapper,
            request_options=request_options,
        )

    def list_monitor_summaries_api(
        self,
        uuid: UUID,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorSummaryListResult, ListMonitorSummariesApiErrorBody]:
        """List AI-generated summaries produced for a monitor as matching content is processed.

        Args:
            uuid: UUID of the monitor whose summaries to retrieve.
            sort_by: Required field used to sort summaries. Accepts createdAt or updatedAt.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            from_: Filter for summaries created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for summaries created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/monitors/{uuid}/summary"),
            path_params=[param[UUID]("uuid", uuid)],
            query_params=[
                param[str]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorSummaryListResult],
            error_mapper=list_monitor_summaries_api_error_mapper,
            request_options=request_options,
        )

    def list_monitors_api(
        self,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        uuid: list[UUID] | None = None,
        name: str | None = None,
        status: list[Status2OrStr] | None = None,
        classification_type: list[ClassificationType3OrStr] | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorListResult, ListMonitorsApiErrorBody]:
        """List AI monitors for the organization associated with the API key. Excludes archived monitors by default. Use
        the status parameter to filter.

        Args:
            sort_by: Required field used to sort monitors. Accepts createdAt or updatedAt.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            uuid: Filter by one or more monitor UUIDs. Multiple values are combined with OR.
            name: Filter by monitor name using a case-insensitive partial match.
            status: Filter by status: DRAFT, ACTIVE, STOPPED, or ARCHIVED. When omitted, archived monitors are excluded.
            classification_type: Filter by classification type: EVENT, MENTIONS, or TOPIC. Multiple values are combined
                with OR.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/monitors"),
            query_params=[
                param[str]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[list[UUID] | None]("uuid", uuid),
                param[str | None]("name", name),
                param[list[Status2OrStr] | None]("status", status),
                param[list[ClassificationType3OrStr] | None]("classificationType", classification_type),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorListResult],
            error_mapper=list_monitors_api_error_mapper,
            request_options=request_options,
        )

    def pause_monitor_api(
        self, uuid: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResult, PauseMonitorApiErrorBody]:
        """Pause a monitor, stopping its processing pipeline.

        Args:
            uuid: UUID of the monitor to pause.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/api/monitors/{uuid}/pause"),
            path_params=[param[UUID]("uuid", uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorResult],
            error_mapper=pause_monitor_api_error_mapper,
            request_options=request_options,
        )

    def update_monitor_api(
        self,
        uuid: UUID,
        body: SignalApiUpdateBody | SignalApiUpdateBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorResult, UpdateMonitorApiErrorBody]:
        """Partially update a monitor. Only provided fields are modified. Use /activate, /pause, or DELETE to change
        monitor status.

        Args:
            uuid: UUID of the monitor to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/api/monitors/{uuid}"),
            path_params=[param[UUID]("uuid", uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignalApiUpdateBody | SignalApiUpdateBodyDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MonitorResult],
            error_mapper=update_monitor_api_error_mapper,
            request_options=request_options,
        )


class AsyncMonitorsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def activate_monitor_api(
        self, uuid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResult, ActivateMonitorApiErrorBody]:
        """Activate a monitor, starting its processing pipeline.

        Args:
            uuid: UUID of the monitor to activate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/api/monitors/{uuid}/activate"),
            path_params=[param[UUID]("uuid", uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorResult],
            error_mapper=activate_monitor_api_error_mapper,
            request_options=request_options,
        )

    async def archive_monitor_api(
        self, uuid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResult, ArchiveMonitorApiErrorBody]:
        """Archive a monitor. Archived monitors are excluded from list results by default.

        Args:
            uuid: UUID of the monitor to archive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/api/monitors/{uuid}"),
            path_params=[param[UUID]("uuid", uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorResult],
            error_mapper=archive_monitor_api_error_mapper,
            request_options=request_options,
        )

    async def create_monitor_api(
        self,
        body: SignalApiCreateBody | SignalApiCreateBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorResult, CreateMonitorApiErrorBody]:
        """Create a new AI monitor. Only AI_SIGNAL type is supported; status is required and accepts ACTIVE or DRAFT.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/api/monitors"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignalApiCreateBody | SignalApiCreateBodyDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorResult],
            error_mapper=create_monitor_api_error_mapper,
            request_options=request_options,
        )

    async def get_monitor_api(
        self, uuid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResult, GetMonitorApiErrorBody]:
        """Retrieve a monitor by UUID for the organization associated with the API key.

        Args:
            uuid: UUID of the monitor to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/monitors/{uuid}"),
            path_params=[param[UUID]("uuid", uuid)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorResult],
            error_mapper=get_monitor_api_error_mapper,
            request_options=request_options,
        )

    async def list_monitor_events_api(
        self,
        uuid: UUID,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        event_type: str | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorEventListResult, ListMonitorEventsApiErrorBody]:
        """List structured events emitted by a monitor. Events represent individual matches detected by the monitor
        (e.g. a news article matching the monitor's criteria) and are produced asynchronously as new content is
        ingested.

        Args:
            uuid: UUID of the monitor whose events to retrieve.
            sort_by: Required field used to sort events. Accepts createdAt, updatedAt, or eventDate.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            event_type: Filter for events with this exact event type.
            from_: Filter for events created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for events created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/monitors/{uuid}/events"),
            path_params=[param[UUID]("uuid", uuid)],
            query_params=[
                param[str]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[str | None]("eventType", event_type),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorEventListResult],
            error_mapper=list_monitor_events_api_error_mapper,
            request_options=request_options,
        )

    async def list_monitor_newsletters_api(
        self,
        uuid: UUID,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        title: str | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorNewsletterListResult, ListMonitorNewslettersApiErrorBody]:
        """List newsletters generated for a monitor. Newsletters bundle a monitor's recent events into a human-readable
        digest and are produced on the monitor's configured schedule.

        Args:
            uuid: UUID of the monitor whose newsletters to retrieve.
            sort_by: Required field used to sort newsletters. Accepts createdAt or updatedAt.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            title: Filter by newsletter title using a case-insensitive partial match.
            from_: Filter for newsletters created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for newsletters created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/monitors/{uuid}/newsletters"),
            path_params=[param[UUID]("uuid", uuid)],
            query_params=[
                param[str]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[str | None]("title", title),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorNewsletterListResult],
            error_mapper=list_monitor_newsletters_api_error_mapper,
            request_options=request_options,
        )

    async def list_monitor_summaries_api(
        self,
        uuid: UUID,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorSummaryListResult, ListMonitorSummariesApiErrorBody]:
        """List AI-generated summaries produced for a monitor as matching content is processed.

        Args:
            uuid: UUID of the monitor whose summaries to retrieve.
            sort_by: Required field used to sort summaries. Accepts createdAt or updatedAt.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            from_: Filter for summaries created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for summaries created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/monitors/{uuid}/summary"),
            path_params=[param[UUID]("uuid", uuid)],
            query_params=[
                param[str]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorSummaryListResult],
            error_mapper=list_monitor_summaries_api_error_mapper,
            request_options=request_options,
        )

    async def list_monitors_api(
        self,
        sort_by: str,
        sort_order: SortOrderOrStr,
        *,
        uuid: list[UUID] | None = None,
        name: str | None = None,
        status: list[Status2OrStr] | None = None,
        classification_type: list[ClassificationType3OrStr] | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorListResult, ListMonitorsApiErrorBody]:
        """List AI monitors for the organization associated with the API key. Excludes archived monitors by default. Use
        the status parameter to filter.

        Args:
            sort_by: Required field used to sort monitors. Accepts createdAt or updatedAt.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            uuid: Filter by one or more monitor UUIDs. Multiple values are combined with OR.
            name: Filter by monitor name using a case-insensitive partial match.
            status: Filter by status: DRAFT, ACTIVE, STOPPED, or ARCHIVED. When omitted, archived monitors are excluded.
            classification_type: Filter by classification type: EVENT, MENTIONS, or TOPIC. Multiple values are combined
                with OR.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/monitors"),
            query_params=[
                param[str]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[list[UUID] | None]("uuid", uuid),
                param[str | None]("name", name),
                param[list[Status2OrStr] | None]("status", status),
                param[list[ClassificationType3OrStr] | None]("classificationType", classification_type),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorListResult],
            error_mapper=list_monitors_api_error_mapper,
            request_options=request_options,
        )

    async def pause_monitor_api(
        self, uuid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResult, PauseMonitorApiErrorBody]:
        """Pause a monitor, stopping its processing pipeline.

        Args:
            uuid: UUID of the monitor to pause.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/api/monitors/{uuid}/pause"),
            path_params=[param[UUID]("uuid", uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorResult],
            error_mapper=pause_monitor_api_error_mapper,
            request_options=request_options,
        )

    async def update_monitor_api(
        self,
        uuid: UUID,
        body: SignalApiUpdateBody | SignalApiUpdateBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorResult, UpdateMonitorApiErrorBody]:
        """Partially update a monitor. Only provided fields are modified. Use /activate, /pause, or DELETE to change
        monitor status.

        Args:
            uuid: UUID of the monitor to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/api/monitors/{uuid}"),
            path_params=[param[UUID]("uuid", uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignalApiUpdateBody | SignalApiUpdateBodyDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MonitorResult],
            error_mapper=update_monitor_api_error_mapper,
            request_options=request_options,
        )
