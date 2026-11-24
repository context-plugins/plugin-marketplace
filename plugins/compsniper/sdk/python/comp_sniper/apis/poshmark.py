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
from ..errors.search_poshmark_sold_error import SearchPoshmarkSoldErrorBody, search_poshmark_sold_error_mapper
from ..models.enums.condition_comp_sniper_marketplace_and_shipping_poshmark_api import (
    ConditionCompSniperMarketplaceAndShippingPoshmarkApi,
    ConditionCompSniperMarketplaceAndShippingPoshmarkApiOrStr,
)
from ..models.enums.department_comp_sniper_marketplace_and_shipping_poshmark_api import (
    DepartmentCompSniperMarketplaceAndShippingPoshmarkApi,
    DepartmentCompSniperMarketplaceAndShippingPoshmarkApiOrStr,
)
from ..models.enums.enrich import Enrich, EnrichOrStr
from ..models.enums.sort_by_comp_sniper_marketplace_and_shipping_poshmark_api import (
    SortByCompSniperMarketplaceAndShippingPoshmarkApi,
    SortByCompSniperMarketplaceAndShippingPoshmarkApiOrStr,
)
from ..models.enums.x_credit_source import XCreditSourceOrStr
from ..models.v1_poshmark_sold_response import V1PoshmarkSoldResponse
from ..server.server import Server


