from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.task_batch_create_request import TaskBatchCreateRequest, TaskBatchCreateRequestDict
from ..models.task_batch_update_request import TaskBatchUpdateRequest, TaskBatchUpdateRequestDict
from ..models.task_task_swagger import TaskTaskSwagger, TaskTaskSwaggerDict
from ..models.task_update_task_status_request import TaskUpdateTaskStatusRequest, TaskUpdateTaskStatusRequestDict
from ..models.tasks_bulk_response import TasksBulkResponse
from ..models.tasks_bulk_response1 import TasksBulkResponse1
from ..models.tasks_response import TasksResponse
from ..models.tasks_response1 import TasksResponse1
from ..models.tasks_response3 import TasksResponse3
from ..models.tasks_status_response import TasksStatusResponse
from ..server.server import Server


class Tasks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TasksWithRawResponse(client, server, auth)

    def get_tasks(
        self,
        start_at: str,
        end_at: str,
        *,
        page_size: int | None = None,
        page: int | None = None,
        sort_field: str | None = None,
        sort_order: str | None = None,
        search: str | None = None,
        date_range_column: str | None = None,
        domain: str | None = None,
        action: str | None = None,
        status: str | None = None,
        job_id: int | None = None,
        is_parent: bool | None = None,
        count_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TasksResponse:
        """Send a ``GET`` request.

        Args:
            start_at: Start date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7
                days)
            end_at: End date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7 days)
            page_size: Page size
            page: Page number
            sort_field: Sort field
            sort_order: Sort order (ASC/DESC)
            search: Search term
            date_range_column: Custom date range column
            domain: Filter by domain
            action: Filter by action
            status: Filter by status
            job_id: Filter by jobId
            is_parent: Filter tokenUsage batch parent tasks
            count_only: Return only total count without loading task data
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated tasks; countOnly=true returns an empty data array

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_tasks(
                start_at,
                end_at,
                page_size=page_size,
                page=page,
                sort_field=sort_field,
                sort_order=sort_order,
                search=search,
                date_range_column=date_range_column,
                domain=domain,
                action=action,
                status=status,
                job_id=job_id,
                is_parent=is_parent,
                count_only=count_only,
                request_options=request_options,
            ),
        )

    def get_tasks_by_id(
        self, id_: int, *, result: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> TasksResponse3:
        """Send a ``GET`` request.

        Args:
            id_: Task ID
            result: Use json to decode the result body and include available callbackStatus/callbackError fields
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Task envelope; data has Task fields, with result decoded as JSON when result=json

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_tasks_by_id(id_, result=result, request_options=request_options))

    def post_tasks(
        self, body: TaskTaskSwagger | TaskTaskSwaggerDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> TasksResponse1:
        """Send a ``POST`` request.

        Args:
            body: Task object (ID will be auto-generated, do not include)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Task created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_tasks(body, request_options=request_options))

    def post_tasks_bulk(
        self,
        body: TaskBatchCreateRequest | TaskBatchCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TasksBulkResponse1:
        """Send a ``POST`` request.

        Args:
            body: Array of tasks to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Tasks created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_tasks_bulk(body, request_options=request_options))

    def put_tasks_bulk(
        self,
        body: TaskBatchUpdateRequest | TaskBatchUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TasksBulkResponse:
        """Send a ``PUT`` request.

        Args:
            body: Array of tasks to update; each task must include its ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated tasks; originalTaskId appears only on tasks cloned from a locked period

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.put_tasks_bulk(body, request_options=request_options))

    def put_tasks_by_id(
        self,
        id_: int,
        body: TaskTaskSwagger | TaskTaskSwaggerDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TasksResponse1:
        """Send a ``PUT`` request.

        Args:
            id_: Task ID
            body: Task object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Task updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.put_tasks_by_id(id_, body, request_options=request_options))

    def put_tasks_by_id_status(
        self,
        id_: int,
        body: TaskUpdateTaskStatusRequest | TaskUpdateTaskStatusRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TasksStatusResponse:
        """Send a ``PUT`` request.

        Args:
            id_: Task ID
            body: Task status update object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Task status updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.put_tasks_by_id_status(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> TasksWithRawResponse:
        return self._with_raw_response


class AsyncTasks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTasksWithRawResponse(client, server, auth)

    async def get_tasks(
        self,
        start_at: str,
        end_at: str,
        *,
        page_size: int | None = None,
        page: int | None = None,
        sort_field: str | None = None,
        sort_order: str | None = None,
        search: str | None = None,
        date_range_column: str | None = None,
        domain: str | None = None,
        action: str | None = None,
        status: str | None = None,
        job_id: int | None = None,
        is_parent: bool | None = None,
        count_only: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TasksResponse:
        """Send a ``GET`` request.

        Args:
            start_at: Start date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7
                days)
            end_at: End date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7 days)
            page_size: Page size
            page: Page number
            sort_field: Sort field
            sort_order: Sort order (ASC/DESC)
            search: Search term
            date_range_column: Custom date range column
            domain: Filter by domain
            action: Filter by action
            status: Filter by status
            job_id: Filter by jobId
            is_parent: Filter tokenUsage batch parent tasks
            count_only: Return only total count without loading task data
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated tasks; countOnly=true returns an empty data array

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_tasks(
                start_at,
                end_at,
                page_size=page_size,
                page=page,
                sort_field=sort_field,
                sort_order=sort_order,
                search=search,
                date_range_column=date_range_column,
                domain=domain,
                action=action,
                status=status,
                job_id=job_id,
                is_parent=is_parent,
                count_only=count_only,
                request_options=request_options,
            ),
        )

    async def get_tasks_by_id(
        self, id_: int, *, result: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TasksResponse3:
        """Send a ``GET`` request.

        Args:
            id_: Task ID
            result: Use json to decode the result body and include available callbackStatus/callbackError fields
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Task envelope; data has Task fields, with result decoded as JSON when result=json

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_tasks_by_id(id_, result=result, request_options=request_options)
        )

    async def post_tasks(
        self, body: TaskTaskSwagger | TaskTaskSwaggerDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TasksResponse1:
        """Send a ``POST`` request.

        Args:
            body: Task object (ID will be auto-generated, do not include)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Task created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_tasks(body, request_options=request_options))

    async def post_tasks_bulk(
        self,
        body: TaskBatchCreateRequest | TaskBatchCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TasksBulkResponse1:
        """Send a ``POST`` request.

        Args:
            body: Array of tasks to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Tasks created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_tasks_bulk(body, request_options=request_options))

    async def put_tasks_bulk(
        self,
        body: TaskBatchUpdateRequest | TaskBatchUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TasksBulkResponse:
        """Send a ``PUT`` request.

        Args:
            body: Array of tasks to update; each task must include its ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated tasks; originalTaskId appears only on tasks cloned from a locked period

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.put_tasks_bulk(body, request_options=request_options))

    async def put_tasks_by_id(
        self,
        id_: int,
        body: TaskTaskSwagger | TaskTaskSwaggerDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TasksResponse1:
        """Send a ``PUT`` request.

        Args:
            id_: Task ID
            body: Task object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Task updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.put_tasks_by_id(id_, body, request_options=request_options))

    async def put_tasks_by_id_status(
        self,
        id_: int,
        body: TaskUpdateTaskStatusRequest | TaskUpdateTaskStatusRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TasksStatusResponse:
        """Send a ``PUT`` request.

        Args:
            id_: Task ID
            body: Task status update object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Task status updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.put_tasks_by_id_status(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTasksWithRawResponse:
        return self._with_raw_response


class TasksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_tasks(
        self,
        start_at: str,
        end_at: str,
        *,
        page_size: int | None = None,
        page: int | None = None,
        sort_field: str | None = None,
        sort_order: str | None = None,
        search: str | None = None,
        date_range_column: str | None = None,
        domain: str | None = None,
        action: str | None = None,
        status: str | None = None,
        job_id: int | None = None,
        is_parent: bool | None = None,
        count_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            start_at: Start date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7
                days)
            end_at: End date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7 days)
            page_size: Page size
            page: Page number
            sort_field: Sort field
            sort_order: Sort order (ASC/DESC)
            search: Search term
            date_range_column: Custom date range column
            domain: Filter by domain
            action: Filter by action
            status: Filter by status
            job_id: Filter by jobId
            is_parent: Filter tokenUsage batch parent tasks
            count_only: Return only total count without loading task data
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks"),
            query_params=[
                param[str]("startAt", start_at),
                param[str]("endAt", end_at),
                param[int | None]("pageSize", page_size),
                param[int | None]("page", page),
                param[str | None]("sortField", sort_field),
                param[str | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("dateRangeColumn", date_range_column),
                param[str | None]("domain", domain),
                param[str | None]("action", action),
                param[str | None]("status", status),
                param[int | None]("jobId", job_id),
                param[bool | None]("isParent", is_parent),
                param[bool | None]("countOnly", count_only),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[TasksResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_tasks_by_id(
        self, id_: int, *, result: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TasksResponse3, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Task ID
            result: Use json to decode the result body and include available callbackStatus/callbackError fields
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks/{id}"),
            path_params=[param[int]("id", id_)],
            query_params=[param[str | None]("result", result)],
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[TasksResponse3],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_tasks(
        self, body: TaskTaskSwagger | TaskTaskSwaggerDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TasksResponse1, RawError]:
        """Send a ``POST`` request.

        Args:
            body: Task object (ID will be auto-generated, do not include)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskTaskSwagger | TaskTaskSwaggerDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[TasksResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_tasks_bulk(
        self,
        body: TaskBatchCreateRequest | TaskBatchCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksBulkResponse1, RawError]:
        """Send a ``POST`` request.

        Args:
            body: Array of tasks to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskBatchCreateRequest | TaskBatchCreateRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[TasksBulkResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def put_tasks_bulk(
        self,
        body: TaskBatchUpdateRequest | TaskBatchUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksBulkResponse, RawError]:
        """Send a ``PUT`` request.

        Args:
            body: Array of tasks to update; each task must include its ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskBatchUpdateRequest | TaskBatchUpdateRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[TasksBulkResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def put_tasks_by_id(
        self,
        id_: int,
        body: TaskTaskSwagger | TaskTaskSwaggerDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksResponse1, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Task ID
            body: Task object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskTaskSwagger | TaskTaskSwaggerDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[TasksResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def put_tasks_by_id_status(
        self,
        id_: int,
        body: TaskUpdateTaskStatusRequest | TaskUpdateTaskStatusRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksStatusResponse, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Task ID
            body: Task status update object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks/{id}/status"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskUpdateTaskStatusRequest | TaskUpdateTaskStatusRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[TasksStatusResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncTasksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_tasks(
        self,
        start_at: str,
        end_at: str,
        *,
        page_size: int | None = None,
        page: int | None = None,
        sort_field: str | None = None,
        sort_order: str | None = None,
        search: str | None = None,
        date_range_column: str | None = None,
        domain: str | None = None,
        action: str | None = None,
        status: str | None = None,
        job_id: int | None = None,
        is_parent: bool | None = None,
        count_only: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            start_at: Start date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7
                days)
            end_at: End date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7 days)
            page_size: Page size
            page: Page number
            sort_field: Sort field
            sort_order: Sort order (ASC/DESC)
            search: Search term
            date_range_column: Custom date range column
            domain: Filter by domain
            action: Filter by action
            status: Filter by status
            job_id: Filter by jobId
            is_parent: Filter tokenUsage batch parent tasks
            count_only: Return only total count without loading task data
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks"),
            query_params=[
                param[str]("startAt", start_at),
                param[str]("endAt", end_at),
                param[int | None]("pageSize", page_size),
                param[int | None]("page", page),
                param[str | None]("sortField", sort_field),
                param[str | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("dateRangeColumn", date_range_column),
                param[str | None]("domain", domain),
                param[str | None]("action", action),
                param[str | None]("status", status),
                param[int | None]("jobId", job_id),
                param[bool | None]("isParent", is_parent),
                param[bool | None]("countOnly", count_only),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[TasksResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_tasks_by_id(
        self, id_: int, *, result: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TasksResponse3, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Task ID
            result: Use json to decode the result body and include available callbackStatus/callbackError fields
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks/{id}"),
            path_params=[param[int]("id", id_)],
            query_params=[param[str | None]("result", result)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[TasksResponse3],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_tasks(
        self, body: TaskTaskSwagger | TaskTaskSwaggerDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TasksResponse1, RawError]:
        """Send a ``POST`` request.

        Args:
            body: Task object (ID will be auto-generated, do not include)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskTaskSwagger | TaskTaskSwaggerDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[TasksResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_tasks_bulk(
        self,
        body: TaskBatchCreateRequest | TaskBatchCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksBulkResponse1, RawError]:
        """Send a ``POST`` request.

        Args:
            body: Array of tasks to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskBatchCreateRequest | TaskBatchCreateRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[TasksBulkResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def put_tasks_bulk(
        self,
        body: TaskBatchUpdateRequest | TaskBatchUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksBulkResponse, RawError]:
        """Send a ``PUT`` request.

        Args:
            body: Array of tasks to update; each task must include its ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskBatchUpdateRequest | TaskBatchUpdateRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[TasksBulkResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def put_tasks_by_id(
        self,
        id_: int,
        body: TaskTaskSwagger | TaskTaskSwaggerDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksResponse1, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Task ID
            body: Task object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskTaskSwagger | TaskTaskSwaggerDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[TasksResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def put_tasks_by_id_status(
        self,
        id_: int,
        body: TaskUpdateTaskStatusRequest | TaskUpdateTaskStatusRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksStatusResponse, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Task ID
            body: Task status update object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_scraper_service_gateway_auth_api("/tasks/{id}/status"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TaskUpdateTaskStatusRequest | TaskUpdateTaskStatusRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[TasksStatusResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
