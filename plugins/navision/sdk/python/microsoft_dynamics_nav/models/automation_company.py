from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AutomationCompany(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    """The company name"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The company display name"""

    business_profile_id: Optional[str] = Field(default=UNSET, alias="businessProfileId")
    """The business profile ID"""

    evaluation_company: Optional[bool] = Field(default=UNSET, alias="evaluationCompany")
    """Whether this is an evaluation company"""


class AutomationCompanyDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    display_name: NotRequired[str]
    business_profile_id: NotRequired[str]
    evaluation_company: NotRequired[bool]
