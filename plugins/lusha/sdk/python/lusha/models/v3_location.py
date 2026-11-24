from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3Location(SdkBaseModel):
    """Location filter object used in prospecting requests"""

    city: Optional[str] = UNSET
    state: Optional[str] = UNSET
    country: Optional[str] = UNSET
    continent: Optional[str] = UNSET
    country_grouping: Optional[str] = Field(default=UNSET, alias="countryGrouping")
    region: Optional[str] = UNSET
    country_iso2: Optional[str] = Field(default=UNSET, alias="countryIso2")


class V3LocationDict(TypedDict):
    city: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    continent: NotRequired[str]
    country_grouping: NotRequired[str]
    region: NotRequired[str]
    country_iso2: NotRequired[str]
