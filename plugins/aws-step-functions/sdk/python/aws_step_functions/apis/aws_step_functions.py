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
from ..errors.create_activity_error import CreateActivityErrorBody, create_activity_error_mapper
from ..errors.create_state_machine_error import CreateStateMachineErrorBody, create_state_machine_error_mapper
from ..errors.delete_activity_error import DeleteActivityErrorBody, delete_activity_error_mapper
from ..errors.delete_state_machine_error import DeleteStateMachineErrorBody, delete_state_machine_error_mapper
from ..errors.describe_activity_error import DescribeActivityErrorBody, describe_activity_error_mapper
from ..errors.describe_execution_error import DescribeExecutionErrorBody, describe_execution_error_mapper
from ..errors.describe_map_run_error import DescribeMapRunErrorBody, describe_map_run_error_mapper
from ..errors.describe_state_machine_error import DescribeStateMachineErrorBody, describe_state_machine_error_mapper
from ..errors.describe_state_machine_for_execution_error import (
    DescribeStateMachineForExecutionErrorBody,
    describe_state_machine_for_execution_error_mapper,
)
from ..errors.get_activity_task_error import GetActivityTaskErrorBody, get_activity_task_error_mapper
from ..errors.get_execution_history_error import GetExecutionHistoryErrorBody, get_execution_history_error_mapper
from ..errors.list_activities_error import ListActivitiesErrorBody, list_activities_error_mapper
from ..errors.list_executions_error import ListExecutionsErrorBody, list_executions_error_mapper
from ..errors.list_map_runs_error import ListMapRunsErrorBody, list_map_runs_error_mapper
from ..errors.list_state_machines_error import ListStateMachinesErrorBody, list_state_machines_error_mapper
from ..errors.list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from ..errors.send_task_failure_error import SendTaskFailureErrorBody, send_task_failure_error_mapper
from ..errors.send_task_heartbeat_error import SendTaskHeartbeatErrorBody, send_task_heartbeat_error_mapper
from ..errors.send_task_success_error import SendTaskSuccessErrorBody, send_task_success_error_mapper
from ..errors.start_execution_error import StartExecutionErrorBody, start_execution_error_mapper
from ..errors.start_sync_execution_error import StartSyncExecutionErrorBody, start_sync_execution_error_mapper
from ..errors.stop_execution_error import StopExecutionErrorBody, stop_execution_error_mapper
from ..errors.tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from ..errors.untag_resource_error import UntagResourceErrorBody, untag_resource_error_mapper
from ..errors.update_map_run_error import UpdateMapRunErrorBody, update_map_run_error_mapper
from ..errors.update_state_machine_error import UpdateStateMachineErrorBody, update_state_machine_error_mapper
from ..models.enums.x_amz_target import XAmzTargetOrStr
from ..models.enums.x_amz_target1 import XAmzTarget1OrStr
from ..models.enums.x_amz_target2 import XAmzTarget2OrStr
from ..models.enums.x_amz_target3 import XAmzTarget3OrStr
from ..models.enums.x_amz_target4 import XAmzTarget4OrStr
from ..models.enums.x_amz_target5 import XAmzTarget5OrStr
from ..models.enums.x_amz_target6 import XAmzTarget6OrStr
from ..models.enums.x_amz_target7 import XAmzTarget7OrStr
from ..models.enums.x_amz_target8 import XAmzTarget8OrStr
from ..models.enums.x_amz_target9 import XAmzTarget9OrStr
from ..models.enums.x_amz_target10 import XAmzTarget10OrStr
from ..models.enums.x_amz_target11 import XAmzTarget11OrStr
from ..models.enums.x_amz_target12 import XAmzTarget12OrStr
from ..models.enums.x_amz_target13 import XAmzTarget13OrStr
from ..models.enums.x_amz_target14 import XAmzTarget14OrStr
from ..models.enums.x_amz_target15 import XAmzTarget15OrStr
from ..models.enums.x_amz_target16 import XAmzTarget16OrStr
from ..models.enums.x_amz_target17 import XAmzTarget17OrStr
from ..models.enums.x_amz_target18 import XAmzTarget18OrStr
from ..models.enums.x_amz_target19 import XAmzTarget19OrStr
from ..models.enums.x_amz_target20 import XAmzTarget20OrStr
from ..models.enums.x_amz_target21 import XAmzTarget21OrStr
from ..models.enums.x_amz_target22 import XAmzTarget22OrStr
from ..models.enums.x_amz_target23 import XAmzTarget23OrStr
from ..models.enums.x_amz_target24 import XAmzTarget24OrStr
from ..models.enums.x_amz_target25 import XAmzTarget25OrStr
from ..server.server import Server


