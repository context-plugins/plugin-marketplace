from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CountryNordicFinancialNewsExchangesApi(SdkBaseModel):
    """Country where the exchange is located"""

    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    iso2_code: Optional[str] = UNSET


class CountryNordicFinancialNewsExchangesApiDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    iso2_code: NotRequired[str]
