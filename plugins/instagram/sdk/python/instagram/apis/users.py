from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.business_discovery_response import BusinessDiscoveryResponse
from ..models.user import User
from ..server.server import Server


class Users:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = UsersWithRawResponse(client, server)

    def get_business_discovery(
        self, user_id: str, fields: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BusinessDiscoveryResponse:
        """Get data about other Instagram Business or Creator accounts.

        Args:
            user_id: Value sent with the request.
            fields: Must include business_discovery.fields().
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Business discovery data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_business_discovery(
                user_id, fields, access_token, request_options=request_options
            ),
        )

    def get_user(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> User:
        """Get fields and edges on an Instagram Business or Creator account.

        Args:
            user_id: The Instagram user ID.
            access_token: User access token.
            fields: Comma-separated list of fields to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User profile data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_user(user_id, access_token, fields=fields, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> UsersWithRawResponse:
        return self._with_raw_response


class AsyncUsers:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncUsersWithRawResponse(client, server)

    async def get_business_discovery(
        self, user_id: str, fields: str, access_token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BusinessDiscoveryResponse:
        """Get data about other Instagram Business or Creator accounts.

        Args:
            user_id: Value sent with the request.
            fields: Must include business_discovery.fields().
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Business discovery data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_business_discovery(
                user_id, fields, access_token, request_options=request_options
            ),
        )

    async def get_user(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> User:
        """Get fields and edges on an Instagram Business or Creator account.

        Args:
            user_id: The Instagram user ID.
            access_token: User access token.
            fields: Comma-separated list of fields to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User profile data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_user(
                user_id, access_token, fields=fields, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncUsersWithRawResponse:
        return self._with_raw_response


class UsersWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_business_discovery(
        self, user_id: str, fields: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BusinessDiscoveryResponse, RawError]:
        """Get data about other Instagram Business or Creator accounts.

        Args:
            user_id: Value sent with the request.
            fields: Must include business_discovery.fields().
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{user_id}/business_discovery"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str]("fields", fields), param[str]("access_token", access_token)],
            decoder=json_decoder[BusinessDiscoveryResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_user(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[User, RawError]:
        """Get fields and edges on an Instagram Business or Creator account.

        Args:
            user_id: The Instagram user ID.
            access_token: User access token.
            fields: Comma-separated list of fields to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{user_id}"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=json_decoder[User],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncUsersWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_business_discovery(
        self, user_id: str, fields: str, access_token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BusinessDiscoveryResponse, RawError]:
        """Get data about other Instagram Business or Creator accounts.

        Args:
            user_id: Value sent with the request.
            fields: Must include business_discovery.fields().
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{user_id}/business_discovery"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str]("fields", fields), param[str]("access_token", access_token)],
            decoder=async_json_decoder[BusinessDiscoveryResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_user(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[User, RawError]:
        """Get fields and edges on an Instagram Business or Creator account.

        Args:
            user_id: The Instagram user ID.
            access_token: User access token.
            fields: Comma-separated list of fields to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{user_id}"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=async_json_decoder[User],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
