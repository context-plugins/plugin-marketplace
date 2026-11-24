from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .plan_upgrade_path_group import PlanUpgradePathGroup, PlanUpgradePathGroupDict


class UpdatePlanUpgradePathRequest(SdkBaseModel):
    product_id: str = Field(alias="productId")
    """Paid product ID, for example ``prod_abc123``"""

    groups: list[PlanUpgradePathGroup]


class UpdatePlanUpgradePathRequestDict(TypedDict):
    product_id: str
    groups: list[PlanUpgradePathGroupDict]
