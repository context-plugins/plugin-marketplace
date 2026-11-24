from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    unwrap,
)
from ..errors.get_api_v1_meta_error import GetApiV1MetaErrorBody, get_api_v1_meta_error_mapper
from ..models.api_v1_meta_response import ApiV1MetaResponse
from ..server.server import Server


class Meta:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MetaWithRawResponse(client, server, auth)

    def get_api_v1_meta(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MetaResponse:
        """Returns API metadata including version, capabilities, supported fields, content types, and rate limit policy.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API metadata retrieved

        Raises:
            ApiError: Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_meta(request_options=request_options))

    @property
    def with_raw_response(self) -> MetaWithRawResponse:
        return self._with_raw_response


class AsyncMeta:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMetaWithRawResponse(client, server, auth)

    async def get_api_v1_meta(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ApiV1MetaResponse:
        """Returns API metadata including version, capabilities, supported fields, content types, and rate limit policy.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API metadata retrieved

        Raises:
            ApiError: Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_meta(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMetaWithRawResponse:
        return self._with_raw_response


class MetaWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_meta(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MetaResponse, GetApiV1MetaErrorBody]:
        """Returns API metadata including version, capabilities, supported fields, content types, and rate limit policy.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1MetaResponse],
            error_mapper=get_api_v1_meta_error_mapper,
            request_options=request_options,
        )


class AsyncMetaWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_meta(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MetaResponse, GetApiV1MetaErrorBody]:
        """Returns API metadata including version, capabilities, supported fields, content types, and rate limit policy.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1MetaResponse],
            error_mapper=get_api_v1_meta_error_mapper,
            request_options=request_options,
        )
