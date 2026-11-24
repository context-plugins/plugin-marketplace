from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .schedule import Schedule, ScheduleDict


class TextResponseMessage(SdkBaseModel):
    type_: Literal["text"] = Field(default="text", alias="type")
    """Message type of a text message to the customer."""

    id: str
    """UUID that references this message."""

    text: str
    """Message from the bot."""

    schedule: Optional[Schedule] = UNSET
    feedback_id: Optional[str] = Field(default=UNSET, alias="feedbackId")
    """unique ID to identify the generation, used to submit feedback"""


class TextResponseMessageDict(TypedDict):
    type_: Literal["text"]
    id: str
    text: str
    schedule: NotRequired[ScheduleDict]
    feedback_id: NotRequired[str]
