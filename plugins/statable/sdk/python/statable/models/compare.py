from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Compare(SdkBaseModel):
    value: Optional[float] = UNSET
    change: Optional[float] = UNSET


class CompareDict(TypedDict):
    value: NotRequired[float]
    change: NotRequired[float]
