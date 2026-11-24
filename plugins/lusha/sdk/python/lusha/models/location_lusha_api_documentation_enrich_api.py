from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LocationLushaApiDocumentationEnrichApi(SdkBaseModel):
    country: Optional[str] = UNSET
    country_iso2: Optional[str] = Field(default=UNSET, alias="countryIso2")
    state: Optional[str] = UNSET
    city: Optional[str] = UNSET
    continent: Optional[str] = UNSET
    coordinates: Optional[list[float]] = UNSET
    is_eu_contact: Optional[bool] = Field(default=UNSET, alias="isEuContact")


class LocationLushaApiDocumentationEnrichApiDict(TypedDict):
    country: NotRequired[str]
    country_iso2: NotRequired[str]
    state: NotRequired[str]
    city: NotRequired[str]
    continent: NotRequired[str]
    coordinates: NotRequired[list[float]]
    is_eu_contact: NotRequired[bool]
