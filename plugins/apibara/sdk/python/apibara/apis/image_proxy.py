from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_file_decoder,
    file_decoder,
    param,
    unwrap,
)
from ..errors.proxy_auction_image_error import ProxyAuctionImageErrorBody, proxy_auction_image_error_mapper
from ..server.server import Server


class ImageProxy:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ImageProxyWithRawResponse(client, server, auth)

    def proxy_auction_image(self, url: str, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse:
        """Retrieve a supported auction vehicle image through the Apibara image proxy.

        Args:
            url: Source image URL.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Proxied image response.

        Raises:
            ApiError: Bad request or invalid image URL. Unauthorized. Missing or invalid X-API-Key. Resource not found
                in the currently available dataset. Does not imply a plan upgrade is required. API quota exceeded or
                rate limit reached. Internal server error. The authenticated key/plan is not allowed to perform this
                request. Request parameters failed validation. The service or an upstream dependency is temporarily
                unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.proxy_auction_image(url, request_options=request_options))

    @property
    def with_raw_response(self) -> ImageProxyWithRawResponse:
        return self._with_raw_response


class AsyncImageProxy:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncImageProxyWithRawResponse(client, server, auth)

    async def proxy_auction_image(
        self, url: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Retrieve a supported auction vehicle image through the Apibara image proxy.

        Args:
            url: Source image URL.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Proxied image response.

        Raises:
            ApiError: Bad request or invalid image URL. Unauthorized. Missing or invalid X-API-Key. Resource not found
                in the currently available dataset. Does not imply a plan upgrade is required. API quota exceeded or
                rate limit reached. Internal server error. The authenticated key/plan is not allowed to perform this
                request. Request parameters failed validation. The service or an upstream dependency is temporarily
                unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.proxy_auction_image(url, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncImageProxyWithRawResponse:
        return self._with_raw_response


class ImageProxyWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def proxy_auction_image(
        self, url: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, ProxyAuctionImageErrorBody]:
        """Retrieve a supported auction vehicle image through the Apibara image proxy.

        Args:
            url: Source image URL.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/image-proxy"),
            query_params=[param[str]("url", url)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=proxy_auction_image_error_mapper,
            request_options=request_options,
        )


class AsyncImageProxyWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def proxy_auction_image(
        self, url: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, ProxyAuctionImageErrorBody]:
        """Retrieve a supported auction vehicle image through the Apibara image proxy.

        Args:
            url: Source image URL.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/image-proxy"),
            query_params=[param[str]("url", url)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=proxy_auction_image_error_mapper,
            request_options=request_options,
        )
