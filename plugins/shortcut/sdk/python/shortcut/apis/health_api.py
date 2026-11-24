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
from ..errors.update_health_error import UpdateHealthErrorBody, update_health_error_mapper
from ..models.health import Health
from ..models.update_health import UpdateHealth, UpdateHealthDict
from ..server.server import Server


class HealthApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = HealthApiWithRawResponse(client, server, auth)

    def update_health(
        self,
        health_public_id: UUID,
        body: UpdateHealth | UpdateHealthDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Health:
        """Update an existing health status by its ID.

        Args:
            health_public_id: The unique ID of the Health record.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_health(health_public_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> HealthApiWithRawResponse:
        return self._with_raw_response


class AsyncHealthApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncHealthApiWithRawResponse(client, server, auth)

    async def update_health(
        self,
        health_public_id: UUID,
        body: UpdateHealth | UpdateHealthDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Health:
        """Update an existing health status by its ID.

        Args:
            health_public_id: The unique ID of the Health record.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_health(health_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncHealthApiWithRawResponse:
        return self._with_raw_response


class HealthApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def update_health(
        self,
        health_public_id: UUID,
        body: UpdateHealth | UpdateHealthDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Health, UpdateHealthErrorBody]:
        """Update an existing health status by its ID.

        Args:
            health_public_id: The unique ID of the Health record.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/health/{health-public-id}"),
            path_params=[param[UUID]("health-public-id", health_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateHealth | UpdateHealthDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Health],
            error_mapper=update_health_error_mapper,
            request_options=request_options,
        )


class AsyncHealthApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def update_health(
        self,
        health_public_id: UUID,
        body: UpdateHealth | UpdateHealthDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Health, UpdateHealthErrorBody]:
        """Update an existing health status by its ID.

        Args:
            health_public_id: The unique ID of the Health record.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/health/{health-public-id}"),
            path_params=[param[UUID]("health-public-id", health_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateHealth | UpdateHealthDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Health],
            error_mapper=update_health_error_mapper,
            request_options=request_options,
        )
