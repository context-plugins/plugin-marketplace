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
    async_empty_response,
    empty_response,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class Stacks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StacksWithRawResponse(client, server, auth)

    def get_stacks(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Returns the desired stack configuration for a self-hosted queue's controller process. The controller watches
        the queue for jobs and runs agents on demand.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stack configuration payload

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_stacks(request_options=request_options))

    @property
    def with_raw_response(self) -> StacksWithRawResponse:
        return self._with_raw_response


class AsyncStacks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStacksWithRawResponse(client, server, auth)

    async def get_stacks(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Returns the desired stack configuration for a self-hosted queue's controller process. The controller watches
        the queue for jobs and runs agents on demand.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stack configuration payload

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_stacks(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncStacksWithRawResponse:
        return self._with_raw_response


class StacksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_stacks(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Returns the desired stack configuration for a self-hosted queue's controller process. The controller watches
        the queue for jobs and runs agents on demand.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_buildkite_agent_metrics_api("/stacks"),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncStacksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_stacks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Returns the desired stack configuration for a self-hosted queue's controller process. The controller watches
        the queue for jobs and runs agents on demand.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_buildkite_agent_metrics_api("/stacks"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
