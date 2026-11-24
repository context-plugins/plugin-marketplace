from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content import Content, ContentDict


class ApiV1ConversationsMessagesRequest(SdkBaseModel):
    content: Content
    reply_to_message_id: Optional[str] = Field(default=UNSET, alias="replyToMessageId")


class ApiV1ConversationsMessagesRequestDict(TypedDict):
    content: ContentDict
    reply_to_message_id: NotRequired[str]
