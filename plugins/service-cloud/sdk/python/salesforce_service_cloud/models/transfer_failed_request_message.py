from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.reason1 import Reason1OrStr


class TransferFailedRequestMessage(SdkBaseModel):
    type_: Literal["transferFailed"] = Field(default="transferFailed", alias="type")
    """Message type for the client to inform the bot that the client failed to transfer the session to another
    target."""

    sequence_id: int = Field(alias="sequenceId")
    """Client-generated sequence number of the message in a session. Increase this number for each subsequent
    message."""

    in_reply_to_message_id: Optional[str] = Field(default=UNSET, alias="inReplyToMessageId")
    """Message ID of the previous response you are replying to."""

    reason: Reason1OrStr
    """Reason for the failed transfer."""

    description: OptionalNullable[str] = UNSET
    """Description of why the transfer failed."""


class TransferFailedRequestMessageDict(TypedDict):
    type_: Literal["transferFailed"]
    sequence_id: int
    in_reply_to_message_id: NotRequired[str]
    reason: Reason1OrStr
    description: NotRequired[str | None]
