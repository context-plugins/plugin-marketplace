from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_payload import CustomPayload, CustomPayloadDict
from .image_response_card import ImageResponseCard, ImageResponseCardDict
from .plain_text_message import PlainTextMessage, PlainTextMessageDict
from .ssml_message import SsmlMessage, SsmlMessageDict


class Message(SdkBaseModel):
    plain_text_message: Optional[PlainTextMessage] = Field(default=UNSET, alias="plainTextMessage")
    custom_payload: Optional[CustomPayload] = Field(default=UNSET, alias="customPayload")
    ssml_message: Optional[SsmlMessage] = Field(default=UNSET, alias="ssmlMessage")
    image_response_card: Optional[ImageResponseCard] = Field(default=UNSET, alias="imageResponseCard")


class MessageDict(TypedDict):
    plain_text_message: NotRequired[PlainTextMessageDict]
    custom_payload: NotRequired[CustomPayloadDict]
    ssml_message: NotRequired[SsmlMessageDict]
    image_response_card: NotRequired[ImageResponseCardDict]
