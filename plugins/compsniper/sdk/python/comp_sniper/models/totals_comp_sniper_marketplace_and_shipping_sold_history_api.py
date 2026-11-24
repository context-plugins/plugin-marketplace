from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .average_shipping import AverageShipping, AverageShippingDict
from .average_sold_price import AverageSoldPrice, AverageSoldPriceDict
from .max_sold_price import MaxSoldPrice, MaxSoldPriceDict
from .min_sold_price import MinSoldPrice, MinSoldPriceDict
from .total_sales import TotalSales, TotalSalesDict


class TotalsCompSniperMarketplaceAndShippingSoldHistoryApi(SdkBaseModel):
    """Whole-search totals for the date range (same on every page, before relevance cleanup or singleUnitOnly).
    totalSold is an upper bound on the number of rows. Null when there are no sales."""

    total_sold: OptionalNullable[int] = Field(default=UNSET, alias="totalSold")
    total_sellers: OptionalNullable[int] = Field(default=UNSET, alias="totalSellers")
    average_sold_price: OptionalNullable[AverageSoldPrice] = Field(default=UNSET, alias="averageSoldPrice")
    min_sold_price: OptionalNullable[MinSoldPrice] = Field(default=UNSET, alias="minSoldPrice")
    max_sold_price: OptionalNullable[MaxSoldPrice] = Field(default=UNSET, alias="maxSoldPrice")
    average_shipping: OptionalNullable[AverageShipping] = Field(default=UNSET, alias="averageShipping")
    total_sales: OptionalNullable[TotalSales] = Field(default=UNSET, alias="totalSales")
    free_shipping_percent: OptionalNullable[str] = Field(default=UNSET, alias="freeShippingPercent")
    sell_through_percent: OptionalNullable[str] = Field(default=UNSET, alias="sellThroughPercent")


class TotalsCompSniperMarketplaceAndShippingSoldHistoryApiDict(TypedDict):
    total_sold: NotRequired[int | None]
    total_sellers: NotRequired[int | None]
    average_sold_price: NotRequired[AverageSoldPriceDict | None]
    min_sold_price: NotRequired[MinSoldPriceDict | None]
    max_sold_price: NotRequired[MaxSoldPriceDict | None]
    average_shipping: NotRequired[AverageShippingDict | None]
    total_sales: NotRequired[TotalSalesDict | None]
    free_shipping_percent: NotRequired[str | None]
    sell_through_percent: NotRequired[str | None]
