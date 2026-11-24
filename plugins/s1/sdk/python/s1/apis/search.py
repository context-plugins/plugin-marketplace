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
from ..errors.ask_error import AskErrorBody, ask_error_mapper
from ..errors.news_error import NewsErrorBody, news_error_mapper
from ..errors.search_error import SearchErrorBody, search_error_mapper
from ..errors.trending_error import TrendingErrorBody, trending_error_mapper
from ..models.ask_request import AskRequest, AskRequestDict
from ..models.ask_response import AskResponse
from ..models.trending_request import TrendingRequest, TrendingRequestDict
from ..models.trending_response import TrendingResponse
from ..models.unions.news_request import NewsRequest, NewsRequestDict
from ..models.unions.news_response1 import NewsResponse1
from ..models.unions.search_request import SearchRequest, SearchRequestDict
from ..models.unions.search_response1 import SearchResponse1
from ..server.server import Server


class Search:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchWithRawResponse(client, server, auth)

    def ask(
        self, body: AskRequest | AskRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> AskResponse:
        """Agentic search. Describe what you are looking for in plain language and let a decision model (currently
        TypeSafe Jev) decide where to look. It picks up to five engines (web search, Hacker News, Reddit, GitHub, X,
        arXiv, Wikipedia, IMDb, WeChat, YouTube), rewrites the request into search keywords, infers a publication window
        from phrases such as "this week", searches the engines in parallel, and returns only the results judged
        relevant, merged and ranked, so agents read fewer off-topic results. The request takes only ``query``; engines,
        keywords, and the window are always chosen by the model, and the response reports them in ``intent``. Use POST
        /search instead when you already know the engine and keywords and want its raw ranking. Costs 5 credits per
        request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Too Many Requests Internal Server Error Bad Gateway
                ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.ask(body, request_options=request_options))

    def news(
        self, body: NewsRequest | NewsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> NewsResponse1:
        """Search recent news when the question is about events, announcements, or coverage rather than reference
        material. Returns articles from verified publishers with title, URL, snippet, ``published_date`` (ISO 8601, when
        known), and optional full page content, filterable by site, language, and time range. For questions that are not
        time-sensitive, prefer POST /search. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Validation Error Too Many Requests Internal Server Error
                Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.news(body, request_options=request_options))

    def search(
        self, body: SearchRequest | SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SearchResponse1:
        """Search the live public web when the answer depends on current information, sources, or research a model's
        training data cannot cover. Returns ranked results with id, title, URL, snippet, and ``published_date`` (ISO
        8601, when the engine exposes one) across 13+ engines, with optional images. Set ``crawl_results`` to pull the
        top N result pages in the same call — each crawled page is billed as an additional crawl — or pass a result URL
        to POST /crawl separately. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Validation Error Too Many Requests Internal Server Error
                Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.search(body, request_options=request_options))

    def trending(
        self, body: TrendingRequest | TrendingRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> TrendingResponse:
        """List what is currently popular on a supported platform, such as GitHub repositories or Hacker News stories,
        when the user asks what is trending or new right now. This reads a platform's own live ranking rather than
        performing a query — for topic searches use POST /search. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Validation Error Too Many Requests Internal Server Error
                Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.trending(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SearchWithRawResponse:
        return self._with_raw_response


class AsyncSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchWithRawResponse(client, server, auth)

    async def ask(
        self, body: AskRequest | AskRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AskResponse:
        """Agentic search. Describe what you are looking for in plain language and let a decision model (currently
        TypeSafe Jev) decide where to look. It picks up to five engines (web search, Hacker News, Reddit, GitHub, X,
        arXiv, Wikipedia, IMDb, WeChat, YouTube), rewrites the request into search keywords, infers a publication window
        from phrases such as "this week", searches the engines in parallel, and returns only the results judged
        relevant, merged and ranked, so agents read fewer off-topic results. The request takes only ``query``; engines,
        keywords, and the window are always chosen by the model, and the response reports them in ``intent``. Use POST
        /search instead when you already know the engine and keywords and want its raw ranking. Costs 5 credits per
        request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Too Many Requests Internal Server Error Bad Gateway
                ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.ask(body, request_options=request_options))

    async def news(
        self, body: NewsRequest | NewsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> NewsResponse1:
        """Search recent news when the question is about events, announcements, or coverage rather than reference
        material. Returns articles from verified publishers with title, URL, snippet, ``published_date`` (ISO 8601, when
        known), and optional full page content, filterable by site, language, and time range. For questions that are not
        time-sensitive, prefer POST /search. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Validation Error Too Many Requests Internal Server Error
                Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.news(body, request_options=request_options))

    async def search(
        self, body: SearchRequest | SearchRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SearchResponse1:
        """Search the live public web when the answer depends on current information, sources, or research a model's
        training data cannot cover. Returns ranked results with id, title, URL, snippet, and ``published_date`` (ISO
        8601, when the engine exposes one) across 13+ engines, with optional images. Set ``crawl_results`` to pull the
        top N result pages in the same call — each crawled page is billed as an additional crawl — or pass a result URL
        to POST /crawl separately. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Validation Error Too Many Requests Internal Server Error
                Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.search(body, request_options=request_options))

    async def trending(
        self, body: TrendingRequest | TrendingRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TrendingResponse:
        """List what is currently popular on a supported platform, such as GitHub repositories or Hacker News stories,
        when the user asks what is trending or new right now. This reads a platform's own live ranking rather than
        performing a query — for topic searches use POST /search. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Validation Error Too Many Requests Internal Server Error
                Bad Gateway ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.trending(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSearchWithRawResponse:
        return self._with_raw_response


class SearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def ask(
        self, body: AskRequest | AskRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AskResponse, AskErrorBody]:
        """Agentic search. Describe what you are looking for in plain language and let a decision model (currently
        TypeSafe Jev) decide where to look. It picks up to five engines (web search, Hacker News, Reddit, GitHub, X,
        arXiv, Wikipedia, IMDb, WeChat, YouTube), rewrites the request into search keywords, infers a publication window
        from phrases such as "this week", searches the engines in parallel, and returns only the results judged
        relevant, merged and ranked, so agents read fewer off-topic results. The request takes only ``query``; engines,
        keywords, and the window are always chosen by the model, and the response reports them in ``intent``. Use POST
        /search instead when you already know the engine and keywords and want its raw ranking. Costs 5 credits per
        request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ask"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AskRequest | AskRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AskResponse],
            error_mapper=ask_error_mapper,
            request_options=request_options,
        )

    def news(
        self, body: NewsRequest | NewsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[NewsResponse1, NewsErrorBody]:
        """Search recent news when the question is about events, announcements, or coverage rather than reference
        material. Returns articles from verified publishers with title, URL, snippet, ``published_date`` (ISO 8601, when
        known), and optional full page content, filterable by site, language, and time range. For questions that are not
        time-sensitive, prefer POST /search. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/news"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[NewsRequest | NewsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[NewsResponse1],
            error_mapper=news_error_mapper,
            request_options=request_options,
        )

    def search(
        self, body: SearchRequest | SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResponse1, SearchErrorBody]:
        """Search the live public web when the answer depends on current information, sources, or research a model's
        training data cannot cover. Returns ranked results with id, title, URL, snippet, and ``published_date`` (ISO
        8601, when the engine exposes one) across 13+ engines, with optional images. Set ``crawl_results`` to pull the
        top N result pages in the same call — each crawled page is billed as an additional crawl — or pass a result URL
        to POST /crawl separately. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchRequest | SearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SearchResponse1],
            error_mapper=search_error_mapper,
            request_options=request_options,
        )

    def trending(
        self, body: TrendingRequest | TrendingRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TrendingResponse, TrendingErrorBody]:
        """List what is currently popular on a supported platform, such as GitHub repositories or Hacker News stories,
        when the user asks what is trending or new right now. This reads a platform's own live ranking rather than
        performing a query — for topic searches use POST /search. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/trending"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TrendingRequest | TrendingRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TrendingResponse],
            error_mapper=trending_error_mapper,
            request_options=request_options,
        )


class AsyncSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def ask(
        self, body: AskRequest | AskRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AskResponse, AskErrorBody]:
        """Agentic search. Describe what you are looking for in plain language and let a decision model (currently
        TypeSafe Jev) decide where to look. It picks up to five engines (web search, Hacker News, Reddit, GitHub, X,
        arXiv, Wikipedia, IMDb, WeChat, YouTube), rewrites the request into search keywords, infers a publication window
        from phrases such as "this week", searches the engines in parallel, and returns only the results judged
        relevant, merged and ranked, so agents read fewer off-topic results. The request takes only ``query``; engines,
        keywords, and the window are always chosen by the model, and the response reports them in ``intent``. Use POST
        /search instead when you already know the engine and keywords and want its raw ranking. Costs 5 credits per
        request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ask"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AskRequest | AskRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AskResponse],
            error_mapper=ask_error_mapper,
            request_options=request_options,
        )

    async def news(
        self, body: NewsRequest | NewsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[NewsResponse1, NewsErrorBody]:
        """Search recent news when the question is about events, announcements, or coverage rather than reference
        material. Returns articles from verified publishers with title, URL, snippet, ``published_date`` (ISO 8601, when
        known), and optional full page content, filterable by site, language, and time range. For questions that are not
        time-sensitive, prefer POST /search. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/news"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[NewsRequest | NewsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[NewsResponse1],
            error_mapper=news_error_mapper,
            request_options=request_options,
        )

    async def search(
        self, body: SearchRequest | SearchRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResponse1, SearchErrorBody]:
        """Search the live public web when the answer depends on current information, sources, or research a model's
        training data cannot cover. Returns ranked results with id, title, URL, snippet, and ``published_date`` (ISO
        8601, when the engine exposes one) across 13+ engines, with optional images. Set ``crawl_results`` to pull the
        top N result pages in the same call — each crawled page is billed as an additional crawl — or pass a result URL
        to POST /crawl separately. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchRequest | SearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SearchResponse1],
            error_mapper=search_error_mapper,
            request_options=request_options,
        )

    async def trending(
        self, body: TrendingRequest | TrendingRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TrendingResponse, TrendingErrorBody]:
        """List what is currently popular on a supported platform, such as GitHub repositories or Hacker News stories,
        when the user asks what is trending or new right now. This reads a platform's own live ranking rather than
        performing a query — for topic searches use POST /search. Costs 1 credit per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/trending"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TrendingRequest | TrendingRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TrendingResponse],
            error_mapper=trending_error_mapper,
            request_options=request_options,
        )
