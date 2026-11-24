from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.color2 import Color2OrStr


class TagsRequest1(SdkBaseModel):
    name: str
    color: Optional[Color2OrStr] = UNSET
    """The color of the tag"""


class TagsRequest1Dict(TypedDict):
    name: str
    color: NotRequired[Color2OrStr]
