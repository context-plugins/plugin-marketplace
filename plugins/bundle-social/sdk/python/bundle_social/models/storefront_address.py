from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StorefrontAddress(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    region_code: Optional[str] = Field(default=UNSET, alias="regionCode")
    language_code: Optional[str] = Field(default=UNSET, alias="languageCode")
    postal_code: Optional[str] = Field(default=UNSET, alias="postalCode")
    administrative_area: Optional[str] = Field(default=UNSET, alias="administrativeArea")
    locality: Optional[str] = UNSET
    address_lines: Optional[list[str]] = Field(default=UNSET, alias="addressLines")


class StorefrontAddressDict(TypedDict):
    region_code: NotRequired[str]
    language_code: NotRequired[str]
    postal_code: NotRequired[str]
    administrative_area: NotRequired[str]
    locality: NotRequired[str]
    address_lines: NotRequired[list[str]]
