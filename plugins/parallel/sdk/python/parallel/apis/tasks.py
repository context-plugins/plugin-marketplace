from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncEventStream,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    EventStream,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    async_json_event_decoder,
    json_body,
    json_decoder,
    json_event_decoder,
    param,
    unwrap,
)
from ..errors.tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get_error import (
    TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody,
    tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get_error_mapper,
)
from ..errors.tasks_runs_events_get_v1_tasks_runs_run_id_events_get_error import (
    TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody,
    tasks_runs_events_get_v1_tasks_runs_run_id_events_get_error_mapper,
)
from ..errors.tasks_runs_get_v1_tasks_runs_run_id_get_error import (
    TasksRunsGetV1TasksRunsRunIdGetErrorBody,
    tasks_runs_get_v1_tasks_runs_run_id_get_error_mapper,
)
from ..errors.tasks_runs_input_get_v1_tasks_runs_run_id_input_get_error import (
    TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody,
    tasks_runs_input_get_v1_tasks_runs_run_id_input_get_error_mapper,
)
from ..errors.tasks_runs_post_v1_tasks_runs_post_error import (
    TasksRunsPostV1TasksRunsPostErrorBody,
    tasks_runs_post_v1_tasks_runs_post_error_mapper,
)
from ..errors.tasks_runs_result_get_v1_tasks_runs_run_id_result_get_error import (
    TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody,
    tasks_runs_result_get_v1_tasks_runs_run_id_result_get_error_mapper,
)
from ..errors.tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get_error import (
    TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody,
    tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get_error_mapper,
)
from ..errors.tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get_error import (
    TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody,
    tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get_error_mapper,
)
from ..errors.tasks_taskgroups_post_v1_tasks_groups_post_error import (
    TasksTaskgroupsPostV1TasksGroupsPostErrorBody,
    tasks_taskgroups_post_v1_tasks_groups_post_error_mapper,
)
from ..errors.tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get_error import (
    TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody,
    tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get_error_mapper,
)
from ..errors.tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get_error import (
    TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody,
    tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get_error_mapper,
)
from ..errors.tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post_error import (
    TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody,
    tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post_error_mapper,
)
from ..models.create_task_group_request import CreateTaskGroupRequest, CreateTaskGroupRequestDict
from ..models.enums.status1_parallel_ai_tasks_api import Status1ParallelAiTasksApiOrStr
from ..models.task_group_response import TaskGroupResponse
from ..models.task_group_run_request import TaskGroupRunRequest, TaskGroupRunRequestDict
from ..models.task_group_run_response import TaskGroupRunResponse
from ..models.task_run import TaskRun
from ..models.task_run_input import TaskRunInput, TaskRunInputDict
from ..models.task_run_result import TaskRunResult
from ..models.unions.response200_tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get import (
    Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet,
)
from ..models.unions.response200_tasks_runs_events_get_v1_tasks_runs_run_id_events_get import (
    Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet,
)
from ..models.unions.response200_tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get import (
    Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet,
)
from ..models.unions.response200_tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get import (
    Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet,
)
from ..server.server import Server


