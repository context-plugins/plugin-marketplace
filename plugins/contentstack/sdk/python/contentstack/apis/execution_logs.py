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
from ..errors.get_all_execution_logs_error import GetAllExecutionLogsErrorBody, get_all_execution_logs_error_mapper
from ..errors.get_execution_log_error import GetExecutionLogErrorBody, get_execution_log_error_mapper
from ..models.execution_log import ExecutionLog
from ..models.execution_log_list import ExecutionLogList
from ..server.server import Server


class ExecutionLogs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExecutionLogsWithRawResponse(client, server, auth)

    def get_all_execution_logs(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ExecutionLogList:
        """Retrieves a list of execution log entries for all automations in the project, showing each run with its
        trigger context, status, and completion time.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of execution log entries.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_all_execution_logs(
                organization_uid, project_uid, request_options=request_options
            ),
        )

    def get_execution_log(
        self,
        organization_uid: str,
        project_uid: str,
        execution_uid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExecutionLog:
        """Retrieves the full details of a specific automation execution log entry, including step-by-step results and
        any error messages encountered.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            execution_uid: The unique identifier of the execution log entry.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested execution log entry.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_execution_log(
                organization_uid, project_uid, execution_uid, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ExecutionLogsWithRawResponse:
        return self._with_raw_response


class AsyncExecutionLogs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExecutionLogsWithRawResponse(client, server, auth)

    async def get_all_execution_logs(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ExecutionLogList:
        """Retrieves a list of execution log entries for all automations in the project, showing each run with its
        trigger context, status, and completion time.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of execution log entries.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_execution_logs(
                organization_uid, project_uid, request_options=request_options
            ),
        )

    async def get_execution_log(
        self,
        organization_uid: str,
        project_uid: str,
        execution_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExecutionLog:
        """Retrieves the full details of a specific automation execution log entry, including step-by-step results and
        any error messages encountered.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            execution_uid: The unique identifier of the execution log entry.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested execution log entry.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_execution_log(
                organization_uid, project_uid, execution_uid, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncExecutionLogsWithRawResponse:
        return self._with_raw_response


class ExecutionLogsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_all_execution_logs(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ExecutionLogList, GetAllExecutionLogsErrorBody]:
        """Retrieves a list of execution log entries for all automations in the project, showing each run with its
        trigger context, status, and completion time.

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
                "/v1/organizations/{organization_uid}/projects/{project_uid}/executions"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[ExecutionLogList],
            error_mapper=get_all_execution_logs_error_mapper,
            request_options=request_options,
        )

    def get_execution_log(
        self,
        organization_uid: str,
        project_uid: str,
        execution_uid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExecutionLog, GetExecutionLogErrorBody]:
        """Retrieves the full details of a specific automation execution log entry, including step-by-step results and
        any error messages encountered.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            execution_uid: The unique identifier of the execution log entry.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/executions/{execution_uid}"
            ),
            path_params=[
                param[str]("organization_uid", organization_uid),
                param[str]("project_uid", project_uid),
                param[str]("execution_uid", execution_uid),
            ],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[ExecutionLog],
            error_mapper=get_execution_log_error_mapper,
            request_options=request_options,
        )


class AsyncExecutionLogsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_all_execution_logs(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ExecutionLogList, GetAllExecutionLogsErrorBody]:
        """Retrieves a list of execution log entries for all automations in the project, showing each run with its
        trigger context, status, and completion time.

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
                "/v1/organizations/{organization_uid}/projects/{project_uid}/executions"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[ExecutionLogList],
            error_mapper=get_all_execution_logs_error_mapper,
            request_options=request_options,
        )

    async def get_execution_log(
        self,
        organization_uid: str,
        project_uid: str,
        execution_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExecutionLog, GetExecutionLogErrorBody]:
        """Retrieves the full details of a specific automation execution log entry, including step-by-step results and
        any error messages encountered.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            execution_uid: The unique identifier of the execution log entry.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/executions/{execution_uid}"
            ),
            path_params=[
                param[str]("organization_uid", organization_uid),
                param[str]("project_uid", project_uid),
                param[str]("execution_uid", execution_uid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[ExecutionLog],
            error_mapper=get_execution_log_error_mapper,
            request_options=request_options,
        )
