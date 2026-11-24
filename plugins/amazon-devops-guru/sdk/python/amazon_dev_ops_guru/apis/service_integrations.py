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
from ..errors.describe_service_integration_error import (
    DescribeServiceIntegrationErrorBody,
    describe_service_integration_error_mapper,
)
from ..errors.update_service_integration_error import (
    UpdateServiceIntegrationErrorBody,
    update_service_integration_error_mapper,
)
from ..models.describe_service_integration_response import DescribeServiceIntegrationResponse
from ..models.service_integrations_request import ServiceIntegrationsRequest, ServiceIntegrationsRequestDict
from ..server.server import Server


class ServiceIntegrations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ServiceIntegrationsWithRawResponse(client, server, auth)

    def describe_service_integration(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeServiceIntegrationResponse:
        """Returns the integration status of services that are integrated with DevOps Guru. The one service that can be
        integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for
        each generated insight.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.describe_service_integration(request_options=request_options))

    def update_service_integration(
        self,
        *,
        body: ServiceIntegrationsRequest | ServiceIntegrationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that
        can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an
        OpsItem for each generated insight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException | ConflictException |
                ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.update_service_integration(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ServiceIntegrationsWithRawResponse:
        return self._with_raw_response


class AsyncServiceIntegrations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncServiceIntegrationsWithRawResponse(client, server, auth)

    async def describe_service_integration(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeServiceIntegrationResponse:
        """Returns the integration status of services that are integrated with DevOps Guru. The one service that can be
        integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for
        each generated insight.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.describe_service_integration(request_options=request_options))

    async def update_service_integration(
        self,
        *,
        body: ServiceIntegrationsRequest | ServiceIntegrationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that
        can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an
        OpsItem for each generated insight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException | ConflictException |
                ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_service_integration(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncServiceIntegrationsWithRawResponse:
        return self._with_raw_response


class ServiceIntegrationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def describe_service_integration(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeServiceIntegrationResponse, DescribeServiceIntegrationErrorBody]:
        """Returns the integration status of services that are integrated with DevOps Guru. The one service that can be
        integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for
        each generated insight.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/service-integrations"),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeServiceIntegrationResponse],
            error_mapper=describe_service_integration_error_mapper,
            request_options=request_options,
        )

    def update_service_integration(
        self,
        *,
        body: ServiceIntegrationsRequest | ServiceIntegrationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UpdateServiceIntegrationErrorBody]:
        """Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that
        can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an
        OpsItem for each generated insight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/service-integrations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ServiceIntegrationsRequest | ServiceIntegrationsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=update_service_integration_error_mapper,
            request_options=request_options,
        )


class AsyncServiceIntegrationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def describe_service_integration(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeServiceIntegrationResponse, DescribeServiceIntegrationErrorBody]:
        """Returns the integration status of services that are integrated with DevOps Guru. The one service that can be
        integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for
        each generated insight.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/service-integrations"),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeServiceIntegrationResponse],
            error_mapper=describe_service_integration_error_mapper,
            request_options=request_options,
        )

    async def update_service_integration(
        self,
        *,
        body: ServiceIntegrationsRequest | ServiceIntegrationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UpdateServiceIntegrationErrorBody]:
        """Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that
        can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an
        OpsItem for each generated insight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/service-integrations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ServiceIntegrationsRequest | ServiceIntegrationsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=update_service_integration_error_mapper,
            request_options=request_options,
        )
