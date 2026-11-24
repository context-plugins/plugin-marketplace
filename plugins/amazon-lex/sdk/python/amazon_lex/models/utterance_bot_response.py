from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_type1 import ContentType1OrStr
from .image_response_card import ImageResponseCard, ImageResponseCardDict


class UtteranceBotResponse(SdkBaseModel):
    content: Optional[str] = UNSET
    """The text of the response to the utterance from the bot."""

    content_type: Optional[ContentType1OrStr] = Field(default=UNSET, alias="contentType")
    """The type of the response. The following values are possible: PlainText – A plain text string. CustomPayload – A
    response string that you can customize to include data or metadata for your application. SSML – A string that
    includes Speech Synthesis Markup Language to customize the audio response. ImageResponseCard – An image with buttons
    that the customer can select. See ImageResponseCard for more information."""

    image_response_card: Optional[ImageResponseCard] = Field(default=UNSET, alias="imageResponseCard")


class UtteranceBotResponseDict(TypedDict):
    content: NotRequired[str]
    content_type: NotRequired[ContentType1OrStr]
    image_response_card: NotRequired[ImageResponseCardDict]
