from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomerStateCreditBalance(SdkBaseModel):
    credits_currency_id: str = Field(alias="creditsCurrencyId")
    currency_name: str = Field(alias="currencyName")
    currency_key: str = Field(alias="currencyKey")
    balance: float


class CustomerStateCreditBalanceDict(TypedDict):
    credits_currency_id: str
    currency_name: str
    currency_key: str
    balance: float
