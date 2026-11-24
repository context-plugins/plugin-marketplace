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
from ..errors.publish_state_machine_version_error import (
    PublishStateMachineVersionErrorBody,
    publish_state_machine_version_error_mapper,
)
from ..models.enums.x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_publishsta_api import (
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr,
)
from ..server.server import Server


class AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaWithRawResponse(
            client, server, auth
        )

    def publish_state_machine_version(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a version from the current revision of a state machine. Use versions to create immutable snapshots of
        your state machine. You can start executions from versions either directly or with an alias. To create an alias,
        use CreateStateMachineAlias. You can publish up to 1000 versions for each state machine. You must manually
        delete unused versions using the DeleteStateMachineVersion API action. PublishStateMachineVersion is an
        idempotent API. It doesn't create a duplicate state machine version if it already exists for the current
        revision. Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn, name, and
        revisionId parameters. Requests with the same parameters return a successful idempotent response. If you don't
        specify a revisionId, Step Functions checks for a previously published version of the state machine's current
        revision. Related operations: DeleteStateMachineVersion ListStateMachineVersions

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; StateMachineDeleting; StateMachineDoesNotExist; ValidationException
                ServiceQuotaExceededException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.publish_state_machine_version(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaWithRawResponse:
        return self._with_raw_response


class AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaWithRawResponse(
            client, server, auth
        )

    async def publish_state_machine_version(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a version from the current revision of a state machine. Use versions to create immutable snapshots of
        your state machine. You can start executions from versions either directly or with an alias. To create an alias,
        use CreateStateMachineAlias. You can publish up to 1000 versions for each state machine. You must manually
        delete unused versions using the DeleteStateMachineVersion API action. PublishStateMachineVersion is an
        idempotent API. It doesn't create a duplicate state machine version if it already exists for the current
        revision. Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn, name, and
        revisionId parameters. Requests with the same parameters return a successful idempotent response. If you don't
        specify a revisionId, Step Functions checks for a previously published version of the state machine's current
        revision. Related operations: DeleteStateMachineVersion ListStateMachineVersions

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; StateMachineDeleting; StateMachineDoesNotExist; ValidationException
                ServiceQuotaExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.publish_state_machine_version(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaWithRawResponse:
        return self._with_raw_response


class AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaWithRawResponse(
    SecuredRawResponse[RawClient, Server, AuthSchemes]
):
    def publish_state_machine_version(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PublishStateMachineVersionErrorBody]:
        """Creates a version from the current revision of a state machine. Use versions to create immutable snapshots of
        your state machine. You can start executions from versions either directly or with an alias. To create an alias,
        use CreateStateMachineAlias. You can publish up to 1000 versions for each state machine. You must manually
        delete unused versions using the DeleteStateMachineVersion API action. PublishStateMachineVersion is an
        idempotent API. It doesn't create a duplicate state machine version if it already exists for the current
        revision. Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn, name, and
        revisionId parameters. Requests with the same parameters return a successful idempotent response. If you don't
        specify a revisionId, Step Functions checks for a previously published version of the state machine's current
        revision. Related operations: DeleteStateMachineVersion ListStateMachineVersions

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PublishStateMachineVersion"),
            headers=[
                param[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=publish_state_machine_version_error_mapper,
            request_options=request_options,
        )


class AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaWithRawResponse(
    SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]
):
    async def publish_state_machine_version(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PublishStateMachineVersionErrorBody]:
        """Creates a version from the current revision of a state machine. Use versions to create immutable snapshots of
        your state machine. You can start executions from versions either directly or with an alias. To create an alias,
        use CreateStateMachineAlias. You can publish up to 1000 versions for each state machine. You must manually
        delete unused versions using the DeleteStateMachineVersion API action. PublishStateMachineVersion is an
        idempotent API. It doesn't create a duplicate state machine version if it already exists for the current
        revision. Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn, name, and
        revisionId parameters. Requests with the same parameters return a successful idempotent response. If you don't
        specify a revisionId, Step Functions checks for a previously published version of the state machine's current
        revision. Related operations: DeleteStateMachineVersion ListStateMachineVersions

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PublishStateMachineVersion"),
            headers=[
                param[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=publish_state_machine_version_error_mapper,
            request_options=request_options,
        )
