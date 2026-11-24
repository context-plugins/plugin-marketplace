from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartTimerDecisionAttributes(SdkBaseModel):
    timer_id: str = Field(alias="timerId")
    r"""The unique ID of the timer. The specified string must not contain a : (colon), / (slash), | (vertical bar), or
    any control characters (\u0000-\u001f | \u007f-\u009f). Also, it must not be the literal string arn."""

    control: Optional[str] = UNSET
    """The data attached to the event that can be used by the decider in subsequent workflow tasks."""

    start_to_fire_timeout: str = Field(alias="startToFireTimeout")
    """The duration to wait before firing the timer. The duration is specified in seconds, an integer greater than or
    equal to 0."""


class StartTimerDecisionAttributesDict(TypedDict):
    timer_id: str
    control: NotRequired[str]
    start_to_fire_timeout: str
