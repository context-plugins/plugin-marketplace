from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .trade_data import TradeData, TradeDataDict


class GetTradeResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[TradeData]] = UNSET
    """Response data for trades"""


class GetTradeResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[TradeDataDict]]
