from __future__ import annotations

from typing import Any
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
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_monitor_error import CreateMonitorErrorBody, create_monitor_error_mapper
from ..errors.delete_monitor_error import DeleteMonitorErrorBody, delete_monitor_error_mapper
from ..errors.list_monitors_error import ListMonitorsErrorBody, list_monitors_error_mapper
from ..models.v1_monitors_request import V1MonitorsRequest, V1MonitorsRequestDict
from ..server.server import Server


class Monitors:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MonitorsWithRawResponse(client, server, auth)

    def create_monitor(
        self, body: V1MonitorsRequest | V1MonitorsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created. webhook_secret is returned once.

        Raises:
            ApiError: Error Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_monitor(body, request_options=request_options))

    def delete_monitor(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_monitor(id_, request_options=request_options))

    def list_monitors(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitors

        Raises:
            ApiError: Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_monitors(request_options=request_options))

    @property
    def with_raw_response(self) -> MonitorsWithRawResponse:
        return self._with_raw_response


class AsyncMonitors:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMonitorsWithRawResponse(client, server, auth)

    async def create_monitor(
        self,
        body: V1MonitorsRequest | V1MonitorsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created. webhook_secret is returned once.

        Raises:
            ApiError: Error Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_monitor(body, request_options=request_options))

    async def delete_monitor(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_monitor(id_, request_options=request_options))

    async def list_monitors(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitors

        Raises:
            ApiError: Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_monitors(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMonitorsWithRawResponse:
        return self._with_raw_response


class MonitorsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_monitor(
        self, body: V1MonitorsRequest | V1MonitorsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, CreateMonitorErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitors"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MonitorsRequest | V1MonitorsRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[Any],
            error_mapper=create_monitor_error_mapper,
            request_options=request_options,
        )

    def delete_monitor(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteMonitorErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/monitors"),
            query_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=delete_monitor_error_mapper,
            request_options=request_options,
        )

    def list_monitors(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, ListMonitorsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/monitors"),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[Any],
            error_mapper=list_monitors_error_mapper,
            request_options=request_options,
        )


class AsyncMonitorsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_monitor(
        self,
        body: V1MonitorsRequest | V1MonitorsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CreateMonitorErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitors"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MonitorsRequest | V1MonitorsRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[Any],
            error_mapper=create_monitor_error_mapper,
            request_options=request_options,
        )

    async def delete_monitor(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteMonitorErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/monitors"),
            query_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=delete_monitor_error_mapper,
            request_options=request_options,
        )

    async def list_monitors(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, ListMonitorsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/monitors"),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[Any],
            error_mapper=list_monitors_error_mapper,
            request_options=request_options,
        )
