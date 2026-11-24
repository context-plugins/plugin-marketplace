from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TradeHistoryResponseTradeData(SdkBaseModel):
    exchange: Optional[str] = UNSET
    segment: Optional[str] = UNSET
    option_type: Optional[str] = UNSET
    quantity: Optional[int] = UNSET
    amount: Optional[float] = UNSET
    trade_id: Optional[str] = UNSET
    trade_date: Optional[str] = UNSET
    transaction_type: Optional[str] = UNSET
    scrip_name: Optional[str] = UNSET
    strike_price: Optional[str] = UNSET
    expiry: Optional[str] = UNSET
    price: Optional[float] = UNSET
    isin: Optional[str] = UNSET
    symbol: Optional[str] = UNSET
    instrument_token: Optional[str] = UNSET


class TradeHistoryResponseTradeDataDict(TypedDict):
    exchange: NotRequired[str]
    segment: NotRequired[str]
    option_type: NotRequired[str]
    quantity: NotRequired[int]
    amount: NotRequired[float]
    trade_id: NotRequired[str]
    trade_date: NotRequired[str]
    transaction_type: NotRequired[str]
    scrip_name: NotRequired[str]
    strike_price: NotRequired[str]
    expiry: NotRequired[str]
    price: NotRequired[float]
    isin: NotRequired[str]
    symbol: NotRequired[str]
    instrument_token: NotRequired[str]
