from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.blocked_dynamics365_business_central_api_v20_vendors_api import (
    BlockedDynamics365BusinessCentralApiV20VendorsApiOrStr,
)


class VendorUpdate(SdkBaseModel):
    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    address_line1: Optional[str] = Field(default=UNSET, alias="addressLine1")
    address_line2: Optional[str] = Field(default=UNSET, alias="addressLine2")
    city: Optional[str] = UNSET
    state: Optional[str] = UNSET
    country: Optional[str] = UNSET
    postal_code: Optional[str] = Field(default=UNSET, alias="postalCode")
    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    email: Optional[str] = UNSET
    website: Optional[str] = UNSET
    tax_liable: Optional[bool] = Field(default=UNSET, alias="taxLiable")
    blocked: Optional[BlockedDynamics365BusinessCentralApiV20VendorsApiOrStr] = UNSET


class VendorUpdateDict(TypedDict):
    display_name: NotRequired[str]
    address_line1: NotRequired[str]
    address_line2: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    postal_code: NotRequired[str]
    phone_number: NotRequired[str]
    email: NotRequired[str]
    website: NotRequired[str]
    tax_liable: NotRequired[bool]
    blocked: NotRequired[BlockedDynamics365BusinessCentralApiV20VendorsApiOrStr]
