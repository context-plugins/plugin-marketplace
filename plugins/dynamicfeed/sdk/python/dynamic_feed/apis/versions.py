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
from ..errors.versions_versions_get_error import VersionsVersionsGetErrorBody, versions_versions_get_error_mapper
from ..server.server import Server


class Versions:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = VersionsWithRawResponse(client, server)

    def versions_versions_get(
        self,
        *,
        product: str | None = None,
        q: str | None = None,
        category: str | None = None,
        only_supported: bool | None = None,
        only_lts: bool | None = None,
        limit: int | None = 100,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Latest stable versions & end-of-life dates for languages, runtimes, frameworks, databases & OSes. Answers
        'what's the latest X?' and 'is version Y still supported?'. Each row has a ``status``
        (supported/nearing-eol/end-of-life) + provenance. (Requires API key.)

        Args:
            product: exact product, e.g. python, nodejs, postgresql
            q: match a product name
            category: language | runtime | framework | database | os | tool
            only_supported: exclude end-of-life release lines
            only_lts: only long-term-support lines
            limit: Value sent with the request.
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
            self._with_raw_response.versions_versions_get(
                product=product,
                q=q,
                category=category,
                only_supported=only_supported,
                only_lts=only_lts,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> VersionsWithRawResponse:
        return self._with_raw_response


class AsyncVersions:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncVersionsWithRawResponse(client, server)

    async def versions_versions_get(
        self,
        *,
        product: str | None = None,
        q: str | None = None,
        category: str | None = None,
        only_supported: bool | None = None,
        only_lts: bool | None = None,
        limit: int | None = 100,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Latest stable versions & end-of-life dates for languages, runtimes, frameworks, databases & OSes. Answers
        'what's the latest X?' and 'is version Y still supported?'. Each row has a ``status``
        (supported/nearing-eol/end-of-life) + provenance. (Requires API key.)

        Args:
            product: exact product, e.g. python, nodejs, postgresql
            q: match a product name
            category: language | runtime | framework | database | os | tool
            only_supported: exclude end-of-life release lines
            only_lts: only long-term-support lines
            limit: Value sent with the request.
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
            await self._with_raw_response.versions_versions_get(
                product=product,
                q=q,
                category=category,
                only_supported=only_supported,
                only_lts=only_lts,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVersionsWithRawResponse:
        return self._with_raw_response


class VersionsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def versions_versions_get(
        self,
        *,
        product: str | None = None,
        q: str | None = None,
        category: str | None = None,
        only_supported: bool | None = None,
        only_lts: bool | None = None,
        limit: int | None = 100,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, VersionsVersionsGetErrorBody]:
        """Latest stable versions & end-of-life dates for languages, runtimes, frameworks, databases & OSes. Answers
        'what's the latest X?' and 'is version Y still supported?'. Each row has a ``status``
        (supported/nearing-eol/end-of-life) + provenance. (Requires API key.)

        Args:
            product: exact product, e.g. python, nodejs, postgresql
            q: match a product name
            category: language | runtime | framework | database | os | tool
            only_supported: exclude end-of-life release lines
            only_lts: only long-term-support lines
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/versions"),
            query_params=[
                param[str | None]("product", product),
                param[str | None]("q", q),
                param[str | None]("category", category),
                param[bool | None]("only_supported", only_supported),
                param[bool | None]("only_lts", only_lts),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=versions_versions_get_error_mapper,
            request_options=request_options,
        )


class AsyncVersionsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def versions_versions_get(
        self,
        *,
        product: str | None = None,
        q: str | None = None,
        category: str | None = None,
        only_supported: bool | None = None,
        only_lts: bool | None = None,
        limit: int | None = 100,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, VersionsVersionsGetErrorBody]:
        """Latest stable versions & end-of-life dates for languages, runtimes, frameworks, databases & OSes. Answers
        'what's the latest X?' and 'is version Y still supported?'. Each row has a ``status``
        (supported/nearing-eol/end-of-life) + provenance. (Requires API key.)

        Args:
            product: exact product, e.g. python, nodejs, postgresql
            q: match a product name
            category: language | runtime | framework | database | os | tool
            only_supported: exclude end-of-life release lines
            only_lts: only long-term-support lines
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/versions"),
            query_params=[
                param[str | None]("product", product),
                param[str | None]("q", q),
                param[str | None]("category", category),
                param[bool | None]("only_supported", only_supported),
                param[bool | None]("only_lts", only_lts),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=versions_versions_get_error_mapper,
            request_options=request_options,
        )
