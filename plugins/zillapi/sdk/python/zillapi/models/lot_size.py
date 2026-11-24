from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LotSize(SdkBaseModel):
    min: Optional[int] = UNSET
    max: Optional[int] = UNSET


class LotSizeDict(TypedDict):
    min: NotRequired[int]
    max: NotRequired[int]
