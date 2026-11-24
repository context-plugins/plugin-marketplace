from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateGeographicAccessCustomRegionRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    country_codes: Optional[list[str]] = Field(default=UNSET, alias="countryCodes")


class UpdateGeographicAccessCustomRegionRequestDict(TypedDict):
    name: NotRequired[str]
    country_codes: NotRequired[list[str]]
