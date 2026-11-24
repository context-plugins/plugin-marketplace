from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SslUnitInfo(SdkBaseModel):
    common_name: Optional[str] = Field(default=UNSET, alias="commonName")
    organization: Optional[str] = UNSET
    organizational_unit: Optional[str] = Field(default=UNSET, alias="organizationalUnit")
    locality: Optional[str] = UNSET
    state: Optional[str] = UNSET
    country: Optional[str] = UNSET
    inc_country: Optional[str] = Field(default=UNSET, alias="incCountry")
    inc_state: Optional[str] = Field(default=UNSET, alias="incState")
    business_category: Optional[str] = Field(default=UNSET, alias="businessCategory")
    street: Optional[str] = UNSET
    postal_code: Optional[str] = Field(default=UNSET, alias="postalCode")
    serial_number: Optional[str] = Field(default=UNSET, alias="serialNumber")


class SslUnitInfoDict(TypedDict):
    common_name: NotRequired[str]
    organization: NotRequired[str]
    organizational_unit: NotRequired[str]
    locality: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    inc_country: NotRequired[str]
    inc_state: NotRequired[str]
    business_category: NotRequired[str]
    street: NotRequired[str]
    postal_code: NotRequired[str]
    serial_number: NotRequired[str]
