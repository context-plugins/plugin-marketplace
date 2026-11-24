from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_profile_profiles_post_error import (
    CreateProfileProfilesPostErrorBody,
    create_profile_profiles_post_error_mapper,
)
from ..errors.delete_browser_profile_profiles_profile_id_delete_error import (
    DeleteBrowserProfileProfilesProfileIdDeleteErrorBody,
    delete_browser_profile_profiles_profile_id_delete_error_mapper,
)
from ..errors.get_profile_profiles_profile_id_get_error import (
    GetProfileProfilesProfileIdGetErrorBody,
    get_profile_profiles_profile_id_get_error_mapper,
)
from ..errors.list_profiles_profiles_get_error import (
    ListProfilesProfilesGetErrorBody,
    list_profiles_profiles_get_error_mapper,
)
from ..errors.update_profile_profiles_profile_id_patch_error import (
    UpdateProfileProfilesProfileIdPatchErrorBody,
    update_profile_profiles_profile_id_patch_error_mapper,
)
from ..models.profile_create_request import ProfileCreateRequest, ProfileCreateRequestDict
from ..models.profile_list_response import ProfileListResponse
from ..models.profile_update_request import ProfileUpdateRequest, ProfileUpdateRequestDict
from ..models.profile_view import ProfileView
from ..server.server import Server


