from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .item_bundle_social_conversation_api import ItemBundleSocialConversationApi, ItemBundleSocialConversationApiDict


class ApiV1ConversationsResponse(SdkBaseModel):
    items: list[ItemBundleSocialConversationApi]
    total: Optional[float] = UNSET
    next_cursor: OptionalNullable[str] = Field(default=UNSET, alias="nextCursor")


class ApiV1ConversationsResponseDict(TypedDict):
    items: list[ItemBundleSocialConversationApiDict]
    total: NotRequired[float]
    next_cursor: NotRequired[str | None]
