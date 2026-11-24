from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_item import HistoryItem, HistoryItemDict


class ShareHoldingData(SdkBaseModel):
    category: Optional[str] = UNSET
    """Category of shareholder"""

    history: Optional[list[HistoryItem]] = UNSET
    """Quarterly shareholding history"""


class ShareHoldingDataDict(TypedDict):
    category: NotRequired[str]
    history: NotRequired[list[HistoryItemDict]]
