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
from ..errors.get_suggests_play_suggestions_get2_error import (
    GetSuggestsPlaySuggestionsGet2ErrorBody,
    get_suggests_play_suggestions_get2_error_mapper,
)
from ..models.enums.app_countries import AppCountries, AppCountriesOrStr
from ..models.enums.app_languages import AppLanguages, AppLanguagesOrStr
from ..models.enums.cache_time import CacheTime, CacheTimeOrStr
from ..models.suggest import Suggest
from ..server.server import Server


class Suggestions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SuggestionsWithRawResponse(client, server, auth)

    def get_suggests_play_suggestions_get2(
        self,
        q: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        lang: AppLanguagesOrStr | None = AppLanguages.EN_US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Suggest:
        """Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with
        a partial result while a fresh crawl is in progress; ``freshness`` sets how old a cached result may be before it
        is recrawled.

        Args:
            q: Value sent with the request.
            country: Value sent with the request.
            lang: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlaySuggestions401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_suggests_play_suggestions_get2(
                q, country=country, lang=lang, freshness=freshness, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SuggestionsWithRawResponse:
        return self._with_raw_response


class AsyncSuggestions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSuggestionsWithRawResponse(client, server, auth)

    async def get_suggests_play_suggestions_get2(
        self,
        q: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        lang: AppLanguagesOrStr | None = AppLanguages.EN_US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Suggest:
        """Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with
        a partial result while a fresh crawl is in progress; ``freshness`` sets how old a cached result may be before it
        is recrawled.

        Args:
            q: Value sent with the request.
            country: Value sent with the request.
            lang: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlaySuggestions401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_suggests_play_suggestions_get2(
                q, country=country, lang=lang, freshness=freshness, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSuggestionsWithRawResponse:
        return self._with_raw_response


class SuggestionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_suggests_play_suggestions_get2(
        self,
        q: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        lang: AppLanguagesOrStr | None = AppLanguages.EN_US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Suggest, GetSuggestsPlaySuggestionsGet2ErrorBody]:
        """Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with
        a partial result while a fresh crawl is in progress; ``freshness`` sets how old a cached result may be before it
        is recrawled.

        Args:
            q: Value sent with the request.
            country: Value sent with the request.
            lang: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/suggestions"),
            query_params=[
                param[str]("q", q),
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("lang", lang),
                param[CacheTimeOrStr | None]("freshness", freshness),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[Suggest],
            error_mapper=get_suggests_play_suggestions_get2_error_mapper,
            request_options=request_options,
        )


class AsyncSuggestionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_suggests_play_suggestions_get2(
        self,
        q: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        lang: AppLanguagesOrStr | None = AppLanguages.EN_US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Suggest, GetSuggestsPlaySuggestionsGet2ErrorBody]:
        """Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with
        a partial result while a fresh crawl is in progress; ``freshness`` sets how old a cached result may be before it
        is recrawled.

        Args:
            q: Value sent with the request.
            country: Value sent with the request.
            lang: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/suggestions"),
            query_params=[
                param[str]("q", q),
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("lang", lang),
                param[CacheTimeOrStr | None]("freshness", freshness),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[Suggest],
            error_mapper=get_suggests_play_suggestions_get2_error_mapper,
            request_options=request_options,
        )
