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
from ..errors.create_user_error import CreateUserErrorBody, create_user_error_mapper
from ..errors.delete_user_error import DeleteUserErrorBody, delete_user_error_mapper
from ..errors.get_current_user_error import GetCurrentUserErrorBody, get_current_user_error_mapper
from ..errors.get_user_error import GetUserErrorBody, get_user_error_mapper
from ..errors.list_users_error import ListUsersErrorBody, list_users_error_mapper
from ..errors.update_user_error import UpdateUserErrorBody, update_user_error_mapper
from ..models.create_user_request_dto import CreateUserRequestDto, CreateUserRequestDtoDict
from ..models.pagination_response_dto_user_response_dto import PaginationResponseDtoUserResponseDto
from ..models.update_user_request_dto import UpdateUserRequestDto, UpdateUserRequestDtoDict
from ..models.user_response_dto import UserResponseDto
from ..server.server import Server


class Users:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = UsersWithRawResponse(client, server)

    def create_user(
        self,
        body: CreateUserRequestDto | CreateUserRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UserResponseDto:
        """Create a new user.

        See Budgets and Users in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(self._with_raw_response.create_user(body, api_token=api_token, request_options=request_options))

    def delete_user(
        self, user_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete an existing user.

        Args:
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a user response. A deleted user cannot be restored. The deleted user is not available in the list of
            users.

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_user(user_id, api_token=api_token, request_options=request_options)
        )

    def get_current_user(
        self, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> UserResponseDto:
        """Get details about the current user. This is the user that generated the Spend & Expense API token.

        Args:
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get current user details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(self._with_raw_response.get_current_user(api_token=api_token, request_options=request_options))

    def get_user(
        self, user_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> UserResponseDto:
        """Get details about an existing user.

        Args:
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get user details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(self._with_raw_response.get_user(user_id, api_token=api_token, request_options=request_options))

    def list_users(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoUserResponseDto:
        """Get a list of user objects in the current user's company. By default, you get 20 results on one page of
        results. Set ``max`` in your request to get up to 100 results on one page.

        Args:
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            max_: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of users response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_users(
                next_page=next_page,
                prev_page=prev_page,
                max_=max_,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def update_user(
        self,
        user_id: str,
        body: UpdateUserRequestDto | UpdateUserRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UserResponseDto:
        """Update details about an existing user.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_user(user_id, body, api_token=api_token, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> UsersWithRawResponse:
        return self._with_raw_response


class AsyncUsers:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncUsersWithRawResponse(client, server)

    async def create_user(
        self,
        body: CreateUserRequestDto | CreateUserRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UserResponseDto:
        """Create a new user.

        See Budgets and Users in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_user(body, api_token=api_token, request_options=request_options)
        )

    async def delete_user(
        self, user_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete an existing user.

        Args:
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a user response. A deleted user cannot be restored. The deleted user is not available in the list of
            users.

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_user(user_id, api_token=api_token, request_options=request_options)
        )

    async def get_current_user(
        self, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UserResponseDto:
        """Get details about the current user. This is the user that generated the Spend & Expense API token.

        Args:
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get current user details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_current_user(api_token=api_token, request_options=request_options)
        )

    async def get_user(
        self, user_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UserResponseDto:
        """Get details about an existing user.

        Args:
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get user details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_user(user_id, api_token=api_token, request_options=request_options)
        )

    async def list_users(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoUserResponseDto:
        """Get a list of user objects in the current user's company. By default, you get 20 results on one page of
        results. Set ``max`` in your request to get up to 100 results on one page.

        Args:
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            max_: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of users response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_users(
                next_page=next_page,
                prev_page=prev_page,
                max_=max_,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def update_user(
        self,
        user_id: str,
        body: UpdateUserRequestDto | UpdateUserRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UserResponseDto:
        """Update details about an existing user.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_user(
                user_id, body, api_token=api_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncUsersWithRawResponse:
        return self._with_raw_response


class UsersWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_user(
        self,
        body: CreateUserRequestDto | CreateUserRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UserResponseDto, CreateUserErrorBody]:
        """Create a new user.

        See Budgets and Users in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/users"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateUserRequestDto | CreateUserRequestDtoDict](body),
            decoder=json_decoder[UserResponseDto],
            error_mapper=create_user_error_mapper,
            request_options=request_options,
        )

    def delete_user(
        self, user_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteUserErrorBody]:
        """Delete an existing user.

        Args:
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_user_error_mapper,
            request_options=request_options,
        )

    def get_current_user(
        self, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UserResponseDto, GetCurrentUserErrorBody]:
        """Get details about the current user. This is the user that generated the Spend & Expense API token.

        Args:
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/users/current"),
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[UserResponseDto],
            error_mapper=get_current_user_error_mapper,
            request_options=request_options,
        )

    def get_user(
        self, user_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UserResponseDto, GetUserErrorBody]:
        """Get details about an existing user.

        Args:
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[UserResponseDto],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    def list_users(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoUserResponseDto, ListUsersErrorBody]:
        """Get a list of user objects in the current user's company. By default, you get 20 results on one page of
        results. Set ``max`` in your request to get up to 100 results on one page.

        Args:
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            max_: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/users"),
            query_params=[
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[int | None]("max", max_),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[PaginationResponseDtoUserResponseDto],
            error_mapper=list_users_error_mapper,
            request_options=request_options,
        )

    def update_user(
        self,
        user_id: str,
        body: UpdateUserRequestDto | UpdateUserRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UserResponseDto, UpdateUserErrorBody]:
        """Update details about an existing user.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/spend/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateUserRequestDto | UpdateUserRequestDtoDict](body),
            decoder=json_decoder[UserResponseDto],
            error_mapper=update_user_error_mapper,
            request_options=request_options,
        )


class AsyncUsersWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_user(
        self,
        body: CreateUserRequestDto | CreateUserRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UserResponseDto, CreateUserErrorBody]:
        """Create a new user.

        See Budgets and Users in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/users"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateUserRequestDto | CreateUserRequestDtoDict](body),
            decoder=async_json_decoder[UserResponseDto],
            error_mapper=create_user_error_mapper,
            request_options=request_options,
        )

    async def delete_user(
        self, user_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteUserErrorBody]:
        """Delete an existing user.

        Args:
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_user_error_mapper,
            request_options=request_options,
        )

    async def get_current_user(
        self, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UserResponseDto, GetCurrentUserErrorBody]:
        """Get details about the current user. This is the user that generated the Spend & Expense API token.

        Args:
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/users/current"),
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[UserResponseDto],
            error_mapper=get_current_user_error_mapper,
            request_options=request_options,
        )

    async def get_user(
        self, user_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UserResponseDto, GetUserErrorBody]:
        """Get details about an existing user.

        Args:
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[UserResponseDto],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    async def list_users(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoUserResponseDto, ListUsersErrorBody]:
        """Get a list of user objects in the current user's company. By default, you get 20 results on one page of
        results. Set ``max`` in your request to get up to 100 results on one page.

        Args:
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            max_: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/users"),
            query_params=[
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[int | None]("max", max_),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[PaginationResponseDtoUserResponseDto],
            error_mapper=list_users_error_mapper,
            request_options=request_options,
        )

    async def update_user(
        self,
        user_id: str,
        body: UpdateUserRequestDto | UpdateUserRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UserResponseDto, UpdateUserErrorBody]:
        """Update details about an existing user.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/spend/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateUserRequestDto | UpdateUserRequestDtoDict](body),
            decoder=async_json_decoder[UserResponseDto],
            error_mapper=update_user_error_mapper,
            request_options=request_options,
        )
