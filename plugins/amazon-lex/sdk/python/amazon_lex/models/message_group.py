from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .message import Message, MessageDict


class MessageGroup(SdkBaseModel):
    message: Message
    variations: Optional[list[Message]] = UNSET
    """Message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or
    one of the variations to send to the user."""


class MessageGroupDict(TypedDict):
    message: MessageDict
    variations: NotRequired[list[MessageDict]]
