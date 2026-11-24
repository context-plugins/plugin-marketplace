from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GeographicAccessCountry(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    country_code: str = Field(alias="countryCode")
    """Canonical ISO 3166-1 alpha-2 country code."""

    name: str
    """Canonical English display name."""


class GeographicAccessCountryDict(TypedDict):
    country_code: str
    name: str
