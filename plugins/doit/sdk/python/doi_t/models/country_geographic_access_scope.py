from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CountryGeographicAccessScope(SdkBaseModel):
    type_: Literal["country"] = Field(default="country", alias="type")
    """Access is limited to one canonical country."""

    country_code: str = Field(alias="countryCode")
    """Canonical ISO 3166-1 alpha-2 country code."""

    country_name: str = Field(alias="countryName")
    """Canonical English country name."""


class CountryGeographicAccessScopeDict(TypedDict):
    type_: Literal["country"]
    country_code: str
    country_name: str
