from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyLocationResponse(SdkBaseModel):
    """HQ location only. For all company site locations, see companyLocations."""

    city: Optional[str] = UNSET
    country: Optional[str] = UNSET
    full_location: Optional[str] = Field(default=UNSET, alias="fullLocation")
    state: Optional[str] = UNSET
    state_code: Optional[str] = Field(default=UNSET, alias="stateCode")
    country_iso2: Optional[str] = Field(default=UNSET, alias="countryIso2")
    raw_location: Optional[str] = Field(default=UNSET, alias="rawLocation")


class CompanyLocationResponseDict(TypedDict):
    city: NotRequired[str]
    country: NotRequired[str]
    full_location: NotRequired[str]
    state: NotRequired[str]
    state_code: NotRequired[str]
    country_iso2: NotRequired[str]
    raw_location: NotRequired[str]
