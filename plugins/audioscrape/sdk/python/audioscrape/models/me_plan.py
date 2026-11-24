from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .plan_limits_response import PlanLimitsResponse, PlanLimitsResponseDict


class MePlan(SdkBaseModel):
    limits: PlanLimitsResponse
    name: str
    """Plan slug: ``free``, ``starter``, ``basic``, ``pro``, ``enterprise``."""


class MePlanDict(TypedDict):
    limits: PlanLimitsResponseDict
    name: str
