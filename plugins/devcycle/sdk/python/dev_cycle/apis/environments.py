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
from ..errors.environments_controller_create_error import (
    EnvironmentsControllerCreateErrorBody,
    environments_controller_create_error_mapper,
)
from ..errors.environments_controller_find_all_error import (
    EnvironmentsControllerFindAllErrorBody,
    environments_controller_find_all_error_mapper,
)
from ..errors.environments_controller_find_one_error import (
    EnvironmentsControllerFindOneErrorBody,
    environments_controller_find_one_error_mapper,
)
from ..errors.environments_controller_remove_error import (
    EnvironmentsControllerRemoveErrorBody,
    environments_controller_remove_error_mapper,
)
from ..errors.environments_controller_update_error import (
    EnvironmentsControllerUpdateErrorBody,
    environments_controller_update_error_mapper,
)
from ..errors.sdk_keys_controller_generate_error import (
    SdkKeysControllerGenerateErrorBody,
    sdk_keys_controller_generate_error_mapper,
)
from ..errors.sdk_keys_controller_invalidate_error import (
    SdkKeysControllerInvalidateErrorBody,
    sdk_keys_controller_invalidate_error_mapper,
)
from ..models.create_environment_dto import CreateEnvironmentDto, CreateEnvironmentDtoDict
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..models.environment_model import EnvironmentModel
from ..models.generate_sdk_tokens_dto import GenerateSdkTokensDto, GenerateSdkTokensDtoDict
from ..models.update_environment_dto import UpdateEnvironmentDto, UpdateEnvironmentDtoDict
from ..server.server import Server


