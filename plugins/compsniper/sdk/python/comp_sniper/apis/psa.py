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
from ..errors.get_psa_card_error import GetPsaCardErrorBody, get_psa_card_error_mapper
from ..errors.get_psa_set_population_error import GetPsaSetPopulationErrorBody, get_psa_set_population_error_mapper
from ..errors.list_psa_sets_error import ListPsaSetsErrorBody, list_psa_sets_error_mapper
from ..errors.search_psa_cards_error import SearchPsaCardsErrorBody, search_psa_cards_error_mapper
from ..models.enums.game import GameOrStr
from ..models.enums.x_credit_source import XCreditSourceOrStr
from ..models.v1_psa_card_response import V1PsaCardResponse
from ..models.v1_psa_search_response import V1PsaSearchResponse
from ..models.v1_psa_set_response import V1PsaSetResponse
from ..models.v1_psa_sets_response import V1PsaSetsResponse
from ..server.server import Server


class Psa:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PsaWithRawResponse(client, server, auth)

    def get_psa_card(
        self,
        *,
        spec_id: str | None = None,
        keyword: str | None = None,
        count: int | None = 10,
        time_range: int | None = 0,
        grade: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PsaCardResponse:
        """For one PSA card: sold prices by grade (sales, average, min, max, latest), recent individual sales with
        grading company, grade and cert number, the population report with gem rate, and a price summary. Send specId
        from /v1/psa/search, or a keyword and the best match is used (others listed in otherMatches). One successful
        call uses one request; a card PSA does not have returns 404 not_found and is not charged.

        Args:
            spec_id: Value sent with the request.
            keyword: Value sent with the request.
            count: Value sent with the request.
            time_range: Value sent with the request.
            grade: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Prices by grade, sales and population

        Raises:
            ApiError: invalid_params: a parameter is missing or invalid Error Error upstream_blocked: PSA did not
                complete this call; retry after a short pause (not charged) server_busy: retry after retry_after seconds
                (not charged) not_found: PSA has no card for this specId or keyword (not charged) ``error`` is
                ``V1PsaCard400Error1 | V1PsaCard401Error1 | V1PsaCard404Error1 | V1PsaCard429Error1 | V1PsaCard502Error1
                | V1PsaCard503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_psa_card(
                spec_id=spec_id,
                keyword=keyword,
                count=count,
                time_range=time_range,
                grade=grade,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    def get_psa_set_population(
        self,
        *,
        heading_id: str | None = None,
        url: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PsaSetResponse:
        """One call returns every card in a PSA set with its number, name, variety, specId and population for every
        grade (Authentic, then 1 to 10 including half grades), plus totals for the set. Send headingId from /v1/psa/sets
        or the set's PSA population page url. Large sets can take 10 to 20 seconds.

        Args:
            heading_id: Value sent with the request.
            url: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Set population

        Raises:
            ApiError: invalid_params: a parameter is missing or invalid Error Error upstream_blocked: PSA did not
                complete this call; retry after a short pause (not charged) server_busy: retry after retry_after seconds
                (not charged) ``error`` is ``V1PsaSet400Error1 | V1PsaSet401Error1 | V1PsaSet429Error1 |
                V1PsaSet502Error1 | V1PsaSet503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_psa_set_population(
                heading_id=heading_id, url=url, x_credit_source=x_credit_source, request_options=request_options
            ),
        )

    def list_psa_sets(
        self,
        *,
        game: GameOrStr | None = None,
        keyword: str | None = None,
        year: str | None = None,
        count: int | None = 25,
        page: int | None = 1,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PsaSetsResponse:
        """Send a game to list every PSA set for that game, newest first and paged; add keyword or year to narrow it.
        Without game, keyword searches set names across all games. Each set has the headingId used by /v1/psa/set.

        Args:
            game: Value sent with the request.
            keyword: Value sent with the request.
            year: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            PSA sets

        Raises:
            ApiError: invalid_params: a parameter is missing or invalid Error Error upstream_blocked: PSA did not
                complete this call; retry after a short pause (not charged) server_busy: retry after retry_after seconds
                (not charged) ``error`` is ``V1PsaSets400Error1 | V1PsaSets401Error1 | V1PsaSets429Error1 |
                V1PsaSets502Error1 | V1PsaSets503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.list_psa_sets(
                game=game,
                keyword=keyword,
                year=year,
                count=count,
                page=page,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    def search_psa_cards(
        self,
        keyword: str,
        *,
        count: int | None = 10,
        page: int | None = 1,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PsaSearchResponse:
        """Search PSA's card catalog (sports and trading cards) by name, set and number. Each match has the specId used
        by /v1/psa/card. One successful call uses one request.

        Args:
            keyword: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching PSA cards

        Raises:
            ApiError: invalid_params: a parameter is missing or invalid Error Error upstream_blocked: PSA did not
                complete this call; retry after a short pause (not charged) server_busy: retry after retry_after seconds
                (not charged) ``error`` is ``V1PsaSearch400Error1 | V1PsaSearch401Error1 | V1PsaSearch429Error1 |
                V1PsaSearch502Error1 | V1PsaSearch503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.search_psa_cards(
                keyword, count=count, page=page, x_credit_source=x_credit_source, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PsaWithRawResponse:
        return self._with_raw_response


class AsyncPsa:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPsaWithRawResponse(client, server, auth)

    async def get_psa_card(
        self,
        *,
        spec_id: str | None = None,
        keyword: str | None = None,
        count: int | None = 10,
        time_range: int | None = 0,
        grade: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PsaCardResponse:
        """For one PSA card: sold prices by grade (sales, average, min, max, latest), recent individual sales with
        grading company, grade and cert number, the population report with gem rate, and a price summary. Send specId
        from /v1/psa/search, or a keyword and the best match is used (others listed in otherMatches). One successful
        call uses one request; a card PSA does not have returns 404 not_found and is not charged.

        Args:
            spec_id: Value sent with the request.
            keyword: Value sent with the request.
            count: Value sent with the request.
            time_range: Value sent with the request.
            grade: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Prices by grade, sales and population

        Raises:
            ApiError: invalid_params: a parameter is missing or invalid Error Error upstream_blocked: PSA did not
                complete this call; retry after a short pause (not charged) server_busy: retry after retry_after seconds
                (not charged) not_found: PSA has no card for this specId or keyword (not charged) ``error`` is
                ``V1PsaCard400Error1 | V1PsaCard401Error1 | V1PsaCard404Error1 | V1PsaCard429Error1 | V1PsaCard502Error1
                | V1PsaCard503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_psa_card(
                spec_id=spec_id,
                keyword=keyword,
                count=count,
                time_range=time_range,
                grade=grade,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    async def get_psa_set_population(
        self,
        *,
        heading_id: str | None = None,
        url: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PsaSetResponse:
        """One call returns every card in a PSA set with its number, name, variety, specId and population for every
        grade (Authentic, then 1 to 10 including half grades), plus totals for the set. Send headingId from /v1/psa/sets
        or the set's PSA population page url. Large sets can take 10 to 20 seconds.

        Args:
            heading_id: Value sent with the request.
            url: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Set population

        Raises:
            ApiError: invalid_params: a parameter is missing or invalid Error Error upstream_blocked: PSA did not
                complete this call; retry after a short pause (not charged) server_busy: retry after retry_after seconds
                (not charged) ``error`` is ``V1PsaSet400Error1 | V1PsaSet401Error1 | V1PsaSet429Error1 |
                V1PsaSet502Error1 | V1PsaSet503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_psa_set_population(
                heading_id=heading_id, url=url, x_credit_source=x_credit_source, request_options=request_options
            ),
        )

    async def list_psa_sets(
        self,
        *,
        game: GameOrStr | None = None,
        keyword: str | None = None,
        year: str | None = None,
        count: int | None = 25,
        page: int | None = 1,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PsaSetsResponse:
        """Send a game to list every PSA set for that game, newest first and paged; add keyword or year to narrow it.
        Without game, keyword searches set names across all games. Each set has the headingId used by /v1/psa/set.

        Args:
            game: Value sent with the request.
            keyword: Value sent with the request.
            year: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            PSA sets

        Raises:
            ApiError: invalid_params: a parameter is missing or invalid Error Error upstream_blocked: PSA did not
                complete this call; retry after a short pause (not charged) server_busy: retry after retry_after seconds
                (not charged) ``error`` is ``V1PsaSets400Error1 | V1PsaSets401Error1 | V1PsaSets429Error1 |
                V1PsaSets502Error1 | V1PsaSets503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.list_psa_sets(
                game=game,
                keyword=keyword,
                year=year,
                count=count,
                page=page,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    async def search_psa_cards(
        self,
        keyword: str,
        *,
        count: int | None = 10,
        page: int | None = 1,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PsaSearchResponse:
        """Search PSA's card catalog (sports and trading cards) by name, set and number. Each match has the specId used
        by /v1/psa/card. One successful call uses one request.

        Args:
            keyword: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching PSA cards

        Raises:
            ApiError: invalid_params: a parameter is missing or invalid Error Error upstream_blocked: PSA did not
                complete this call; retry after a short pause (not charged) server_busy: retry after retry_after seconds
                (not charged) ``error`` is ``V1PsaSearch400Error1 | V1PsaSearch401Error1 | V1PsaSearch429Error1 |
                V1PsaSearch502Error1 | V1PsaSearch503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.search_psa_cards(
                keyword, count=count, page=page, x_credit_source=x_credit_source, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPsaWithRawResponse:
        return self._with_raw_response


class PsaWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_psa_card(
        self,
        *,
        spec_id: str | None = None,
        keyword: str | None = None,
        count: int | None = 10,
        time_range: int | None = 0,
        grade: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PsaCardResponse, GetPsaCardErrorBody]:
        """For one PSA card: sold prices by grade (sales, average, min, max, latest), recent individual sales with
        grading company, grade and cert number, the population report with gem rate, and a price summary. Send specId
        from /v1/psa/search, or a keyword and the best match is used (others listed in otherMatches). One successful
        call uses one request; a card PSA does not have returns 404 not_found and is not charged.

        Args:
            spec_id: Value sent with the request.
            keyword: Value sent with the request.
            count: Value sent with the request.
            time_range: Value sent with the request.
            grade: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/psa/card"),
            query_params=[
                param[str | None]("specId", spec_id),
                param[str | None]("keyword", keyword),
                param[int | None]("count", count),
                param[int | None]("timeRange", time_range),
                param[str | None]("grade", grade),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1PsaCardResponse],
            error_mapper=get_psa_card_error_mapper,
            request_options=request_options,
        )

    def get_psa_set_population(
        self,
        *,
        heading_id: str | None = None,
        url: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PsaSetResponse, GetPsaSetPopulationErrorBody]:
        """One call returns every card in a PSA set with its number, name, variety, specId and population for every
        grade (Authentic, then 1 to 10 including half grades), plus totals for the set. Send headingId from /v1/psa/sets
        or the set's PSA population page url. Large sets can take 10 to 20 seconds.

        Args:
            heading_id: Value sent with the request.
            url: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/psa/set"),
            query_params=[param[str | None]("headingId", heading_id), param[str | None]("url", url)],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1PsaSetResponse],
            error_mapper=get_psa_set_population_error_mapper,
            request_options=request_options,
        )

    def list_psa_sets(
        self,
        *,
        game: GameOrStr | None = None,
        keyword: str | None = None,
        year: str | None = None,
        count: int | None = 25,
        page: int | None = 1,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PsaSetsResponse, ListPsaSetsErrorBody]:
        """Send a game to list every PSA set for that game, newest first and paged; add keyword or year to narrow it.
        Without game, keyword searches set names across all games. Each set has the headingId used by /v1/psa/set.

        Args:
            game: Value sent with the request.
            keyword: Value sent with the request.
            year: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/psa/sets"),
            query_params=[
                param[GameOrStr | None]("game", game),
                param[str | None]("keyword", keyword),
                param[str | None]("year", year),
                param[int | None]("count", count),
                param[int | None]("page", page),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1PsaSetsResponse],
            error_mapper=list_psa_sets_error_mapper,
            request_options=request_options,
        )

    def search_psa_cards(
        self,
        keyword: str,
        *,
        count: int | None = 10,
        page: int | None = 1,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PsaSearchResponse, SearchPsaCardsErrorBody]:
        """Search PSA's card catalog (sports and trading cards) by name, set and number. Each match has the specId used
        by /v1/psa/card. One successful call uses one request.

        Args:
            keyword: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/psa/search"),
            query_params=[
                param[str]("keyword", keyword), param[int | None]("count", count), param[int | None]("page", page)
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1PsaSearchResponse],
            error_mapper=search_psa_cards_error_mapper,
            request_options=request_options,
        )


class AsyncPsaWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_psa_card(
        self,
        *,
        spec_id: str | None = None,
        keyword: str | None = None,
        count: int | None = 10,
        time_range: int | None = 0,
        grade: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PsaCardResponse, GetPsaCardErrorBody]:
        """For one PSA card: sold prices by grade (sales, average, min, max, latest), recent individual sales with
        grading company, grade and cert number, the population report with gem rate, and a price summary. Send specId
        from /v1/psa/search, or a keyword and the best match is used (others listed in otherMatches). One successful
        call uses one request; a card PSA does not have returns 404 not_found and is not charged.

        Args:
            spec_id: Value sent with the request.
            keyword: Value sent with the request.
            count: Value sent with the request.
            time_range: Value sent with the request.
            grade: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/psa/card"),
            query_params=[
                param[str | None]("specId", spec_id),
                param[str | None]("keyword", keyword),
                param[int | None]("count", count),
                param[int | None]("timeRange", time_range),
                param[str | None]("grade", grade),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1PsaCardResponse],
            error_mapper=get_psa_card_error_mapper,
            request_options=request_options,
        )

    async def get_psa_set_population(
        self,
        *,
        heading_id: str | None = None,
        url: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PsaSetResponse, GetPsaSetPopulationErrorBody]:
        """One call returns every card in a PSA set with its number, name, variety, specId and population for every
        grade (Authentic, then 1 to 10 including half grades), plus totals for the set. Send headingId from /v1/psa/sets
        or the set's PSA population page url. Large sets can take 10 to 20 seconds.

        Args:
            heading_id: Value sent with the request.
            url: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/psa/set"),
            query_params=[param[str | None]("headingId", heading_id), param[str | None]("url", url)],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1PsaSetResponse],
            error_mapper=get_psa_set_population_error_mapper,
            request_options=request_options,
        )

    async def list_psa_sets(
        self,
        *,
        game: GameOrStr | None = None,
        keyword: str | None = None,
        year: str | None = None,
        count: int | None = 25,
        page: int | None = 1,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PsaSetsResponse, ListPsaSetsErrorBody]:
        """Send a game to list every PSA set for that game, newest first and paged; add keyword or year to narrow it.
        Without game, keyword searches set names across all games. Each set has the headingId used by /v1/psa/set.

        Args:
            game: Value sent with the request.
            keyword: Value sent with the request.
            year: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/psa/sets"),
            query_params=[
                param[GameOrStr | None]("game", game),
                param[str | None]("keyword", keyword),
                param[str | None]("year", year),
                param[int | None]("count", count),
                param[int | None]("page", page),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1PsaSetsResponse],
            error_mapper=list_psa_sets_error_mapper,
            request_options=request_options,
        )

    async def search_psa_cards(
        self,
        keyword: str,
        *,
        count: int | None = 10,
        page: int | None = 1,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PsaSearchResponse, SearchPsaCardsErrorBody]:
        """Search PSA's card catalog (sports and trading cards) by name, set and number. Each match has the specId used
        by /v1/psa/card. One successful call uses one request.

        Args:
            keyword: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/psa/search"),
            query_params=[
                param[str]("keyword", keyword), param[int | None]("count", count), param[int | None]("page", page)
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1PsaSearchResponse],
            error_mapper=search_psa_cards_error_mapper,
            request_options=request_options,
        )
