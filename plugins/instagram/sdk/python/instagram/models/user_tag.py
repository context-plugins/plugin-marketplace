from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UserTag(SdkBaseModel):
    username: Optional[str] = UNSET
    x: Optional[float] = UNSET
    y: Optional[float] = UNSET


class UserTagDict(TypedDict):
    username: NotRequired[str]
    x: NotRequired[float]
    y: NotRequired[float]
