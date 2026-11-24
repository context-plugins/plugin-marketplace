from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .benefit_data import BenefitData, BenefitDataDict


class CreateAutomationIdeaRequest(SdkBaseModel):
    """Request payload for creating a new automation idea"""

    name: str
    """Display name of the automation idea"""

    description: str
    """Detailed description of the automation opportunity"""

    estimated_benefit: Optional[BenefitData] = Field(default=UNSET, alias="estimatedBenefit")
    """Estimated cost-benefit analysis data for an automation idea"""

    tags: Optional[list[str]] = UNSET
    """Tags for categorizing the automation idea"""


class CreateAutomationIdeaRequestDict(TypedDict):
    name: str
    description: str
    estimated_benefit: NotRequired[BenefitDataDict]
    tags: NotRequired[list[str]]
