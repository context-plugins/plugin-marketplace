from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .chat_message import ChatMessage, ChatMessageDict


class ChatMessagesResponse(SdkBaseModel):
    messages: Optional[list[ChatMessage]] = UNSET
    """The list of chat messages in chronological order."""


class ChatMessagesResponseDict(TypedDict):
    messages: NotRequired[list[ChatMessageDict]]
