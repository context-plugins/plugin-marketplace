from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .channel import Channel, ChannelDict
from .enums.instagram_connection_method import InstagramConnectionMethodOrStr
from .enums.messaging_status import MessagingStatus, MessagingStatusOrStr
from .enums.twitter_sub_type import TwitterSubTypeOrStr
from .enums.type import TypeOrStr


class SocialAccount(SdkBaseModel):
    id: str
    type_: TypeOrStr = Field(alias="type")
    team_id: str = Field(alias="teamId")
    username: OptionalNullable[str] = UNSET
    display_name: OptionalNullable[str] = Field(default=UNSET, alias="displayName")
    bio: OptionalNullable[str] = UNSET
    avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="avatarUrl")
    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    provider_page_id: OptionalNullable[str] = Field(default=UNSET, alias="providerPageId")
    user_username: OptionalNullable[str] = Field(default=UNSET, alias="userUsername")
    user_display_name: OptionalNullable[str] = Field(default=UNSET, alias="userDisplayName")
    user_email: OptionalNullable[str] = Field(default=UNSET, alias="userEmail")
    user_id: OptionalNullable[str] = Field(default=UNSET, alias="userId")
    channels: OptionalNullable[list[Channel]] = UNSET
    mastodon_server_id: OptionalNullable[str] = Field(default=UNSET, alias="mastodonServerId")
    instagram_connection_method: OptionalNullable[InstagramConnectionMethodOrStr] = Field(
        default=UNSET, alias="instagramConnectionMethod"
    )
    twitter_sub_type: OptionalNullable[TwitterSubTypeOrStr] = Field(default=UNSET, alias="twitterSubType")
    is_tiktok_business_account: OptionalNullable[bool] = Field(default=UNSET, alias="isTiktokBusinessAccount")
    disconnected_check_try_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="disconnectedCheckTryAt")
    delete_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deleteOn")
    messaging_status: MessagingStatusOrStr = Field(default=MessagingStatus.DISABLED, alias="messagingStatus")
    messaging_status_updated_at: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="messagingStatusUpdatedAt"
    )
    messaging_last_error: OptionalNullable[str] = Field(default=UNSET, alias="messagingLastError")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class SocialAccountDict(TypedDict):
    id: str
    type_: TypeOrStr
    team_id: str
    username: NotRequired[str | None]
    display_name: NotRequired[str | None]
    bio: NotRequired[str | None]
    avatar_url: NotRequired[str | None]
    external_id: NotRequired[str | None]
    provider_page_id: NotRequired[str | None]
    user_username: NotRequired[str | None]
    user_display_name: NotRequired[str | None]
    user_email: NotRequired[str | None]
    user_id: NotRequired[str | None]
    channels: NotRequired[list[ChannelDict] | None]
    mastodon_server_id: NotRequired[str | None]
    instagram_connection_method: NotRequired[InstagramConnectionMethodOrStr | None]
    twitter_sub_type: NotRequired[TwitterSubTypeOrStr | None]
    is_tiktok_business_account: NotRequired[bool | None]
    disconnected_check_try_at: NotRequired[RFC3339DateTime | None]
    delete_on: NotRequired[RFC3339DateTime | None]
    messaging_status: NotRequired[MessagingStatusOrStr]
    messaging_status_updated_at: NotRequired[RFC3339DateTime | None]
    messaging_last_error: NotRequired[str | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
