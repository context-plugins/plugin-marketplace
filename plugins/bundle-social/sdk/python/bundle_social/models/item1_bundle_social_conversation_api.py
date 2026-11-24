from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .attachment_bundle_social_conversation_api import (
    AttachmentBundleSocialConversationApi,
    AttachmentBundleSocialConversationApiDict,
)
from .enums.direction import DirectionOrStr
from .enums.platform30 import Platform30OrStr
from .enums.source import SourceOrStr
from .enums.status40 import Status40OrStr
from .platform_data3 import PlatformData3, PlatformData3Dict
from .private_reply_context import PrivateReplyContext, PrivateReplyContextDict
from .reply_to import ReplyTo, ReplyToDict


class Item1BundleSocialConversationApi(SdkBaseModel):
    id: str
    conversation_id: str = Field(alias="conversationId")
    team_id: str = Field(alias="teamId")
    social_account_id: str = Field(alias="socialAccountId")
    platform: Platform30OrStr
    """Messaging platform. Extensible: new platforms are added over time, so handle unknown values gracefully rather
    than switching exhaustively."""

    direction: DirectionOrStr
    status: Status40OrStr
    source: SourceOrStr
    external_message_id: OptionalNullable[str] = Field(default=UNSET, alias="externalMessageId")
    text: OptionalNullable[str] = UNSET
    attachments: Optional[list[AttachmentBundleSocialConversationApi]] = UNSET
    sent_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="sentAt")
    failed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="failedAt")
    error: OptionalNullable[str] = UNSET
    seen_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="seenAt")
    reply_to: OptionalNullable[ReplyTo] = Field(default=UNSET, alias="replyTo")
    private_reply_context: OptionalNullable[PrivateReplyContext] = Field(default=UNSET, alias="privateReplyContext")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    platform_data: Optional[PlatformData3] = Field(default=UNSET, alias="platformData")


class Item1BundleSocialConversationApiDict(TypedDict):
    id: str
    conversation_id: str
    team_id: str
    social_account_id: str
    platform: Platform30OrStr
    direction: DirectionOrStr
    status: Status40OrStr
    source: SourceOrStr
    external_message_id: NotRequired[str | None]
    text: NotRequired[str | None]
    attachments: NotRequired[list[AttachmentBundleSocialConversationApiDict]]
    sent_at: NotRequired[RFC3339DateTime | None]
    failed_at: NotRequired[RFC3339DateTime | None]
    error: NotRequired[str | None]
    seen_at: NotRequired[RFC3339DateTime | None]
    reply_to: NotRequired[ReplyToDict | None]
    private_reply_context: NotRequired[PrivateReplyContextDict | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    platform_data: NotRequired[PlatformData3Dict]
