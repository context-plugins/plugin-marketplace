from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.get_all_audit_logs_error import GetAllAuditLogsErrorBody, get_all_audit_logs_error_mapper
from ..models.audit_log_list import AuditLogList
from ..server.server import Server


class AuditLogs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AuditLogsWithRawResponse(client, server, auth)

    def get_all_audit_logs(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AuditLogList:
        """Retrieves all audit log entries for administrative actions taken within the project such as creating,
        updating, or deleting automations and configuration changes.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of audit log entries.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_all_audit_logs(organization_uid, project_uid, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AuditLogsWithRawResponse:
        return self._with_raw_response


class AsyncAuditLogs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAuditLogsWithRawResponse(client, server, auth)

    async def get_all_audit_logs(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AuditLogList:
        """Retrieves all audit log entries for administrative actions taken within the project such as creating,
        updating, or deleting automations and configuration changes.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of audit log entries.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_audit_logs(
                organization_uid, project_uid, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAuditLogsWithRawResponse:
        return self._with_raw_response


class AuditLogsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_all_audit_logs(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AuditLogList, GetAllAuditLogsErrorBody]:
        """Retrieves all audit log entries for administrative actions taken within the project such as creating,
        updating, or deleting automations and configuration changes.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/audit-logs"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[AuditLogList],
            error_mapper=get_all_audit_logs_error_mapper,
            request_options=request_options,
        )


class AsyncAuditLogsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_all_audit_logs(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AuditLogList, GetAllAuditLogsErrorBody]:
        """Retrieves all audit log entries for administrative actions taken within the project such as creating,
        updating, or deleting automations and configuration changes.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/audit-logs"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[AuditLogList],
            error_mapper=get_all_audit_logs_error_mapper,
            request_options=request_options,
        )
