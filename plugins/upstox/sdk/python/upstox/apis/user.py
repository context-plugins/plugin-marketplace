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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_kill_switch_error import GetKillSwitchErrorBody, get_kill_switch_error_mapper
from ..errors.get_profile_error import GetProfileErrorBody, get_profile_error_mapper
from ..errors.get_user_fund_margin_error import GetUserFundMarginErrorBody, get_user_fund_margin_error_mapper
from ..errors.get_user_fund_margin_v3_error import GetUserFundMarginV3ErrorBody, get_user_fund_margin_v3_error_mapper
from ..errors.get_user_ips_error import GetUserIpsErrorBody, get_user_ips_error_mapper
from ..errors.update_kill_switch_error import UpdateKillSwitchErrorBody, update_kill_switch_error_mapper
from ..errors.update_user_ip_error import UpdateUserIpErrorBody, update_user_ip_error_mapper
from ..models.enums.segment1 import Segment1OrStr
from ..models.get_profile_response import GetProfileResponse
from ..models.get_user_fund_margin_response import GetUserFundMarginResponse
from ..models.get_user_fund_margin_v3_response import GetUserFundMarginV3Response
from ..models.kill_switch_response import KillSwitchResponse
from ..models.kill_switch_segment_update_request import (
    KillSwitchSegmentUpdateRequest,
    KillSwitchSegmentUpdateRequestDict,
)
from ..models.update_user_ip_request import UpdateUserIpRequest, UpdateUserIpRequestDict
from ..models.user_ip_response import UserIpResponse
from ..server.server import Server


