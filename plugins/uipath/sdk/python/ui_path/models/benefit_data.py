from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BenefitData(SdkBaseModel):
    """Estimated cost-benefit analysis data for an automation idea"""

    estimated_time_savings_per_year: Optional[float] = Field(default=UNSET, alias="estimatedTimeSavingsPerYear")
    """Estimated hours saved per year by automating this process"""

    estimated_fte_savings: Optional[float] = Field(default=UNSET, alias="estimatedFTESavings")
    """Full-time equivalent headcount savings from the automation"""

    estimated_cost_savings_per_year: Optional[float] = Field(default=UNSET, alias="estimatedCostSavingsPerYear")
    """Estimated monetary cost savings per year in the organization's currency"""


class BenefitDataDict(TypedDict):
    estimated_time_savings_per_year: NotRequired[float]
    estimated_fte_savings: NotRequired[float]
    estimated_cost_savings_per_year: NotRequired[float]
