from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .attachment import Attachment, AttachmentDict
from .carousel import Carousel, CarouselDict
from .quick_reply import QuickReply, QuickReplyDict
from .unions.button3 import Button3, Button3Dict


class Message(SdkBaseModel):
    text: Optional[str] = UNSET
    attachments: Optional[list[Attachment]] = UNSET
    quick_replies: Optional[list[QuickReply]] = Field(default=UNSET, alias="quickReplies")
    buttons: Optional[list[Button3]] = UNSET
    carousel: Optional[Carousel] = UNSET


class MessageDict(TypedDict):
    text: NotRequired[str]
    attachments: NotRequired[list[AttachmentDict]]
    quick_replies: NotRequired[list[QuickReplyDict]]
    buttons: NotRequired[list[Button3Dict]]
    carousel: NotRequired[CarouselDict]
