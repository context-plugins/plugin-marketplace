from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.unit import UnitOrStr


class ClicksSummary(SdkBaseModel):
    total_clicks: Optional[int] = UNSET
    units: Optional[int] = UNSET
    unit: Optional[UnitOrStr] = UNSET
    unit_reference: Optional[str] = UNSET


class ClicksSummaryDict(TypedDict):
    total_clicks: NotRequired[int]
    units: NotRequired[int]
    unit: NotRequired[UnitOrStr]
    unit_reference: NotRequired[str]
