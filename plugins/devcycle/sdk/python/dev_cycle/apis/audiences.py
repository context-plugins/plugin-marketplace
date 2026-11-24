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
from ..errors.audiences_controller_create_error import (
    AudiencesControllerCreateErrorBody,
    audiences_controller_create_error_mapper,
)
from ..errors.audiences_controller_find_all_error import (
    AudiencesControllerFindAllErrorBody,
    audiences_controller_find_all_error_mapper,
)
from ..errors.audiences_controller_find_one_error import (
    AudiencesControllerFindOneErrorBody,
    audiences_controller_find_one_error_mapper,
)
from ..errors.audiences_controller_find_usages_error import (
    AudiencesControllerFindUsagesErrorBody,
    audiences_controller_find_usages_error_mapper,
)
from ..errors.audiences_controller_remove_error import (
    AudiencesControllerRemoveErrorBody,
    audiences_controller_remove_error_mapper,
)
from ..errors.audiences_controller_update_error import (
    AudiencesControllerUpdateErrorBody,
    audiences_controller_update_error_mapper,
)
from ..models.audience import Audience
from ..models.audience_usage import AudienceUsage
from ..models.create_audience_dto import CreateAudienceDto, CreateAudienceDtoDict
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..models.update_audience_dto import UpdateAudienceDto, UpdateAudienceDtoDict
from ..server.server import Server


class Audiences:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AudiencesWithRawResponse(client, server)

    def audiences_controller_create(
        self,
        project: str,
        body: CreateAudienceDto | CreateAudienceDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Audience:
        """Create a new Audience

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Audience`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.audiences_controller_create(project, body, request_options=request_options)
        )

    def audiences_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        include_usage: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Audience]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            include_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[Audience]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.audiences_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                include_usage=include_usage,
                request_options=request_options,
            ),
        )

    def audiences_controller_find_one(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Audience:
        """Get an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Audience`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.audiences_controller_find_one(key, project, request_options=request_options)
        )

    def audiences_controller_find_usages(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AudienceUsage:
        """Get the direct usages of an Audiences Usage by Features OR other Audiences by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``AudienceUsage`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.audiences_controller_find_usages(key, project, request_options=request_options)
        )

    def audiences_controller_remove(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.audiences_controller_remove(key, project, request_options=request_options)
        )

    def audiences_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateAudienceDto | UpdateAudienceDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Audience:
        """Update an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Audience`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.audiences_controller_update(key, project, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AudiencesWithRawResponse:
        return self._with_raw_response


class AsyncAudiences:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAudiencesWithRawResponse(client, server)

    async def audiences_controller_create(
        self,
        project: str,
        body: CreateAudienceDto | CreateAudienceDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Audience:
        """Create a new Audience

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Audience`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.audiences_controller_create(project, body, request_options=request_options)
        )

    async def audiences_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        include_usage: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Audience]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            include_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[Audience]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.audiences_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                include_usage=include_usage,
                request_options=request_options,
            ),
        )

    async def audiences_controller_find_one(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Audience:
        """Get an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Audience`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.audiences_controller_find_one(key, project, request_options=request_options)
        )

    async def audiences_controller_find_usages(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AudienceUsage:
        """Get the direct usages of an Audiences Usage by Features OR other Audiences by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``AudienceUsage`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.audiences_controller_find_usages(
                key, project, request_options=request_options
            ),
        )

    async def audiences_controller_remove(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.audiences_controller_remove(key, project, request_options=request_options)
        )

    async def audiences_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateAudienceDto | UpdateAudienceDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Audience:
        """Update an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Audience`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.audiences_controller_update(
                key, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAudiencesWithRawResponse:
        return self._with_raw_response


class AudiencesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def audiences_controller_create(
        self,
        project: str,
        body: CreateAudienceDto | CreateAudienceDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Audience, AudiencesControllerCreateErrorBody]:
        """Create a new Audience

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/audiences"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAudienceDto | CreateAudienceDtoDict](body),
            decoder=json_decoder[Audience],
            error_mapper=audiences_controller_create_error_mapper,
            request_options=request_options,
        )

    def audiences_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        include_usage: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Audience], AudiencesControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            include_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/audiences"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
                param[bool | None]("includeUsage", include_usage),
            ],
            decoder=json_decoder[list[Audience]],
            error_mapper=audiences_controller_find_all_error_mapper,
            request_options=request_options,
        )

    def audiences_controller_find_one(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Audience, AudiencesControllerFindOneErrorBody]:
        """Get an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/audiences/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            decoder=json_decoder[Audience],
            error_mapper=audiences_controller_find_one_error_mapper,
            request_options=request_options,
        )

    def audiences_controller_find_usages(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AudienceUsage, AudiencesControllerFindUsagesErrorBody]:
        """Get the direct usages of an Audiences Usage by Features OR other Audiences by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/audiences/{key}/usage"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            decoder=json_decoder[AudienceUsage],
            error_mapper=audiences_controller_find_usages_error_mapper,
            request_options=request_options,
        )

    def audiences_controller_remove(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AudiencesControllerRemoveErrorBody]:
        """Delete an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/audiences/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=audiences_controller_remove_error_mapper,
            request_options=request_options,
        )

    def audiences_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateAudienceDto | UpdateAudienceDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Audience, AudiencesControllerUpdateErrorBody]:
        """Update an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/audiences/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateAudienceDto | UpdateAudienceDtoDict](body),
            decoder=json_decoder[Audience],
            error_mapper=audiences_controller_update_error_mapper,
            request_options=request_options,
        )


class AsyncAudiencesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def audiences_controller_create(
        self,
        project: str,
        body: CreateAudienceDto | CreateAudienceDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Audience, AudiencesControllerCreateErrorBody]:
        """Create a new Audience

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/audiences"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAudienceDto | CreateAudienceDtoDict](body),
            decoder=async_json_decoder[Audience],
            error_mapper=audiences_controller_create_error_mapper,
            request_options=request_options,
        )

    async def audiences_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        include_usage: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Audience], AudiencesControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            include_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/audiences"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
                param[bool | None]("includeUsage", include_usage),
            ],
            decoder=async_json_decoder[list[Audience]],
            error_mapper=audiences_controller_find_all_error_mapper,
            request_options=request_options,
        )

    async def audiences_controller_find_one(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Audience, AudiencesControllerFindOneErrorBody]:
        """Get an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/audiences/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            decoder=async_json_decoder[Audience],
            error_mapper=audiences_controller_find_one_error_mapper,
            request_options=request_options,
        )

    async def audiences_controller_find_usages(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AudienceUsage, AudiencesControllerFindUsagesErrorBody]:
        """Get the direct usages of an Audiences Usage by Features OR other Audiences by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/audiences/{key}/usage"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            decoder=async_json_decoder[AudienceUsage],
            error_mapper=audiences_controller_find_usages_error_mapper,
            request_options=request_options,
        )

    async def audiences_controller_remove(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AudiencesControllerRemoveErrorBody]:
        """Delete an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/audiences/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=audiences_controller_remove_error_mapper,
            request_options=request_options,
        )

    async def audiences_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateAudienceDto | UpdateAudienceDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Audience, AudiencesControllerUpdateErrorBody]:
        """Update an Audience by ID or key

        Args:
            key: A Audience key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/audiences/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateAudienceDto | UpdateAudienceDtoDict](body),
            decoder=async_json_decoder[Audience],
            error_mapper=audiences_controller_update_error_mapper,
            request_options=request_options,
        )
