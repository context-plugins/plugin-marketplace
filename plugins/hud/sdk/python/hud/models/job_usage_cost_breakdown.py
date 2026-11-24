from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JobUsageCostBreakdown(SdkBaseModel):
    cost: float = 0.0
    count: int = 0
    details: Optional[Any] = UNSET


class JobUsageCostBreakdownDict(TypedDict):
    cost: NotRequired[float]
    count: NotRequired[int]
    details: NotRequired[Any]
