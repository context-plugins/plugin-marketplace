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
from ..errors.delete_state_machine_alias_error import (
    DeleteStateMachineAliasErrorBody,
    delete_state_machine_alias_error_mapper,
)
from ..errors.delete_state_machine_version_error import (
    DeleteStateMachineVersionErrorBody,
    delete_state_machine_version_error_mapper,
)
from ..models.enums.x_amz_target1_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_deletestat_api import (
    XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr,
)
from ..models.enums.x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_deletestat_api import (
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr,
)
from ..server.server import Server


class AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatWithRawResponse(
            client, server, auth
        )

    def delete_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a state machine alias. After you delete a state machine alias, you can't use it to start executions.
        When you delete a state machine alias, Step Functions doesn't delete the state machine versions that alias
        references. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases
        UpdateStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; ValidationException ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_state_machine_alias(x_amz_target, request_options=request_options))

    def delete_state_machine_version(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a state machine version. After you delete a version, you can't call StartExecution using that
        version's ARN or use the version with a state machine alias. Deleting a state machine version won't terminate
        its in-progress executions. You can't delete a state machine version currently referenced by one or more
        aliases. Before you delete a version, you must either delete the aliases or update them to point to another
        state machine version. Related operations: PublishStateMachineVersion ListStateMachineVersions

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; ValidationException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_state_machine_version(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatWithRawResponse:
        return self._with_raw_response


class AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatWithRawResponse(
            client, server, auth
        )

    async def delete_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a state machine alias. After you delete a state machine alias, you can't use it to start executions.
        When you delete a state machine alias, Step Functions doesn't delete the state machine versions that alias
        references. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases
        UpdateStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; ValidationException ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_state_machine_alias(x_amz_target, request_options=request_options)
        )

    async def delete_state_machine_version(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a state machine version. After you delete a version, you can't call StartExecution using that
        version's ARN or use the version with a state machine alias. Deleting a state machine version won't terminate
        its in-progress executions. You can't delete a state machine version currently referenced by one or more
        aliases. Before you delete a version, you must either delete the aliases or update them to point to another
        state machine version. Related operations: PublishStateMachineVersion ListStateMachineVersions

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_state_machine_version(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatWithRawResponse:
        return self._with_raw_response


class AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatWithRawResponse(
    SecuredRawResponse[RawClient, Server, AuthSchemes]
):
    def delete_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteStateMachineAliasErrorBody]:
        """Deletes a state machine alias. After you delete a state machine alias, you can't use it to start executions.
        When you delete a state machine alias, Step Functions doesn't delete the state machine versions that alias
        references. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases
        UpdateStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteStateMachineAlias"),
            headers=[
                param[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_state_machine_alias_error_mapper,
            request_options=request_options,
        )

    def delete_state_machine_version(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteStateMachineVersionErrorBody]:
        """Deletes a state machine version. After you delete a version, you can't call StartExecution using that
        version's ARN or use the version with a state machine alias. Deleting a state machine version won't terminate
        its in-progress executions. You can't delete a state machine version currently referenced by one or more
        aliases. Before you delete a version, you must either delete the aliases or update them to point to another
        state machine version. Related operations: PublishStateMachineVersion ListStateMachineVersions

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteStateMachineVersion"),
            headers=[
                param[XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_state_machine_version_error_mapper,
            request_options=request_options,
        )


class AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatWithRawResponse(
    SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]
):
    async def delete_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteStateMachineAliasErrorBody]:
        """Deletes a state machine alias. After you delete a state machine alias, you can't use it to start executions.
        When you delete a state machine alias, Step Functions doesn't delete the state machine versions that alias
        references. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases
        UpdateStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteStateMachineAlias"),
            headers=[
                param[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_state_machine_alias_error_mapper,
            request_options=request_options,
        )

    async def delete_state_machine_version(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteStateMachineVersionErrorBody]:
        """Deletes a state machine version. After you delete a version, you can't call StartExecution using that
        version's ARN or use the version with a state machine alias. Deleting a state machine version won't terminate
        its in-progress executions. You can't delete a state machine version currently referenced by one or more
        aliases. Before you delete a version, you must either delete the aliases or update them to point to another
        state machine version. Related operations: PublishStateMachineVersion ListStateMachineVersions

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteStateMachineVersion"),
            headers=[
                param[XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_state_machine_version_error_mapper,
            request_options=request_options,
        )
