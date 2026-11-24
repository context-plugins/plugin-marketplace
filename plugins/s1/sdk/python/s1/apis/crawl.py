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
from ..errors.crawl_error import CrawlErrorBody, crawl_error_mapper
from ..errors.deepcrawl_error import DeepcrawlErrorBody, deepcrawl_error_mapper
from ..errors.deepcrawl_status_error import DeepcrawlStatusErrorBody, deepcrawl_status_error_mapper
from ..errors.extract_error import ExtractErrorBody, extract_error_mapper
from ..errors.sitemap_error import SitemapErrorBody, sitemap_error_mapper
from ..models.deepcrawl_accepted_response import DeepcrawlAcceptedResponse
from ..models.deepcrawl_request import DeepcrawlRequest, DeepcrawlRequestDict
from ..models.deepcrawl_status_response import DeepcrawlStatusResponse
from ..models.extract_request import ExtractRequest, ExtractRequestDict
from ..models.extract_response import ExtractResponse
from ..models.sitemap_request import SitemapRequest, SitemapRequestDict
from ..models.sitemap_response import SitemapResponse
from ..models.unions.crawl_request1 import CrawlRequest1, CrawlRequest1Dict
from ..models.unions.crawl_response1 import CrawlResponse1
from ..server.server import Server


class Crawl:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CrawlWithRawResponse(client, server, auth)

    def crawl(
        self, body: CrawlRequest1 | CrawlRequest1Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> CrawlResponse1:
        """Fetch one public URL and return its readable title and body as clean text, with navigation, boilerplate, and
        scripts stripped. Use it on a URL the user supplied or one returned by POST /search. To ingest a whole site
        rather than a single page, use POST /deepcrawl. Send an array of request objects to crawl several URLs in one
        call: the response is an array containing only the URLs that succeeded, in no guaranteed order, so match items
        back to your input by ``crawlParameters.url``; failed URLs are omitted and not charged. ``enable_fallback`` is
        accepted as a snake_case alias of ``enableFallback``. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Not Found Gone Validation Error Too Many Requests
                Internal Server Error Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.crawl(body, request_options=request_options))

    def deepcrawl(
        self, body: DeepcrawlRequest | DeepcrawlRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> DeepcrawlAcceptedResponse:
        """Start an asynchronous crawl of an entire site and package the pages as documents. Use it for whole-site
        ingestion; a single page is POST /crawl. The call returns a task id immediately rather than the result — poll
        GET /deepcrawl/status/{taskId} until the task reports completion. Costs 20 credits per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Validation Error Too Many Requests Internal Server Error
                Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.deepcrawl(body, request_options=request_options))

    def deepcrawl_status(
        self, task_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DeepcrawlStatusResponse:
        """Poll a deepcrawl task started by POST /deepcrawl. Returns the task's current state and, once it finishes,
        where to retrieve the packaged result. Safe to call repeatedly. Free to call.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Not Found Internal Server Error Bad Gateway ``error`` is ``ApiErrorModel |
                RawError``."""
        return unwrap(self._with_raw_response.deepcrawl_status(task_id, request_options=request_options))

    def extract(
        self, body: ExtractRequest | ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ExtractResponse:
        """Pull structured data out of a single webpage using a natural-language prompt and a JSON schema you supply.
        Use it when you need specific fields — prices, specifications, contact details — rather than the whole document;
        when you want the full text, use POST /crawl. Costs 10 credits per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Validation Error Too Many Requests Internal Server Error
                Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.extract(body, request_options=request_options))

    def sitemap(
        self, body: SitemapRequest | SitemapRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SitemapResponse:
        """Discover the public URLs of a site when you need to know which pages exist before fetching any of them —
        scoping a crawl, auditing coverage, or locating a section. With the default ``type: "sitemap"`` this reads the
        site's own sitemap: ``Sitemap:`` directives in robots.txt first, then the conventional paths, following sitemap
        index files and gzipped sitemaps, and returns the URLs it declares for the requested host. A site that publishes
        no sitemap falls back to the links found on the given page. Use ``type: "all"`` to skip the sitemap and get
        every link on that one page instead, including links to other hosts. Neither mode fetches page content. Costs 1
        credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Validation Error Too Many Requests Internal Server Error
                Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.sitemap(body, request_options=request_options))

    @property
    def with_raw_response(self) -> CrawlWithRawResponse:
        return self._with_raw_response


class AsyncCrawl:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCrawlWithRawResponse(client, server, auth)

    async def crawl(
        self, body: CrawlRequest1 | CrawlRequest1Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CrawlResponse1:
        """Fetch one public URL and return its readable title and body as clean text, with navigation, boilerplate, and
        scripts stripped. Use it on a URL the user supplied or one returned by POST /search. To ingest a whole site
        rather than a single page, use POST /deepcrawl. Send an array of request objects to crawl several URLs in one
        call: the response is an array containing only the URLs that succeeded, in no guaranteed order, so match items
        back to your input by ``crawlParameters.url``; failed URLs are omitted and not charged. ``enable_fallback`` is
        accepted as a snake_case alias of ``enableFallback``. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Not Found Gone Validation Error Too Many Requests
                Internal Server Error Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.crawl(body, request_options=request_options))

    async def deepcrawl(
        self, body: DeepcrawlRequest | DeepcrawlRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DeepcrawlAcceptedResponse:
        """Start an asynchronous crawl of an entire site and package the pages as documents. Use it for whole-site
        ingestion; a single page is POST /crawl. The call returns a task id immediately rather than the result — poll
        GET /deepcrawl/status/{taskId} until the task reports completion. Costs 20 credits per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Validation Error Too Many Requests Internal Server Error
                Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.deepcrawl(body, request_options=request_options))

    async def deepcrawl_status(
        self, task_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DeepcrawlStatusResponse:
        """Poll a deepcrawl task started by POST /deepcrawl. Returns the task's current state and, once it finishes,
        where to retrieve the packaged result. Safe to call repeatedly. Free to call.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Not Found Internal Server Error Bad Gateway ``error`` is ``ApiErrorModel |
                RawError``."""
        return unwrap(await self._with_raw_response.deepcrawl_status(task_id, request_options=request_options))

    async def extract(
        self, body: ExtractRequest | ExtractRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ExtractResponse:
        """Pull structured data out of a single webpage using a natural-language prompt and a JSON schema you supply.
        Use it when you need specific fields — prices, specifications, contact details — rather than the whole document;
        when you want the full text, use POST /crawl. Costs 10 credits per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Validation Error Too Many Requests Internal Server Error
                Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.extract(body, request_options=request_options))

    async def sitemap(
        self, body: SitemapRequest | SitemapRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SitemapResponse:
        """Discover the public URLs of a site when you need to know which pages exist before fetching any of them —
        scoping a crawl, auditing coverage, or locating a section. With the default ``type: "sitemap"`` this reads the
        site's own sitemap: ``Sitemap:`` directives in robots.txt first, then the conventional paths, following sitemap
        index files and gzipped sitemaps, and returns the URLs it declares for the requested host. A site that publishes
        no sitemap falls back to the links found on the given page. Use ``type: "all"`` to skip the sitemap and get
        every link on that one page instead, including links to other hosts. Neither mode fetches page content. Costs 1
        credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Validation Error Too Many Requests Internal Server Error
                Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.sitemap(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCrawlWithRawResponse:
        return self._with_raw_response


class CrawlWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def crawl(
        self, body: CrawlRequest1 | CrawlRequest1Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CrawlResponse1, CrawlErrorBody]:
        """Fetch one public URL and return its readable title and body as clean text, with navigation, boilerplate, and
        scripts stripped. Use it on a URL the user supplied or one returned by POST /search. To ingest a whole site
        rather than a single page, use POST /deepcrawl. Send an array of request objects to crawl several URLs in one
        call: the response is an array containing only the URLs that succeeded, in no guaranteed order, so match items
        back to your input by ``crawlParameters.url``; failed URLs are omitted and not charged. ``enable_fallback`` is
        accepted as a snake_case alias of ``enableFallback``. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/crawl"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CrawlRequest1 | CrawlRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CrawlResponse1],
            error_mapper=crawl_error_mapper,
            request_options=request_options,
        )

    def deepcrawl(
        self, body: DeepcrawlRequest | DeepcrawlRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DeepcrawlAcceptedResponse, DeepcrawlErrorBody]:
        """Start an asynchronous crawl of an entire site and package the pages as documents. Use it for whole-site
        ingestion; a single page is POST /crawl. The call returns a task id immediately rather than the result — poll
        GET /deepcrawl/status/{taskId} until the task reports completion. Costs 20 credits per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/deepcrawl"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeepcrawlRequest | DeepcrawlRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DeepcrawlAcceptedResponse],
            error_mapper=deepcrawl_error_mapper,
            request_options=request_options,
        )

    def deepcrawl_status(
        self, task_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DeepcrawlStatusResponse, DeepcrawlStatusErrorBody]:
        """Poll a deepcrawl task started by POST /deepcrawl. Returns the task's current state and, once it finishes,
        where to retrieve the packaged result. Safe to call repeatedly. Free to call.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/deepcrawl/status/{taskId}"),
            path_params=[param[str]("taskId", task_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DeepcrawlStatusResponse],
            error_mapper=deepcrawl_status_error_mapper,
            request_options=request_options,
        )

    def extract(
        self, body: ExtractRequest | ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ExtractResponse, ExtractErrorBody]:
        """Pull structured data out of a single webpage using a natural-language prompt and a JSON schema you supply.
        Use it when you need specific fields — prices, specifications, contact details — rather than the whole document;
        when you want the full text, use POST /crawl. Costs 10 credits per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/extract"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExtractRequest | ExtractRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ExtractResponse],
            error_mapper=extract_error_mapper,
            request_options=request_options,
        )

    def sitemap(
        self, body: SitemapRequest | SitemapRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SitemapResponse, SitemapErrorBody]:
        """Discover the public URLs of a site when you need to know which pages exist before fetching any of them —
        scoping a crawl, auditing coverage, or locating a section. With the default ``type: "sitemap"`` this reads the
        site's own sitemap: ``Sitemap:`` directives in robots.txt first, then the conventional paths, following sitemap
        index files and gzipped sitemaps, and returns the URLs it declares for the requested host. A site that publishes
        no sitemap falls back to the links found on the given page. Use ``type: "all"`` to skip the sitemap and get
        every link on that one page instead, including links to other hosts. Neither mode fetches page content. Costs 1
        credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sitemap"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SitemapRequest | SitemapRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SitemapResponse],
            error_mapper=sitemap_error_mapper,
            request_options=request_options,
        )


class AsyncCrawlWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def crawl(
        self, body: CrawlRequest1 | CrawlRequest1Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CrawlResponse1, CrawlErrorBody]:
        """Fetch one public URL and return its readable title and body as clean text, with navigation, boilerplate, and
        scripts stripped. Use it on a URL the user supplied or one returned by POST /search. To ingest a whole site
        rather than a single page, use POST /deepcrawl. Send an array of request objects to crawl several URLs in one
        call: the response is an array containing only the URLs that succeeded, in no guaranteed order, so match items
        back to your input by ``crawlParameters.url``; failed URLs are omitted and not charged. ``enable_fallback`` is
        accepted as a snake_case alias of ``enableFallback``. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/crawl"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CrawlRequest1 | CrawlRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CrawlResponse1],
            error_mapper=crawl_error_mapper,
            request_options=request_options,
        )

    async def deepcrawl(
        self, body: DeepcrawlRequest | DeepcrawlRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DeepcrawlAcceptedResponse, DeepcrawlErrorBody]:
        """Start an asynchronous crawl of an entire site and package the pages as documents. Use it for whole-site
        ingestion; a single page is POST /crawl. The call returns a task id immediately rather than the result — poll
        GET /deepcrawl/status/{taskId} until the task reports completion. Costs 20 credits per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/deepcrawl"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeepcrawlRequest | DeepcrawlRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DeepcrawlAcceptedResponse],
            error_mapper=deepcrawl_error_mapper,
            request_options=request_options,
        )

    async def deepcrawl_status(
        self, task_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DeepcrawlStatusResponse, DeepcrawlStatusErrorBody]:
        """Poll a deepcrawl task started by POST /deepcrawl. Returns the task's current state and, once it finishes,
        where to retrieve the packaged result. Safe to call repeatedly. Free to call.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/deepcrawl/status/{taskId}"),
            path_params=[param[str]("taskId", task_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DeepcrawlStatusResponse],
            error_mapper=deepcrawl_status_error_mapper,
            request_options=request_options,
        )

    async def extract(
        self, body: ExtractRequest | ExtractRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ExtractResponse, ExtractErrorBody]:
        """Pull structured data out of a single webpage using a natural-language prompt and a JSON schema you supply.
        Use it when you need specific fields — prices, specifications, contact details — rather than the whole document;
        when you want the full text, use POST /crawl. Costs 10 credits per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/extract"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExtractRequest | ExtractRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ExtractResponse],
            error_mapper=extract_error_mapper,
            request_options=request_options,
        )

    async def sitemap(
        self, body: SitemapRequest | SitemapRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SitemapResponse, SitemapErrorBody]:
        """Discover the public URLs of a site when you need to know which pages exist before fetching any of them —
        scoping a crawl, auditing coverage, or locating a section. With the default ``type: "sitemap"`` this reads the
        site's own sitemap: ``Sitemap:`` directives in robots.txt first, then the conventional paths, following sitemap
        index files and gzipped sitemaps, and returns the URLs it declares for the requested host. A site that publishes
        no sitemap falls back to the links found on the given page. Use ``type: "all"`` to skip the sitemap and get
        every link on that one page instead, including links to other hosts. Neither mode fetches page content. Costs 1
        credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sitemap"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SitemapRequest | SitemapRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SitemapResponse],
            error_mapper=sitemap_error_mapper,
            request_options=request_options,
        )
