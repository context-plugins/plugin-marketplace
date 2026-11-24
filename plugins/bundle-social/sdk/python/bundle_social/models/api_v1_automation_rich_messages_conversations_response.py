from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ApiV1AutomationRichMessagesConversationsResponse(SdkBaseModel):
    conversation_id: str = Field(alias="conversationId")
    message_id: OptionalNullable[str] = Field(default=UNSET, alias="messageId")
    external_message_id: OptionalNullable[str] = Field(default=UNSET, alias="externalMessageId")


class ApiV1AutomationRichMessagesConversationsResponseDict(TypedDict):
    conversation_id: str
    message_id: NotRequired[str | None]
    external_message_id: NotRequired[str | None]
