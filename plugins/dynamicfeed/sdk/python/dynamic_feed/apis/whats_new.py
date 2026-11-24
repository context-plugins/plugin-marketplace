from __future__ import annotations

from typing import Any

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
from ..errors.whats_new_ep_whats_new_get_error import (
    WhatsNewEpWhatsNewGetErrorBody,
    whats_new_ep_whats_new_get_error_mapper,
)
from ..server.server import Server


class WhatsNew:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = WhatsNewWithRawResponse(client, server)

    def whats_new_ep_whats_new_get(
        self,
        *,
        cutoff: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """What an AI has missed since its training cutoff — a LIVE snapshot of the current world (trending model, live
        prices, top exploited CVE, latest versions, a headline, fastest AI API) with a plain-English summary. The
        'pulse' every connecting model can read. (Requires API key on REST; the same tool is keyless over MCP.)

        Args:
            cutoff: your knowledge cutoff if known, e.g. 2024-10 (optional)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.whats_new_ep_whats_new_get(
                cutoff=cutoff,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> WhatsNewWithRawResponse:
        return self._with_raw_response


class AsyncWhatsNew:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncWhatsNewWithRawResponse(client, server)

    async def whats_new_ep_whats_new_get(
        self,
        *,
        cutoff: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """What an AI has missed since its training cutoff — a LIVE snapshot of the current world (trending model, live
        prices, top exploited CVE, latest versions, a headline, fastest AI API) with a plain-English summary. The
        'pulse' every connecting model can read. (Requires API key on REST; the same tool is keyless over MCP.)

        Args:
            cutoff: your knowledge cutoff if known, e.g. 2024-10 (optional)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.whats_new_ep_whats_new_get(
                cutoff=cutoff,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWhatsNewWithRawResponse:
        return self._with_raw_response


class WhatsNewWithRawResponse(BaseRawResponse[RawClient, Server]):
    def whats_new_ep_whats_new_get(
        self,
        *,
        cutoff: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, WhatsNewEpWhatsNewGetErrorBody]:
        """What an AI has missed since its training cutoff — a LIVE snapshot of the current world (trending model, live
        prices, top exploited CVE, latest versions, a headline, fastest AI API) with a plain-English summary. The
        'pulse' every connecting model can read. (Requires API key on REST; the same tool is keyless over MCP.)

        Args:
            cutoff: your knowledge cutoff if known, e.g. 2024-10 (optional)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/whats-new"),
            query_params=[param[str | None]("cutoff", cutoff)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=whats_new_ep_whats_new_get_error_mapper,
            request_options=request_options,
        )


class AsyncWhatsNewWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def whats_new_ep_whats_new_get(
        self,
        *,
        cutoff: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, WhatsNewEpWhatsNewGetErrorBody]:
        """What an AI has missed since its training cutoff — a LIVE snapshot of the current world (trending model, live
        prices, top exploited CVE, latest versions, a headline, fastest AI API) with a plain-English summary. The
        'pulse' every connecting model can read. (Requires API key on REST; the same tool is keyless over MCP.)

        Args:
            cutoff: your knowledge cutoff if known, e.g. 2024-10 (optional)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/whats-new"),
            query_params=[param[str | None]("cutoff", cutoff)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=whats_new_ep_whats_new_get_error_mapper,
            request_options=request_options,
        )
