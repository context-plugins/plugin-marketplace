from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Tagged(SdkBaseModel):
    username: str
    x: Optional[float] = UNSET
    y: Optional[float] = UNSET


class TaggedDict(TypedDict):
    username: str
    x: NotRequired[float]
    y: NotRequired[float]
