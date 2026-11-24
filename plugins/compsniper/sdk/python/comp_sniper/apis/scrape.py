from __future__ import annotations

from uuid import UUID, uuid4

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
    async_text_decoder,
    json_body,
    json_decoder,
    param,
    text_decoder,
    unwrap,
)
from ..errors.browse_sold_listings_by_category_error import (
    BrowseSoldListingsByCategoryErrorBody,
    browse_sold_listings_by_category_error_mapper,
)
from ..errors.cancel_max_search_error import CancelMaxSearchErrorBody, cancel_max_search_error_mapper
from ..errors.download_max_search_csv_error import DownloadMaxSearchCsvErrorBody, download_max_search_csv_error_mapper
from ..errors.get_max_search_results_error import GetMaxSearchResultsErrorBody, get_max_search_results_error_mapper
from ..errors.search_sold_listings_error import SearchSoldListingsErrorBody, search_sold_listings_error_mapper
from ..errors.start_max_search_error import StartMaxSearchErrorBody, start_max_search_error_mapper
from ..models.enums.buying_format import BuyingFormat, BuyingFormatOrStr
from ..models.enums.ebay_site import EbaySite, EbaySiteOrStr
from ..models.enums.item_condition import ItemConditionOrStr
from ..models.enums.item_location import ItemLocation, ItemLocationOrStr
from ..models.enums.seller_type import SellerTypeOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..models.enums.sort_order1 import SortOrder1OrStr
from ..models.enums.x_credit_source import XCreditSourceOrStr
from ..models.max_cancel_response import MaxCancelResponse
from ..models.max_job import MaxJob
from ..models.max_job_accepted import MaxJobAccepted
from ..models.max_search_request import MaxSearchRequest, MaxSearchRequestDict
from ..models.scrape_response import ScrapeResponse
from ..server.server import Server