class Tasks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TasksWithRawResponse(client, server, auth)

    def tasks_runs_events_get_v1_tasks_runs_run_id_events_get(
        self, run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> EventStream[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet]:
        """Streams events for a task run.

        Returns a stream of events showing progress updates and state changes for the task run.

        For task runs that did not have enable_events set to true during creation, the frequency of events will be
        reduced.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Run id not found Request validation error ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.tasks_runs_events_get_v1_tasks_runs_run_id_events_get(
                run_id, request_options=request_options
            ),
        )

    def tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get(
        self, run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> EventStream[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet]:
        """Streams events for a task run.

        Returns a stream of events showing progress updates and state changes for the task run.

        For task runs that did not have enable_events set to true during creation, the frequency of events will be
        reduced.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Run id not found Request validation error ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get(
                run_id, request_options=request_options
            ),
        )

    def tasks_runs_get_v1_tasks_runs_run_id_get(
        self, run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TaskRun:
        """Retrieves run status by run_id.

        The run result is available from the ``/result`` endpoint.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Run id not found Request validation error ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.tasks_runs_get_v1_tasks_runs_run_id_get(run_id, request_options=request_options)
        )

    def tasks_runs_input_get_v1_tasks_runs_run_id_input_get(
        self, run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TaskRunInput:
        """Retrieves the input of a run by run_id.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Run id not found Request validation error ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.tasks_runs_input_get_v1_tasks_runs_run_id_input_get(
                run_id, request_options=request_options
            ),
        )

    def tasks_runs_post_v1_tasks_runs_post(
        self,
        body: TaskRunInput | TaskRunInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TaskRun:
        """Initiates a task run.

        Returns immediately with a run object in status 'queued'.

        Beta features can be enabled by setting the 'parallel-beta' header.

        Args:
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Payment required: insufficient credit in account
                Forbidden: invalid processor in request Unprocessable content: request validation error Too many
                requests: quota temporarily exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.tasks_runs_post_v1_tasks_runs_post(
                body, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    def tasks_runs_result_get_v1_tasks_runs_run_id_result_get(
        self,
        run_id: str,
        *,
        timeout: int | None = 600,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TaskRunResult:
        """Retrieves a run result by run_id, blocking until the run is completed.

        Args:
            run_id: Value sent with the request.
            timeout: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Run failed or run id not found Request timed out; run
                still active Request validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.tasks_runs_result_get_v1_tasks_runs_run_id_result_get(
                run_id, timeout=timeout, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    def tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get(
        self,
        taskgroup_id: str,
        *,
        last_event_id: str | None = None,
        timeout: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventStream[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet]:
        """Streams events from a TaskGroup: status updates and run completions.

        The connection will remain open for up to an hour as long as at least one run in the group is still active.

        Args:
            taskgroup_id: Value sent with the request.
            last_event_id: Value sent with the request.
            timeout: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: TaskGroup not found Validation Error ``error`` is ``ErrorResponse | HttpValidationError |
                RawError``."""
        return unwrap(
            self._with_raw_response.tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get(
                taskgroup_id, last_event_id=last_event_id, timeout=timeout, request_options=request_options
            ),
        )

    def tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get(
        self, taskgroup_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TaskGroupResponse:
        """Retrieves aggregated status across runs in a TaskGroup.

        Args:
            taskgroup_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get(
                taskgroup_id, request_options=request_options
            ),
        )

    def tasks_taskgroups_post_v1_tasks_groups_post(
        self,
        body: CreateTaskGroupRequest | CreateTaskGroupRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TaskGroupResponse:
        """Initiates a TaskGroup to group and track multiple runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.tasks_taskgroups_post_v1_tasks_groups_post(body, request_options=request_options)
        )

    def tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get(
        self,
        taskgroup_id: str,
        *,
        last_event_id: str | None = None,
        status: Status1ParallelAiTasksApiOrStr | None = None,
        include_input: bool | None = False,
        include_output: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventStream[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet]:
        """Retrieves task runs in a TaskGroup and optionally their inputs and outputs.

        All runs within a TaskGroup are returned as a stream. To get the inputs and/or outputs back in the stream, set
        the corresponding ``include_input`` and ``include_output`` parameters to ``true``.

        The stream is resumable using the ``event_id`` as the cursor. To resume a stream, specify the ``last_event_id``
        parameter with the ``event_id`` of the last event in the stream. The stream will resume from the next event
        after the ``last_event_id``.

        Args:
            taskgroup_id: Value sent with the request.
            last_event_id: Value sent with the request.
            status: Value sent with the request.
            include_input: Value sent with the request.
            include_output: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: TaskGroup not found Validation Error ``error`` is ``ErrorResponse | HttpValidationError |
                RawError``."""
        return unwrap(
            self._with_raw_response.tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get(
                taskgroup_id,
                last_event_id=last_event_id,
                status=status,
                include_input=include_input,
                include_output=include_output,
                request_options=request_options,
            ),
        )

    def tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(
        self, taskgroup_id: str, run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TaskRun:
        """Retrieves run status by run_id.

        This endpoint is equivalent to fetching run status directly using the ``retrieve()`` method or the
        ``tasks/runs`` GET endpoint.

        The run result is available from the ``/result`` endpoint.

        Args:
            taskgroup_id: Value sent with the request.
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Run id not found Request validation error ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(
                taskgroup_id, run_id, request_options=request_options
            ),
        )

    def tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(
        self,
        taskgroup_id: str,
        body: TaskGroupRunRequest | TaskGroupRunRequestDict,
        *,
        refresh_status: bool | None = True,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TaskGroupRunResponse:
        """Initiates multiple task runs within a TaskGroup.

        Args:
            taskgroup_id: Value sent with the request.
            body: The request body.
            refresh_status: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(
                taskgroup_id,
                body,
                refresh_status=refresh_status,
                parallel_beta=parallel_beta,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> TasksWithRawResponse:
        return self._with_raw_response


class AsyncTasks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTasksWithRawResponse(client, server, auth)

    async def tasks_runs_events_get_v1_tasks_runs_run_id_events_get(
        self, run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncEventStream[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet]:
        """Streams events for a task run.

        Returns a stream of events showing progress updates and state changes for the task run.

        For task runs that did not have enable_events set to true during creation, the frequency of events will be
        reduced.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Run id not found Request validation error ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.tasks_runs_events_get_v1_tasks_runs_run_id_events_get(
                run_id, request_options=request_options
            ),
        )

    async def tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get(
        self, run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncEventStream[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet]:
        """Streams events for a task run.

        Returns a stream of events showing progress updates and state changes for the task run.

        For task runs that did not have enable_events set to true during creation, the frequency of events will be
        reduced.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Run id not found Request validation error ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get(
                run_id, request_options=request_options
            ),
        )

    async def tasks_runs_get_v1_tasks_runs_run_id_get(
        self, run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TaskRun:
        """Retrieves run status by run_id.

        The run result is available from the ``/result`` endpoint.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Run id not found Request validation error ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.tasks_runs_get_v1_tasks_runs_run_id_get(
                run_id, request_options=request_options
            ),
        )

    async def tasks_runs_input_get_v1_tasks_runs_run_id_input_get(
        self, run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TaskRunInput:
        """Retrieves the input of a run by run_id.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Run id not found Request validation error ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.tasks_runs_input_get_v1_tasks_runs_run_id_input_get(
                run_id, request_options=request_options
            ),
        )

    async def tasks_runs_post_v1_tasks_runs_post(
        self,
        body: TaskRunInput | TaskRunInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TaskRun:
        """Initiates a task run.

        Returns immediately with a run object in status 'queued'.

        Beta features can be enabled by setting the 'parallel-beta' header.

        Args:
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Payment required: insufficient credit in account
                Forbidden: invalid processor in request Unprocessable content: request validation error Too many
                requests: quota temporarily exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.tasks_runs_post_v1_tasks_runs_post(
                body, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    async def tasks_runs_result_get_v1_tasks_runs_run_id_result_get(
        self,
        run_id: str,
        *,
        timeout: int | None = 600,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TaskRunResult:
        """Retrieves a run result by run_id, blocking until the run is completed.

        Args:
            run_id: Value sent with the request.
            timeout: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Run failed or run id not found Request timed out; run
                still active Request validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.tasks_runs_result_get_v1_tasks_runs_run_id_result_get(
                run_id, timeout=timeout, parallel_beta=parallel_beta, request_options=request_options
            ),
        )

    async def tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get(
        self,
        taskgroup_id: str,
        *,
        last_event_id: str | None = None,
        timeout: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncEventStream[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet]:
        """Streams events from a TaskGroup: status updates and run completions.

        The connection will remain open for up to an hour as long as at least one run in the group is still active.

        Args:
            taskgroup_id: Value sent with the request.
            last_event_id: Value sent with the request.
            timeout: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: TaskGroup not found Validation Error ``error`` is ``ErrorResponse | HttpValidationError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get(
                taskgroup_id, last_event_id=last_event_id, timeout=timeout, request_options=request_options
            ),
        )

    async def tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get(
        self, taskgroup_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TaskGroupResponse:
        """Retrieves aggregated status across runs in a TaskGroup.

        Args:
            taskgroup_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get(
                taskgroup_id, request_options=request_options
            ),
        )

    async def tasks_taskgroups_post_v1_tasks_groups_post(
        self,
        body: CreateTaskGroupRequest | CreateTaskGroupRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TaskGroupResponse:
        """Initiates a TaskGroup to group and track multiple runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.tasks_taskgroups_post_v1_tasks_groups_post(
                body, request_options=request_options
            ),
        )

    async def tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get(
        self,
        taskgroup_id: str,
        *,
        last_event_id: str | None = None,
        status: Status1ParallelAiTasksApiOrStr | None = None,
        include_input: bool | None = False,
        include_output: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncEventStream[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet]:
        """Retrieves task runs in a TaskGroup and optionally their inputs and outputs.

        All runs within a TaskGroup are returned as a stream. To get the inputs and/or outputs back in the stream, set
        the corresponding ``include_input`` and ``include_output`` parameters to ``true``.

        The stream is resumable using the ``event_id`` as the cursor. To resume a stream, specify the ``last_event_id``
        parameter with the ``event_id`` of the last event in the stream. The stream will resume from the next event
        after the ``last_event_id``.

        Args:
            taskgroup_id: Value sent with the request.
            last_event_id: Value sent with the request.
            status: Value sent with the request.
            include_input: Value sent with the request.
            include_output: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: TaskGroup not found Validation Error ``error`` is ``ErrorResponse | HttpValidationError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get(
                taskgroup_id,
                last_event_id=last_event_id,
                status=status,
                include_input=include_input,
                include_output=include_output,
                request_options=request_options,
            ),
        )

    async def tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(
        self, taskgroup_id: str, run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TaskRun:
        """Retrieves run status by run_id.

        This endpoint is equivalent to fetching run status directly using the ``retrieve()`` method or the
        ``tasks/runs`` GET endpoint.

        The run result is available from the ``/result`` endpoint.

        Args:
            taskgroup_id: Value sent with the request.
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Unauthorized: invalid or missing credentials Run id not found Request validation error ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(
                taskgroup_id, run_id, request_options=request_options
            ),
        )

    async def tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(
        self,
        taskgroup_id: str,
        body: TaskGroupRunRequest | TaskGroupRunRequestDict,
        *,
        refresh_status: bool | None = True,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TaskGroupRunResponse:
        """Initiates multiple task runs within a TaskGroup.

        Args:
            taskgroup_id: Value sent with the request.
            body: The request body.
            refresh_status: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(
                taskgroup_id,
                body,
                refresh_status=refresh_status,
                parallel_beta=parallel_beta,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTasksWithRawResponse:
        return self._with_raw_response


class TasksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def tasks_runs_events_get_v1_tasks_runs_run_id_events_get(
        self, run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        EventStream[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet],
        TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody,
    ]:
        """Streams events for a task run.

        Returns a stream of events showing progress updates and state changes for the task run.

        For task runs that did not have enable_events set to true during creation, the frequency of events will be
        reduced.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/runs/{run_id}/events"),
            path_params=[param[str]("run_id", run_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_event_decoder[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet](),
            error_mapper=tasks_runs_events_get_v1_tasks_runs_run_id_events_get_error_mapper,
            request_options=request_options,
        )

    def tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get(
        self, run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        EventStream[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet],
        TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody,
    ]:
        """Streams events for a task run.

        Returns a stream of events showing progress updates and state changes for the task run.

        For task runs that did not have enable_events set to true during creation, the frequency of events will be
        reduced.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/tasks/runs/{run_id}/events"),
            path_params=[param[str]("run_id", run_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_event_decoder[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet](),
            error_mapper=tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get_error_mapper,
            request_options=request_options,
        )

    def tasks_runs_get_v1_tasks_runs_run_id_get(
        self, run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TaskRun, TasksRunsGetV1TasksRunsRunIdGetErrorBody]:
        """Retrieves run status by run_id.

        The run result is available from the ``/result`` endpoint.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/runs/{run_id}"),
            path_params=[param[str]("run_id", run_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TaskRun],
            error_mapper=tasks_runs_get_v1_tasks_runs_run_id_get_error_mapper,
            request_options=request_options,
        )

    def tasks_runs_input_get_v1_tasks_runs_run_id_input_get(
        self, run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TaskRunInput, TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody]:
        """Retrieves the input of a run by run_id.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/runs/{run_id}/input"),
            path_params=[param[str]("run_id", run_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TaskRunInput],
            error_mapper=tasks_runs_input_get_v1_tasks_runs_run_id_input_get_error_mapper,
            request_options=request_options,
        )

    def tasks_runs_post_v1_tasks_runs_post(
        self,
        body: TaskRunInput | TaskRunInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskRun, TasksRunsPostV1TasksRunsPostErrorBody]:
        """Initiates a task run.

        Returns immediately with a run object in status 'queued'.

        Beta features can be enabled by setting the 'parallel-beta' header.

        Args:
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/tasks/runs"),
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskRunInput | TaskRunInputDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TaskRun],
            error_mapper=tasks_runs_post_v1_tasks_runs_post_error_mapper,
            request_options=request_options,
        )

    def tasks_runs_result_get_v1_tasks_runs_run_id_result_get(
        self,
        run_id: str,
        *,
        timeout: int | None = 600,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskRunResult, TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody]:
        """Retrieves a run result by run_id, blocking until the run is completed.

        Args:
            run_id: Value sent with the request.
            timeout: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/runs/{run_id}/result"),
            path_params=[param[str]("run_id", run_id)],
            query_params=[param[int | None]("timeout", timeout)],
            headers=[param[str | None]("parallel-beta", parallel_beta)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TaskRunResult],
            error_mapper=tasks_runs_result_get_v1_tasks_runs_run_id_result_get_error_mapper,
            request_options=request_options,
        )

    def tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get(
        self,
        taskgroup_id: str,
        *,
        last_event_id: str | None = None,
        timeout: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        EventStream[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet],
        TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody,
    ]:
        """Streams events from a TaskGroup: status updates and run completions.

        The connection will remain open for up to an hour as long as at least one run in the group is still active.

        Args:
            taskgroup_id: Value sent with the request.
            last_event_id: Value sent with the request.
            timeout: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/groups/{taskgroup_id}/events"),
            path_params=[param[str]("taskgroup_id", taskgroup_id)],
            query_params=[param[str | None]("last_event_id", last_event_id), param[float | None]("timeout", timeout)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_event_decoder[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet](),
            error_mapper=tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get_error_mapper,
            request_options=request_options,
        )

    def tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get(
        self, taskgroup_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TaskGroupResponse, TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody]:
        """Retrieves aggregated status across runs in a TaskGroup.

        Args:
            taskgroup_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/groups/{taskgroup_id}"),
            path_params=[param[str]("taskgroup_id", taskgroup_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TaskGroupResponse],
            error_mapper=tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get_error_mapper,
            request_options=request_options,
        )

    def tasks_taskgroups_post_v1_tasks_groups_post(
        self,
        body: CreateTaskGroupRequest | CreateTaskGroupRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskGroupResponse, TasksTaskgroupsPostV1TasksGroupsPostErrorBody]:
        """Initiates a TaskGroup to group and track multiple runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/tasks/groups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTaskGroupRequest | CreateTaskGroupRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TaskGroupResponse],
            error_mapper=tasks_taskgroups_post_v1_tasks_groups_post_error_mapper,
            request_options=request_options,
        )

    def tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get(
        self,
        taskgroup_id: str,
        *,
        last_event_id: str | None = None,
        status: Status1ParallelAiTasksApiOrStr | None = None,
        include_input: bool | None = False,
        include_output: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        EventStream[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet],
        TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody,
    ]:
        """Retrieves task runs in a TaskGroup and optionally their inputs and outputs.

        All runs within a TaskGroup are returned as a stream. To get the inputs and/or outputs back in the stream, set
        the corresponding ``include_input`` and ``include_output`` parameters to ``true``.

        The stream is resumable using the ``event_id`` as the cursor. To resume a stream, specify the ``last_event_id``
        parameter with the ``event_id`` of the last event in the stream. The stream will resume from the next event
        after the ``last_event_id``.

        Args:
            taskgroup_id: Value sent with the request.
            last_event_id: Value sent with the request.
            status: Value sent with the request.
            include_input: Value sent with the request.
            include_output: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/groups/{taskgroup_id}/runs"),
            path_params=[param[str]("taskgroup_id", taskgroup_id)],
            query_params=[
                param[str | None]("last_event_id", last_event_id),
                param[Status1ParallelAiTasksApiOrStr | None]("status", status),
                param[bool | None]("include_input", include_input),
                param[bool | None]("include_output", include_output),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_event_decoder[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet](),
            error_mapper=tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get_error_mapper,
            request_options=request_options,
        )

    def tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(
        self, taskgroup_id: str, run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TaskRun, TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody]:
        """Retrieves run status by run_id.

        This endpoint is equivalent to fetching run status directly using the ``retrieve()`` method or the
        ``tasks/runs`` GET endpoint.

        The run result is available from the ``/result`` endpoint.

        Args:
            taskgroup_id: Value sent with the request.
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/groups/{taskgroup_id}/runs/{run_id}"),
            path_params=[param[str]("taskgroup_id", taskgroup_id), param[str]("run_id", run_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TaskRun],
            error_mapper=tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get_error_mapper,
            request_options=request_options,
        )

    def tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(
        self,
        taskgroup_id: str,
        body: TaskGroupRunRequest | TaskGroupRunRequestDict,
        *,
        refresh_status: bool | None = True,
        parallel_beta: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskGroupRunResponse, TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody]:
        """Initiates multiple task runs within a TaskGroup.

        Args:
            taskgroup_id: Value sent with the request.
            body: The request body.
            refresh_status: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/tasks/groups/{taskgroup_id}/runs"),
            path_params=[param[str]("taskgroup_id", taskgroup_id)],
            query_params=[param[bool | None]("refresh_status", refresh_status)],
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskGroupRunRequest | TaskGroupRunRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TaskGroupRunResponse],
            error_mapper=tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post_error_mapper,
            request_options=request_options,
        )


class AsyncTasksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def tasks_runs_events_get_v1_tasks_runs_run_id_events_get(
        self, run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        AsyncEventStream[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet],
        TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody,
    ]:
        """Streams events for a task run.

        Returns a stream of events showing progress updates and state changes for the task run.

        For task runs that did not have enable_events set to true during creation, the frequency of events will be
        reduced.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/runs/{run_id}/events"),
            path_params=[param[str]("run_id", run_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_event_decoder[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet](),
            error_mapper=tasks_runs_events_get_v1_tasks_runs_run_id_events_get_error_mapper,
            request_options=request_options,
        )

    async def tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get(
        self, run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        AsyncEventStream[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet],
        TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody,
    ]:
        """Streams events for a task run.

        Returns a stream of events showing progress updates and state changes for the task run.

        For task runs that did not have enable_events set to true during creation, the frequency of events will be
        reduced.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/tasks/runs/{run_id}/events"),
            path_params=[param[str]("run_id", run_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_event_decoder[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet](),
            error_mapper=tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get_error_mapper,
            request_options=request_options,
        )

    async def tasks_runs_get_v1_tasks_runs_run_id_get(
        self, run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TaskRun, TasksRunsGetV1TasksRunsRunIdGetErrorBody]:
        """Retrieves run status by run_id.

        The run result is available from the ``/result`` endpoint.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/runs/{run_id}"),
            path_params=[param[str]("run_id", run_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TaskRun],
            error_mapper=tasks_runs_get_v1_tasks_runs_run_id_get_error_mapper,
            request_options=request_options,
        )

    async def tasks_runs_input_get_v1_tasks_runs_run_id_input_get(
        self, run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TaskRunInput, TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody]:
        """Retrieves the input of a run by run_id.

        Args:
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/runs/{run_id}/input"),
            path_params=[param[str]("run_id", run_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TaskRunInput],
            error_mapper=tasks_runs_input_get_v1_tasks_runs_run_id_input_get_error_mapper,
            request_options=request_options,
        )

    async def tasks_runs_post_v1_tasks_runs_post(
        self,
        body: TaskRunInput | TaskRunInputDict,
        *,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskRun, TasksRunsPostV1TasksRunsPostErrorBody]:
        """Initiates a task run.

        Returns immediately with a run object in status 'queued'.

        Beta features can be enabled by setting the 'parallel-beta' header.

        Args:
            body: The request body.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/tasks/runs"),
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskRunInput | TaskRunInputDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TaskRun],
            error_mapper=tasks_runs_post_v1_tasks_runs_post_error_mapper,
            request_options=request_options,
        )

    async def tasks_runs_result_get_v1_tasks_runs_run_id_result_get(
        self,
        run_id: str,
        *,
        timeout: int | None = 600,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskRunResult, TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody]:
        """Retrieves a run result by run_id, blocking until the run is completed.

        Args:
            run_id: Value sent with the request.
            timeout: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/runs/{run_id}/result"),
            path_params=[param[str]("run_id", run_id)],
            query_params=[param[int | None]("timeout", timeout)],
            headers=[param[str | None]("parallel-beta", parallel_beta)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TaskRunResult],
            error_mapper=tasks_runs_result_get_v1_tasks_runs_run_id_result_get_error_mapper,
            request_options=request_options,
        )

    async def tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get(
        self,
        taskgroup_id: str,
        *,
        last_event_id: str | None = None,
        timeout: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        AsyncEventStream[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet],
        TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody,
    ]:
        """Streams events from a TaskGroup: status updates and run completions.

        The connection will remain open for up to an hour as long as at least one run in the group is still active.

        Args:
            taskgroup_id: Value sent with the request.
            last_event_id: Value sent with the request.
            timeout: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/groups/{taskgroup_id}/events"),
            path_params=[param[str]("taskgroup_id", taskgroup_id)],
            query_params=[param[str | None]("last_event_id", last_event_id), param[float | None]("timeout", timeout)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_event_decoder[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet](),
            error_mapper=tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get_error_mapper,
            request_options=request_options,
        )

    async def tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get(
        self, taskgroup_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TaskGroupResponse, TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody]:
        """Retrieves aggregated status across runs in a TaskGroup.

        Args:
            taskgroup_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/groups/{taskgroup_id}"),
            path_params=[param[str]("taskgroup_id", taskgroup_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TaskGroupResponse],
            error_mapper=tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get_error_mapper,
            request_options=request_options,
        )

    async def tasks_taskgroups_post_v1_tasks_groups_post(
        self,
        body: CreateTaskGroupRequest | CreateTaskGroupRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskGroupResponse, TasksTaskgroupsPostV1TasksGroupsPostErrorBody]:
        """Initiates a TaskGroup to group and track multiple runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/tasks/groups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTaskGroupRequest | CreateTaskGroupRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TaskGroupResponse],
            error_mapper=tasks_taskgroups_post_v1_tasks_groups_post_error_mapper,
            request_options=request_options,
        )

    async def tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get(
        self,
        taskgroup_id: str,
        *,
        last_event_id: str | None = None,
        status: Status1ParallelAiTasksApiOrStr | None = None,
        include_input: bool | None = False,
        include_output: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        AsyncEventStream[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet],
        TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody,
    ]:
        """Retrieves task runs in a TaskGroup and optionally their inputs and outputs.

        All runs within a TaskGroup are returned as a stream. To get the inputs and/or outputs back in the stream, set
        the corresponding ``include_input`` and ``include_output`` parameters to ``true``.

        The stream is resumable using the ``event_id`` as the cursor. To resume a stream, specify the ``last_event_id``
        parameter with the ``event_id`` of the last event in the stream. The stream will resume from the next event
        after the ``last_event_id``.

        Args:
            taskgroup_id: Value sent with the request.
            last_event_id: Value sent with the request.
            status: Value sent with the request.
            include_input: Value sent with the request.
            include_output: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/groups/{taskgroup_id}/runs"),
            path_params=[param[str]("taskgroup_id", taskgroup_id)],
            query_params=[
                param[str | None]("last_event_id", last_event_id),
                param[Status1ParallelAiTasksApiOrStr | None]("status", status),
                param[bool | None]("include_input", include_input),
                param[bool | None]("include_output", include_output),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_event_decoder[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet](),
            error_mapper=tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get_error_mapper,
            request_options=request_options,
        )

    async def tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(
        self, taskgroup_id: str, run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TaskRun, TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody]:
        """Retrieves run status by run_id.

        This endpoint is equivalent to fetching run status directly using the ``retrieve()`` method or the
        ``tasks/runs`` GET endpoint.

        The run result is available from the ``/result`` endpoint.

        Args:
            taskgroup_id: Value sent with the request.
            run_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tasks/groups/{taskgroup_id}/runs/{run_id}"),
            path_params=[param[str]("taskgroup_id", taskgroup_id), param[str]("run_id", run_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TaskRun],
            error_mapper=tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get_error_mapper,
            request_options=request_options,
        )

    async def tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(
        self,
        taskgroup_id: str,
        body: TaskGroupRunRequest | TaskGroupRunRequestDict,
        *,
        refresh_status: bool | None = True,
        parallel_beta: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskGroupRunResponse, TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody]:
        """Initiates multiple task runs within a TaskGroup.

        Args:
            taskgroup_id: Value sent with the request.
            body: The request body.
            refresh_status: Value sent with the request.
            parallel_beta: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/tasks/groups/{taskgroup_id}/runs"),
            path_params=[param[str]("taskgroup_id", taskgroup_id)],
            query_params=[param[bool | None]("refresh_status", refresh_status)],
            headers=[param[str | None]("parallel-beta", parallel_beta), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskGroupRunRequest | TaskGroupRunRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TaskGroupRunResponse],
            error_mapper=tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post_error_mapper,
            request_options=request_options,
        )
