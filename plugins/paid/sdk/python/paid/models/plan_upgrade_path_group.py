from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlanUpgradePathGroup(SdkBaseModel):
    frequency: str | None
    plan_ids: list[str] = Field(alias="planIds")


class PlanUpgradePathGroupDict(TypedDict):
    frequency: str | None
    plan_ids: list[str]
