from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .currency import Currency, CurrencyDict


class CompaniesApiCurrenciesResponse(SdkBaseModel):
    value: Optional[list[Currency]] = UNSET


class CompaniesApiCurrenciesResponseDict(TypedDict):
    value: NotRequired[list[CurrencyDict]]
