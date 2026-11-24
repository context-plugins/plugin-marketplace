from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_type import ContentTypeOrStr
from .image_response_card import ImageResponseCard, ImageResponseCardDict


class RuntimeV2LexMessage(SdkBaseModel):
    content: Optional[str] = UNSET
    """The text of the message."""

    content_type: ContentTypeOrStr = Field(alias="contentType")
    """Indicates the type of response."""

    image_response_card: Optional[ImageResponseCard] = Field(default=UNSET, alias="imageResponseCard")


class RuntimeV2LexMessageDict(TypedDict):
    content: NotRequired[str]
    content_type: ContentTypeOrStr
    image_response_card: NotRequired[ImageResponseCardDict]
