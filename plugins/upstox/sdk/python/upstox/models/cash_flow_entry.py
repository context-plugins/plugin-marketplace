from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_item import HistoryItem, HistoryItemDict


class CashFlowEntry(SdkBaseModel):
    category: Optional[str] = UNSET
    """Type of cash flow: Operating, Investing, or Financing"""

    history: Optional[list[HistoryItem]] = UNSET
    """Historical cash flow values for this type"""


class CashFlowEntryDict(TypedDict):
    category: NotRequired[str]
    history: NotRequired[list[HistoryItemDict]]
