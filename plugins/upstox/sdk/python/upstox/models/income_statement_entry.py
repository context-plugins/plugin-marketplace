from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_item import HistoryItem, HistoryItemDict


class IncomeStatementEntry(SdkBaseModel):
    category: Optional[str] = UNSET
    """Type of income statement entry: Revenue, Operating profit, or Net profit"""

    history: Optional[list[HistoryItem]] = UNSET
    """Historical values for this income statement type"""


class IncomeStatementEntryDict(TypedDict):
    category: NotRequired[str]
    history: NotRequired[list[HistoryItemDict]]
