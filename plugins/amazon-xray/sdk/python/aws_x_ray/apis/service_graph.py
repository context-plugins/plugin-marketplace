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
from ..errors.get_service_graph_error import GetServiceGraphErrorBody, get_service_graph_error_mapper
from ..models.get_service_graph_result import GetServiceGraphResult
from ..models.service_graph_request import ServiceGraphRequest, ServiceGraphRequestDict
from ..server.server import Server


class ServiceGraph:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ServiceGraphWithRawResponse(client, server, auth)

    def get_service_graph(
        self,
        *,
        body: ServiceGraphRequest | ServiceGraphRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetServiceGraphResult:
        """Retrieves a document that describes services that process incoming requests, and downstream services that
        they call as a result. Root services process incoming requests and make calls to downstream services. Root
        services are applications that use the Amazon Web Services X-Ray SDK. Downstream services can be other
        applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_service_graph(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ServiceGraphWithRawResponse:
        return self._with_raw_response


class AsyncServiceGraph:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncServiceGraphWithRawResponse(client, server, auth)

    async def get_service_graph(
        self,
        *,
        body: ServiceGraphRequest | ServiceGraphRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetServiceGraphResult:
        """Retrieves a document that describes services that process incoming requests, and downstream services that
        they call as a result. Root services process incoming requests and make calls to downstream services. Root
        services are applications that use the Amazon Web Services X-Ray SDK. Downstream services can be other
        applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.get_service_graph(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncServiceGraphWithRawResponse:
        return self._with_raw_response


class ServiceGraphWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_service_graph(
        self,
        *,
        body: ServiceGraphRequest | ServiceGraphRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetServiceGraphResult, GetServiceGraphErrorBody]:
        """Retrieves a document that describes services that process incoming requests, and downstream services that
        they call as a result. Root services process incoming requests and make calls to downstream services. Root
        services are applications that use the Amazon Web Services X-Ray SDK. Downstream services can be other
        applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ServiceGraph"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ServiceGraphRequest | ServiceGraphRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetServiceGraphResult],
            error_mapper=get_service_graph_error_mapper,
            request_options=request_options,
        )


class AsyncServiceGraphWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_service_graph(
        self,
        *,
        body: ServiceGraphRequest | ServiceGraphRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetServiceGraphResult, GetServiceGraphErrorBody]:
        """Retrieves a document that describes services that process incoming requests, and downstream services that
        they call as a result. Root services process incoming requests and make calls to downstream services. Root
        services are applications that use the Amazon Web Services X-Ray SDK. Downstream services can be other
        applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ServiceGraph"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ServiceGraphRequest | ServiceGraphRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetServiceGraphResult],
            error_mapper=get_service_graph_error_mapper,
            request_options=request_options,
        )
