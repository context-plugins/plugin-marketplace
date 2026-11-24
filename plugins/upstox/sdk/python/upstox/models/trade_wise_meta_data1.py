from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TradeWiseMetaData1(SdkBaseModel):
    """Response data for brokerage"""

    trades_count: Optional[int] = UNSET
    """Total count of trades in the trade wise P and L report"""

    page_size_limit: Optional[int] = UNSET
    """Maximum number of trades in a page of the trade wise P and L report API"""


class TradeWiseMetaData1Dict(TypedDict):
    trades_count: NotRequired[int]
    page_size_limit: NotRequired[int]
