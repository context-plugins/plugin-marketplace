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
from ..errors.get_sampling_statistic_summaries_error import (
    GetSamplingStatisticSummariesErrorBody,
    get_sampling_statistic_summaries_error_mapper,
)
from ..models.get_sampling_statistic_summaries_result import GetSamplingStatisticSummariesResult
from ..models.sampling_statistic_summaries_request import (
    SamplingStatisticSummariesRequest,
    SamplingStatisticSummariesRequestDict,
)
from ..server.server import Server


class Samplingstatisticsummaries:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SamplingstatisticsummariesWithRawResponse(client, server, auth)

    def get_sampling_statistic_summaries(
        self,
        *,
        body: SamplingStatisticSummariesRequest | SamplingStatisticSummariesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetSamplingStatisticSummariesResult:
        """Retrieves information about recent sampling results for all sampling rules.

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
            self._with_raw_response.get_sampling_statistic_summaries(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SamplingstatisticsummariesWithRawResponse:
        return self._with_raw_response


class AsyncSamplingstatisticsummaries:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSamplingstatisticsummariesWithRawResponse(client, server, auth)

    async def get_sampling_statistic_summaries(
        self,
        *,
        body: SamplingStatisticSummariesRequest | SamplingStatisticSummariesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetSamplingStatisticSummariesResult:
        """Retrieves information about recent sampling results for all sampling rules.

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
            await self._with_raw_response.get_sampling_statistic_summaries(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSamplingstatisticsummariesWithRawResponse:
        return self._with_raw_response


class SamplingstatisticsummariesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_sampling_statistic_summaries(
        self,
        *,
        body: SamplingStatisticSummariesRequest | SamplingStatisticSummariesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetSamplingStatisticSummariesResult, GetSamplingStatisticSummariesErrorBody]:
        """Retrieves information about recent sampling results for all sampling rules.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/SamplingStatisticSummaries"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SamplingStatisticSummariesRequest | SamplingStatisticSummariesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetSamplingStatisticSummariesResult],
            error_mapper=get_sampling_statistic_summaries_error_mapper,
            request_options=request_options,
        )


class AsyncSamplingstatisticsummariesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_sampling_statistic_summaries(
        self,
        *,
        body: SamplingStatisticSummariesRequest | SamplingStatisticSummariesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetSamplingStatisticSummariesResult, GetSamplingStatisticSummariesErrorBody]:
        """Retrieves information about recent sampling results for all sampling rules.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/SamplingStatisticSummaries"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SamplingStatisticSummariesRequest | SamplingStatisticSummariesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetSamplingStatisticSummariesResult],
            error_mapper=get_sampling_statistic_summaries_error_mapper,
            request_options=request_options,
        )
