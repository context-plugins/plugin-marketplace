from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .attachment_bundle_social_conversation_api import (
    AttachmentBundleSocialConversationApi,
    AttachmentBundleSocialConversationApiDict,
)
from .carousel import Carousel, CarouselDict
from .quick_reply_bundle_social_conversation_api import (
    QuickReplyBundleSocialConversationApi,
    QuickReplyBundleSocialConversationApiDict,
)
from .unions.button3_bundle_social_conversation_api import (
    Button3BundleSocialConversationApi,
    Button3BundleSocialConversationApiDict,
)


class Content(SdkBaseModel):
    text: Optional[str] = UNSET
    attachments: Optional[list[AttachmentBundleSocialConversationApi]] = UNSET
    quick_replies: Optional[list[QuickReplyBundleSocialConversationApi]] = Field(default=UNSET, alias="quickReplies")
    buttons: Optional[list[Button3BundleSocialConversationApi]] = UNSET
    carousel: Optional[Carousel] = UNSET


class ContentDict(TypedDict):
    text: NotRequired[str]
    attachments: NotRequired[list[AttachmentBundleSocialConversationApiDict]]
    quick_replies: NotRequired[list[QuickReplyBundleSocialConversationApiDict]]
    buttons: NotRequired[list[Button3BundleSocialConversationApiDict]]
    carousel: NotRequired[CarouselDict]
