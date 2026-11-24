from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Location1(SdkBaseModel):
    city: Optional[str] = UNSET
    state: Optional[str] = UNSET
    state_code: Optional[str] = Field(default=UNSET, alias="stateCode")
    """Free field. ISO/postal state or region code, when available."""

    country: Optional[str] = UNSET
    country_iso2: Optional[str] = Field(default=UNSET, alias="countryIso2")
    continent: Optional[str] = UNSET


class Location1Dict(TypedDict):
    city: NotRequired[str]
    state: NotRequired[str]
    state_code: NotRequired[str]
    country: NotRequired[str]
    country_iso2: NotRequired[str]
    continent: NotRequired[str]
