from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .schedule import Schedule, ScheduleDict
from .target import Target, TargetDict


class EscalateResponseMessage(SdkBaseModel):
    type_: Literal["escalate"] = Field(default="escalate", alias="type")
    """Message type of an escalation message."""

    id: str
    """UUID that references this message."""

    schedule: Optional[Schedule] = UNSET
    feedback_id: Optional[str] = Field(default=UNSET, alias="feedbackId")
    """unique ID to identify the generation, used to submit feedback"""

    targets: list[Target]
    """Array of transfer targets."""


class EscalateResponseMessageDict(TypedDict):
    type_: Literal["escalate"]
    id: str
    schedule: NotRequired[ScheduleDict]
    feedback_id: NotRequired[str]
    targets: list[TargetDict]
