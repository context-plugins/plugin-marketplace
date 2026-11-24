from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .exchange_nordic_financial_news_indices_api import (
    ExchangeNordicFinancialNewsIndicesApi,
    ExchangeNordicFinancialNewsIndicesApiDict,
)


class IndexSummary(SdkBaseModel):
    id: str
    """Unique stock index identifier"""

    name: str
    """Index display name"""

    symbol: str
    """Index symbol"""

    pan_nordic: Optional[bool] = UNSET
    """True if the index spans multiple Nordic exchanges (e.g. OMXN40), false if tied to a single exchange (e.g.
    OMXS30)"""

    exchange: OptionalNullable[ExchangeNordicFinancialNewsIndicesApi] = UNSET
    """Exchange associated with this index"""


class IndexSummaryDict(TypedDict):
    id: str
    name: str
    symbol: str
    pan_nordic: NotRequired[bool]
    exchange: NotRequired[ExchangeNordicFinancialNewsIndicesApiDict | None]
