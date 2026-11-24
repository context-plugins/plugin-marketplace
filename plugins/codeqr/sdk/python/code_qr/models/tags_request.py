from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.color1 import Color1OrStr


class TagsRequest(SdkBaseModel):
    name: OptionalNullable[str] = UNSET
    """The name of the tag to create."""

    tag: OptionalNullable[str] = UNSET
    """The name of the tag to create."""

    color: Optional[Color1OrStr] = UNSET
    """The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue,
    purple, pink, brown."""


class TagsRequestDict(TypedDict):
    name: NotRequired[str | None]
    tag: NotRequired[str | None]
    color: NotRequired[Color1OrStr]
