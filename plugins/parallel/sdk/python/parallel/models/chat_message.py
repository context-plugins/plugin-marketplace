from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.role1 import Role1OrStr


class ChatMessage(SdkBaseModel):
    """Chat message for OpenAI API."""

    role: Role1OrStr
    """The role of the chat message."""

    content: str
    """The content of the chat message."""

    name: Optional[str] = UNSET
    """An optional name for the participant. Provides the model information to differentiate between participants of the
    same role."""


class ChatMessageDict(TypedDict):
    role: Role1OrStr
    content: str
    name: NotRequired[str]
