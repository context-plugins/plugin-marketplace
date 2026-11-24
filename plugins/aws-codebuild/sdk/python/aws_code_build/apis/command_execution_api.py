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
    empty_response,
    param,
    unwrap,
)
from ..errors.batch_get_command_executions_error import (
    BatchGetCommandExecutionsErrorBody,
    batch_get_command_executions_error_mapper,
)
from ..errors.list_command_executions_for_sandbox_error import (
    ListCommandExecutionsForSandboxErrorBody,
    list_command_executions_for_sandbox_error_mapper,
)
from ..errors.start_command_execution_error import StartCommandExecutionErrorBody, start_command_execution_error_mapper
from ..models.enums.x_amz_target1_aws_code_build_command_execution_api import (
    XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr,
)
from ..models.enums.x_amz_target2_aws_code_build_command_execution_api import (
    XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr,
)
from ..models.enums.x_amz_target_aws_code_build_command_execution_api import (
    XAmzTargetAwsCodeBuildCommandExecutionApiOrStr,
)
from ..server.server import Server


class CommandExecutionApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CommandExecutionApiWithRawResponse(client, server, auth)

    def batch_get_command_executions(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildCommandExecutionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about the command executions.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_get_command_executions(x_amz_target, request_options=request_options)
        )

    def list_command_executions_for_sandbox(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of command executions for a sandbox.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_command_executions_for_sandbox(x_amz_target, request_options=request_options)
        )

    def start_command_execution(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Starts a command execution.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_command_execution(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> CommandExecutionApiWithRawResponse:
        return self._with_raw_response


class AsyncCommandExecutionApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCommandExecutionApiWithRawResponse(client, server, auth)

    async def batch_get_command_executions(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildCommandExecutionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about the command executions.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_get_command_executions(x_amz_target, request_options=request_options)
        )

    async def list_command_executions_for_sandbox(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of command executions for a sandbox.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_command_executions_for_sandbox(
                x_amz_target, request_options=request_options
            ),
        )

    async def start_command_execution(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Starts a command execution.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_command_execution(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCommandExecutionApiWithRawResponse:
        return self._with_raw_response


class CommandExecutionApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch_get_command_executions(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildCommandExecutionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchGetCommandExecutionsErrorBody]:
        """Gets information about the command executions.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetCommandExecutions"),
            headers=[
                param[XAmzTargetAwsCodeBuildCommandExecutionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_get_command_executions_error_mapper,
            request_options=request_options,
        )

    def list_command_executions_for_sandbox(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListCommandExecutionsForSandboxErrorBody]:
        """Gets a list of command executions for a sandbox.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCommandExecutionsForSandbox"),
            headers=[
                param[XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_command_executions_for_sandbox_error_mapper,
            request_options=request_options,
        )

    def start_command_execution(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartCommandExecutionErrorBody]:
        """Starts a command execution.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartCommandExecution"),
            headers=[
                param[XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_command_execution_error_mapper,
            request_options=request_options,
        )


class AsyncCommandExecutionApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch_get_command_executions(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildCommandExecutionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchGetCommandExecutionsErrorBody]:
        """Gets information about the command executions.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetCommandExecutions"),
            headers=[
                param[XAmzTargetAwsCodeBuildCommandExecutionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_get_command_executions_error_mapper,
            request_options=request_options,
        )

    async def list_command_executions_for_sandbox(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListCommandExecutionsForSandboxErrorBody]:
        """Gets a list of command executions for a sandbox.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCommandExecutionsForSandbox"),
            headers=[
                param[XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_command_executions_for_sandbox_error_mapper,
            request_options=request_options,
        )

    async def start_command_execution(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartCommandExecutionErrorBody]:
        """Starts a command execution.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartCommandExecution"),
            headers=[
                param[XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_command_execution_error_mapper,
            request_options=request_options,
        )
