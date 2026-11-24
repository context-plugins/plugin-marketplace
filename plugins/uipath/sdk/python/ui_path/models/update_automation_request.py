from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .benefit_data import BenefitData, BenefitDataDict
from .enums.phase1 import Phase1OrStr


class UpdateAutomationRequest(SdkBaseModel):
    """Request payload for partially updating an automation record"""

    phase: Optional[Phase1OrStr] = UNSET
    """Updated pipeline phase for the automation"""

    status: Optional[str] = UNSET
    """Updated status within the current phase"""

    description: Optional[str] = UNSET
    """Updated description of the automation"""

    estimated_benefit: Optional[BenefitData] = Field(default=UNSET, alias="estimatedBenefit")
    """Estimated cost-benefit analysis data for an automation idea"""


class UpdateAutomationRequestDict(TypedDict):
    phase: NotRequired[Phase1OrStr]
    status: NotRequired[str]
    description: NotRequired[str]
    estimated_benefit: NotRequired[BenefitDataDict]
