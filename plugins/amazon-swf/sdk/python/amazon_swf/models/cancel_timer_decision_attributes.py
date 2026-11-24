from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CancelTimerDecisionAttributes(SdkBaseModel):
    timer_id: str = Field(alias="timerId")
    """The unique ID of the timer to cancel."""


class CancelTimerDecisionAttributesDict(TypedDict):
    timer_id: str
