from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CurrencyData(SdkBaseModel):
    r"""CurrencyData class for Spend \& Expense Transactions."""

    exchange_rate: Optional[float] = Field(default=UNSET, alias="exchangeRate")
    exponent: Optional[int] = UNSET
    original_currency_amount: Optional[str] = Field(default=UNSET, alias="originalCurrencyAmount")
    original_currency_code: Optional[str] = Field(default=UNSET, alias="originalCurrencyCode")
    symbol: Optional[str] = UNSET


class CurrencyDataDict(TypedDict):
    exchange_rate: NotRequired[float]
    exponent: NotRequired[int]
    original_currency_amount: NotRequired[str]
    original_currency_code: NotRequired[str]
    symbol: NotRequired[str]
