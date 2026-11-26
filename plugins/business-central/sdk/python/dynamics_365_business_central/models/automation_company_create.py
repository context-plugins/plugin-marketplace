from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AutomationCompanyCreate(SdkBaseModel):
    name: str
    """The name of the new company"""

    display_name: str = Field(alias="displayName")
    """The display name of the new company"""

    business_profile_id: Optional[str] = Field(default=UNSET, alias="businessProfileId")


class AutomationCompanyCreateDict(TypedDict):
    name: str
    display_name: str
    business_profile_id: NotRequired[str]
