from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Poll(SdkBaseModel):
    options: list[str]
    duration_minutes: int = Field(alias="durationMinutes")


class PollDict(TypedDict):
    options: list[str]
    duration_minutes: int
