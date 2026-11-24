from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanySizeRange(SdkBaseModel):
    min: Optional[float] = UNSET
    max: Optional[float] = UNSET


class CompanySizeRangeDict(TypedDict):
    min: NotRequired[float]
    max: NotRequired[float]
