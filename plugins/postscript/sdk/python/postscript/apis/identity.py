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
from ..errors.verify_identity_error import VerifyIdentityErrorBody, verify_identity_error_mapper
from ..models.api_v2_me_response import ApiV2MeResponse
from ..server.server import Server


class Identity:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IdentityWithRawResponse(client, server, auth)

    def verify_identity(
        self, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV2MeResponse:
        """Send a ``GET`` request.

        Args:
            x_postscript_shop_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``ApiV2Me400Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.verify_identity(
                x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> IdentityWithRawResponse:
        return self._with_raw_response


class AsyncIdentity:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIdentityWithRawResponse(client, server, auth)

    async def verify_identity(
        self, *, x_postscript_shop_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV2MeResponse:
        """Send a ``GET`` request.

        Args:
            x_postscript_shop_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``ApiV2Me400Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.verify_identity(
                x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncIdentityWithRawResponse:
        return self._with_raw_response


class IdentityWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def verify_identity(
        self, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2MeResponse, VerifyIdentityErrorBody]:
        """Send a ``GET`` request.

        Args:
            x_postscript_shop_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/me"),
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[ApiV2MeResponse],
            error_mapper=verify_identity_error_mapper,
            request_options=request_options,
        )


class AsyncIdentityWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def verify_identity(
        self, *, x_postscript_shop_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2MeResponse, VerifyIdentityErrorBody]:
        """Send a ``GET`` request.

        Args:
            x_postscript_shop_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/me"),
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[ApiV2MeResponse],
            error_mapper=verify_identity_error_mapper,
            request_options=request_options,
        )