class Scrape:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ScrapeWithRawResponse(client, server, auth)

    def browse_sold_listings_by_category(
        self,
        category_id: str,
        *,
        count: int | None = 240,
        page: int | None = 1,
        ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM,
        sort_order: SortOrderOrStr | None = None,
        item_condition: ItemConditionOrStr | None = None,
        condition_id: int | None = None,
        buying_format: BuyingFormatOrStr | None = None,
        seller_type: SellerTypeOrStr | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        aspect_filter: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScrapeResponse:
        """Returns completed eBay sales from one category without requiring a keyword. Uses the same authentication,
        quota, filtering, response shape, and error contract as /v1/scrape.

        Args:
            category_id: Positive numeric eBay category id (_sacat).
            count: Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline
                validation and filtering.
            page: Value sent with the request.
            ebay_site: Value sent with the request.
            sort_order: Value sent with the request.
            item_condition: Value sent with the request.
            condition_id: Value sent with the request.
            buying_format: Value sent with the request.
            seller_type: EU marketplaces only.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            aspect_filter: JSON object of human-readable eBay facets.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Category sold listings and price summary. keyword is an empty string.

        Raises:
            ApiError: Missing or invalid categoryId or filters. Missing or invalid API key. Per-minute rate limit or
                monthly quota exceeded. eBay temporarily blocked the upstream request. Scraping service temporarily at
                capacity. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.browse_sold_listings_by_category(
                category_id,
                count=count,
                page=page,
                ebay_site=ebay_site,
                sort_order=sort_order,
                item_condition=item_condition,
                condition_id=condition_id,
                buying_format=buying_format,
                seller_type=seller_type,
                min_price=min_price,
                max_price=max_price,
                aspect_filter=aspect_filter,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    def cancel_max_search(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> MaxCancelResponse:
        """Send a ``DELETE`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cancellation requested or existing terminal status returned.

        Raises:
            ApiError: Missing or invalid API key. Credential lacks jobs:write scope. Job not found for this account.
                ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.cancel_max_search(job_id, request_options=request_options))

    def download_max_search_csv(
        self, job_id: UUID, token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> str:
        """Downloads the stored job result using the signed token returned for download or email delivery. The token
        itself authorizes this URL.

        Args:
            job_id: Value sent with the request.
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV export.

        Raises:
            ApiError: Invalid or expired signed token. Job not found. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.download_max_search_csv(job_id, token, request_options=request_options))

    def get_max_search_results(self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MaxJob:
        """Send a ``GET`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current job progress or terminal result.

        Raises:
            ApiError: Missing or invalid API key. Credential lacks comps:read scope. Job not found for this account.
                ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.get_max_search_results(job_id, request_options=request_options))

    def search_sold_listings(
        self,
        keyword: str,
        *,
        count: int | None = 240,
        page: int | None = 1,
        ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM,
        category_id: str | None = "0",
        sort_order: SortOrder1OrStr | None = None,
        item_location: ItemLocationOrStr | None = ItemLocation.DEFAULT,
        item_condition: ItemConditionOrStr | None = None,
        condition_id: int | None = None,
        buying_format: BuyingFormatOrStr | None = BuyingFormat.ALL,
        seller_type: SellerTypeOrStr | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        include_complete_listing: bool | None = True,
        sold: bool | None = True,
        sold_after: Date | None = None,
        sold_before: Date | None = None,
        aspect_filter: str | None = None,
        exact_match: bool | None = False,
        relevance: bool | None = True,
        best_offer_price: bool | None = False,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScrapeResponse:
        """Returns completed eBay sales by default. Set sold=false for current active listings.

        Args:
            keyword: Product to search. Supports eBay operators, e.g. minus-sign exclusions ('airpods pro -case').
            count: Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline
                validation, date filters, or relevance cleanup.
            page: Value sent with the request.
            ebay_site: eBay marketplace.
            category_id: eBay category id (_sacat).
            sort_order: Value sent with the request.
            item_location: Value sent with the request.
            item_condition: Value sent with the request.
            condition_id: Numeric eBay condition id; overrides itemCondition.
            buying_format: Value sent with the request.
            seller_type: Filters labeled sellers on ebay.de, ebay.fr, ebay.it, and ebay.es. Ignored elsewhere; unlabeled
                EU rows are excluded while filtering.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            include_complete_listing: Sold-search compatibility option. Ignored when sold=false.
            sold: true returns completed sales. false returns current active listings with currentPrice, watcherCount,
                unitsSold, acceptsOffers, and timeLeft when visible.
            sold_after: Value sent with the request.
            sold_before: Value sent with the request.
            aspect_filter: JSON object of human-readable eBay facet names. Values may be strings, pipe-delimited
                strings, or arrays of strings.
            exact_match: When true, removes listings after eBay's explicit Results matching fewer words boundary before
                relevance cleanup. When the boundary is absent, rows are unchanged. This follows eBay's section split
                and does not independently prove semantic exactness. false preserves the existing broad-search cache and
                behavior. Leave it off for long, specific keywords (full card numbers, full set names): eBay often has
                no exact matches for those, so exactMatch=true can return no results even when the item sold many times.
            relevance: When true, query-aware deterministic checks remove explicit pricing mismatches before one bounded
                semantic cleanup stage handles accessories, parts, and wrong models. Explicit query intent is preserved.
                false disables both relevance stages and returns broad valid matches. Baseline validation of item IDs,
                item URLs, prices, sold dates, and duplicate IDs always applies.
            best_offer_price: When true, sold rows where bestOfferAccepted is true gain acceptedOfferPrice (the price
                the buyer actually paid, null unless found) and acceptedOfferPriceStatus (found, pending or
                not_available). soldPrice is never changed. US-dollar sales only; other currencies return not_available.
                No extra charge. Ignored with sold=false.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sold listings with price intelligence, or active listings with visible demand signals.

        Raises:
            ApiError: Invalid parameters. Missing or invalid API key. Inspect the response code. Retry rate_limited
                after Retry-After; never loop on quota_exceeded. eBay temporarily blocked the upstream request.
                ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.search_sold_listings(
                keyword,
                count=count,
                page=page,
                ebay_site=ebay_site,
                category_id=category_id,
                sort_order=sort_order,
                item_location=item_location,
                item_condition=item_condition,
                condition_id=condition_id,
                buying_format=buying_format,
                seller_type=seller_type,
                min_price=min_price,
                max_price=max_price,
                include_complete_listing=include_complete_listing,
                sold=sold,
                sold_after=sold_after,
                sold_before=sold_before,
                aspect_filter=aspect_filter,
                exact_match=exact_match,
                relevance=relevance,
                best_offer_price=best_offer_price,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    def start_max_search(
        self,
        body: MaxSearchRequest | MaxSearchRequestDict,
        *,
        x_credit_source: XCreditSourceOrStr | None = None,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MaxJobAccepted:
        """Searches up to 100 eBay result pages in the background. Each successful page uses one monthly request, then
        one purchased credit after monthly quota is exhausted.

        Args:
            body: The request body.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            idempotency_key: Return the previously created job when a submission is retried.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Existing idempotent job returned.

        Raises:
            ApiError: Invalid request body or search options. Missing or invalid API key. Credential lacks jobs:write
                scope. Another Max Mode job is active for this account. Submission rate limit exceeded. ``error`` is
                ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.start_max_search(
                body, x_credit_source=x_credit_source, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ScrapeWithRawResponse:
        return self._with_raw_response


class AsyncScrape:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncScrapeWithRawResponse(client, server, auth)

    async def browse_sold_listings_by_category(
        self,
        category_id: str,
        *,
        count: int | None = 240,
        page: int | None = 1,
        ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM,
        sort_order: SortOrderOrStr | None = None,
        item_condition: ItemConditionOrStr | None = None,
        condition_id: int | None = None,
        buying_format: BuyingFormatOrStr | None = None,
        seller_type: SellerTypeOrStr | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        aspect_filter: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScrapeResponse:
        """Returns completed eBay sales from one category without requiring a keyword. Uses the same authentication,
        quota, filtering, response shape, and error contract as /v1/scrape.

        Args:
            category_id: Positive numeric eBay category id (_sacat).
            count: Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline
                validation and filtering.
            page: Value sent with the request.
            ebay_site: Value sent with the request.
            sort_order: Value sent with the request.
            item_condition: Value sent with the request.
            condition_id: Value sent with the request.
            buying_format: Value sent with the request.
            seller_type: EU marketplaces only.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            aspect_filter: JSON object of human-readable eBay facets.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Category sold listings and price summary. keyword is an empty string.

        Raises:
            ApiError: Missing or invalid categoryId or filters. Missing or invalid API key. Per-minute rate limit or
                monthly quota exceeded. eBay temporarily blocked the upstream request. Scraping service temporarily at
                capacity. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.browse_sold_listings_by_category(
                category_id,
                count=count,
                page=page,
                ebay_site=ebay_site,
                sort_order=sort_order,
                item_condition=item_condition,
                condition_id=condition_id,
                buying_format=buying_format,
                seller_type=seller_type,
                min_price=min_price,
                max_price=max_price,
                aspect_filter=aspect_filter,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    async def cancel_max_search(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MaxCancelResponse:
        """Send a ``DELETE`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cancellation requested or existing terminal status returned.

        Raises:
            ApiError: Missing or invalid API key. Credential lacks jobs:write scope. Job not found for this account.
                ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.cancel_max_search(job_id, request_options=request_options))

    async def download_max_search_csv(
        self, job_id: UUID, token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> str:
        """Downloads the stored job result using the signed token returned for download or email delivery. The token
        itself authorizes this URL.

        Args:
            job_id: Value sent with the request.
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV export.

        Raises:
            ApiError: Invalid or expired signed token. Job not found. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.download_max_search_csv(job_id, token, request_options=request_options)
        )

    async def get_max_search_results(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MaxJob:
        """Send a ``GET`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current job progress or terminal result.

        Raises:
            ApiError: Missing or invalid API key. Credential lacks comps:read scope. Job not found for this account.
                ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.get_max_search_results(job_id, request_options=request_options))

    async def search_sold_listings(
        self,
        keyword: str,
        *,
        count: int | None = 240,
        page: int | None = 1,
        ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM,
        category_id: str | None = "0",
        sort_order: SortOrder1OrStr | None = None,
        item_location: ItemLocationOrStr | None = ItemLocation.DEFAULT,
        item_condition: ItemConditionOrStr | None = None,
        condition_id: int | None = None,
        buying_format: BuyingFormatOrStr | None = BuyingFormat.ALL,
        seller_type: SellerTypeOrStr | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        include_complete_listing: bool | None = True,
        sold: bool | None = True,
        sold_after: Date | None = None,
        sold_before: Date | None = None,
        aspect_filter: str | None = None,
        exact_match: bool | None = False,
        relevance: bool | None = True,
        best_offer_price: bool | None = False,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScrapeResponse:
        """Returns completed eBay sales by default. Set sold=false for current active listings.

        Args:
            keyword: Product to search. Supports eBay operators, e.g. minus-sign exclusions ('airpods pro -case').
            count: Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline
                validation, date filters, or relevance cleanup.
            page: Value sent with the request.
            ebay_site: eBay marketplace.
            category_id: eBay category id (_sacat).
            sort_order: Value sent with the request.
            item_location: Value sent with the request.
            item_condition: Value sent with the request.
            condition_id: Numeric eBay condition id; overrides itemCondition.
            buying_format: Value sent with the request.
            seller_type: Filters labeled sellers on ebay.de, ebay.fr, ebay.it, and ebay.es. Ignored elsewhere; unlabeled
                EU rows are excluded while filtering.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            include_complete_listing: Sold-search compatibility option. Ignored when sold=false.
            sold: true returns completed sales. false returns current active listings with currentPrice, watcherCount,
                unitsSold, acceptsOffers, and timeLeft when visible.
            sold_after: Value sent with the request.
            sold_before: Value sent with the request.
            aspect_filter: JSON object of human-readable eBay facet names. Values may be strings, pipe-delimited
                strings, or arrays of strings.
            exact_match: When true, removes listings after eBay's explicit Results matching fewer words boundary before
                relevance cleanup. When the boundary is absent, rows are unchanged. This follows eBay's section split
                and does not independently prove semantic exactness. false preserves the existing broad-search cache and
                behavior. Leave it off for long, specific keywords (full card numbers, full set names): eBay often has
                no exact matches for those, so exactMatch=true can return no results even when the item sold many times.
            relevance: When true, query-aware deterministic checks remove explicit pricing mismatches before one bounded
                semantic cleanup stage handles accessories, parts, and wrong models. Explicit query intent is preserved.
                false disables both relevance stages and returns broad valid matches. Baseline validation of item IDs,
                item URLs, prices, sold dates, and duplicate IDs always applies.
            best_offer_price: When true, sold rows where bestOfferAccepted is true gain acceptedOfferPrice (the price
                the buyer actually paid, null unless found) and acceptedOfferPriceStatus (found, pending or
                not_available). soldPrice is never changed. US-dollar sales only; other currencies return not_available.
                No extra charge. Ignored with sold=false.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sold listings with price intelligence, or active listings with visible demand signals.

        Raises:
            ApiError: Invalid parameters. Missing or invalid API key. Inspect the response code. Retry rate_limited
                after Retry-After; never loop on quota_exceeded. eBay temporarily blocked the upstream request.
                ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.search_sold_listings(
                keyword,
                count=count,
                page=page,
                ebay_site=ebay_site,
                category_id=category_id,
                sort_order=sort_order,
                item_location=item_location,
                item_condition=item_condition,
                condition_id=condition_id,
                buying_format=buying_format,
                seller_type=seller_type,
                min_price=min_price,
                max_price=max_price,
                include_complete_listing=include_complete_listing,
                sold=sold,
                sold_after=sold_after,
                sold_before=sold_before,
                aspect_filter=aspect_filter,
                exact_match=exact_match,
                relevance=relevance,
                best_offer_price=best_offer_price,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    async def start_max_search(
        self,
        body: MaxSearchRequest | MaxSearchRequestDict,
        *,
        x_credit_source: XCreditSourceOrStr | None = None,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MaxJobAccepted:
        """Searches up to 100 eBay result pages in the background. Each successful page uses one monthly request, then
        one purchased credit after monthly quota is exhausted.

        Args:
            body: The request body.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            idempotency_key: Return the previously created job when a submission is retried.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Existing idempotent job returned.

        Raises:
            ApiError: Invalid request body or search options. Missing or invalid API key. Credential lacks jobs:write
                scope. Another Max Mode job is active for this account. Submission rate limit exceeded. ``error`` is
                ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.start_max_search(
                body, x_credit_source=x_credit_source, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncScrapeWithRawResponse:
        return self._with_raw_response


class ScrapeWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def browse_sold_listings_by_category(
        self,
        category_id: str,
        *,
        count: int | None = 240,
        page: int | None = 1,
        ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM,
        sort_order: SortOrderOrStr | None = None,
        item_condition: ItemConditionOrStr | None = None,
        condition_id: int | None = None,
        buying_format: BuyingFormatOrStr | None = None,
        seller_type: SellerTypeOrStr | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        aspect_filter: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScrapeResponse, BrowseSoldListingsByCategoryErrorBody]:
        """Returns completed eBay sales from one category without requiring a keyword. Uses the same authentication,
        quota, filtering, response shape, and error contract as /v1/scrape.

        Args:
            category_id: Positive numeric eBay category id (_sacat).
            count: Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline
                validation and filtering.
            page: Value sent with the request.
            ebay_site: Value sent with the request.
            sort_order: Value sent with the request.
            item_condition: Value sent with the request.
            condition_id: Value sent with the request.
            buying_format: Value sent with the request.
            seller_type: EU marketplaces only.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            aspect_filter: JSON object of human-readable eBay facets.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/scrape/category"),
            query_params=[
                param[str]("categoryId", category_id),
                param[int | None]("count", count),
                param[int | None]("page", page),
                param[EbaySiteOrStr | None]("ebaySite", ebay_site),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[ItemConditionOrStr | None]("itemCondition", item_condition),
                param[int | None]("conditionId", condition_id),
                param[BuyingFormatOrStr | None]("buyingFormat", buying_format),
                param[SellerTypeOrStr | None]("sellerType", seller_type),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[str | None]("aspectFilter", aspect_filter),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScrapeResponse],
            error_mapper=browse_sold_listings_by_category_error_mapper,
            request_options=request_options,
        )

    def cancel_max_search(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MaxCancelResponse, CancelMaxSearchErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/scrape/max/{jobId}"),
            path_params=[param[UUID]("jobId", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MaxCancelResponse],
            error_mapper=cancel_max_search_error_mapper,
            request_options=request_options,
        )

    def download_max_search_csv(
        self, job_id: UUID, token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, DownloadMaxSearchCsvErrorBody]:
        """Downloads the stored job result using the signed token returned for download or email delivery. The token
        itself authorizes this URL.

        Args:
            job_id: Value sent with the request.
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/scrape/max/{jobId}/download.csv"),
            path_params=[param[UUID]("jobId", job_id)],
            query_params=[param[str]("token", token)],
            decoder=text_decoder[str],
            error_mapper=download_max_search_csv_error_mapper,
            request_options=request_options,
        )

    def get_max_search_results(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MaxJob, GetMaxSearchResultsErrorBody]:
        """Send a ``GET`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/scrape/max/results/{jobId}"),
            path_params=[param[UUID]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MaxJob],
            error_mapper=get_max_search_results_error_mapper,
            request_options=request_options,
        )

    def search_sold_listings(
        self,
        keyword: str,
        *,
        count: int | None = 240,
        page: int | None = 1,
        ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM,
        category_id: str | None = "0",
        sort_order: SortOrder1OrStr | None = None,
        item_location: ItemLocationOrStr | None = ItemLocation.DEFAULT,
        item_condition: ItemConditionOrStr | None = None,
        condition_id: int | None = None,
        buying_format: BuyingFormatOrStr | None = BuyingFormat.ALL,
        seller_type: SellerTypeOrStr | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        include_complete_listing: bool | None = True,
        sold: bool | None = True,
        sold_after: Date | None = None,
        sold_before: Date | None = None,
        aspect_filter: str | None = None,
        exact_match: bool | None = False,
        relevance: bool | None = True,
        best_offer_price: bool | None = False,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScrapeResponse, SearchSoldListingsErrorBody]:
        """Returns completed eBay sales by default. Set sold=false for current active listings.

        Args:
            keyword: Product to search. Supports eBay operators, e.g. minus-sign exclusions ('airpods pro -case').
            count: Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline
                validation, date filters, or relevance cleanup.
            page: Value sent with the request.
            ebay_site: eBay marketplace.
            category_id: eBay category id (_sacat).
            sort_order: Value sent with the request.
            item_location: Value sent with the request.
            item_condition: Value sent with the request.
            condition_id: Numeric eBay condition id; overrides itemCondition.
            buying_format: Value sent with the request.
            seller_type: Filters labeled sellers on ebay.de, ebay.fr, ebay.it, and ebay.es. Ignored elsewhere; unlabeled
                EU rows are excluded while filtering.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            include_complete_listing: Sold-search compatibility option. Ignored when sold=false.
            sold: true returns completed sales. false returns current active listings with currentPrice, watcherCount,
                unitsSold, acceptsOffers, and timeLeft when visible.
            sold_after: Value sent with the request.
            sold_before: Value sent with the request.
            aspect_filter: JSON object of human-readable eBay facet names. Values may be strings, pipe-delimited
                strings, or arrays of strings.
            exact_match: When true, removes listings after eBay's explicit Results matching fewer words boundary before
                relevance cleanup. When the boundary is absent, rows are unchanged. This follows eBay's section split
                and does not independently prove semantic exactness. false preserves the existing broad-search cache and
                behavior. Leave it off for long, specific keywords (full card numbers, full set names): eBay often has
                no exact matches for those, so exactMatch=true can return no results even when the item sold many times.
            relevance: When true, query-aware deterministic checks remove explicit pricing mismatches before one bounded
                semantic cleanup stage handles accessories, parts, and wrong models. Explicit query intent is preserved.
                false disables both relevance stages and returns broad valid matches. Baseline validation of item IDs,
                item URLs, prices, sold dates, and duplicate IDs always applies.
            best_offer_price: When true, sold rows where bestOfferAccepted is true gain acceptedOfferPrice (the price
                the buyer actually paid, null unless found) and acceptedOfferPriceStatus (found, pending or
                not_available). soldPrice is never changed. US-dollar sales only; other currencies return not_available.
                No extra charge. Ignored with sold=false.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/scrape"),
            query_params=[
                param[str]("keyword", keyword),
                param[int | None]("count", count),
                param[int | None]("page", page),
                param[EbaySiteOrStr | None]("ebaySite", ebay_site),
                param[str | None]("categoryId", category_id),
                param[SortOrder1OrStr | None]("sortOrder", sort_order),
                param[ItemLocationOrStr | None]("itemLocation", item_location),
                param[ItemConditionOrStr | None]("itemCondition", item_condition),
                param[int | None]("conditionId", condition_id),
                param[BuyingFormatOrStr | None]("buyingFormat", buying_format),
                param[SellerTypeOrStr | None]("sellerType", seller_type),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[bool | None]("includeCompleteListing", include_complete_listing),
                param[bool | None]("sold", sold),
                param[Date | None]("soldAfter", sold_after),
                param[Date | None]("soldBefore", sold_before),
                param[str | None]("aspectFilter", aspect_filter),
                param[bool | None]("exactMatch", exact_match),
                param[bool | None]("relevance", relevance),
                param[bool | None]("bestOfferPrice", best_offer_price),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScrapeResponse],
            error_mapper=search_sold_listings_error_mapper,
            request_options=request_options,
        )

    def start_max_search(
        self,
        body: MaxSearchRequest | MaxSearchRequestDict,
        *,
        x_credit_source: XCreditSourceOrStr | None = None,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MaxJobAccepted, StartMaxSearchErrorBody]:
        """Searches up to 100 eBay result pages in the background. Each successful page uses one monthly request, then
        one purchased credit after monthly quota is exhausted.

        Args:
            body: The request body.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            idempotency_key: Return the previously created job when a submission is retried.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/scrape/max"),
            headers=[
                param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source),
                param[str | None]("Idempotency-Key", idempotency_key),
            ],
            body=json_body[MaxSearchRequest | MaxSearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MaxJobAccepted],
            error_mapper=start_max_search_error_mapper,
            request_options=request_options,
        )


class AsyncScrapeWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def browse_sold_listings_by_category(
        self,
        category_id: str,
        *,
        count: int | None = 240,
        page: int | None = 1,
        ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM,
        sort_order: SortOrderOrStr | None = None,
        item_condition: ItemConditionOrStr | None = None,
        condition_id: int | None = None,
        buying_format: BuyingFormatOrStr | None = None,
        seller_type: SellerTypeOrStr | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        aspect_filter: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScrapeResponse, BrowseSoldListingsByCategoryErrorBody]:
        """Returns completed eBay sales from one category without requiring a keyword. Uses the same authentication,
        quota, filtering, response shape, and error contract as /v1/scrape.

        Args:
            category_id: Positive numeric eBay category id (_sacat).
            count: Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline
                validation and filtering.
            page: Value sent with the request.
            ebay_site: Value sent with the request.
            sort_order: Value sent with the request.
            item_condition: Value sent with the request.
            condition_id: Value sent with the request.
            buying_format: Value sent with the request.
            seller_type: EU marketplaces only.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            aspect_filter: JSON object of human-readable eBay facets.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/scrape/category"),
            query_params=[
                param[str]("categoryId", category_id),
                param[int | None]("count", count),
                param[int | None]("page", page),
                param[EbaySiteOrStr | None]("ebaySite", ebay_site),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[ItemConditionOrStr | None]("itemCondition", item_condition),
                param[int | None]("conditionId", condition_id),
                param[BuyingFormatOrStr | None]("buyingFormat", buying_format),
                param[SellerTypeOrStr | None]("sellerType", seller_type),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[str | None]("aspectFilter", aspect_filter),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScrapeResponse],
            error_mapper=browse_sold_listings_by_category_error_mapper,
            request_options=request_options,
        )

    async def cancel_max_search(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MaxCancelResponse, CancelMaxSearchErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/scrape/max/{jobId}"),
            path_params=[param[UUID]("jobId", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MaxCancelResponse],
            error_mapper=cancel_max_search_error_mapper,
            request_options=request_options,
        )

    async def download_max_search_csv(
        self, job_id: UUID, token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, DownloadMaxSearchCsvErrorBody]:
        """Downloads the stored job result using the signed token returned for download or email delivery. The token
        itself authorizes this URL.

        Args:
            job_id: Value sent with the request.
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/scrape/max/{jobId}/download.csv"),
            path_params=[param[UUID]("jobId", job_id)],
            query_params=[param[str]("token", token)],
            decoder=async_text_decoder[str],
            error_mapper=download_max_search_csv_error_mapper,
            request_options=request_options,
        )

    async def get_max_search_results(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MaxJob, GetMaxSearchResultsErrorBody]:
        """Send a ``GET`` request.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/scrape/max/results/{jobId}"),
            path_params=[param[UUID]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MaxJob],
            error_mapper=get_max_search_results_error_mapper,
            request_options=request_options,
        )

    async def search_sold_listings(
        self,
        keyword: str,
        *,
        count: int | None = 240,
        page: int | None = 1,
        ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM,
        category_id: str | None = "0",
        sort_order: SortOrder1OrStr | None = None,
        item_location: ItemLocationOrStr | None = ItemLocation.DEFAULT,
        item_condition: ItemConditionOrStr | None = None,
        condition_id: int | None = None,
        buying_format: BuyingFormatOrStr | None = BuyingFormat.ALL,
        seller_type: SellerTypeOrStr | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        include_complete_listing: bool | None = True,
        sold: bool | None = True,
        sold_after: Date | None = None,
        sold_before: Date | None = None,
        aspect_filter: str | None = None,
        exact_match: bool | None = False,
        relevance: bool | None = True,
        best_offer_price: bool | None = False,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScrapeResponse, SearchSoldListingsErrorBody]:
        """Returns completed eBay sales by default. Set sold=false for current active listings.

        Args:
            keyword: Product to search. Supports eBay operators, e.g. minus-sign exclusions ('airpods pro -case').
            count: Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline
                validation, date filters, or relevance cleanup.
            page: Value sent with the request.
            ebay_site: eBay marketplace.
            category_id: eBay category id (_sacat).
            sort_order: Value sent with the request.
            item_location: Value sent with the request.
            item_condition: Value sent with the request.
            condition_id: Numeric eBay condition id; overrides itemCondition.
            buying_format: Value sent with the request.
            seller_type: Filters labeled sellers on ebay.de, ebay.fr, ebay.it, and ebay.es. Ignored elsewhere; unlabeled
                EU rows are excluded while filtering.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            include_complete_listing: Sold-search compatibility option. Ignored when sold=false.
            sold: true returns completed sales. false returns current active listings with currentPrice, watcherCount,
                unitsSold, acceptsOffers, and timeLeft when visible.
            sold_after: Value sent with the request.
            sold_before: Value sent with the request.
            aspect_filter: JSON object of human-readable eBay facet names. Values may be strings, pipe-delimited
                strings, or arrays of strings.
            exact_match: When true, removes listings after eBay's explicit Results matching fewer words boundary before
                relevance cleanup. When the boundary is absent, rows are unchanged. This follows eBay's section split
                and does not independently prove semantic exactness. false preserves the existing broad-search cache and
                behavior. Leave it off for long, specific keywords (full card numbers, full set names): eBay often has
                no exact matches for those, so exactMatch=true can return no results even when the item sold many times.
            relevance: When true, query-aware deterministic checks remove explicit pricing mismatches before one bounded
                semantic cleanup stage handles accessories, parts, and wrong models. Explicit query intent is preserved.
                false disables both relevance stages and returns broad valid matches. Baseline validation of item IDs,
                item URLs, prices, sold dates, and duplicate IDs always applies.
            best_offer_price: When true, sold rows where bestOfferAccepted is true gain acceptedOfferPrice (the price
                the buyer actually paid, null unless found) and acceptedOfferPriceStatus (found, pending or
                not_available). soldPrice is never changed. US-dollar sales only; other currencies return not_available.
                No extra charge. Ignored with sold=false.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/scrape"),
            query_params=[
                param[str]("keyword", keyword),
                param[int | None]("count", count),
                param[int | None]("page", page),
                param[EbaySiteOrStr | None]("ebaySite", ebay_site),
                param[str | None]("categoryId", category_id),
                param[SortOrder1OrStr | None]("sortOrder", sort_order),
                param[ItemLocationOrStr | None]("itemLocation", item_location),
                param[ItemConditionOrStr | None]("itemCondition", item_condition),
                param[int | None]("conditionId", condition_id),
                param[BuyingFormatOrStr | None]("buyingFormat", buying_format),
                param[SellerTypeOrStr | None]("sellerType", seller_type),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[bool | None]("includeCompleteListing", include_complete_listing),
                param[bool | None]("sold", sold),
                param[Date | None]("soldAfter", sold_after),
                param[Date | None]("soldBefore", sold_before),
                param[str | None]("aspectFilter", aspect_filter),
                param[bool | None]("exactMatch", exact_match),
                param[bool | None]("relevance", relevance),
                param[bool | None]("bestOfferPrice", best_offer_price),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScrapeResponse],
            error_mapper=search_sold_listings_error_mapper,
            request_options=request_options,
        )

    async def start_max_search(
        self,
        body: MaxSearchRequest | MaxSearchRequestDict,
        *,
        x_credit_source: XCreditSourceOrStr | None = None,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MaxJobAccepted, StartMaxSearchErrorBody]:
        """Searches up to 100 eBay result pages in the background. Each successful page uses one monthly request, then
        one purchased credit after monthly quota is exhausted.

        Args:
            body: The request body.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            idempotency_key: Return the previously created job when a submission is retried.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/scrape/max"),
            headers=[
                param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source),
                param[str | None]("Idempotency-Key", idempotency_key),
            ],
            body=json_body[MaxSearchRequest | MaxSearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MaxJobAccepted],
            error_mapper=start_max_search_error_mapper,
            request_options=request_options,
        )
