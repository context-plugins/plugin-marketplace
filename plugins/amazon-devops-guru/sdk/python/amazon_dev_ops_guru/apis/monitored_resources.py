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
from ..errors.list_monitored_resources_error import (
    ListMonitoredResourcesErrorBody,
    list_monitored_resources_error_mapper,
)
from ..models.list_monitored_resources_response import ListMonitoredResourcesResponse
from ..models.monitored_resources_request import MonitoredResourcesRequest, MonitoredResourcesRequestDict
from ..server.server import Server


class MonitoredResources:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MonitoredResourcesWithRawResponse(client, server, auth)

    def list_monitored_resources(
        self,
        *,
        body: MonitoredResourcesRequest | MonitoredResourcesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListMonitoredResourcesResponse:
        """Returns the list of all log groups that are being monitored and tagged by DevOps Guru.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_monitored_resources(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> MonitoredResourcesWithRawResponse:
        return self._with_raw_response


class AsyncMonitoredResources:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMonitoredResourcesWithRawResponse(client, server, auth)

    async def list_monitored_resources(
        self,
        *,
        body: MonitoredResourcesRequest | MonitoredResourcesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListMonitoredResourcesResponse:
        """Returns the list of all log groups that are being monitored and tagged by DevOps Guru.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_monitored_resources(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncMonitoredResourcesWithRawResponse:
        return self._with_raw_response


class MonitoredResourcesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_monitored_resources(
        self,
        *,
        body: MonitoredResourcesRequest | MonitoredResourcesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListMonitoredResourcesResponse, ListMonitoredResourcesErrorBody]:
        """Returns the list of all log groups that are being monitored and tagged by DevOps Guru.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/monitoredResources"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MonitoredResourcesRequest | MonitoredResourcesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListMonitoredResourcesResponse],
            error_mapper=list_monitored_resources_error_mapper,
            request_options=request_options,
        )


class AsyncMonitoredResourcesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_monitored_resources(
        self,
        *,
        body: MonitoredResourcesRequest | MonitoredResourcesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListMonitoredResourcesResponse, ListMonitoredResourcesErrorBody]:
        """Returns the list of all log groups that are being monitored and tagged by DevOps Guru.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/monitoredResources"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MonitoredResourcesRequest | MonitoredResourcesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListMonitoredResourcesResponse],
            error_mapper=list_monitored_resources_error_mapper,
            request_options=request_options,
        )
