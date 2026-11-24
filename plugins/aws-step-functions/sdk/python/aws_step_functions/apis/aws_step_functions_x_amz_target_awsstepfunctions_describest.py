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
from ..errors.describe_state_machine_alias_error import (
    DescribeStateMachineAliasErrorBody,
    describe_state_machine_alias_error_mapper,
)
from ..models.enums.x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_describest_api import (
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiOrStr,
)
from ..server.server import Server


class AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestWithRawResponse(
            client, server, auth
        )

    def describe_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns details about a state machine alias. Related operations: CreateStateMachineAlias
        ListStateMachineAliases UpdateStateMachineAlias DeleteStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; ValidationException ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_state_machine_alias(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestWithRawResponse:
        return self._with_raw_response


class AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestWithRawResponse(
            client, server, auth
        )

    async def describe_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns details about a state machine alias. Related operations: CreateStateMachineAlias
        ListStateMachineAliases UpdateStateMachineAlias DeleteStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; ValidationException ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_state_machine_alias(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestWithRawResponse:
        return self._with_raw_response


class AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestWithRawResponse(
    SecuredRawResponse[RawClient, Server, AuthSchemes]
):
    def describe_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeStateMachineAliasErrorBody]:
        """Returns details about a state machine alias. Related operations: CreateStateMachineAlias
        ListStateMachineAliases UpdateStateMachineAlias DeleteStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeStateMachineAlias"),
            headers=[
                param[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_state_machine_alias_error_mapper,
            request_options=request_options,
        )


class AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestWithRawResponse(
    SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]
):
    async def describe_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeStateMachineAliasErrorBody]:
        """Returns details about a state machine alias. Related operations: CreateStateMachineAlias
        ListStateMachineAliases UpdateStateMachineAlias DeleteStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeStateMachineAlias"),
            headers=[
                param[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_state_machine_alias_error_mapper,
            request_options=request_options,
        )
