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
from ..errors.count_closed_workflow_executions_error import (
    CountClosedWorkflowExecutionsErrorBody,
    count_closed_workflow_executions_error_mapper,
)
from ..errors.count_open_workflow_executions_error import (
    CountOpenWorkflowExecutionsErrorBody,
    count_open_workflow_executions_error_mapper,
)
from ..errors.count_pending_activity_tasks_error import (
    CountPendingActivityTasksErrorBody,
    count_pending_activity_tasks_error_mapper,
)
from ..errors.count_pending_decision_tasks_error import (
    CountPendingDecisionTasksErrorBody,
    count_pending_decision_tasks_error_mapper,
)
from ..errors.deprecate_activity_type_error import DeprecateActivityTypeErrorBody, deprecate_activity_type_error_mapper
from ..errors.deprecate_domain_error import DeprecateDomainErrorBody, deprecate_domain_error_mapper
from ..errors.deprecate_workflow_type_error import DeprecateWorkflowTypeErrorBody, deprecate_workflow_type_error_mapper
from ..errors.describe_activity_type_error import DescribeActivityTypeErrorBody, describe_activity_type_error_mapper
from ..errors.describe_domain_error import DescribeDomainErrorBody, describe_domain_error_mapper
from ..errors.describe_workflow_execution_error import (
    DescribeWorkflowExecutionErrorBody,
    describe_workflow_execution_error_mapper,
)
from ..errors.describe_workflow_type_error import DescribeWorkflowTypeErrorBody, describe_workflow_type_error_mapper
from ..errors.get_workflow_execution_history_error import (
    GetWorkflowExecutionHistoryErrorBody,
    get_workflow_execution_history_error_mapper,
)
from ..errors.list_activity_types_error import ListActivityTypesErrorBody, list_activity_types_error_mapper
from ..errors.list_closed_workflow_executions_error import (
    ListClosedWorkflowExecutionsErrorBody,
    list_closed_workflow_executions_error_mapper,
)
from ..errors.list_domains_error import ListDomainsErrorBody, list_domains_error_mapper
from ..errors.list_open_workflow_executions_error import (
    ListOpenWorkflowExecutionsErrorBody,
    list_open_workflow_executions_error_mapper,
)
from ..errors.list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from ..errors.list_workflow_types_error import ListWorkflowTypesErrorBody, list_workflow_types_error_mapper
from ..errors.poll_for_activity_task_error import PollForActivityTaskErrorBody, poll_for_activity_task_error_mapper
from ..errors.poll_for_decision_task_error import PollForDecisionTaskErrorBody, poll_for_decision_task_error_mapper
from ..errors.record_activity_task_heartbeat_error import (
    RecordActivityTaskHeartbeatErrorBody,
    record_activity_task_heartbeat_error_mapper,
)
from ..errors.register_activity_type_error import RegisterActivityTypeErrorBody, register_activity_type_error_mapper
from ..errors.register_domain_error import RegisterDomainErrorBody, register_domain_error_mapper
from ..errors.register_workflow_type_error import RegisterWorkflowTypeErrorBody, register_workflow_type_error_mapper
from ..errors.request_cancel_workflow_execution_error import (
    RequestCancelWorkflowExecutionErrorBody,
    request_cancel_workflow_execution_error_mapper,
)
from ..errors.respond_activity_task_canceled_error import (
    RespondActivityTaskCanceledErrorBody,
    respond_activity_task_canceled_error_mapper,
)
from ..errors.respond_activity_task_completed_error import (
    RespondActivityTaskCompletedErrorBody,
    respond_activity_task_completed_error_mapper,
)
from ..errors.respond_activity_task_failed_error import (
    RespondActivityTaskFailedErrorBody,
    respond_activity_task_failed_error_mapper,
)
from ..errors.respond_decision_task_completed_error import (
    RespondDecisionTaskCompletedErrorBody,
    respond_decision_task_completed_error_mapper,
)
from ..errors.signal_workflow_execution_error import (
    SignalWorkflowExecutionErrorBody,
    signal_workflow_execution_error_mapper,
)
from ..errors.start_workflow_execution_error import (
    StartWorkflowExecutionErrorBody,
    start_workflow_execution_error_mapper,
)
from ..errors.tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from ..errors.terminate_workflow_execution_error import (
    TerminateWorkflowExecutionErrorBody,
    terminate_workflow_execution_error_mapper,
)
from ..errors.undeprecate_activity_type_error import (
    UndeprecateActivityTypeErrorBody,
    undeprecate_activity_type_error_mapper,
)
from ..errors.undeprecate_domain_error import UndeprecateDomainErrorBody, undeprecate_domain_error_mapper
from ..errors.undeprecate_workflow_type_error import (
    UndeprecateWorkflowTypeErrorBody,
    undeprecate_workflow_type_error_mapper,
)
from ..errors.untag_resource_error import UntagResourceErrorBody, untag_resource_error_mapper
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
from ..models.enums.x_amz_target26 import XAmzTarget26OrStr
from ..models.enums.x_amz_target27 import XAmzTarget27OrStr
from ..models.enums.x_amz_target28 import XAmzTarget28OrStr
from ..models.enums.x_amz_target29 import XAmzTarget29OrStr
from ..models.enums.x_amz_target30 import XAmzTarget30OrStr
from ..models.enums.x_amz_target31 import XAmzTarget31OrStr
from ..models.enums.x_amz_target32 import XAmzTarget32OrStr
from ..models.enums.x_amz_target33 import XAmzTarget33OrStr
from ..models.enums.x_amz_target34 import XAmzTarget34OrStr
from ..models.enums.x_amz_target35 import XAmzTarget35OrStr
from ..models.enums.x_amz_target36 import XAmzTarget36OrStr
from ..server.server import Server


