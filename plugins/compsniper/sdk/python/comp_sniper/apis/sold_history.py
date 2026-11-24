from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_v1_research_sold_error import GetV1ResearchSoldErrorBody, get_v1_research_sold_error_mapper
from ..models.enums.ebay_site_comp_sniper_marketplace_and_shipping_sold_history_api import (
    EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi,
    EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApiOrStr,
)
from ..models.enums.limit import Limit, LimitOrInt
from ..models.enums.sort import Sort, SortOrStr
from ..models.enums.x_credit_source import XCreditSourceOrStr
from ..models.v1_research_sold_response import V1ResearchSoldResponse
from ..server.server import Server


class SoldHistory:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SoldHistoryWithRawResponse(client, server, auth)

    def get_v1_research_sold(
        self,
        keyword: str,
        start_date: Date,
        end_date: Date,
        *,
        ebay_site: (
            EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApiOrStr | None
        ) = EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.EBAY_COM,
        sort: SortOrStr | None = Sort.QUANTITY_ASCENDING,
        limit: LimitOrInt | None = Limit.VALUE_50,
        page: int | None = 1,
        single_unit_only: bool | None = False,
        all_listing_sites: bool | None = False,
        relevance: bool | None = False,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ResearchSoldResponse:
        """Keyword search over eBay sold history going back up to 3 years (eBay's own limit), across eight eBay sites,
        on every plan including free. Each page of up to 50 listing-level rows uses one request; failed requests are
        free. Prices are USD. History has its own cap of 20 searches per minute per account (X-History-RateLimit-*
        headers, 429 history_rate_limited), on top of the plan limit.

        Args:
            keyword: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            ebay_site: Value sent with the request.
            sort: Value sent with the request.
            limit: Value sent with the request.
            page: Value sent with the request.
            single_unit_only: Value sent with the request.
            all_listing_sites: Value sent with the request.
            relevance: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sold history page

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``V1ResearchSold400Error1 | V1ResearchSold401Error1 |
                V1ResearchSold429Error1 | V1ResearchSold502Error1 | V1ResearchSold503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_v1_research_sold(
                keyword,
                start_date,
                end_date,
                ebay_site=ebay_site,
                sort=sort,
                limit=limit,
                page=page,
                single_unit_only=single_unit_only,
                all_listing_sites=all_listing_sites,
                relevance=relevance,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SoldHistoryWithRawResponse:
        return self._with_raw_response


class AsyncSoldHistory:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSoldHistoryWithRawResponse(client, server, auth)

    async def get_v1_research_sold(
        self,
        keyword: str,
        start_date: Date,
        end_date: Date,
        *,
        ebay_site: (
            EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApiOrStr | None
        ) = EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.EBAY_COM,
        sort: SortOrStr | None = Sort.QUANTITY_ASCENDING,
        limit: LimitOrInt | None = Limit.VALUE_50,
        page: int | None = 1,
        single_unit_only: bool | None = False,
        all_listing_sites: bool | None = False,
        relevance: bool | None = False,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ResearchSoldResponse:
        """Keyword search over eBay sold history going back up to 3 years (eBay's own limit), across eight eBay sites,
        on every plan including free. Each page of up to 50 listing-level rows uses one request; failed requests are
        free. Prices are USD. History has its own cap of 20 searches per minute per account (X-History-RateLimit-*
        headers, 429 history_rate_limited), on top of the plan limit.

        Args:
            keyword: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            ebay_site: Value sent with the request.
            sort: Value sent with the request.
            limit: Value sent with the request.
            page: Value sent with the request.
            single_unit_only: Value sent with the request.
            all_listing_sites: Value sent with the request.
            relevance: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sold history page

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``V1ResearchSold400Error1 | V1ResearchSold401Error1 |
                V1ResearchSold429Error1 | V1ResearchSold502Error1 | V1ResearchSold503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_v1_research_sold(
                keyword,
                start_date,
                end_date,
                ebay_site=ebay_site,
                sort=sort,
                limit=limit,
                page=page,
                single_unit_only=single_unit_only,
                all_listing_sites=all_listing_sites,
                relevance=relevance,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSoldHistoryWithRawResponse:
        return self._with_raw_response


class SoldHistoryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_v1_research_sold(
        self,
        keyword: str,
        start_date: Date,
        end_date: Date,
        *,
        ebay_site: (
            EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApiOrStr | None
        ) = EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.EBAY_COM,
        sort: SortOrStr | None = Sort.QUANTITY_ASCENDING,
        limit: LimitOrInt | None = Limit.VALUE_50,
        page: int | None = 1,
        single_unit_only: bool | None = False,
        all_listing_sites: bool | None = False,
        relevance: bool | None = False,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ResearchSoldResponse, GetV1ResearchSoldErrorBody]:
        """Keyword search over eBay sold history going back up to 3 years (eBay's own limit), across eight eBay sites,
        on every plan including free. Each page of up to 50 listing-level rows uses one request; failed requests are
        free. Prices are USD. History has its own cap of 20 searches per minute per account (X-History-RateLimit-*
        headers, 429 history_rate_limited), on top of the plan limit.

        Args:
            keyword: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            ebay_site: Value sent with the request.
            sort: Value sent with the request.
            limit: Value sent with the request.
            page: Value sent with the request.
            single_unit_only: Value sent with the request.
            all_listing_sites: Value sent with the request.
            relevance: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/research/sold"),
            query_params=[
                param[str]("keyword", keyword),
                param[Date]("startDate", start_date),
                param[Date]("endDate", end_date),
                param[EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApiOrStr | None]("ebaySite", ebay_site),
                param[SortOrStr | None]("sort", sort),
                param[LimitOrInt | None]("limit", limit),
                param[int | None]("page", page),
                param[bool | None]("singleUnitOnly", single_unit_only),
                param[bool | None]("allListingSites", all_listing_sites),
                param[bool | None]("relevance", relevance),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1ResearchSoldResponse],
            error_mapper=get_v1_research_sold_error_mapper,
            request_options=request_options,
        )


class AsyncSoldHistoryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_v1_research_sold(
        self,
        keyword: str,
        start_date: Date,
        end_date: Date,
        *,
        ebay_site: (
            EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApiOrStr | None
        ) = EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.EBAY_COM,
        sort: SortOrStr | None = Sort.QUANTITY_ASCENDING,
        limit: LimitOrInt | None = Limit.VALUE_50,
        page: int | None = 1,
        single_unit_only: bool | None = False,
        all_listing_sites: bool | None = False,
        relevance: bool | None = False,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ResearchSoldResponse, GetV1ResearchSoldErrorBody]:
        """Keyword search over eBay sold history going back up to 3 years (eBay's own limit), across eight eBay sites,
        on every plan including free. Each page of up to 50 listing-level rows uses one request; failed requests are
        free. Prices are USD. History has its own cap of 20 searches per minute per account (X-History-RateLimit-*
        headers, 429 history_rate_limited), on top of the plan limit.

        Args:
            keyword: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            ebay_site: Value sent with the request.
            sort: Value sent with the request.
            limit: Value sent with the request.
            page: Value sent with the request.
            single_unit_only: Value sent with the request.
            all_listing_sites: Value sent with the request.
            relevance: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/research/sold"),
            query_params=[
                param[str]("keyword", keyword),
                param[Date]("startDate", start_date),
                param[Date]("endDate", end_date),
                param[EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApiOrStr | None]("ebaySite", ebay_site),
                param[SortOrStr | None]("sort", sort),
                param[LimitOrInt | None]("limit", limit),
                param[int | None]("page", page),
                param[bool | None]("singleUnitOnly", single_unit_only),
                param[bool | None]("allListingSites", all_listing_sites),
                param[bool | None]("relevance", relevance),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1ResearchSoldResponse],
            error_mapper=get_v1_research_sold_error_mapper,
            request_options=request_options,
        )
