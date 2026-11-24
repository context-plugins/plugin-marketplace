from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.api_v1_audiences_resolve_request import ApiV1AudiencesResolveRequest, ApiV1AudiencesResolveRequestDict
from ..models.api_v1_audiences_resolve_response import ApiV1AudiencesResolveResponse
from ..server.server import Server


class Audiences:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AudiencesWithRawResponse(client, server, auth)

    def post_api_v1_audiences_resolve(
        self,
        *,
        body: ApiV1AudiencesResolveRequest | ApiV1AudiencesResolveRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AudiencesResolveResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resolution result with disambiguation candidates

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_audiences_resolve(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AudiencesWithRawResponse:
        return self._with_raw_response


class AsyncAudiences:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAudiencesWithRawResponse(client, server, auth)

    async def post_api_v1_audiences_resolve(
        self,
        *,
        body: ApiV1AudiencesResolveRequest | ApiV1AudiencesResolveRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AudiencesResolveResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resolution result with disambiguation candidates

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_audiences_resolve(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAudiencesWithRawResponse:
        return self._with_raw_response


class AudiencesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_api_v1_audiences_resolve(
        self,
        *,
        body: ApiV1AudiencesResolveRequest | ApiV1AudiencesResolveRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AudiencesResolveResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/audiences/resolve"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AudiencesResolveRequest | ApiV1AudiencesResolveRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AudiencesResolveResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAudiencesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_api_v1_audiences_resolve(
        self,
        *,
        body: ApiV1AudiencesResolveRequest | ApiV1AudiencesResolveRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AudiencesResolveResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/audiences/resolve"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AudiencesResolveRequest | ApiV1AudiencesResolveRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AudiencesResolveResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
