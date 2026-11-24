from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_lien_theft_error import GetLienTheftErrorBody, get_lien_theft_error_mapper
from ..models.v1_lien_theft_response import V1LienTheftResponse
from ..server.server import Server


class LienTheft:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LienTheftWithRawResponse(client, server, auth)

    def get_lien_theft(self, vin: str, *, request_options: RequestOptionsOrDict | None = None) -> V1LienTheftResponse:
        """Check a VIN for active lien and theft records (US).

        Args:
            vin: The 17 character long vehicle identification number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lien/theft data retrieved.

        Raises:
            ApiError: Missing or invalid VIN. Missing API key, unknown/disabled API key, or inactive account. No lien or
                theft data found for this VIN. API usage limit exceeded for the current billing period. ``error`` is
                ``Error | UsageLimitError | RawError``."""
        return unwrap(self._with_raw_response.get_lien_theft(vin, request_options=request_options))

    @property
    def with_raw_response(self) -> LienTheftWithRawResponse:
        return self._with_raw_response


class AsyncLienTheft:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLienTheftWithRawResponse(client, server, auth)

    async def get_lien_theft(
        self, vin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1LienTheftResponse:
        """Check a VIN for active lien and theft records (US).

        Args:
            vin: The 17 character long vehicle identification number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lien/theft data retrieved.

        Raises:
            ApiError: Missing or invalid VIN. Missing API key, unknown/disabled API key, or inactive account. No lien or
                theft data found for this VIN. API usage limit exceeded for the current billing period. ``error`` is
                ``Error | UsageLimitError | RawError``."""
        return unwrap(await self._with_raw_response.get_lien_theft(vin, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncLienTheftWithRawResponse:
        return self._with_raw_response


class LienTheftWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_lien_theft(
        self, vin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1LienTheftResponse, GetLienTheftErrorBody]:
        """Check a VIN for active lien and theft records (US).

        Args:
            vin: The 17 character long vehicle identification number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/lien-theft"),
            query_params=[param[str]("vin", vin)],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[V1LienTheftResponse],
            error_mapper=get_lien_theft_error_mapper,
            request_options=request_options,
        )


class AsyncLienTheftWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_lien_theft(
        self, vin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1LienTheftResponse, GetLienTheftErrorBody]:
        """Check a VIN for active lien and theft records (US).

        Args:
            vin: The 17 character long vehicle identification number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/lien-theft"),
            query_params=[param[str]("vin", vin)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[V1LienTheftResponse],
            error_mapper=get_lien_theft_error_mapper,
            request_options=request_options,
        )
