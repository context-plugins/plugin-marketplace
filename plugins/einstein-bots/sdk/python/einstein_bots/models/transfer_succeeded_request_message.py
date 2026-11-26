from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TransferSucceededRequestMessage(SdkBaseModel):
    type_: Literal["transferSucceeded"] = Field(default="transferSucceeded", alias="type")
    """Message type for the client to inform the bot that the client successfully transferred the session to another
    target."""

    sequence_id: int = Field(alias="sequenceId")
    """Client-generated sequence number of the message in a session. Increase this number for each subsequent
    message."""

    in_reply_to_message_id: Optional[str] = Field(default=UNSET, alias="inReplyToMessageId")
    """Message ID of the previous response you are replying to."""


class TransferSucceededRequestMessageDict(TypedDict):
    type_: Literal["transferSucceeded"]
    sequence_id: int
    in_reply_to_message_id: NotRequired[str]
