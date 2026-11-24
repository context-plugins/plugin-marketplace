from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DiscoveryContactCriteria(SdkBaseModel):
    persona: Optional[list[str]] = UNSET
    """Persona criteria used to rank discovery results"""

    contact_regions: Optional[list[str]] = Field(default=UNSET, alias="contactRegions")
    contact_countries: Optional[list[str]] = Field(default=UNSET, alias="contactCountries")
    contact_state: Optional[list[str]] = Field(default=UNSET, alias="contactState")


class DiscoveryContactCriteriaDict(TypedDict):
    persona: NotRequired[list[str]]
    contact_regions: NotRequired[list[str]]
    contact_countries: NotRequired[list[str]]
    contact_state: NotRequired[list[str]]
