from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .credit_currency import CreditCurrency, CreditCurrencyDict


class CreditCurrencyListResponse(SdkBaseModel):
    data: list[CreditCurrency]


class CreditCurrencyListResponseDict(TypedDict):
    data: list[CreditCurrencyDict]
