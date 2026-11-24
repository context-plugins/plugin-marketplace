from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .runtime_v2_lex_message import RuntimeV2LexMessage, RuntimeV2LexMessageDict


class TextResponseEvent(SdkBaseModel):
    messages: Optional[list[RuntimeV2LexMessage]] = UNSET
    """A list of messages to send to the user. Messages are ordered based on the order that you returned the messages
    from your Lambda function or the order that the messages are defined in the bot."""

    event_id: Optional[str] = Field(default=UNSET, alias="eventId")
    """A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form RESPONSE-N, where N is a
    number starting with one and incremented for each event sent by Amazon Lex V2 in the current session."""


class TextResponseEventDict(TypedDict):
    messages: NotRequired[list[RuntimeV2LexMessageDict]]
    event_id: NotRequired[str]
