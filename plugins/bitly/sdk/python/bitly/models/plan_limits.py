from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .plan_limit import PlanLimit, PlanLimitDict


class PlanLimits(SdkBaseModel):
    references: Optional[dict[str, str]] = UNSET
    organization_guid: Optional[str] = UNSET
    plan_limits: Optional[list[PlanLimit]] = UNSET


class PlanLimitsDict(TypedDict):
    references: NotRequired[dict[str, str]]
    organization_guid: NotRequired[str]
    plan_limits: NotRequired[list[PlanLimitDict]]
