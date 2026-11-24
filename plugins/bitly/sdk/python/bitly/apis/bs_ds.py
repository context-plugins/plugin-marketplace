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
from ..errors.get_bs_ds_error import GetBsDsErrorBody, get_bs_ds_error_mapper
from ..models.bs_ds_response import BsDsResponse
from ..server.server import Server


class BsDs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BsDsWithRawResponse(client, server, auth)

    def get_bsds(self, *, request_options: RequestOptionsOrDict | None = None) -> BsDsResponse:
        """Fetch all Branded Short Domains

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_bsds(request_options=request_options))

    @property
    def with_raw_response(self) -> BsDsWithRawResponse:
        return self._with_raw_response


class AsyncBsDs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBsDsWithRawResponse(client, server, auth)

    async def get_bsds(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> BsDsResponse:
        """Fetch all Branded Short Domains

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_bsds(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBsDsWithRawResponse:
        return self._with_raw_response


class BsDsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_bsds(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BsDsResponse, GetBsDsErrorBody]:
        """Fetch all Branded Short Domains

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bsds"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BsDsResponse],
            error_mapper=get_bs_ds_error_mapper,
            request_options=request_options,
        )


class AsyncBsDsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_bsds(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BsDsResponse, GetBsDsErrorBody]:
        """Fetch all Branded Short Domains

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bsds"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BsDsResponse],
            error_mapper=get_bs_ds_error_mapper,
            request_options=request_options,
        )
