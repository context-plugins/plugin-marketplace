from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .item1_bundle_social_conversation_api import Item1BundleSocialConversationApi, Item1BundleSocialConversationApiDict


class ApiV1ConversationsMessagesResponse(SdkBaseModel):
    items: list[Item1BundleSocialConversationApi]
    total: Optional[float] = UNSET
    next_cursor: OptionalNullable[str] = Field(default=UNSET, alias="nextCursor")


class ApiV1ConversationsMessagesResponseDict(TypedDict):
    items: list[Item1BundleSocialConversationApiDict]
    total: NotRequired[float]
    next_cursor: NotRequired[str | None]
