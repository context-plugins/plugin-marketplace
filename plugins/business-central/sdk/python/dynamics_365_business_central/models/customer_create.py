from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.blocked1 import Blocked1OrStr
from .enums.type1 import Type1OrStr


class CustomerCreate(SdkBaseModel):
    number: Optional[str] = UNSET
    display_name: str = Field(alias="displayName")
    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")
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
    tax_registration_number: Optional[str] = Field(default=UNSET, alias="taxRegistrationNumber")
    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    blocked: Optional[Blocked1OrStr] = UNSET


class CustomerCreateDict(TypedDict):
    number: NotRequired[str]
    display_name: str
    type_: NotRequired[Type1OrStr]
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
    tax_registration_number: NotRequired[str]
    currency_code: NotRequired[str]
    blocked: NotRequired[Blocked1OrStr]
