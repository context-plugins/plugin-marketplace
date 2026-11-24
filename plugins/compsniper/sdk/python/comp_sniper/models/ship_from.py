from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.country_code import CountryCode, CountryCodeOrStr


class ShipFrom(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    country_code: CountryCodeOrStr = Field(default=CountryCode.US, alias="countryCode")
    postal_code: str = Field(alias="postalCode")


class ShipFromDict(TypedDict):
    country_code: NotRequired[CountryCodeOrStr]
    postal_code: str
