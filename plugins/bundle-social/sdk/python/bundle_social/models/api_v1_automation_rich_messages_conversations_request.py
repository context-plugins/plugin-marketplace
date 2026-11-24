from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .message import Message, MessageDict


class ApiV1AutomationRichMessagesConversationsRequest(SdkBaseModel):
    team_id: Optional[str] = Field(default=UNSET, alias="teamId")
    message: Message


class ApiV1AutomationRichMessagesConversationsRequestDict(TypedDict):
    team_id: NotRequired[str]
    message: MessageDict
