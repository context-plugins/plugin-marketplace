from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .trade_history_response_meta_data import TradeHistoryResponseMetaData, TradeHistoryResponseMetaDataDict
from .trade_history_response_trade_data import TradeHistoryResponseTradeData, TradeHistoryResponseTradeDataDict


class TradeHistoryResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[TradeHistoryResponseTradeData]] = UNSET
    meta_data: Optional[TradeHistoryResponseMetaData] = Field(default=UNSET, alias="metaData")


class TradeHistoryResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[TradeHistoryResponseTradeDataDict]]
    meta_data: NotRequired[TradeHistoryResponseMetaDataDict]
