from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .profit_and_loss_meta_data_wrapper import ProfitAndLossMetaDataWrapper, ProfitAndLossMetaDataWrapperDict
from .trade_wise_profit_and_loss_data import TradeWiseProfitAndLossData, TradeWiseProfitAndLossDataDict


class GetTradeWiseProfitAndLossDataResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[TradeWiseProfitAndLossData]] = UNSET
    """Response data for trade wise data details"""

    metadata: Optional[ProfitAndLossMetaDataWrapper] = UNSET


class GetTradeWiseProfitAndLossDataResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[TradeWiseProfitAndLossDataDict]]
    metadata: NotRequired[ProfitAndLossMetaDataWrapperDict]
