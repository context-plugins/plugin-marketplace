from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_item import HistoryItem, HistoryItemDict


class FinancialStatementEntry(SdkBaseModel):
    particular: Optional[str] = UNSET
    """Type of financial statement line item"""

    history: Optional[list[HistoryItem]] = UNSET
    """Historical values for this statement line item"""


class FinancialStatementEntryDict(TypedDict):
    particular: NotRequired[str]
    history: NotRequired[list[HistoryItemDict]]
