from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    raw_error_response,
    unwrap,
)
from ..models.metrics_response import MetricsResponse
from ..server.server import Server


class Metrics:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MetricsWithRawResponse(client, server, auth)

    def get_metrics(self, *, request_options: RequestOptionsOrDict | None = None) -> MetricsResponse:
        """Returns current agent and job counts for the cluster associated with the agent token. Used by autoscalers
        (Lambda scaler, agent-stack-k8s, custom controllers) to size agent pools.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cluster metrics payload

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_metrics(request_options=request_options))

    @property
    def with_raw_response(self) -> MetricsWithRawResponse:
        return self._with_raw_response


class AsyncMetrics:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMetricsWithRawResponse(client, server, auth)

    async def get_metrics(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> MetricsResponse:
        """Returns current agent and job counts for the cluster associated with the agent token. Used by autoscalers
        (Lambda scaler, agent-stack-k8s, custom controllers) to size agent pools.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cluster metrics payload

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_metrics(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMetricsWithRawResponse:
        return self._with_raw_response


class MetricsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_metrics(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MetricsResponse, RawError]:
        """Returns current agent and job counts for the cluster associated with the agent token. Used by autoscalers
        (Lambda scaler, agent-stack-k8s, custom controllers) to size agent pools.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_buildkite_agent_metrics_api("/metrics"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MetricsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncMetricsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_metrics(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MetricsResponse, RawError]:
        """Returns current agent and job counts for the cluster associated with the agent token. Used by autoscalers
        (Lambda scaler, agent-stack-k8s, custom controllers) to size agent pools.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_buildkite_agent_metrics_api("/metrics"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MetricsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
