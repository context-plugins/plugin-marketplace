from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .message import Message, MessageDict


class ReceiveMessageResult(SdkBaseModel):
    messages: Optional[list[Message]] = Field(default=UNSET, alias="Messages")
    """A list of messages."""


class ReceiveMessageResultDict(TypedDict):
    messages: NotRequired[list[MessageDict]]
