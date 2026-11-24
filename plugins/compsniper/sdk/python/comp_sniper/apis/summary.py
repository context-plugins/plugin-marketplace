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
from ..errors.get_price_summary_error import GetPriceSummaryErrorBody, get_price_summary_error_mapper
from ..models.enums.buying_format import BuyingFormatOrStr
from ..models.enums.ebay_site import EbaySite, EbaySiteOrStr
from ..models.enums.item_condition import ItemConditionOrStr
from ..models.enums.seller_type import SellerTypeOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..models.enums.x_credit_source import XCreditSourceOrStr
from ..models.summary_response import SummaryResponse
from ..server.server import Server


class Summary:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SummaryWithRawResponse(client, server, auth)

    def get_price_summary(
        self,
        keyword: str,
        *,
        count: int | None = 240,
        page: int | None = 1,
        ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM,
        category_id: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        item_condition: ItemConditionOrStr | None = None,
        condition_id: int | None = None,
        buying_format: BuyingFormatOrStr | None = None,
        seller_type: SellerTypeOrStr | None = None,
        sold_after: Date | None = None,
        sold_before: Date | None = None,
        aspect_filter: str | None = None,
        exact_match: bool | None = False,
        relevance: bool | None = True,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SummaryResponse:
        """Runs the same sold search and billing flow as /v1/scrape, but returns only the cleaned price summary, raw
        comparison evidence, result counts, and cache status.

        Args:
            keyword: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            ebay_site: Value sent with the request.
            category_id: Value sent with the request.
            sort_order: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            item_condition: Value sent with the request.
            condition_id: Value sent with the request.
            buying_format: Value sent with the request.
            seller_type: Value sent with the request.
            sold_after: Value sent with the request.
            sold_before: Value sent with the request.
            aspect_filter: JSON object of eBay facet names and values.
            exact_match: Value sent with the request.
            relevance: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Price summary and raw-versus-cleaned evidence.

        Raises:
            ApiError: Invalid parameters. Missing or invalid API key. Credential lacks comps:read scope. Rate limit or
                all available billing sources exhausted. eBay temporarily blocked the upstream request. Scraping service
                temporarily at capacity. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.get_price_summary(
                keyword,
                count=count,
                page=page,
                ebay_site=ebay_site,
                category_id=category_id,
                sort_order=sort_order,
                min_price=min_price,
                max_price=max_price,
                item_condition=item_condition,
                condition_id=condition_id,
                buying_format=buying_format,
                seller_type=seller_type,
                sold_after=sold_after,
                sold_before=sold_before,
                aspect_filter=aspect_filter,
                exact_match=exact_match,
                relevance=relevance,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SummaryWithRawResponse:
        return self._with_raw_response


class AsyncSummary:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSummaryWithRawResponse(client, server, auth)

    async def get_price_summary(
        self,
        keyword: str,
        *,
        count: int | None = 240,
        page: int | None = 1,
        ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM,
        category_id: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        item_condition: ItemConditionOrStr | None = None,
        condition_id: int | None = None,
        buying_format: BuyingFormatOrStr | None = None,
        seller_type: SellerTypeOrStr | None = None,
        sold_after: Date | None = None,
        sold_before: Date | None = None,
        aspect_filter: str | None = None,
        exact_match: bool | None = False,
        relevance: bool | None = True,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SummaryResponse:
        """Runs the same sold search and billing flow as /v1/scrape, but returns only the cleaned price summary, raw
        comparison evidence, result counts, and cache status.

        Args:
            keyword: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            ebay_site: Value sent with the request.
            category_id: Value sent with the request.
            sort_order: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            item_condition: Value sent with the request.
            condition_id: Value sent with the request.
            buying_format: Value sent with the request.
            seller_type: Value sent with the request.
            sold_after: Value sent with the request.
            sold_before: Value sent with the request.
            aspect_filter: JSON object of eBay facet names and values.
            exact_match: Value sent with the request.
            relevance: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Price summary and raw-versus-cleaned evidence.

        Raises:
            ApiError: Invalid parameters. Missing or invalid API key. Credential lacks comps:read scope. Rate limit or
                all available billing sources exhausted. eBay temporarily blocked the upstream request. Scraping service
                temporarily at capacity. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.get_price_summary(
                keyword,
                count=count,
                page=page,
                ebay_site=ebay_site,
                category_id=category_id,
                sort_order=sort_order,
                min_price=min_price,
                max_price=max_price,
                item_condition=item_condition,
                condition_id=condition_id,
                buying_format=buying_format,
                seller_type=seller_type,
                sold_after=sold_after,
                sold_before=sold_before,
                aspect_filter=aspect_filter,
                exact_match=exact_match,
                relevance=relevance,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSummaryWithRawResponse:
        return self._with_raw_response


class SummaryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_price_summary(
        self,
        keyword: str,
        *,
        count: int | None = 240,
        page: int | None = 1,
        ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM,
        category_id: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        item_condition: ItemConditionOrStr | None = None,
        condition_id: int | None = None,
        buying_format: BuyingFormatOrStr | None = None,
        seller_type: SellerTypeOrStr | None = None,
        sold_after: Date | None = None,
        sold_before: Date | None = None,
        aspect_filter: str | None = None,
        exact_match: bool | None = False,
        relevance: bool | None = True,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SummaryResponse, GetPriceSummaryErrorBody]:
        """Runs the same sold search and billing flow as /v1/scrape, but returns only the cleaned price summary, raw
        comparison evidence, result counts, and cache status.

        Args:
            keyword: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            ebay_site: Value sent with the request.
            category_id: Value sent with the request.
            sort_order: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            item_condition: Value sent with the request.
            condition_id: Value sent with the request.
            buying_format: Value sent with the request.
            seller_type: Value sent with the request.
            sold_after: Value sent with the request.
            sold_before: Value sent with the request.
            aspect_filter: JSON object of eBay facet names and values.
            exact_match: Value sent with the request.
            relevance: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/summary"),
            query_params=[
                param[str]("keyword", keyword),
                param[int | None]("count", count),
                param[int | None]("page", page),
                param[EbaySiteOrStr | None]("ebaySite", ebay_site),
                param[str | None]("categoryId", category_id),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[ItemConditionOrStr | None]("itemCondition", item_condition),
                param[int | None]("conditionId", condition_id),
                param[BuyingFormatOrStr | None]("buyingFormat", buying_format),
                param[SellerTypeOrStr | None]("sellerType", seller_type),
                param[Date | None]("soldAfter", sold_after),
                param[Date | None]("soldBefore", sold_before),
                param[str | None]("aspectFilter", aspect_filter),
                param[bool | None]("exactMatch", exact_match),
                param[bool | None]("relevance", relevance),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SummaryResponse],
            error_mapper=get_price_summary_error_mapper,
            request_options=request_options,
        )


class AsyncSummaryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_price_summary(
        self,
        keyword: str,
        *,
        count: int | None = 240,
        page: int | None = 1,
        ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM,
        category_id: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        item_condition: ItemConditionOrStr | None = None,
        condition_id: int | None = None,
        buying_format: BuyingFormatOrStr | None = None,
        seller_type: SellerTypeOrStr | None = None,
        sold_after: Date | None = None,
        sold_before: Date | None = None,
        aspect_filter: str | None = None,
        exact_match: bool | None = False,
        relevance: bool | None = True,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SummaryResponse, GetPriceSummaryErrorBody]:
        """Runs the same sold search and billing flow as /v1/scrape, but returns only the cleaned price summary, raw
        comparison evidence, result counts, and cache status.

        Args:
            keyword: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            ebay_site: Value sent with the request.
            category_id: Value sent with the request.
            sort_order: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            item_condition: Value sent with the request.
            condition_id: Value sent with the request.
            buying_format: Value sent with the request.
            seller_type: Value sent with the request.
            sold_after: Value sent with the request.
            sold_before: Value sent with the request.
            aspect_filter: JSON object of eBay facet names and values.
            exact_match: Value sent with the request.
            relevance: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/summary"),
            query_params=[
                param[str]("keyword", keyword),
                param[int | None]("count", count),
                param[int | None]("page", page),
                param[EbaySiteOrStr | None]("ebaySite", ebay_site),
                param[str | None]("categoryId", category_id),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[ItemConditionOrStr | None]("itemCondition", item_condition),
                param[int | None]("conditionId", condition_id),
                param[BuyingFormatOrStr | None]("buyingFormat", buying_format),
                param[SellerTypeOrStr | None]("sellerType", seller_type),
                param[Date | None]("soldAfter", sold_after),
                param[Date | None]("soldBefore", sold_before),
                param[str | None]("aspectFilter", aspect_filter),
                param[bool | None]("exactMatch", exact_match),
                param[bool | None]("relevance", relevance),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SummaryResponse],
            error_mapper=get_price_summary_error_mapper,
            request_options=request_options,
        )
