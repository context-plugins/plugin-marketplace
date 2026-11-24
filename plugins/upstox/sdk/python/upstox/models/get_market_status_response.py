from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .market_status_data2 import MarketStatusData2, MarketStatusData2Dict


class GetMarketStatusResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[MarketStatusData2] = UNSET
    """Response data for market live status"""


class GetMarketStatusResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[MarketStatusData2Dict]
