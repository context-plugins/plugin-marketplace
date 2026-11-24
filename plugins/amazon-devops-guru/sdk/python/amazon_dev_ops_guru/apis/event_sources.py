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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.describe_event_sources_config_error import (
    DescribeEventSourcesConfigErrorBody,
    describe_event_sources_config_error_mapper,
)
from ..errors.update_event_sources_config_error import (
    UpdateEventSourcesConfigErrorBody,
    update_event_sources_config_error_mapper,
)
from ..models.describe_event_sources_config_response import (
    DescribeEventSourcesConfigResponse,
    DescribeEventSourcesConfigResponseDict,
)
from ..server.server import Server


class EventSources:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EventSourcesWithRawResponse(client, server, auth)

    def describe_event_sources_config(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeEventSourcesConfigResponse:
        """Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge.
        The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive
        recommendations which can be stored and viewed in DevOps Guru.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.describe_event_sources_config(request_options=request_options))

    def update_event_sources_config(
        self,
        *,
        body: DescribeEventSourcesConfigResponse | DescribeEventSourcesConfigResponseDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that
        can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations
        which can be stored and viewed in DevOps Guru.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.update_event_sources_config(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> EventSourcesWithRawResponse:
        return self._with_raw_response


class AsyncEventSources:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEventSourcesWithRawResponse(client, server, auth)

    async def describe_event_sources_config(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeEventSourcesConfigResponse:
        """Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge.
        The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive
        recommendations which can be stored and viewed in DevOps Guru.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(await self._with_raw_response.describe_event_sources_config(request_options=request_options))

    async def update_event_sources_config(
        self,
        *,
        body: DescribeEventSourcesConfigResponse | DescribeEventSourcesConfigResponseDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that
        can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations
        which can be stored and viewed in DevOps Guru.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_event_sources_config(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncEventSourcesWithRawResponse:
        return self._with_raw_response


class EventSourcesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def describe_event_sources_config(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeEventSourcesConfigResponse, DescribeEventSourcesConfigErrorBody]:
        """Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge.
        The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive
        recommendations which can be stored and viewed in DevOps Guru.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/event-sources"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeEventSourcesConfigResponse],
            error_mapper=describe_event_sources_config_error_mapper,
            request_options=request_options,
        )

    def update_event_sources_config(
        self,
        *,
        body: DescribeEventSourcesConfigResponse | DescribeEventSourcesConfigResponseDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UpdateEventSourcesConfigErrorBody]:
        """Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that
        can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations
        which can be stored and viewed in DevOps Guru.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/event-sources"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DescribeEventSourcesConfigResponse | DescribeEventSourcesConfigResponseDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=update_event_sources_config_error_mapper,
            request_options=request_options,
        )


class AsyncEventSourcesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def describe_event_sources_config(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeEventSourcesConfigResponse, DescribeEventSourcesConfigErrorBody]:
        """Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge.
        The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive
        recommendations which can be stored and viewed in DevOps Guru.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/event-sources"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeEventSourcesConfigResponse],
            error_mapper=describe_event_sources_config_error_mapper,
            request_options=request_options,
        )

    async def update_event_sources_config(
        self,
        *,
        body: DescribeEventSourcesConfigResponse | DescribeEventSourcesConfigResponseDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UpdateEventSourcesConfigErrorBody]:
        """Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that
        can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations
        which can be stored and viewed in DevOps Guru.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/event-sources"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DescribeEventSourcesConfigResponse | DescribeEventSourcesConfigResponseDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=update_event_sources_config_error_mapper,
            request_options=request_options,
        )
