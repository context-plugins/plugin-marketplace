from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BalanceSheetHistoryItem(SdkBaseModel):
    total_asset: Optional[float] = UNSET
    """Total assets in the reported period"""

    total_liability: Optional[float] = UNSET
    """Total liabilities in the reported period"""

    period: Optional[str] = UNSET
    """Reporting period"""


class BalanceSheetHistoryItemDict(TypedDict):
    total_asset: NotRequired[float]
    total_liability: NotRequired[float]
    period: NotRequired[str]
