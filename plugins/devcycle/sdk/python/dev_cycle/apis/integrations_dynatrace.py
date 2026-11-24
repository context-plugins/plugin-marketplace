from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.dynatrace_integration_controller_create_integration_error import (
    DynatraceIntegrationControllerCreateIntegrationErrorBody,
    dynatrace_integration_controller_create_integration_error_mapper,
)
from ..errors.dynatrace_integration_controller_delete_environment_error import (
    DynatraceIntegrationControllerDeleteEnvironmentErrorBody,
    dynatrace_integration_controller_delete_environment_error_mapper,
)
from ..errors.dynatrace_integration_controller_get_integrations_error import (
    DynatraceIntegrationControllerGetIntegrationsErrorBody,
    dynatrace_integration_controller_get_integrations_error_mapper,
)
from ..models.create_dynatrace_integration_dto import CreateDynatraceIntegrationDto, CreateDynatraceIntegrationDtoDict
from ..models.dynatrace_integration import DynatraceIntegration
from ..server.server import Server


class IntegrationsDynatrace:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = IntegrationsDynatraceWithRawResponse(client, server)

    def dynatrace_integration_controller_create_integration(
        self,
        body: CreateDynatraceIntegrationDto | CreateDynatraceIntegrationDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Integration created/updated successfully

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.dynatrace_integration_controller_create_integration(
                body, request_options=request_options
            ),
        )

    def dynatrace_integration_controller_delete_environment(
        self, dynatrace_environment_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            dynatrace_environment_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Environment deleted successfully

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.dynatrace_integration_controller_delete_environment(
                dynatrace_environment_id, request_options=request_options
            ),
        )

    def dynatrace_integration_controller_get_integrations(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> DynatraceIntegration:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Integrations fetched successfully

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.dynatrace_integration_controller_get_integrations(request_options=request_options)
        )

    @property
    def with_raw_response(self) -> IntegrationsDynatraceWithRawResponse:
        return self._with_raw_response


class AsyncIntegrationsDynatrace:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncIntegrationsDynatraceWithRawResponse(client, server)

    async def dynatrace_integration_controller_create_integration(
        self,
        body: CreateDynatraceIntegrationDto | CreateDynatraceIntegrationDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Integration created/updated successfully

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dynatrace_integration_controller_create_integration(
                body, request_options=request_options
            ),
        )

    async def dynatrace_integration_controller_delete_environment(
        self, dynatrace_environment_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            dynatrace_environment_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Environment deleted successfully

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dynatrace_integration_controller_delete_environment(
                dynatrace_environment_id, request_options=request_options
            ),
        )

    async def dynatrace_integration_controller_get_integrations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DynatraceIntegration:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Integrations fetched successfully

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dynatrace_integration_controller_get_integrations(
                request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncIntegrationsDynatraceWithRawResponse:
        return self._with_raw_response


class IntegrationsDynatraceWithRawResponse(BaseRawResponse[RawClient, Server]):
    def dynatrace_integration_controller_create_integration(
        self,
        body: CreateDynatraceIntegrationDto | CreateDynatraceIntegrationDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DynatraceIntegrationControllerCreateIntegrationErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/integrations/dynatrace"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateDynatraceIntegrationDto | CreateDynatraceIntegrationDtoDict](body),
            decoder=empty_response,
            error_mapper=dynatrace_integration_controller_create_integration_error_mapper,
            request_options=request_options,
        )

    def dynatrace_integration_controller_delete_environment(
        self, dynatrace_environment_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DynatraceIntegrationControllerDeleteEnvironmentErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            dynatrace_environment_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/integrations/dynatrace/{dynatraceEnvironmentId}"),
            path_params=[param[str]("dynatraceEnvironmentId", dynatrace_environment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=dynatrace_integration_controller_delete_environment_error_mapper,
            request_options=request_options,
        )

    def dynatrace_integration_controller_get_integrations(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DynatraceIntegration, DynatraceIntegrationControllerGetIntegrationsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/integrations/dynatrace"),
            decoder=json_decoder[DynatraceIntegration],
            error_mapper=dynatrace_integration_controller_get_integrations_error_mapper,
            request_options=request_options,
        )


class AsyncIntegrationsDynatraceWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def dynatrace_integration_controller_create_integration(
        self,
        body: CreateDynatraceIntegrationDto | CreateDynatraceIntegrationDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DynatraceIntegrationControllerCreateIntegrationErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/integrations/dynatrace"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateDynatraceIntegrationDto | CreateDynatraceIntegrationDtoDict](body),
            decoder=async_empty_response,
            error_mapper=dynatrace_integration_controller_create_integration_error_mapper,
            request_options=request_options,
        )

    async def dynatrace_integration_controller_delete_environment(
        self, dynatrace_environment_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DynatraceIntegrationControllerDeleteEnvironmentErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            dynatrace_environment_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/integrations/dynatrace/{dynatraceEnvironmentId}"),
            path_params=[param[str]("dynatraceEnvironmentId", dynatrace_environment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=dynatrace_integration_controller_delete_environment_error_mapper,
            request_options=request_options,
        )

    async def dynatrace_integration_controller_get_integrations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DynatraceIntegration, DynatraceIntegrationControllerGetIntegrationsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/integrations/dynatrace"),
            decoder=async_json_decoder[DynatraceIntegration],
            error_mapper=dynatrace_integration_controller_get_integrations_error_mapper,
            request_options=request_options,
        )
