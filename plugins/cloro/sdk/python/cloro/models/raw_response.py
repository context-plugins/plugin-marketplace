from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .delta import Delta, DeltaDict
from .message import Message, MessageDict


class RawResponse(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Event type identifier"""

    token: Optional[str] = UNSET
    """Resume token used to continue the ChatGPT conversation"""

    conversation_id: Optional[str] = UNSET
    """ChatGPT conversation identifier"""

    message: Optional[Message] = UNSET
    """Event payload describing the assistant message"""

    delta: Optional[Delta] = UNSET
    """Streaming delta payload from ChatGPT"""

    reason: Optional[str] = UNSET
    """Why ChatGPT stopped streaming"""


class RawResponseDict(TypedDict):
    type_: NotRequired[str]
    token: NotRequired[str]
    conversation_id: NotRequired[str]
    message: NotRequired[MessageDict]
    delta: NotRequired[DeltaDict]
    reason: NotRequired[str]
