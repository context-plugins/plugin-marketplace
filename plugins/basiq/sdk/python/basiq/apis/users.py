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
from ..errors.create_user_error import CreateUserErrorBody, create_user_error_mapper
from ..errors.delete_user_error import DeleteUserErrorBody, delete_user_error_mapper
from ..errors.get_user_error import GetUserErrorBody, get_user_error_mapper
from ..errors.update_user_error import UpdateUserErrorBody, update_user_error_mapper
from ..models.user_get_response import UserGetResponse
from ..models.user_post_response import UserPostResponse
from ..models.users_request import UsersRequest, UsersRequestDict
from ..models.users_request1 import UsersRequest1, UsersRequest1Dict
from ..server.server import Server


class Users:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsersWithRawResponse(client, server, auth)

    def create_user(
        self, body: UsersRequest | UsersRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> UserPostResponse:
        """Creates a new Basiq user object

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns the user object if the creation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``Users400Error1 | Users401Error1 | Users403Error1 | Users404Error1 | Users500Error1 | RawError``."""
        return unwrap(self._with_raw_response.create_user(body, request_options=request_options))

    def delete_user(self, user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Permanently deletes a user along with all of their associated connection details. All data associated with
        this user will deleted. You need only supply the unique user identifier that was returned upon user creation.

        Args:
            user_id: User identification.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. Returns error
                response code indicates that the server is not ready to handle the request. ``error`` is
                ``Users400Error1 | Users401Error1 | Users403Error1 | Users404Error1 | Users500Error1 | Users503Error1 |
                RawError``."""
        return unwrap(self._with_raw_response.delete_user(user_id, request_options=request_options))

    def get_user(self, user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> UserGetResponse:
        """Retrieves the details of an existing user. You need only supply the unique user identifier that was returned
        upon user creation.

        Args:
            user_id: The identifier of the user to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a user if a valid user ID was provided.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``Users400Error1 | Users401Error1 | Users403Error1 | Users404Error1 | Users500Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_user(user_id, request_options=request_options))

    def update_user(
        self,
        user_id: str,
        body: UsersRequest1 | UsersRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UserPostResponse:
        """Updates the specified user by setting the values of the parameters passed. Any parameters not provided will
        be left unchanged.

        Args:
            user_id: The identifier of the user to be retrieved.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns the user object if the update succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``Users400Error1 | Users401Error1 | Users403Error1 | Users404Error1 | Users500Error1 | RawError``."""
        return unwrap(self._with_raw_response.update_user(user_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> UsersWithRawResponse:
        return self._with_raw_response


class AsyncUsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsersWithRawResponse(client, server, auth)

    async def create_user(
        self, body: UsersRequest | UsersRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UserPostResponse:
        """Creates a new Basiq user object

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns the user object if the creation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``Users400Error1 | Users401Error1 | Users403Error1 | Users404Error1 | Users500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.create_user(body, request_options=request_options))

    async def delete_user(self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Permanently deletes a user along with all of their associated connection details. All data associated with
        this user will deleted. You need only supply the unique user identifier that was returned upon user creation.

        Args:
            user_id: User identification.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. Returns error
                response code indicates that the server is not ready to handle the request. ``error`` is
                ``Users400Error1 | Users401Error1 | Users403Error1 | Users404Error1 | Users500Error1 | Users503Error1 |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_user(user_id, request_options=request_options))

    async def get_user(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UserGetResponse:
        """Retrieves the details of an existing user. You need only supply the unique user identifier that was returned
        upon user creation.

        Args:
            user_id: The identifier of the user to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a user if a valid user ID was provided.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``Users400Error1 | Users401Error1 | Users403Error1 | Users404Error1 | Users500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.get_user(user_id, request_options=request_options))

    async def update_user(
        self,
        user_id: str,
        body: UsersRequest1 | UsersRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UserPostResponse:
        """Updates the specified user by setting the values of the parameters passed. Any parameters not provided will
        be left unchanged.

        Args:
            user_id: The identifier of the user to be retrieved.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns the user object if the update succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``Users400Error1 | Users401Error1 | Users403Error1 | Users404Error1 | Users500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.update_user(user_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUsersWithRawResponse:
        return self._with_raw_response


class UsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_user(
        self, body: UsersRequest | UsersRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UserPostResponse, CreateUserErrorBody]:
        """Creates a new Basiq user object

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsersRequest | UsersRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[UserPostResponse],
            error_mapper=create_user_error_mapper,
            request_options=request_options,
        )

    def delete_user(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteUserErrorBody]:
        """Permanently deletes a user along with all of their associated connection details. All data associated with
        this user will deleted. You need only supply the unique user identifier that was returned upon user creation.

        Args:
            user_id: User identification.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=empty_response,
            error_mapper=delete_user_error_mapper,
            request_options=request_options,
        )

    def get_user(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UserGetResponse, GetUserErrorBody]:
        """Retrieves the details of an existing user. You need only supply the unique user identifier that was returned
        upon user creation.

        Args:
            user_id: The identifier of the user to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[UserGetResponse],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    def update_user(
        self,
        user_id: str,
        body: UsersRequest1 | UsersRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UserPostResponse, UpdateUserErrorBody]:
        """Updates the specified user by setting the values of the parameters passed. Any parameters not provided will
        be left unchanged.

        Args:
            user_id: The identifier of the user to be retrieved.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsersRequest1 | UsersRequest1Dict](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[UserPostResponse],
            error_mapper=update_user_error_mapper,
            request_options=request_options,
        )


class AsyncUsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_user(
        self, body: UsersRequest | UsersRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UserPostResponse, CreateUserErrorBody]:
        """Creates a new Basiq user object

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsersRequest | UsersRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[UserPostResponse],
            error_mapper=create_user_error_mapper,
            request_options=request_options,
        )

    async def delete_user(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteUserErrorBody]:
        """Permanently deletes a user along with all of their associated connection details. All data associated with
        this user will deleted. You need only supply the unique user identifier that was returned upon user creation.

        Args:
            user_id: User identification.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=async_empty_response,
            error_mapper=delete_user_error_mapper,
            request_options=request_options,
        )

    async def get_user(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UserGetResponse, GetUserErrorBody]:
        """Retrieves the details of an existing user. You need only supply the unique user identifier that was returned
        upon user creation.

        Args:
            user_id: The identifier of the user to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[UserGetResponse],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    async def update_user(
        self,
        user_id: str,
        body: UsersRequest1 | UsersRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UserPostResponse, UpdateUserErrorBody]:
        """Updates the specified user by setting the values of the parameters passed. Any parameters not provided will
        be left unchanged.

        Args:
            user_id: The identifier of the user to be retrieved.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsersRequest1 | UsersRequest1Dict](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[UserPostResponse],
            error_mapper=update_user_error_mapper,
            request_options=request_options,
        )
