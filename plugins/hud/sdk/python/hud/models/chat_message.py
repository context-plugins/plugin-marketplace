from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.content import Content, ContentDict


class ChatMessage(SdkBaseModel):
    role: str
    content: Content


class ChatMessageDict(TypedDict):
    role: str
    content: ContentDict
