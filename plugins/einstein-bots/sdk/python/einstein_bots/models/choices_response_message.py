from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .choice import Choice, ChoiceDict
from .enums.widget import WidgetOrStr
from .schedule import Schedule, ScheduleDict


class ChoicesResponseMessage(SdkBaseModel):
    type_: Literal["choices"] = Field(default="choices", alias="type")
    """Message type of a question with choices."""

    id: str
    """UUID that references this message."""

    choices: list[Choice]
    """Array of answers to choose from."""

    widget: WidgetOrStr
    """"Widget type of how answers appear in the client.

    * ``buttons``—Answers appear in clickable pill boxes.
    * ``menu``—Answers appear in clickable boxes vertically stacked."
    """

    schedule: Optional[Schedule] = UNSET
    feedback_id: Optional[str] = Field(default=UNSET, alias="feedbackId")
    """unique ID to identify the generation, used to submit feedback"""


class ChoicesResponseMessageDict(TypedDict):
    type_: Literal["choices"]
    id: str
    choices: list[ChoiceDict]
    widget: WidgetOrStr
    schedule: NotRequired[ScheduleDict]
    feedback_id: NotRequired[str]
