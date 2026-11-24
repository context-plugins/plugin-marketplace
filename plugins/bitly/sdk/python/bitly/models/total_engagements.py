from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .engagements import Engagements, EngagementsDict
from .enums.unit import UnitOrStr


class TotalEngagements(SdkBaseModel):
    engagements: Optional[list[Engagements]] = UNSET
    units: Optional[int] = UNSET
    unit: Optional[UnitOrStr] = UNSET
    unit_reference: Optional[str] = UNSET


class TotalEngagementsDict(TypedDict):
    engagements: NotRequired[list[EngagementsDict]]
    units: NotRequired[int]
    unit: NotRequired[UnitOrStr]
    unit_reference: NotRequired[str]