class AwsStepFunctions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsStepFunctionsWithRawResponse(client, server, auth)

    def create_activity(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates an activity. An activity is a task that you write in any programming language and host on any machine
        that has access to Step Functions. Activities must poll Step Functions using the GetActivityTask API action and
        respond using SendTask* API actions. This function lets Step Functions know the existence of your activity and
        returns an identifier for use in a state machine and when polling from the activity. This operation is
        eventually consistent. The results are best effort and may not reflect very recent updates and changes.
        CreateActivity is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already
        created. CreateActivity's idempotency check is based on the activity name. If a following request has different
        tags values, Step Functions will ignore these differences and treat it as an idempotent request of the previous.
        In this case, tags will not be updated, even if they are different.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ActivityAlreadyExists; ActivityLimitExceeded; InvalidEncryptionConfiguration; InvalidName;
                KmsAccessDeniedException; KmsThrottlingException; TooManyTags ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_activity(x_amz_target, request_options=request_options))

    def create_state_machine(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
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
        return unwrap(self._with_raw_response.create_state_machine(x_amz_target, request_options=request_options))

    def delete_activity(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes an activity.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_activity(x_amz_target, request_options=request_options))

    def delete_state_machine(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
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
        return unwrap(self._with_raw_response.delete_state_machine(x_amz_target, request_options=request_options))

    def describe_activity(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Describes an activity. This operation is eventually consistent. The results are best effort and may not
        reflect very recent updates and changes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ActivityDoesNotExist; InvalidArn ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_activity(x_amz_target, request_options=request_options))

    def describe_execution(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Provides information about a state machine execution, such as the state machine associated with the
        execution, the execution input and output, and relevant execution metadata. If you've redriven an execution, you
        can use this API action to return information about the redrives of that execution. In addition, you can use
        this API action to return the Map Run Amazon Resource Name (ARN) if the execution was dispatched by a Map Run.
        If you specify a version or alias ARN when you call the StartExecution API action, DescribeExecution returns
        that ARN. This operation is eventually consistent. The results are best effort and may not reflect very recent
        updates and changes. Executions of an EXPRESS state machine aren't supported by DescribeExecution unless a Map
        Run dispatched them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionDoesNotExist; InvalidArn; KmsAccessDeniedException; KmsInvalidStateException;
                KmsThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_execution(x_amz_target, request_options=request_options))

    def describe_map_run(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Provides information about a Map Run's configuration, progress, and results. If you've redriven a Map Run,
        this API action also returns information about the redrives of that Map Run. For more information, see Examining
        Map Run in the Step Functions Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_map_run(x_amz_target, request_options=request_options))

    def describe_state_machine(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
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
        return unwrap(self._with_raw_response.describe_state_machine(x_amz_target, request_options=request_options))

    def describe_state_machine_for_execution(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
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
            self._with_raw_response.describe_state_machine_for_execution(x_amz_target, request_options=request_options)
        )

    def get_activity_task(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution
        by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and
        responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum
        time the service holds on to the request before responding is 60 seconds. If no task is available within 60
        seconds, the poll returns a taskToken with a null string. Workers should set their client side socket timeout to
        at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request). Polling with
        GetActivityTask can cause latency in some implementations. See Avoid Latency When Polling for Activity Tasks in
        the Step Functions Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ActivityDoesNotExist; ActivityWorkerLimitExceeded; InvalidArn; KmsAccessDeniedException;
                KmsInvalidStateException; KmsThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_activity_task(x_amz_target, request_options=request_options))

    def get_execution_history(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns the history of the specified execution as a list of events. By default, the results are returned in
        ascending order of the timeStamp of the events. Use the reverseOrder parameter to get the latest events first.
        If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token
        for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments
        unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP
        400 InvalidToken error. This API action is not supported by EXPRESS state machines.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionDoesNotExist; InvalidArn; InvalidToken; KmsAccessDeniedException;
                KmsInvalidStateException; KmsThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_execution_history(x_amz_target, request_options=request_options))

    def list_activities(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists the existing activities. If nextToken is returned, there are more results available. The value of
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
        return unwrap(self._with_raw_response.list_activities(x_amz_target, request_options=request_options))

    def list_executions(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine
        by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run
        ARN. Using this API action, you can also list all redriven executions. You can also provide a state machine
        alias ARN or version ARN to list the executions associated with a specific alias or version. Results are sorted
        by time, with the most recent execution first. Running executions are sorted by their startDate or redriveDate,
        and other executions are sorted by their stopDate. If nextToken is returned, there are more results available.
        The value of nextToken is a unique pagination token for each page. Make the call again using the returned token
        to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
        Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually
        consistent. The results are best effort and may not reflect very recent updates and changes. This API action is
        not supported by EXPRESS state machines. However, you may list EXPRESS children started by a map

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; InvalidToken; StateMachineDoesNotExist; StateMachineTypeNotSupported;
                ValidationException ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_executions(x_amz_target, request_options=request_options))

    def list_map_runs(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map
        Run ARNs, and then call DescribeMapRun to obtain more information, if needed.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionDoesNotExist; InvalidArn; InvalidToken ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_map_runs(x_amz_target, request_options=request_options))

    def list_state_machines(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
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
        return unwrap(self._with_raw_response.list_state_machines(x_amz_target, request_options=request_options))

    def list_tags_for_resource(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """List tags for a given resource. Tags may only contain Unicode letters, digits, white space, or these symbols:
        _ . : / = + - @.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options))

    def send_task_failure(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used by activity workers, Task states using the callback pattern, and optionally Task states using the job
        run pattern to report that the task identified by the taskToken failed. For an execution with encryption
        enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role. A
        caller can mark a task as fail without using any KMS permissions in the execution role if the caller provides a
        null value for both error and cause fields because no data needs to be encrypted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidToken; KmsAccessDeniedException; KmsInvalidStateException; KmsThrottlingException;
                TaskDoesNotExist; TaskTimedOut ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.send_task_failure(x_amz_target, request_options=request_options))

    def send_task_heartbeat(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used by activity workers and Task states using the callback pattern, and optionally Task states using the job
        run pattern to report to Step Functions that the task represented by the specified taskToken is still making
        progress. This action resets the Heartbeat clock. The Heartbeat threshold is specified in the state machine's
        Amazon States Language definition (HeartbeatSeconds). This action does not in itself create an event in the
        execution history. However, if the task times out, the execution history contains an ActivityTimedOut entry for
        activities, or a TaskTimedOut entry for tasks using the job run or callback pattern. The Timeout of a task,
        defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of
        the number of SendTaskHeartbeat requests received. Use HeartbeatSeconds to configure the timeout interval for
        heartbeats.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidToken; TaskDoesNotExist; TaskTimedOut ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.send_task_heartbeat(x_amz_target, request_options=request_options))

    def send_task_success(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used by activity workers, Task states using the callback pattern, and optionally Task states using the job
        run pattern to report that the task identified by the taskToken completed successfully.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidOutput; InvalidToken; KmsAccessDeniedException; KmsInvalidStateException;
                KmsThrottlingException; TaskDoesNotExist; TaskTimedOut ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.send_task_success(x_amz_target, request_options=request_options))

    def start_execution(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts a state machine execution. A qualified state machine ARN can either refer to a Distributed Map state
        defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and
        unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with
        a label mapStateLabel in a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified
        state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The
        following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide
        a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for
        that version or alias. The following unqualified state machine ARN refers to a state machine named
        myStateMachine. arn::states:::stateMachine: If you start an execution with an unqualified state machine ARN,
        Step Functions uses the latest revision of the state machine for the execution. To start executions of a state
        machine version, call StartExecution and provide

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionAlreadyExists; ExecutionLimitExceeded; InvalidArn; InvalidExecutionInput; InvalidName;
                KmsAccessDeniedException; KmsInvalidStateException; KmsThrottlingException; StateMachineDeleting;
                StateMachineDoesNotExist; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_execution(x_amz_target, request_options=request_options))

    def start_sync_execution(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts a Synchronous Express state machine execution. StartSyncExecution is not available for STANDARD
        workflows. StartSyncExecution will return a 200 OK response, even if your execution fails, because the status
        code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your
        execution from running, such as permissions errors, limit errors, or issues with your state machine code and
        configuration.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; InvalidExecutionInput; InvalidName; KmsAccessDeniedException;
                KmsInvalidStateException; KmsThrottlingException; StateMachineDeleting; StateMachineDoesNotExist;
                StateMachineTypeNotSupported ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_sync_execution(x_amz_target, request_options=request_options))

    def stop_execution(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stops an execution. This API action is not supported by EXPRESS state machines. For an execution with
        encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution
        role. A caller can stop an execution without using any KMS permissions in the execution role if the caller
        provides a null value for both error and cause fields because no data needs to be encrypted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionDoesNotExist; InvalidArn; KmsAccessDeniedException; KmsInvalidStateException;
                KmsThrottlingException; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.stop_execution(x_amz_target, request_options=request_options))

    def tag_resource(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Add a tag to a Step Functions resource. An array of key-value pairs. For more information, see Using Cost
        Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using
        IAM Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; TooManyTags ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    def untag_resource(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Remove a tag from a Step Functions resource

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    def update_map_run(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates an in-progress Map Run's configuration to include changes to the settings that control maximum
        concurrency and Map Run failure.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; ValidationException ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_map_run(x_amz_target, request_options=request_options))

    def update_state_machine(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
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
        return unwrap(self._with_raw_response.update_state_machine(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AwsStepFunctionsWithRawResponse:
        return self._with_raw_response


class AsyncAwsStepFunctions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsStepFunctionsWithRawResponse(client, server, auth)

    async def create_activity(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates an activity. An activity is a task that you write in any programming language and host on any machine
        that has access to Step Functions. Activities must poll Step Functions using the GetActivityTask API action and
        respond using SendTask* API actions. This function lets Step Functions know the existence of your activity and
        returns an identifier for use in a state machine and when polling from the activity. This operation is
        eventually consistent. The results are best effort and may not reflect very recent updates and changes.
        CreateActivity is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already
        created. CreateActivity's idempotency check is based on the activity name. If a following request has different
        tags values, Step Functions will ignore these differences and treat it as an idempotent request of the previous.
        In this case, tags will not be updated, even if they are different.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ActivityAlreadyExists; ActivityLimitExceeded; InvalidEncryptionConfiguration; InvalidName;
                KmsAccessDeniedException; KmsThrottlingException; TooManyTags ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_activity(x_amz_target, request_options=request_options))

    async def create_state_machine(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
        return unwrap(await self._with_raw_response.create_state_machine(x_amz_target, request_options=request_options))

    async def delete_activity(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes an activity.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_activity(x_amz_target, request_options=request_options))

    async def delete_state_machine(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
        return unwrap(await self._with_raw_response.delete_state_machine(x_amz_target, request_options=request_options))

    async def describe_activity(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Describes an activity. This operation is eventually consistent. The results are best effort and may not
        reflect very recent updates and changes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ActivityDoesNotExist; InvalidArn ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_activity(x_amz_target, request_options=request_options))

    async def describe_execution(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Provides information about a state machine execution, such as the state machine associated with the
        execution, the execution input and output, and relevant execution metadata. If you've redriven an execution, you
        can use this API action to return information about the redrives of that execution. In addition, you can use
        this API action to return the Map Run Amazon Resource Name (ARN) if the execution was dispatched by a Map Run.
        If you specify a version or alias ARN when you call the StartExecution API action, DescribeExecution returns
        that ARN. This operation is eventually consistent. The results are best effort and may not reflect very recent
        updates and changes. Executions of an EXPRESS state machine aren't supported by DescribeExecution unless a Map
        Run dispatched them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionDoesNotExist; InvalidArn; KmsAccessDeniedException; KmsInvalidStateException;
                KmsThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_execution(x_amz_target, request_options=request_options))

    async def describe_map_run(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Provides information about a Map Run's configuration, progress, and results. If you've redriven a Map Run,
        this API action also returns information about the redrives of that Map Run. For more information, see Examining
        Map Run in the Step Functions Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_map_run(x_amz_target, request_options=request_options))

    async def describe_state_machine(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.describe_state_machine(x_amz_target, request_options=request_options)
        )

    async def describe_state_machine_for_execution(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.describe_state_machine_for_execution(
                x_amz_target, request_options=request_options
            ),
        )

    async def get_activity_task(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution
        by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and
        responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum
        time the service holds on to the request before responding is 60 seconds. If no task is available within 60
        seconds, the poll returns a taskToken with a null string. Workers should set their client side socket timeout to
        at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request). Polling with
        GetActivityTask can cause latency in some implementations. See Avoid Latency When Polling for Activity Tasks in
        the Step Functions Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ActivityDoesNotExist; ActivityWorkerLimitExceeded; InvalidArn; KmsAccessDeniedException;
                KmsInvalidStateException; KmsThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_activity_task(x_amz_target, request_options=request_options))

    async def get_execution_history(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns the history of the specified execution as a list of events. By default, the results are returned in
        ascending order of the timeStamp of the events. Use the reverseOrder parameter to get the latest events first.
        If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token
        for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments
        unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP
        400 InvalidToken error. This API action is not supported by EXPRESS state machines.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionDoesNotExist; InvalidArn; InvalidToken; KmsAccessDeniedException;
                KmsInvalidStateException; KmsThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_execution_history(x_amz_target, request_options=request_options)
        )

    async def list_activities(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists the existing activities. If nextToken is returned, there are more results available. The value of
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
        return unwrap(await self._with_raw_response.list_activities(x_amz_target, request_options=request_options))

    async def list_executions(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine
        by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run
        ARN. Using this API action, you can also list all redriven executions. You can also provide a state machine
        alias ARN or version ARN to list the executions associated with a specific alias or version. Results are sorted
        by time, with the most recent execution first. Running executions are sorted by their startDate or redriveDate,
        and other executions are sorted by their stopDate. If nextToken is returned, there are more results available.
        The value of nextToken is a unique pagination token for each page. Make the call again using the returned token
        to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
        Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually
        consistent. The results are best effort and may not reflect very recent updates and changes. This API action is
        not supported by EXPRESS state machines. However, you may list EXPRESS children started by a map

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; InvalidToken; StateMachineDoesNotExist; StateMachineTypeNotSupported;
                ValidationException ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_executions(x_amz_target, request_options=request_options))

    async def list_map_runs(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map
        Run ARNs, and then call DescribeMapRun to obtain more information, if needed.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionDoesNotExist; InvalidArn; InvalidToken ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_map_runs(x_amz_target, request_options=request_options))

    async def list_state_machines(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
        return unwrap(await self._with_raw_response.list_state_machines(x_amz_target, request_options=request_options))

    async def list_tags_for_resource(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """List tags for a given resource. Tags may only contain Unicode letters, digits, white space, or these symbols:
        _ . : / = + - @.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options)
        )

    async def send_task_failure(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used by activity workers, Task states using the callback pattern, and optionally Task states using the job
        run pattern to report that the task identified by the taskToken failed. For an execution with encryption
        enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role. A
        caller can mark a task as fail without using any KMS permissions in the execution role if the caller provides a
        null value for both error and cause fields because no data needs to be encrypted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidToken; KmsAccessDeniedException; KmsInvalidStateException; KmsThrottlingException;
                TaskDoesNotExist; TaskTimedOut ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.send_task_failure(x_amz_target, request_options=request_options))

    async def send_task_heartbeat(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used by activity workers and Task states using the callback pattern, and optionally Task states using the job
        run pattern to report to Step Functions that the task represented by the specified taskToken is still making
        progress. This action resets the Heartbeat clock. The Heartbeat threshold is specified in the state machine's
        Amazon States Language definition (HeartbeatSeconds). This action does not in itself create an event in the
        execution history. However, if the task times out, the execution history contains an ActivityTimedOut entry for
        activities, or a TaskTimedOut entry for tasks using the job run or callback pattern. The Timeout of a task,
        defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of
        the number of SendTaskHeartbeat requests received. Use HeartbeatSeconds to configure the timeout interval for
        heartbeats.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidToken; TaskDoesNotExist; TaskTimedOut ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.send_task_heartbeat(x_amz_target, request_options=request_options))

    async def send_task_success(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used by activity workers, Task states using the callback pattern, and optionally Task states using the job
        run pattern to report that the task identified by the taskToken completed successfully.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidOutput; InvalidToken; KmsAccessDeniedException; KmsInvalidStateException;
                KmsThrottlingException; TaskDoesNotExist; TaskTimedOut ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.send_task_success(x_amz_target, request_options=request_options))

    async def start_execution(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts a state machine execution. A qualified state machine ARN can either refer to a Distributed Map state
        defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and
        unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with
        a label mapStateLabel in a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified
        state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The
        following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide
        a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for
        that version or alias. The following unqualified state machine ARN refers to a state machine named
        myStateMachine. arn::states:::stateMachine: If you start an execution with an unqualified state machine ARN,
        Step Functions uses the latest revision of the state machine for the execution. To start executions of a state
        machine version, call StartExecution and provide

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionAlreadyExists; ExecutionLimitExceeded; InvalidArn; InvalidExecutionInput; InvalidName;
                KmsAccessDeniedException; KmsInvalidStateException; KmsThrottlingException; StateMachineDeleting;
                StateMachineDoesNotExist; ValidationException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.start_execution(x_amz_target, request_options=request_options))

    async def start_sync_execution(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts a Synchronous Express state machine execution. StartSyncExecution is not available for STANDARD
        workflows. StartSyncExecution will return a 200 OK response, even if your execution fails, because the status
        code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your
        execution from running, such as permissions errors, limit errors, or issues with your state machine code and
        configuration.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; InvalidExecutionInput; InvalidName; KmsAccessDeniedException;
                KmsInvalidStateException; KmsThrottlingException; StateMachineDeleting; StateMachineDoesNotExist;
                StateMachineTypeNotSupported ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.start_sync_execution(x_amz_target, request_options=request_options))

    async def stop_execution(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stops an execution. This API action is not supported by EXPRESS state machines. For an execution with
        encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution
        role. A caller can stop an execution without using any KMS permissions in the execution role if the caller
        provides a null value for both error and cause fields because no data needs to be encrypted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ExecutionDoesNotExist; InvalidArn; KmsAccessDeniedException; KmsInvalidStateException;
                KmsThrottlingException; ValidationException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.stop_execution(x_amz_target, request_options=request_options))

    async def tag_resource(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Add a tag to a Step Functions resource. An array of key-value pairs. For more information, see Using Cost
        Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using
        IAM Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; TooManyTags ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    async def untag_resource(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Remove a tag from a Step Functions resource

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    async def update_map_run(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates an in-progress Map Run's configuration to include changes to the settings that control maximum
        concurrency and Map Run failure.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; ValidationException ResourceNotFound ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_map_run(x_amz_target, request_options=request_options))

    async def update_state_machine(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
        return unwrap(await self._with_raw_response.update_state_machine(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAwsStepFunctionsWithRawResponse:
        return self._with_raw_response


class AwsStepFunctionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_activity(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateActivityErrorBody]:
        """Creates an activity. An activity is a task that you write in any programming language and host on any machine
        that has access to Step Functions. Activities must poll Step Functions using the GetActivityTask API action and
        respond using SendTask* API actions. This function lets Step Functions know the existence of your activity and
        returns an identifier for use in a state machine and when polling from the activity. This operation is
        eventually consistent. The results are best effort and may not reflect very recent updates and changes.
        CreateActivity is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already
        created. CreateActivity's idempotency check is based on the activity name. If a following request has different
        tags values, Step Functions will ignore these differences and treat it as an idempotent request of the previous.
        In this case, tags will not be updated, even if they are different.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateActivity"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_activity_error_mapper,
            request_options=request_options,
        )

    def create_state_machine(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateStateMachineErrorBody]:
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
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_state_machine_error_mapper,
            request_options=request_options,
        )

    def delete_activity(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteActivityErrorBody]:
        """Deletes an activity.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteActivity"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_activity_error_mapper,
            request_options=request_options,
        )

    def delete_state_machine(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteStateMachineErrorBody]:
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
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_state_machine_error_mapper,
            request_options=request_options,
        )

    def describe_activity(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeActivityErrorBody]:
        """Describes an activity. This operation is eventually consistent. The results are best effort and may not
        reflect very recent updates and changes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeActivity"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_activity_error_mapper,
            request_options=request_options,
        )

    def describe_execution(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeExecutionErrorBody]:
        """Provides information about a state machine execution, such as the state machine associated with the
        execution, the execution input and output, and relevant execution metadata. If you've redriven an execution, you
        can use this API action to return information about the redrives of that execution. In addition, you can use
        this API action to return the Map Run Amazon Resource Name (ARN) if the execution was dispatched by a Map Run.
        If you specify a version or alias ARN when you call the StartExecution API action, DescribeExecution returns
        that ARN. This operation is eventually consistent. The results are best effort and may not reflect very recent
        updates and changes. Executions of an EXPRESS state machine aren't supported by DescribeExecution unless a Map
        Run dispatched them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeExecution"),
            headers=[param[XAmzTarget10OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_execution_error_mapper,
            request_options=request_options,
        )

    def describe_map_run(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeMapRunErrorBody]:
        """Provides information about a Map Run's configuration, progress, and results. If you've redriven a Map Run,
        this API action also returns information about the redrives of that Map Run. For more information, see Examining
        Map Run in the Step Functions Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeMapRun"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_map_run_error_mapper,
            request_options=request_options,
        )

    def describe_state_machine(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeStateMachineErrorBody]:
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
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_state_machine_error_mapper,
            request_options=request_options,
        )

    def describe_state_machine_for_execution(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeStateMachineForExecutionErrorBody]:
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
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_state_machine_for_execution_error_mapper,
            request_options=request_options,
        )

    def get_activity_task(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetActivityTaskErrorBody]:
        """Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution
        by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and
        responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum
        time the service holds on to the request before responding is 60 seconds. If no task is available within 60
        seconds, the poll returns a taskToken with a null string. Workers should set their client side socket timeout to
        at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request). Polling with
        GetActivityTask can cause latency in some implementations. See Avoid Latency When Polling for Activity Tasks in
        the Step Functions Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetActivityTask"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_activity_task_error_mapper,
            request_options=request_options,
        )

    def get_execution_history(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetExecutionHistoryErrorBody]:
        """Returns the history of the specified execution as a list of events. By default, the results are returned in
        ascending order of the timeStamp of the events. Use the reverseOrder parameter to get the latest events first.
        If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token
        for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments
        unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP
        400 InvalidToken error. This API action is not supported by EXPRESS state machines.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetExecutionHistory"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_execution_history_error_mapper,
            request_options=request_options,
        )

    def list_activities(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListActivitiesErrorBody]:
        """Lists the existing activities. If nextToken is returned, there are more results available. The value of
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
            url_template=self._server.default("/#ListActivities"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_activities_error_mapper,
            request_options=request_options,
        )

    def list_executions(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListExecutionsErrorBody]:
        """Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine
        by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run
        ARN. Using this API action, you can also list all redriven executions. You can also provide a state machine
        alias ARN or version ARN to list the executions associated with a specific alias or version. Results are sorted
        by time, with the most recent execution first. Running executions are sorted by their startDate or redriveDate,
        and other executions are sorted by their stopDate. If nextToken is returned, there are more results available.
        The value of nextToken is a unique pagination token for each page. Make the call again using the returned token
        to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
        Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually
        consistent. The results are best effort and may not reflect very recent updates and changes. This API action is
        not supported by EXPRESS state machines. However, you may list EXPRESS children started by a map

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListExecutions"),
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_executions_error_mapper,
            request_options=request_options,
        )

    def list_map_runs(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListMapRunsErrorBody]:
        """Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map
        Run ARNs, and then call DescribeMapRun to obtain more information, if needed.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMapRuns"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_map_runs_error_mapper,
            request_options=request_options,
        )

    def list_state_machines(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListStateMachinesErrorBody]:
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
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_state_machines_error_mapper,
            request_options=request_options,
        )

    def list_tags_for_resource(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """List tags for a given resource. Tags may only contain Unicode letters, digits, white space, or these symbols:
        _ . : / = + - @.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    def send_task_failure(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SendTaskFailureErrorBody]:
        """Used by activity workers, Task states using the callback pattern, and optionally Task states using the job
        run pattern to report that the task identified by the taskToken failed. For an execution with encryption
        enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role. A
        caller can mark a task as fail without using any KMS permissions in the execution role if the caller provides a
        null value for both error and cause fields because no data needs to be encrypted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SendTaskFailure"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=send_task_failure_error_mapper,
            request_options=request_options,
        )

    def send_task_heartbeat(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SendTaskHeartbeatErrorBody]:
        """Used by activity workers and Task states using the callback pattern, and optionally Task states using the job
        run pattern to report to Step Functions that the task represented by the specified taskToken is still making
        progress. This action resets the Heartbeat clock. The Heartbeat threshold is specified in the state machine's
        Amazon States Language definition (HeartbeatSeconds). This action does not in itself create an event in the
        execution history. However, if the task times out, the execution history contains an ActivityTimedOut entry for
        activities, or a TaskTimedOut entry for tasks using the job run or callback pattern. The Timeout of a task,
        defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of
        the number of SendTaskHeartbeat requests received. Use HeartbeatSeconds to configure the timeout interval for
        heartbeats.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SendTaskHeartbeat"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=send_task_heartbeat_error_mapper,
            request_options=request_options,
        )

    def send_task_success(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SendTaskSuccessErrorBody]:
        """Used by activity workers, Task states using the callback pattern, and optionally Task states using the job
        run pattern to report that the task identified by the taskToken completed successfully.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SendTaskSuccess"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=send_task_success_error_mapper,
            request_options=request_options,
        )

    def start_execution(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartExecutionErrorBody]:
        """Starts a state machine execution. A qualified state machine ARN can either refer to a Distributed Map state
        defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and
        unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with
        a label mapStateLabel in a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified
        state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The
        following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide
        a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for
        that version or alias. The following unqualified state machine ARN refers to a state machine named
        myStateMachine. arn::states:::stateMachine: If you start an execution with an unqualified state machine ARN,
        Step Functions uses the latest revision of the state machine for the execution. To start executions of a state
        machine version, call StartExecution and provide

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartExecution"),
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_execution_error_mapper,
            request_options=request_options,
        )

    def start_sync_execution(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartSyncExecutionErrorBody]:
        """Starts a Synchronous Express state machine execution. StartSyncExecution is not available for STANDARD
        workflows. StartSyncExecution will return a 200 OK response, even if your execution fails, because the status
        code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your
        execution from running, such as permissions errors, limit errors, or issues with your state machine code and
        configuration.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartSyncExecution"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_sync_execution_error_mapper,
            request_options=request_options,
        )

    def stop_execution(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopExecutionErrorBody]:
        """Stops an execution. This API action is not supported by EXPRESS state machines. For an execution with
        encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution
        role. A caller can stop an execution without using any KMS permissions in the execution role if the caller
        provides a null value for both error and cause fields because no data needs to be encrypted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopExecution"),
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_execution_error_mapper,
            request_options=request_options,
        )

    def tag_resource(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Add a tag to a Step Functions resource. An array of key-value pairs. For more information, see Using Cost
        Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using
        IAM Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    def untag_resource(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Remove a tag from a Step Functions resource

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )

    def update_map_run(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateMapRunErrorBody]:
        """Updates an in-progress Map Run's configuration to include changes to the settings that control maximum
        concurrency and Map Run failure.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateMapRun"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_map_run_error_mapper,
            request_options=request_options,
        )

    def update_state_machine(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateStateMachineErrorBody]:
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
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_state_machine_error_mapper,
            request_options=request_options,
        )


class AsyncAwsStepFunctionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_activity(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateActivityErrorBody]:
        """Creates an activity. An activity is a task that you write in any programming language and host on any machine
        that has access to Step Functions. Activities must poll Step Functions using the GetActivityTask API action and
        respond using SendTask* API actions. This function lets Step Functions know the existence of your activity and
        returns an identifier for use in a state machine and when polling from the activity. This operation is
        eventually consistent. The results are best effort and may not reflect very recent updates and changes.
        CreateActivity is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already
        created. CreateActivity's idempotency check is based on the activity name. If a following request has different
        tags values, Step Functions will ignore these differences and treat it as an idempotent request of the previous.
        In this case, tags will not be updated, even if they are different.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateActivity"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_activity_error_mapper,
            request_options=request_options,
        )

    async def create_state_machine(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateStateMachineErrorBody]:
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
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_state_machine_error_mapper,
            request_options=request_options,
        )

    async def delete_activity(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteActivityErrorBody]:
        """Deletes an activity.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteActivity"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_activity_error_mapper,
            request_options=request_options,
        )

    async def delete_state_machine(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteStateMachineErrorBody]:
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
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_state_machine_error_mapper,
            request_options=request_options,
        )

    async def describe_activity(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeActivityErrorBody]:
        """Describes an activity. This operation is eventually consistent. The results are best effort and may not
        reflect very recent updates and changes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeActivity"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_activity_error_mapper,
            request_options=request_options,
        )

    async def describe_execution(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeExecutionErrorBody]:
        """Provides information about a state machine execution, such as the state machine associated with the
        execution, the execution input and output, and relevant execution metadata. If you've redriven an execution, you
        can use this API action to return information about the redrives of that execution. In addition, you can use
        this API action to return the Map Run Amazon Resource Name (ARN) if the execution was dispatched by a Map Run.
        If you specify a version or alias ARN when you call the StartExecution API action, DescribeExecution returns
        that ARN. This operation is eventually consistent. The results are best effort and may not reflect very recent
        updates and changes. Executions of an EXPRESS state machine aren't supported by DescribeExecution unless a Map
        Run dispatched them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeExecution"),
            headers=[param[XAmzTarget10OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_execution_error_mapper,
            request_options=request_options,
        )

    async def describe_map_run(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeMapRunErrorBody]:
        """Provides information about a Map Run's configuration, progress, and results. If you've redriven a Map Run,
        this API action also returns information about the redrives of that Map Run. For more information, see Examining
        Map Run in the Step Functions Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeMapRun"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_map_run_error_mapper,
            request_options=request_options,
        )

    async def describe_state_machine(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeStateMachineErrorBody]:
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
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_state_machine_error_mapper,
            request_options=request_options,
        )

    async def describe_state_machine_for_execution(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeStateMachineForExecutionErrorBody]:
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
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_state_machine_for_execution_error_mapper,
            request_options=request_options,
        )

    async def get_activity_task(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetActivityTaskErrorBody]:
        """Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution
        by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and
        responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum
        time the service holds on to the request before responding is 60 seconds. If no task is available within 60
        seconds, the poll returns a taskToken with a null string. Workers should set their client side socket timeout to
        at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request). Polling with
        GetActivityTask can cause latency in some implementations. See Avoid Latency When Polling for Activity Tasks in
        the Step Functions Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetActivityTask"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_activity_task_error_mapper,
            request_options=request_options,
        )

    async def get_execution_history(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetExecutionHistoryErrorBody]:
        """Returns the history of the specified execution as a list of events. By default, the results are returned in
        ascending order of the timeStamp of the events. Use the reverseOrder parameter to get the latest events first.
        If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token
        for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments
        unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP
        400 InvalidToken error. This API action is not supported by EXPRESS state machines.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetExecutionHistory"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_execution_history_error_mapper,
            request_options=request_options,
        )

    async def list_activities(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListActivitiesErrorBody]:
        """Lists the existing activities. If nextToken is returned, there are more results available. The value of
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
            url_template=self._server.default("/#ListActivities"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_activities_error_mapper,
            request_options=request_options,
        )

    async def list_executions(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListExecutionsErrorBody]:
        """Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine
        by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run
        ARN. Using this API action, you can also list all redriven executions. You can also provide a state machine
        alias ARN or version ARN to list the executions associated with a specific alias or version. Results are sorted
        by time, with the most recent execution first. Running executions are sorted by their startDate or redriveDate,
        and other executions are sorted by their stopDate. If nextToken is returned, there are more results available.
        The value of nextToken is a unique pagination token for each page. Make the call again using the returned token
        to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
        Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually
        consistent. The results are best effort and may not reflect very recent updates and changes. This API action is
        not supported by EXPRESS state machines. However, you may list EXPRESS children started by a map

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListExecutions"),
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_executions_error_mapper,
            request_options=request_options,
        )

    async def list_map_runs(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListMapRunsErrorBody]:
        """Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map
        Run ARNs, and then call DescribeMapRun to obtain more information, if needed.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMapRuns"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_map_runs_error_mapper,
            request_options=request_options,
        )

    async def list_state_machines(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListStateMachinesErrorBody]:
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
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_state_machines_error_mapper,
            request_options=request_options,
        )

    async def list_tags_for_resource(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """List tags for a given resource. Tags may only contain Unicode letters, digits, white space, or these symbols:
        _ . : / = + - @.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    async def send_task_failure(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SendTaskFailureErrorBody]:
        """Used by activity workers, Task states using the callback pattern, and optionally Task states using the job
        run pattern to report that the task identified by the taskToken failed. For an execution with encryption
        enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role. A
        caller can mark a task as fail without using any KMS permissions in the execution role if the caller provides a
        null value for both error and cause fields because no data needs to be encrypted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SendTaskFailure"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=send_task_failure_error_mapper,
            request_options=request_options,
        )

    async def send_task_heartbeat(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SendTaskHeartbeatErrorBody]:
        """Used by activity workers and Task states using the callback pattern, and optionally Task states using the job
        run pattern to report to Step Functions that the task represented by the specified taskToken is still making
        progress. This action resets the Heartbeat clock. The Heartbeat threshold is specified in the state machine's
        Amazon States Language definition (HeartbeatSeconds). This action does not in itself create an event in the
        execution history. However, if the task times out, the execution history contains an ActivityTimedOut entry for
        activities, or a TaskTimedOut entry for tasks using the job run or callback pattern. The Timeout of a task,
        defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of
        the number of SendTaskHeartbeat requests received. Use HeartbeatSeconds to configure the timeout interval for
        heartbeats.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SendTaskHeartbeat"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=send_task_heartbeat_error_mapper,
            request_options=request_options,
        )

    async def send_task_success(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SendTaskSuccessErrorBody]:
        """Used by activity workers, Task states using the callback pattern, and optionally Task states using the job
        run pattern to report that the task identified by the taskToken completed successfully.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SendTaskSuccess"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=send_task_success_error_mapper,
            request_options=request_options,
        )

    async def start_execution(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartExecutionErrorBody]:
        """Starts a state machine execution. A qualified state machine ARN can either refer to a Distributed Map state
        defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and
        unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with
        a label mapStateLabel in a state machine named myStateMachine.
        arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified
        state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The
        following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide
        a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for
        that version or alias. The following unqualified state machine ARN refers to a state machine named
        myStateMachine. arn::states:::stateMachine: If you start an execution with an unqualified state machine ARN,
        Step Functions uses the latest revision of the state machine for the execution. To start executions of a state
        machine version, call StartExecution and provide

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartExecution"),
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_execution_error_mapper,
            request_options=request_options,
        )

    async def start_sync_execution(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartSyncExecutionErrorBody]:
        """Starts a Synchronous Express state machine execution. StartSyncExecution is not available for STANDARD
        workflows. StartSyncExecution will return a 200 OK response, even if your execution fails, because the status
        code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your
        execution from running, such as permissions errors, limit errors, or issues with your state machine code and
        configuration.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartSyncExecution"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_sync_execution_error_mapper,
            request_options=request_options,
        )

    async def stop_execution(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopExecutionErrorBody]:
        """Stops an execution. This API action is not supported by EXPRESS state machines. For an execution with
        encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution
        role. A caller can stop an execution without using any KMS permissions in the execution role if the caller
        provides a null value for both error and cause fields because no data needs to be encrypted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopExecution"),
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_execution_error_mapper,
            request_options=request_options,
        )

    async def tag_resource(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Add a tag to a Step Functions resource. An array of key-value pairs. For more information, see Using Cost
        Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using
        IAM Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    async def untag_resource(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Remove a tag from a Step Functions resource

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )

    async def update_map_run(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateMapRunErrorBody]:
        """Updates an in-progress Map Run's configuration to include changes to the settings that control maximum
        concurrency and Map Run failure.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateMapRun"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_map_run_error_mapper,
            request_options=request_options,
        )

    async def update_state_machine(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateStateMachineErrorBody]:
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
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_state_machine_error_mapper,
            request_options=request_options,
        )
