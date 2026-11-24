from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .grade import Grade, GradeDict


class Totals(SdkBaseModel):
    total: Optional[int] = UNSET
    grades: Optional[list[Grade]] = UNSET


class TotalsDict(TypedDict):
    total: NotRequired[int]
    grades: NotRequired[list[GradeDict]]
