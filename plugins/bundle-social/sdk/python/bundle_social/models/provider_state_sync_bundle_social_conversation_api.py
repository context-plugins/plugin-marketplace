from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.action import ActionOrStr
from .enums.status2_bundle_social_conversation_api import Status2BundleSocialConversationApiOrStr


class ProviderStateSyncBundleSocialConversationApi(SdkBaseModel):
    action: ActionOrStr
    status: Status2BundleSocialConversationApiOrStr
    reason: OptionalNullable[str] = UNSET
    error: OptionalNullable[str] = UNSET
    synced_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="syncedAt")


class ProviderStateSyncBundleSocialConversationApiDict(TypedDict):
    action: ActionOrStr
    status: Status2BundleSocialConversationApiOrStr
    reason: NotRequired[str | None]
    error: NotRequired[str | None]
    synced_at: NotRequired[RFC3339DateTime | None]