class Poshmark:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PoshmarkWithRawResponse(client, server, auth)

    def search_poshmark_sold(
        self,
        keyword: str,
        *,
        page: int | None = 1,
        min_price: float | None = None,
        max_price: float | None = None,
        department: (
            DepartmentCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None
        ) = DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.ALL,
        condition: (
            ConditionCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None
        ) = ConditionCompSniperMarketplaceAndShippingPoshmarkApi.ALL,
        brand: str | None = None,
        sort_by: (
            SortByCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None
        ) = SortByCompSniperMarketplaceAndShippingPoshmarkApi.SOLD_RECENTLY,
        enrich: EnrichOrStr | None = Enrich.FALSE,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PoshmarkSoldResponse:
        """Returns one native page of public Poshmark sold listings. Authentication, rate limits, monthly quota,
        purchased credits, request IDs, and cache headers match the other CompSniper endpoints. Each successful page
        uses one CompSniper request, including enrich=true. The native page ceiling is 48 listings.

        Args:
            keyword: Value sent with the request.
            page: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            department: Value sent with the request.
            condition: Value sent with the request.
            brand: Value sent with the request.
            sort_by: Value sent with the request.
            enrich: Adds public seller location, approximate sold-count evidence, and average ship time. Sold date,
                listed date, colors, description, category, and condition are already returned when present in the
                native search response. This still uses one CompSniper request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sold listings

        Raises:
            ApiError: Invalid query parameters Missing or invalid API key Rate limit or quota exceeded Scrape failed
                Poshmark fetch failed after retry Server busy: concurrency limit reached; retry shortly ``error`` is
                ``V1PoshmarkSold400Error1 | V1PoshmarkSold401Error1 | V1PoshmarkSoldResponse12 | V1PoshmarkSold500Error1
                | V1PoshmarkSold502Error1 | V1PoshmarkSold503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.search_poshmark_sold(
                keyword,
                page=page,
                min_price=min_price,
                max_price=max_price,
                department=department,
                condition=condition,
                brand=brand,
                sort_by=sort_by,
                enrich=enrich,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> PoshmarkWithRawResponse:
        return self._with_raw_response


class AsyncPoshmark:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPoshmarkWithRawResponse(client, server, auth)

    async def search_poshmark_sold(
        self,
        keyword: str,
        *,
        page: int | None = 1,
        min_price: float | None = None,
        max_price: float | None = None,
        department: (
            DepartmentCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None
        ) = DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.ALL,
        condition: (
            ConditionCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None
        ) = ConditionCompSniperMarketplaceAndShippingPoshmarkApi.ALL,
        brand: str | None = None,
        sort_by: (
            SortByCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None
        ) = SortByCompSniperMarketplaceAndShippingPoshmarkApi.SOLD_RECENTLY,
        enrich: EnrichOrStr | None = Enrich.FALSE,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PoshmarkSoldResponse:
        """Returns one native page of public Poshmark sold listings. Authentication, rate limits, monthly quota,
        purchased credits, request IDs, and cache headers match the other CompSniper endpoints. Each successful page
        uses one CompSniper request, including enrich=true. The native page ceiling is 48 listings.

        Args:
            keyword: Value sent with the request.
            page: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            department: Value sent with the request.
            condition: Value sent with the request.
            brand: Value sent with the request.
            sort_by: Value sent with the request.
            enrich: Adds public seller location, approximate sold-count evidence, and average ship time. Sold date,
                listed date, colors, description, category, and condition are already returned when present in the
                native search response. This still uses one CompSniper request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sold listings

        Raises:
            ApiError: Invalid query parameters Missing or invalid API key Rate limit or quota exceeded Scrape failed
                Poshmark fetch failed after retry Server busy: concurrency limit reached; retry shortly ``error`` is
                ``V1PoshmarkSold400Error1 | V1PoshmarkSold401Error1 | V1PoshmarkSoldResponse12 | V1PoshmarkSold500Error1
                | V1PoshmarkSold502Error1 | V1PoshmarkSold503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.search_poshmark_sold(
                keyword,
                page=page,
                min_price=min_price,
                max_price=max_price,
                department=department,
                condition=condition,
                brand=brand,
                sort_by=sort_by,
                enrich=enrich,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPoshmarkWithRawResponse:
        return self._with_raw_response


class PoshmarkWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_poshmark_sold(
        self,
        keyword: str,
        *,
        page: int | None = 1,
        min_price: float | None = None,
        max_price: float | None = None,
        department: (
            DepartmentCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None
        ) = DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.ALL,
        condition: (
            ConditionCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None
        ) = ConditionCompSniperMarketplaceAndShippingPoshmarkApi.ALL,
        brand: str | None = None,
        sort_by: (
            SortByCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None
        ) = SortByCompSniperMarketplaceAndShippingPoshmarkApi.SOLD_RECENTLY,
        enrich: EnrichOrStr | None = Enrich.FALSE,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PoshmarkSoldResponse, SearchPoshmarkSoldErrorBody]:
        """Returns one native page of public Poshmark sold listings. Authentication, rate limits, monthly quota,
        purchased credits, request IDs, and cache headers match the other CompSniper endpoints. Each successful page
        uses one CompSniper request, including enrich=true. The native page ceiling is 48 listings.

        Args:
            keyword: Value sent with the request.
            page: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            department: Value sent with the request.
            condition: Value sent with the request.
            brand: Value sent with the request.
            sort_by: Value sent with the request.
            enrich: Adds public seller location, approximate sold-count evidence, and average ship time. Sold date,
                listed date, colors, description, category, and condition are already returned when present in the
                native search response. This still uses one CompSniper request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/poshmark/sold"),
            query_params=[
                param[str]("keyword", keyword),
                param[int | None]("page", page),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[DepartmentCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None]("department", department),
                param[ConditionCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None]("condition", condition),
                param[str | None]("brand", brand),
                param[SortByCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None]("sortBy", sort_by),
                param[EnrichOrStr | None]("enrich", enrich),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1PoshmarkSoldResponse],
            error_mapper=search_poshmark_sold_error_mapper,
            request_options=request_options,
        )


class AsyncPoshmarkWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_poshmark_sold(
        self,
        keyword: str,
        *,
        page: int | None = 1,
        min_price: float | None = None,
        max_price: float | None = None,
        department: (
            DepartmentCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None
        ) = DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.ALL,
        condition: (
            ConditionCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None
        ) = ConditionCompSniperMarketplaceAndShippingPoshmarkApi.ALL,
        brand: str | None = None,
        sort_by: (
            SortByCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None
        ) = SortByCompSniperMarketplaceAndShippingPoshmarkApi.SOLD_RECENTLY,
        enrich: EnrichOrStr | None = Enrich.FALSE,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PoshmarkSoldResponse, SearchPoshmarkSoldErrorBody]:
        """Returns one native page of public Poshmark sold listings. Authentication, rate limits, monthly quota,
        purchased credits, request IDs, and cache headers match the other CompSniper endpoints. Each successful page
        uses one CompSniper request, including enrich=true. The native page ceiling is 48 listings.

        Args:
            keyword: Value sent with the request.
            page: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            department: Value sent with the request.
            condition: Value sent with the request.
            brand: Value sent with the request.
            sort_by: Value sent with the request.
            enrich: Adds public seller location, approximate sold-count evidence, and average ship time. Sold date,
                listed date, colors, description, category, and condition are already returned when present in the
                native search response. This still uses one CompSniper request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/poshmark/sold"),
            query_params=[
                param[str]("keyword", keyword),
                param[int | None]("page", page),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[DepartmentCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None]("department", department),
                param[ConditionCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None]("condition", condition),
                param[str | None]("brand", brand),
                param[SortByCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None]("sortBy", sort_by),
                param[EnrichOrStr | None]("enrich", enrich),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1PoshmarkSoldResponse],
            error_mapper=search_poshmark_sold_error_mapper,
            request_options=request_options,
        )
