from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .country_nordic_financial_news_exchanges_api import (
    CountryNordicFinancialNewsExchangesApi,
    CountryNordicFinancialNewsExchangesApiDict,
)
from .index import Index, IndexDict


class ExchangeDetail(SdkBaseModel):
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

    operating_mic_code: OptionalNullable[str] = UNSET
    """Parent operating MIC code (for segment exchanges)"""

    currency: OptionalNullable[str] = UNSET
    """Primary trading currency (ISO 4217)"""

    ticker_suffix: OptionalNullable[str] = UNSET
    """Ticker suffix used for this exchange"""

    timezone: OptionalNullable[str] = UNSET
    """Exchange timezone"""

    city: OptionalNullable[str] = UNSET
    """City where the exchange is located"""

    indices: Optional[list[Index]] = UNSET
    """Stock indices on this exchange"""


class ExchangeDetailDict(TypedDict):
    id: str
    name: str
    mic_code: str
    acronym: NotRequired[str | None]
    country: NotRequired[CountryNordicFinancialNewsExchangesApiDict]
    operating_mic_code: NotRequired[str | None]
    currency: NotRequired[str | None]
    ticker_suffix: NotRequired[str | None]
    timezone: NotRequired[str | None]
    city: NotRequired[str | None]
    indices: NotRequired[list[IndexDict]]
