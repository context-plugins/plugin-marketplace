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
from ..errors.search_mercari_listings_error import SearchMercariListingsErrorBody, search_mercari_listings_error_mapper
from ..models.enums.include_listed_at import IncludeListedAt, IncludeListedAtOrStr
from ..models.enums.item_condition_comp_sniper_marketplace_and_shipping_mercari_api import (
    ItemConditionCompSniperMarketplaceAndShippingMercariApi,
    ItemConditionCompSniperMarketplaceAndShippingMercariApiOrStr,
)
from ..models.enums.sold import Sold, SoldOrStr
from ..models.enums.sort_order_comp_sniper_marketplace_and_shipping_mercari_api import (
    SortOrderCompSniperMarketplaceAndShippingMercariApi,
    SortOrderCompSniperMarketplaceAndShippingMercariApiOrStr,
)
from ..models.enums.x_credit_source import XCreditSourceOrStr
from ..models.v1_mercari_response import V1MercariResponse
from ..server.server import Server


class Mercari:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MercariWithRawResponse(client, server, auth)

    def search_mercari_listings(
        self,
        keyword: str,
        *,
        page: int | None = 1,
        count: int | None = 100,
        sort_order: (
            SortOrderCompSniperMarketplaceAndShippingMercariApiOrStr | None
        ) = SortOrderCompSniperMarketplaceAndShippingMercariApi.BEST_MATCH,
        min_price: float | None = None,
        max_price: float | None = None,
        item_condition: (
            ItemConditionCompSniperMarketplaceAndShippingMercariApiOrStr | None
        ) = ItemConditionCompSniperMarketplaceAndShippingMercariApi.ANY,
        category_id: str | None = None,
        brand_id: str | None = None,
        sold: SoldOrStr | None = Sold.TRUE,
        include_listed_at: IncludeListedAtOrStr | None = IncludeListedAt.FALSE,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MercariResponse:
        """Returns one page of public Mercari sold or active listings through a managed anonymous guest session.
        Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache headers match the other
        CompSniper endpoints. Each successful page uses one CompSniper request and returns up to 100 items.

        Args:
            keyword: Value sent with the request.
            page: Value sent with the request.
            count: Value sent with the request.
            sort_order: Sort order. recentlySold maps to Mercari's current Recently sold option. mostPopular is accepted
                as a compatibility alias for recentlySold.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            item_condition: Value sent with the request.
            category_id: Value sent with the request.
            brand_id: Value sent with the request.
            sold: Value sent with the request.
            include_listed_at: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Mercari listings

        Raises:
            ApiError: Invalid query parameters Missing or invalid API key Rate limit or quota exceeded Search failed
                mercari-api fetch failed Temporary Mercari connection failure (upstream_unavailable) or exhausted search
                capacity (server_busy). Failed requests do not consume allowance. Retry after the Retry-After delay.
                ``error`` is ``V1Mercari400Error1 | V1Mercari401Error1 | V1MercariResponse12 | V1Mercari500Error1 |
                V1Mercari502Error1 | ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.search_mercari_listings(
                keyword,
                page=page,
                count=count,
                sort_order=sort_order,
                min_price=min_price,
                max_price=max_price,
                item_condition=item_condition,
                category_id=category_id,
                brand_id=brand_id,
                sold=sold,
                include_listed_at=include_listed_at,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> MercariWithRawResponse:
        return self._with_raw_response


class AsyncMercari:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMercariWithRawResponse(client, server, auth)

    async def search_mercari_listings(
        self,
        keyword: str,
        *,
        page: int | None = 1,
        count: int | None = 100,
        sort_order: (
            SortOrderCompSniperMarketplaceAndShippingMercariApiOrStr | None
        ) = SortOrderCompSniperMarketplaceAndShippingMercariApi.BEST_MATCH,
        min_price: float | None = None,
        max_price: float | None = None,
        item_condition: (
            ItemConditionCompSniperMarketplaceAndShippingMercariApiOrStr | None
        ) = ItemConditionCompSniperMarketplaceAndShippingMercariApi.ANY,
        category_id: str | None = None,
        brand_id: str | None = None,
        sold: SoldOrStr | None = Sold.TRUE,
        include_listed_at: IncludeListedAtOrStr | None = IncludeListedAt.FALSE,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MercariResponse:
        """Returns one page of public Mercari sold or active listings through a managed anonymous guest session.
        Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache headers match the other
        CompSniper endpoints. Each successful page uses one CompSniper request and returns up to 100 items.

        Args:
            keyword: Value sent with the request.
            page: Value sent with the request.
            count: Value sent with the request.
            sort_order: Sort order. recentlySold maps to Mercari's current Recently sold option. mostPopular is accepted
                as a compatibility alias for recentlySold.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            item_condition: Value sent with the request.
            category_id: Value sent with the request.
            brand_id: Value sent with the request.
            sold: Value sent with the request.
            include_listed_at: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Mercari listings

        Raises:
            ApiError: Invalid query parameters Missing or invalid API key Rate limit or quota exceeded Search failed
                mercari-api fetch failed Temporary Mercari connection failure (upstream_unavailable) or exhausted search
                capacity (server_busy). Failed requests do not consume allowance. Retry after the Retry-After delay.
                ``error`` is ``V1Mercari400Error1 | V1Mercari401Error1 | V1MercariResponse12 | V1Mercari500Error1 |
                V1Mercari502Error1 | ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.search_mercari_listings(
                keyword,
                page=page,
                count=count,
                sort_order=sort_order,
                min_price=min_price,
                max_price=max_price,
                item_condition=item_condition,
                category_id=category_id,
                brand_id=brand_id,
                sold=sold,
                include_listed_at=include_listed_at,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMercariWithRawResponse:
        return self._with_raw_response


class MercariWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_mercari_listings(
        self,
        keyword: str,
        *,
        page: int | None = 1,
        count: int | None = 100,
        sort_order: (
            SortOrderCompSniperMarketplaceAndShippingMercariApiOrStr | None
        ) = SortOrderCompSniperMarketplaceAndShippingMercariApi.BEST_MATCH,
        min_price: float | None = None,
        max_price: float | None = None,
        item_condition: (
            ItemConditionCompSniperMarketplaceAndShippingMercariApiOrStr | None
        ) = ItemConditionCompSniperMarketplaceAndShippingMercariApi.ANY,
        category_id: str | None = None,
        brand_id: str | None = None,
        sold: SoldOrStr | None = Sold.TRUE,
        include_listed_at: IncludeListedAtOrStr | None = IncludeListedAt.FALSE,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MercariResponse, SearchMercariListingsErrorBody]:
        """Returns one page of public Mercari sold or active listings through a managed anonymous guest session.
        Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache headers match the other
        CompSniper endpoints. Each successful page uses one CompSniper request and returns up to 100 items.

        Args:
            keyword: Value sent with the request.
            page: Value sent with the request.
            count: Value sent with the request.
            sort_order: Sort order. recentlySold maps to Mercari's current Recently sold option. mostPopular is accepted
                as a compatibility alias for recentlySold.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            item_condition: Value sent with the request.
            category_id: Value sent with the request.
            brand_id: Value sent with the request.
            sold: Value sent with the request.
            include_listed_at: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/mercari"),
            query_params=[
                param[str]("keyword", keyword),
                param[int | None]("page", page),
                param[int | None]("count", count),
                param[SortOrderCompSniperMarketplaceAndShippingMercariApiOrStr | None]("sortOrder", sort_order),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[ItemConditionCompSniperMarketplaceAndShippingMercariApiOrStr | None](
                    "itemCondition", item_condition
                ),
                param[str | None]("categoryId", category_id),
                param[str | None]("brandId", brand_id),
                param[SoldOrStr | None]("sold", sold),
                param[IncludeListedAtOrStr | None]("includeListedAt", include_listed_at),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1MercariResponse],
            error_mapper=search_mercari_listings_error_mapper,
            request_options=request_options,
        )


class AsyncMercariWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_mercari_listings(
        self,
        keyword: str,
        *,
        page: int | None = 1,
        count: int | None = 100,
        sort_order: (
            SortOrderCompSniperMarketplaceAndShippingMercariApiOrStr | None
        ) = SortOrderCompSniperMarketplaceAndShippingMercariApi.BEST_MATCH,
        min_price: float | None = None,
        max_price: float | None = None,
        item_condition: (
            ItemConditionCompSniperMarketplaceAndShippingMercariApiOrStr | None
        ) = ItemConditionCompSniperMarketplaceAndShippingMercariApi.ANY,
        category_id: str | None = None,
        brand_id: str | None = None,
        sold: SoldOrStr | None = Sold.TRUE,
        include_listed_at: IncludeListedAtOrStr | None = IncludeListedAt.FALSE,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MercariResponse, SearchMercariListingsErrorBody]:
        """Returns one page of public Mercari sold or active listings through a managed anonymous guest session.
        Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache headers match the other
        CompSniper endpoints. Each successful page uses one CompSniper request and returns up to 100 items.

        Args:
            keyword: Value sent with the request.
            page: Value sent with the request.
            count: Value sent with the request.
            sort_order: Sort order. recentlySold maps to Mercari's current Recently sold option. mostPopular is accepted
                as a compatibility alias for recentlySold.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            item_condition: Value sent with the request.
            category_id: Value sent with the request.
            brand_id: Value sent with the request.
            sold: Value sent with the request.
            include_listed_at: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/mercari"),
            query_params=[
                param[str]("keyword", keyword),
                param[int | None]("page", page),
                param[int | None]("count", count),
                param[SortOrderCompSniperMarketplaceAndShippingMercariApiOrStr | None]("sortOrder", sort_order),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[ItemConditionCompSniperMarketplaceAndShippingMercariApiOrStr | None](
                    "itemCondition", item_condition
                ),
                param[str | None]("categoryId", category_id),
                param[str | None]("brandId", brand_id),
                param[SoldOrStr | None]("sold", sold),
                param[IncludeListedAtOrStr | None]("includeListedAt", include_listed_at),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1MercariResponse],
            error_mapper=search_mercari_listings_error_mapper,
            request_options=request_options,
        )
