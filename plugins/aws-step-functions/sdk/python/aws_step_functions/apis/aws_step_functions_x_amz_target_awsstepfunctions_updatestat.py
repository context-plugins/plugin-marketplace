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
from ..errors.update_state_machine_alias_error import (
    UpdateStateMachineAliasErrorBody,
    update_state_machine_alias_error_mapper,
)
from ..models.enums.x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_updatestat_api import (
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApiOrStr,
)
from ..server.server import Server


class AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatWithRawResponse(
            client, server, auth
        )

    def update_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the configuration of an existing state machine alias by modifying its description or
        routingConfiguration. You must specify at least one of the description or routingConfiguration parameters to
        update a state machine alias. UpdateStateMachineAlias is an idempotent API. Step Functions bases the idempotency
        check on the stateMachineAliasArn, description, and routingConfiguration parameters. Requests with the same
        parameters return an idempotent response. This operation is eventually consistent. All StartExecution requests
        made within a few seconds use the latest alias configuration. Executions started immediately after calling
        UpdateStateMachineAlias may use the previous routing configuration. Related operations: CreateStateMachineAlias
        DescribeStateMachineAlias ListStateMachineAliases DeleteStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; StateMachineDeleting; ValidationException ResourceNotFound ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.update_state_machine_alias(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatWithRawResponse:
        return self._with_raw_response


class AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatWithRawResponse(
            client, server, auth
        )

    async def update_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the configuration of an existing state machine alias by modifying its description or
        routingConfiguration. You must specify at least one of the description or routingConfiguration parameters to
        update a state machine alias. UpdateStateMachineAlias is an idempotent API. Step Functions bases the idempotency
        check on the stateMachineAliasArn, description, and routingConfiguration parameters. Requests with the same
        parameters return an idempotent response. This operation is eventually consistent. All StartExecution requests
        made within a few seconds use the latest alias configuration. Executions started immediately after calling
        UpdateStateMachineAlias may use the previous routing configuration. Related operations: CreateStateMachineAlias
        DescribeStateMachineAlias ListStateMachineAliases DeleteStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; StateMachineDeleting; ValidationException ResourceNotFound ``error``
                is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_state_machine_alias(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatWithRawResponse:
        return self._with_raw_response


class AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatWithRawResponse(
    SecuredRawResponse[RawClient, Server, AuthSchemes]
):
    def update_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateStateMachineAliasErrorBody]:
        """Updates the configuration of an existing state machine alias by modifying its description or
        routingConfiguration. You must specify at least one of the description or routingConfiguration parameters to
        update a state machine alias. UpdateStateMachineAlias is an idempotent API. Step Functions bases the idempotency
        check on the stateMachineAliasArn, description, and routingConfiguration parameters. Requests with the same
        parameters return an idempotent response. This operation is eventually consistent. All StartExecution requests
        made within a few seconds use the latest alias configuration. Executions started immediately after calling
        UpdateStateMachineAlias may use the previous routing configuration. Related operations: CreateStateMachineAlias
        DescribeStateMachineAlias ListStateMachineAliases DeleteStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateStateMachineAlias"),
            headers=[
                param[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_state_machine_alias_error_mapper,
            request_options=request_options,
        )


class AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatWithRawResponse(
    SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]
):
    async def update_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateStateMachineAliasErrorBody]:
        """Updates the configuration of an existing state machine alias by modifying its description or
        routingConfiguration. You must specify at least one of the description or routingConfiguration parameters to
        update a state machine alias. UpdateStateMachineAlias is an idempotent API. Step Functions bases the idempotency
        check on the stateMachineAliasArn, description, and routingConfiguration parameters. Requests with the same
        parameters return an idempotent response. This operation is eventually consistent. All StartExecution requests
        made within a few seconds use the latest alias configuration. Executions started immediately after calling
        UpdateStateMachineAlias may use the previous routing configuration. Related operations: CreateStateMachineAlias
        DescribeStateMachineAlias ListStateMachineAliases DeleteStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateStateMachineAlias"),
            headers=[
                param[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_state_machine_alias_error_mapper,
            request_options=request_options,
        )
