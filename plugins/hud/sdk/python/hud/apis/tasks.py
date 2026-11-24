from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.bulk_update_task_stage_v2_tasks_stage_patch_error import (
    BulkUpdateTaskStageV2TasksStagePatchErrorBody,
    bulk_update_task_stage_v2_tasks_stage_patch_error_mapper,
)
from ..errors.bulk_update_task_status_v2_tasks_status_patch_error import (
    BulkUpdateTaskStatusV2TasksStatusPatchErrorBody,
    bulk_update_task_status_v2_tasks_status_patch_error_mapper,
)
from ..errors.create_task_comment_v2_tasks_task_id_comments_post_error import (
    CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody,
    create_task_comment_v2_tasks_task_id_comments_post_error_mapper,
)
from ..errors.delete_task_comment_v2_tasks_task_id_comments_comment_id_delete_error import (
    DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody,
    delete_task_comment_v2_tasks_task_id_comments_comment_id_delete_error_mapper,
)
from ..errors.get_task_activity_v2_tasks_task_id_activity_get_error import (
    GetTaskActivityV2TasksTaskIdActivityGetErrorBody,
    get_task_activity_v2_tasks_task_id_activity_get_error_mapper,
)
from ..errors.get_task_comments_v2_tasks_task_id_comments_get_error import (
    GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody,
    get_task_comments_v2_tasks_task_id_comments_get_error_mapper,
)
from ..errors.get_task_ready_check_v2_tasks_task_id_ready_check_get_error import (
    GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody,
    get_task_ready_check_v2_tasks_task_id_ready_check_get_error_mapper,
)
from ..errors.get_task_traces_v2_tasks_task_id_traces_get_error import (
    GetTaskTracesV2TasksTaskIdTracesGetErrorBody,
    get_task_traces_v2_tasks_task_id_traces_get_error_mapper,
)
from ..errors.get_task_version_v2_tasks_task_id_versions_version_id_get_error import (
    GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody,
    get_task_version_v2_tasks_task_id_versions_version_id_get_error_mapper,
)
from ..errors.update_task_comment_v2_tasks_task_id_comments_comment_id_patch_error import (
    UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody,
    update_task_comment_v2_tasks_task_id_comments_comment_id_patch_error_mapper,
)
from ..errors.upload_tasks_v2_tasks_upload_post_error import (
    UploadTasksV2TasksUploadPostErrorBody,
    upload_tasks_v2_tasks_upload_post_error_mapper,
)
from ..models.bulk_stage_request import BulkStageRequest, BulkStageRequestDict
from ..models.bulk_status_request import BulkStatusRequest, BulkStatusRequestDict
from ..models.bulk_status_response import BulkStatusResponse
from ..models.create_task_comment_request import CreateTaskCommentRequest, CreateTaskCommentRequestDict
from ..models.paginated_response_task_trace import PaginatedResponseTaskTrace
from ..models.task_activity_response import TaskActivityResponse
from ..models.task_comment_item import TaskCommentItem
from ..models.task_comments_list_response import TaskCommentsListResponse
from ..models.task_upload_request import TaskUploadRequest, TaskUploadRequestDict
from ..models.task_upload_response import TaskUploadResponse
from ..models.task_with_version_response import TaskWithVersionResponse
from ..models.unions.response_get_task_ready_check_v2_tasks_task_id_ready_check_get import (
    ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet,
)
from ..models.update_task_comment_request import UpdateTaskCommentRequest, UpdateTaskCommentRequestDict
from ..server.server import Server


class Tasks:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = TasksWithRawResponse(client, server)

    def bulk_update_task_stage_v2_tasks_stage_patch(
        self, body: BulkStageRequest | BulkStageRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> BulkStatusResponse:
        """Bulk lifecycle-stage move (advance one stage / send back); non-atomic.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_update_task_stage_v2_tasks_stage_patch(body, request_options=request_options)
        )

    def bulk_update_task_status_v2_tasks_status_patch(
        self, body: BulkStatusRequest | BulkStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> BulkStatusResponse:
        """Bulk status mutation; reviewer-only clear resets directly to pending; non-atomic.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_update_task_status_v2_tasks_status_patch(body, request_options=request_options)
        )

    def create_task_comment_v2_tasks_task_id_comments_post(
        self,
        task_id: UUID,
        body: CreateTaskCommentRequest | CreateTaskCommentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TaskCommentItem:
        """Add a comment to a task and notify mentioned users.

        Args:
            task_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.create_task_comment_v2_tasks_task_id_comments_post(
                task_id, body, request_options=request_options
            ),
        )

    def delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(
        self, task_id: UUID, comment_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a task comment.

        Args:
            task_id: Value sent with the request.
            comment_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(
                task_id, comment_id, request_options=request_options
            ),
        )

    def get_task_activity_v2_tasks_task_id_activity_get(
        self, task_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None
    ) -> TaskActivityResponse:
        """Get a task's combined activity feed of comments and state changes.

        Args:
            task_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_task_activity_v2_tasks_task_id_activity_get(
                task_id, limit=limit, request_options=request_options
            ),
        )

    def get_task_comments_v2_tasks_task_id_comments_get(
        self, task_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TaskCommentsListResponse:
        """List comments on a task.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_task_comments_v2_tasks_task_id_comments_get(
                task_id, request_options=request_options
            ),
        )

    def get_task_ready_check_v2_tasks_task_id_ready_check_get(
        self, task_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet:
        """Evaluate the taskset's ready requirements against the task's latest version.

        Informational: the Ready click is not blocked server-side.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_task_ready_check_v2_tasks_task_id_ready_check_get(
                task_id, request_options=request_options
            ),
        )

    def get_task_traces_v2_tasks_task_id_traces_get(
        self,
        task_id: UUID,
        *,
        limit: int | None = 20,
        offset: int | None = 0,
        task_version_id: UUID | None = None,
        model_id: UUID | None = None,
        exclude_training: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedResponseTaskTrace:
        """List the task's traces, newest first, optionally for one version or model.

        Callers without scoped access to the task receive traces from public jobs only.

        Args:
            task_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            task_version_id: Value sent with the request.
            model_id: Value sent with the request.
            exclude_training: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_task_traces_v2_tasks_task_id_traces_get(
                task_id,
                limit=limit,
                offset=offset,
                task_version_id=task_version_id,
                model_id=model_id,
                exclude_training=exclude_training,
                request_options=request_options,
            ),
        )

    def get_task_version_v2_tasks_task_id_versions_version_id_get(
        self, task_id: UUID, version_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TaskWithVersionResponse:
        """Task plus one of its versions, by version id.

        Args:
            task_id: Value sent with the request.
            version_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_task_version_v2_tasks_task_id_versions_version_id_get(
                task_id, version_id, request_options=request_options
            ),
        )

    def update_task_comment_v2_tasks_task_id_comments_comment_id_patch(
        self,
        task_id: UUID,
        comment_id: UUID,
        body: UpdateTaskCommentRequest | UpdateTaskCommentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TaskCommentItem:
        """Edit one of the caller's task comments.

        Args:
            task_id: Value sent with the request.
            comment_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.update_task_comment_v2_tasks_task_id_comments_comment_id_patch(
                task_id, comment_id, body, request_options=request_options
            ),
        )

    def upload_tasks_v2_tasks_upload_post(
        self, body: TaskUploadRequest | TaskUploadRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> TaskUploadResponse:
        """Bulk-upload tasks into a taskset, creating the taskset if needed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.upload_tasks_v2_tasks_upload_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> TasksWithRawResponse:
        return self._with_raw_response


class AsyncTasks:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncTasksWithRawResponse(client, server)

    async def bulk_update_task_stage_v2_tasks_stage_patch(
        self, body: BulkStageRequest | BulkStageRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BulkStatusResponse:
        """Bulk lifecycle-stage move (advance one stage / send back); non-atomic.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_update_task_stage_v2_tasks_stage_patch(
                body, request_options=request_options
            ),
        )

    async def bulk_update_task_status_v2_tasks_status_patch(
        self,
        body: BulkStatusRequest | BulkStatusRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkStatusResponse:
        """Bulk status mutation; reviewer-only clear resets directly to pending; non-atomic.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_update_task_status_v2_tasks_status_patch(
                body, request_options=request_options
            ),
        )

    async def create_task_comment_v2_tasks_task_id_comments_post(
        self,
        task_id: UUID,
        body: CreateTaskCommentRequest | CreateTaskCommentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TaskCommentItem:
        """Add a comment to a task and notify mentioned users.

        Args:
            task_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.create_task_comment_v2_tasks_task_id_comments_post(
                task_id, body, request_options=request_options
            ),
        )

    async def delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(
        self, task_id: UUID, comment_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a task comment.

        Args:
            task_id: Value sent with the request.
            comment_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(
                task_id, comment_id, request_options=request_options
            ),
        )

    async def get_task_activity_v2_tasks_task_id_activity_get(
        self, task_id: UUID, *, limit: int | None = 50, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TaskActivityResponse:
        """Get a task's combined activity feed of comments and state changes.

        Args:
            task_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_task_activity_v2_tasks_task_id_activity_get(
                task_id, limit=limit, request_options=request_options
            ),
        )

    async def get_task_comments_v2_tasks_task_id_comments_get(
        self, task_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TaskCommentsListResponse:
        """List comments on a task.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_task_comments_v2_tasks_task_id_comments_get(
                task_id, request_options=request_options
            ),
        )

    async def get_task_ready_check_v2_tasks_task_id_ready_check_get(
        self, task_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet:
        """Evaluate the taskset's ready requirements against the task's latest version.

        Informational: the Ready click is not blocked server-side.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_task_ready_check_v2_tasks_task_id_ready_check_get(
                task_id, request_options=request_options
            ),
        )

    async def get_task_traces_v2_tasks_task_id_traces_get(
        self,
        task_id: UUID,
        *,
        limit: int | None = 20,
        offset: int | None = 0,
        task_version_id: UUID | None = None,
        model_id: UUID | None = None,
        exclude_training: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedResponseTaskTrace:
        """List the task's traces, newest first, optionally for one version or model.

        Callers without scoped access to the task receive traces from public jobs only.

        Args:
            task_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            task_version_id: Value sent with the request.
            model_id: Value sent with the request.
            exclude_training: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_task_traces_v2_tasks_task_id_traces_get(
                task_id,
                limit=limit,
                offset=offset,
                task_version_id=task_version_id,
                model_id=model_id,
                exclude_training=exclude_training,
                request_options=request_options,
            ),
        )

    async def get_task_version_v2_tasks_task_id_versions_version_id_get(
        self, task_id: UUID, version_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TaskWithVersionResponse:
        """Task plus one of its versions, by version id.

        Args:
            task_id: Value sent with the request.
            version_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_task_version_v2_tasks_task_id_versions_version_id_get(
                task_id, version_id, request_options=request_options
            ),
        )

    async def update_task_comment_v2_tasks_task_id_comments_comment_id_patch(
        self,
        task_id: UUID,
        comment_id: UUID,
        body: UpdateTaskCommentRequest | UpdateTaskCommentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TaskCommentItem:
        """Edit one of the caller's task comments.

        Args:
            task_id: Value sent with the request.
            comment_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_task_comment_v2_tasks_task_id_comments_comment_id_patch(
                task_id, comment_id, body, request_options=request_options
            ),
        )

    async def upload_tasks_v2_tasks_upload_post(
        self,
        body: TaskUploadRequest | TaskUploadRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TaskUploadResponse:
        """Bulk-upload tasks into a taskset, creating the taskset if needed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_tasks_v2_tasks_upload_post(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTasksWithRawResponse:
        return self._with_raw_response


class TasksWithRawResponse(BaseRawResponse[RawClient, Server]):
    def bulk_update_task_stage_v2_tasks_stage_patch(
        self, body: BulkStageRequest | BulkStageRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BulkStatusResponse, BulkUpdateTaskStageV2TasksStagePatchErrorBody]:
        """Bulk lifecycle-stage move (advance one stage / send back); non-atomic.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/tasks/stage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkStageRequest | BulkStageRequestDict](body),
            decoder=json_decoder[BulkStatusResponse],
            error_mapper=bulk_update_task_stage_v2_tasks_stage_patch_error_mapper,
            request_options=request_options,
        )

    def bulk_update_task_status_v2_tasks_status_patch(
        self, body: BulkStatusRequest | BulkStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BulkStatusResponse, BulkUpdateTaskStatusV2TasksStatusPatchErrorBody]:
        """Bulk status mutation; reviewer-only clear resets directly to pending; non-atomic.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/tasks/status"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkStatusRequest | BulkStatusRequestDict](body),
            decoder=json_decoder[BulkStatusResponse],
            error_mapper=bulk_update_task_status_v2_tasks_status_patch_error_mapper,
            request_options=request_options,
        )

    def create_task_comment_v2_tasks_task_id_comments_post(
        self,
        task_id: UUID,
        body: CreateTaskCommentRequest | CreateTaskCommentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskCommentItem, CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody]:
        """Add a comment to a task and notify mentioned users.

        Args:
            task_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/tasks/{task_id}/comments"),
            path_params=[param[UUID]("task_id", task_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTaskCommentRequest | CreateTaskCommentRequestDict](body),
            decoder=json_decoder[TaskCommentItem],
            error_mapper=create_task_comment_v2_tasks_task_id_comments_post_error_mapper,
            request_options=request_options,
        )

    def delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(
        self, task_id: UUID, comment_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody]:
        """Delete a task comment.

        Args:
            task_id: Value sent with the request.
            comment_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/tasks/{task_id}/comments/{comment_id}"),
            path_params=[param[UUID]("task_id", task_id), param[UUID]("comment_id", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_task_comment_v2_tasks_task_id_comments_comment_id_delete_error_mapper,
            request_options=request_options,
        )

    def get_task_activity_v2_tasks_task_id_activity_get(
        self, task_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TaskActivityResponse, GetTaskActivityV2TasksTaskIdActivityGetErrorBody]:
        """Get a task's combined activity feed of comments and state changes.

        Args:
            task_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasks/{task_id}/activity"),
            path_params=[param[UUID]("task_id", task_id)],
            query_params=[param[int | None]("limit", limit)],
            decoder=json_decoder[TaskActivityResponse],
            error_mapper=get_task_activity_v2_tasks_task_id_activity_get_error_mapper,
            request_options=request_options,
        )

    def get_task_comments_v2_tasks_task_id_comments_get(
        self, task_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TaskCommentsListResponse, GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody]:
        """List comments on a task.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasks/{task_id}/comments"),
            path_params=[param[UUID]("task_id", task_id)],
            decoder=json_decoder[TaskCommentsListResponse],
            error_mapper=get_task_comments_v2_tasks_task_id_comments_get_error_mapper,
            request_options=request_options,
        )

    def get_task_ready_check_v2_tasks_task_id_ready_check_get(
        self, task_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet, GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody
    ]:
        """Evaluate the taskset's ready requirements against the task's latest version.

        Informational: the Ready click is not blocked server-side.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasks/{task_id}/ready-check"),
            path_params=[param[UUID]("task_id", task_id)],
            decoder=json_decoder[ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet],
            error_mapper=get_task_ready_check_v2_tasks_task_id_ready_check_get_error_mapper,
            request_options=request_options,
        )

    def get_task_traces_v2_tasks_task_id_traces_get(
        self,
        task_id: UUID,
        *,
        limit: int | None = 20,
        offset: int | None = 0,
        task_version_id: UUID | None = None,
        model_id: UUID | None = None,
        exclude_training: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseTaskTrace, GetTaskTracesV2TasksTaskIdTracesGetErrorBody]:
        """List the task's traces, newest first, optionally for one version or model.

        Callers without scoped access to the task receive traces from public jobs only.

        Args:
            task_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            task_version_id: Value sent with the request.
            model_id: Value sent with the request.
            exclude_training: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasks/{task_id}/traces"),
            path_params=[param[UUID]("task_id", task_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[UUID | None]("task_version_id", task_version_id),
                param[UUID | None]("model_id", model_id),
                param[bool | None]("exclude_training", exclude_training),
            ],
            decoder=json_decoder[PaginatedResponseTaskTrace],
            error_mapper=get_task_traces_v2_tasks_task_id_traces_get_error_mapper,
            request_options=request_options,
        )

    def get_task_version_v2_tasks_task_id_versions_version_id_get(
        self, task_id: UUID, version_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TaskWithVersionResponse, GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody]:
        """Task plus one of its versions, by version id.

        Args:
            task_id: Value sent with the request.
            version_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasks/{task_id}/versions/{version_id}"),
            path_params=[param[UUID]("task_id", task_id), param[UUID]("version_id", version_id)],
            decoder=json_decoder[TaskWithVersionResponse],
            error_mapper=get_task_version_v2_tasks_task_id_versions_version_id_get_error_mapper,
            request_options=request_options,
        )

    def update_task_comment_v2_tasks_task_id_comments_comment_id_patch(
        self,
        task_id: UUID,
        comment_id: UUID,
        body: UpdateTaskCommentRequest | UpdateTaskCommentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskCommentItem, UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody]:
        """Edit one of the caller's task comments.

        Args:
            task_id: Value sent with the request.
            comment_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/tasks/{task_id}/comments/{comment_id}"),
            path_params=[param[UUID]("task_id", task_id), param[UUID]("comment_id", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTaskCommentRequest | UpdateTaskCommentRequestDict](body),
            decoder=json_decoder[TaskCommentItem],
            error_mapper=update_task_comment_v2_tasks_task_id_comments_comment_id_patch_error_mapper,
            request_options=request_options,
        )

    def upload_tasks_v2_tasks_upload_post(
        self, body: TaskUploadRequest | TaskUploadRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TaskUploadResponse, UploadTasksV2TasksUploadPostErrorBody]:
        """Bulk-upload tasks into a taskset, creating the taskset if needed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/tasks/upload"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskUploadRequest | TaskUploadRequestDict](body),
            decoder=json_decoder[TaskUploadResponse],
            error_mapper=upload_tasks_v2_tasks_upload_post_error_mapper,
            request_options=request_options,
        )


class AsyncTasksWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def bulk_update_task_stage_v2_tasks_stage_patch(
        self, body: BulkStageRequest | BulkStageRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BulkStatusResponse, BulkUpdateTaskStageV2TasksStagePatchErrorBody]:
        """Bulk lifecycle-stage move (advance one stage / send back); non-atomic.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/tasks/stage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkStageRequest | BulkStageRequestDict](body),
            decoder=async_json_decoder[BulkStatusResponse],
            error_mapper=bulk_update_task_stage_v2_tasks_stage_patch_error_mapper,
            request_options=request_options,
        )

    async def bulk_update_task_status_v2_tasks_status_patch(
        self,
        body: BulkStatusRequest | BulkStatusRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkStatusResponse, BulkUpdateTaskStatusV2TasksStatusPatchErrorBody]:
        """Bulk status mutation; reviewer-only clear resets directly to pending; non-atomic.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/tasks/status"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkStatusRequest | BulkStatusRequestDict](body),
            decoder=async_json_decoder[BulkStatusResponse],
            error_mapper=bulk_update_task_status_v2_tasks_status_patch_error_mapper,
            request_options=request_options,
        )

    async def create_task_comment_v2_tasks_task_id_comments_post(
        self,
        task_id: UUID,
        body: CreateTaskCommentRequest | CreateTaskCommentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskCommentItem, CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody]:
        """Add a comment to a task and notify mentioned users.

        Args:
            task_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/tasks/{task_id}/comments"),
            path_params=[param[UUID]("task_id", task_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTaskCommentRequest | CreateTaskCommentRequestDict](body),
            decoder=async_json_decoder[TaskCommentItem],
            error_mapper=create_task_comment_v2_tasks_task_id_comments_post_error_mapper,
            request_options=request_options,
        )

    async def delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(
        self, task_id: UUID, comment_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody]:
        """Delete a task comment.

        Args:
            task_id: Value sent with the request.
            comment_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/tasks/{task_id}/comments/{comment_id}"),
            path_params=[param[UUID]("task_id", task_id), param[UUID]("comment_id", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_task_comment_v2_tasks_task_id_comments_comment_id_delete_error_mapper,
            request_options=request_options,
        )

    async def get_task_activity_v2_tasks_task_id_activity_get(
        self, task_id: UUID, *, limit: int | None = 50, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TaskActivityResponse, GetTaskActivityV2TasksTaskIdActivityGetErrorBody]:
        """Get a task's combined activity feed of comments and state changes.

        Args:
            task_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasks/{task_id}/activity"),
            path_params=[param[UUID]("task_id", task_id)],
            query_params=[param[int | None]("limit", limit)],
            decoder=async_json_decoder[TaskActivityResponse],
            error_mapper=get_task_activity_v2_tasks_task_id_activity_get_error_mapper,
            request_options=request_options,
        )

    async def get_task_comments_v2_tasks_task_id_comments_get(
        self, task_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TaskCommentsListResponse, GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody]:
        """List comments on a task.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasks/{task_id}/comments"),
            path_params=[param[UUID]("task_id", task_id)],
            decoder=async_json_decoder[TaskCommentsListResponse],
            error_mapper=get_task_comments_v2_tasks_task_id_comments_get_error_mapper,
            request_options=request_options,
        )

    async def get_task_ready_check_v2_tasks_task_id_ready_check_get(
        self, task_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet, GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody
    ]:
        """Evaluate the taskset's ready requirements against the task's latest version.

        Informational: the Ready click is not blocked server-side.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasks/{task_id}/ready-check"),
            path_params=[param[UUID]("task_id", task_id)],
            decoder=async_json_decoder[ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet],
            error_mapper=get_task_ready_check_v2_tasks_task_id_ready_check_get_error_mapper,
            request_options=request_options,
        )

    async def get_task_traces_v2_tasks_task_id_traces_get(
        self,
        task_id: UUID,
        *,
        limit: int | None = 20,
        offset: int | None = 0,
        task_version_id: UUID | None = None,
        model_id: UUID | None = None,
        exclude_training: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseTaskTrace, GetTaskTracesV2TasksTaskIdTracesGetErrorBody]:
        """List the task's traces, newest first, optionally for one version or model.

        Callers without scoped access to the task receive traces from public jobs only.

        Args:
            task_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            task_version_id: Value sent with the request.
            model_id: Value sent with the request.
            exclude_training: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasks/{task_id}/traces"),
            path_params=[param[UUID]("task_id", task_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[UUID | None]("task_version_id", task_version_id),
                param[UUID | None]("model_id", model_id),
                param[bool | None]("exclude_training", exclude_training),
            ],
            decoder=async_json_decoder[PaginatedResponseTaskTrace],
            error_mapper=get_task_traces_v2_tasks_task_id_traces_get_error_mapper,
            request_options=request_options,
        )

    async def get_task_version_v2_tasks_task_id_versions_version_id_get(
        self, task_id: UUID, version_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TaskWithVersionResponse, GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody]:
        """Task plus one of its versions, by version id.

        Args:
            task_id: Value sent with the request.
            version_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasks/{task_id}/versions/{version_id}"),
            path_params=[param[UUID]("task_id", task_id), param[UUID]("version_id", version_id)],
            decoder=async_json_decoder[TaskWithVersionResponse],
            error_mapper=get_task_version_v2_tasks_task_id_versions_version_id_get_error_mapper,
            request_options=request_options,
        )

    async def update_task_comment_v2_tasks_task_id_comments_comment_id_patch(
        self,
        task_id: UUID,
        comment_id: UUID,
        body: UpdateTaskCommentRequest | UpdateTaskCommentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskCommentItem, UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody]:
        """Edit one of the caller's task comments.

        Args:
            task_id: Value sent with the request.
            comment_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/tasks/{task_id}/comments/{comment_id}"),
            path_params=[param[UUID]("task_id", task_id), param[UUID]("comment_id", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTaskCommentRequest | UpdateTaskCommentRequestDict](body),
            decoder=async_json_decoder[TaskCommentItem],
            error_mapper=update_task_comment_v2_tasks_task_id_comments_comment_id_patch_error_mapper,
            request_options=request_options,
        )

    async def upload_tasks_v2_tasks_upload_post(
        self,
        body: TaskUploadRequest | TaskUploadRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TaskUploadResponse, UploadTasksV2TasksUploadPostErrorBody]:
        """Bulk-upload tasks into a taskset, creating the taskset if needed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/tasks/upload"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskUploadRequest | TaskUploadRequestDict](body),
            decoder=async_json_decoder[TaskUploadResponse],
            error_mapper=upload_tasks_v2_tasks_upload_post_error_mapper,
            request_options=request_options,
        )
