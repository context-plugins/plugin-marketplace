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
from ..errors.cite_ep_cite_get_error import CiteEpCiteGetErrorBody, cite_ep_cite_get_error_mapper
from ..server.server import Server


class Cite:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CiteWithRawResponse(client, server)

    def cite_ep_cite_get(
        self,
        *,
        subject: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """A fresh, citeable source + timestamp for a current datapoint. (Key on REST; keyless on MCP.)

        Args:
            subject: any tool/source/topic (earthquakes, USGS, Open-Meteo, ...) or a software product — returns a
                citeable source + verify URL + timestamp
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
            self._with_raw_response.cite_ep_cite_get(
                subject=subject,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CiteWithRawResponse:
        return self._with_raw_response


class AsyncCite:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCiteWithRawResponse(client, server)

    async def cite_ep_cite_get(
        self,
        *,
        subject: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """A fresh, citeable source + timestamp for a current datapoint. (Key on REST; keyless on MCP.)

        Args:
            subject: any tool/source/topic (earthquakes, USGS, Open-Meteo, ...) or a software product — returns a
                citeable source + verify URL + timestamp
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
            await self._with_raw_response.cite_ep_cite_get(
                subject=subject,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCiteWithRawResponse:
        return self._with_raw_response


class CiteWithRawResponse(BaseRawResponse[RawClient, Server]):
    def cite_ep_cite_get(
        self,
        *,
        subject: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CiteEpCiteGetErrorBody]:
        """A fresh, citeable source + timestamp for a current datapoint. (Key on REST; keyless on MCP.)

        Args:
            subject: any tool/source/topic (earthquakes, USGS, Open-Meteo, ...) or a software product — returns a
                citeable source + verify URL + timestamp
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cite"),
            query_params=[param[str | None]("subject", subject)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=cite_ep_cite_get_error_mapper,
            request_options=request_options,
        )


class AsyncCiteWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def cite_ep_cite_get(
        self,
        *,
        subject: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CiteEpCiteGetErrorBody]:
        """A fresh, citeable source + timestamp for a current datapoint. (Key on REST; keyless on MCP.)

        Args:
            subject: any tool/source/topic (earthquakes, USGS, Open-Meteo, ...) or a software product — returns a
                citeable source + verify URL + timestamp
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cite"),
            query_params=[param[str | None]("subject", subject)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=cite_ep_cite_get_error_mapper,
            request_options=request_options,
        )
