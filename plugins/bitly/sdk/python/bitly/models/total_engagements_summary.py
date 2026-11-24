from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .engagement import Engagement, EngagementDict
from .enums.unit import UnitOrStr


class TotalEngagementsSummary(SdkBaseModel):
    total_engagements: Optional[int] = UNSET
    engagements: Optional[Engagement] = UNSET
    units: Optional[int] = UNSET
    unit: Optional[UnitOrStr] = UNSET
    unit_reference: Optional[str] = UNSET


class TotalEngagementsSummaryDict(TypedDict):
    total_engagements: NotRequired[int]
    engagements: NotRequired[EngagementDict]
    units: NotRequired[int]
    unit: NotRequired[UnitOrStr]
    unit_reference: NotRequired[str]
