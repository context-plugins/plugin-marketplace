from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.gte import Gte, GteDict
from .unions.lte import Lte, LteDict


class ValueRange(SdkBaseModel):
    lte: Optional[Lte] = UNSET
    gte: Optional[Gte] = UNSET


class ValueRangeDict(TypedDict):
    lte: NotRequired[LteDict]
    gte: NotRequired[GteDict]
