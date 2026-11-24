from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .response_options import ResponseOptions, ResponseOptionsDict
from .unions.message1 import Message1, Message1Dict


class ChatMessageEnvelope(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    message: Message1
    """Message to the bot."""

    response_options: Optional[ResponseOptions] = Field(default=UNSET, alias="responseOptions")
    """Configuration of additional information returned in the response payload."""


class ChatMessageEnvelopeDict(TypedDict):
    message: Message1Dict
    response_options: NotRequired[ResponseOptionsDict]
