from __future__ import annotations

from typing import Any

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.dns_ep_dns_get_error import DnsEpDnsGetErrorBody, dns_ep_dns_get_error_mapper
from ..errors.github_releases_ep_github_releases_get_error import (
    GithubReleasesEpGithubReleasesGetErrorBody,
    github_releases_ep_github_releases_get_error_mapper,
)
from ..errors.hacker_news_ep_hacker_news_get_error import (
    HackerNewsEpHackerNewsGetErrorBody,
    hacker_news_ep_hacker_news_get_error_mapper,
)
from ..server.server import Server


class Dev:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = DevWithRawResponse(client, server)

    def dns_ep_dns_get(
        self,
        name: str,
        *,
        type_: str | None = "A",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Live DNS records for a domain via Cloudflare DNS-over-HTTPS. (Requires API key.)

        Args:
            name: domain, e.g. example.com
            type_: A | AAAA | MX | TXT | NS | CNAME | SOA | CAA
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.dns_ep_dns_get(
                name,
                type_=type_,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def github_releases_ep_github_releases_get(
        self,
        repo: str,
        *,
        limit: int | None = 5,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Latest GitHub releases for a repo (version, date, author, link) via the public atom feed — keyless source, no
        rate limit. (Requires API key on REST; the MCP tool is keyless.)

        Args:
            repo: owner/name, e.g. openai/openai-python
            limit: max releases (1-25)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.github_releases_ep_github_releases_get(
                repo,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def hacker_news_ep_hacker_news_get(
        self,
        *,
        query: str | None = "",
        kind: str | None = "top",
        limit: int | None = 10,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Live Hacker News stories — the tech/AI attention layer. Optional case-insensitive title filter. (Requires API
        key.)

        Args:
            query: Value sent with the request.
            kind: top | new | best
            limit: max stories (1-30)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.hacker_news_ep_hacker_news_get(
                query=query,
                kind=kind,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> DevWithRawResponse:
        return self._with_raw_response


class AsyncDev:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncDevWithRawResponse(client, server)

    async def dns_ep_dns_get(
        self,
        name: str,
        *,
        type_: str | None = "A",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Live DNS records for a domain via Cloudflare DNS-over-HTTPS. (Requires API key.)

        Args:
            name: domain, e.g. example.com
            type_: A | AAAA | MX | TXT | NS | CNAME | SOA | CAA
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.dns_ep_dns_get(
                name,
                type_=type_,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def github_releases_ep_github_releases_get(
        self,
        repo: str,
        *,
        limit: int | None = 5,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Latest GitHub releases for a repo (version, date, author, link) via the public atom feed — keyless source, no
        rate limit. (Requires API key on REST; the MCP tool is keyless.)

        Args:
            repo: owner/name, e.g. openai/openai-python
            limit: max releases (1-25)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.github_releases_ep_github_releases_get(
                repo,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def hacker_news_ep_hacker_news_get(
        self,
        *,
        query: str | None = "",
        kind: str | None = "top",
        limit: int | None = 10,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Live Hacker News stories — the tech/AI attention layer. Optional case-insensitive title filter. (Requires API
        key.)

        Args:
            query: Value sent with the request.
            kind: top | new | best
            limit: max stories (1-30)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.hacker_news_ep_hacker_news_get(
                query=query,
                kind=kind,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDevWithRawResponse:
        return self._with_raw_response


class DevWithRawResponse(BaseRawResponse[RawClient, Server]):
    def dns_ep_dns_get(
        self,
        name: str,
        *,
        type_: str | None = "A",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DnsEpDnsGetErrorBody]:
        """Live DNS records for a domain via Cloudflare DNS-over-HTTPS. (Requires API key.)

        Args:
            name: domain, e.g. example.com
            type_: A | AAAA | MX | TXT | NS | CNAME | SOA | CAA
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dns"),
            query_params=[param[str]("name", name), param[str | None]("type", type_)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=dns_ep_dns_get_error_mapper,
            request_options=request_options,
        )

    def github_releases_ep_github_releases_get(
        self,
        repo: str,
        *,
        limit: int | None = 5,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GithubReleasesEpGithubReleasesGetErrorBody]:
        """Latest GitHub releases for a repo (version, date, author, link) via the public atom feed — keyless source, no
        rate limit. (Requires API key on REST; the MCP tool is keyless.)

        Args:
            repo: owner/name, e.g. openai/openai-python
            limit: max releases (1-25)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/github-releases"),
            query_params=[param[str]("repo", repo), param[int | None]("limit", limit)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=github_releases_ep_github_releases_get_error_mapper,
            request_options=request_options,
        )

    def hacker_news_ep_hacker_news_get(
        self,
        *,
        query: str | None = "",
        kind: str | None = "top",
        limit: int | None = 10,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, HackerNewsEpHackerNewsGetErrorBody]:
        """Live Hacker News stories — the tech/AI attention layer. Optional case-insensitive title filter. (Requires API
        key.)

        Args:
            query: Value sent with the request.
            kind: top | new | best
            limit: max stories (1-30)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/hacker-news"),
            query_params=[
                param[str | None]("query", query), param[str | None]("kind", kind), param[int | None]("limit", limit)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=hacker_news_ep_hacker_news_get_error_mapper,
            request_options=request_options,
        )


class AsyncDevWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def dns_ep_dns_get(
        self,
        name: str,
        *,
        type_: str | None = "A",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DnsEpDnsGetErrorBody]:
        """Live DNS records for a domain via Cloudflare DNS-over-HTTPS. (Requires API key.)

        Args:
            name: domain, e.g. example.com
            type_: A | AAAA | MX | TXT | NS | CNAME | SOA | CAA
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dns"),
            query_params=[param[str]("name", name), param[str | None]("type", type_)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=dns_ep_dns_get_error_mapper,
            request_options=request_options,
        )

    async def github_releases_ep_github_releases_get(
        self,
        repo: str,
        *,
        limit: int | None = 5,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GithubReleasesEpGithubReleasesGetErrorBody]:
        """Latest GitHub releases for a repo (version, date, author, link) via the public atom feed — keyless source, no
        rate limit. (Requires API key on REST; the MCP tool is keyless.)

        Args:
            repo: owner/name, e.g. openai/openai-python
            limit: max releases (1-25)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/github-releases"),
            query_params=[param[str]("repo", repo), param[int | None]("limit", limit)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=github_releases_ep_github_releases_get_error_mapper,
            request_options=request_options,
        )

    async def hacker_news_ep_hacker_news_get(
        self,
        *,
        query: str | None = "",
        kind: str | None = "top",
        limit: int | None = 10,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, HackerNewsEpHackerNewsGetErrorBody]:
        """Live Hacker News stories — the tech/AI attention layer. Optional case-insensitive title filter. (Requires API
        key.)

        Args:
            query: Value sent with the request.
            kind: top | new | best
            limit: max stories (1-30)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/hacker-news"),
            query_params=[
                param[str | None]("query", query), param[str | None]("kind", kind), param[int | None]("limit", limit)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=hacker_news_ep_hacker_news_get_error_mapper,
            request_options=request_options,
        )
