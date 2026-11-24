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
from ..errors.get_keyword_error import GetKeywordErrorBody, get_keyword_error_mapper
from ..errors.get_keywords_error import GetKeywordsErrorBody, get_keywords_error_mapper
from ..models.api_v2_keywords_response import ApiV2KeywordsResponse
from ..models.api_v2_keywords_response1 import ApiV2KeywordsResponse1
from ..server.server import Server


class Keywords:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = KeywordsWithRawResponse(client, server, auth)

    def get_keyword(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2KeywordsResponse:
        """Get a Keyword by its ID

        Args:
            id_: ID of the keyword you'd like to receive.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 ``error`` is ``ApiV2Keywords404Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_keyword(
                id_, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    def get_keywords(
        self, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV2KeywordsResponse1:
        """Get a list of all active keywords for a shop.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 ``error`` is ``ApiV2Keywords403Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_keywords(
                x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> KeywordsWithRawResponse:
        return self._with_raw_response


class AsyncKeywords:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncKeywordsWithRawResponse(client, server, auth)

    async def get_keyword(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2KeywordsResponse:
        """Get a Keyword by its ID

        Args:
            id_: ID of the keyword you'd like to receive.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 ``error`` is ``ApiV2Keywords404Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_keyword(
                id_, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    async def get_keywords(
        self, *, x_postscript_shop_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV2KeywordsResponse1:
        """Get a list of all active keywords for a shop.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 ``error`` is ``ApiV2Keywords403Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_keywords(
                x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncKeywordsWithRawResponse:
        return self._with_raw_response


class KeywordsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_keyword(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2KeywordsResponse, GetKeywordErrorBody]:
        """Get a Keyword by its ID

        Args:
            id_: ID of the keyword you'd like to receive.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/keywords/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[ApiV2KeywordsResponse],
            error_mapper=get_keyword_error_mapper,
            request_options=request_options,
        )

    def get_keywords(
        self, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2KeywordsResponse1, GetKeywordsErrorBody]:
        """Get a list of all active keywords for a shop.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/keywords"),
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[ApiV2KeywordsResponse1],
            error_mapper=get_keywords_error_mapper,
            request_options=request_options,
        )


class AsyncKeywordsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_keyword(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2KeywordsResponse, GetKeywordErrorBody]:
        """Get a Keyword by its ID

        Args:
            id_: ID of the keyword you'd like to receive.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/keywords/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[ApiV2KeywordsResponse],
            error_mapper=get_keyword_error_mapper,
            request_options=request_options,
        )

    async def get_keywords(
        self, *, x_postscript_shop_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2KeywordsResponse1, GetKeywordsErrorBody]:
        """Get a list of all active keywords for a shop.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/keywords"),
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[ApiV2KeywordsResponse1],
            error_mapper=get_keywords_error_mapper,
            request_options=request_options,
        )