class Environments:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = EnvironmentsWithRawResponse(client, server)

    def environments_controller_create(
        self,
        project: str,
        body: CreateEnvironmentDto | CreateEnvironmentDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentModel:
        """Create a new environment for a project. The environment key must be unique within the project. Multiple
        environments can share a type. Creating an environment will auto-generate a set of SDK Keys for the various
        types of SDKs. When permissions are enabled for the organization, the token must have Publisher permissions for
        the environment to be created.

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``EnvironmentModel`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.environments_controller_create(project, body, request_options=request_options)
        )

    def environments_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[EnvironmentModel]:
        """List all environments for a project. If a token does not have permission to view protected environments the
        environments will be filtered to only show non-protected environments SDK Keys for security.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[EnvironmentModel]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.environments_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                request_options=request_options,
            ),
        )

    def environments_controller_find_one(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> EnvironmentModel:
        """Returns the environment; if the token does not have permission to view protected environments, the
        environment will be filtered to only show non-protected SDK Keys for security.

        Args:
            key: A Environment key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``EnvironmentModel`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.environments_controller_find_one(key, project, request_options=request_options)
        )

    def environments_controller_remove(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete an Environment by ID or key

        Args:
            key: A Environment key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                CannotDeleteLastItemErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.environments_controller_remove(key, project, request_options=request_options)
        )

    def environments_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateEnvironmentDto | UpdateEnvironmentDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentModel:
        """Update an environment by ID or key. The environment key (if edited) must be unique within the project. If
        permissions are enabled, changing a protected environment type requires Publisher permissions

        Args:
            key: A Environment key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``EnvironmentModel`` response.

        Raises:
            ApiError: Invalid request body Environment not found Environment key already exists, cannot rename an
                environment to an existing one. ``error`` is ``BadRequestErrorResponse | NotFoundErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.environments_controller_update(key, project, body, request_options=request_options)
        )

    def sdk_keys_controller_generate(
        self,
        environment: str,
        project: str,
        body: GenerateSdkTokensDto | GenerateSdkTokensDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentModel:
        """Generate new SDK keys for an environment, for any or all of the SDK types. This is the expected and
        recommended way to rotate SDK keys. Adding a new SDK key will not invalidate existing SDK keys. Generating new
        keys is restricted for protected environments to those with Publisher permissions

        Args:
            environment: An Environment key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``EnvironmentModel`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.sdk_keys_controller_generate(
                environment, project, body, request_options=request_options
            ),
        )

    def sdk_keys_controller_invalidate(
        self, key: str, environment: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """This will invalidate all configs associated with a given key. This is an instantaneous change and all SDKs
        using this key will stop working immediately. This is the expected and recommended way to rotate SDK keys.

        Args:
            key: An SDK key
            environment: An Environment key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                CannotDeleteLastItemErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.sdk_keys_controller_invalidate(
                key, environment, project, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EnvironmentsWithRawResponse:
        return self._with_raw_response


class AsyncEnvironments:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncEnvironmentsWithRawResponse(client, server)

    async def environments_controller_create(
        self,
        project: str,
        body: CreateEnvironmentDto | CreateEnvironmentDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentModel:
        """Create a new environment for a project. The environment key must be unique within the project. Multiple
        environments can share a type. Creating an environment will auto-generate a set of SDK Keys for the various
        types of SDKs. When permissions are enabled for the organization, the token must have Publisher permissions for
        the environment to be created.

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``EnvironmentModel`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.environments_controller_create(project, body, request_options=request_options)
        )

    async def environments_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[EnvironmentModel]:
        """List all environments for a project. If a token does not have permission to view protected environments the
        environments will be filtered to only show non-protected environments SDK Keys for security.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[EnvironmentModel]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.environments_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                request_options=request_options,
            ),
        )

    async def environments_controller_find_one(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EnvironmentModel:
        """Returns the environment; if the token does not have permission to view protected environments, the
        environment will be filtered to only show non-protected SDK Keys for security.

        Args:
            key: A Environment key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``EnvironmentModel`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.environments_controller_find_one(
                key, project, request_options=request_options
            ),
        )

    async def environments_controller_remove(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete an Environment by ID or key

        Args:
            key: A Environment key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                CannotDeleteLastItemErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.environments_controller_remove(key, project, request_options=request_options)
        )

    async def environments_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateEnvironmentDto | UpdateEnvironmentDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentModel:
        """Update an environment by ID or key. The environment key (if edited) must be unique within the project. If
        permissions are enabled, changing a protected environment type requires Publisher permissions

        Args:
            key: A Environment key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``EnvironmentModel`` response.

        Raises:
            ApiError: Invalid request body Environment not found Environment key already exists, cannot rename an
                environment to an existing one. ``error`` is ``BadRequestErrorResponse | NotFoundErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.environments_controller_update(
                key, project, body, request_options=request_options
            ),
        )

    async def sdk_keys_controller_generate(
        self,
        environment: str,
        project: str,
        body: GenerateSdkTokensDto | GenerateSdkTokensDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentModel:
        """Generate new SDK keys for an environment, for any or all of the SDK types. This is the expected and
        recommended way to rotate SDK keys. Adding a new SDK key will not invalidate existing SDK keys. Generating new
        keys is restricted for protected environments to those with Publisher permissions

        Args:
            environment: An Environment key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``EnvironmentModel`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.sdk_keys_controller_generate(
                environment, project, body, request_options=request_options
            ),
        )

    async def sdk_keys_controller_invalidate(
        self, key: str, environment: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This will invalidate all configs associated with a given key. This is an instantaneous change and all SDKs
        using this key will stop working immediately. This is the expected and recommended way to rotate SDK keys.

        Args:
            key: An SDK key
            environment: An Environment key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                CannotDeleteLastItemErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.sdk_keys_controller_invalidate(
                key, environment, project, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEnvironmentsWithRawResponse:
        return self._with_raw_response


class EnvironmentsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def environments_controller_create(
        self,
        project: str,
        body: CreateEnvironmentDto | CreateEnvironmentDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentModel, EnvironmentsControllerCreateErrorBody]:
        """Create a new environment for a project. The environment key must be unique within the project. Multiple
        environments can share a type. Creating an environment will auto-generate a set of SDK Keys for the various
        types of SDKs. When permissions are enabled for the organization, the token must have Publisher permissions for
        the environment to be created.

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/environments"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEnvironmentDto | CreateEnvironmentDtoDict](body),
            decoder=json_decoder[EnvironmentModel],
            error_mapper=environments_controller_create_error_mapper,
            request_options=request_options,
        )

    def environments_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[EnvironmentModel], EnvironmentsControllerFindAllErrorBody]:
        """List all environments for a project. If a token does not have permission to view protected environments the
        environments will be filtered to only show non-protected environments SDK Keys for security.

        Args:
            project: A Project key or ID
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
            url_template=self._server.default("/v1/projects/{project}/environments"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
            ],
            decoder=json_decoder[list[EnvironmentModel]],
            error_mapper=environments_controller_find_all_error_mapper,
            request_options=request_options,
        )

    def environments_controller_find_one(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentModel, EnvironmentsControllerFindOneErrorBody]:
        """Returns the environment; if the token does not have permission to view protected environments, the
        environment will be filtered to only show non-protected SDK Keys for security.

        Args:
            key: A Environment key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/environments/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            decoder=json_decoder[EnvironmentModel],
            error_mapper=environments_controller_find_one_error_mapper,
            request_options=request_options,
        )

    def environments_controller_remove(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, EnvironmentsControllerRemoveErrorBody]:
        """Delete an Environment by ID or key

        Args:
            key: A Environment key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/environments/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=environments_controller_remove_error_mapper,
            request_options=request_options,
        )

    def environments_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateEnvironmentDto | UpdateEnvironmentDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentModel, EnvironmentsControllerUpdateErrorBody]:
        """Update an environment by ID or key. The environment key (if edited) must be unique within the project. If
        permissions are enabled, changing a protected environment type requires Publisher permissions

        Args:
            key: A Environment key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/environments/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateEnvironmentDto | UpdateEnvironmentDtoDict](body),
            decoder=json_decoder[EnvironmentModel],
            error_mapper=environments_controller_update_error_mapper,
            request_options=request_options,
        )

    def sdk_keys_controller_generate(
        self,
        environment: str,
        project: str,
        body: GenerateSdkTokensDto | GenerateSdkTokensDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentModel, SdkKeysControllerGenerateErrorBody]:
        """Generate new SDK keys for an environment, for any or all of the SDK types. This is the expected and
        recommended way to rotate SDK keys. Adding a new SDK key will not invalidate existing SDK keys. Generating new
        keys is restricted for protected environments to those with Publisher permissions

        Args:
            environment: An Environment key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/environments/{environment}/sdk-keys"),
            path_params=[param[str]("environment", environment), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GenerateSdkTokensDto | GenerateSdkTokensDtoDict](body),
            decoder=json_decoder[EnvironmentModel],
            error_mapper=sdk_keys_controller_generate_error_mapper,
            request_options=request_options,
        )

    def sdk_keys_controller_invalidate(
        self, key: str, environment: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SdkKeysControllerInvalidateErrorBody]:
        """This will invalidate all configs associated with a given key. This is an instantaneous change and all SDKs
        using this key will stop working immediately. This is the expected and recommended way to rotate SDK keys.

        Args:
            key: An SDK key
            environment: An Environment key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/environments/{environment}/sdk-keys/{key}"),
            path_params=[
                param[str]("key", key), param[str]("environment", environment), param[str]("project", project)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=sdk_keys_controller_invalidate_error_mapper,
            request_options=request_options,
        )


class AsyncEnvironmentsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def environments_controller_create(
        self,
        project: str,
        body: CreateEnvironmentDto | CreateEnvironmentDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentModel, EnvironmentsControllerCreateErrorBody]:
        """Create a new environment for a project. The environment key must be unique within the project. Multiple
        environments can share a type. Creating an environment will auto-generate a set of SDK Keys for the various
        types of SDKs. When permissions are enabled for the organization, the token must have Publisher permissions for
        the environment to be created.

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/environments"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEnvironmentDto | CreateEnvironmentDtoDict](body),
            decoder=async_json_decoder[EnvironmentModel],
            error_mapper=environments_controller_create_error_mapper,
            request_options=request_options,
        )

    async def environments_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[EnvironmentModel], EnvironmentsControllerFindAllErrorBody]:
        """List all environments for a project. If a token does not have permission to view protected environments the
        environments will be filtered to only show non-protected environments SDK Keys for security.

        Args:
            project: A Project key or ID
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
            url_template=self._server.default("/v1/projects/{project}/environments"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
            ],
            decoder=async_json_decoder[list[EnvironmentModel]],
            error_mapper=environments_controller_find_all_error_mapper,
            request_options=request_options,
        )

    async def environments_controller_find_one(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentModel, EnvironmentsControllerFindOneErrorBody]:
        """Returns the environment; if the token does not have permission to view protected environments, the
        environment will be filtered to only show non-protected SDK Keys for security.

        Args:
            key: A Environment key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/environments/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            decoder=async_json_decoder[EnvironmentModel],
            error_mapper=environments_controller_find_one_error_mapper,
            request_options=request_options,
        )

    async def environments_controller_remove(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, EnvironmentsControllerRemoveErrorBody]:
        """Delete an Environment by ID or key

        Args:
            key: A Environment key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/environments/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=environments_controller_remove_error_mapper,
            request_options=request_options,
        )

    async def environments_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateEnvironmentDto | UpdateEnvironmentDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentModel, EnvironmentsControllerUpdateErrorBody]:
        """Update an environment by ID or key. The environment key (if edited) must be unique within the project. If
        permissions are enabled, changing a protected environment type requires Publisher permissions

        Args:
            key: A Environment key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/environments/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateEnvironmentDto | UpdateEnvironmentDtoDict](body),
            decoder=async_json_decoder[EnvironmentModel],
            error_mapper=environments_controller_update_error_mapper,
            request_options=request_options,
        )

    async def sdk_keys_controller_generate(
        self,
        environment: str,
        project: str,
        body: GenerateSdkTokensDto | GenerateSdkTokensDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentModel, SdkKeysControllerGenerateErrorBody]:
        """Generate new SDK keys for an environment, for any or all of the SDK types. This is the expected and
        recommended way to rotate SDK keys. Adding a new SDK key will not invalidate existing SDK keys. Generating new
        keys is restricted for protected environments to those with Publisher permissions

        Args:
            environment: An Environment key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/environments/{environment}/sdk-keys"),
            path_params=[param[str]("environment", environment), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GenerateSdkTokensDto | GenerateSdkTokensDtoDict](body),
            decoder=async_json_decoder[EnvironmentModel],
            error_mapper=sdk_keys_controller_generate_error_mapper,
            request_options=request_options,
        )

    async def sdk_keys_controller_invalidate(
        self, key: str, environment: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SdkKeysControllerInvalidateErrorBody]:
        """This will invalidate all configs associated with a given key. This is an instantaneous change and all SDKs
        using this key will stop working immediately. This is the expected and recommended way to rotate SDK keys.

        Args:
            key: An SDK key
            environment: An Environment key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/environments/{environment}/sdk-keys/{key}"),
            path_params=[
                param[str]("key", key), param[str]("environment", environment), param[str]("project", project)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=sdk_keys_controller_invalidate_error_mapper,
            request_options=request_options,
        )
