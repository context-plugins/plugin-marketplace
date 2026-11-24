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
from ..errors.delete_auth_link_error import DeleteAuthLinkErrorBody, delete_auth_link_error_mapper
from ..errors.get_auth_link_error import GetAuthLinkErrorBody, get_auth_link_error_mapper
from ..errors.post_auth_link_error import PostAuthLinkErrorBody, post_auth_link_error_mapper
from ..models.users_auth_link_request import UsersAuthLinkRequest, UsersAuthLinkRequestDict
from ..models.users_auth_link_response import UsersAuthLinkResponse
from ..models.users_auth_link_response1 import UsersAuthLinkResponse1
from ..server.server import Server


class AuthLinks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AuthLinksWithRawResponse(client, server, auth)

    def delete_auth_link(self, user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Note that this action cannot be undone.

        The auth_link is a URL that directs a User to Basiq's hosted consent workflow to link banks and securely share
        data. When the user selects 'I have disclosed all my accounts' the auth_link is automatically deleted.

        Returns an empty body if the delete succeeded. Otherwise, this call returns an error in the event of a failure.

        Args:
            user_id: The identifier of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns an empty body if the delete succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. Returns error
                response code indicates that the server is not ready to handle the request. ``error`` is
                ``UsersAuthLink400Error1 | UsersAuthLink401Error1 | UsersAuthLink404Error1 | UsersAuthLink500Error1 |
                UsersAuthLink503Error1 | RawError``."""
        return unwrap(self._with_raw_response.delete_auth_link(user_id, request_options=request_options))

    def get_auth_link(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> UsersAuthLinkResponse1:
        """Returns the latest/last auth_link generated for the specified user. Returns an error otherwise.

        Args:
            user_id: The identifier of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns details of a connection.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error indicating that access to the target
                resource is no longer available at the origin server and that this condition is likely to be permanent.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. Returns error response code indicates that the server is not ready to
                handle the request. ``error`` is ``UsersAuthLink400Error1 | UsersAuthLink401Error1 |
                UsersAuthLink403Error1 | UsersAuthLink404Error1 | UsersAuthLink410Error1 | UsersAuthLink500Error1 |
                UsersAuthLink503Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_auth_link(user_id, request_options=request_options))

    def post_auth_link(
        self,
        user_id: str,
        *,
        body: UsersAuthLinkRequest | UsersAuthLinkRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UsersAuthLinkResponse:
        """Create a new auth_link object by making a POST request to the auth_link endpoint. The new auth_link will
        effectively delete previous auth_link for that user, rendering the previous URL(s) invalid.

        The 'mobile' attribute is used for 2FA SMS verification and is conditionally required. If it is not specified,
        we will look up the mobile on the user object; if that is not specified either, you will get an error. If both
        are specified, the mobile number on the auth_link will take precedence.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a created auth_link resource, if the operation succeeded

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``UsersAuthLink400Error1 | UsersAuthLink401Error1 | UsersAuthLink403Error1 | UsersAuthLink404Error1 |
                UsersAuthLink500Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_auth_link(user_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AuthLinksWithRawResponse:
        return self._with_raw_response


class AsyncAuthLinks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAuthLinksWithRawResponse(client, server, auth)

    async def delete_auth_link(self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Note that this action cannot be undone.

        The auth_link is a URL that directs a User to Basiq's hosted consent workflow to link banks and securely share
        data. When the user selects 'I have disclosed all my accounts' the auth_link is automatically deleted.

        Returns an empty body if the delete succeeded. Otherwise, this call returns an error in the event of a failure.

        Args:
            user_id: The identifier of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns an empty body if the delete succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. Returns error
                response code indicates that the server is not ready to handle the request. ``error`` is
                ``UsersAuthLink400Error1 | UsersAuthLink401Error1 | UsersAuthLink404Error1 | UsersAuthLink500Error1 |
                UsersAuthLink503Error1 | RawError``."""
        return unwrap(await self._with_raw_response.delete_auth_link(user_id, request_options=request_options))

    async def get_auth_link(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UsersAuthLinkResponse1:
        """Returns the latest/last auth_link generated for the specified user. Returns an error otherwise.

        Args:
            user_id: The identifier of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns details of a connection.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error indicating that access to the target
                resource is no longer available at the origin server and that this condition is likely to be permanent.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. Returns error response code indicates that the server is not ready to
                handle the request. ``error`` is ``UsersAuthLink400Error1 | UsersAuthLink401Error1 |
                UsersAuthLink403Error1 | UsersAuthLink404Error1 | UsersAuthLink410Error1 | UsersAuthLink500Error1 |
                UsersAuthLink503Error1 | RawError``."""
        return unwrap(await self._with_raw_response.get_auth_link(user_id, request_options=request_options))

    async def post_auth_link(
        self,
        user_id: str,
        *,
        body: UsersAuthLinkRequest | UsersAuthLinkRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UsersAuthLinkResponse:
        """Create a new auth_link object by making a POST request to the auth_link endpoint. The new auth_link will
        effectively delete previous auth_link for that user, rendering the previous URL(s) invalid.

        The 'mobile' attribute is used for 2FA SMS verification and is conditionally required. If it is not specified,
        we will look up the mobile on the user object; if that is not specified either, you will get an error. If both
        are specified, the mobile number on the auth_link will take precedence.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a created auth_link resource, if the operation succeeded

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``UsersAuthLink400Error1 | UsersAuthLink401Error1 | UsersAuthLink403Error1 | UsersAuthLink404Error1 |
                UsersAuthLink500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_auth_link(user_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAuthLinksWithRawResponse:
        return self._with_raw_response


class AuthLinksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_auth_link(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAuthLinkErrorBody]:
        """Note that this action cannot be undone.

        The auth_link is a URL that directs a User to Basiq's hosted consent workflow to link banks and securely share
        data. When the user selects 'I have disclosed all my accounts' the auth_link is automatically deleted.

        Returns an empty body if the delete succeeded. Otherwise, this call returns an error in the event of a failure.

        Args:
            user_id: The identifier of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{userId}/auth_link"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=empty_response,
            error_mapper=delete_auth_link_error_mapper,
            request_options=request_options,
        )

    def get_auth_link(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UsersAuthLinkResponse1, GetAuthLinkErrorBody]:
        """Returns the latest/last auth_link generated for the specified user. Returns an error otherwise.

        Args:
            user_id: The identifier of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/auth_link"),
            path_params=[param[str]("userId", user_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[UsersAuthLinkResponse1],
            error_mapper=get_auth_link_error_mapper,
            request_options=request_options,
        )

    def post_auth_link(
        self,
        user_id: str,
        *,
        body: UsersAuthLinkRequest | UsersAuthLinkRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UsersAuthLinkResponse, PostAuthLinkErrorBody]:
        """Create a new auth_link object by making a POST request to the auth_link endpoint. The new auth_link will
        effectively delete previous auth_link for that user, rendering the previous URL(s) invalid.

        The 'mobile' attribute is used for 2FA SMS verification and is conditionally required. If it is not specified,
        we will look up the mobile on the user object; if that is not specified either, you will get an error. If both
        are specified, the mobile number on the auth_link will take precedence.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/auth_link"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsersAuthLinkRequest | UsersAuthLinkRequestDict | None](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[UsersAuthLinkResponse],
            error_mapper=post_auth_link_error_mapper,
            request_options=request_options,
        )


class AsyncAuthLinksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_auth_link(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAuthLinkErrorBody]:
        """Note that this action cannot be undone.

        The auth_link is a URL that directs a User to Basiq's hosted consent workflow to link banks and securely share
        data. When the user selects 'I have disclosed all my accounts' the auth_link is automatically deleted.

        Returns an empty body if the delete succeeded. Otherwise, this call returns an error in the event of a failure.

        Args:
            user_id: The identifier of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{userId}/auth_link"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=async_empty_response,
            error_mapper=delete_auth_link_error_mapper,
            request_options=request_options,
        )

    async def get_auth_link(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UsersAuthLinkResponse1, GetAuthLinkErrorBody]:
        """Returns the latest/last auth_link generated for the specified user. Returns an error otherwise.

        Args:
            user_id: The identifier of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/auth_link"),
            path_params=[param[str]("userId", user_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[UsersAuthLinkResponse1],
            error_mapper=get_auth_link_error_mapper,
            request_options=request_options,
        )

    async def post_auth_link(
        self,
        user_id: str,
        *,
        body: UsersAuthLinkRequest | UsersAuthLinkRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UsersAuthLinkResponse, PostAuthLinkErrorBody]:
        """Create a new auth_link object by making a POST request to the auth_link endpoint. The new auth_link will
        effectively delete previous auth_link for that user, rendering the previous URL(s) invalid.

        The 'mobile' attribute is used for 2FA SMS verification and is conditionally required. If it is not specified,
        we will look up the mobile on the user object; if that is not specified either, you will get an error. If both
        are specified, the mobile number on the auth_link will take precedence.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/auth_link"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsersAuthLinkRequest | UsersAuthLinkRequestDict | None](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[UsersAuthLinkResponse],
            error_mapper=post_auth_link_error_mapper,
            request_options=request_options,
        )
