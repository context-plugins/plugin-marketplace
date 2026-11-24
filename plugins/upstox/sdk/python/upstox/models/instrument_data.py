from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class InstrumentData(SdkBaseModel):
    name: Optional[str] = UNSET
    segment: Optional[str] = UNSET
    exchange: Optional[str] = UNSET
    isin: Optional[str] = UNSET
    expiry: Optional[RFC3339DateTime] = UNSET
    country: Optional[str] = UNSET
    latency: Optional[str] = UNSET
    description: Optional[str] = UNSET
    currency: Optional[str] = UNSET
    weekly: Optional[bool] = UNSET
    instrument_key: Optional[str] = UNSET
    exchange_token: Optional[str] = UNSET
    trading_symbol: Optional[str] = UNSET
    short_name: Optional[str] = UNSET
    tick_size: Optional[float] = UNSET
    lot_size: Optional[int] = UNSET
    instrument_type: Optional[str] = UNSET
    freeze_quantity: Optional[float] = UNSET
    underlying_key: Optional[str] = UNSET
    underlying_type: Optional[str] = UNSET
    underlying_symbol: Optional[str] = UNSET
    last_trading_date: Optional[RFC3339DateTime] = UNSET
    strike_price: Optional[float] = UNSET
    price_quote_unit: Optional[str] = UNSET
    qty_multiplier: Optional[int] = UNSET
    minimum_lot: Optional[int] = UNSET
    start_time: Optional[str] = UNSET
    end_time: Optional[str] = UNSET
    week_days: Optional[str] = UNSET
    general_denominator: Optional[float] = UNSET
    general_numerator: Optional[float] = UNSET
    price_numerator: Optional[float] = UNSET
    price_denominator: Optional[float] = UNSET
    mtf_enabled: Optional[bool] = UNSET
    mtf_bracket: Optional[float] = UNSET
    security_type: Optional[str] = UNSET
    cas_eligible: Optional[bool] = UNSET


class InstrumentDataDict(TypedDict):
    name: NotRequired[str]
    segment: NotRequired[str]
    exchange: NotRequired[str]
    isin: NotRequired[str]
    expiry: NotRequired[RFC3339DateTime]
    country: NotRequired[str]
    latency: NotRequired[str]
    description: NotRequired[str]
    currency: NotRequired[str]
    weekly: NotRequired[bool]
    instrument_key: NotRequired[str]
    exchange_token: NotRequired[str]
    trading_symbol: NotRequired[str]
    short_name: NotRequired[str]
    tick_size: NotRequired[float]
    lot_size: NotRequired[int]
    instrument_type: NotRequired[str]
    freeze_quantity: NotRequired[float]
    underlying_key: NotRequired[str]
    underlying_type: NotRequired[str]
    underlying_symbol: NotRequired[str]
    last_trading_date: NotRequired[RFC3339DateTime]
    strike_price: NotRequired[float]
    price_quote_unit: NotRequired[str]
    qty_multiplier: NotRequired[int]
    minimum_lot: NotRequired[int]
    start_time: NotRequired[str]
    end_time: NotRequired[str]
    week_days: NotRequired[str]
    general_denominator: NotRequired[float]
    general_numerator: NotRequired[float]
    price_numerator: NotRequired[float]
    price_denominator: NotRequired[float]
    mtf_enabled: NotRequired[bool]
    mtf_bracket: NotRequired[float]
    security_type: NotRequired[str]
    cas_eligible: NotRequired[bool]
