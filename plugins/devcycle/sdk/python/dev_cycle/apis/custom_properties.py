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
from ..errors.custom_properties_controller_create_error import (
    CustomPropertiesControllerCreateErrorBody,
    custom_properties_controller_create_error_mapper,
)
from ..errors.custom_properties_controller_find_all_error import (
    CustomPropertiesControllerFindAllErrorBody,
    custom_properties_controller_find_all_error_mapper,
)
from ..errors.custom_properties_controller_find_one_error import (
    CustomPropertiesControllerFindOneErrorBody,
    custom_properties_controller_find_one_error_mapper,
)
from ..errors.custom_properties_controller_remove_error import (
    CustomPropertiesControllerRemoveErrorBody,
    custom_properties_controller_remove_error_mapper,
)
from ..errors.custom_properties_controller_update_error import (
    CustomPropertiesControllerUpdateErrorBody,
    custom_properties_controller_update_error_mapper,
)
from ..models.create_custom_property_dto import CreateCustomPropertyDto, CreateCustomPropertyDtoDict
from ..models.custom_property import CustomProperty
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..models.enums.type3 import Type3OrStr
from ..models.update_custom_property_dto import UpdateCustomPropertyDto, UpdateCustomPropertyDtoDict
from ..server.server import Server


class CustomProperties:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CustomPropertiesWithRawResponse(client, server)

    def custom_properties_controller_create(
        self,
        project: str,
        body: CreateCustomPropertyDto | CreateCustomPropertyDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomProperty:
        """Create a new Custom Property

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``CustomProperty`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.custom_properties_controller_create(project, body, request_options=request_options)
        )

    def custom_properties_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        type_: Type3OrStr | None = None,
        include_usage: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[CustomProperty]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            type_: Value sent with the request.
            include_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[CustomProperty]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.custom_properties_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                type_=type_,
                include_usage=include_usage,
                request_options=request_options,
            ),
        )

    def custom_properties_controller_find_one(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomProperty:
        """Get a Custom Property by ID or key

        Args:
            key: A Custom Property key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``CustomProperty`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.custom_properties_controller_find_one(key, project, request_options=request_options)
        )

    def custom_properties_controller_remove(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete an Custom Property by ID or key

        Args:
            key: A Custom Property key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.custom_properties_controller_remove(key, project, request_options=request_options)
        )

    def custom_properties_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateCustomPropertyDto | UpdateCustomPropertyDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomProperty:
        """Update an Custom Property by ID or key

        Args:
            key: A Custom Property key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``CustomProperty`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.custom_properties_controller_update(
                key, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CustomPropertiesWithRawResponse:
        return self._with_raw_response


class AsyncCustomProperties:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCustomPropertiesWithRawResponse(client, server)

    async def custom_properties_controller_create(
        self,
        project: str,
        body: CreateCustomPropertyDto | CreateCustomPropertyDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomProperty:
        """Create a new Custom Property

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``CustomProperty`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.custom_properties_controller_create(
                project, body, request_options=request_options
            ),
        )

    async def custom_properties_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        type_: Type3OrStr | None = None,
        include_usage: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[CustomProperty]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            type_: Value sent with the request.
            include_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[CustomProperty]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.custom_properties_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                type_=type_,
                include_usage=include_usage,
                request_options=request_options,
            ),
        )

    async def custom_properties_controller_find_one(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomProperty:
        """Get a Custom Property by ID or key

        Args:
            key: A Custom Property key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``CustomProperty`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.custom_properties_controller_find_one(
                key, project, request_options=request_options
            ),
        )

    async def custom_properties_controller_remove(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete an Custom Property by ID or key

        Args:
            key: A Custom Property key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.custom_properties_controller_remove(
                key, project, request_options=request_options
            ),
        )

    async def custom_properties_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateCustomPropertyDto | UpdateCustomPropertyDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomProperty:
        """Update an Custom Property by ID or key

        Args:
            key: A Custom Property key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``CustomProperty`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.custom_properties_controller_update(
                key, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCustomPropertiesWithRawResponse:
        return self._with_raw_response


class CustomPropertiesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def custom_properties_controller_create(
        self,
        project: str,
        body: CreateCustomPropertyDto | CreateCustomPropertyDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomProperty, CustomPropertiesControllerCreateErrorBody]:
        """Create a new Custom Property

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/customProperties"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomPropertyDto | CreateCustomPropertyDtoDict](body),
            decoder=json_decoder[CustomProperty],
            error_mapper=custom_properties_controller_create_error_mapper,
            request_options=request_options,
        )

    def custom_properties_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        type_: Type3OrStr | None = None,
        include_usage: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CustomProperty], CustomPropertiesControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            type_: Value sent with the request.
            include_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/customProperties"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[Type3OrStr | None]("type", type_),
                param[bool | None]("includeUsage", include_usage),
            ],
            decoder=json_decoder[list[CustomProperty]],
            error_mapper=custom_properties_controller_find_all_error_mapper,
            request_options=request_options,
        )

    def custom_properties_controller_find_one(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomProperty, CustomPropertiesControllerFindOneErrorBody]:
        """Get a Custom Property by ID or key

        Args:
            key: A Custom Property key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/customProperties/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            decoder=json_decoder[CustomProperty],
            error_mapper=custom_properties_controller_find_one_error_mapper,
            request_options=request_options,
        )

    def custom_properties_controller_remove(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CustomPropertiesControllerRemoveErrorBody]:
        """Delete an Custom Property by ID or key

        Args:
            key: A Custom Property key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/customProperties/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=custom_properties_controller_remove_error_mapper,
            request_options=request_options,
        )

    def custom_properties_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateCustomPropertyDto | UpdateCustomPropertyDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomProperty, CustomPropertiesControllerUpdateErrorBody]:
        """Update an Custom Property by ID or key

        Args:
            key: A Custom Property key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/customProperties/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomPropertyDto | UpdateCustomPropertyDtoDict](body),
            decoder=json_decoder[CustomProperty],
            error_mapper=custom_properties_controller_update_error_mapper,
            request_options=request_options,
        )


class AsyncCustomPropertiesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def custom_properties_controller_create(
        self,
        project: str,
        body: CreateCustomPropertyDto | CreateCustomPropertyDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomProperty, CustomPropertiesControllerCreateErrorBody]:
        """Create a new Custom Property

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/customProperties"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomPropertyDto | CreateCustomPropertyDtoDict](body),
            decoder=async_json_decoder[CustomProperty],
            error_mapper=custom_properties_controller_create_error_mapper,
            request_options=request_options,
        )

    async def custom_properties_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        type_: Type3OrStr | None = None,
        include_usage: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CustomProperty], CustomPropertiesControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            type_: Value sent with the request.
            include_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/customProperties"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[Type3OrStr | None]("type", type_),
                param[bool | None]("includeUsage", include_usage),
            ],
            decoder=async_json_decoder[list[CustomProperty]],
            error_mapper=custom_properties_controller_find_all_error_mapper,
            request_options=request_options,
        )

    async def custom_properties_controller_find_one(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomProperty, CustomPropertiesControllerFindOneErrorBody]:
        """Get a Custom Property by ID or key

        Args:
            key: A Custom Property key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/customProperties/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            decoder=async_json_decoder[CustomProperty],
            error_mapper=custom_properties_controller_find_one_error_mapper,
            request_options=request_options,
        )

    async def custom_properties_controller_remove(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CustomPropertiesControllerRemoveErrorBody]:
        """Delete an Custom Property by ID or key

        Args:
            key: A Custom Property key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/customProperties/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=custom_properties_controller_remove_error_mapper,
            request_options=request_options,
        )

    async def custom_properties_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateCustomPropertyDto | UpdateCustomPropertyDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomProperty, CustomPropertiesControllerUpdateErrorBody]:
        """Update an Custom Property by ID or key

        Args:
            key: A Custom Property key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/customProperties/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomPropertyDto | UpdateCustomPropertyDtoDict](body),
            decoder=async_json_decoder[CustomProperty],
            error_mapper=custom_properties_controller_update_error_mapper,
            request_options=request_options,
        )
