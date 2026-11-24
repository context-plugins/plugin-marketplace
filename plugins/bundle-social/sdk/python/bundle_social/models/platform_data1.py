from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .carousel52 import Carousel52, Carousel52Dict
from .quick_reply52 import QuickReply52, QuickReply52Dict
from .reaction import Reaction, ReactionDict
from .reply_to1 import ReplyTo1, ReplyTo1Dict
from .story_reply import StoryReply, StoryReplyDict
from .unions.button1263 import Button1263, Button1263Dict


class PlatformData1(SdkBaseModel):
    reply_to: OptionalNullable[ReplyTo1] = Field(default=UNSET, alias="replyTo")
    story_reply: OptionalNullable[StoryReply] = Field(default=UNSET, alias="storyReply")
    reactions: Optional[list[Reaction]] = UNSET
    quick_replies: Optional[list[QuickReply52]] = Field(default=UNSET, alias="quickReplies")
    buttons: Optional[list[Button1263]] = UNSET
    carousel: OptionalNullable[Carousel52] = UNSET
    is_echo: OptionalNullable[bool] = Field(default=UNSET, alias="isEcho")
    is_edited: OptionalNullable[bool] = Field(default=UNSET, alias="isEdited")
    edited_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="editedAt")
    is_postback: OptionalNullable[bool] = Field(default=UNSET, alias="isPostback")
    postback_payload: OptionalNullable[str] = Field(default=UNSET, alias="postbackPayload")
    is_unsent: OptionalNullable[bool] = Field(default=UNSET, alias="isUnsent")
    unsent_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="unsentAt")


class PlatformData1Dict(TypedDict):
    reply_to: NotRequired[ReplyTo1Dict | None]
    story_reply: NotRequired[StoryReplyDict | None]
    reactions: NotRequired[list[ReactionDict]]
    quick_replies: NotRequired[list[QuickReply52Dict]]
    buttons: NotRequired[list[Button1263Dict]]
    carousel: NotRequired[Carousel52Dict | None]
    is_echo: NotRequired[bool | None]
    is_edited: NotRequired[bool | None]
    edited_at: NotRequired[RFC3339DateTime | None]
    is_postback: NotRequired[bool | None]
    postback_payload: NotRequired[str | None]
    is_unsent: NotRequired[bool | None]
    unsent_at: NotRequired[RFC3339DateTime | None]
