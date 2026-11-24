from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.decision_impact_deliverd_dev_governance_api import DecisionImpactDeliverdDevGovernanceApiOrStr
from .enums.min_risk import MinRiskOrStr


class AppliesWhen(SdkBaseModel):
    """Conditions on the governance profile; every one given must hold"""

    model_config = ConfigDict(extra="forbid")

    min_risk: Optional[MinRiskOrStr] = Field(default=UNSET, alias="minRisk")
    personal_data: Optional[bool] = Field(default=UNSET, alias="personalData")
    customer_facing: Optional[bool] = Field(default=UNSET, alias="customerFacing")
    production_use: Optional[bool] = Field(default=UNSET, alias="productionUse")
    decision_impact: Optional[list[DecisionImpactDeliverdDevGovernanceApiOrStr]] = Field(
        default=UNSET, alias="decisionImpact"
    )


class AppliesWhenDict(TypedDict):
    min_risk: NotRequired[MinRiskOrStr]
    personal_data: NotRequired[bool]
    customer_facing: NotRequired[bool]
    production_use: NotRequired[bool]
    decision_impact: NotRequired[list[DecisionImpactDeliverdDevGovernanceApiOrStr]]
