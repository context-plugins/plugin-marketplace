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
from ..errors.create_state_machine_alias_error import (
    CreateStateMachineAliasErrorBody,
    create_state_machine_alias_error_mapper,
)
from ..models.enums.x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_createstat_api import (
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiOrStr,
)
from ..server.server import Server


class AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatWithRawResponse(
            client, server, auth
        )

    def create_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates an alias for a state machine that points to one or two versions of the same state machine. You can
        set your application to call StartExecution with an alias and update the version the alias uses without changing
        the client's code. You can also map an alias to split StartExecution requests between two versions of a state
        machine. To do this, add a second RoutingConfig object in the routingConfiguration parameter. You must also
        specify the percentage of execution run requests each version should receive in both RoutingConfig objects. Step
        Functions randomly chooses which version runs a given execution based on the percentage you specify. To create
        an alias that points to a single version, specify a single RoutingConfig object with a weight set to 100. You
        can create up to 100 aliases for each state machine. You must delete unused aliases using the
        DeleteStateMachineAlias API action. CreateStateMachineAlias is an idempotent API. Step Functions bases the
        idempotency check on the stateMachineArn, description, name, and routingConfiguration parameters. Requests that
        contain the same values for these parameters return a successful idempotent response without creating a
        duplicate r

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; InvalidName; StateMachineDeleting; ValidationException
                ResourceNotFound ServiceQuotaExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_state_machine_alias(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatWithRawResponse:
        return self._with_raw_response


class AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatWithRawResponse(
            client, server, auth
        )

    async def create_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates an alias for a state machine that points to one or two versions of the same state machine. You can
        set your application to call StartExecution with an alias and update the version the alias uses without changing
        the client's code. You can also map an alias to split StartExecution requests between two versions of a state
        machine. To do this, add a second RoutingConfig object in the routingConfiguration parameter. You must also
        specify the percentage of execution run requests each version should receive in both RoutingConfig objects. Step
        Functions randomly chooses which version runs a given execution based on the percentage you specify. To create
        an alias that points to a single version, specify a single RoutingConfig object with a weight set to 100. You
        can create up to 100 aliases for each state machine. You must delete unused aliases using the
        DeleteStateMachineAlias API action. CreateStateMachineAlias is an idempotent API. Step Functions bases the
        idempotency check on the stateMachineArn, description, name, and routingConfiguration parameters. Requests that
        contain the same values for these parameters return a successful idempotent response without creating a
        duplicate r

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; InvalidName; StateMachineDeleting; ValidationException
                ResourceNotFound ServiceQuotaExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_state_machine_alias(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatWithRawResponse:
        return self._with_raw_response


class AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatWithRawResponse(
    SecuredRawResponse[RawClient, Server, AuthSchemes]
):
    def create_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateStateMachineAliasErrorBody]:
        """Creates an alias for a state machine that points to one or two versions of the same state machine. You can
        set your application to call StartExecution with an alias and update the version the alias uses without changing
        the client's code. You can also map an alias to split StartExecution requests between two versions of a state
        machine. To do this, add a second RoutingConfig object in the routingConfiguration parameter. You must also
        specify the percentage of execution run requests each version should receive in both RoutingConfig objects. Step
        Functions randomly chooses which version runs a given execution based on the percentage you specify. To create
        an alias that points to a single version, specify a single RoutingConfig object with a weight set to 100. You
        can create up to 100 aliases for each state machine. You must delete unused aliases using the
        DeleteStateMachineAlias API action. CreateStateMachineAlias is an idempotent API. Step Functions bases the
        idempotency check on the stateMachineArn, description, name, and routingConfiguration parameters. Requests that
        contain the same values for these parameters return a successful idempotent response without creating a
        duplicate r

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateStateMachineAlias"),
            headers=[
                param[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_state_machine_alias_error_mapper,
            request_options=request_options,
        )


class AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatWithRawResponse(
    SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]
):
    async def create_state_machine_alias(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateStateMachineAliasErrorBody]:
        """Creates an alias for a state machine that points to one or two versions of the same state machine. You can
        set your application to call StartExecution with an alias and update the version the alias uses without changing
        the client's code. You can also map an alias to split StartExecution requests between two versions of a state
        machine. To do this, add a second RoutingConfig object in the routingConfiguration parameter. You must also
        specify the percentage of execution run requests each version should receive in both RoutingConfig objects. Step
        Functions randomly chooses which version runs a given execution based on the percentage you specify. To create
        an alias that points to a single version, specify a single RoutingConfig object with a weight set to 100. You
        can create up to 100 aliases for each state machine. You must delete unused aliases using the
        DeleteStateMachineAlias API action. CreateStateMachineAlias is an idempotent API. Step Functions bases the
        idempotency check on the stateMachineArn, description, name, and routingConfiguration parameters. Requests that
        contain the same values for these parameters return a successful idempotent response without creating a
        duplicate r

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateStateMachineAlias"),
            headers=[
                param[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_state_machine_alias_error_mapper,
            request_options=request_options,
        )
