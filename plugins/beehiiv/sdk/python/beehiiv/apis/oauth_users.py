from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.identify_error import IdentifyErrorBody, identify_error_mapper
from ..models.user_identify_response import UserIdentifyResponse
from ..server.server import Server


class OauthUsers:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = OauthUsersWithRawResponse(client, server)

    def identify(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> UserIdentifyResponse:
        """Retrieve information about the user who authorized the OAuth access token.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Forbidden
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.identify(authorization, request_options=request_options))

    @property
    def with_raw_response(self) -> OauthUsersWithRawResponse:
        return self._with_raw_response


class AsyncOauthUsers:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncOauthUsersWithRawResponse(client, server)

    async def identify(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UserIdentifyResponse:
        """Retrieve information about the user who authorized the OAuth access token.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Forbidden
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.identify(authorization, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOauthUsersWithRawResponse:
        return self._with_raw_response


class OauthUsersWithRawResponse(BaseRawResponse[RawClient, Server]):
    def identify(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UserIdentifyResponse, IdentifyErrorBody]:
        """Retrieve information about the user who authorized the OAuth access token.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/identify"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[UserIdentifyResponse],
            error_mapper=identify_error_mapper,
            request_options=request_options,
        )


class AsyncOauthUsersWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def identify(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UserIdentifyResponse, IdentifyErrorBody]:
        """Retrieve information about the user who authorized the OAuth access token.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/identify"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[UserIdentifyResponse],
            error_mapper=identify_error_mapper,
            request_options=request_options,
        )
