from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.blocked1 import Blocked1OrStr
from .enums.type1 import Type1OrStr


class CustomerUpdate(SdkBaseModel):
    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
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
    credit_limit: Optional[float] = Field(default=UNSET, alias="creditLimit")
    blocked: Optional[Blocked1OrStr] = UNSET


class CustomerUpdateDict(TypedDict):
    display_name: NotRequired[str]
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
    credit_limit: NotRequired[float]
    blocked: NotRequired[Blocked1OrStr]
