from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TextMessage(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    type_: Literal["text"] = Field(default="text", alias="type")
    """Message type for replying to the bot through text."""

    sequence_id: int = Field(alias="sequenceId")
    """Client-generated sequence number of the message in a session. Increase this number for each subsequent
    message."""

    in_reply_to_message_id: Optional[str] = Field(default=UNSET, alias="inReplyToMessageId")
    """Message ID of the previous response you are replying to."""

    text: str
    """Text reply to the bot. To answer a question with choices with a text message, type the ``choiceLabel``."""


class TextMessageDict(TypedDict):
    type_: Literal["text"]
    sequence_id: int
    in_reply_to_message_id: NotRequired[str]
    text: str
