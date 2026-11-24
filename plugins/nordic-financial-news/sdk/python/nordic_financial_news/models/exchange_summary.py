from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .country_nordic_financial_news_exchanges_api import (
    CountryNordicFinancialNewsExchangesApi,
    CountryNordicFinancialNewsExchangesApiDict,
)


class ExchangeSummary(SdkBaseModel):
    id: str
    """Unique exchange identifier"""

    name: str
    """Exchange display name"""

    mic_code: str
    """ISO 10383 Market Identifier Code"""

    acronym: OptionalNullable[str] = UNSET
    """Exchange acronym"""

    country: Optional[CountryNordicFinancialNewsExchangesApi] = UNSET
    """Country where the exchange is located"""


class ExchangeSummaryDict(TypedDict):
    id: str
    name: str
    mic_code: str
    acronym: NotRequired[str | None]
    country: NotRequired[CountryNordicFinancialNewsExchangesApiDict]
