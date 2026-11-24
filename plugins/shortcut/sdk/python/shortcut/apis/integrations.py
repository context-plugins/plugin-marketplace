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
from ..errors.create_generic_integration_error import (
    CreateGenericIntegrationErrorBody,
    create_generic_integration_error_mapper,
)
from ..errors.delete_generic_integration_error import (
    DeleteGenericIntegrationErrorBody,
    delete_generic_integration_error_mapper,
)
from ..errors.get_generic_integration_error import GetGenericIntegrationErrorBody, get_generic_integration_error_mapper
from ..models.create_generic_integration import CreateGenericIntegration, CreateGenericIntegrationDict
from ..server.server import Server


class Integrations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IntegrationsWithRawResponse(client, server, auth)

    def create_generic_integration(
        self,
        body: CreateGenericIntegration | CreateGenericIntegrationDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_generic_integration(body, request_options=request_options))

    def delete_generic_integration(
        self, integration_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            integration_public_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_generic_integration(integration_public_id, request_options=request_options)
        )

    def get_generic_integration(
        self, integration_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            integration_public_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_generic_integration(integration_public_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> IntegrationsWithRawResponse:
        return self._with_raw_response


class AsyncIntegrations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIntegrationsWithRawResponse(client, server, auth)

    async def create_generic_integration(
        self,
        body: CreateGenericIntegration | CreateGenericIntegrationDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_generic_integration(body, request_options=request_options))

    async def delete_generic_integration(
        self, integration_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            integration_public_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_generic_integration(
                integration_public_id, request_options=request_options
            ),
        )

    async def get_generic_integration(
        self, integration_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            integration_public_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_generic_integration(
                integration_public_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncIntegrationsWithRawResponse:
        return self._with_raw_response


class IntegrationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_generic_integration(
        self,
        body: CreateGenericIntegration | CreateGenericIntegrationDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateGenericIntegrationErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/integrations/webhook"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateGenericIntegration | CreateGenericIntegrationDict](body),
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=create_generic_integration_error_mapper,
            request_options=request_options,
        )

    def delete_generic_integration(
        self, integration_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteGenericIntegrationErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            integration_public_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/integrations/webhook/{integration-public-id}"),
            path_params=[param[int]("integration-public-id", integration_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_generic_integration_error_mapper,
            request_options=request_options,
        )

    def get_generic_integration(
        self, integration_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetGenericIntegrationErrorBody]:
        """Send a ``GET`` request.

        Args:
            integration_public_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/integrations/webhook/{integration-public-id}"),
            path_params=[param[int]("integration-public-id", integration_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=get_generic_integration_error_mapper,
            request_options=request_options,
        )


class AsyncIntegrationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_generic_integration(
        self,
        body: CreateGenericIntegration | CreateGenericIntegrationDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateGenericIntegrationErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/integrations/webhook"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateGenericIntegration | CreateGenericIntegrationDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=create_generic_integration_error_mapper,
            request_options=request_options,
        )

    async def delete_generic_integration(
        self, integration_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteGenericIntegrationErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            integration_public_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/integrations/webhook/{integration-public-id}"),
            path_params=[param[int]("integration-public-id", integration_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_generic_integration_error_mapper,
            request_options=request_options,
        )

    async def get_generic_integration(
        self, integration_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetGenericIntegrationErrorBody]:
        """Send a ``GET`` request.

        Args:
            integration_public_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/integrations/webhook/{integration-public-id}"),
            path_params=[param[int]("integration-public-id", integration_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=get_generic_integration_error_mapper,
            request_options=request_options,
        )
