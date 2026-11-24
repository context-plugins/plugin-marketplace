from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .trade_in_value import TradeInValue, TradeInValueDict


class MarketvalueResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    vin: Optional[str] = UNSET
    retail: Optional[str] = UNSET
    """Retail price of the vehicle."""

    trade_in: Optional[str] = Field(default=UNSET, alias="tradeIn")
    """The trade in price of the vehicle."""

    rough_trade_in: Optional[str] = Field(default=UNSET, alias="roughTradeIn")
    average_trade_in: Optional[str] = Field(default=UNSET, alias="averageTradeIn")
    loan_value: Optional[str] = Field(default=UNSET, alias="loanValue")
    msrp: Optional[str] = UNSET
    trade_in_values: Optional[list[TradeInValue]] = Field(default=UNSET, alias="tradeInValues")
    auction_values: Optional[Any] = Field(default=UNSET, alias="auctionValues")


class MarketvalueResponseDict(TypedDict):
    success: NotRequired[bool]
    vin: NotRequired[str]
    retail: NotRequired[str]
    trade_in: NotRequired[str]
    rough_trade_in: NotRequired[str]
    average_trade_in: NotRequired[str]
    loan_value: NotRequired[str]
    msrp: NotRequired[str]
    trade_in_values: NotRequired[list[TradeInValueDict]]
    auction_values: NotRequired[Any]
