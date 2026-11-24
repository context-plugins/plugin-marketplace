from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.color import ColorOrStr


class TagModel(SdkBaseModel):
    id: str
    """The unique ID of the tag."""

    name: str
    """The name of the tag."""

    color: ColorOrStr
    """The color of the tag."""


class TagModelDict(TypedDict):
    id: str
    name: str
    color: ColorOrStr
