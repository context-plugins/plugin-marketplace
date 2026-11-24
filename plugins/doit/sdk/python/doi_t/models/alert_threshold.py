from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AlertThreshold(SdkBaseModel):
    """A numeric or percentage threshold."""

    amount: Optional[float] = UNSET
    percentage: Optional[float] = UNSET


class AlertThresholdDict(TypedDict):
    amount: NotRequired[float]
    percentage: NotRequired[float]
