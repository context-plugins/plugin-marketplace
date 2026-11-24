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
from ..errors.variables_controller_create_error import (
    VariablesControllerCreateErrorBody,
    variables_controller_create_error_mapper,
)
from ..errors.variables_controller_find_all_error import (
    VariablesControllerFindAllErrorBody,
    variables_controller_find_all_error_mapper,
)
from ..errors.variables_controller_find_one_error import (
    VariablesControllerFindOneErrorBody,
    variables_controller_find_one_error_mapper,
)
from ..errors.variables_controller_remove_error import (
    VariablesControllerRemoveErrorBody,
    variables_controller_remove_error_mapper,
)
from ..errors.variables_controller_update_error import (
    VariablesControllerUpdateErrorBody,
    variables_controller_update_error_mapper,
)
from ..errors.variables_controller_update_status_error import (
    VariablesControllerUpdateStatusErrorBody,
    variables_controller_update_status_error_mapper,
)
from ..models.create_variable_dto_dev_cycle_management_variables_api import (
    CreateVariableDtoDevCycleManagementVariablesApi,
    CreateVariableDtoDevCycleManagementVariablesApiDict,
)
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..models.enums.status2_dev_cycle_management_variables_api import Status2DevCycleManagementVariablesApiOrStr
from ..models.enums.type3_dev_cycle_management_variables_api import Type3DevCycleManagementVariablesApiOrStr
from ..models.update_variable_dto import UpdateVariableDto, UpdateVariableDtoDict
from ..models.update_variable_status_dto import UpdateVariableStatusDto, UpdateVariableStatusDtoDict
from ..models.variable_dev_cycle_management_variables_api import VariableDevCycleManagementVariablesApi
from ..server.server import Server


class VariablesApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = VariablesApiWithRawResponse(client, server)

    def variables_controller_create(
        self,
        project: str,
        body: CreateVariableDtoDevCycleManagementVariablesApi | CreateVariableDtoDevCycleManagementVariablesApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VariableDevCycleManagementVariablesApi:
        """Send a ``POST`` request.

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``VariableDevCycleManagementVariablesApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.variables_controller_create(project, body, request_options=request_options)
        )

    def variables_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        feature: str | None = None,
        type_: Type3DevCycleManagementVariablesApiOrStr | None = None,
        status: Status2DevCycleManagementVariablesApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[VariableDevCycleManagementVariablesApi]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            feature: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[VariableDevCycleManagementVariablesApi]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.variables_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                feature=feature,
                type_=type_,
                status=status,
                request_options=request_options,
            ),
        )

    def variables_controller_find_one(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> VariableDevCycleManagementVariablesApi:
        """Send a ``GET`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``VariableDevCycleManagementVariablesApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.variables_controller_find_one(key, project, request_options=request_options)
        )

    def variables_controller_remove(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.variables_controller_remove(key, project, request_options=request_options)
        )

    def variables_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateVariableDto | UpdateVariableDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VariableDevCycleManagementVariablesApi:
        """Send a ``PATCH`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``VariableDevCycleManagementVariablesApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.variables_controller_update(key, project, body, request_options=request_options)
        )

    def variables_controller_update_status(
        self,
        key: str,
        project: str,
        body: UpdateVariableStatusDto | UpdateVariableStatusDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VariableDevCycleManagementVariablesApi:
        """Send a ``PATCH`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``VariableDevCycleManagementVariablesApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.variables_controller_update_status(
                key, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> VariablesApiWithRawResponse:
        return self._with_raw_response


class AsyncVariablesApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncVariablesApiWithRawResponse(client, server)

    async def variables_controller_create(
        self,
        project: str,
        body: CreateVariableDtoDevCycleManagementVariablesApi | CreateVariableDtoDevCycleManagementVariablesApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VariableDevCycleManagementVariablesApi:
        """Send a ``POST`` request.

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``VariableDevCycleManagementVariablesApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.variables_controller_create(project, body, request_options=request_options)
        )

    async def variables_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        feature: str | None = None,
        type_: Type3DevCycleManagementVariablesApiOrStr | None = None,
        status: Status2DevCycleManagementVariablesApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[VariableDevCycleManagementVariablesApi]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            feature: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[VariableDevCycleManagementVariablesApi]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.variables_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                feature=feature,
                type_=type_,
                status=status,
                request_options=request_options,
            ),
        )

    async def variables_controller_find_one(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> VariableDevCycleManagementVariablesApi:
        """Send a ``GET`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``VariableDevCycleManagementVariablesApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.variables_controller_find_one(key, project, request_options=request_options)
        )

    async def variables_controller_remove(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.variables_controller_remove(key, project, request_options=request_options)
        )

    async def variables_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateVariableDto | UpdateVariableDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VariableDevCycleManagementVariablesApi:
        """Send a ``PATCH`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``VariableDevCycleManagementVariablesApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.variables_controller_update(
                key, project, body, request_options=request_options
            ),
        )

    async def variables_controller_update_status(
        self,
        key: str,
        project: str,
        body: UpdateVariableStatusDto | UpdateVariableStatusDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VariableDevCycleManagementVariablesApi:
        """Send a ``PATCH`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``VariableDevCycleManagementVariablesApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.variables_controller_update_status(
                key, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVariablesApiWithRawResponse:
        return self._with_raw_response


class VariablesApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def variables_controller_create(
        self,
        project: str,
        body: CreateVariableDtoDevCycleManagementVariablesApi | CreateVariableDtoDevCycleManagementVariablesApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerCreateErrorBody]:
        """Send a ``POST`` request.

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/variables"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                CreateVariableDtoDevCycleManagementVariablesApi | CreateVariableDtoDevCycleManagementVariablesApiDict
            ](body),
            decoder=json_decoder[VariableDevCycleManagementVariablesApi],
            error_mapper=variables_controller_create_error_mapper,
            request_options=request_options,
        )

    def variables_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        feature: str | None = None,
        type_: Type3DevCycleManagementVariablesApiOrStr | None = None,
        status: Status2DevCycleManagementVariablesApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[VariableDevCycleManagementVariablesApi], VariablesControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            feature: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/variables"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("feature", feature),
                param[Type3DevCycleManagementVariablesApiOrStr | None]("type", type_),
                param[Status2DevCycleManagementVariablesApiOrStr | None]("status", status),
            ],
            decoder=json_decoder[list[VariableDevCycleManagementVariablesApi]],
            error_mapper=variables_controller_find_all_error_mapper,
            request_options=request_options,
        )

    def variables_controller_find_one(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerFindOneErrorBody]:
        """Send a ``GET`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/variables/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            decoder=json_decoder[VariableDevCycleManagementVariablesApi],
            error_mapper=variables_controller_find_one_error_mapper,
            request_options=request_options,
        )

    def variables_controller_remove(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, VariablesControllerRemoveErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/variables/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=variables_controller_remove_error_mapper,
            request_options=request_options,
        )

    def variables_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateVariableDto | UpdateVariableDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerUpdateErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/variables/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateVariableDto | UpdateVariableDtoDict](body),
            decoder=json_decoder[VariableDevCycleManagementVariablesApi],
            error_mapper=variables_controller_update_error_mapper,
            request_options=request_options,
        )

    def variables_controller_update_status(
        self,
        key: str,
        project: str,
        body: UpdateVariableStatusDto | UpdateVariableStatusDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerUpdateStatusErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/variables/{key}/status"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateVariableStatusDto | UpdateVariableStatusDtoDict](body),
            decoder=json_decoder[VariableDevCycleManagementVariablesApi],
            error_mapper=variables_controller_update_status_error_mapper,
            request_options=request_options,
        )


class AsyncVariablesApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def variables_controller_create(
        self,
        project: str,
        body: CreateVariableDtoDevCycleManagementVariablesApi | CreateVariableDtoDevCycleManagementVariablesApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerCreateErrorBody]:
        """Send a ``POST`` request.

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/variables"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                CreateVariableDtoDevCycleManagementVariablesApi | CreateVariableDtoDevCycleManagementVariablesApiDict
            ](body),
            decoder=async_json_decoder[VariableDevCycleManagementVariablesApi],
            error_mapper=variables_controller_create_error_mapper,
            request_options=request_options,
        )

    async def variables_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        feature: str | None = None,
        type_: Type3DevCycleManagementVariablesApiOrStr | None = None,
        status: Status2DevCycleManagementVariablesApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[VariableDevCycleManagementVariablesApi], VariablesControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            feature: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/variables"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("feature", feature),
                param[Type3DevCycleManagementVariablesApiOrStr | None]("type", type_),
                param[Status2DevCycleManagementVariablesApiOrStr | None]("status", status),
            ],
            decoder=async_json_decoder[list[VariableDevCycleManagementVariablesApi]],
            error_mapper=variables_controller_find_all_error_mapper,
            request_options=request_options,
        )

    async def variables_controller_find_one(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerFindOneErrorBody]:
        """Send a ``GET`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/variables/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            decoder=async_json_decoder[VariableDevCycleManagementVariablesApi],
            error_mapper=variables_controller_find_one_error_mapper,
            request_options=request_options,
        )

    async def variables_controller_remove(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, VariablesControllerRemoveErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/variables/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=variables_controller_remove_error_mapper,
            request_options=request_options,
        )

    async def variables_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateVariableDto | UpdateVariableDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerUpdateErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/variables/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateVariableDto | UpdateVariableDtoDict](body),
            decoder=async_json_decoder[VariableDevCycleManagementVariablesApi],
            error_mapper=variables_controller_update_error_mapper,
            request_options=request_options,
        )

    async def variables_controller_update_status(
        self,
        key: str,
        project: str,
        body: UpdateVariableStatusDto | UpdateVariableStatusDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerUpdateStatusErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            key: A Variable key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/variables/{key}/status"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateVariableStatusDto | UpdateVariableStatusDtoDict](body),
            decoder=async_json_decoder[VariableDevCycleManagementVariablesApi],
            error_mapper=variables_controller_update_status_error_mapper,
            request_options=request_options,
        )
