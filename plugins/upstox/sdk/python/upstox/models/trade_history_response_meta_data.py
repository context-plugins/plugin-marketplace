from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .trade_history_response_page_data import TradeHistoryResponsePageData, TradeHistoryResponsePageDataDict


class TradeHistoryResponseMetaData(SdkBaseModel):
    page: Optional[TradeHistoryResponsePageData] = UNSET


class TradeHistoryResponseMetaDataDict(TypedDict):
    page: NotRequired[TradeHistoryResponsePageDataDict]
