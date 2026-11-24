from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.sender import SenderOrStr


class ChatMessage(SdkBaseModel):
    id: Optional[str] = UNSET
    """The unique identifier for the message."""

    sender: Optional[SenderOrStr] = UNSET
    """Who sent the message."""

    body: Optional[str] = UNSET
    """The text content of the message."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the message was sent."""


class ChatMessageDict(TypedDict):
    id: NotRequired[str]
    sender: NotRequired[SenderOrStr]
    body: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
