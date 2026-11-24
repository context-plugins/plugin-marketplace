from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Country(SdkBaseModel):
    country_id: Optional[str] = Field(default=UNSET, alias="countryId")
    """Opaque token. Pass back verbatim; do not persist."""

    country_name: Optional[str] = Field(default=UNSET, alias="countryName")
    is_us: Optional[bool] = Field(default=UNSET, alias="isUS")


class CountryDict(TypedDict):
    country_id: NotRequired[str]
    country_name: NotRequired[str]
    is_us: NotRequired[bool]
