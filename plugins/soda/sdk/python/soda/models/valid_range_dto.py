from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValidRangeDto(SdkBaseModel):
    max: Optional[float] = UNSET
    min: Optional[float] = UNSET


class ValidRangeDtoDict(TypedDict):
    max: NotRequired[float]
    min: NotRequired[float]
