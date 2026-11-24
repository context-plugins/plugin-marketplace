from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Image(SdkBaseModel):
    mime: Optional[str] = UNSET
    link: Optional[str] = UNSET
    context_link: Optional[str] = Field(default=UNSET, alias="contextLink")
    height: Optional[int] = UNSET
    width: Optional[int] = UNSET
    byte_size: Optional[int] = Field(default=UNSET, alias="byteSize")
    thumbnail_link: Optional[str] = Field(default=UNSET, alias="thumbnailLink")
    accent_color: Optional[str] = Field(default=UNSET, alias="accentColor")


class ImageDict(TypedDict):
    mime: NotRequired[str]
    link: NotRequired[str]
    context_link: NotRequired[str]
    height: NotRequired[int]
    width: NotRequired[int]
    byte_size: NotRequired[int]
    thumbnail_link: NotRequired[str]
    accent_color: NotRequired[str]
