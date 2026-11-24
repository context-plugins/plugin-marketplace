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
from ..errors.get_time_series_service_statistics_error import (
    GetTimeSeriesServiceStatisticsErrorBody,
    get_time_series_service_statistics_error_mapper,
)
from ..models.get_time_series_service_statistics_result import GetTimeSeriesServiceStatisticsResult
from ..models.time_series_service_statistics_request import (
    TimeSeriesServiceStatisticsRequest,
    TimeSeriesServiceStatisticsRequestDict,
)
from ..server.server import Server


class TimeseriesservicestatisticsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TimeseriesservicestatisticsApiWithRawResponse(client, server, auth)

    def get_time_series_service_statistics(
        self,
        *,
        body: TimeSeriesServiceStatisticsRequest | TimeSeriesServiceStatisticsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetTimeSeriesServiceStatisticsResult:
        """Get an aggregation of service statistics defined by a specific time range.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(
            self._with_raw_response.get_time_series_service_statistics(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> TimeseriesservicestatisticsApiWithRawResponse:
        return self._with_raw_response


class AsyncTimeseriesservicestatisticsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTimeseriesservicestatisticsApiWithRawResponse(client, server, auth)

    async def get_time_series_service_statistics(
        self,
        *,
        body: TimeSeriesServiceStatisticsRequest | TimeSeriesServiceStatisticsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetTimeSeriesServiceStatisticsResult:
        """Get an aggregation of service statistics defined by a specific time range.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_time_series_service_statistics(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTimeseriesservicestatisticsApiWithRawResponse:
        return self._with_raw_response


class TimeseriesservicestatisticsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_time_series_service_statistics(
        self,
        *,
        body: TimeSeriesServiceStatisticsRequest | TimeSeriesServiceStatisticsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTimeSeriesServiceStatisticsResult, GetTimeSeriesServiceStatisticsErrorBody]:
        """Get an aggregation of service statistics defined by a specific time range.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/TimeSeriesServiceStatistics"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TimeSeriesServiceStatisticsRequest | TimeSeriesServiceStatisticsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetTimeSeriesServiceStatisticsResult],
            error_mapper=get_time_series_service_statistics_error_mapper,
            request_options=request_options,
        )


class AsyncTimeseriesservicestatisticsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_time_series_service_statistics(
        self,
        *,
        body: TimeSeriesServiceStatisticsRequest | TimeSeriesServiceStatisticsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTimeSeriesServiceStatisticsResult, GetTimeSeriesServiceStatisticsErrorBody]:
        """Get an aggregation of service statistics defined by a specific time range.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/TimeSeriesServiceStatistics"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TimeSeriesServiceStatisticsRequest | TimeSeriesServiceStatisticsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetTimeSeriesServiceStatisticsResult],
            error_mapper=get_time_series_service_statistics_error_mapper,
            request_options=request_options,
        )
