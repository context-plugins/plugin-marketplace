from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DpPlan(SdkBaseModel):
    name: Optional[str] = UNSET
    """Name"""

    min_expense: Optional[float] = UNSET
    """Minimum expense charges"""


class DpPlanDict(TypedDict):
    name: NotRequired[str]
    min_expense: NotRequired[float]
