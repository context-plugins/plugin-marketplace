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
from ..errors.create_state_machine2_error import CreateStateMachine2ErrorBody, create_state_machine2_error_mapper
from ..errors.delete_state_machine2_error import DeleteStateMachine2ErrorBody, delete_state_machine2_error_mapper
from ..errors.describe_state_machine2_error import DescribeStateMachine2ErrorBody, describe_state_machine2_error_mapper
from ..errors.describe_state_machine_for_execution2_error import (
    DescribeStateMachineForExecution2ErrorBody,
    describe_state_machine_for_execution2_error_mapper,
)
from ..errors.list_state_machines2_error import ListStateMachines2ErrorBody, list_state_machines2_error_mapper
from ..errors.update_state_machine2_error import UpdateStateMachine2ErrorBody, update_state_machine2_error_mapper
from ..models.enums.x_amz_target1_aws_step_functions_state_machines_api import (
    XAmzTarget1AwsStepFunctionsStateMachinesApiOrStr,
)
from ..models.enums.x_amz_target2_aws_step_functions_state_machines_api import (
    XAmzTarget2AwsStepFunctionsStateMachinesApiOrStr,
)
from ..models.enums.x_amz_target3_aws_step_functions_state_machines_api import (
    XAmzTarget3AwsStepFunctionsStateMachinesApiOrStr,
)
from ..models.enums.x_amz_target4_aws_step_functions_state_machines_api import (
    XAmzTarget4AwsStepFunctionsStateMachinesApiOrStr,
)
from ..models.enums.x_amz_target5_aws_step_functions_state_machines_api import (
    XAmzTarget5AwsStepFunctionsStateMachinesApiOrStr,
)
from ..models.enums.x_amz_target_aws_step_functions_state_machines_api import (
    XAmzTargetAwsStepFunctionsStateMachinesApiOrStr,
)
from ..server.server import Server


