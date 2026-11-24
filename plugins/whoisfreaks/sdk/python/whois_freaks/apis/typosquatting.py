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
    param,
    unwrap,
)
from ..errors.typosquatting_error import TyposquattingErrorBody, typosquatting_error_mapper
from ..models.typosquatting_response import TyposquattingResponse
from ..server.server import Server


class Typosquatting:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TyposquattingWithRawResponse(client, server, auth)

    def typosquatting(
        self,
        *,
        keyword: str | None = None,
        pattern: str | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TyposquattingResponse:
        """Find typo variants of a brand. 5 credits per page.

        Args:
            keyword: Value sent with the request.
            pattern: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Invalid API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.typosquatting(
                keyword=keyword, pattern=pattern, page_token=page_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TyposquattingWithRawResponse:
        return self._with_raw_response


class AsyncTyposquatting:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTyposquattingWithRawResponse(client, server, auth)

    async def typosquatting(
        self,
        *,
        keyword: str | None = None,
        pattern: str | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TyposquattingResponse:
        """Find typo variants of a brand. 5 credits per page.

        Args:
            keyword: Value sent with the request.
            pattern: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Invalid API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.typosquatting(
                keyword=keyword, pattern=pattern, page_token=page_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTyposquattingWithRawResponse:
        return self._with_raw_response


class TyposquattingWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def typosquatting(
        self,
        *,
        keyword: str | None = None,
        pattern: str | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TyposquattingResponse, TyposquattingErrorBody]:
        """Find typo variants of a brand. 5 credits per page.

        Args:
            keyword: Value sent with the request.
            pattern: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.0/domain/typos"),
            query_params=[
                param[str | None]("keyword", keyword),
                param[str | None]("pattern", pattern),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TyposquattingResponse],
            error_mapper=typosquatting_error_mapper,
            request_options=request_options,
        )


class AsyncTyposquattingWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def typosquatting(
        self,
        *,
        keyword: str | None = None,
        pattern: str | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TyposquattingResponse, TyposquattingErrorBody]:
        """Find typo variants of a brand. 5 credits per page.

        Args:
            keyword: Value sent with the request.
            pattern: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.0/domain/typos"),
            query_params=[
                param[str | None]("keyword", keyword),
                param[str | None]("pattern", pattern),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TyposquattingResponse],
            error_mapper=typosquatting_error_mapper,
            request_options=request_options,
        )
