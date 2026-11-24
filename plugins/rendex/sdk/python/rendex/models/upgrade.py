from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Upgrade(SdkBaseModel):
    recommended_plan: Optional[str] = Field(default=UNSET, alias="recommendedPlan")
    recommended_plan_credits: OptionalNullable[int] = Field(default=UNSET, alias="recommendedPlanCredits")
    upgrade_url: Optional[str] = Field(default=UNSET, alias="upgradeUrl")
    manage_billing_url: Optional[str] = Field(default=UNSET, alias="manageBillingUrl")


class UpgradeDict(TypedDict):
    recommended_plan: NotRequired[str]
    recommended_plan_credits: NotRequired[int | None]
    upgrade_url: NotRequired[str]
    manage_billing_url: NotRequired[str]
