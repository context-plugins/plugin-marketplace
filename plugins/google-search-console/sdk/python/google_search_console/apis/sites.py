from __future__ import annotations

from uuid import UUID, uuid4

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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_decoder,
    param,
    unwrap,
)
from ..errors.webmasters_sites_add_error import WebmastersSitesAddErrorBody, webmasters_sites_add_error_mapper
from ..errors.webmasters_sites_delete_error import WebmastersSitesDeleteErrorBody, webmasters_sites_delete_error_mapper
from ..errors.webmasters_sites_get_error import WebmastersSitesGetErrorBody, webmasters_sites_get_error_mapper
from ..errors.webmasters_sites_list_error import WebmastersSitesListErrorBody, webmasters_sites_list_error_mapper
from ..models.sites_list_response import SitesListResponse
from ..models.wmx_site import WmxSite
from ..server.server import Server


class Sites:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SitesWithRawResponse(client, server, auth)

    def webmasters_sites_add(self, site_url: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Adds a site to the set of the user's sites in Search Console.

        Args:
            site_url: The URL of the site to add.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(self._with_raw_response.webmasters_sites_add(site_url, request_options=request_options))

    def webmasters_sites_delete(self, site_url: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Removes a site from the set of the user's Search Console sites.

        Args:
            site_url: The URI of the property as defined in Search Console. **Examples:** ``http://www.example.com/`` or
                ``sc-domain:example.com``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(self._with_raw_response.webmasters_sites_delete(site_url, request_options=request_options))

    def webmasters_sites_get(self, site_url: str, *, request_options: RequestOptionsOrDict | None = None) -> WmxSite:
        """Retrieves information about specific site.

        Args:
            site_url: The URI of the property as defined in Search Console. **Examples:** ``http://www.example.com/`` or
                ``sc-domain:example.com``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(self._with_raw_response.webmasters_sites_get(site_url, request_options=request_options))

    def webmasters_sites_list(self, *, request_options: RequestOptionsOrDict | None = None) -> SitesListResponse:
        """Lists the user's Search Console sites.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(self._with_raw_response.webmasters_sites_list(request_options=request_options))

    @property
    def with_raw_response(self) -> SitesWithRawResponse:
        return self._with_raw_response


class AsyncSites:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSitesWithRawResponse(client, server, auth)

    async def webmasters_sites_add(
        self, site_url: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Adds a site to the set of the user's sites in Search Console.

        Args:
            site_url: The URL of the site to add.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(await self._with_raw_response.webmasters_sites_add(site_url, request_options=request_options))

    async def webmasters_sites_delete(
        self, site_url: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Removes a site from the set of the user's Search Console sites.

        Args:
            site_url: The URI of the property as defined in Search Console. **Examples:** ``http://www.example.com/`` or
                ``sc-domain:example.com``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(await self._with_raw_response.webmasters_sites_delete(site_url, request_options=request_options))

    async def webmasters_sites_get(
        self, site_url: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WmxSite:
        """Retrieves information about specific site.

        Args:
            site_url: The URI of the property as defined in Search Console. **Examples:** ``http://www.example.com/`` or
                ``sc-domain:example.com``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(await self._with_raw_response.webmasters_sites_get(site_url, request_options=request_options))

    async def webmasters_sites_list(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SitesListResponse:
        """Lists the user's Search Console sites.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(await self._with_raw_response.webmasters_sites_list(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSitesWithRawResponse:
        return self._with_raw_response


class SitesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def webmasters_sites_add(
        self, site_url: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, WebmastersSitesAddErrorBody]:
        """Adds a site to the set of the user's sites in Search Console.

        Args:
            site_url: The URL of the site to add.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}"),
            path_params=[param[str]("siteUrl", site_url)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=empty_response,
            error_mapper=webmasters_sites_add_error_mapper,
            request_options=request_options,
        )

    def webmasters_sites_delete(
        self, site_url: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, WebmastersSitesDeleteErrorBody]:
        """Removes a site from the set of the user's Search Console sites.

        Args:
            site_url: The URI of the property as defined in Search Console. **Examples:** ``http://www.example.com/`` or
                ``sc-domain:example.com``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}"),
            path_params=[param[str]("siteUrl", site_url)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=empty_response,
            error_mapper=webmasters_sites_delete_error_mapper,
            request_options=request_options,
        )

    def webmasters_sites_get(
        self, site_url: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WmxSite, WebmastersSitesGetErrorBody]:
        """Retrieves information about specific site.

        Args:
            site_url: The URI of the property as defined in Search Console. **Examples:** ``http://www.example.com/`` or
                ``sc-domain:example.com``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}"),
            path_params=[param[str]("siteUrl", site_url)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[WmxSite],
            error_mapper=webmasters_sites_get_error_mapper,
            request_options=request_options,
        )

    def webmasters_sites_list(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SitesListResponse, WebmastersSitesListErrorBody]:
        """Lists the user's Search Console sites.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webmasters/v3/sites"),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[SitesListResponse],
            error_mapper=webmasters_sites_list_error_mapper,
            request_options=request_options,
        )


class AsyncSitesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def webmasters_sites_add(
        self, site_url: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, WebmastersSitesAddErrorBody]:
        """Adds a site to the set of the user's sites in Search Console.

        Args:
            site_url: The URL of the site to add.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}"),
            path_params=[param[str]("siteUrl", site_url)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=webmasters_sites_add_error_mapper,
            request_options=request_options,
        )

    async def webmasters_sites_delete(
        self, site_url: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, WebmastersSitesDeleteErrorBody]:
        """Removes a site from the set of the user's Search Console sites.

        Args:
            site_url: The URI of the property as defined in Search Console. **Examples:** ``http://www.example.com/`` or
                ``sc-domain:example.com``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}"),
            path_params=[param[str]("siteUrl", site_url)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=webmasters_sites_delete_error_mapper,
            request_options=request_options,
        )

    async def webmasters_sites_get(
        self, site_url: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WmxSite, WebmastersSitesGetErrorBody]:
        """Retrieves information about specific site.

        Args:
            site_url: The URI of the property as defined in Search Console. **Examples:** ``http://www.example.com/`` or
                ``sc-domain:example.com``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}"),
            path_params=[param[str]("siteUrl", site_url)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[WmxSite],
            error_mapper=webmasters_sites_get_error_mapper,
            request_options=request_options,
        )

    async def webmasters_sites_list(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SitesListResponse, WebmastersSitesListErrorBody]:
        """Lists the user's Search Console sites.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webmasters/v3/sites"),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[SitesListResponse],
            error_mapper=webmasters_sites_list_error_mapper,
            request_options=request_options,
        )
