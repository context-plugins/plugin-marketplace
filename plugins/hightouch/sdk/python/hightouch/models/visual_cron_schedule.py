from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .expression import Expression, ExpressionDict


class VisualCronSchedule(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    expressions: list[Expression]


class VisualCronScheduleDict(TypedDict):
    expressions: list[ExpressionDict]
