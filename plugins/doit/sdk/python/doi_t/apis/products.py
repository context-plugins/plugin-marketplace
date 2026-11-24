from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
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
from ..errors.list_products_error import ListProductsErrorBody, list_products_error_mapper
from ..models.support_v1_metadata_products_response import SupportV1MetadataProductsResponse
from ..server.server import Server


class Products:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProductsWithRawResponse(client, server, auth)

    def list_products(
        self, *, platform: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> SupportV1MetadataProductsResponse:
        """Returns a list of all the available products of specific platforms.

        Args:
            platform: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of available products returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_products(platform=platform, request_options=request_options))

    @property
    def with_raw_response(self) -> ProductsWithRawResponse:
        return self._with_raw_response


class AsyncProducts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProductsWithRawResponse(client, server, auth)

    async def list_products(
        self, *, platform: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SupportV1MetadataProductsResponse:
        """Returns a list of all the available products of specific platforms.

        Args:
            platform: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of available products returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_products(platform=platform, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProductsWithRawResponse:
        return self._with_raw_response


class ProductsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_products(
        self, *, platform: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SupportV1MetadataProductsResponse, ListProductsErrorBody]:
        """Returns a list of all the available products of specific platforms.

        Args:
            platform: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/support/v1/metadata/products"),
            query_params=[param[str | None]("platform", platform)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[SupportV1MetadataProductsResponse],
            error_mapper=list_products_error_mapper,
            request_options=request_options,
        )


class AsyncProductsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_products(
        self, *, platform: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SupportV1MetadataProductsResponse, ListProductsErrorBody]:
        """Returns a list of all the available products of specific platforms.

        Args:
            platform: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/support/v1/metadata/products"),
            query_params=[param[str | None]("platform", platform)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[SupportV1MetadataProductsResponse],
            error_mapper=list_products_error_mapper,
            request_options=request_options,
        )
