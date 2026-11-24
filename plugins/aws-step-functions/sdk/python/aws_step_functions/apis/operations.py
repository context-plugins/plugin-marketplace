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
from ..errors.publish_state_machine_version2_error import (
    PublishStateMachineVersion2ErrorBody,
    publish_state_machine_version2_error_mapper,
)
from ..errors.redrive_execution_error import RedriveExecutionErrorBody, redrive_execution_error_mapper
from ..errors.test_state_error import TestStateErrorBody, test_state_error_mapper
from ..errors.validate_state_machine_definition_error import (
    ValidateStateMachineDefinitionErrorBody,
    validate_state_machine_definition_error_mapper,
)
from ..models.enums.x_amz_target1_aws_step_functions_operations_api import XAmzTarget1AwsStepFunctionsOperationsApiOrStr
from ..models.enums.x_amz_target2_aws_step_functions_operations_api import XAmzTarget2AwsStepFunctionsOperationsApiOrStr
from ..models.enums.x_amz_target3_aws_step_functions_operations_api import XAmzTarget3AwsStepFunctionsOperationsApiOrStr
from ..models.enums.x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_publishsta_api import (
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr,
)
from ..server.server import Server


class Operations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OperationsWithRawResponse(client, server, auth)

    def publish_state_machine_version2(
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
            self._with_raw_response.publish_state_machine_version2(x_amz_target, request_options=request_options)
        )

    def redrive_execution(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the last 14 days.
        These include failed, aborted, or timed out executions. When you redrive an execution, it continues the failed
        execution from the unsuccessful step and uses the same input. Step Functions preserves the results and execution
        history of the successful steps, and doesn't rerun these steps when you redrive an execution. Redriven
        executions use the same state machine definition and execution ARN as the original execution attempt. For
        workflows that include an Inline Map or Parallel state, RedriveExecution API action reschedules and redrives
        only the iterations and branches that failed or aborted. To redrive a workflow that includes a Distributed Map
        state whose Map Run failed, you must redrive the parent workflow. The parent workflow redrives all the
        unsuccessful states, including a failed Map Run. If a Map Run was not started in the original execution attempt,
        the redriven parent workflow starts the Map Run. This API action is not supported by EXPRESS state machines.
        However, you can restart the unsuccessful executions of Express child workflows in a Distributed Map by redrivin

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionDoesNotExist; ExecutionLimitExceeded; ExecutionNotRedrivable; InvalidArn;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.redrive_execution(x_amz_target, request_options=request_options))

    def test_state(
        self,
        x_amz_target: XAmzTarget2AwsStepFunctionsOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Accepts the definition of a single state and executes it. You can test a state without creating a state
        machine or updating an existing state machine. Using this API, you can test the following: A state's input and
        output processing data flow An Amazon Web Services service integration request and response An HTTP Task request
        and response You can call this API on only one state at a time. The states that you can test include the
        following: All Task types except Activity Pass Wait Choice Succeed Fail The TestState API assumes an IAM role
        which must contain the required IAM permissions for the resources your state is accessing. For information about
        the permissions a state might need, see IAM permissions to test a state. The TestState API can run for up to
        five minutes. If the execution of a state exceeds this duration, it fails with the States.Timeout error.
        TestState only supports the following when a mock is specified: Activity tasks, .sync or .waitForTaskToken
        service integration patterns, Parallel, or Map states.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; InvalidDefinition; InvalidExecutionInput; ValidationException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.test_state(x_amz_target, request_options=request_options))

    def validate_state_machine_definition(
        self,
        x_amz_target: XAmzTarget3AwsStepFunctionsOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Validates the syntax of a state machine definition specified in Amazon States Language (ASL), a JSON-based,
        structured language. You can validate that a state machine definition is correct without creating a state
        machine resource. Suggested uses for ValidateStateMachineDefinition: Integrate automated checks into your code
        review or Continuous Integration (CI) process to check state machine definitions before starting deployments.
        Run validation from a Git pre-commit hook to verify the definition before committing to your source repository.
        Validation will look for problems in your state machine definition and return a result and a list of diagnostic
        elements. The result value will be OK when your workflow definition can be successfully created or updated. Note
        the result can be OK even when diagnostic warnings are present in the response. The result value will be FAIL
        when the workflow definition contains errors that would prevent you from creating or updating your state
        machine. The list of ValidateStateMachineDefinitionDiagnostic data elements can contain zero or more WARNING
        and/or ERROR elements. The ValidateStateMachineDefinition API might add new diagnostics in the future, a

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ValidationException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.validate_state_machine_definition(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> OperationsWithRawResponse:
        return self._with_raw_response


class AsyncOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOperationsWithRawResponse(client, server, auth)

    async def publish_state_machine_version2(
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
            await self._with_raw_response.publish_state_machine_version2(x_amz_target, request_options=request_options)
        )

    async def redrive_execution(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the last 14 days.
        These include failed, aborted, or timed out executions. When you redrive an execution, it continues the failed
        execution from the unsuccessful step and uses the same input. Step Functions preserves the results and execution
        history of the successful steps, and doesn't rerun these steps when you redrive an execution. Redriven
        executions use the same state machine definition and execution ARN as the original execution attempt. For
        workflows that include an Inline Map or Parallel state, RedriveExecution API action reschedules and redrives
        only the iterations and branches that failed or aborted. To redrive a workflow that includes a Distributed Map
        state whose Map Run failed, you must redrive the parent workflow. The parent workflow redrives all the
        unsuccessful states, including a failed Map Run. If a Map Run was not started in the original execution attempt,
        the redriven parent workflow starts the Map Run. This API action is not supported by EXPRESS state machines.
        However, you can restart the unsuccessful executions of Express child workflows in a Distributed Map by redrivin

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionDoesNotExist; ExecutionLimitExceeded; ExecutionNotRedrivable; InvalidArn;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.redrive_execution(x_amz_target, request_options=request_options))

    async def test_state(
        self,
        x_amz_target: XAmzTarget2AwsStepFunctionsOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Accepts the definition of a single state and executes it. You can test a state without creating a state
        machine or updating an existing state machine. Using this API, you can test the following: A state's input and
        output processing data flow An Amazon Web Services service integration request and response An HTTP Task request
        and response You can call this API on only one state at a time. The states that you can test include the
        following: All Task types except Activity Pass Wait Choice Succeed Fail The TestState API assumes an IAM role
        which must contain the required IAM permissions for the resources your state is accessing. For information about
        the permissions a state might need, see IAM permissions to test a state. The TestState API can run for up to
        five minutes. If the execution of a state exceeds this duration, it fails with the States.Timeout error.
        TestState only supports the following when a mock is specified: Activity tasks, .sync or .waitForTaskToken
        service integration patterns, Parallel, or Map states.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; InvalidDefinition; InvalidExecutionInput; ValidationException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.test_state(x_amz_target, request_options=request_options))

    async def validate_state_machine_definition(
        self,
        x_amz_target: XAmzTarget3AwsStepFunctionsOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Validates the syntax of a state machine definition specified in Amazon States Language (ASL), a JSON-based,
        structured language. You can validate that a state machine definition is correct without creating a state
        machine resource. Suggested uses for ValidateStateMachineDefinition: Integrate automated checks into your code
        review or Continuous Integration (CI) process to check state machine definitions before starting deployments.
        Run validation from a Git pre-commit hook to verify the definition before committing to your source repository.
        Validation will look for problems in your state machine definition and return a result and a list of diagnostic
        elements. The result value will be OK when your workflow definition can be successfully created or updated. Note
        the result can be OK even when diagnostic warnings are present in the response. The result value will be FAIL
        when the workflow definition contains errors that would prevent you from creating or updating your state
        machine. The list of ValidateStateMachineDefinitionDiagnostic data elements can contain zero or more WARNING
        and/or ERROR elements. The ValidateStateMachineDefinition API might add new diagnostics in the future, a

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.validate_state_machine_definition(
                x_amz_target, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncOperationsWithRawResponse:
        return self._with_raw_response


class OperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def publish_state_machine_version2(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PublishStateMachineVersion2ErrorBody]:
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
            error_mapper=publish_state_machine_version2_error_mapper,
            request_options=request_options,
        )

    def redrive_execution(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RedriveExecutionErrorBody]:
        """Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the last 14 days.
        These include failed, aborted, or timed out executions. When you redrive an execution, it continues the failed
        execution from the unsuccessful step and uses the same input. Step Functions preserves the results and execution
        history of the successful steps, and doesn't rerun these steps when you redrive an execution. Redriven
        executions use the same state machine definition and execution ARN as the original execution attempt. For
        workflows that include an Inline Map or Parallel state, RedriveExecution API action reschedules and redrives
        only the iterations and branches that failed or aborted. To redrive a workflow that includes a Distributed Map
        state whose Map Run failed, you must redrive the parent workflow. The parent workflow redrives all the
        unsuccessful states, including a failed Map Run. If a Map Run was not started in the original execution attempt,
        the redriven parent workflow starts the Map Run. This API action is not supported by EXPRESS state machines.
        However, you can restart the unsuccessful executions of Express child workflows in a Distributed Map by redrivin

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RedriveExecution"),
            headers=[
                param[XAmzTarget1AwsStepFunctionsOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=redrive_execution_error_mapper,
            request_options=request_options,
        )

    def test_state(
        self,
        x_amz_target: XAmzTarget2AwsStepFunctionsOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TestStateErrorBody]:
        """Accepts the definition of a single state and executes it. You can test a state without creating a state
        machine or updating an existing state machine. Using this API, you can test the following: A state's input and
        output processing data flow An Amazon Web Services service integration request and response An HTTP Task request
        and response You can call this API on only one state at a time. The states that you can test include the
        following: All Task types except Activity Pass Wait Choice Succeed Fail The TestState API assumes an IAM role
        which must contain the required IAM permissions for the resources your state is accessing. For information about
        the permissions a state might need, see IAM permissions to test a state. The TestState API can run for up to
        five minutes. If the execution of a state exceeds this duration, it fails with the States.Timeout error.
        TestState only supports the following when a mock is specified: Activity tasks, .sync or .waitForTaskToken
        service integration patterns, Parallel, or Map states.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TestState"),
            headers=[
                param[XAmzTarget2AwsStepFunctionsOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=test_state_error_mapper,
            request_options=request_options,
        )

    def validate_state_machine_definition(
        self,
        x_amz_target: XAmzTarget3AwsStepFunctionsOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ValidateStateMachineDefinitionErrorBody]:
        """Validates the syntax of a state machine definition specified in Amazon States Language (ASL), a JSON-based,
        structured language. You can validate that a state machine definition is correct without creating a state
        machine resource. Suggested uses for ValidateStateMachineDefinition: Integrate automated checks into your code
        review or Continuous Integration (CI) process to check state machine definitions before starting deployments.
        Run validation from a Git pre-commit hook to verify the definition before committing to your source repository.
        Validation will look for problems in your state machine definition and return a result and a list of diagnostic
        elements. The result value will be OK when your workflow definition can be successfully created or updated. Note
        the result can be OK even when diagnostic warnings are present in the response. The result value will be FAIL
        when the workflow definition contains errors that would prevent you from creating or updating your state
        machine. The list of ValidateStateMachineDefinitionDiagnostic data elements can contain zero or more WARNING
        and/or ERROR elements. The ValidateStateMachineDefinition API might add new diagnostics in the future, a

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ValidateStateMachineDefinition"),
            headers=[
                param[XAmzTarget3AwsStepFunctionsOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=validate_state_machine_definition_error_mapper,
            request_options=request_options,
        )


class AsyncOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def publish_state_machine_version2(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PublishStateMachineVersion2ErrorBody]:
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
            error_mapper=publish_state_machine_version2_error_mapper,
            request_options=request_options,
        )

    async def redrive_execution(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RedriveExecutionErrorBody]:
        """Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the last 14 days.
        These include failed, aborted, or timed out executions. When you redrive an execution, it continues the failed
        execution from the unsuccessful step and uses the same input. Step Functions preserves the results and execution
        history of the successful steps, and doesn't rerun these steps when you redrive an execution. Redriven
        executions use the same state machine definition and execution ARN as the original execution attempt. For
        workflows that include an Inline Map or Parallel state, RedriveExecution API action reschedules and redrives
        only the iterations and branches that failed or aborted. To redrive a workflow that includes a Distributed Map
        state whose Map Run failed, you must redrive the parent workflow. The parent workflow redrives all the
        unsuccessful states, including a failed Map Run. If a Map Run was not started in the original execution attempt,
        the redriven parent workflow starts the Map Run. This API action is not supported by EXPRESS state machines.
        However, you can restart the unsuccessful executions of Express child workflows in a Distributed Map by redrivin

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RedriveExecution"),
            headers=[
                param[XAmzTarget1AwsStepFunctionsOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=redrive_execution_error_mapper,
            request_options=request_options,
        )

    async def test_state(
        self,
        x_amz_target: XAmzTarget2AwsStepFunctionsOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TestStateErrorBody]:
        """Accepts the definition of a single state and executes it. You can test a state without creating a state
        machine or updating an existing state machine. Using this API, you can test the following: A state's input and
        output processing data flow An Amazon Web Services service integration request and response An HTTP Task request
        and response You can call this API on only one state at a time. The states that you can test include the
        following: All Task types except Activity Pass Wait Choice Succeed Fail The TestState API assumes an IAM role
        which must contain the required IAM permissions for the resources your state is accessing. For information about
        the permissions a state might need, see IAM permissions to test a state. The TestState API can run for up to
        five minutes. If the execution of a state exceeds this duration, it fails with the States.Timeout error.
        TestState only supports the following when a mock is specified: Activity tasks, .sync or .waitForTaskToken
        service integration patterns, Parallel, or Map states.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TestState"),
            headers=[
                param[XAmzTarget2AwsStepFunctionsOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=test_state_error_mapper,
            request_options=request_options,
        )

    async def validate_state_machine_definition(
        self,
        x_amz_target: XAmzTarget3AwsStepFunctionsOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ValidateStateMachineDefinitionErrorBody]:
        """Validates the syntax of a state machine definition specified in Amazon States Language (ASL), a JSON-based,
        structured language. You can validate that a state machine definition is correct without creating a state
        machine resource. Suggested uses for ValidateStateMachineDefinition: Integrate automated checks into your code
        review or Continuous Integration (CI) process to check state machine definitions before starting deployments.
        Run validation from a Git pre-commit hook to verify the definition before committing to your source repository.
        Validation will look for problems in your state machine definition and return a result and a list of diagnostic
        elements. The result value will be OK when your workflow definition can be successfully created or updated. Note
        the result can be OK even when diagnostic warnings are present in the response. The result value will be FAIL
        when the workflow definition contains errors that would prevent you from creating or updating your state
        machine. The list of ValidateStateMachineDefinitionDiagnostic data elements can contain zero or more WARNING
        and/or ERROR elements. The ValidateStateMachineDefinition API might add new diagnostics in the future, a

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ValidateStateMachineDefinition"),
            headers=[
                param[XAmzTarget3AwsStepFunctionsOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=validate_state_machine_definition_error_mapper,
            request_options=request_options,
        )
