from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CurrencyDataBillV3TransactionsApi(SdkBaseModel):
    r"""CurrencyData class for Spend \& Expense Transactions."""

    exchange_rate: Optional[float] = Field(default=UNSET, alias="exchangeRate")
    """Exchange rate for currency conversion"""

    exponent: Optional[int] = UNSET
    """Number of decimal places in the currency format"""

    original_currency_amount: Optional[str] = Field(default=UNSET, alias="originalCurrencyAmount")
    """Transaction amount in the original currency before conversion"""

    original_currency_code: Optional[str] = Field(default=UNSET, alias="originalCurrencyCode")
    """Three-letter ISO currency code of the original currency"""

    symbol: Optional[str] = UNSET
    """Currency symbol for display purposes (e.g. $, €, £)"""


class CurrencyDataBillV3TransactionsApiDict(TypedDict):
    exchange_rate: NotRequired[float]
    exponent: NotRequired[int]
    original_currency_amount: NotRequired[str]
    original_currency_code: NotRequired[str]
    symbol: NotRequired[str]
