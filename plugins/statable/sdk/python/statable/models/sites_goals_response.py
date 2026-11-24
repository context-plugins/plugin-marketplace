from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .goal import Goal, GoalDict


class SitesGoalsResponse(SdkBaseModel):
    goals: list[Goal]


class SitesGoalsResponseDict(TypedDict):
    goals: list[GoalDict]
