from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class High1(SdkBaseModel):
    url: Optional[str] = UNSET
    width: Optional[int] = UNSET
    height: Optional[int] = UNSET


class High1Dict(TypedDict):
    url: NotRequired[str]
    width: NotRequired[int]
    height: NotRequired[int]
