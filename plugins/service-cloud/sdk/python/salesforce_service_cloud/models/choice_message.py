from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class ChoiceMessage(SdkBaseModel):
    type_: Literal["choice"] = Field(default="choice", alias="type")
    """Message type for answering a question with choices from the bot."""

    sequence_id: int = Field(alias="sequenceId")
    """Client-generated sequence number of the message in a session. Increase this number for each subsequent
    message."""

    in_reply_to_message_id: Optional[str] = Field(default=UNSET, alias="inReplyToMessageId")
    """Message ID of the previous response you are replying to."""

    choice_index: OptionalNullable[int] = Field(default=UNSET, alias="choiceIndex")
    """Index or alias of the chosen answer. The index starts with 1. Either ``choiceIndex`` or ``choiceId`` is
    required."""

    choice_id: OptionalNullable[str] = Field(default=UNSET, alias="choiceId")
    """ID of the answer when you answer by clicking a choice button. Either ``choiceIndex`` or ``choiceId`` is
    required."""


class ChoiceMessageDict(TypedDict):
    type_: Literal["choice"]
    sequence_id: int
    in_reply_to_message_id: NotRequired[str]
    choice_index: NotRequired[int | None]
    choice_id: NotRequired[str | None]
