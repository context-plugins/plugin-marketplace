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
from ..errors.projects_controller_create_error import (
    ProjectsControllerCreateErrorBody,
    projects_controller_create_error_mapper,
)
from ..errors.projects_controller_find_all_error import (
    ProjectsControllerFindAllErrorBody,
    projects_controller_find_all_error_mapper,
)
from ..errors.projects_controller_find_one_error import (
    ProjectsControllerFindOneErrorBody,
    projects_controller_find_one_error_mapper,
)
from ..errors.projects_controller_get_staleness_error import (
    ProjectsControllerGetStalenessErrorBody,
    projects_controller_get_staleness_error_mapper,
)
from ..errors.projects_controller_remove_error import (
    ProjectsControllerRemoveErrorBody,
    projects_controller_remove_error_mapper,
)
from ..errors.projects_controller_update_error import (
    ProjectsControllerUpdateErrorBody,
    projects_controller_update_error_mapper,
)
from ..errors.projects_controller_update_protected_settings_error import (
    ProjectsControllerUpdateProtectedSettingsErrorBody,
    projects_controller_update_protected_settings_error_mapper,
)
from ..errors.projects_controller_update_settings_error import (
    ProjectsControllerUpdateSettingsErrorBody,
    projects_controller_update_settings_error_mapper,
)
from ..models.create_project_dto import CreateProjectDto, CreateProjectDtoDict
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..models.feature_staleness_entity import FeatureStalenessEntity
from ..models.project import Project
from ..models.update_project_dto import UpdateProjectDto, UpdateProjectDtoDict
from ..models.update_project_settings_dto import UpdateProjectSettingsDto, UpdateProjectSettingsDtoDict
from ..models.update_protected_project_settings_dto import (
    UpdateProtectedProjectSettingsDto,
    UpdateProtectedProjectSettingsDtoDict,
)
from ..server.server import Server


