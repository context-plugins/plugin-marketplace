from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Message(SdkBaseModel):
    """Event payload describing the assistant message"""

    id: Optional[str] = UNSET
    role: Optional[str] = UNSET
    model: Optional[str] = UNSET


class MessageDict(TypedDict):
    id: NotRequired[str]
    role: NotRequired[str]
    model: NotRequired[str]
