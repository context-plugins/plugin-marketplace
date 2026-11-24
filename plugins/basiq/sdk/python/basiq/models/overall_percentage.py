from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OverallPercentage(SdkBaseModel):
    credit: Optional[float] = UNSET
    """Percentage of credit transactions"""

    debit: Optional[float] = UNSET
    """Percentage of debit transactions"""


class OverallPercentageDict(TypedDict):
    credit: NotRequired[float]
    debit: NotRequired[float]
