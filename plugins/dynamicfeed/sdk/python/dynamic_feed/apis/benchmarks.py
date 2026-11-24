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
from ..errors.benchmarks_benchmarks_get_error import (
    BenchmarksBenchmarksGetErrorBody,
    benchmarks_benchmarks_get_error_mapper,
)
from ..errors.benchmarks_history_benchmarks_history_get_error import (
    BenchmarksHistoryBenchmarksHistoryGetErrorBody,
    benchmarks_history_benchmarks_history_get_error_mapper,
)
from ..server.server import Server


class Benchmarks:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = BenchmarksWithRawResponse(client, server)

    def benchmarks_benchmarks_get(
        self,
        *,
        window_hours: int | None = 24,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Measured latency & uptime per AI provider — our own data, fastest first. (Requires API key.)

        Args:
            window_hours: rolling window in hours
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
            self._with_raw_response.benchmarks_benchmarks_get(
                window_hours=window_hours,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def benchmarks_history_benchmarks_history_get(
        self,
        *,
        provider: str | None = "",
        days: int | None = 90,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """The PERMANENT daily provider-latency & uptime archive — data Dynamic Feed measures itself and never prunes,
        so it cannot be backfilled by anyone. Built for quant / eval / research use. Free keys get a 7-day sample; paid
        plans get the full history. (Requires API key.)

        Args:
            provider: filter to one provider, e.g. openai (optional)
            days: lookback in days
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
            self._with_raw_response.benchmarks_history_benchmarks_history_get(
                provider=provider,
                days=days,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> BenchmarksWithRawResponse:
        return self._with_raw_response


class AsyncBenchmarks:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncBenchmarksWithRawResponse(client, server)

    async def benchmarks_benchmarks_get(
        self,
        *,
        window_hours: int | None = 24,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Measured latency & uptime per AI provider — our own data, fastest first. (Requires API key.)

        Args:
            window_hours: rolling window in hours
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
            await self._with_raw_response.benchmarks_benchmarks_get(
                window_hours=window_hours,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def benchmarks_history_benchmarks_history_get(
        self,
        *,
        provider: str | None = "",
        days: int | None = 90,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """The PERMANENT daily provider-latency & uptime archive — data Dynamic Feed measures itself and never prunes,
        so it cannot be backfilled by anyone. Built for quant / eval / research use. Free keys get a 7-day sample; paid
        plans get the full history. (Requires API key.)

        Args:
            provider: filter to one provider, e.g. openai (optional)
            days: lookback in days
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
            await self._with_raw_response.benchmarks_history_benchmarks_history_get(
                provider=provider,
                days=days,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBenchmarksWithRawResponse:
        return self._with_raw_response


class BenchmarksWithRawResponse(BaseRawResponse[RawClient, Server]):
    def benchmarks_benchmarks_get(
        self,
        *,
        window_hours: int | None = 24,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, BenchmarksBenchmarksGetErrorBody]:
        """Measured latency & uptime per AI provider — our own data, fastest first. (Requires API key.)

        Args:
            window_hours: rolling window in hours
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/benchmarks"),
            query_params=[param[int | None]("window_hours", window_hours)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=benchmarks_benchmarks_get_error_mapper,
            request_options=request_options,
        )

    def benchmarks_history_benchmarks_history_get(
        self,
        *,
        provider: str | None = "",
        days: int | None = 90,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, BenchmarksHistoryBenchmarksHistoryGetErrorBody]:
        """The PERMANENT daily provider-latency & uptime archive — data Dynamic Feed measures itself and never prunes,
        so it cannot be backfilled by anyone. Built for quant / eval / research use. Free keys get a 7-day sample; paid
        plans get the full history. (Requires API key.)

        Args:
            provider: filter to one provider, e.g. openai (optional)
            days: lookback in days
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/benchmarks/history"),
            query_params=[param[str | None]("provider", provider), param[int | None]("days", days)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=benchmarks_history_benchmarks_history_get_error_mapper,
            request_options=request_options,
        )


class AsyncBenchmarksWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def benchmarks_benchmarks_get(
        self,
        *,
        window_hours: int | None = 24,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, BenchmarksBenchmarksGetErrorBody]:
        """Measured latency & uptime per AI provider — our own data, fastest first. (Requires API key.)

        Args:
            window_hours: rolling window in hours
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/benchmarks"),
            query_params=[param[int | None]("window_hours", window_hours)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=benchmarks_benchmarks_get_error_mapper,
            request_options=request_options,
        )

    async def benchmarks_history_benchmarks_history_get(
        self,
        *,
        provider: str | None = "",
        days: int | None = 90,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, BenchmarksHistoryBenchmarksHistoryGetErrorBody]:
        """The PERMANENT daily provider-latency & uptime archive — data Dynamic Feed measures itself and never prunes,
        so it cannot be backfilled by anyone. Built for quant / eval / research use. Free keys get a 7-day sample; paid
        plans get the full history. (Requires API key.)

        Args:
            provider: filter to one provider, e.g. openai (optional)
            days: lookback in days
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/benchmarks/history"),
            query_params=[param[str | None]("provider", provider), param[int | None]("days", days)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=benchmarks_history_benchmarks_history_get_error_mapper,
            request_options=request_options,
        )
