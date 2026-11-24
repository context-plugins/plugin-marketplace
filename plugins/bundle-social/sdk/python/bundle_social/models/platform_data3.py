from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .carousel import Carousel, CarouselDict
from .quick_reply_bundle_social_conversation_api import (
    QuickReplyBundleSocialConversationApi,
    QuickReplyBundleSocialConversationApiDict,
)
from .reaction import Reaction, ReactionDict
from .reply_to1 import ReplyTo1, ReplyTo1Dict
from .story_reply import StoryReply, StoryReplyDict
from .unions.button3_bundle_social_conversation_api import (
    Button3BundleSocialConversationApi,
    Button3BundleSocialConversationApiDict,
)


class PlatformData3(SdkBaseModel):
    reply_to: OptionalNullable[ReplyTo1] = Field(default=UNSET, alias="replyTo")
    story_reply: OptionalNullable[StoryReply] = Field(default=UNSET, alias="storyReply")
    reactions: Optional[list[Reaction]] = UNSET
    quick_replies: Optional[list[QuickReplyBundleSocialConversationApi]] = Field(default=UNSET, alias="quickReplies")
    buttons: Optional[list[Button3BundleSocialConversationApi]] = UNSET
    carousel: OptionalNullable[Carousel] = UNSET
    is_echo: OptionalNullable[bool] = Field(default=UNSET, alias="isEcho")
    is_edited: OptionalNullable[bool] = Field(default=UNSET, alias="isEdited")
    edited_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="editedAt")
    is_postback: OptionalNullable[bool] = Field(default=UNSET, alias="isPostback")
    postback_payload: OptionalNullable[str] = Field(default=UNSET, alias="postbackPayload")
    is_unsent: OptionalNullable[bool] = Field(default=UNSET, alias="isUnsent")
    unsent_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="unsentAt")


class PlatformData3Dict(TypedDict):
    reply_to: NotRequired[ReplyTo1Dict | None]
    story_reply: NotRequired[StoryReplyDict | None]
    reactions: NotRequired[list[ReactionDict]]
    quick_replies: NotRequired[list[QuickReplyBundleSocialConversationApiDict]]
    buttons: NotRequired[list[Button3BundleSocialConversationApiDict]]
    carousel: NotRequired[CarouselDict | None]
    is_echo: NotRequired[bool | None]
    is_edited: NotRequired[bool | None]
    edited_at: NotRequired[RFC3339DateTime | None]
    is_postback: NotRequired[bool | None]
    postback_payload: NotRequired[str | None]
    is_unsent: NotRequired[bool | None]
    unsent_at: NotRequired[RFC3339DateTime | None]
