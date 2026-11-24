from __future__ import annotations

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
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_organization_audit_sources_error import (
    GetOrganizationAuditSourcesErrorBody,
    get_organization_audit_sources_error_mapper,
)
from ..errors.query_organization_audit_events_error import (
    QueryOrganizationAuditEventsErrorBody,
    query_organization_audit_events_error_mapper,
)
from ..errors.query_tenant_audit_events_error import (
    QueryTenantAuditEventsErrorBody,
    query_tenant_audit_events_error_mapper,
)
from ..models.audit_event_collection import AuditEventCollection
from ..models.audit_sources import AuditSources
from ..server.server import Server


class AuditLogs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AuditLogsWithRawResponse(client, server, auth)

    def get_organization_audit_sources(
        self, organization_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AuditSources:
        """Retrieves metadata about available audit event sources at the organization level. Returns the list of
        services that generate audit events along with available event types and categories for use as filters in the
        query events endpoint. Requires the PM.Audit or PM.Audit.Read OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Available organization audit event sources

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_organization_audit_sources(organization_name, request_options=request_options)
        )

    def query_organization_audit_events(
        self,
        organization_name: str,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        source: list[str] | None = None,
        max_count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AuditEventCollection:
        """Retrieves audit events at the organization level filtered by time range, event source, event type, user, and
        other criteria. Returns a paginated list of audit events with actor information, event details, and status.
        Requires the PM.Audit or PM.Audit.Read OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            from_: Start of the audit event time range (ISO 8601 datetime)
            to: End of the audit event time range (ISO 8601 datetime)
            source: Filter by event source service name
            max_count: Maximum number of audit events to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Audit events matching the query criteria

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.query_organization_audit_events(
                organization_name,
                from_=from_,
                to=to,
                source=source,
                max_count=max_count,
                request_options=request_options,
            ),
        )

    def query_tenant_audit_events(
        self,
        organization_name: str,
        tenant_name: str,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        source: list[str] | None = None,
        max_count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AuditEventCollection:
        """Retrieves audit events scoped to a specific tenant, filtered by time range, event source, event type, user,
        and other criteria. Tenant-level audit events cover actions within Orchestrator, Document Understanding, and
        other tenant-scoped services. Requires the PM.Audit or PM.Audit.Read OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            tenant_name: The name of the UiPath tenant
            from_: Start of the audit event time range (ISO 8601 datetime)
            to: End of the audit event time range (ISO 8601 datetime)
            source: Filter by event source service name
            max_count: Maximum number of audit events to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Tenant-level audit events matching the query criteria

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.query_tenant_audit_events(
                organization_name,
                tenant_name,
                from_=from_,
                to=to,
                source=source,
                max_count=max_count,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AuditLogsWithRawResponse:
        return self._with_raw_response


class AsyncAuditLogs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAuditLogsWithRawResponse(client, server, auth)

    async def get_organization_audit_sources(
        self, organization_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AuditSources:
        """Retrieves metadata about available audit event sources at the organization level. Returns the list of
        services that generate audit events along with available event types and categories for use as filters in the
        query events endpoint. Requires the PM.Audit or PM.Audit.Read OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Available organization audit event sources

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_organization_audit_sources(
                organization_name, request_options=request_options
            ),
        )

    async def query_organization_audit_events(
        self,
        organization_name: str,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        source: list[str] | None = None,
        max_count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AuditEventCollection:
        """Retrieves audit events at the organization level filtered by time range, event source, event type, user, and
        other criteria. Returns a paginated list of audit events with actor information, event details, and status.
        Requires the PM.Audit or PM.Audit.Read OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            from_: Start of the audit event time range (ISO 8601 datetime)
            to: End of the audit event time range (ISO 8601 datetime)
            source: Filter by event source service name
            max_count: Maximum number of audit events to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Audit events matching the query criteria

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.query_organization_audit_events(
                organization_name,
                from_=from_,
                to=to,
                source=source,
                max_count=max_count,
                request_options=request_options,
            ),
        )

    async def query_tenant_audit_events(
        self,
        organization_name: str,
        tenant_name: str,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        source: list[str] | None = None,
        max_count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AuditEventCollection:
        """Retrieves audit events scoped to a specific tenant, filtered by time range, event source, event type, user,
        and other criteria. Tenant-level audit events cover actions within Orchestrator, Document Understanding, and
        other tenant-scoped services. Requires the PM.Audit or PM.Audit.Read OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            tenant_name: The name of the UiPath tenant
            from_: Start of the audit event time range (ISO 8601 datetime)
            to: End of the audit event time range (ISO 8601 datetime)
            source: Filter by event source service name
            max_count: Maximum number of audit events to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Tenant-level audit events matching the query criteria

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.query_tenant_audit_events(
                organization_name,
                tenant_name,
                from_=from_,
                to=to,
                source=source,
                max_count=max_count,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAuditLogsWithRawResponse:
        return self._with_raw_response


class AuditLogsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_organization_audit_sources(
        self, organization_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AuditSources, GetOrganizationAuditSourcesErrorBody]:
        """Retrieves metadata about available audit event sources at the organization level. Returns the list of
        services that generate audit events along with available event types and categories for use as filters in the
        query events endpoint. Requires the PM.Audit or PM.Audit.Read OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/orgaudit_/api/query/sources"
            ),
            path_params=[param[str]("organizationName", organization_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AuditSources],
            error_mapper=get_organization_audit_sources_error_mapper,
            request_options=request_options,
        )

    def query_organization_audit_events(
        self,
        organization_name: str,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        source: list[str] | None = None,
        max_count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AuditEventCollection, QueryOrganizationAuditEventsErrorBody]:
        """Retrieves audit events at the organization level filtered by time range, event source, event type, user, and
        other criteria. Returns a paginated list of audit events with actor information, event details, and status.
        Requires the PM.Audit or PM.Audit.Read OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            from_: Start of the audit event time range (ISO 8601 datetime)
            to: End of the audit event time range (ISO 8601 datetime)
            source: Filter by event source service name
            max_count: Maximum number of audit events to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/orgaudit_/api/query/events"
            ),
            path_params=[param[str]("organizationName", organization_name)],
            query_params=[
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[list[str] | None]("source", source),
                param[int | None]("maxCount", max_count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AuditEventCollection],
            error_mapper=query_organization_audit_events_error_mapper,
            request_options=request_options,
        )

    def query_tenant_audit_events(
        self,
        organization_name: str,
        tenant_name: str,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        source: list[str] | None = None,
        max_count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AuditEventCollection, QueryTenantAuditEventsErrorBody]:
        """Retrieves audit events scoped to a specific tenant, filtered by time range, event source, event type, user,
        and other criteria. Tenant-level audit events cover actions within Orchestrator, Document Understanding, and
        other tenant-scoped services. Requires the PM.Audit or PM.Audit.Read OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            tenant_name: The name of the UiPath tenant
            from_: Start of the audit event time range (ISO 8601 datetime)
            to: End of the audit event time range (ISO 8601 datetime)
            source: Filter by event source service name
            max_count: Maximum number of audit events to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/{tenantName}/tenantaudit_/api/query/events"
            ),
            path_params=[param[str]("organizationName", organization_name), param[str]("tenantName", tenant_name)],
            query_params=[
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[list[str] | None]("source", source),
                param[int | None]("maxCount", max_count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AuditEventCollection],
            error_mapper=query_tenant_audit_events_error_mapper,
            request_options=request_options,
        )


class AsyncAuditLogsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_organization_audit_sources(
        self, organization_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AuditSources, GetOrganizationAuditSourcesErrorBody]:
        """Retrieves metadata about available audit event sources at the organization level. Returns the list of
        services that generate audit events along with available event types and categories for use as filters in the
        query events endpoint. Requires the PM.Audit or PM.Audit.Read OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/orgaudit_/api/query/sources"
            ),
            path_params=[param[str]("organizationName", organization_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AuditSources],
            error_mapper=get_organization_audit_sources_error_mapper,
            request_options=request_options,
        )

    async def query_organization_audit_events(
        self,
        organization_name: str,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        source: list[str] | None = None,
        max_count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AuditEventCollection, QueryOrganizationAuditEventsErrorBody]:
        """Retrieves audit events at the organization level filtered by time range, event source, event type, user, and
        other criteria. Returns a paginated list of audit events with actor information, event details, and status.
        Requires the PM.Audit or PM.Audit.Read OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            from_: Start of the audit event time range (ISO 8601 datetime)
            to: End of the audit event time range (ISO 8601 datetime)
            source: Filter by event source service name
            max_count: Maximum number of audit events to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/orgaudit_/api/query/events"
            ),
            path_params=[param[str]("organizationName", organization_name)],
            query_params=[
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[list[str] | None]("source", source),
                param[int | None]("maxCount", max_count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AuditEventCollection],
            error_mapper=query_organization_audit_events_error_mapper,
            request_options=request_options,
        )

    async def query_tenant_audit_events(
        self,
        organization_name: str,
        tenant_name: str,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        source: list[str] | None = None,
        max_count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AuditEventCollection, QueryTenantAuditEventsErrorBody]:
        """Retrieves audit events scoped to a specific tenant, filtered by time range, event source, event type, user,
        and other criteria. Tenant-level audit events cover actions within Orchestrator, Document Understanding, and
        other tenant-scoped services. Requires the PM.Audit or PM.Audit.Read OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            tenant_name: The name of the UiPath tenant
            from_: Start of the audit event time range (ISO 8601 datetime)
            to: End of the audit event time range (ISO 8601 datetime)
            source: Filter by event source service name
            max_count: Maximum number of audit events to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/{tenantName}/tenantaudit_/api/query/events"
            ),
            path_params=[param[str]("organizationName", organization_name), param[str]("tenantName", tenant_name)],
            query_params=[
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[list[str] | None]("source", source),
                param[int | None]("maxCount", max_count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AuditEventCollection],
            error_mapper=query_tenant_audit_events_error_mapper,
            request_options=request_options,
        )
