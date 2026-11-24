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
    async_empty_response,
    empty_response,
    json_body,
    param,
    unwrap,
)
from ..errors.post_request_error import PostRequestErrorBody, post_request_error_mapper
from ..models.metrics_request import MetricsRequest, MetricsRequestDict
from ..server.server import Server


class Metrics:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MetricsWithRawResponse(client, server, auth)

    def post_request(
        self,
        *,
        body: list[MetricsRequest | MetricsRequestDict] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send API request and response metadata (HAR-formatted) to ReadMe Metrics for analysis in the Developer
        Dashboard.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Logs accepted for processing

        Raises:
            ApiError: Unauthorized Invalid payload ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_request(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> MetricsWithRawResponse:
        return self._with_raw_response


class AsyncMetrics:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMetricsWithRawResponse(client, server, auth)

    async def post_request(
        self,
        *,
        body: list[MetricsRequest | MetricsRequestDict] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send API request and response metadata (HAR-formatted) to ReadMe Metrics for analysis in the Developer
        Dashboard.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Logs accepted for processing

        Raises:
            ApiError: Unauthorized Invalid payload ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_request(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMetricsWithRawResponse:
        return self._with_raw_response


class MetricsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_request(
        self,
        *,
        body: list[MetricsRequest | MetricsRequestDict] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostRequestErrorBody]:
        """Send API request and response metadata (HAR-formatted) to ReadMe Metrics for analysis in the Developer
        Dashboard.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/request"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[MetricsRequest | MetricsRequestDict] | None](body),
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=post_request_error_mapper,
            request_options=request_options,
        )


class AsyncMetricsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_request(
        self,
        *,
        body: list[MetricsRequest | MetricsRequestDict] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostRequestErrorBody]:
        """Send API request and response metadata (HAR-formatted) to ReadMe Metrics for analysis in the Developer
        Dashboard.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/request"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[MetricsRequest | MetricsRequestDict] | None](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=post_request_error_mapper,
            request_options=request_options,
        )
