from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .result import Result, ResultDict
from .totals_comp_sniper_marketplace_and_shipping_sold_history_api import (
    TotalsCompSniperMarketplaceAndShippingSoldHistoryApi,
    TotalsCompSniperMarketplaceAndShippingSoldHistoryApiDict,
)


class V1ResearchSoldResponse(SdkBaseModel):
    source: Optional[str] = UNSET
    ebay_site: Optional[str] = Field(default=UNSET, alias="ebaySite")
    display_currency: Optional[str] = Field(default=UNSET, alias="displayCurrency")
    start_date: Optional[str] = Field(default=UNSET, alias="startDate")
    end_date: Optional[str] = Field(default=UNSET, alias="endDate")
    page: Optional[int] = UNSET
    limit: Optional[int] = UNSET
    source_result_count: Optional[int] = Field(default=UNSET, alias="sourceResultCount")
    result_count: Optional[int] = Field(default=UNSET, alias="resultCount")
    has_next_page: Optional[bool] = Field(default=UNSET, alias="hasNextPage")
    next_page: OptionalNullable[int] = Field(default=UNSET, alias="nextPage")
    relevance_applied: Optional[bool] = Field(default=UNSET, alias="relevanceApplied")
    totals: OptionalNullable[TotalsCompSniperMarketplaceAndShippingSoldHistoryApi] = UNSET
    """Whole-search totals for the date range (same on every page, before relevance cleanup or singleUnitOnly).
    totalSold is an upper bound on the number of rows. Null when there are no sales."""

    warnings: Optional[list[str]] = UNSET
    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    results: Optional[list[Result]] = UNSET


class V1ResearchSoldResponseDict(TypedDict):
    source: NotRequired[str]
    ebay_site: NotRequired[str]
    display_currency: NotRequired[str]
    start_date: NotRequired[str]
    end_date: NotRequired[str]
    page: NotRequired[int]
    limit: NotRequired[int]
    source_result_count: NotRequired[int]
    result_count: NotRequired[int]
    has_next_page: NotRequired[bool]
    next_page: NotRequired[int | None]
    relevance_applied: NotRequired[bool]
    totals: NotRequired[TotalsCompSniperMarketplaceAndShippingSoldHistoryApiDict | None]
    warnings: NotRequired[list[str]]
    request_id: NotRequired[str]
    results: NotRequired[list[ResultDict]]
