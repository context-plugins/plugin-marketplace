from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_user_identities_error import GetUserIdentitiesErrorBody, get_user_identities_error_mapper
from ..errors.get_user_identity_error import GetUserIdentityErrorBody, get_user_identity_error_mapper
from ..models.identities_get_response_resource import IdentitiesGetResponseResource
from ..models.users_identities_response import UsersIdentitiesResponse
from ..server.server import Server


class Identities:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IdentitiesWithRawResponse(client, server, auth)

    def get_user_identities(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> IdentitiesGetResponseResource:
        """Returns a list with a data property that contains an array of user identities. Each entry in the array is a
        separate object. If no data is returned, the resulting array will be empty.

        Args:
            user_id: User identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns list of identities.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error response code indicates that the server encountered
                an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``UsersIdentities400Error1 | UsersIdentities403Error1 | UsersIdentities500Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_user_identities(user_id, request_options=request_options))

    def get_user_identity(
        self, user_id: str, identity_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> UsersIdentitiesResponse:
        """Returns a specific identity object.

        Args:
            user_id: User identifier.
            identity_id: Identity identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns identity.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``UsersIdentities400Error1 |
                UsersIdentities403Error1 | UsersIdentities404Error1 | UsersIdentities500Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_user_identity(user_id, identity_id, request_options=request_options))

    @property
    def with_raw_response(self) -> IdentitiesWithRawResponse:
        return self._with_raw_response


class AsyncIdentities:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIdentitiesWithRawResponse(client, server, auth)

    async def get_user_identities(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IdentitiesGetResponseResource:
        """Returns a list with a data property that contains an array of user identities. Each entry in the array is a
        separate object. If no data is returned, the resulting array will be empty.

        Args:
            user_id: User identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns list of identities.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error response code indicates that the server encountered
                an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``UsersIdentities400Error1 | UsersIdentities403Error1 | UsersIdentities500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.get_user_identities(user_id, request_options=request_options))

    async def get_user_identity(
        self, user_id: str, identity_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UsersIdentitiesResponse:
        """Returns a specific identity object.

        Args:
            user_id: User identifier.
            identity_id: Identity identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns identity.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``UsersIdentities400Error1 |
                UsersIdentities403Error1 | UsersIdentities404Error1 | UsersIdentities500Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_identity(user_id, identity_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncIdentitiesWithRawResponse:
        return self._with_raw_response


class IdentitiesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_user_identities(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IdentitiesGetResponseResource, GetUserIdentitiesErrorBody]:
        """Returns a list with a data property that contains an array of user identities. Each entry in the array is a
        separate object. If no data is returned, the resulting array will be empty.

        Args:
            user_id: User identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/identities"),
            path_params=[param[str]("userId", user_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[IdentitiesGetResponseResource],
            error_mapper=get_user_identities_error_mapper,
            request_options=request_options,
        )

    def get_user_identity(
        self, user_id: str, identity_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UsersIdentitiesResponse, GetUserIdentityErrorBody]:
        """Returns a specific identity object.

        Args:
            user_id: User identifier.
            identity_id: Identity identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/identities/{identityId}"),
            path_params=[param[str]("userId", user_id), param[str]("identityId", identity_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[UsersIdentitiesResponse],
            error_mapper=get_user_identity_error_mapper,
            request_options=request_options,
        )


class AsyncIdentitiesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_user_identities(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IdentitiesGetResponseResource, GetUserIdentitiesErrorBody]:
        """Returns a list with a data property that contains an array of user identities. Each entry in the array is a
        separate object. If no data is returned, the resulting array will be empty.

        Args:
            user_id: User identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/identities"),
            path_params=[param[str]("userId", user_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[IdentitiesGetResponseResource],
            error_mapper=get_user_identities_error_mapper,
            request_options=request_options,
        )

    async def get_user_identity(
        self, user_id: str, identity_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UsersIdentitiesResponse, GetUserIdentityErrorBody]:
        """Returns a specific identity object.

        Args:
            user_id: User identifier.
            identity_id: Identity identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/identities/{identityId}"),
            path_params=[param[str]("userId", user_id), param[str]("identityId", identity_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[UsersIdentitiesResponse],
            error_mapper=get_user_identity_error_mapper,
            request_options=request_options,
        )
