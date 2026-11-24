from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BudgetCreateUpdateAlert(SdkBaseModel):
    """Threshold settings for budget alerts."""

    percentage: Optional[float] = UNSET


class BudgetCreateUpdateAlertDict(TypedDict):
    percentage: NotRequired[float]
