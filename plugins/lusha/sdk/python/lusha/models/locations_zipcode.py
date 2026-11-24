from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LocationsZipcode(SdkBaseModel):
    country_iso2: Optional[str] = Field(default=UNSET, alias="countryIso2")
    zipcode: Optional[str] = UNSET


class LocationsZipcodeDict(TypedDict):
    country_iso2: NotRequired[str]
    zipcode: NotRequired[str]
