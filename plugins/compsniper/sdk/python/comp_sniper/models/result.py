from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .average_shipping import AverageShipping, AverageShippingDict
from .average_sold_price import AverageSoldPrice, AverageSoldPriceDict
from .enums.record_type import RecordTypeOrStr
from .sold_price import SoldPrice, SoldPriceDict
from .total_sales import TotalSales, TotalSalesDict


class Result(SdkBaseModel):
    item_id: Optional[str] = Field(default=UNSET, alias="itemId")
    title: OptionalNullable[str] = UNSET
    extended_title: OptionalNullable[str] = Field(default=UNSET, alias="extendedTitle")
    item_url: OptionalNullable[str] = Field(default=UNSET, alias="itemUrl")
    image_url: OptionalNullable[str] = Field(default=UNSET, alias="imageUrl")
    record_type: Optional[RecordTypeOrStr] = Field(default=UNSET, alias="recordType")
    sold_units: Optional[int] = Field(default=UNSET, alias="soldUnits")
    average_sold_price: OptionalNullable[AverageSoldPrice] = Field(default=UNSET, alias="averageSoldPrice")
    total_sales: OptionalNullable[TotalSales] = Field(default=UNSET, alias="totalSales")
    average_shipping: OptionalNullable[AverageShipping] = Field(default=UNSET, alias="averageShipping")
    sold_price: OptionalNullable[SoldPrice] = Field(default=UNSET, alias="soldPrice")
    sold_date: OptionalNullable[str] = Field(default=UNSET, alias="soldDate")
    last_sold_date: Optional[str] = Field(default=UNSET, alias="lastSoldDate")
    listing_format: OptionalNullable[str] = Field(default=UNSET, alias="listingFormat")
    bids: OptionalNullable[int] = UNSET
    condition: OptionalNullable[str] = UNSET
    condition_id: OptionalNullable[int] = Field(default=UNSET, alias="conditionId")


class ResultDict(TypedDict):
    item_id: NotRequired[str]
    title: NotRequired[str | None]
    extended_title: NotRequired[str | None]
    item_url: NotRequired[str | None]
    image_url: NotRequired[str | None]
    record_type: NotRequired[RecordTypeOrStr]
    sold_units: NotRequired[int]
    average_sold_price: NotRequired[AverageSoldPriceDict | None]
    total_sales: NotRequired[TotalSalesDict | None]
    average_shipping: NotRequired[AverageShippingDict | None]
    sold_price: NotRequired[SoldPriceDict | None]
    sold_date: NotRequired[str | None]
    last_sold_date: NotRequired[str]
    listing_format: NotRequired[str | None]
    bids: NotRequired[int | None]
    condition: NotRequired[str | None]
    condition_id: NotRequired[int | None]
