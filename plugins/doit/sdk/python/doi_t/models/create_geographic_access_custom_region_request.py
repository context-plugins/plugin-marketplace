from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateGeographicAccessCustomRegionRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    country_codes: list[str] = Field(alias="countryCodes")


class CreateGeographicAccessCustomRegionRequestDict(TypedDict):
    name: str
    country_codes: list[str]