class Profiles:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProfilesWithRawResponse(client, server, auth)

    def create_profile_profiles_post(
        self,
        *,
        body: ProfileCreateRequest | ProfileCreateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProfileView:
        """Profiles allow you to preserve the state of the browser between tasks.

        They are most commonly used to allow users to preserve the log-in state in the agent between tasks. You'd
        normally create one profile per user and then use it for all their tasks.

        You can set a ``user_id`` when creating a profile to associate it with a user in your system. This allows you to
        later search for the profile using the GET /profiles endpoint with a query parameter.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Profile limit reached; delete unused profiles to create new ones Request validation failed
                ``error`` is ``InsufficientCreditsError | ValidationError | RawError``."""
        return unwrap(self._with_raw_response.create_profile_profiles_post(body=body, request_options=request_options))

    def delete_browser_profile_profiles_profile_id_delete(
        self, profile_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently delete a browser profile and its configuration.

        Args:
            profile_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.delete_browser_profile_profiles_profile_id_delete(
                profile_id, request_options=request_options
            ),
        )

    def get_profile_profiles_profile_id_get(
        self, profile_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProfileView:
        """Get profile details.

        Args:
            profile_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Profile not found Validation Error ``error`` is ``ProfileNotFoundError | HttpValidationError |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_profile_profiles_profile_id_get(profile_id, request_options=request_options)
        )

    def list_profiles_profiles_get(
        self,
        *,
        page_size: int | None = 10,
        page_number: int | None = 1,
        query: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProfileListResponse:
        """Get paginated list of profiles.

        Use the ``query`` parameter to search profiles by name or user_id. This is useful when you have many profiles
        and need to find a specific user.

        Example: If you set ``user_id`` to your internal user identifier when creating profiles, you can later search
        for that user by passing their identifier as the ``query`` parameter.

        Args:
            page_size: Value sent with the request.
            page_number: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_profiles_profiles_get(
                page_size=page_size, page_number=page_number, query=query, request_options=request_options
            ),
        )

    def update_profile_profiles_profile_id_patch(
        self,
        profile_id: UUID,
        body: ProfileUpdateRequest | ProfileUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProfileView:
        """Update a browser profile's information.

        Args:
            profile_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Profile not found Validation Error ``error`` is ``ProfileNotFoundError | HttpValidationError |
                RawError``."""
        return unwrap(
            self._with_raw_response.update_profile_profiles_profile_id_patch(
                profile_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ProfilesWithRawResponse:
        return self._with_raw_response


class AsyncProfiles:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProfilesWithRawResponse(client, server, auth)

    async def create_profile_profiles_post(
        self,
        *,
        body: ProfileCreateRequest | ProfileCreateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProfileView:
        """Profiles allow you to preserve the state of the browser between tasks.

        They are most commonly used to allow users to preserve the log-in state in the agent between tasks. You'd
        normally create one profile per user and then use it for all their tasks.

        You can set a ``user_id`` when creating a profile to associate it with a user in your system. This allows you to
        later search for the profile using the GET /profiles endpoint with a query parameter.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Profile limit reached; delete unused profiles to create new ones Request validation failed
                ``error`` is ``InsufficientCreditsError | ValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.create_profile_profiles_post(body=body, request_options=request_options)
        )

    async def delete_browser_profile_profiles_profile_id_delete(
        self, profile_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently delete a browser profile and its configuration.

        Args:
            profile_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_browser_profile_profiles_profile_id_delete(
                profile_id, request_options=request_options
            ),
        )

    async def get_profile_profiles_profile_id_get(
        self, profile_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProfileView:
        """Get profile details.

        Args:
            profile_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Profile not found Validation Error ``error`` is ``ProfileNotFoundError | HttpValidationError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_profile_profiles_profile_id_get(
                profile_id, request_options=request_options
            ),
        )

    async def list_profiles_profiles_get(
        self,
        *,
        page_size: int | None = 10,
        page_number: int | None = 1,
        query: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProfileListResponse:
        """Get paginated list of profiles.

        Use the ``query`` parameter to search profiles by name or user_id. This is useful when you have many profiles
        and need to find a specific user.

        Example: If you set ``user_id`` to your internal user identifier when creating profiles, you can later search
        for that user by passing their identifier as the ``query`` parameter.

        Args:
            page_size: Value sent with the request.
            page_number: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_profiles_profiles_get(
                page_size=page_size, page_number=page_number, query=query, request_options=request_options
            ),
        )

    async def update_profile_profiles_profile_id_patch(
        self,
        profile_id: UUID,
        body: ProfileUpdateRequest | ProfileUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProfileView:
        """Update a browser profile's information.

        Args:
            profile_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Profile not found Validation Error ``error`` is ``ProfileNotFoundError | HttpValidationError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_profile_profiles_profile_id_patch(
                profile_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProfilesWithRawResponse:
        return self._with_raw_response


class ProfilesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_profile_profiles_post(
        self,
        *,
        body: ProfileCreateRequest | ProfileCreateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProfileView, CreateProfileProfilesPostErrorBody]:
        """Profiles allow you to preserve the state of the browser between tasks.

        They are most commonly used to allow users to preserve the log-in state in the agent between tasks. You'd
        normally create one profile per user and then use it for all their tasks.

        You can set a ``user_id`` when creating a profile to associate it with a user in your system. This allows you to
        later search for the profile using the GET /profiles endpoint with a query parameter.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/profiles"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProfileCreateRequest | ProfileCreateRequestDict | None](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[ProfileView],
            error_mapper=create_profile_profiles_post_error_mapper,
            request_options=request_options,
        )

    def delete_browser_profile_profiles_profile_id_delete(
        self, profile_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteBrowserProfileProfilesProfileIdDeleteErrorBody]:
        """Permanently delete a browser profile and its configuration.

        Args:
            profile_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/profiles/{profile_id}"),
            path_params=[param[UUID]("profile_id", profile_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=empty_response,
            error_mapper=delete_browser_profile_profiles_profile_id_delete_error_mapper,
            request_options=request_options,
        )

    def get_profile_profiles_profile_id_get(
        self, profile_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProfileView, GetProfileProfilesProfileIdGetErrorBody]:
        """Get profile details.

        Args:
            profile_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/profiles/{profile_id}"),
            path_params=[param[UUID]("profile_id", profile_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[ProfileView],
            error_mapper=get_profile_profiles_profile_id_get_error_mapper,
            request_options=request_options,
        )

    def list_profiles_profiles_get(
        self,
        *,
        page_size: int | None = 10,
        page_number: int | None = 1,
        query: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProfileListResponse, ListProfilesProfilesGetErrorBody]:
        """Get paginated list of profiles.

        Use the ``query`` parameter to search profiles by name or user_id. This is useful when you have many profiles
        and need to find a specific user.

        Example: If you set ``user_id`` to your internal user identifier when creating profiles, you can later search
        for that user by passing their identifier as the ``query`` parameter.

        Args:
            page_size: Value sent with the request.
            page_number: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/profiles"),
            query_params=[
                param[int | None]("pageSize", page_size),
                param[int | None]("pageNumber", page_number),
                param[str | None]("query", query),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[ProfileListResponse],
            error_mapper=list_profiles_profiles_get_error_mapper,
            request_options=request_options,
        )

    def update_profile_profiles_profile_id_patch(
        self,
        profile_id: UUID,
        body: ProfileUpdateRequest | ProfileUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProfileView, UpdateProfileProfilesProfileIdPatchErrorBody]:
        """Update a browser profile's information.

        Args:
            profile_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/profiles/{profile_id}"),
            path_params=[param[UUID]("profile_id", profile_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProfileUpdateRequest | ProfileUpdateRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[ProfileView],
            error_mapper=update_profile_profiles_profile_id_patch_error_mapper,
            request_options=request_options,
        )


class AsyncProfilesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_profile_profiles_post(
        self,
        *,
        body: ProfileCreateRequest | ProfileCreateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProfileView, CreateProfileProfilesPostErrorBody]:
        """Profiles allow you to preserve the state of the browser between tasks.

        They are most commonly used to allow users to preserve the log-in state in the agent between tasks. You'd
        normally create one profile per user and then use it for all their tasks.

        You can set a ``user_id`` when creating a profile to associate it with a user in your system. This allows you to
        later search for the profile using the GET /profiles endpoint with a query parameter.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/profiles"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProfileCreateRequest | ProfileCreateRequestDict | None](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[ProfileView],
            error_mapper=create_profile_profiles_post_error_mapper,
            request_options=request_options,
        )

    async def delete_browser_profile_profiles_profile_id_delete(
        self, profile_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteBrowserProfileProfilesProfileIdDeleteErrorBody]:
        """Permanently delete a browser profile and its configuration.

        Args:
            profile_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/profiles/{profile_id}"),
            path_params=[param[UUID]("profile_id", profile_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=async_empty_response,
            error_mapper=delete_browser_profile_profiles_profile_id_delete_error_mapper,
            request_options=request_options,
        )

    async def get_profile_profiles_profile_id_get(
        self, profile_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProfileView, GetProfileProfilesProfileIdGetErrorBody]:
        """Get profile details.

        Args:
            profile_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/profiles/{profile_id}"),
            path_params=[param[UUID]("profile_id", profile_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[ProfileView],
            error_mapper=get_profile_profiles_profile_id_get_error_mapper,
            request_options=request_options,
        )

    async def list_profiles_profiles_get(
        self,
        *,
        page_size: int | None = 10,
        page_number: int | None = 1,
        query: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProfileListResponse, ListProfilesProfilesGetErrorBody]:
        """Get paginated list of profiles.

        Use the ``query`` parameter to search profiles by name or user_id. This is useful when you have many profiles
        and need to find a specific user.

        Example: If you set ``user_id`` to your internal user identifier when creating profiles, you can later search
        for that user by passing their identifier as the ``query`` parameter.

        Args:
            page_size: Value sent with the request.
            page_number: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/profiles"),
            query_params=[
                param[int | None]("pageSize", page_size),
                param[int | None]("pageNumber", page_number),
                param[str | None]("query", query),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[ProfileListResponse],
            error_mapper=list_profiles_profiles_get_error_mapper,
            request_options=request_options,
        )

    async def update_profile_profiles_profile_id_patch(
        self,
        profile_id: UUID,
        body: ProfileUpdateRequest | ProfileUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProfileView, UpdateProfileProfilesProfileIdPatchErrorBody]:
        """Update a browser profile's information.

        Args:
            profile_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/profiles/{profile_id}"),
            path_params=[param[UUID]("profile_id", profile_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProfileUpdateRequest | ProfileUpdateRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[ProfileView],
            error_mapper=update_profile_profiles_profile_id_patch_error_mapper,
            request_options=request_options,
        )
