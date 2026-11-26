from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr
from .schedule import Schedule, ScheduleDict


class SessionEndedResponseMessage(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    type_: Literal["sessionEnded"] = Field(default="sessionEnded", alias="type")
    """Message type informing that the session ended."""

    id: str
    """UUID that references this message."""

    reason: ReasonOrStr
    """Reason the session ended."""

    schedule: Optional[Schedule] = UNSET
    feedback_id: Optional[str] = Field(default=UNSET, alias="feedbackId")
    """unique ID to identify the generation, used to submit feedback"""


class SessionEndedResponseMessageDict(TypedDict):
    type_: Literal["sessionEnded"]
    id: str
    reason: ReasonOrStr
    schedule: NotRequired[ScheduleDict]
    feedback_id: NotRequired[str]
