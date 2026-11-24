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
from ..errors.evaluate_entitlements_error import EvaluateEntitlementsErrorBody, evaluate_entitlements_error_mapper
from ..models.entitlement_request_dto import EntitlementRequestDto, EntitlementRequestDtoDict
from ..models.entitlement_response_dto import EntitlementResponseDto
from ..server.server import Server


class EntitlementRestController:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EntitlementRestControllerWithRawResponse(client, server, auth)

    def evaluate_entitlements(
        self,
        body: EntitlementRequestDto | EntitlementRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntitlementResponseDto:
        """Get entitlement results for a given user and site

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file upload is successful.

        Raises:
            ApiError: Returned if the user is not authenticated ``error`` is ``ErrorResponseDto | RawError``."""
        return unwrap(self._with_raw_response.evaluate_entitlements(body, request_options=request_options))

    @property
    def with_raw_response(self) -> EntitlementRestControllerWithRawResponse:
        return self._with_raw_response


class AsyncEntitlementRestController:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEntitlementRestControllerWithRawResponse(client, server, auth)

    async def evaluate_entitlements(
        self,
        body: EntitlementRequestDto | EntitlementRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntitlementResponseDto:
        """Get entitlement results for a given user and site

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file upload is successful.

        Raises:
            ApiError: Returned if the user is not authenticated ``error`` is ``ErrorResponseDto | RawError``."""
        return unwrap(await self._with_raw_response.evaluate_entitlements(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncEntitlementRestControllerWithRawResponse:
        return self._with_raw_response


class EntitlementRestControllerWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def evaluate_entitlements(
        self,
        body: EntitlementRequestDto | EntitlementRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitlementResponseDto, EvaluateEntitlementsErrorBody]:
        """Get entitlement results for a given user and site

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/compass/v1/entitlements"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EntitlementRequestDto | EntitlementRequestDtoDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[EntitlementResponseDto],
            error_mapper=evaluate_entitlements_error_mapper,
            request_options=request_options,
        )


class AsyncEntitlementRestControllerWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def evaluate_entitlements(
        self,
        body: EntitlementRequestDto | EntitlementRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitlementResponseDto, EvaluateEntitlementsErrorBody]:
        """Get entitlement results for a given user and site

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/compass/v1/entitlements"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EntitlementRequestDto | EntitlementRequestDtoDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[EntitlementResponseDto],
            error_mapper=evaluate_entitlements_error_mapper,
            request_options=request_options,
        )
