from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .trade_wise_meta_data1 import TradeWiseMetaData1, TradeWiseMetaData1Dict


class GetTradeWiseProfitAndLossMetaDataResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[TradeWiseMetaData1] = UNSET
    """Response data for brokerage"""


class GetTradeWiseProfitAndLossMetaDataResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[TradeWiseMetaData1Dict]