class AmazonSimpleWorkflowService:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AmazonSimpleWorkflowServiceWithRawResponse(client, server, auth)

    def count_closed_workflow_executions(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns the number of closed workflow executions within the given domain that meet the specified filtering
        criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect
        recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon
        SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified
        domains. Use an Action element to allow or deny permission to call this action. Constrain the following
        parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is
        swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version:
        String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to
        invoke the action, or the parameter values fall outside the specified constraints, the action fails. The
        associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
        policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.count_closed_workflow_executions(x_amz_target, request_options=request_options)
        )

    def count_open_workflow_executions(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns the number of open workflow executions within the given domain that meet the specified filtering
        criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect
        recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon
        SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified
        domains. Use an Action element to allow or deny permission to call this action. Constrain the following
        parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is
        swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version:
        String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to
        invoke the action, or the parameter values fall outside the specified constraints, the action fails. The
        associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
        policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.count_open_workflow_executions(x_amz_target, request_options=request_options)
        )

    def count_pending_activity_tasks(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns the estimated number of activity tasks in the specified task list. The count returned is an
        approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever
        scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to
        Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only
        specified domains. Use an Action element to allow or deny permission to call this action. Constrain the
        taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to
        access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.count_pending_activity_tasks(x_amz_target, request_options=request_options)
        )

    def count_pending_decision_tasks(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns the estimated number of decision tasks in the specified task list. The count returned is an
        approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever
        scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to
        Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only
        specified domains. Use an Action element to allow or deny permission to call this action. Constrain the
        taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to
        access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.count_pending_decision_tasks(x_amz_target, request_options=request_options)
        )

    def deprecate_activity_type(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deprecates the specified activity type. After an activity type has been deprecated, you cannot create new
        tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to
        run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:
        Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element
        to allow or deny permission to call this action. Constrain the following parameters by using a Condition element
        with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name.
        activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; TypeDeprecatedFault; UnknownResourceFault ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.deprecate_activity_type(x_amz_target, request_options=request_options))

    def deprecate_domain(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow
        executions or register new types. However, you can still use visibility actions on this domain. Deprecating a
        domain also deprecates all activity and workflow types registered in the domain. Executions that were started
        before the domain was deprecated continues to run. This operation is eventually consistent. The results are best
        effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Develope

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DomainDeprecatedFault; OperationNotPermittedFault; UnknownResourceFault ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.deprecate_domain(x_amz_target, request_options=request_options))

    def deprecate_workflow_type(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deprecates the specified workflow type. After a workflow type has been deprecated, you cannot create new
        executions of that type. Executions that were started before the type was deprecated continues to run. A
        deprecated workflow type may still be used when calling visibility actions. This operation is eventually
        consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control
        You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource
        element with the domain name to limit the action to only specified domains. Use an Action element to allow or
        deny permission to call this action. Constrain the following parameters by using a Condition element with the
        appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version:
        String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to
        invoke the action, or the parameter values fall outside the specified constraints, the action fails. The
        associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
        policies, se

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; TypeDeprecatedFault; UnknownResourceFault ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.deprecate_workflow_type(x_amz_target, request_options=request_options))

    def describe_activity_type(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the specified activity type. This includes configuration settings provided when the
        type was registered and other general information about the type. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. Constrain the following parameters by using a Condition element with the appropriate keys.
        activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint.
        The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or
        the parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_activity_type(x_amz_target, request_options=request_options))

    def describe_domain(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the specified domain, including description and status. Access Control You can use
        IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the
        domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to
        call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_domain(x_amz_target, request_options=request_options))

    def describe_workflow_execution(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the specified workflow execution including its type and some statistics. This
        operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and
        changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cause
        parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_workflow_execution(x_amz_target, request_options=request_options)
        )

    def describe_workflow_type(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the specified workflow type. This includes configuration settings specified when
        the type was registered and other information such as creation date, current status, etc. Access Control You can
        use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with
        the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission
        to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.
        workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint.
        The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or
        the parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_workflow_type(x_amz_target, request_options=request_options))

    def get_workflow_execution_history(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns the history of the specified workflow execution. The results may be split into multiple pages. To
        retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This
        operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and
        changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cause
        parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_workflow_execution_history(x_amz_target, request_options=request_options)
        )

    def list_activity_types(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about all activities registered in the specified domain that match the specified name and
        registration status. The result includes information like creation date, current status of the activity, etc.
        The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the
        nextPageToken returned by the initial call. Access Control You can use IAM policies to control this action's
        access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to
        only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an
        IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke
        the action, or the parameter values fall outside the specified constraints, the action fails. The associated
        event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see
        Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_activity_types(x_amz_target, request_options=request_options))

    def list_closed_workflow_executions(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The
        results may be split into multiple pages. To retrieve subsequent pages, make the call again using the
        nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort
        and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String
        constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name.
        typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient
        permissions to invoke the action, or the parameter values fall outside the specified constraints, the action
        fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and e

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_closed_workflow_executions(x_amz_target, request_options=request_options)
        )

    def list_domains(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns the list of domains registered in the account. The results may be split into multiple pages. To
        retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This
        operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and
        changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. The element
        must be set to arn:aws:swf::AccountID:domain/*, where AccountID is the account ID, with no dashes. Use an Action
        element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's
        parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
        outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_domains(x_amz_target, request_options=request_options))

    def list_open_workflow_executions(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The
        results may be split into multiple pages. To retrieve subsequent pages, make the call again using the
        nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort
        and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String
        constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name.
        typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient
        permissions to invoke the action, or the parameter values fall outside the specified constraints, the action
        fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and exa

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_open_workflow_executions(x_amz_target, request_options=request_options)
        )

    def list_tags_for_resource(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """List tags for a given domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options))

    def list_workflow_types(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about workflow types in the specified domain. The results may be split into multiple
        pages that can be retrieved by making the call repeatedly. Access Control You can use IAM policies to control
        this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit
        the action to only specified domains. Use an Action element to allow or deny permission to call this action. You
        cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient
        permissions to invoke the action, or the parameter values fall outside the specified constraints, the action
        fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and
        example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_workflow_types(x_amz_target, request_options=request_options))

    def poll_for_activity_task(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used by workers to get an ActivityTask from the specified activity taskList. This initiates a long poll,
        where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum
        time the service holds on to the request before responding is 60 seconds. If no task is available within 60
        seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is
        returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its
        type to identify and process it correctly. Workers should set their client side socket timeout to at least 70
        seconds (10 seconds higher than the maximum time service may hold the poll request). Access Control You can use
        IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the
        domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to
        call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name
        key to allow the action to access only certain task lists. If the caller doesn't have sufficient pe

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.poll_for_activity_task(x_amz_target, request_options=request_options))

    def poll_for_decision_task(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used by deciders to get a DecisionTask from the specified decision taskList. A decision task may be returned
        for any open workflow execution that is using the specified task list. The task includes a paginated view of the
        history of the workflow execution. The decider should use the workflow type and the history to determine how to
        properly handle the task. This action initiates a long poll, where the service holds the HTTP connection open
        and responds as soon a task becomes available. If no decision task is available in the specified task list
        before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means
        that a DecisionTask is returned, but that the value of taskToken is an empty string. Deciders should set their
        client side socket timeout to at least 70 seconds (10 seconds higher than the timeout). Because the number of
        workflow history events for a single workflow execution might be very large, the result returned might be split
        up across a number of pages. To retrieve subsequent pages, make additional calls to PollForDecisionTask using
        the nextPageToken returned by the initial call. Note that you do not call GetWorkflowExecutionH

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.poll_for_decision_task(x_amz_target, request_options=request_options))

    def record_activity_task_heartbeat(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used by activity workers to report to the service that the ActivityTask represented by the specified
        taskToken is still making progress. The worker can also specify details of the progress, for example percent
        complete, using the details parameter. This action can also be used by the worker as a mechanism to check if
        cancellation is being requested for the activity task. If a cancellation is being attempted for the specified
        task, then the boolean cancelRequested flag returned by the service is set to true. This action resets the
        taskHeartbeatTimeout clock. The taskHeartbeatTimeout is specified in RegisterActivityType. This action doesn't
        in itself create an event in the workflow execution history. However, if the task times out, the workflow
        execution history contains a ActivityTaskTimedOut event that contains the information from the last heartbeat
        generated by the activity worker. The taskStartToCloseTimeout of an activity type is the maximum duration of an
        activity task, regardless of the number of RecordActivityTaskHeartbeat requests received. The
        taskStartToCloseTimeout is also specified in RegisterActivityType. This operation is only useful for long-lived
        activities to repor

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.record_activity_task_heartbeat(x_amz_target, request_options=request_options)
        )

    def register_activity_type(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Registers a new activity type along with its configuration settings in the specified domain. A
        TypeAlreadyExists fault is returned if the type already exists in the domain. You cannot change any
        configuration settings of the type after its registration, and it must be registered as a new version. Access
        Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a
        Resource element with the domain name to limit the action to only specified domains. Use an Action element to
        allow or deny permission to call this action. Constrain the following parameters by using a Condition element
        with the appropriate keys. defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name:
        String constraint. The key is swf:name. version: String constraint. The key is swf:version. If the caller
        doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified
        constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; TypeAlreadyExistsFault; UnknownResourceFault
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.register_activity_type(x_amz_target, request_options=request_options))

    def register_domain(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Registers a new domain. Access Control You can use IAM policies to control this action's access to Amazon SWF
        resources as follows: You cannot use an IAM policy to control domain access for this action. The name of the
        domain being registered is available as the resource of this action. Use an Action element to allow or deny
        permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the
        caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the
        specified constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DomainAlreadyExistsFault; LimitExceededFault; OperationNotPermittedFault; TooManyTagsFault
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.register_domain(x_amz_target, request_options=request_options))

    def register_workflow_type(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Registers a new workflow type and its configuration settings in the specified domain. The retention period
        for the workflow history is set by the RegisterDomain action. If the type already exists, then a
        TypeAlreadyExists fault is returned. You cannot change the configuration settings of a workflow type once it is
        registered and it must be registered as a new version. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. defaultTaskList.name:
        String constraint. The key is swf:defaultTaskList.name. name: String constraint. The key is swf:name. version:
        String constraint. The key is swf:version. If the caller doesn't have sufficient permissions to invoke the
        action, or the parameter values fall outside the specified constraints, the action fails. The associated event
        attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using
        IAM to

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; TypeAlreadyExistsFault; UnknownResourceFault
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.register_workflow_type(x_amz_target, request_options=request_options))

    def request_cancel_workflow_execution(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by
        the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a
        whole. It is up to the decider to take appropriate actions when it receives an execution history with this
        event. If the runId isn't specified, the WorkflowExecutionCancelRequested event is recorded in the history of
        the current open workflow execution with the specified workflowId in the domain. Because this action allows the
        workflow to properly clean up and gracefully close, it should be used instead of TerminateWorkflowExecution when
        possible. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cau

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.request_cancel_workflow_execution(x_amz_target, request_options=request_options)
        )

    def respond_activity_task_canceled(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully
        canceled. Additional details can be provided using the details argument. These details (if provided) appear in
        the ActivityTaskCanceled event added to the workflow history. Only use this operation if the canceled flag of a
        RecordActivityTaskHeartbeat request returns true and if the activity can be safely undone or abandoned. A task
        is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open
        while a worker is processing it. A task is closed after it has been specified in a call to
        RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out.
        Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use
        a Resource element with the domain name to limit the action to only specified domains. Use an Action element to
        allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's
        parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
        outside t

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.respond_activity_task_canceled(x_amz_target, request_options=request_options)
        )

    def respond_activity_task_completed(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully
        with a result (if provided). The result appears in the ActivityTaskCompleted event in the workflow history. If
        the requested task doesn't complete successfully, use RespondActivityTaskFailed instead. If the worker finds
        that the task is canceled through the canceled flag returned by RecordActivityTaskHeartbeat, it should cancel
        the task, clean up and then call RespondActivityTaskCanceled. A task is considered open from the time that it is
        scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is
        closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled,
        RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action. You
        cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient p

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.respond_activity_task_completed(x_amz_target, request_options=request_options)
        )

    def respond_activity_task_failed(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason
        (if specified). The reason and details appear in the ActivityTaskFailed event added to the workflow history. A
        task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as
        open while a worker is processing it. A task is closed after it has been specified in a call to
        RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out.
        Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use
        a Resource element with the domain name to limit the action to only specified domains. Use an Action element to
        allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's
        parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
        outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF W

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.respond_activity_task_failed(x_amz_target, request_options=request_options)
        )

    def respond_decision_task_completed(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully
        completed. The decisions argument specifies the list of decisions made while processing the task. A
        DecisionTaskCompleted event is added to the workflow history. The executionContext specified is attached to the
        event in the workflow execution history. Access Control If an IAM policy grants permission to use
        RespondDecisionTaskCompleted, it can express permissions for the list of decisions in the decisions parameter.
        Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as
        readable as possible, you can express permissions on decisions as if they were actual API calls, including
        applying conditions to some parameters. For more information, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.respond_decision_task_completed(x_amz_target, request_options=request_options)
        )

    def signal_workflow_execution(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for
        the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the
        specified user defined signalName and input (if provided). If a runId isn't specified, then the
        WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching
        workflowId in the domain. If the specified workflow execution isn't open, this method fails with
        UnknownResource. Access Control You can use IAM policies to control this action's access to Amazon SWF resources
        as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cause
        parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.signal_workflow_execution(x_amz_target, request_options=request_options))

    def start_workflow_execution(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts an execution of the workflow type in the specified domain using the provided workflowId and input
        data. This action returns the newly started workflow execution. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. Constrain the following parameters by using a Condition element with the appropriate keys.
        tagList.member.0: The key is swf:tagList.member.0. tagList.member.1: The key is swf:tagList.member.1.
        tagList.member.2: The key is swf:tagList.member.2. tagList.member.3: The key is swf:tagList.member.3.
        tagList.member.4: The key is swf:tagList.member.4. taskList: String constraint. The key is swf:taskList.name.
        workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint.
        The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or
        the parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DefaultUndefinedFault; LimitExceededFault; OperationNotPermittedFault; TypeDeprecatedFault;
                UnknownResourceFault; WorkflowExecutionAlreadyStartedFault ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_workflow_execution(x_amz_target, request_options=request_options))

    def tag_resource(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Add a tag to a Amazon SWF domain. Amazon SWF supports a maximum of 50 tags per resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; TooManyTagsFault; UnknownResourceFault ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    def terminate_workflow_execution(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the
        given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when
        starting this execution, is applied to any open child workflow executions of this workflow execution. If the
        identified workflow execution was in progress, it is terminated immediately. If a runId isn't specified, then
        the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching
        workflowId in the domain. You should consider using RequestCancelWorkflowExecution action instead because it
        allows the workflow to gracefully close while TerminateWorkflowExecution doesn't. Access Control You can use IAM
        policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the
        domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to
        call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified con

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.terminate_workflow_execution(x_amz_target, request_options=request_options)
        )

    def undeprecate_activity_type(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Undeprecates a previously deprecated activity type. After an activity type has been undeprecated, you can
        create new tasks of that activity type. This operation is eventually consistent. The results are best effort and
        may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name:
        String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is
        swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; TypeAlreadyExistsFault; UnknownResourceFault ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.undeprecate_activity_type(x_amz_target, request_options=request_options))

    def undeprecate_domain(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create
        new workflow executions or register new types. This operation is eventually consistent. The results are best
        effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DomainAlreadyExistsFault; OperationNotPermittedFault; UnknownResourceFault ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.undeprecate_domain(x_amz_target, request_options=request_options))

    def undeprecate_workflow_type(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Undeprecates a previously deprecated workflow type. After a workflow type has been undeprecated, you can
        create new executions of that type. This operation is eventually consistent. The results are best effort and may
        not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's
        access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to
        only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the
        following parameters by using a Condition element with the appropriate keys. workflowType.name: String
        constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is
        swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; TypeAlreadyExistsFault; UnknownResourceFault ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.undeprecate_workflow_type(x_amz_target, request_options=request_options))

    def untag_resource(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Remove a tag from a Amazon SWF domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AmazonSimpleWorkflowServiceWithRawResponse:
        return self._with_raw_response


class AsyncAmazonSimpleWorkflowService:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAmazonSimpleWorkflowServiceWithRawResponse(client, server, auth)

    async def count_closed_workflow_executions(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns the number of closed workflow executions within the given domain that meet the specified filtering
        criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect
        recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon
        SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified
        domains. Use an Action element to allow or deny permission to call this action. Constrain the following
        parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is
        swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version:
        String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to
        invoke the action, or the parameter values fall outside the specified constraints, the action fails. The
        associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
        policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.count_closed_workflow_executions(
                x_amz_target, request_options=request_options
            ),
        )

    async def count_open_workflow_executions(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns the number of open workflow executions within the given domain that meet the specified filtering
        criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect
        recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon
        SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified
        domains. Use an Action element to allow or deny permission to call this action. Constrain the following
        parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is
        swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version:
        String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to
        invoke the action, or the parameter values fall outside the specified constraints, the action fails. The
        associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
        policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.count_open_workflow_executions(x_amz_target, request_options=request_options)
        )

    async def count_pending_activity_tasks(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns the estimated number of activity tasks in the specified task list. The count returned is an
        approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever
        scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to
        Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only
        specified domains. Use an Action element to allow or deny permission to call this action. Constrain the
        taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to
        access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.count_pending_activity_tasks(x_amz_target, request_options=request_options)
        )

    async def count_pending_decision_tasks(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns the estimated number of decision tasks in the specified task list. The count returned is an
        approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever
        scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to
        Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only
        specified domains. Use an Action element to allow or deny permission to call this action. Constrain the
        taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to
        access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.count_pending_decision_tasks(x_amz_target, request_options=request_options)
        )

    async def deprecate_activity_type(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deprecates the specified activity type. After an activity type has been deprecated, you cannot create new
        tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to
        run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:
        Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element
        to allow or deny permission to call this action. Constrain the following parameters by using a Condition element
        with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name.
        activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; TypeDeprecatedFault; UnknownResourceFault ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.deprecate_activity_type(x_amz_target, request_options=request_options)
        )

    async def deprecate_domain(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow
        executions or register new types. However, you can still use visibility actions on this domain. Deprecating a
        domain also deprecates all activity and workflow types registered in the domain. Executions that were started
        before the domain was deprecated continues to run. This operation is eventually consistent. The results are best
        effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Develope

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DomainDeprecatedFault; OperationNotPermittedFault; UnknownResourceFault ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.deprecate_domain(x_amz_target, request_options=request_options))

    async def deprecate_workflow_type(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deprecates the specified workflow type. After a workflow type has been deprecated, you cannot create new
        executions of that type. Executions that were started before the type was deprecated continues to run. A
        deprecated workflow type may still be used when calling visibility actions. This operation is eventually
        consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control
        You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource
        element with the domain name to limit the action to only specified domains. Use an Action element to allow or
        deny permission to call this action. Constrain the following parameters by using a Condition element with the
        appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version:
        String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to
        invoke the action, or the parameter values fall outside the specified constraints, the action fails. The
        associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
        policies, se

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; TypeDeprecatedFault; UnknownResourceFault ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.deprecate_workflow_type(x_amz_target, request_options=request_options)
        )

    async def describe_activity_type(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the specified activity type. This includes configuration settings provided when the
        type was registered and other general information about the type. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. Constrain the following parameters by using a Condition element with the appropriate keys.
        activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint.
        The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or
        the parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_activity_type(x_amz_target, request_options=request_options)
        )

    async def describe_domain(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the specified domain, including description and status. Access Control You can use
        IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the
        domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to
        call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_domain(x_amz_target, request_options=request_options))

    async def describe_workflow_execution(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the specified workflow execution including its type and some statistics. This
        operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and
        changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cause
        parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_workflow_execution(x_amz_target, request_options=request_options)
        )

    async def describe_workflow_type(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the specified workflow type. This includes configuration settings specified when
        the type was registered and other information such as creation date, current status, etc. Access Control You can
        use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with
        the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission
        to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.
        workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint.
        The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or
        the parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_workflow_type(x_amz_target, request_options=request_options)
        )

    async def get_workflow_execution_history(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns the history of the specified workflow execution. The results may be split into multiple pages. To
        retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This
        operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and
        changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cause
        parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_workflow_execution_history(x_amz_target, request_options=request_options)
        )

    async def list_activity_types(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about all activities registered in the specified domain that match the specified name and
        registration status. The result includes information like creation date, current status of the activity, etc.
        The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the
        nextPageToken returned by the initial call. Access Control You can use IAM policies to control this action's
        access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to
        only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an
        IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke
        the action, or the parameter values fall outside the specified constraints, the action fails. The associated
        event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see
        Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_activity_types(x_amz_target, request_options=request_options))

    async def list_closed_workflow_executions(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The
        results may be split into multiple pages. To retrieve subsequent pages, make the call again using the
        nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort
        and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String
        constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name.
        typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient
        permissions to invoke the action, or the parameter values fall outside the specified constraints, the action
        fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and e

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_closed_workflow_executions(x_amz_target, request_options=request_options)
        )

    async def list_domains(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns the list of domains registered in the account. The results may be split into multiple pages. To
        retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This
        operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and
        changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. The element
        must be set to arn:aws:swf::AccountID:domain/*, where AccountID is the account ID, with no dashes. Use an Action
        element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's
        parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
        outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_domains(x_amz_target, request_options=request_options))

    async def list_open_workflow_executions(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The
        results may be split into multiple pages. To retrieve subsequent pages, make the call again using the
        nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort
        and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String
        constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name.
        typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient
        permissions to invoke the action, or the parameter values fall outside the specified constraints, the action
        fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and exa

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_open_workflow_executions(x_amz_target, request_options=request_options)
        )

    async def list_tags_for_resource(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """List tags for a given domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options)
        )

    async def list_workflow_types(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about workflow types in the specified domain. The results may be split into multiple
        pages that can be retrieved by making the call repeatedly. Access Control You can use IAM policies to control
        this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit
        the action to only specified domains. Use an Action element to allow or deny permission to call this action. You
        cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient
        permissions to invoke the action, or the parameter values fall outside the specified constraints, the action
        fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and
        example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_workflow_types(x_amz_target, request_options=request_options))

    async def poll_for_activity_task(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used by workers to get an ActivityTask from the specified activity taskList. This initiates a long poll,
        where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum
        time the service holds on to the request before responding is 60 seconds. If no task is available within 60
        seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is
        returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its
        type to identify and process it correctly. Workers should set their client side socket timeout to at least 70
        seconds (10 seconds higher than the maximum time service may hold the poll request). Access Control You can use
        IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the
        domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to
        call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name
        key to allow the action to access only certain task lists. If the caller doesn't have sufficient pe

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.poll_for_activity_task(x_amz_target, request_options=request_options)
        )

    async def poll_for_decision_task(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used by deciders to get a DecisionTask from the specified decision taskList. A decision task may be returned
        for any open workflow execution that is using the specified task list. The task includes a paginated view of the
        history of the workflow execution. The decider should use the workflow type and the history to determine how to
        properly handle the task. This action initiates a long poll, where the service holds the HTTP connection open
        and responds as soon a task becomes available. If no decision task is available in the specified task list
        before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means
        that a DecisionTask is returned, but that the value of taskToken is an empty string. Deciders should set their
        client side socket timeout to at least 70 seconds (10 seconds higher than the timeout). Because the number of
        workflow history events for a single workflow execution might be very large, the result returned might be split
        up across a number of pages. To retrieve subsequent pages, make additional calls to PollForDecisionTask using
        the nextPageToken returned by the initial call. Note that you do not call GetWorkflowExecutionH

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.poll_for_decision_task(x_amz_target, request_options=request_options)
        )

    async def record_activity_task_heartbeat(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used by activity workers to report to the service that the ActivityTask represented by the specified
        taskToken is still making progress. The worker can also specify details of the progress, for example percent
        complete, using the details parameter. This action can also be used by the worker as a mechanism to check if
        cancellation is being requested for the activity task. If a cancellation is being attempted for the specified
        task, then the boolean cancelRequested flag returned by the service is set to true. This action resets the
        taskHeartbeatTimeout clock. The taskHeartbeatTimeout is specified in RegisterActivityType. This action doesn't
        in itself create an event in the workflow execution history. However, if the task times out, the workflow
        execution history contains a ActivityTaskTimedOut event that contains the information from the last heartbeat
        generated by the activity worker. The taskStartToCloseTimeout of an activity type is the maximum duration of an
        activity task, regardless of the number of RecordActivityTaskHeartbeat requests received. The
        taskStartToCloseTimeout is also specified in RegisterActivityType. This operation is only useful for long-lived
        activities to repor

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.record_activity_task_heartbeat(x_amz_target, request_options=request_options)
        )

    async def register_activity_type(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Registers a new activity type along with its configuration settings in the specified domain. A
        TypeAlreadyExists fault is returned if the type already exists in the domain. You cannot change any
        configuration settings of the type after its registration, and it must be registered as a new version. Access
        Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a
        Resource element with the domain name to limit the action to only specified domains. Use an Action element to
        allow or deny permission to call this action. Constrain the following parameters by using a Condition element
        with the appropriate keys. defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name:
        String constraint. The key is swf:name. version: String constraint. The key is swf:version. If the caller
        doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified
        constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; TypeAlreadyExistsFault; UnknownResourceFault
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.register_activity_type(x_amz_target, request_options=request_options)
        )

    async def register_domain(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Registers a new domain. Access Control You can use IAM policies to control this action's access to Amazon SWF
        resources as follows: You cannot use an IAM policy to control domain access for this action. The name of the
        domain being registered is available as the resource of this action. Use an Action element to allow or deny
        permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the
        caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the
        specified constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DomainAlreadyExistsFault; LimitExceededFault; OperationNotPermittedFault; TooManyTagsFault
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.register_domain(x_amz_target, request_options=request_options))

    async def register_workflow_type(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Registers a new workflow type and its configuration settings in the specified domain. The retention period
        for the workflow history is set by the RegisterDomain action. If the type already exists, then a
        TypeAlreadyExists fault is returned. You cannot change the configuration settings of a workflow type once it is
        registered and it must be registered as a new version. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. defaultTaskList.name:
        String constraint. The key is swf:defaultTaskList.name. name: String constraint. The key is swf:name. version:
        String constraint. The key is swf:version. If the caller doesn't have sufficient permissions to invoke the
        action, or the parameter values fall outside the specified constraints, the action fails. The associated event
        attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using
        IAM to

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; TypeAlreadyExistsFault; UnknownResourceFault
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.register_workflow_type(x_amz_target, request_options=request_options)
        )

    async def request_cancel_workflow_execution(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by
        the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a
        whole. It is up to the decider to take appropriate actions when it receives an execution history with this
        event. If the runId isn't specified, the WorkflowExecutionCancelRequested event is recorded in the history of
        the current open workflow execution with the specified workflowId in the domain. Because this action allows the
        workflow to properly clean up and gracefully close, it should be used instead of TerminateWorkflowExecution when
        possible. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cau

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.request_cancel_workflow_execution(
                x_amz_target, request_options=request_options
            ),
        )

    async def respond_activity_task_canceled(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully
        canceled. Additional details can be provided using the details argument. These details (if provided) appear in
        the ActivityTaskCanceled event added to the workflow history. Only use this operation if the canceled flag of a
        RecordActivityTaskHeartbeat request returns true and if the activity can be safely undone or abandoned. A task
        is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open
        while a worker is processing it. A task is closed after it has been specified in a call to
        RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out.
        Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use
        a Resource element with the domain name to limit the action to only specified domains. Use an Action element to
        allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's
        parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
        outside t

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.respond_activity_task_canceled(x_amz_target, request_options=request_options)
        )

    async def respond_activity_task_completed(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully
        with a result (if provided). The result appears in the ActivityTaskCompleted event in the workflow history. If
        the requested task doesn't complete successfully, use RespondActivityTaskFailed instead. If the worker finds
        that the task is canceled through the canceled flag returned by RecordActivityTaskHeartbeat, it should cancel
        the task, clean up and then call RespondActivityTaskCanceled. A task is considered open from the time that it is
        scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is
        closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled,
        RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action. You
        cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient p

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.respond_activity_task_completed(x_amz_target, request_options=request_options)
        )

    async def respond_activity_task_failed(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason
        (if specified). The reason and details appear in the ActivityTaskFailed event added to the workflow history. A
        task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as
        open while a worker is processing it. A task is closed after it has been specified in a call to
        RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out.
        Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use
        a Resource element with the domain name to limit the action to only specified domains. Use an Action element to
        allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's
        parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
        outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF W

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.respond_activity_task_failed(x_amz_target, request_options=request_options)
        )

    async def respond_decision_task_completed(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully
        completed. The decisions argument specifies the list of decisions made while processing the task. A
        DecisionTaskCompleted event is added to the workflow history. The executionContext specified is attached to the
        event in the workflow execution history. Access Control If an IAM policy grants permission to use
        RespondDecisionTaskCompleted, it can express permissions for the list of decisions in the decisions parameter.
        Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as
        readable as possible, you can express permissions on decisions as if they were actual API calls, including
        applying conditions to some parameters. For more information, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.respond_decision_task_completed(x_amz_target, request_options=request_options)
        )

    async def signal_workflow_execution(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for
        the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the
        specified user defined signalName and input (if provided). If a runId isn't specified, then the
        WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching
        workflowId in the domain. If the specified workflow execution isn't open, this method fails with
        UnknownResource. Access Control You can use IAM policies to control this action's access to Amazon SWF resources
        as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cause
        parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.signal_workflow_execution(x_amz_target, request_options=request_options)
        )

    async def start_workflow_execution(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts an execution of the workflow type in the specified domain using the provided workflowId and input
        data. This action returns the newly started workflow execution. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. Constrain the following parameters by using a Condition element with the appropriate keys.
        tagList.member.0: The key is swf:tagList.member.0. tagList.member.1: The key is swf:tagList.member.1.
        tagList.member.2: The key is swf:tagList.member.2. tagList.member.3: The key is swf:tagList.member.3.
        tagList.member.4: The key is swf:tagList.member.4. taskList: String constraint. The key is swf:taskList.name.
        workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint.
        The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or
        the parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DefaultUndefinedFault; LimitExceededFault; OperationNotPermittedFault; TypeDeprecatedFault;
                UnknownResourceFault; WorkflowExecutionAlreadyStartedFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_workflow_execution(x_amz_target, request_options=request_options)
        )

    async def tag_resource(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Add a tag to a Amazon SWF domain. Amazon SWF supports a maximum of 50 tags per resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; TooManyTagsFault; UnknownResourceFault ``error``
                is ``RawError``."""
        return unwrap(await self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    async def terminate_workflow_execution(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the
        given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when
        starting this execution, is applied to any open child workflow executions of this workflow execution. If the
        identified workflow execution was in progress, it is terminated immediately. If a runId isn't specified, then
        the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching
        workflowId in the domain. You should consider using RequestCancelWorkflowExecution action instead because it
        allows the workflow to gracefully close while TerminateWorkflowExecution doesn't. Access Control You can use IAM
        policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the
        domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to
        call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified con

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.terminate_workflow_execution(x_amz_target, request_options=request_options)
        )

    async def undeprecate_activity_type(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Undeprecates a previously deprecated activity type. After an activity type has been undeprecated, you can
        create new tasks of that activity type. This operation is eventually consistent. The results are best effort and
        may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name:
        String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is
        swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; TypeAlreadyExistsFault; UnknownResourceFault ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.undeprecate_activity_type(x_amz_target, request_options=request_options)
        )

    async def undeprecate_domain(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create
        new workflow executions or register new types. This operation is eventually consistent. The results are best
        effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DomainAlreadyExistsFault; OperationNotPermittedFault; UnknownResourceFault ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.undeprecate_domain(x_amz_target, request_options=request_options))

    async def undeprecate_workflow_type(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Undeprecates a previously deprecated workflow type. After a workflow type has been undeprecated, you can
        create new executions of that type. This operation is eventually consistent. The results are best effort and may
        not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's
        access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to
        only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the
        following parameters by using a Condition element with the appropriate keys. workflowType.name: String
        constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is
        swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: OperationNotPermittedFault; TypeAlreadyExistsFault; UnknownResourceFault ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.undeprecate_workflow_type(x_amz_target, request_options=request_options)
        )

    async def untag_resource(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Remove a tag from a Amazon SWF domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: LimitExceededFault; OperationNotPermittedFault; UnknownResourceFault ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAmazonSimpleWorkflowServiceWithRawResponse:
        return self._with_raw_response


class AmazonSimpleWorkflowServiceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def count_closed_workflow_executions(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CountClosedWorkflowExecutionsErrorBody]:
        """Returns the number of closed workflow executions within the given domain that meet the specified filtering
        criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect
        recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon
        SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified
        domains. Use an Action element to allow or deny permission to call this action. Constrain the following
        parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is
        swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version:
        String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to
        invoke the action, or the parameter values fall outside the specified constraints, the action fails. The
        associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
        policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CountClosedWorkflowExecutions"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=count_closed_workflow_executions_error_mapper,
            request_options=request_options,
        )

    def count_open_workflow_executions(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CountOpenWorkflowExecutionsErrorBody]:
        """Returns the number of open workflow executions within the given domain that meet the specified filtering
        criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect
        recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon
        SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified
        domains. Use an Action element to allow or deny permission to call this action. Constrain the following
        parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is
        swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version:
        String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to
        invoke the action, or the parameter values fall outside the specified constraints, the action fails. The
        associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
        policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CountOpenWorkflowExecutions"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=count_open_workflow_executions_error_mapper,
            request_options=request_options,
        )

    def count_pending_activity_tasks(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CountPendingActivityTasksErrorBody]:
        """Returns the estimated number of activity tasks in the specified task list. The count returned is an
        approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever
        scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to
        Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only
        specified domains. Use an Action element to allow or deny permission to call this action. Constrain the
        taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to
        access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CountPendingActivityTasks"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=count_pending_activity_tasks_error_mapper,
            request_options=request_options,
        )

    def count_pending_decision_tasks(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CountPendingDecisionTasksErrorBody]:
        """Returns the estimated number of decision tasks in the specified task list. The count returned is an
        approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever
        scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to
        Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only
        specified domains. Use an Action element to allow or deny permission to call this action. Constrain the
        taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to
        access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CountPendingDecisionTasks"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=count_pending_decision_tasks_error_mapper,
            request_options=request_options,
        )

    def deprecate_activity_type(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeprecateActivityTypeErrorBody]:
        """Deprecates the specified activity type. After an activity type has been deprecated, you cannot create new
        tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to
        run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:
        Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element
        to allow or deny permission to call this action. Constrain the following parameters by using a Condition element
        with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name.
        activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeprecateActivityType"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=deprecate_activity_type_error_mapper,
            request_options=request_options,
        )

    def deprecate_domain(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeprecateDomainErrorBody]:
        """Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow
        executions or register new types. However, you can still use visibility actions on this domain. Deprecating a
        domain also deprecates all activity and workflow types registered in the domain. Executions that were started
        before the domain was deprecated continues to run. This operation is eventually consistent. The results are best
        effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Develope

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeprecateDomain"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=deprecate_domain_error_mapper,
            request_options=request_options,
        )

    def deprecate_workflow_type(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeprecateWorkflowTypeErrorBody]:
        """Deprecates the specified workflow type. After a workflow type has been deprecated, you cannot create new
        executions of that type. Executions that were started before the type was deprecated continues to run. A
        deprecated workflow type may still be used when calling visibility actions. This operation is eventually
        consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control
        You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource
        element with the domain name to limit the action to only specified domains. Use an Action element to allow or
        deny permission to call this action. Constrain the following parameters by using a Condition element with the
        appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version:
        String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to
        invoke the action, or the parameter values fall outside the specified constraints, the action fails. The
        associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
        policies, se

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeprecateWorkflowType"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=deprecate_workflow_type_error_mapper,
            request_options=request_options,
        )

    def describe_activity_type(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeActivityTypeErrorBody]:
        """Returns information about the specified activity type. This includes configuration settings provided when the
        type was registered and other general information about the type. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. Constrain the following parameters by using a Condition element with the appropriate keys.
        activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint.
        The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or
        the parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeActivityType"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_activity_type_error_mapper,
            request_options=request_options,
        )

    def describe_domain(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDomainErrorBody]:
        """Returns information about the specified domain, including description and status. Access Control You can use
        IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the
        domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to
        call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDomain"),
            headers=[param[XAmzTarget26OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_domain_error_mapper,
            request_options=request_options,
        )

    def describe_workflow_execution(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeWorkflowExecutionErrorBody]:
        """Returns information about the specified workflow execution including its type and some statistics. This
        operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and
        changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cause
        parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeWorkflowExecution"),
            headers=[param[XAmzTarget29OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_workflow_execution_error_mapper,
            request_options=request_options,
        )

    def describe_workflow_type(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeWorkflowTypeErrorBody]:
        """Returns information about the specified workflow type. This includes configuration settings specified when
        the type was registered and other information such as creation date, current status, etc. Access Control You can
        use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with
        the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission
        to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.
        workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint.
        The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or
        the parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeWorkflowType"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_workflow_type_error_mapper,
            request_options=request_options,
        )

    def get_workflow_execution_history(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetWorkflowExecutionHistoryErrorBody]:
        """Returns the history of the specified workflow execution. The results may be split into multiple pages. To
        retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This
        operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and
        changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cause
        parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetWorkflowExecutionHistory"),
            headers=[param[XAmzTarget31OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_workflow_execution_history_error_mapper,
            request_options=request_options,
        )

    def list_activity_types(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListActivityTypesErrorBody]:
        """Returns information about all activities registered in the specified domain that match the specified name and
        registration status. The result includes information like creation date, current status of the activity, etc.
        The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the
        nextPageToken returned by the initial call. Access Control You can use IAM policies to control this action's
        access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to
        only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an
        IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke
        the action, or the parameter values fall outside the specified constraints, the action fails. The associated
        event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see
        Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListActivityTypes"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_activity_types_error_mapper,
            request_options=request_options,
        )

    def list_closed_workflow_executions(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListClosedWorkflowExecutionsErrorBody]:
        """Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The
        results may be split into multiple pages. To retrieve subsequent pages, make the call again using the
        nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort
        and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String
        constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name.
        typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient
        permissions to invoke the action, or the parameter values fall outside the specified constraints, the action
        fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and e

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListClosedWorkflowExecutions"),
            headers=[param[XAmzTarget32OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_closed_workflow_executions_error_mapper,
            request_options=request_options,
        )

    def list_domains(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDomainsErrorBody]:
        """Returns the list of domains registered in the account. The results may be split into multiple pages. To
        retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This
        operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and
        changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. The element
        must be set to arn:aws:swf::AccountID:domain/*, where AccountID is the account ID, with no dashes. Use an Action
        element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's
        parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
        outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDomains"),
            headers=[param[XAmzTarget27OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_domains_error_mapper,
            request_options=request_options,
        )

    def list_open_workflow_executions(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListOpenWorkflowExecutionsErrorBody]:
        """Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The
        results may be split into multiple pages. To retrieve subsequent pages, make the call again using the
        nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort
        and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String
        constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name.
        typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient
        permissions to invoke the action, or the parameter values fall outside the specified constraints, the action
        fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and exa

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListOpenWorkflowExecutions"),
            headers=[param[XAmzTarget33OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_open_workflow_executions_error_mapper,
            request_options=request_options,
        )

    def list_tags_for_resource(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """List tags for a given domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[param[XAmzTarget34OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    def list_workflow_types(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListWorkflowTypesErrorBody]:
        """Returns information about workflow types in the specified domain. The results may be split into multiple
        pages that can be retrieved by making the call repeatedly. Access Control You can use IAM policies to control
        this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit
        the action to only specified domains. Use an Action element to allow or deny permission to call this action. You
        cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient
        permissions to invoke the action, or the parameter values fall outside the specified constraints, the action
        fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and
        example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListWorkflowTypes"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_workflow_types_error_mapper,
            request_options=request_options,
        )

    def poll_for_activity_task(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PollForActivityTaskErrorBody]:
        """Used by workers to get an ActivityTask from the specified activity taskList. This initiates a long poll,
        where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum
        time the service holds on to the request before responding is 60 seconds. If no task is available within 60
        seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is
        returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its
        type to identify and process it correctly. Workers should set their client side socket timeout to at least 70
        seconds (10 seconds higher than the maximum time service may hold the poll request). Access Control You can use
        IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the
        domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to
        call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name
        key to allow the action to access only certain task lists. If the caller doesn't have sufficient pe

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PollForActivityTask"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=poll_for_activity_task_error_mapper,
            request_options=request_options,
        )

    def poll_for_decision_task(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PollForDecisionTaskErrorBody]:
        """Used by deciders to get a DecisionTask from the specified decision taskList. A decision task may be returned
        for any open workflow execution that is using the specified task list. The task includes a paginated view of the
        history of the workflow execution. The decider should use the workflow type and the history to determine how to
        properly handle the task. This action initiates a long poll, where the service holds the HTTP connection open
        and responds as soon a task becomes available. If no decision task is available in the specified task list
        before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means
        that a DecisionTask is returned, but that the value of taskToken is an empty string. Deciders should set their
        client side socket timeout to at least 70 seconds (10 seconds higher than the timeout). Because the number of
        workflow history events for a single workflow execution might be very large, the result returned might be split
        up across a number of pages. To retrieve subsequent pages, make additional calls to PollForDecisionTask using
        the nextPageToken returned by the initial call. Note that you do not call GetWorkflowExecutionH

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PollForDecisionTask"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=poll_for_decision_task_error_mapper,
            request_options=request_options,
        )

    def record_activity_task_heartbeat(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RecordActivityTaskHeartbeatErrorBody]:
        """Used by activity workers to report to the service that the ActivityTask represented by the specified
        taskToken is still making progress. The worker can also specify details of the progress, for example percent
        complete, using the details parameter. This action can also be used by the worker as a mechanism to check if
        cancellation is being requested for the activity task. If a cancellation is being attempted for the specified
        task, then the boolean cancelRequested flag returned by the service is set to true. This action resets the
        taskHeartbeatTimeout clock. The taskHeartbeatTimeout is specified in RegisterActivityType. This action doesn't
        in itself create an event in the workflow execution history. However, if the task times out, the workflow
        execution history contains a ActivityTaskTimedOut event that contains the information from the last heartbeat
        generated by the activity worker. The taskStartToCloseTimeout of an activity type is the maximum duration of an
        activity task, regardless of the number of RecordActivityTaskHeartbeat requests received. The
        taskStartToCloseTimeout is also specified in RegisterActivityType. This operation is only useful for long-lived
        activities to repor

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RecordActivityTaskHeartbeat"),
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=record_activity_task_heartbeat_error_mapper,
            request_options=request_options,
        )

    def register_activity_type(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RegisterActivityTypeErrorBody]:
        """Registers a new activity type along with its configuration settings in the specified domain. A
        TypeAlreadyExists fault is returned if the type already exists in the domain. You cannot change any
        configuration settings of the type after its registration, and it must be registered as a new version. Access
        Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a
        Resource element with the domain name to limit the action to only specified domains. Use an Action element to
        allow or deny permission to call this action. Constrain the following parameters by using a Condition element
        with the appropriate keys. defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name:
        String constraint. The key is swf:name. version: String constraint. The key is swf:version. If the caller
        doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified
        constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RegisterActivityType"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=register_activity_type_error_mapper,
            request_options=request_options,
        )

    def register_domain(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RegisterDomainErrorBody]:
        """Registers a new domain. Access Control You can use IAM policies to control this action's access to Amazon SWF
        resources as follows: You cannot use an IAM policy to control domain access for this action. The name of the
        domain being registered is available as the resource of this action. Use an Action element to allow or deny
        permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the
        caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the
        specified constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RegisterDomain"),
            headers=[param[XAmzTarget28OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=register_domain_error_mapper,
            request_options=request_options,
        )

    def register_workflow_type(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RegisterWorkflowTypeErrorBody]:
        """Registers a new workflow type and its configuration settings in the specified domain. The retention period
        for the workflow history is set by the RegisterDomain action. If the type already exists, then a
        TypeAlreadyExists fault is returned. You cannot change the configuration settings of a workflow type once it is
        registered and it must be registered as a new version. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. defaultTaskList.name:
        String constraint. The key is swf:defaultTaskList.name. name: String constraint. The key is swf:name. version:
        String constraint. The key is swf:version. If the caller doesn't have sufficient permissions to invoke the
        action, or the parameter values fall outside the specified constraints, the action fails. The associated event
        attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using
        IAM to

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RegisterWorkflowType"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=register_workflow_type_error_mapper,
            request_options=request_options,
        )

    def request_cancel_workflow_execution(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RequestCancelWorkflowExecutionErrorBody]:
        """Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by
        the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a
        whole. It is up to the decider to take appropriate actions when it receives an execution history with this
        event. If the runId isn't specified, the WorkflowExecutionCancelRequested event is recorded in the history of
        the current open workflow execution with the specified workflowId in the domain. Because this action allows the
        workflow to properly clean up and gracefully close, it should be used instead of TerminateWorkflowExecution when
        possible. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cau

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RequestCancelWorkflowExecution"),
            headers=[param[XAmzTarget10OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=request_cancel_workflow_execution_error_mapper,
            request_options=request_options,
        )

    def respond_activity_task_canceled(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RespondActivityTaskCanceledErrorBody]:
        """Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully
        canceled. Additional details can be provided using the details argument. These details (if provided) appear in
        the ActivityTaskCanceled event added to the workflow history. Only use this operation if the canceled flag of a
        RecordActivityTaskHeartbeat request returns true and if the activity can be safely undone or abandoned. A task
        is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open
        while a worker is processing it. A task is closed after it has been specified in a call to
        RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out.
        Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use
        a Resource element with the domain name to limit the action to only specified domains. Use an Action element to
        allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's
        parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
        outside t

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RespondActivityTaskCanceled"),
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=respond_activity_task_canceled_error_mapper,
            request_options=request_options,
        )

    def respond_activity_task_completed(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RespondActivityTaskCompletedErrorBody]:
        """Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully
        with a result (if provided). The result appears in the ActivityTaskCompleted event in the workflow history. If
        the requested task doesn't complete successfully, use RespondActivityTaskFailed instead. If the worker finds
        that the task is canceled through the canceled flag returned by RecordActivityTaskHeartbeat, it should cancel
        the task, clean up and then call RespondActivityTaskCanceled. A task is considered open from the time that it is
        scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is
        closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled,
        RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action. You
        cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient p

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RespondActivityTaskCompleted"),
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=respond_activity_task_completed_error_mapper,
            request_options=request_options,
        )

    def respond_activity_task_failed(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RespondActivityTaskFailedErrorBody]:
        """Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason
        (if specified). The reason and details appear in the ActivityTaskFailed event added to the workflow history. A
        task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as
        open while a worker is processing it. A task is closed after it has been specified in a call to
        RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out.
        Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use
        a Resource element with the domain name to limit the action to only specified domains. Use an Action element to
        allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's
        parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
        outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF W

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RespondActivityTaskFailed"),
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=respond_activity_task_failed_error_mapper,
            request_options=request_options,
        )

    def respond_decision_task_completed(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RespondDecisionTaskCompletedErrorBody]:
        """Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully
        completed. The decisions argument specifies the list of decisions made while processing the task. A
        DecisionTaskCompleted event is added to the workflow history. The executionContext specified is attached to the
        event in the workflow execution history. Access Control If an IAM policy grants permission to use
        RespondDecisionTaskCompleted, it can express permissions for the list of decisions in the decisions parameter.
        Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as
        readable as possible, you can express permissions on decisions as if they were actual API calls, including
        applying conditions to some parameters. For more information, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RespondDecisionTaskCompleted"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=respond_decision_task_completed_error_mapper,
            request_options=request_options,
        )

    def signal_workflow_execution(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SignalWorkflowExecutionErrorBody]:
        """Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for
        the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the
        specified user defined signalName and input (if provided). If a runId isn't specified, then the
        WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching
        workflowId in the domain. If the specified workflow execution isn't open, this method fails with
        UnknownResource. Access Control You can use IAM policies to control this action's access to Amazon SWF resources
        as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cause
        parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SignalWorkflowExecution"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=signal_workflow_execution_error_mapper,
            request_options=request_options,
        )

    def start_workflow_execution(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartWorkflowExecutionErrorBody]:
        """Starts an execution of the workflow type in the specified domain using the provided workflowId and input
        data. This action returns the newly started workflow execution. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. Constrain the following parameters by using a Condition element with the appropriate keys.
        tagList.member.0: The key is swf:tagList.member.0. tagList.member.1: The key is swf:tagList.member.1.
        tagList.member.2: The key is swf:tagList.member.2. tagList.member.3: The key is swf:tagList.member.3.
        tagList.member.4: The key is swf:tagList.member.4. taskList: String constraint. The key is swf:taskList.name.
        workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint.
        The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or
        the parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartWorkflowExecution"),
            headers=[param[XAmzTarget30OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_workflow_execution_error_mapper,
            request_options=request_options,
        )

    def tag_resource(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Add a tag to a Amazon SWF domain. Amazon SWF supports a maximum of 50 tags per resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[param[XAmzTarget35OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    def terminate_workflow_execution(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, TerminateWorkflowExecutionErrorBody]:
        """Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the
        given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when
        starting this execution, is applied to any open child workflow executions of this workflow execution. If the
        identified workflow execution was in progress, it is terminated immediately. If a runId isn't specified, then
        the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching
        workflowId in the domain. You should consider using RequestCancelWorkflowExecution action instead because it
        allows the workflow to gracefully close while TerminateWorkflowExecution doesn't. Access Control You can use IAM
        policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the
        domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to
        call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified con

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TerminateWorkflowExecution"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=terminate_workflow_execution_error_mapper,
            request_options=request_options,
        )

    def undeprecate_activity_type(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UndeprecateActivityTypeErrorBody]:
        """Undeprecates a previously deprecated activity type. After an activity type has been undeprecated, you can
        create new tasks of that activity type. This operation is eventually consistent. The results are best effort and
        may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name:
        String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is
        swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UndeprecateActivityType"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=undeprecate_activity_type_error_mapper,
            request_options=request_options,
        )

    def undeprecate_domain(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UndeprecateDomainErrorBody]:
        """Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create
        new workflow executions or register new types. This operation is eventually consistent. The results are best
        effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UndeprecateDomain"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=undeprecate_domain_error_mapper,
            request_options=request_options,
        )

    def undeprecate_workflow_type(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UndeprecateWorkflowTypeErrorBody]:
        """Undeprecates a previously deprecated workflow type. After a workflow type has been undeprecated, you can
        create new executions of that type. This operation is eventually consistent. The results are best effort and may
        not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's
        access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to
        only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the
        following parameters by using a Condition element with the appropriate keys. workflowType.name: String
        constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is
        swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UndeprecateWorkflowType"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=undeprecate_workflow_type_error_mapper,
            request_options=request_options,
        )

    def untag_resource(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Remove a tag from a Amazon SWF domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[param[XAmzTarget36OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )


class AsyncAmazonSimpleWorkflowServiceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def count_closed_workflow_executions(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CountClosedWorkflowExecutionsErrorBody]:
        """Returns the number of closed workflow executions within the given domain that meet the specified filtering
        criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect
        recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon
        SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified
        domains. Use an Action element to allow or deny permission to call this action. Constrain the following
        parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is
        swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version:
        String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to
        invoke the action, or the parameter values fall outside the specified constraints, the action fails. The
        associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
        policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CountClosedWorkflowExecutions"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=count_closed_workflow_executions_error_mapper,
            request_options=request_options,
        )

    async def count_open_workflow_executions(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CountOpenWorkflowExecutionsErrorBody]:
        """Returns the number of open workflow executions within the given domain that meet the specified filtering
        criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect
        recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon
        SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified
        domains. Use an Action element to allow or deny permission to call this action. Constrain the following
        parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is
        swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version:
        String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to
        invoke the action, or the parameter values fall outside the specified constraints, the action fails. The
        associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
        policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CountOpenWorkflowExecutions"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=count_open_workflow_executions_error_mapper,
            request_options=request_options,
        )

    async def count_pending_activity_tasks(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CountPendingActivityTasksErrorBody]:
        """Returns the estimated number of activity tasks in the specified task list. The count returned is an
        approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever
        scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to
        Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only
        specified domains. Use an Action element to allow or deny permission to call this action. Constrain the
        taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to
        access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CountPendingActivityTasks"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=count_pending_activity_tasks_error_mapper,
            request_options=request_options,
        )

    async def count_pending_decision_tasks(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CountPendingDecisionTasksErrorBody]:
        """Returns the estimated number of decision tasks in the specified task list. The count returned is an
        approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever
        scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to
        Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only
        specified domains. Use an Action element to allow or deny permission to call this action. Constrain the
        taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to
        access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CountPendingDecisionTasks"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=count_pending_decision_tasks_error_mapper,
            request_options=request_options,
        )

    async def deprecate_activity_type(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeprecateActivityTypeErrorBody]:
        """Deprecates the specified activity type. After an activity type has been deprecated, you cannot create new
        tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to
        run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:
        Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element
        to allow or deny permission to call this action. Constrain the following parameters by using a Condition element
        with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name.
        activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeprecateActivityType"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=deprecate_activity_type_error_mapper,
            request_options=request_options,
        )

    async def deprecate_domain(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeprecateDomainErrorBody]:
        """Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow
        executions or register new types. However, you can still use visibility actions on this domain. Deprecating a
        domain also deprecates all activity and workflow types registered in the domain. Executions that were started
        before the domain was deprecated continues to run. This operation is eventually consistent. The results are best
        effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Develope

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeprecateDomain"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=deprecate_domain_error_mapper,
            request_options=request_options,
        )

    async def deprecate_workflow_type(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeprecateWorkflowTypeErrorBody]:
        """Deprecates the specified workflow type. After a workflow type has been deprecated, you cannot create new
        executions of that type. Executions that were started before the type was deprecated continues to run. A
        deprecated workflow type may still be used when calling visibility actions. This operation is eventually
        consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control
        You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource
        element with the domain name to limit the action to only specified domains. Use an Action element to allow or
        deny permission to call this action. Constrain the following parameters by using a Condition element with the
        appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version:
        String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to
        invoke the action, or the parameter values fall outside the specified constraints, the action fails. The
        associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
        policies, se

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeprecateWorkflowType"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=deprecate_workflow_type_error_mapper,
            request_options=request_options,
        )

    async def describe_activity_type(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeActivityTypeErrorBody]:
        """Returns information about the specified activity type. This includes configuration settings provided when the
        type was registered and other general information about the type. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. Constrain the following parameters by using a Condition element with the appropriate keys.
        activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint.
        The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or
        the parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeActivityType"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_activity_type_error_mapper,
            request_options=request_options,
        )

    async def describe_domain(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDomainErrorBody]:
        """Returns information about the specified domain, including description and status. Access Control You can use
        IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the
        domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to
        call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDomain"),
            headers=[param[XAmzTarget26OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_domain_error_mapper,
            request_options=request_options,
        )

    async def describe_workflow_execution(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeWorkflowExecutionErrorBody]:
        """Returns information about the specified workflow execution including its type and some statistics. This
        operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and
        changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cause
        parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeWorkflowExecution"),
            headers=[param[XAmzTarget29OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_workflow_execution_error_mapper,
            request_options=request_options,
        )

    async def describe_workflow_type(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeWorkflowTypeErrorBody]:
        """Returns information about the specified workflow type. This includes configuration settings specified when
        the type was registered and other information such as creation date, current status, etc. Access Control You can
        use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with
        the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission
        to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.
        workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint.
        The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or
        the parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeWorkflowType"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_workflow_type_error_mapper,
            request_options=request_options,
        )

    async def get_workflow_execution_history(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetWorkflowExecutionHistoryErrorBody]:
        """Returns the history of the specified workflow execution. The results may be split into multiple pages. To
        retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This
        operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and
        changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cause
        parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetWorkflowExecutionHistory"),
            headers=[param[XAmzTarget31OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_workflow_execution_history_error_mapper,
            request_options=request_options,
        )

    async def list_activity_types(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListActivityTypesErrorBody]:
        """Returns information about all activities registered in the specified domain that match the specified name and
        registration status. The result includes information like creation date, current status of the activity, etc.
        The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the
        nextPageToken returned by the initial call. Access Control You can use IAM policies to control this action's
        access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to
        only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an
        IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke
        the action, or the parameter values fall outside the specified constraints, the action fails. The associated
        event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see
        Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListActivityTypes"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_activity_types_error_mapper,
            request_options=request_options,
        )

    async def list_closed_workflow_executions(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListClosedWorkflowExecutionsErrorBody]:
        """Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The
        results may be split into multiple pages. To retrieve subsequent pages, make the call again using the
        nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort
        and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String
        constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name.
        typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient
        permissions to invoke the action, or the parameter values fall outside the specified constraints, the action
        fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and e

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListClosedWorkflowExecutions"),
            headers=[param[XAmzTarget32OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_closed_workflow_executions_error_mapper,
            request_options=request_options,
        )

    async def list_domains(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDomainsErrorBody]:
        """Returns the list of domains registered in the account. The results may be split into multiple pages. To
        retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This
        operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and
        changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. The element
        must be set to arn:aws:swf::AccountID:domain/*, where AccountID is the account ID, with no dashes. Use an Action
        element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's
        parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
        outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDomains"),
            headers=[param[XAmzTarget27OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_domains_error_mapper,
            request_options=request_options,
        )

    async def list_open_workflow_executions(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListOpenWorkflowExecutionsErrorBody]:
        """Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The
        results may be split into multiple pages. To retrieve subsequent pages, make the call again using the
        nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort
        and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String
        constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name.
        typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient
        permissions to invoke the action, or the parameter values fall outside the specified constraints, the action
        fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and exa

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListOpenWorkflowExecutions"),
            headers=[param[XAmzTarget33OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_open_workflow_executions_error_mapper,
            request_options=request_options,
        )

    async def list_tags_for_resource(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """List tags for a given domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[param[XAmzTarget34OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    async def list_workflow_types(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListWorkflowTypesErrorBody]:
        """Returns information about workflow types in the specified domain. The results may be split into multiple
        pages that can be retrieved by making the call repeatedly. Access Control You can use IAM policies to control
        this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit
        the action to only specified domains. Use an Action element to allow or deny permission to call this action. You
        cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient
        permissions to invoke the action, or the parameter values fall outside the specified constraints, the action
        fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and
        example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListWorkflowTypes"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_workflow_types_error_mapper,
            request_options=request_options,
        )

    async def poll_for_activity_task(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PollForActivityTaskErrorBody]:
        """Used by workers to get an ActivityTask from the specified activity taskList. This initiates a long poll,
        where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum
        time the service holds on to the request before responding is 60 seconds. If no task is available within 60
        seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is
        returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its
        type to identify and process it correctly. Workers should set their client side socket timeout to at least 70
        seconds (10 seconds higher than the maximum time service may hold the poll request). Access Control You can use
        IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the
        domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to
        call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name
        key to allow the action to access only certain task lists. If the caller doesn't have sufficient pe

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PollForActivityTask"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=poll_for_activity_task_error_mapper,
            request_options=request_options,
        )

    async def poll_for_decision_task(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PollForDecisionTaskErrorBody]:
        """Used by deciders to get a DecisionTask from the specified decision taskList. A decision task may be returned
        for any open workflow execution that is using the specified task list. The task includes a paginated view of the
        history of the workflow execution. The decider should use the workflow type and the history to determine how to
        properly handle the task. This action initiates a long poll, where the service holds the HTTP connection open
        and responds as soon a task becomes available. If no decision task is available in the specified task list
        before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means
        that a DecisionTask is returned, but that the value of taskToken is an empty string. Deciders should set their
        client side socket timeout to at least 70 seconds (10 seconds higher than the timeout). Because the number of
        workflow history events for a single workflow execution might be very large, the result returned might be split
        up across a number of pages. To retrieve subsequent pages, make additional calls to PollForDecisionTask using
        the nextPageToken returned by the initial call. Note that you do not call GetWorkflowExecutionH

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PollForDecisionTask"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=poll_for_decision_task_error_mapper,
            request_options=request_options,
        )

    async def record_activity_task_heartbeat(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RecordActivityTaskHeartbeatErrorBody]:
        """Used by activity workers to report to the service that the ActivityTask represented by the specified
        taskToken is still making progress. The worker can also specify details of the progress, for example percent
        complete, using the details parameter. This action can also be used by the worker as a mechanism to check if
        cancellation is being requested for the activity task. If a cancellation is being attempted for the specified
        task, then the boolean cancelRequested flag returned by the service is set to true. This action resets the
        taskHeartbeatTimeout clock. The taskHeartbeatTimeout is specified in RegisterActivityType. This action doesn't
        in itself create an event in the workflow execution history. However, if the task times out, the workflow
        execution history contains a ActivityTaskTimedOut event that contains the information from the last heartbeat
        generated by the activity worker. The taskStartToCloseTimeout of an activity type is the maximum duration of an
        activity task, regardless of the number of RecordActivityTaskHeartbeat requests received. The
        taskStartToCloseTimeout is also specified in RegisterActivityType. This operation is only useful for long-lived
        activities to repor

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RecordActivityTaskHeartbeat"),
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=record_activity_task_heartbeat_error_mapper,
            request_options=request_options,
        )

    async def register_activity_type(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RegisterActivityTypeErrorBody]:
        """Registers a new activity type along with its configuration settings in the specified domain. A
        TypeAlreadyExists fault is returned if the type already exists in the domain. You cannot change any
        configuration settings of the type after its registration, and it must be registered as a new version. Access
        Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a
        Resource element with the domain name to limit the action to only specified domains. Use an Action element to
        allow or deny permission to call this action. Constrain the following parameters by using a Condition element
        with the appropriate keys. defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name:
        String constraint. The key is swf:name. version: String constraint. The key is swf:version. If the caller
        doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified
        constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RegisterActivityType"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=register_activity_type_error_mapper,
            request_options=request_options,
        )

    async def register_domain(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RegisterDomainErrorBody]:
        """Registers a new domain. Access Control You can use IAM policies to control this action's access to Amazon SWF
        resources as follows: You cannot use an IAM policy to control domain access for this action. The name of the
        domain being registered is available as the resource of this action. Use an Action element to allow or deny
        permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the
        caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the
        specified constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RegisterDomain"),
            headers=[param[XAmzTarget28OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=register_domain_error_mapper,
            request_options=request_options,
        )

    async def register_workflow_type(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RegisterWorkflowTypeErrorBody]:
        """Registers a new workflow type and its configuration settings in the specified domain. The retention period
        for the workflow history is set by the RegisterDomain action. If the type already exists, then a
        TypeAlreadyExists fault is returned. You cannot change the configuration settings of a workflow type once it is
        registered and it must be registered as a new version. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. defaultTaskList.name:
        String constraint. The key is swf:defaultTaskList.name. name: String constraint. The key is swf:name. version:
        String constraint. The key is swf:version. If the caller doesn't have sufficient permissions to invoke the
        action, or the parameter values fall outside the specified constraints, the action fails. The associated event
        attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using
        IAM to

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RegisterWorkflowType"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=register_workflow_type_error_mapper,
            request_options=request_options,
        )

    async def request_cancel_workflow_execution(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RequestCancelWorkflowExecutionErrorBody]:
        """Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by
        the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a
        whole. It is up to the decider to take appropriate actions when it receives an execution history with this
        event. If the runId isn't specified, the WorkflowExecutionCancelRequested event is recorded in the history of
        the current open workflow execution with the specified workflowId in the domain. Because this action allows the
        workflow to properly clean up and gracefully close, it should be used instead of TerminateWorkflowExecution when
        possible. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as
        follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cau

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RequestCancelWorkflowExecution"),
            headers=[param[XAmzTarget10OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=request_cancel_workflow_execution_error_mapper,
            request_options=request_options,
        )

    async def respond_activity_task_canceled(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RespondActivityTaskCanceledErrorBody]:
        """Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully
        canceled. Additional details can be provided using the details argument. These details (if provided) appear in
        the ActivityTaskCanceled event added to the workflow history. Only use this operation if the canceled flag of a
        RecordActivityTaskHeartbeat request returns true and if the activity can be safely undone or abandoned. A task
        is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open
        while a worker is processing it. A task is closed after it has been specified in a call to
        RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out.
        Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use
        a Resource element with the domain name to limit the action to only specified domains. Use an Action element to
        allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's
        parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
        outside t

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RespondActivityTaskCanceled"),
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=respond_activity_task_canceled_error_mapper,
            request_options=request_options,
        )

    async def respond_activity_task_completed(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RespondActivityTaskCompletedErrorBody]:
        """Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully
        with a result (if provided). The result appears in the ActivityTaskCompleted event in the workflow history. If
        the requested task doesn't complete successfully, use RespondActivityTaskFailed instead. If the worker finds
        that the task is canceled through the canceled flag returned by RecordActivityTaskHeartbeat, it should cancel
        the task, clean up and then call RespondActivityTaskCanceled. A task is considered open from the time that it is
        scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is
        closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled,
        RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action. You
        cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient p

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RespondActivityTaskCompleted"),
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=respond_activity_task_completed_error_mapper,
            request_options=request_options,
        )

    async def respond_activity_task_failed(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RespondActivityTaskFailedErrorBody]:
        """Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason
        (if specified). The reason and details appear in the ActivityTaskFailed event added to the workflow history. A
        task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as
        open while a worker is processing it. A task is closed after it has been specified in a call to
        RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out.
        Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use
        a Resource element with the domain name to limit the action to only specified domains. Use an Action element to
        allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's
        parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
        outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to
        OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF W

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RespondActivityTaskFailed"),
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=respond_activity_task_failed_error_mapper,
            request_options=request_options,
        )

    async def respond_decision_task_completed(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RespondDecisionTaskCompletedErrorBody]:
        """Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully
        completed. The decisions argument specifies the list of decisions made while processing the task. A
        DecisionTaskCompleted event is added to the workflow history. The executionContext specified is attached to the
        event in the workflow execution history. Access Control If an IAM policy grants permission to use
        RespondDecisionTaskCompleted, it can express permissions for the list of decisions in the decisions parameter.
        Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as
        readable as possible, you can express permissions on decisions as if they were actual API calls, including
        applying conditions to some parameters. For more information, see Using IAM to Manage Access to Amazon SWF
        Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RespondDecisionTaskCompleted"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=respond_decision_task_completed_error_mapper,
            request_options=request_options,
        )

    async def signal_workflow_execution(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SignalWorkflowExecutionErrorBody]:
        """Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for
        the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the
        specified user defined signalName and input (if provided). If a runId isn't specified, then the
        WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching
        workflowId in the domain. If the specified workflow execution isn't open, this method fails with
        UnknownResource. Access Control You can use IAM policies to control this action's access to Amazon SWF resources
        as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an
        Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this
        action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter
        values fall outside the specified constraints, the action fails. The associated event attribute's cause
        parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SignalWorkflowExecution"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=signal_workflow_execution_error_mapper,
            request_options=request_options,
        )

    async def start_workflow_execution(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartWorkflowExecutionErrorBody]:
        """Starts an execution of the workflow type in the specified domain using the provided workflowId and input
        data. This action returns the newly started workflow execution. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. Constrain the following parameters by using a Condition element with the appropriate keys.
        tagList.member.0: The key is swf:tagList.member.0. tagList.member.1: The key is swf:tagList.member.1.
        tagList.member.2: The key is swf:tagList.member.2. tagList.member.3: The key is swf:tagList.member.3.
        tagList.member.4: The key is swf:tagList.member.4. taskList: String constraint. The key is swf:taskList.name.
        workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint.
        The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or
        the parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartWorkflowExecution"),
            headers=[param[XAmzTarget30OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_workflow_execution_error_mapper,
            request_options=request_options,
        )

    async def tag_resource(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Add a tag to a Amazon SWF domain. Amazon SWF supports a maximum of 50 tags per resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[param[XAmzTarget35OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    async def terminate_workflow_execution(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, TerminateWorkflowExecutionErrorBody]:
        """Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the
        given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when
        starting this execution, is applied to any open child workflow executions of this workflow execution. If the
        identified workflow execution was in progress, it is terminated immediately. If a runId isn't specified, then
        the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching
        workflowId in the domain. You should consider using RequestCancelWorkflowExecution action instead because it
        allows the workflow to gracefully close while TerminateWorkflowExecution doesn't. Access Control You can use IAM
        policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the
        domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to
        call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified con

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TerminateWorkflowExecution"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=terminate_workflow_execution_error_mapper,
            request_options=request_options,
        )

    async def undeprecate_activity_type(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UndeprecateActivityTypeErrorBody]:
        """Undeprecates a previously deprecated activity type. After an activity type has been undeprecated, you can
        create new tasks of that activity type. This operation is eventually consistent. The results are best effort and
        may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this
        action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
        action to only specified domains. Use an Action element to allow or deny permission to call this action.
        Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name:
        String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is
        swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UndeprecateActivityType"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=undeprecate_activity_type_error_mapper,
            request_options=request_options,
        )

    async def undeprecate_domain(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UndeprecateDomainErrorBody]:
        """Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create
        new workflow executions or register new types. This operation is eventually consistent. The results are best
        effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to
        control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to
        limit the action to only specified domains. Use an Action element to allow or deny permission to call this
        action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have
        sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the
        action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
        and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UndeprecateDomain"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=undeprecate_domain_error_mapper,
            request_options=request_options,
        )

    async def undeprecate_workflow_type(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UndeprecateWorkflowTypeErrorBody]:
        """Undeprecates a previously deprecated workflow type. After a workflow type has been undeprecated, you can
        create new executions of that type. This operation is eventually consistent. The results are best effort and may
        not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's
        access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to
        only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the
        following parameters by using a Condition element with the appropriate keys. workflowType.name: String
        constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is
        swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the
        parameter values fall outside the specified constraints, the action fails. The associated event attribute's
        cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
        Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UndeprecateWorkflowType"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=undeprecate_workflow_type_error_mapper,
            request_options=request_options,
        )

    async def untag_resource(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Remove a tag from a Amazon SWF domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[param[XAmzTarget36OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )
