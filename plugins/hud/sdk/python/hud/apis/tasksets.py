from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_taskset_v2_tasksets_post_error import (
    CreateTasksetV2TasksetsPostErrorBody,
    create_taskset_v2_tasksets_post_error_mapper,
)
from ..errors.export_taskset_v2_tasksets_taskset_id_export_get_error import (
    ExportTasksetV2TasksetsTasksetIdExportGetErrorBody,
    export_taskset_v2_tasksets_taskset_id_export_get_error_mapper,
)
from ..errors.get_taskset_by_name_v2_tasksets_by_name_name_get_error import (
    GetTasksetByNameV2TasksetsByNameNameGetErrorBody,
    get_taskset_by_name_v2_tasksets_by_name_name_get_error_mapper,
)
from ..errors.get_taskset_v2_tasksets_taskset_id_get_error import (
    GetTasksetV2TasksetsTasksetIdGetErrorBody,
    get_taskset_v2_tasksets_taskset_id_get_error_mapper,
)
from ..errors.list_taskset_tasks_v2_tasksets_taskset_id_tasks_get_error import (
    ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody,
    list_taskset_tasks_v2_tasksets_taskset_id_tasks_get_error_mapper,
)
from ..errors.list_tasksets_v2_tasksets_get_error import (
    ListTasksetsV2TasksetsGetErrorBody,
    list_tasksets_v2_tasksets_get_error_mapper,
)
from ..models.enums.sort_by_hud_platform_tasksets_api import (
    SortByHudPlatformTasksetsApi,
    SortByHudPlatformTasksetsApiOrStr,
)
from ..models.paginated_response_task_response import PaginatedResponseTaskResponse
from ..models.paginated_response_taskset_response import PaginatedResponseTasksetResponse
from ..models.taskset_create_request import TasksetCreateRequest, TasksetCreateRequestDict
from ..models.taskset_export_response import TasksetExportResponse
from ..models.taskset_response import TasksetResponse
from ..server.server import Server


class Tasksets:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = TasksetsWithRawResponse(client, server)

    def create_taskset_v2_tasksets_post(
        self,
        body: TasksetCreateRequest | TasksetCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TasksetResponse:
        """Create a taskset for the caller's team.

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
        return unwrap(self._with_raw_response.create_taskset_v2_tasksets_post(body, request_options=request_options))

    def export_taskset_v2_tasksets_taskset_id_export_get(
        self, taskset_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TasksetExportResponse:
        """Fetch a taskset by UUID in the task wire format.

        Same shape as the by-name lookup, and the only fetch path for cross-team public tasksets.

        Args:
            taskset_id: Value sent with the request.
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
            self._with_raw_response.export_taskset_v2_tasksets_taskset_id_export_get(
                taskset_id, request_options=request_options
            ),
        )

    def get_taskset_by_name_v2_tasksets_by_name_name_get(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TasksetExportResponse:
        """Resolve a taskset by name and return its tasks in the task wire format.

        Returns the latest version per task — the read-side counterpart of ``POST /tasks/upload``.

        Scoped to the caller's team. Cross-team public tasksets are accessible by UUID (``GET /tasksets/{id}/export``)
        only — name uniqueness is per team, so resolving by name across teams would be ambiguous.

        Args:
            name: Value sent with the request.
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
            self._with_raw_response.get_taskset_by_name_v2_tasksets_by_name_name_get(
                name, request_options=request_options
            ),
        )

    def get_taskset_v2_tasksets_taskset_id_get(
        self, taskset_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TasksetResponse:
        """Get a taskset by id.

        Args:
            taskset_id: Value sent with the request.
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
            self._with_raw_response.get_taskset_v2_tasksets_taskset_id_get(taskset_id, request_options=request_options)
        )

    def list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(
        self,
        taskset_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedResponseTaskResponse:
        """List live task definitions, including for public-only viewers.

        Args:
            taskset_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
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
            self._with_raw_response.list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(
                taskset_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def list_tasksets_v2_tasksets_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        search: str | None = None,
        public_only: bool | None = False,
        featured_only: bool | None = False,
        owner_only: bool | None = False,
        min_tasks: int | None = None,
        registry_id: UUID | None = None,
        scenario_id: UUID | None = None,
        project_id: UUID | None = None,
        sort_by: SortByHudPlatformTasksetsApiOrStr | None = SortByHudPlatformTasksetsApi.STARRED,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedResponseTasksetResponse:
        """List tasksets visible to the caller, with search, ownership, and sort filters.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            search: ILIKE-match on taskset name
            public_only: Only public tasksets; anonymous browsing requires this or featured_only
            featured_only: Only platform-featured tasksets, which are always public
            owner_only: Only tasksets owned by the caller's membership; ignored when public_only=True
            min_tasks: Only tasksets with at least this many live tasks
            registry_id: Only tasksets with a live task whose latest version uses a scenario on this registry
            scenario_id: Only tasksets with a live task whose latest version uses this scenario
            project_id: Only tasksets contained by this Project; omitted lists every Project
            sort_by: Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count
                DESC), tasks (task_count DESC)
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
            self._with_raw_response.list_tasksets_v2_tasksets_get(
                limit=limit,
                offset=offset,
                search=search,
                public_only=public_only,
                featured_only=featured_only,
                owner_only=owner_only,
                min_tasks=min_tasks,
                registry_id=registry_id,
                scenario_id=scenario_id,
                project_id=project_id,
                sort_by=sort_by,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> TasksetsWithRawResponse:
        return self._with_raw_response


class AsyncTasksets:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncTasksetsWithRawResponse(client, server)

    async def create_taskset_v2_tasksets_post(
        self,
        body: TasksetCreateRequest | TasksetCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TasksetResponse:
        """Create a taskset for the caller's team.

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
            await self._with_raw_response.create_taskset_v2_tasksets_post(body, request_options=request_options)
        )

    async def export_taskset_v2_tasksets_taskset_id_export_get(
        self, taskset_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TasksetExportResponse:
        """Fetch a taskset by UUID in the task wire format.

        Same shape as the by-name lookup, and the only fetch path for cross-team public tasksets.

        Args:
            taskset_id: Value sent with the request.
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
            await self._with_raw_response.export_taskset_v2_tasksets_taskset_id_export_get(
                taskset_id, request_options=request_options
            ),
        )

    async def get_taskset_by_name_v2_tasksets_by_name_name_get(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TasksetExportResponse:
        """Resolve a taskset by name and return its tasks in the task wire format.

        Returns the latest version per task — the read-side counterpart of ``POST /tasks/upload``.

        Scoped to the caller's team. Cross-team public tasksets are accessible by UUID (``GET /tasksets/{id}/export``)
        only — name uniqueness is per team, so resolving by name across teams would be ambiguous.

        Args:
            name: Value sent with the request.
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
            await self._with_raw_response.get_taskset_by_name_v2_tasksets_by_name_name_get(
                name, request_options=request_options
            ),
        )

    async def get_taskset_v2_tasksets_taskset_id_get(
        self, taskset_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TasksetResponse:
        """Get a taskset by id.

        Args:
            taskset_id: Value sent with the request.
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
            await self._with_raw_response.get_taskset_v2_tasksets_taskset_id_get(
                taskset_id, request_options=request_options
            ),
        )

    async def list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(
        self,
        taskset_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedResponseTaskResponse:
        """List live task definitions, including for public-only viewers.

        Args:
            taskset_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
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
            await self._with_raw_response.list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(
                taskset_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def list_tasksets_v2_tasksets_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        search: str | None = None,
        public_only: bool | None = False,
        featured_only: bool | None = False,
        owner_only: bool | None = False,
        min_tasks: int | None = None,
        registry_id: UUID | None = None,
        scenario_id: UUID | None = None,
        project_id: UUID | None = None,
        sort_by: SortByHudPlatformTasksetsApiOrStr | None = SortByHudPlatformTasksetsApi.STARRED,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedResponseTasksetResponse:
        """List tasksets visible to the caller, with search, ownership, and sort filters.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            search: ILIKE-match on taskset name
            public_only: Only public tasksets; anonymous browsing requires this or featured_only
            featured_only: Only platform-featured tasksets, which are always public
            owner_only: Only tasksets owned by the caller's membership; ignored when public_only=True
            min_tasks: Only tasksets with at least this many live tasks
            registry_id: Only tasksets with a live task whose latest version uses a scenario on this registry
            scenario_id: Only tasksets with a live task whose latest version uses this scenario
            project_id: Only tasksets contained by this Project; omitted lists every Project
            sort_by: Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count
                DESC), tasks (task_count DESC)
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
            await self._with_raw_response.list_tasksets_v2_tasksets_get(
                limit=limit,
                offset=offset,
                search=search,
                public_only=public_only,
                featured_only=featured_only,
                owner_only=owner_only,
                min_tasks=min_tasks,
                registry_id=registry_id,
                scenario_id=scenario_id,
                project_id=project_id,
                sort_by=sort_by,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTasksetsWithRawResponse:
        return self._with_raw_response


class TasksetsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_taskset_v2_tasksets_post(
        self,
        body: TasksetCreateRequest | TasksetCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksetResponse, CreateTasksetV2TasksetsPostErrorBody]:
        """Create a taskset for the caller's team.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/tasksets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TasksetCreateRequest | TasksetCreateRequestDict](body),
            decoder=json_decoder[TasksetResponse],
            error_mapper=create_taskset_v2_tasksets_post_error_mapper,
            request_options=request_options,
        )

    def export_taskset_v2_tasksets_taskset_id_export_get(
        self, taskset_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TasksetExportResponse, ExportTasksetV2TasksetsTasksetIdExportGetErrorBody]:
        """Fetch a taskset by UUID in the task wire format.

        Same shape as the by-name lookup, and the only fetch path for cross-team public tasksets.

        Args:
            taskset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasksets/{taskset_id}/export"),
            path_params=[param[UUID]("taskset_id", taskset_id)],
            decoder=json_decoder[TasksetExportResponse],
            error_mapper=export_taskset_v2_tasksets_taskset_id_export_get_error_mapper,
            request_options=request_options,
        )

    def get_taskset_by_name_v2_tasksets_by_name_name_get(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TasksetExportResponse, GetTasksetByNameV2TasksetsByNameNameGetErrorBody]:
        """Resolve a taskset by name and return its tasks in the task wire format.

        Returns the latest version per task — the read-side counterpart of ``POST /tasks/upload``.

        Scoped to the caller's team. Cross-team public tasksets are accessible by UUID (``GET /tasksets/{id}/export``)
        only — name uniqueness is per team, so resolving by name across teams would be ambiguous.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasksets/by-name/{name}"),
            path_params=[param[str]("name", name)],
            decoder=json_decoder[TasksetExportResponse],
            error_mapper=get_taskset_by_name_v2_tasksets_by_name_name_get_error_mapper,
            request_options=request_options,
        )

    def get_taskset_v2_tasksets_taskset_id_get(
        self, taskset_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TasksetResponse, GetTasksetV2TasksetsTasksetIdGetErrorBody]:
        """Get a taskset by id.

        Args:
            taskset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasksets/{taskset_id}"),
            path_params=[param[UUID]("taskset_id", taskset_id)],
            decoder=json_decoder[TasksetResponse],
            error_mapper=get_taskset_v2_tasksets_taskset_id_get_error_mapper,
            request_options=request_options,
        )

    def list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(
        self,
        taskset_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseTaskResponse, ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody]:
        """List live task definitions, including for public-only viewers.

        Args:
            taskset_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasksets/{taskset_id}/tasks"),
            path_params=[param[UUID]("taskset_id", taskset_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            decoder=json_decoder[PaginatedResponseTaskResponse],
            error_mapper=list_taskset_tasks_v2_tasksets_taskset_id_tasks_get_error_mapper,
            request_options=request_options,
        )

    def list_tasksets_v2_tasksets_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        search: str | None = None,
        public_only: bool | None = False,
        featured_only: bool | None = False,
        owner_only: bool | None = False,
        min_tasks: int | None = None,
        registry_id: UUID | None = None,
        scenario_id: UUID | None = None,
        project_id: UUID | None = None,
        sort_by: SortByHudPlatformTasksetsApiOrStr | None = SortByHudPlatformTasksetsApi.STARRED,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseTasksetResponse, ListTasksetsV2TasksetsGetErrorBody]:
        """List tasksets visible to the caller, with search, ownership, and sort filters.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            search: ILIKE-match on taskset name
            public_only: Only public tasksets; anonymous browsing requires this or featured_only
            featured_only: Only platform-featured tasksets, which are always public
            owner_only: Only tasksets owned by the caller's membership; ignored when public_only=True
            min_tasks: Only tasksets with at least this many live tasks
            registry_id: Only tasksets with a live task whose latest version uses a scenario on this registry
            scenario_id: Only tasksets with a live task whose latest version uses this scenario
            project_id: Only tasksets contained by this Project; omitted lists every Project
            sort_by: Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count
                DESC), tasks (task_count DESC)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasksets"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("search", search),
                param[bool | None]("public_only", public_only),
                param[bool | None]("featured_only", featured_only),
                param[bool | None]("owner_only", owner_only),
                param[int | None]("min_tasks", min_tasks),
                param[UUID | None]("registry_id", registry_id),
                param[UUID | None]("scenario_id", scenario_id),
                param[UUID | None]("project_id", project_id),
                param[SortByHudPlatformTasksetsApiOrStr | None]("sort_by", sort_by),
            ],
            decoder=json_decoder[PaginatedResponseTasksetResponse],
            error_mapper=list_tasksets_v2_tasksets_get_error_mapper,
            request_options=request_options,
        )


class AsyncTasksetsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_taskset_v2_tasksets_post(
        self,
        body: TasksetCreateRequest | TasksetCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksetResponse, CreateTasksetV2TasksetsPostErrorBody]:
        """Create a taskset for the caller's team.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/tasksets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TasksetCreateRequest | TasksetCreateRequestDict](body),
            decoder=async_json_decoder[TasksetResponse],
            error_mapper=create_taskset_v2_tasksets_post_error_mapper,
            request_options=request_options,
        )

    async def export_taskset_v2_tasksets_taskset_id_export_get(
        self, taskset_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TasksetExportResponse, ExportTasksetV2TasksetsTasksetIdExportGetErrorBody]:
        """Fetch a taskset by UUID in the task wire format.

        Same shape as the by-name lookup, and the only fetch path for cross-team public tasksets.

        Args:
            taskset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasksets/{taskset_id}/export"),
            path_params=[param[UUID]("taskset_id", taskset_id)],
            decoder=async_json_decoder[TasksetExportResponse],
            error_mapper=export_taskset_v2_tasksets_taskset_id_export_get_error_mapper,
            request_options=request_options,
        )

    async def get_taskset_by_name_v2_tasksets_by_name_name_get(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TasksetExportResponse, GetTasksetByNameV2TasksetsByNameNameGetErrorBody]:
        """Resolve a taskset by name and return its tasks in the task wire format.

        Returns the latest version per task — the read-side counterpart of ``POST /tasks/upload``.

        Scoped to the caller's team. Cross-team public tasksets are accessible by UUID (``GET /tasksets/{id}/export``)
        only — name uniqueness is per team, so resolving by name across teams would be ambiguous.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasksets/by-name/{name}"),
            path_params=[param[str]("name", name)],
            decoder=async_json_decoder[TasksetExportResponse],
            error_mapper=get_taskset_by_name_v2_tasksets_by_name_name_get_error_mapper,
            request_options=request_options,
        )

    async def get_taskset_v2_tasksets_taskset_id_get(
        self, taskset_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TasksetResponse, GetTasksetV2TasksetsTasksetIdGetErrorBody]:
        """Get a taskset by id.

        Args:
            taskset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasksets/{taskset_id}"),
            path_params=[param[UUID]("taskset_id", taskset_id)],
            decoder=async_json_decoder[TasksetResponse],
            error_mapper=get_taskset_v2_tasksets_taskset_id_get_error_mapper,
            request_options=request_options,
        )

    async def list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(
        self,
        taskset_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseTaskResponse, ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody]:
        """List live task definitions, including for public-only viewers.

        Args:
            taskset_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasksets/{taskset_id}/tasks"),
            path_params=[param[UUID]("taskset_id", taskset_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            decoder=async_json_decoder[PaginatedResponseTaskResponse],
            error_mapper=list_taskset_tasks_v2_tasksets_taskset_id_tasks_get_error_mapper,
            request_options=request_options,
        )

    async def list_tasksets_v2_tasksets_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        search: str | None = None,
        public_only: bool | None = False,
        featured_only: bool | None = False,
        owner_only: bool | None = False,
        min_tasks: int | None = None,
        registry_id: UUID | None = None,
        scenario_id: UUID | None = None,
        project_id: UUID | None = None,
        sort_by: SortByHudPlatformTasksetsApiOrStr | None = SortByHudPlatformTasksetsApi.STARRED,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseTasksetResponse, ListTasksetsV2TasksetsGetErrorBody]:
        """List tasksets visible to the caller, with search, ownership, and sort filters.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            search: ILIKE-match on taskset name
            public_only: Only public tasksets; anonymous browsing requires this or featured_only
            featured_only: Only platform-featured tasksets, which are always public
            owner_only: Only tasksets owned by the caller's membership; ignored when public_only=True
            min_tasks: Only tasksets with at least this many live tasks
            registry_id: Only tasksets with a live task whose latest version uses a scenario on this registry
            scenario_id: Only tasksets with a live task whose latest version uses this scenario
            project_id: Only tasksets contained by this Project; omitted lists every Project
            sort_by: Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count
                DESC), tasks (task_count DESC)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/tasksets"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("search", search),
                param[bool | None]("public_only", public_only),
                param[bool | None]("featured_only", featured_only),
                param[bool | None]("owner_only", owner_only),
                param[int | None]("min_tasks", min_tasks),
                param[UUID | None]("registry_id", registry_id),
                param[UUID | None]("scenario_id", scenario_id),
                param[UUID | None]("project_id", project_id),
                param[SortByHudPlatformTasksetsApiOrStr | None]("sort_by", sort_by),
            ],
            decoder=async_json_decoder[PaginatedResponseTasksetResponse],
            error_mapper=list_tasksets_v2_tasksets_get_error_mapper,
            request_options=request_options,
        )
