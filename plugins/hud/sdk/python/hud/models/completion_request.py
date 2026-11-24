from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .chat_message import ChatMessage, ChatMessageDict


class CompletionRequest(SdkBaseModel):
    model: str
    messages: list[ChatMessage]
    max_tokens: int = 4000


class CompletionRequestDict(TypedDict):
    model: str
    messages: list[ChatMessageDict]
    max_tokens: NotRequired[int]
