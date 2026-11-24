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
from ..errors.insert_metric_value_error import InsertMetricValueErrorBody, insert_metric_value_error_mapper
from ..models.insert_metric_response_dto import InsertMetricResponseDto
from ..models.unions.compass_v1_metrics_request import CompassV1MetricsRequest, CompassV1MetricsRequestDict
from ..server.server import Server


class Metrics:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MetricsWithRawResponse(client, server, auth)

    def insert_metric_value(
        self,
        body: CompassV1MetricsRequest | CompassV1MetricsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InsertMetricResponseDto:
        """Sends a metric value into a metric source for a component. This API is rate limited. Only 100 requests per
        user per minute are allowed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the request is successful.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the user does not have permission to insert
                metrics. Returned if the metric source, metric definition or component is not found. Returned if the
                request exceeds the rate limit. ``error`` is ``ErrorResponseDto | InsertMetricResponseDto |
                RawError``."""
        return unwrap(self._with_raw_response.insert_metric_value(body, request_options=request_options))

    @property
    def with_raw_response(self) -> MetricsWithRawResponse:
        return self._with_raw_response


class AsyncMetrics:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMetricsWithRawResponse(client, server, auth)

    async def insert_metric_value(
        self,
        body: CompassV1MetricsRequest | CompassV1MetricsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InsertMetricResponseDto:
        """Sends a metric value into a metric source for a component. This API is rate limited. Only 100 requests per
        user per minute are allowed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the request is successful.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the user does not have permission to insert
                metrics. Returned if the metric source, metric definition or component is not found. Returned if the
                request exceeds the rate limit. ``error`` is ``ErrorResponseDto | InsertMetricResponseDto |
                RawError``."""
        return unwrap(await self._with_raw_response.insert_metric_value(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMetricsWithRawResponse:
        return self._with_raw_response


class MetricsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def insert_metric_value(
        self,
        body: CompassV1MetricsRequest | CompassV1MetricsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InsertMetricResponseDto, InsertMetricValueErrorBody]:
        """Sends a metric value into a metric source for a component. This API is rate limited. Only 100 requests per
        user per minute are allowed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/compass/v1/metrics"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompassV1MetricsRequest | CompassV1MetricsRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[InsertMetricResponseDto],
            error_mapper=insert_metric_value_error_mapper,
            request_options=request_options,
        )


class AsyncMetricsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def insert_metric_value(
        self,
        body: CompassV1MetricsRequest | CompassV1MetricsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InsertMetricResponseDto, InsertMetricValueErrorBody]:
        """Sends a metric value into a metric source for a component. This API is rate limited. Only 100 requests per
        user per minute are allowed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/compass/v1/metrics"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompassV1MetricsRequest | CompassV1MetricsRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[InsertMetricResponseDto],
            error_mapper=insert_metric_value_error_mapper,
            request_options=request_options,
        )
