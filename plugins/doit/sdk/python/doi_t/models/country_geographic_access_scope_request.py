from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CountryGeographicAccessScopeRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    type_: Literal["country"] = Field(default="country", alias="type")
    """Access is limited to one canonical country."""

    country_code: str = Field(alias="countryCode")
    """ISO 3166-1 alpha-2 country code, canonicalized by the service."""


class CountryGeographicAccessScopeRequestDict(TypedDict):
    type_: Literal["country"]
    country_code: str
