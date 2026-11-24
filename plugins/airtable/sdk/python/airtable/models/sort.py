from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.direction import DirectionOrStr


class Sort(SdkBaseModel):
    field: Optional[str] = UNSET
    direction: Optional[DirectionOrStr] = UNSET


class SortDict(TypedDict):
    field: NotRequired[str]
    direction: NotRequired[DirectionOrStr]
