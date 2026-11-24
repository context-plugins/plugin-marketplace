from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class CompanyLocation(SdkBaseModel):
    city: Optional[str] = UNSET
    continent: Optional[str] = UNSET
    country: Optional[str] = UNSET
    country_iso2: Optional[str] = UNSET
    location_coordinates: Optional[list[float]] = UNSET
    state: OptionalNullable[str] = UNSET
    state_code: OptionalNullable[str] = UNSET


class CompanyLocationDict(TypedDict):
    city: NotRequired[str]
    continent: NotRequired[str]
    country: NotRequired[str]
    country_iso2: NotRequired[str]
    location_coordinates: NotRequired[list[float]]
    state: NotRequired[str | None]
    state_code: NotRequired[str | None]