class Projects:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ProjectsWithRawResponse(client, server)

    def projects_controller_create(
        self, body: CreateProjectDto | CreateProjectDtoDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Project:
        """Creates a new project within the authed organization. The project key must be unique within the organization.
        If this is called in an Organization that has permissions controlled via an external IdP
        (https://docs.devcycle.com/platform/security-and-guardrails/permissions#full-role-based-access-control-project-level-roles--enterprise-only)
        - then no users will have permission to access this project.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project has been successfully created

        Raises:
            ApiError: Invalid request - missing or invalid properties Project key already exists ``error`` is
                ``BadRequestErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.projects_controller_create(body, request_options=request_options))

    def projects_controller_find_all(
        self,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Project]:
        """Lists all projects that the current API Token has permission to view.

        Args:
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[Project]`` response.

        Raises:
            ApiError: Invalid request - missing or invalid properties ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.projects_controller_find_all(
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                request_options=request_options,
            ),
        )

    def projects_controller_find_one(self, key: str, *, request_options: RequestOptionsOrDict | None = None) -> Project:
        """Get a Project by ID or key.

        Args:
            key: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Project`` response.

        Raises:
            ApiError: Project does not exist by key or ID. Keys are able to be changed so try switching to ID to have a
                consistent value that cannot be changed.This can also be returned if the current token does not have
                permission to view the project. ``error`` is ``NotFoundErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.projects_controller_find_one(key, request_options=request_options))

    def projects_controller_get_staleness(
        self,
        key: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        include_silenced: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[FeatureStalenessEntity]:
        """Send a ``GET`` request.

        Args:
            key: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            include_silenced: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureStalenessEntity]`` response.

        Raises:
            ApiError: Project not found. This can also be returned if the current token does not have permission to view
                the project. ``error`` is ``NotFoundErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.projects_controller_get_staleness(
                key,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                include_silenced=include_silenced,
                request_options=request_options,
            ),
        )

    def projects_controller_remove(self, key: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Delete a Project by ID or key

        Args:
            key: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project deleted successfully

        Raises:
            ApiError: Project not found.This can also be returned if the current token does not have permission to view
                the project. Cannot delete the last project in an organization. Please contact support to delete the
                organization. ``error`` is ``NotFoundErrorResponse | CannotDeleteLastItemErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.projects_controller_remove(key, request_options=request_options))

    def projects_controller_update(
        self,
        key: str,
        body: UpdateProjectDto | UpdateProjectDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Project:
        """Update a Project by ID or key. Certain facets of the project settings require additional permissions to
        update.

        Args:
            key: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Project`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.projects_controller_update(key, body, request_options=request_options))

    def projects_controller_update_protected_settings(
        self,
        key: str,
        body: UpdateProtectedProjectSettingsDto | UpdateProtectedProjectSettingsDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Project:
        """Update the Protect Settings for a Project by ID or key

        Args:
            key: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Project`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.projects_controller_update_protected_settings(
                key, body, request_options=request_options
            ),
        )

    def projects_controller_update_settings(
        self,
        key: str,
        body: UpdateProjectSettingsDto | UpdateProjectSettingsDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Project:
        """Update a subset of settings for a Project that only requires publisher permissions

        Args:
            key: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Project`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.projects_controller_update_settings(key, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ProjectsWithRawResponse:
        return self._with_raw_response


class AsyncProjects:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncProjectsWithRawResponse(client, server)

    async def projects_controller_create(
        self, body: CreateProjectDto | CreateProjectDtoDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Project:
        """Creates a new project within the authed organization. The project key must be unique within the organization.
        If this is called in an Organization that has permissions controlled via an external IdP
        (https://docs.devcycle.com/platform/security-and-guardrails/permissions#full-role-based-access-control-project-level-roles--enterprise-only)
        - then no users will have permission to access this project.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project has been successfully created

        Raises:
            ApiError: Invalid request - missing or invalid properties Project key already exists ``error`` is
                ``BadRequestErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.projects_controller_create(body, request_options=request_options))

    async def projects_controller_find_all(
        self,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Project]:
        """Lists all projects that the current API Token has permission to view.

        Args:
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[Project]`` response.

        Raises:
            ApiError: Invalid request - missing or invalid properties ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.projects_controller_find_all(
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                request_options=request_options,
            ),
        )

    async def projects_controller_find_one(
        self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Project:
        """Get a Project by ID or key.

        Args:
            key: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Project`` response.

        Raises:
            ApiError: Project does not exist by key or ID. Keys are able to be changed so try switching to ID to have a
                consistent value that cannot be changed.This can also be returned if the current token does not have
                permission to view the project. ``error`` is ``NotFoundErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.projects_controller_find_one(key, request_options=request_options))

    async def projects_controller_get_staleness(
        self,
        key: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        include_silenced: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[FeatureStalenessEntity]:
        """Send a ``GET`` request.

        Args:
            key: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            include_silenced: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureStalenessEntity]`` response.

        Raises:
            ApiError: Project not found. This can also be returned if the current token does not have permission to view
                the project. ``error`` is ``NotFoundErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.projects_controller_get_staleness(
                key,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                include_silenced=include_silenced,
                request_options=request_options,
            ),
        )

    async def projects_controller_remove(
        self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a Project by ID or key

        Args:
            key: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project deleted successfully

        Raises:
            ApiError: Project not found.This can also be returned if the current token does not have permission to view
                the project. Cannot delete the last project in an organization. Please contact support to delete the
                organization. ``error`` is ``NotFoundErrorResponse | CannotDeleteLastItemErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.projects_controller_remove(key, request_options=request_options))

    async def projects_controller_update(
        self,
        key: str,
        body: UpdateProjectDto | UpdateProjectDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Project:
        """Update a Project by ID or key. Certain facets of the project settings require additional permissions to
        update.

        Args:
            key: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Project`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.projects_controller_update(key, body, request_options=request_options)
        )

    async def projects_controller_update_protected_settings(
        self,
        key: str,
        body: UpdateProtectedProjectSettingsDto | UpdateProtectedProjectSettingsDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Project:
        """Update the Protect Settings for a Project by ID or key

        Args:
            key: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Project`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.projects_controller_update_protected_settings(
                key, body, request_options=request_options
            ),
        )

    async def projects_controller_update_settings(
        self,
        key: str,
        body: UpdateProjectSettingsDto | UpdateProjectSettingsDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Project:
        """Update a subset of settings for a Project that only requires publisher permissions

        Args:
            key: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Project`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.projects_controller_update_settings(
                key, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProjectsWithRawResponse:
        return self._with_raw_response


class ProjectsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def projects_controller_create(
        self, body: CreateProjectDto | CreateProjectDtoDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Project, ProjectsControllerCreateErrorBody]:
        """Creates a new project within the authed organization. The project key must be unique within the organization.
        If this is called in an Organization that has permissions controlled via an external IdP
        (https://docs.devcycle.com/platform/security-and-guardrails/permissions#full-role-based-access-control-project-level-roles--enterprise-only)
        - then no users will have permission to access this project.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProjectDto | CreateProjectDtoDict](body),
            decoder=json_decoder[Project],
            error_mapper=projects_controller_create_error_mapper,
            request_options=request_options,
        )

    def projects_controller_find_all(
        self,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Project], ProjectsControllerFindAllErrorBody]:
        """Lists all projects that the current API Token has permission to view.

        Args:
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects"),
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
            ],
            decoder=json_decoder[list[Project]],
            error_mapper=projects_controller_find_all_error_mapper,
            request_options=request_options,
        )

    def projects_controller_find_one(
        self, key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Project, ProjectsControllerFindOneErrorBody]:
        """Get a Project by ID or key.

        Args:
            key: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{key}"),
            path_params=[param[str]("key", key)],
            decoder=json_decoder[Project],
            error_mapper=projects_controller_find_one_error_mapper,
            request_options=request_options,
        )

    def projects_controller_get_staleness(
        self,
        key: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        include_silenced: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FeatureStalenessEntity], ProjectsControllerGetStalenessErrorBody]:
        """Send a ``GET`` request.

        Args:
            key: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            include_silenced: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{key}/staleness"),
            path_params=[param[str]("key", key)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
                param[bool | None]("includeSilenced", include_silenced),
            ],
            decoder=json_decoder[list[FeatureStalenessEntity]],
            error_mapper=projects_controller_get_staleness_error_mapper,
            request_options=request_options,
        )

    def projects_controller_remove(
        self, key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ProjectsControllerRemoveErrorBody]:
        """Delete a Project by ID or key

        Args:
            key: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{key}"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=projects_controller_remove_error_mapper,
            request_options=request_options,
        )

    def projects_controller_update(
        self,
        key: str,
        body: UpdateProjectDto | UpdateProjectDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, ProjectsControllerUpdateErrorBody]:
        """Update a Project by ID or key. Certain facets of the project settings require additional permissions to
        update.

        Args:
            key: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{key}"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateProjectDto | UpdateProjectDtoDict](body),
            decoder=json_decoder[Project],
            error_mapper=projects_controller_update_error_mapper,
            request_options=request_options,
        )

    def projects_controller_update_protected_settings(
        self,
        key: str,
        body: UpdateProtectedProjectSettingsDto | UpdateProtectedProjectSettingsDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, ProjectsControllerUpdateProtectedSettingsErrorBody]:
        """Update the Protect Settings for a Project by ID or key

        Args:
            key: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{key}/settings/protected"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateProtectedProjectSettingsDto | UpdateProtectedProjectSettingsDtoDict](body),
            decoder=json_decoder[Project],
            error_mapper=projects_controller_update_protected_settings_error_mapper,
            request_options=request_options,
        )

    def projects_controller_update_settings(
        self,
        key: str,
        body: UpdateProjectSettingsDto | UpdateProjectSettingsDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, ProjectsControllerUpdateSettingsErrorBody]:
        """Update a subset of settings for a Project that only requires publisher permissions

        Args:
            key: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{key}/settings"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateProjectSettingsDto | UpdateProjectSettingsDtoDict](body),
            decoder=json_decoder[Project],
            error_mapper=projects_controller_update_settings_error_mapper,
            request_options=request_options,
        )


class AsyncProjectsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def projects_controller_create(
        self, body: CreateProjectDto | CreateProjectDtoDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Project, ProjectsControllerCreateErrorBody]:
        """Creates a new project within the authed organization. The project key must be unique within the organization.
        If this is called in an Organization that has permissions controlled via an external IdP
        (https://docs.devcycle.com/platform/security-and-guardrails/permissions#full-role-based-access-control-project-level-roles--enterprise-only)
        - then no users will have permission to access this project.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProjectDto | CreateProjectDtoDict](body),
            decoder=async_json_decoder[Project],
            error_mapper=projects_controller_create_error_mapper,
            request_options=request_options,
        )

    async def projects_controller_find_all(
        self,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Project], ProjectsControllerFindAllErrorBody]:
        """Lists all projects that the current API Token has permission to view.

        Args:
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects"),
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
            ],
            decoder=async_json_decoder[list[Project]],
            error_mapper=projects_controller_find_all_error_mapper,
            request_options=request_options,
        )

    async def projects_controller_find_one(
        self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Project, ProjectsControllerFindOneErrorBody]:
        """Get a Project by ID or key.

        Args:
            key: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{key}"),
            path_params=[param[str]("key", key)],
            decoder=async_json_decoder[Project],
            error_mapper=projects_controller_find_one_error_mapper,
            request_options=request_options,
        )

    async def projects_controller_get_staleness(
        self,
        key: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        include_silenced: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FeatureStalenessEntity], ProjectsControllerGetStalenessErrorBody]:
        """Send a ``GET`` request.

        Args:
            key: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            include_silenced: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{key}/staleness"),
            path_params=[param[str]("key", key)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
                param[bool | None]("includeSilenced", include_silenced),
            ],
            decoder=async_json_decoder[list[FeatureStalenessEntity]],
            error_mapper=projects_controller_get_staleness_error_mapper,
            request_options=request_options,
        )

    async def projects_controller_remove(
        self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ProjectsControllerRemoveErrorBody]:
        """Delete a Project by ID or key

        Args:
            key: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{key}"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=projects_controller_remove_error_mapper,
            request_options=request_options,
        )

    async def projects_controller_update(
        self,
        key: str,
        body: UpdateProjectDto | UpdateProjectDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, ProjectsControllerUpdateErrorBody]:
        """Update a Project by ID or key. Certain facets of the project settings require additional permissions to
        update.

        Args:
            key: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{key}"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateProjectDto | UpdateProjectDtoDict](body),
            decoder=async_json_decoder[Project],
            error_mapper=projects_controller_update_error_mapper,
            request_options=request_options,
        )

    async def projects_controller_update_protected_settings(
        self,
        key: str,
        body: UpdateProtectedProjectSettingsDto | UpdateProtectedProjectSettingsDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, ProjectsControllerUpdateProtectedSettingsErrorBody]:
        """Update the Protect Settings for a Project by ID or key

        Args:
            key: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{key}/settings/protected"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateProtectedProjectSettingsDto | UpdateProtectedProjectSettingsDtoDict](body),
            decoder=async_json_decoder[Project],
            error_mapper=projects_controller_update_protected_settings_error_mapper,
            request_options=request_options,
        )

    async def projects_controller_update_settings(
        self,
        key: str,
        body: UpdateProjectSettingsDto | UpdateProjectSettingsDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, ProjectsControllerUpdateSettingsErrorBody]:
        """Update a subset of settings for a Project that only requires publisher permissions

        Args:
            key: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{key}/settings"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateProjectSettingsDto | UpdateProjectSettingsDtoDict](body),
            decoder=async_json_decoder[Project],
            error_mapper=projects_controller_update_settings_error_mapper,
            request_options=request_options,
        )
