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
    unwrap,
)
from ..errors.get_current_member_info_error import GetCurrentMemberInfoErrorBody, get_current_member_info_error_mapper
from ..models.member_info import MemberInfo
from ..server.server import Server


class MemberApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MemberApiWithRawResponse(client, server, auth)

    def get_current_member_info(self, *, request_options: RequestOptionsOrDict | None = None) -> MemberInfo:
        """Returns information about the authenticated member.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_current_member_info(request_options=request_options))

    @property
    def with_raw_response(self) -> MemberApiWithRawResponse:
        return self._with_raw_response


class AsyncMemberApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMemberApiWithRawResponse(client, server, auth)

    async def get_current_member_info(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> MemberInfo:
        """Returns information about the authenticated member.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_current_member_info(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMemberApiWithRawResponse:
        return self._with_raw_response


class MemberApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_current_member_info(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MemberInfo, GetCurrentMemberInfoErrorBody]:
        """Returns information about the authenticated member.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/member"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[MemberInfo],
            error_mapper=get_current_member_info_error_mapper,
            request_options=request_options,
        )


class AsyncMemberApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_current_member_info(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MemberInfo, GetCurrentMemberInfoErrorBody]:
        """Returns information about the authenticated member.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/member"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[MemberInfo],
            error_mapper=get_current_member_info_error_mapper,
            request_options=request_options,
        )
