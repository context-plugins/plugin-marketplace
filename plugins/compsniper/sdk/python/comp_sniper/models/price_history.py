from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PriceHistory(SdkBaseModel):
    date: Optional[str] = UNSET
    variant: Optional[str] = UNSET
    condition: Optional[str] = UNSET
    language: Optional[str] = UNSET
    market_price: Optional[float] = Field(default=UNSET, alias="marketPrice")
    quantity_sold: Optional[int] = Field(default=UNSET, alias="quantitySold")
    transaction_count: Optional[int] = Field(default=UNSET, alias="transactionCount")
    low_sale_price: Optional[float] = Field(default=UNSET, alias="lowSalePrice")
    high_sale_price: Optional[float] = Field(default=UNSET, alias="highSalePrice")


class PriceHistoryDict(TypedDict):
    date: NotRequired[str]
    variant: NotRequired[str]
    condition: NotRequired[str]
    language: NotRequired[str]
    market_price: NotRequired[float]
    quantity_sold: NotRequired[int]
    transaction_count: NotRequired[int]
    low_sale_price: NotRequired[float]
    high_sale_price: NotRequired[float]
