from __future__ import annotations

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
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_market_data_feed_authorize_error import (
    GetMarketDataFeedAuthorizeErrorBody,
    get_market_data_feed_authorize_error_mapper,
)
from ..errors.get_market_data_feed_error import GetMarketDataFeedErrorBody, get_market_data_feed_error_mapper
from ..errors.get_portfolio_stream_feed_authorize_error import (
    GetPortfolioStreamFeedAuthorizeErrorBody,
    get_portfolio_stream_feed_authorize_error_mapper,
)
from ..errors.get_portfolio_stream_feed_error import (
    GetPortfolioStreamFeedErrorBody,
    get_portfolio_stream_feed_error_mapper,
)
from ..models.websocket_auth_redirect_response import WebsocketAuthRedirectResponse
from ..server.server import Server


class Websocket:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebsocketWithRawResponse(client, server, auth)

    def get_market_data_feed(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """This API redirects the client to the respective socket endpoint to receive Market updates.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_market_data_feed(request_options=request_options))

    def get_market_data_feed_authorize(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebsocketAuthRedirectResponse:
        """This API provides the functionality to retrieve the socket endpoint URI for Market updates.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_market_data_feed_authorize(request_options=request_options))

    def get_portfolio_stream_feed(
        self, *, update_types: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """This API redirects the client to the respective socket endpoint to receive Portfolio updates.

        Args:
            update_types: Identifiers separated by commas denote the types of updates to receive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_portfolio_stream_feed(
                update_types=update_types, request_options=request_options
            ),
        )

    def get_portfolio_stream_feed_authorize(
        self, *, update_types: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> WebsocketAuthRedirectResponse:
        """This API provides the functionality to retrieve the socket endpoint URI for Portfolio updates.

        Args:
            update_types: Identifiers separated by commas denote the types of updates to receive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_portfolio_stream_feed_authorize(
                update_types=update_types, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> WebsocketWithRawResponse:
        return self._with_raw_response


class AsyncWebsocket:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebsocketWithRawResponse(client, server, auth)

    async def get_market_data_feed(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """This API redirects the client to the respective socket endpoint to receive Market updates.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_market_data_feed(request_options=request_options))

    async def get_market_data_feed_authorize(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebsocketAuthRedirectResponse:
        """This API provides the functionality to retrieve the socket endpoint URI for Market updates.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_market_data_feed_authorize(request_options=request_options))

    async def get_portfolio_stream_feed(
        self, *, update_types: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This API redirects the client to the respective socket endpoint to receive Portfolio updates.

        Args:
            update_types: Identifiers separated by commas denote the types of updates to receive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_portfolio_stream_feed(
                update_types=update_types, request_options=request_options
            ),
        )

    async def get_portfolio_stream_feed_authorize(
        self, *, update_types: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebsocketAuthRedirectResponse:
        """This API provides the functionality to retrieve the socket endpoint URI for Portfolio updates.

        Args:
            update_types: Identifiers separated by commas denote the types of updates to receive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_portfolio_stream_feed_authorize(
                update_types=update_types, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWebsocketWithRawResponse:
        return self._with_raw_response


class WebsocketWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_market_data_feed(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetMarketDataFeedErrorBody]:
        """This API redirects the client to the respective socket endpoint to receive Market updates.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/feed/market-data-feed"),
            auth_scheme=self._auth.oauth2,
            decoder=empty_response,
            error_mapper=get_market_data_feed_error_mapper,
            request_options=request_options,
        )

    def get_market_data_feed_authorize(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebsocketAuthRedirectResponse, GetMarketDataFeedAuthorizeErrorBody]:
        """This API provides the functionality to retrieve the socket endpoint URI for Market updates.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/feed/market-data-feed/authorize"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[WebsocketAuthRedirectResponse],
            error_mapper=get_market_data_feed_authorize_error_mapper,
            request_options=request_options,
        )

    def get_portfolio_stream_feed(
        self, *, update_types: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetPortfolioStreamFeedErrorBody]:
        """This API redirects the client to the respective socket endpoint to receive Portfolio updates.

        Args:
            update_types: Identifiers separated by commas denote the types of updates to receive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/feed/portfolio-stream-feed"),
            query_params=[param[str | None]("update_types", update_types)],
            auth_scheme=self._auth.oauth2,
            decoder=empty_response,
            error_mapper=get_portfolio_stream_feed_error_mapper,
            request_options=request_options,
        )

    def get_portfolio_stream_feed_authorize(
        self, *, update_types: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebsocketAuthRedirectResponse, GetPortfolioStreamFeedAuthorizeErrorBody]:
        """This API provides the functionality to retrieve the socket endpoint URI for Portfolio updates.

        Args:
            update_types: Identifiers separated by commas denote the types of updates to receive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/feed/portfolio-stream-feed/authorize"),
            query_params=[param[str | None]("update_types", update_types)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[WebsocketAuthRedirectResponse],
            error_mapper=get_portfolio_stream_feed_authorize_error_mapper,
            request_options=request_options,
        )


class AsyncWebsocketWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_market_data_feed(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetMarketDataFeedErrorBody]:
        """This API redirects the client to the respective socket endpoint to receive Market updates.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/feed/market-data-feed"),
            auth_scheme=self._auth.oauth2,
            decoder=async_empty_response,
            error_mapper=get_market_data_feed_error_mapper,
            request_options=request_options,
        )

    async def get_market_data_feed_authorize(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebsocketAuthRedirectResponse, GetMarketDataFeedAuthorizeErrorBody]:
        """This API provides the functionality to retrieve the socket endpoint URI for Market updates.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/feed/market-data-feed/authorize"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[WebsocketAuthRedirectResponse],
            error_mapper=get_market_data_feed_authorize_error_mapper,
            request_options=request_options,
        )

    async def get_portfolio_stream_feed(
        self, *, update_types: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetPortfolioStreamFeedErrorBody]:
        """This API redirects the client to the respective socket endpoint to receive Portfolio updates.

        Args:
            update_types: Identifiers separated by commas denote the types of updates to receive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/feed/portfolio-stream-feed"),
            query_params=[param[str | None]("update_types", update_types)],
            auth_scheme=self._auth.oauth2,
            decoder=async_empty_response,
            error_mapper=get_portfolio_stream_feed_error_mapper,
            request_options=request_options,
        )

    async def get_portfolio_stream_feed_authorize(
        self, *, update_types: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebsocketAuthRedirectResponse, GetPortfolioStreamFeedAuthorizeErrorBody]:
        """This API provides the functionality to retrieve the socket endpoint URI for Portfolio updates.

        Args:
            update_types: Identifiers separated by commas denote the types of updates to receive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/feed/portfolio-stream-feed/authorize"),
            query_params=[param[str | None]("update_types", update_types)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[WebsocketAuthRedirectResponse],
            error_mapper=get_portfolio_stream_feed_authorize_error_mapper,
            request_options=request_options,
        )
