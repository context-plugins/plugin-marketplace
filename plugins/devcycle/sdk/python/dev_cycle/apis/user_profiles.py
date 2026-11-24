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
from ..errors.user_profiles_controller_create_or_update_error import (
    UserProfilesControllerCreateOrUpdateErrorBody,
    user_profiles_controller_create_or_update_error_mapper,
)
from ..errors.user_profiles_controller_find_all_error import (
    UserProfilesControllerFindAllErrorBody,
    user_profiles_controller_find_all_error_mapper,
)
from ..models.project_user_profile import ProjectUserProfile
from ..models.update_user_profile_dto import UpdateUserProfileDto, UpdateUserProfileDtoDict
from ..server.server import Server


class UserProfiles:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = UserProfilesWithRawResponse(client, server)

    def user_profiles_controller_create_or_update(
        self,
        project: str,
        body: UpdateUserProfileDto | UpdateUserProfileDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProjectUserProfile:
        """Create or Update a User Profile for Overrides

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ProjectUserProfile`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.user_profiles_controller_create_or_update(
                project, body, request_options=request_options
            ),
        )

    def user_profiles_controller_find_all(
        self, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProjectUserProfile:
        """Get User Profile for the authenticated User in the specified Project

        Args:
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ProjectUserProfile`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.user_profiles_controller_find_all(project, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> UserProfilesWithRawResponse:
        return self._with_raw_response


class AsyncUserProfiles:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncUserProfilesWithRawResponse(client, server)

    async def user_profiles_controller_create_or_update(
        self,
        project: str,
        body: UpdateUserProfileDto | UpdateUserProfileDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectUserProfile:
        """Create or Update a User Profile for Overrides

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ProjectUserProfile`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.user_profiles_controller_create_or_update(
                project, body, request_options=request_options
            ),
        )

    async def user_profiles_controller_find_all(
        self, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProjectUserProfile:
        """Get User Profile for the authenticated User in the specified Project

        Args:
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ProjectUserProfile`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.user_profiles_controller_find_all(project, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncUserProfilesWithRawResponse:
        return self._with_raw_response


class UserProfilesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def user_profiles_controller_create_or_update(
        self,
        project: str,
        body: UpdateUserProfileDto | UpdateUserProfileDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectUserProfile, UserProfilesControllerCreateOrUpdateErrorBody]:
        """Create or Update a User Profile for Overrides

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/userProfile/current"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateUserProfileDto | UpdateUserProfileDtoDict](body),
            decoder=json_decoder[ProjectUserProfile],
            error_mapper=user_profiles_controller_create_or_update_error_mapper,
            request_options=request_options,
        )

    def user_profiles_controller_find_all(
        self, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectUserProfile, UserProfilesControllerFindAllErrorBody]:
        """Get User Profile for the authenticated User in the specified Project

        Args:
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/userProfile/current"),
            path_params=[param[str]("project", project)],
            decoder=json_decoder[ProjectUserProfile],
            error_mapper=user_profiles_controller_find_all_error_mapper,
            request_options=request_options,
        )


class AsyncUserProfilesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def user_profiles_controller_create_or_update(
        self,
        project: str,
        body: UpdateUserProfileDto | UpdateUserProfileDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectUserProfile, UserProfilesControllerCreateOrUpdateErrorBody]:
        """Create or Update a User Profile for Overrides

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/userProfile/current"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateUserProfileDto | UpdateUserProfileDtoDict](body),
            decoder=async_json_decoder[ProjectUserProfile],
            error_mapper=user_profiles_controller_create_or_update_error_mapper,
            request_options=request_options,
        )

    async def user_profiles_controller_find_all(
        self, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectUserProfile, UserProfilesControllerFindAllErrorBody]:
        """Get User Profile for the authenticated User in the specified Project

        Args:
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/userProfile/current"),
            path_params=[param[str]("project", project)],
            decoder=async_json_decoder[ProjectUserProfile],
            error_mapper=user_profiles_controller_find_all_error_mapper,
            request_options=request_options,
        )
