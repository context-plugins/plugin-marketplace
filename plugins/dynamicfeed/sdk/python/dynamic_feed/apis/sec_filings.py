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
from ..errors.sec_filings_sec_filings_get_error import (
    SecFilingsSecFilingsGetErrorBody,
    sec_filings_sec_filings_get_error_mapper,
)
from ..server.server import Server


class SecFilings:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SecFilingsWithRawResponse(client, server)

    def sec_filings_sec_filings_get(
        self,
        *,
        ticker: str | None = "",
        form: str | None = "",
        limit: int | None = 15,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Recent SEC EDGAR filings for a US public company (8-K / 10-K / S-1 / Form 4). US public domain. (Requires API
        key.)

        Args:
            ticker: US stock ticker, e.g. AAPL, NVDA, TSLA
            form: filter by form: 8-K, 10-K, 10-Q, S-1, 4 ...
            limit: Value sent with the request.
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
            self._with_raw_response.sec_filings_sec_filings_get(
                ticker=ticker,
                form=form,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SecFilingsWithRawResponse:
        return self._with_raw_response


class AsyncSecFilings:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSecFilingsWithRawResponse(client, server)

    async def sec_filings_sec_filings_get(
        self,
        *,
        ticker: str | None = "",
        form: str | None = "",
        limit: int | None = 15,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Recent SEC EDGAR filings for a US public company (8-K / 10-K / S-1 / Form 4). US public domain. (Requires API
        key.)

        Args:
            ticker: US stock ticker, e.g. AAPL, NVDA, TSLA
            form: filter by form: 8-K, 10-K, 10-Q, S-1, 4 ...
            limit: Value sent with the request.
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
            await self._with_raw_response.sec_filings_sec_filings_get(
                ticker=ticker,
                form=form,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSecFilingsWithRawResponse:
        return self._with_raw_response


class SecFilingsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def sec_filings_sec_filings_get(
        self,
        *,
        ticker: str | None = "",
        form: str | None = "",
        limit: int | None = 15,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SecFilingsSecFilingsGetErrorBody]:
        """Recent SEC EDGAR filings for a US public company (8-K / 10-K / S-1 / Form 4). US public domain. (Requires API
        key.)

        Args:
            ticker: US stock ticker, e.g. AAPL, NVDA, TSLA
            form: filter by form: 8-K, 10-K, 10-Q, S-1, 4 ...
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sec-filings"),
            query_params=[
                param[str | None]("ticker", ticker), param[str | None]("form", form), param[int | None]("limit", limit)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=sec_filings_sec_filings_get_error_mapper,
            request_options=request_options,
        )


class AsyncSecFilingsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def sec_filings_sec_filings_get(
        self,
        *,
        ticker: str | None = "",
        form: str | None = "",
        limit: int | None = 15,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SecFilingsSecFilingsGetErrorBody]:
        """Recent SEC EDGAR filings for a US public company (8-K / 10-K / S-1 / Form 4). US public domain. (Requires API
        key.)

        Args:
            ticker: US stock ticker, e.g. AAPL, NVDA, TSLA
            form: filter by form: 8-K, 10-K, 10-Q, S-1, 4 ...
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sec-filings"),
            query_params=[
                param[str | None]("ticker", ticker), param[str | None]("form", form), param[int | None]("limit", limit)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=sec_filings_sec_filings_get_error_mapper,
            request_options=request_options,
        )
