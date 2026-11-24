from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HistoryItem(SdkBaseModel):
    value: Optional[float] = UNSET
    """Amount value in the reported period"""

    period: Optional[str] = UNSET
    """Reporting period"""

    change: Optional[str] = UNSET
    """Percentage change compared to previous period"""


class HistoryItemDict(TypedDict):
    value: NotRequired[float]
    period: NotRequired[str]
    change: NotRequired[str]
