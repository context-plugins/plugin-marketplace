from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .benefit_data import BenefitData, BenefitDataDict
from .enums.phase import PhaseOrStr


class Automation(SdkBaseModel):
    """An automation idea or project in the Automation Hub pipeline"""

    id: Optional[int] = UNSET
    """Unique integer identifier of the automation"""

    name: Optional[str] = UNSET
    """Display name of the automation idea"""

    description: Optional[str] = UNSET
    """Detailed description of the automation idea and its business value"""

    phase: Optional[PhaseOrStr] = UNSET
    """Current phase of the automation in the pipeline"""

    status: Optional[str] = UNSET
    """Current status within the active phase"""

    submitted_by: Optional[str] = Field(default=UNSET, alias="submittedBy")
    """Name of the user who submitted the automation idea"""

    submitted_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="submittedDate")
    """ISO 8601 timestamp when the idea was submitted"""

    last_modified: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModified")
    """ISO 8601 timestamp of the last modification"""

    estimated_benefit: Optional[BenefitData] = Field(default=UNSET, alias="estimatedBenefit")
    """Estimated cost-benefit analysis data for an automation idea"""

    tags: Optional[list[str]] = UNSET
    """Tags associated with the automation for categorization"""


class AutomationDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    description: NotRequired[str]
    phase: NotRequired[PhaseOrStr]
    status: NotRequired[str]
    submitted_by: NotRequired[str]
    submitted_date: NotRequired[RFC3339DateTime]
    last_modified: NotRequired[RFC3339DateTime]
    estimated_benefit: NotRequired[BenefitDataDict]
    tags: NotRequired[list[str]]