class User:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UserWithRawResponse(client, server, auth)

    def get_kill_switch(self, *, request_options: RequestOptionsOrDict | None = None) -> KillSwitchResponse:
        """Returns the disable/enable status of all trading segments for the user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1181 - The specified segment does not exist. Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.get_kill_switch(request_options=request_options))

    def get_profile(self, *, request_options: RequestOptionsOrDict | None = None) -> GetProfileResponse:
        """This API allows to fetch the complete information of the user who is logged in including the products, order
        types and exchanges enabled for the user

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_profile(request_options=request_options))

    def get_user_fund_margin(
        self, *, segment: Segment1OrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> GetUserFundMarginResponse:
        """Shows the balance of the user in equity and commodity market.

        Args:
            segment: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1019 - segment is invalid Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_user_fund_margin(segment=segment, request_options=request_options))

    def get_user_fund_margin_v3(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetUserFundMarginV3Response:
        """Shows the detailed balance breakdown of the user including cash, pledged margin, available-to-trade, and
        unavailable-to-trade components.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_user_fund_margin_v3(request_options=request_options))

    def get_user_ips(self, *, request_options: RequestOptionsOrDict | None = None) -> UserIpResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_user_ips(request_options=request_options))

    def update_kill_switch(
        self,
        body: list[KillSwitchSegmentUpdateRequest | KillSwitchSegmentUpdateRequestDict],
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> KillSwitchResponse:
        """Enable or disable specific trading segments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1184 - Segment status cannot be changed until all open positions are
                closed. UDAPI1185 - Cannot enable segment - cooling period is still in effect. UDAPI1186 - The specified
                segment does not exist. UDAPI1187 - Failed to update segment status due to an error processing open
                orders. UDAPI1188 - Invalid action. Allowed values are ENABLE and DISABLE. Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.update_kill_switch(body, request_options=request_options))

    def update_user_ip(
        self,
        body: UpdateUserIpRequest | UpdateUserIpRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UserIpResponse:
        """Send a ``PUT`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_user_ip(body, request_options=request_options))

    @property
    def with_raw_response(self) -> UserWithRawResponse:
        return self._with_raw_response


class AsyncUser:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUserWithRawResponse(client, server, auth)

    async def get_kill_switch(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> KillSwitchResponse:
        """Returns the disable/enable status of all trading segments for the user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1181 - The specified segment does not exist. Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.get_kill_switch(request_options=request_options))

    async def get_profile(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> GetProfileResponse:
        """This API allows to fetch the complete information of the user who is logged in including the products, order
        types and exchanges enabled for the user

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_profile(request_options=request_options))

    async def get_user_fund_margin(
        self, *, segment: Segment1OrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetUserFundMarginResponse:
        """Shows the balance of the user in equity and commodity market.

        Args:
            segment: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1019 - segment is invalid Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_fund_margin(segment=segment, request_options=request_options)
        )

    async def get_user_fund_margin_v3(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetUserFundMarginV3Response:
        """Shows the detailed balance breakdown of the user including cash, pledged margin, available-to-trade, and
        unavailable-to-trade components.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_user_fund_margin_v3(request_options=request_options))

    async def get_user_ips(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> UserIpResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_user_ips(request_options=request_options))

    async def update_kill_switch(
        self,
        body: list[KillSwitchSegmentUpdateRequest | KillSwitchSegmentUpdateRequestDict],
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> KillSwitchResponse:
        """Enable or disable specific trading segments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1184 - Segment status cannot be changed until all open positions are
                closed. UDAPI1185 - Cannot enable segment - cooling period is still in effect. UDAPI1186 - The specified
                segment does not exist. UDAPI1187 - Failed to update segment status due to an error processing open
                orders. UDAPI1188 - Invalid action. Allowed values are ENABLE and DISABLE. Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.update_kill_switch(body, request_options=request_options))

    async def update_user_ip(
        self,
        body: UpdateUserIpRequest | UpdateUserIpRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UserIpResponse:
        """Send a ``PUT`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_user_ip(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUserWithRawResponse:
        return self._with_raw_response


class UserWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_kill_switch(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[KillSwitchResponse, GetKillSwitchErrorBody]:
        """Returns the disable/enable status of all trading segments for the user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/kill-switch"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[KillSwitchResponse],
            error_mapper=get_kill_switch_error_mapper,
            request_options=request_options,
        )

    def get_profile(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetProfileResponse, GetProfileErrorBody]:
        """This API allows to fetch the complete information of the user who is logged in including the products, order
        types and exchanges enabled for the user

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/profile"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetProfileResponse],
            error_mapper=get_profile_error_mapper,
            request_options=request_options,
        )

    def get_user_fund_margin(
        self, *, segment: Segment1OrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetUserFundMarginResponse, GetUserFundMarginErrorBody]:
        """Shows the balance of the user in equity and commodity market.

        Args:
            segment: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/get-funds-and-margin"),
            query_params=[param[Segment1OrStr | None]("segment", segment)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetUserFundMarginResponse],
            error_mapper=get_user_fund_margin_error_mapper,
            request_options=request_options,
        )

    def get_user_fund_margin_v3(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetUserFundMarginV3Response, GetUserFundMarginV3ErrorBody]:
        """Shows the detailed balance breakdown of the user including cash, pledged margin, available-to-trade, and
        unavailable-to-trade components.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/user/get-funds-and-margin"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetUserFundMarginV3Response],
            error_mapper=get_user_fund_margin_v3_error_mapper,
            request_options=request_options,
        )

    def get_user_ips(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UserIpResponse, GetUserIpsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/ip"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[UserIpResponse],
            error_mapper=get_user_ips_error_mapper,
            request_options=request_options,
        )

    def update_kill_switch(
        self,
        body: list[KillSwitchSegmentUpdateRequest | KillSwitchSegmentUpdateRequestDict],
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[KillSwitchResponse, UpdateKillSwitchErrorBody]:
        """Enable or disable specific trading segments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/user/kill-switch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[KillSwitchSegmentUpdateRequest | KillSwitchSegmentUpdateRequestDict]](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[KillSwitchResponse],
            error_mapper=update_kill_switch_error_mapper,
            request_options=request_options,
        )

    def update_user_ip(
        self,
        body: UpdateUserIpRequest | UpdateUserIpRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UserIpResponse, UpdateUserIpErrorBody]:
        """Send a ``PUT`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/user/ip"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateUserIpRequest | UpdateUserIpRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[UserIpResponse],
            error_mapper=update_user_ip_error_mapper,
            request_options=request_options,
        )


class AsyncUserWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_kill_switch(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[KillSwitchResponse, GetKillSwitchErrorBody]:
        """Returns the disable/enable status of all trading segments for the user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/kill-switch"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[KillSwitchResponse],
            error_mapper=get_kill_switch_error_mapper,
            request_options=request_options,
        )

    async def get_profile(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetProfileResponse, GetProfileErrorBody]:
        """This API allows to fetch the complete information of the user who is logged in including the products, order
        types and exchanges enabled for the user

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/profile"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetProfileResponse],
            error_mapper=get_profile_error_mapper,
            request_options=request_options,
        )

    async def get_user_fund_margin(
        self, *, segment: Segment1OrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetUserFundMarginResponse, GetUserFundMarginErrorBody]:
        """Shows the balance of the user in equity and commodity market.

        Args:
            segment: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/get-funds-and-margin"),
            query_params=[param[Segment1OrStr | None]("segment", segment)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetUserFundMarginResponse],
            error_mapper=get_user_fund_margin_error_mapper,
            request_options=request_options,
        )

    async def get_user_fund_margin_v3(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetUserFundMarginV3Response, GetUserFundMarginV3ErrorBody]:
        """Shows the detailed balance breakdown of the user including cash, pledged margin, available-to-trade, and
        unavailable-to-trade components.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/user/get-funds-and-margin"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetUserFundMarginV3Response],
            error_mapper=get_user_fund_margin_v3_error_mapper,
            request_options=request_options,
        )

    async def get_user_ips(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UserIpResponse, GetUserIpsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/ip"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[UserIpResponse],
            error_mapper=get_user_ips_error_mapper,
            request_options=request_options,
        )

    async def update_kill_switch(
        self,
        body: list[KillSwitchSegmentUpdateRequest | KillSwitchSegmentUpdateRequestDict],
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[KillSwitchResponse, UpdateKillSwitchErrorBody]:
        """Enable or disable specific trading segments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/user/kill-switch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[KillSwitchSegmentUpdateRequest | KillSwitchSegmentUpdateRequestDict]](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[KillSwitchResponse],
            error_mapper=update_kill_switch_error_mapper,
            request_options=request_options,
        )

    async def update_user_ip(
        self,
        body: UpdateUserIpRequest | UpdateUserIpRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UserIpResponse, UpdateUserIpErrorBody]:
        """Send a ``PUT`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/user/ip"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateUserIpRequest | UpdateUserIpRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[UserIpResponse],
            error_mapper=update_user_ip_error_mapper,
            request_options=request_options,
        )
