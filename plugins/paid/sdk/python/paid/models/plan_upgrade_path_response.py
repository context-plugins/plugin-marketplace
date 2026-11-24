from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .plan1 import Plan1, Plan1Dict


class PlanUpgradePathResponse(SdkBaseModel):
    data: list[Plan1]


class PlanUpgradePathResponseDict(TypedDict):
    data: list[Plan1Dict]
