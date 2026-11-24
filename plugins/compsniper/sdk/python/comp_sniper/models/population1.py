from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .grade import Grade, GradeDict


class Population1(SdkBaseModel):
    total: Optional[int] = UNSET
    grades: Optional[list[Grade]] = UNSET


class Population1Dict(TypedDict):
    total: NotRequired[int]
    grades: NotRequired[list[GradeDict]]