class StateMachines:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StateMachinesWithRawResponse(client, server, auth)

    def create_state_machine2(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a state machine. A state machine consists of a collection of states that can do work (Task states),
        determine to which states to transition next (Choice states), stop an execution with an error (Fail states), and
        so on. State machines are specified using a JSON-based, structured language. For more information, see Amazon
        States Language in the Step Functions User Guide. If you set the publish parameter of this API action to true,
        it publishes version 1 as the first revision of the state machine. For additional control over security, you can
        encrypt your data using a customer-managed key for Step Functions state machines. You can configure a symmetric
        KMS key and data key reuse period when creating or updating a State Machine. The execution history and state
        machine definition will be encrypted with the key applied to the State Machine. This operation is eventually
        consistent. The results are best effort and may not reflect very recent updates and changes. CreateStateMachine
        is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created.
        CreateStateMachine's idempotency check is based on the state machine name, definition, type, Logging

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; InvalidDefinition; InvalidEncryptionConfiguration;
                InvalidLoggingConfiguration; InvalidName; InvalidTracingConfiguration; KmsAccessDeniedException;
                KmsThrottlingException; StateMachineAlreadyExists; StateMachineDeleting; StateMachineLimitExceeded;
                StateMachineTypeNotSupported; TooManyTags; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_state_machine2(x_amz_target, request_options=request_options))

    def delete_state_machine2(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a state machine. This is an asynchronous operation. It sets the state machine's status to DELETING
        and begins the deletion process. A state machine is deleted only when all its executions are completed. On the
        next state transition, the state machine's executions are terminated. A qualified state machine ARN can either
        refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following
        are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN
        refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified
        state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The
        following unqualified state machine ARN refers to a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine This API action also deletes all versions and
        aliases associated with a state machine. For EXPRESS state machines, the deletion happens eventually (usually in
        less than a minute).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_state_machine2(x_amz_target, request_options=request_options))

    def describe_state_machine2(
        self,
        x_amz_target: XAmzTarget2AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and
        configuration. A qualified state machine ARN can either refer to a Distributed Map state defined within a state
        machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state
        machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label
        mapStateLabel in a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified
        state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The
        following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide
        a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for
        that version or alias. The following unqualified state machine ARN refers to a state machine named
        myStateMachine. arn::states:::stateMachine: This API action returns the details for a state machine version if
        the stateMachineArn you specify is a state machine version ARN. This operat

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; KmsAccessDeniedException; KmsInvalidStateException; KmsThrottlingException;
                StateMachineDoesNotExist ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_state_machine2(x_amz_target, request_options=request_options))

    def describe_state_machine_for_execution2(
        self,
        x_amz_target: XAmzTarget3AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map
        Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The
        state machine returned is the state machine associated with the Map Run. This operation is eventually
        consistent. The results are best effort and may not reflect very recent updates and changes. This API action is
        not supported by EXPRESS state machines.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionDoesNotExist; InvalidArn; KmsAccessDeniedException; KmsInvalidStateException;
                KmsThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_state_machine_for_execution2(x_amz_target, request_options=request_options)
        )

    def list_state_machines2(
        self,
        x_amz_target: XAmzTarget4AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the existing state machines. If nextToken is returned, there are more results available. The value of
        nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve
        the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an
        expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent.
        The results are best effort and may not reflect very recent updates and changes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidToken ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_state_machines2(x_amz_target, request_options=request_options))

    def update_state_machine2(
        self,
        x_amz_target: XAmzTarget5AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Updates an existing state machine by modifying its definition, roleArn, loggingConfiguration, or
        EncryptionConfiguration. Running executions will continue to use the previous definition and roleArn. You must
        include at least one of definition or roleArn or you will receive a MissingRequiredParameter error. A qualified
        state machine ARN refers to a Distributed Map state defined within a state machine. For example, the qualified
        state machine ARN arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel refers to a
        Distributed Map state with a label mapStateLabel in the state machine named stateMachineName. A qualified state
        machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an
        alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following
        qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine
        named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you
        provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with Validation

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; InvalidDefinition; InvalidEncryptionConfiguration;
                InvalidLoggingConfiguration; InvalidTracingConfiguration; KmsAccessDeniedException;
                KmsThrottlingException; MissingRequiredParameter; StateMachineDeleting; StateMachineDoesNotExist;
                ValidationException ServiceQuotaExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_state_machine2(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> StateMachinesWithRawResponse:
        return self._with_raw_response


class AsyncStateMachines:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStateMachinesWithRawResponse(client, server, auth)

    async def create_state_machine2(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a state machine. A state machine consists of a collection of states that can do work (Task states),
        determine to which states to transition next (Choice states), stop an execution with an error (Fail states), and
        so on. State machines are specified using a JSON-based, structured language. For more information, see Amazon
        States Language in the Step Functions User Guide. If you set the publish parameter of this API action to true,
        it publishes version 1 as the first revision of the state machine. For additional control over security, you can
        encrypt your data using a customer-managed key for Step Functions state machines. You can configure a symmetric
        KMS key and data key reuse period when creating or updating a State Machine. The execution history and state
        machine definition will be encrypted with the key applied to the State Machine. This operation is eventually
        consistent. The results are best effort and may not reflect very recent updates and changes. CreateStateMachine
        is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created.
        CreateStateMachine's idempotency check is based on the state machine name, definition, type, Logging

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; InvalidDefinition; InvalidEncryptionConfiguration;
                InvalidLoggingConfiguration; InvalidName; InvalidTracingConfiguration; KmsAccessDeniedException;
                KmsThrottlingException; StateMachineAlreadyExists; StateMachineDeleting; StateMachineLimitExceeded;
                StateMachineTypeNotSupported; TooManyTags; ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_state_machine2(x_amz_target, request_options=request_options)
        )

    async def delete_state_machine2(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a state machine. This is an asynchronous operation. It sets the state machine's status to DELETING
        and begins the deletion process. A state machine is deleted only when all its executions are completed. On the
        next state transition, the state machine's executions are terminated. A qualified state machine ARN can either
        refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following
        are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN
        refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified
        state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The
        following unqualified state machine ARN refers to a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine This API action also deletes all versions and
        aliases associated with a state machine. For EXPRESS state machines, the deletion happens eventually (usually in
        less than a minute).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_state_machine2(x_amz_target, request_options=request_options)
        )

    async def describe_state_machine2(
        self,
        x_amz_target: XAmzTarget2AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and
        configuration. A qualified state machine ARN can either refer to a Distributed Map state defined within a state
        machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state
        machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label
        mapStateLabel in a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified
        state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The
        following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide
        a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for
        that version or alias. The following unqualified state machine ARN refers to a state machine named
        myStateMachine. arn::states:::stateMachine: This API action returns the details for a state machine version if
        the stateMachineArn you specify is a state machine version ARN. This operat

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; KmsAccessDeniedException; KmsInvalidStateException; KmsThrottlingException;
                StateMachineDoesNotExist ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_state_machine2(x_amz_target, request_options=request_options)
        )

    async def describe_state_machine_for_execution2(
        self,
        x_amz_target: XAmzTarget3AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map
        Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The
        state machine returned is the state machine associated with the Map Run. This operation is eventually
        consistent. The results are best effort and may not reflect very recent updates and changes. This API action is
        not supported by EXPRESS state machines.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionDoesNotExist; InvalidArn; KmsAccessDeniedException; KmsInvalidStateException;
                KmsThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_state_machine_for_execution2(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_state_machines2(
        self,
        x_amz_target: XAmzTarget4AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the existing state machines. If nextToken is returned, there are more results available. The value of
        nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve
        the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an
        expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent.
        The results are best effort and may not reflect very recent updates and changes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidToken ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_state_machines2(x_amz_target, request_options=request_options))

    async def update_state_machine2(
        self,
        x_amz_target: XAmzTarget5AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Updates an existing state machine by modifying its definition, roleArn, loggingConfiguration, or
        EncryptionConfiguration. Running executions will continue to use the previous definition and roleArn. You must
        include at least one of definition or roleArn or you will receive a MissingRequiredParameter error. A qualified
        state machine ARN refers to a Distributed Map state defined within a state machine. For example, the qualified
        state machine ARN arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel refers to a
        Distributed Map state with a label mapStateLabel in the state machine named stateMachineName. A qualified state
        machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an
        alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following
        qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine
        named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you
        provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with Validation

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InvalidArn; InvalidDefinition; InvalidEncryptionConfiguration;
                InvalidLoggingConfiguration; InvalidTracingConfiguration; KmsAccessDeniedException;
                KmsThrottlingException; MissingRequiredParameter; StateMachineDeleting; StateMachineDoesNotExist;
                ValidationException ServiceQuotaExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_state_machine2(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncStateMachinesWithRawResponse:
        return self._with_raw_response


class StateMachinesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_state_machine2(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateStateMachine2ErrorBody]:
        """Creates a state machine. A state machine consists of a collection of states that can do work (Task states),
        determine to which states to transition next (Choice states), stop an execution with an error (Fail states), and
        so on. State machines are specified using a JSON-based, structured language. For more information, see Amazon
        States Language in the Step Functions User Guide. If you set the publish parameter of this API action to true,
        it publishes version 1 as the first revision of the state machine. For additional control over security, you can
        encrypt your data using a customer-managed key for Step Functions state machines. You can configure a symmetric
        KMS key and data key reuse period when creating or updating a State Machine. The execution history and state
        machine definition will be encrypted with the key applied to the State Machine. This operation is eventually
        consistent. The results are best effort and may not reflect very recent updates and changes. CreateStateMachine
        is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created.
        CreateStateMachine's idempotency check is based on the state machine name, definition, type, Logging

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateStateMachine"),
            headers=[
                param[XAmzTargetAwsStepFunctionsStateMachinesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_state_machine2_error_mapper,
            request_options=request_options,
        )

    def delete_state_machine2(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteStateMachine2ErrorBody]:
        """Deletes a state machine. This is an asynchronous operation. It sets the state machine's status to DELETING
        and begins the deletion process. A state machine is deleted only when all its executions are completed. On the
        next state transition, the state machine's executions are terminated. A qualified state machine ARN can either
        refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following
        are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN
        refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified
        state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The
        following unqualified state machine ARN refers to a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine This API action also deletes all versions and
        aliases associated with a state machine. For EXPRESS state machines, the deletion happens eventually (usually in
        less than a minute).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteStateMachine"),
            headers=[
                param[XAmzTarget1AwsStepFunctionsStateMachinesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_state_machine2_error_mapper,
            request_options=request_options,
        )

    def describe_state_machine2(
        self,
        x_amz_target: XAmzTarget2AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeStateMachine2ErrorBody]:
        """Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and
        configuration. A qualified state machine ARN can either refer to a Distributed Map state defined within a state
        machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state
        machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label
        mapStateLabel in a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified
        state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The
        following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide
        a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for
        that version or alias. The following unqualified state machine ARN refers to a state machine named
        myStateMachine. arn::states:::stateMachine: This API action returns the details for a state machine version if
        the stateMachineArn you specify is a state machine version ARN. This operat

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeStateMachine"),
            headers=[
                param[XAmzTarget2AwsStepFunctionsStateMachinesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_state_machine2_error_mapper,
            request_options=request_options,
        )

    def describe_state_machine_for_execution2(
        self,
        x_amz_target: XAmzTarget3AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeStateMachineForExecution2ErrorBody]:
        """Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map
        Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The
        state machine returned is the state machine associated with the Map Run. This operation is eventually
        consistent. The results are best effort and may not reflect very recent updates and changes. This API action is
        not supported by EXPRESS state machines.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeStateMachineForExecution"),
            headers=[
                param[XAmzTarget3AwsStepFunctionsStateMachinesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_state_machine_for_execution2_error_mapper,
            request_options=request_options,
        )

    def list_state_machines2(
        self,
        x_amz_target: XAmzTarget4AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListStateMachines2ErrorBody]:
        """Lists the existing state machines. If nextToken is returned, there are more results available. The value of
        nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve
        the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an
        expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent.
        The results are best effort and may not reflect very recent updates and changes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListStateMachines"),
            headers=[
                param[XAmzTarget4AwsStepFunctionsStateMachinesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_state_machines2_error_mapper,
            request_options=request_options,
        )

    def update_state_machine2(
        self,
        x_amz_target: XAmzTarget5AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateStateMachine2ErrorBody]:
        """Updates an existing state machine by modifying its definition, roleArn, loggingConfiguration, or
        EncryptionConfiguration. Running executions will continue to use the previous definition and roleArn. You must
        include at least one of definition or roleArn or you will receive a MissingRequiredParameter error. A qualified
        state machine ARN refers to a Distributed Map state defined within a state machine. For example, the qualified
        state machine ARN arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel refers to a
        Distributed Map state with a label mapStateLabel in the state machine named stateMachineName. A qualified state
        machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an
        alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following
        qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine
        named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you
        provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with Validation

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateStateMachine"),
            headers=[
                param[XAmzTarget5AwsStepFunctionsStateMachinesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_state_machine2_error_mapper,
            request_options=request_options,
        )


class AsyncStateMachinesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_state_machine2(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateStateMachine2ErrorBody]:
        """Creates a state machine. A state machine consists of a collection of states that can do work (Task states),
        determine to which states to transition next (Choice states), stop an execution with an error (Fail states), and
        so on. State machines are specified using a JSON-based, structured language. For more information, see Amazon
        States Language in the Step Functions User Guide. If you set the publish parameter of this API action to true,
        it publishes version 1 as the first revision of the state machine. For additional control over security, you can
        encrypt your data using a customer-managed key for Step Functions state machines. You can configure a symmetric
        KMS key and data key reuse period when creating or updating a State Machine. The execution history and state
        machine definition will be encrypted with the key applied to the State Machine. This operation is eventually
        consistent. The results are best effort and may not reflect very recent updates and changes. CreateStateMachine
        is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created.
        CreateStateMachine's idempotency check is based on the state machine name, definition, type, Logging

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateStateMachine"),
            headers=[
                param[XAmzTargetAwsStepFunctionsStateMachinesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_state_machine2_error_mapper,
            request_options=request_options,
        )

    async def delete_state_machine2(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteStateMachine2ErrorBody]:
        """Deletes a state machine. This is an asynchronous operation. It sets the state machine's status to DELETING
        and begins the deletion process. A state machine is deleted only when all its executions are completed. On the
        next state transition, the state machine's executions are terminated. A qualified state machine ARN can either
        refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following
        are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN
        refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified
        state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The
        following unqualified state machine ARN refers to a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine This API action also deletes all versions and
        aliases associated with a state machine. For EXPRESS state machines, the deletion happens eventually (usually in
        less than a minute).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteStateMachine"),
            headers=[
                param[XAmzTarget1AwsStepFunctionsStateMachinesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_state_machine2_error_mapper,
            request_options=request_options,
        )

    async def describe_state_machine2(
        self,
        x_amz_target: XAmzTarget2AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeStateMachine2ErrorBody]:
        """Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and
        configuration. A qualified state machine ARN can either refer to a Distributed Map state defined within a state
        machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state
        machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label
        mapStateLabel in a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified
        state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The
        following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide
        a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for
        that version or alias. The following unqualified state machine ARN refers to a state machine named
        myStateMachine. arn::states:::stateMachine: This API action returns the details for a state machine version if
        the stateMachineArn you specify is a state machine version ARN. This operat

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeStateMachine"),
            headers=[
                param[XAmzTarget2AwsStepFunctionsStateMachinesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_state_machine2_error_mapper,
            request_options=request_options,
        )

    async def describe_state_machine_for_execution2(
        self,
        x_amz_target: XAmzTarget3AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeStateMachineForExecution2ErrorBody]:
        """Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map
        Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The
        state machine returned is the state machine associated with the Map Run. This operation is eventually
        consistent. The results are best effort and may not reflect very recent updates and changes. This API action is
        not supported by EXPRESS state machines.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeStateMachineForExecution"),
            headers=[
                param[XAmzTarget3AwsStepFunctionsStateMachinesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_state_machine_for_execution2_error_mapper,
            request_options=request_options,
        )

    async def list_state_machines2(
        self,
        x_amz_target: XAmzTarget4AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListStateMachines2ErrorBody]:
        """Lists the existing state machines. If nextToken is returned, there are more results available. The value of
        nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve
        the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an
        expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent.
        The results are best effort and may not reflect very recent updates and changes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListStateMachines"),
            headers=[
                param[XAmzTarget4AwsStepFunctionsStateMachinesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_state_machines2_error_mapper,
            request_options=request_options,
        )

    async def update_state_machine2(
        self,
        x_amz_target: XAmzTarget5AwsStepFunctionsStateMachinesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateStateMachine2ErrorBody]:
        """Updates an existing state machine by modifying its definition, roleArn, loggingConfiguration, or
        EncryptionConfiguration. Running executions will continue to use the previous definition and roleArn. You must
        include at least one of definition or roleArn or you will receive a MissingRequiredParameter error. A qualified
        state machine ARN refers to a Distributed Map state defined within a state machine. For example, the qualified
        state machine ARN arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel refers to a
        Distributed Map state with a label mapStateLabel in the state machine named stateMachineName. A qualified state
        machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an
        alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following
        qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine
        named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you
        provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with Validation

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateStateMachine"),
            headers=[
                param[XAmzTarget5AwsStepFunctionsStateMachinesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_state_machine2_error_mapper,
            request_options=request_options,
        )
