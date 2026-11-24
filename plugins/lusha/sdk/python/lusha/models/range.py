from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.coverage import CoverageOrStr


class Range(SdkBaseModel):
    coverage: Optional[CoverageOrStr] = UNSET
    min: Optional[int] = UNSET
    max: Optional[int] = UNSET


class RangeDict(TypedDict):
    coverage: NotRequired[CoverageOrStr]
    min: NotRequired[int]
    max: NotRequired[int]
