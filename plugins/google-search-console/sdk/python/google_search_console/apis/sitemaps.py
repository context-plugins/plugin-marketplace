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
from ..errors.webmasters_sitemaps_delete_error import (
    WebmastersSitemapsDeleteErrorBody,
    webmasters_sitemaps_delete_error_mapper,
)
from ..errors.webmasters_sitemaps_get_error import WebmastersSitemapsGetErrorBody, webmasters_sitemaps_get_error_mapper
from ..errors.webmasters_sitemaps_list_error import (
    WebmastersSitemapsListErrorBody,
    webmasters_sitemaps_list_error_mapper,
)
from ..errors.webmasters_sitemaps_submit_error import (
    WebmastersSitemapsSubmitErrorBody,
    webmasters_sitemaps_submit_error_mapper,
)
from ..models.sitemaps_list_response import SitemapsListResponse
from ..models.wmx_sitemap import WmxSitemap
from ..server.server import Server


class Sitemaps:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SitemapsWithRawResponse(client, server, auth)

    def webmasters_sitemaps_delete(
        self, site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that
        were previously crawled in the deleted sitemap.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            feedpath: The URL of the actual sitemap. For example: ``http://www.example.com/sitemap.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.webmasters_sitemaps_delete(site_url, feedpath, request_options=request_options)
        )

    def webmasters_sitemaps_get(
        self, site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WmxSitemap:
        """Retrieves information about a specific sitemap.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            feedpath: The URL of the actual sitemap. For example: ``http://www.example.com/sitemap.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.webmasters_sitemaps_get(site_url, feedpath, request_options=request_options)
        )

    def webmasters_sitemaps_list(
        self, site_url: str, *, sitemap_index: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> SitemapsListResponse:
        """Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if
        ``sitemapIndex`` is specified in the request).

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            sitemap_index: A URL of a site's sitemap index. For example: ``http://www.example.com/sitemapindex.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.webmasters_sitemaps_list(
                site_url, sitemap_index=sitemap_index, request_options=request_options
            ),
        )

    def webmasters_sitemaps_submit(
        self, site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Submits a sitemap for a site.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            feedpath: The URL of the actual sitemap. For example: ``http://www.example.com/sitemap.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.webmasters_sitemaps_submit(site_url, feedpath, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SitemapsWithRawResponse:
        return self._with_raw_response


class AsyncSitemaps:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSitemapsWithRawResponse(client, server, auth)

    async def webmasters_sitemaps_delete(
        self, site_url: str, feedpath: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that
        were previously crawled in the deleted sitemap.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            feedpath: The URL of the actual sitemap. For example: ``http://www.example.com/sitemap.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.webmasters_sitemaps_delete(
                site_url, feedpath, request_options=request_options
            ),
        )

    async def webmasters_sitemaps_get(
        self, site_url: str, feedpath: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WmxSitemap:
        """Retrieves information about a specific sitemap.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            feedpath: The URL of the actual sitemap. For example: ``http://www.example.com/sitemap.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.webmasters_sitemaps_get(site_url, feedpath, request_options=request_options)
        )

    async def webmasters_sitemaps_list(
        self,
        site_url: str,
        *,
        sitemap_index: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SitemapsListResponse:
        """Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if
        ``sitemapIndex`` is specified in the request).

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            sitemap_index: A URL of a site's sitemap index. For example: ``http://www.example.com/sitemapindex.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.webmasters_sitemaps_list(
                site_url, sitemap_index=sitemap_index, request_options=request_options
            ),
        )

    async def webmasters_sitemaps_submit(
        self, site_url: str, feedpath: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Submits a sitemap for a site.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            feedpath: The URL of the actual sitemap. For example: ``http://www.example.com/sitemap.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.webmasters_sitemaps_submit(
                site_url, feedpath, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSitemapsWithRawResponse:
        return self._with_raw_response


class SitemapsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def webmasters_sitemaps_delete(
        self, site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, WebmastersSitemapsDeleteErrorBody]:
        """Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that
        were previously crawled in the deleted sitemap.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            feedpath: The URL of the actual sitemap. For example: ``http://www.example.com/sitemap.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}"),
            path_params=[param[str]("siteUrl", site_url), param[str]("feedpath", feedpath)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=empty_response,
            error_mapper=webmasters_sitemaps_delete_error_mapper,
            request_options=request_options,
        )

    def webmasters_sitemaps_get(
        self, site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WmxSitemap, WebmastersSitemapsGetErrorBody]:
        """Retrieves information about a specific sitemap.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            feedpath: The URL of the actual sitemap. For example: ``http://www.example.com/sitemap.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}"),
            path_params=[param[str]("siteUrl", site_url), param[str]("feedpath", feedpath)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[WmxSitemap],
            error_mapper=webmasters_sitemaps_get_error_mapper,
            request_options=request_options,
        )

    def webmasters_sitemaps_list(
        self, site_url: str, *, sitemap_index: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SitemapsListResponse, WebmastersSitemapsListErrorBody]:
        """Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if
        ``sitemapIndex`` is specified in the request).

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            sitemap_index: A URL of a site's sitemap index. For example: ``http://www.example.com/sitemapindex.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}/sitemaps"),
            path_params=[param[str]("siteUrl", site_url)],
            query_params=[param[str | None]("sitemapIndex", sitemap_index)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[SitemapsListResponse],
            error_mapper=webmasters_sitemaps_list_error_mapper,
            request_options=request_options,
        )

    def webmasters_sitemaps_submit(
        self, site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, WebmastersSitemapsSubmitErrorBody]:
        """Submits a sitemap for a site.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            feedpath: The URL of the actual sitemap. For example: ``http://www.example.com/sitemap.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}"),
            path_params=[param[str]("siteUrl", site_url), param[str]("feedpath", feedpath)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=empty_response,
            error_mapper=webmasters_sitemaps_submit_error_mapper,
            request_options=request_options,
        )


class AsyncSitemapsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def webmasters_sitemaps_delete(
        self, site_url: str, feedpath: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, WebmastersSitemapsDeleteErrorBody]:
        """Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that
        were previously crawled in the deleted sitemap.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            feedpath: The URL of the actual sitemap. For example: ``http://www.example.com/sitemap.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}"),
            path_params=[param[str]("siteUrl", site_url), param[str]("feedpath", feedpath)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=webmasters_sitemaps_delete_error_mapper,
            request_options=request_options,
        )

    async def webmasters_sitemaps_get(
        self, site_url: str, feedpath: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WmxSitemap, WebmastersSitemapsGetErrorBody]:
        """Retrieves information about a specific sitemap.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            feedpath: The URL of the actual sitemap. For example: ``http://www.example.com/sitemap.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}"),
            path_params=[param[str]("siteUrl", site_url), param[str]("feedpath", feedpath)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[WmxSitemap],
            error_mapper=webmasters_sitemaps_get_error_mapper,
            request_options=request_options,
        )

    async def webmasters_sitemaps_list(
        self,
        site_url: str,
        *,
        sitemap_index: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SitemapsListResponse, WebmastersSitemapsListErrorBody]:
        """Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if
        ``sitemapIndex`` is specified in the request).

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            sitemap_index: A URL of a site's sitemap index. For example: ``http://www.example.com/sitemapindex.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}/sitemaps"),
            path_params=[param[str]("siteUrl", site_url)],
            query_params=[param[str | None]("sitemapIndex", sitemap_index)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[SitemapsListResponse],
            error_mapper=webmasters_sitemaps_list_error_mapper,
            request_options=request_options,
        )

    async def webmasters_sitemaps_submit(
        self, site_url: str, feedpath: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, WebmastersSitemapsSubmitErrorBody]:
        """Submits a sitemap for a site.

        Args:
            site_url: The site's URL, including protocol. For example: ``http://www.example.com/``.
            feedpath: The URL of the actual sitemap. For example: ``http://www.example.com/sitemap.xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}"),
            path_params=[param[str]("siteUrl", site_url), param[str]("feedpath", feedpath)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=webmasters_sitemaps_submit_error_mapper,
            request_options=request_options,
        )
