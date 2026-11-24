from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.gateway_request_body import GatewayRequestBody, GatewayRequestBodyDict
from ..server.server import Server


class Gateway:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GatewayWithRawResponse(client, server, auth)

    def get_root(
        self,
        url: str,
        *,
        token: str | None = None,
        async_: bool | None = None,
        beta: bool | None = None,
        detected_json: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            url: Target URL to forward to (URL encoded)
            token: atk_example_not_a_real_token
            async_: Queue the scrape and return a task ID immediately
            beta: Use the sync scraper upstream via the beta flag (async, callbacks and stream are not supported yet)
            detected_json: Extract JSON from <script> tags and metadata from <meta> tags in HTML response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_root(
                url, token=token, async_=async_, beta=beta, detected_json=detected_json, request_options=request_options
            ),
        )

    def post_root(
        self,
        body: GatewayRequestBody | GatewayRequestBodyDict,
        *,
        async_: bool | None = None,
        beta: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``POST`` request.

        Args:
            body: Request body with domain, action, and task details
            async_: Queue the scrape and return a task ID immediately
            beta: Use the sync scraper upstream via the beta flag; alternatively set beta: true in the JSON body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_root(body, async_=async_, beta=beta, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> GatewayWithRawResponse:
        return self._with_raw_response


class AsyncGateway:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGatewayWithRawResponse(client, server, auth)

    async def get_root(
        self,
        url: str,
        *,
        token: str | None = None,
        async_: bool | None = None,
        beta: bool | None = None,
        detected_json: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            url: Target URL to forward to (URL encoded)
            token: atk_example_not_a_real_token
            async_: Queue the scrape and return a task ID immediately
            beta: Use the sync scraper upstream via the beta flag (async, callbacks and stream are not supported yet)
            detected_json: Extract JSON from <script> tags and metadata from <meta> tags in HTML response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_root(
                url, token=token, async_=async_, beta=beta, detected_json=detected_json, request_options=request_options
            ),
        )

    async def post_root(
        self,
        body: GatewayRequestBody | GatewayRequestBodyDict,
        *,
        async_: bool | None = None,
        beta: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``POST`` request.

        Args:
            body: Request body with domain, action, and task details
            async_: Queue the scrape and return a task ID immediately
            beta: Use the sync scraper upstream via the beta flag; alternatively set beta: true in the JSON body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_root(body, async_=async_, beta=beta, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncGatewayWithRawResponse:
        return self._with_raw_response


class GatewayWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_root(
        self,
        url: str,
        *,
        token: str | None = None,
        async_: bool | None = None,
        beta: bool | None = None,
        detected_json: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            url: Target URL to forward to (URL encoded)
            token: atk_example_not_a_real_token
            async_: Queue the scrape and return a task ID immediately
            beta: Use the sync scraper upstream via the beta flag (async, callbacks and stream are not supported yet)
            detected_json: Extract JSON from <script> tags and metadata from <meta> tags in HTML response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/"),
            query_params=[
                param[str]("url", url),
                param[str | None]("token", token),
                param[bool | None]("async", async_),
                param[bool | None]("beta", beta),
                param[bool | None]("detectedJson", detected_json),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_root(
        self,
        body: GatewayRequestBody | GatewayRequestBodyDict,
        *,
        async_: bool | None = None,
        beta: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RawError]:
        """Send a ``POST`` request.

        Args:
            body: Request body with domain, action, and task details
            async_: Queue the scrape and return a task ID immediately
            beta: Use the sync scraper upstream via the beta flag; alternatively set beta: true in the JSON body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_scraper_service_gateway_auth_api("/"),
            query_params=[param[bool | None]("async", async_), param[bool | None]("beta", beta)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GatewayRequestBody | GatewayRequestBodyDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncGatewayWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_root(
        self,
        url: str,
        *,
        token: str | None = None,
        async_: bool | None = None,
        beta: bool | None = None,
        detected_json: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            url: Target URL to forward to (URL encoded)
            token: atk_example_not_a_real_token
            async_: Queue the scrape and return a task ID immediately
            beta: Use the sync scraper upstream via the beta flag (async, callbacks and stream are not supported yet)
            detected_json: Extract JSON from <script> tags and metadata from <meta> tags in HTML response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/"),
            query_params=[
                param[str]("url", url),
                param[str | None]("token", token),
                param[bool | None]("async", async_),
                param[bool | None]("beta", beta),
                param[bool | None]("detectedJson", detected_json),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_root(
        self,
        body: GatewayRequestBody | GatewayRequestBodyDict,
        *,
        async_: bool | None = None,
        beta: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RawError]:
        """Send a ``POST`` request.

        Args:
            body: Request body with domain, action, and task details
            async_: Queue the scrape and return a task ID immediately
            beta: Use the sync scraper upstream via the beta flag; alternatively set beta: true in the JSON body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_scraper_service_gateway_auth_api("/"),
            query_params=[param[bool | None]("async", async_), param[bool | None]("beta", beta)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GatewayRequestBody | GatewayRequestBodyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
