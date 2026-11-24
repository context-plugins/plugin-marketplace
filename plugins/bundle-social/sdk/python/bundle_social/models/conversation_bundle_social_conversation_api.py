from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.platform30 import Platform30OrStr
from .enums.status_bundle_social_conversation_api import StatusBundleSocialConversationApiOrStr
from .platform_data import PlatformData, PlatformDataDict
from .social_account import SocialAccount, SocialAccountDict


class ConversationBundleSocialConversationApi(SdkBaseModel):
    id: str
    team_id: str = Field(alias="teamId")
    social_account_id: str = Field(alias="socialAccountId")
    platform: Platform30OrStr
    """Messaging platform. Extensible: new platforms are added over time, so handle unknown values gracefully rather
    than switching exhaustively."""

    external_conversation_id: OptionalNullable[str] = Field(default=UNSET, alias="externalConversationId")
    external_participant_id: str = Field(alias="externalParticipantId")
    participant_username: OptionalNullable[str] = Field(default=UNSET, alias="participantUsername")
    participant_display_name: OptionalNullable[str] = Field(default=UNSET, alias="participantDisplayName")
    participant_avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="participantAvatarUrl")
    status: StatusBundleSocialConversationApiOrStr
    last_message_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastMessageAt")
    last_activity_at: RFC3339DateTime | None = Field(alias="lastActivityAt")
    last_message_preview: OptionalNullable[str] = Field(default=UNSET, alias="lastMessagePreview")
    last_read_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastReadAt")
    unread_count: float = Field(alias="unreadCount")
    platform_seen_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="platformSeenAt")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    platform_data: Optional[PlatformData] = Field(default=UNSET, alias="platformData")
    social_account: Optional[SocialAccount] = Field(default=UNSET, alias="socialAccount")


class ConversationBundleSocialConversationApiDict(TypedDict):
    id: str
    team_id: str
    social_account_id: str
    platform: Platform30OrStr
    external_conversation_id: NotRequired[str | None]
    external_participant_id: str
    participant_username: NotRequired[str | None]
    participant_display_name: NotRequired[str | None]
    participant_avatar_url: NotRequired[str | None]
    status: StatusBundleSocialConversationApiOrStr
    last_message_at: NotRequired[RFC3339DateTime | None]
    last_activity_at: RFC3339DateTime | None
    last_message_preview: NotRequired[str | None]
    last_read_at: NotRequired[RFC3339DateTime | None]
    unread_count: float
    platform_seen_at: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    platform_data: NotRequired[PlatformDataDict]
    social_account: NotRequired[SocialAccountDict]
