from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.salutation import SalutationOrStr


class ContactCreateForCustomer(SdkBaseModel):
    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    salutation: SalutationOrStr
    first_name: str = Field(alias="firstName")
    last_name: str = Field(alias="lastName")
    account_name: Optional[str] = Field(default=UNSET, alias="accountName")
    email: str
    phone: Optional[str] = UNSET
    billing_street: Optional[str] = Field(default=UNSET, alias="billingStreet")
    billing_city: Optional[str] = Field(default=UNSET, alias="billingCity")
    billing_state_province: Optional[str] = Field(default=UNSET, alias="billingStateProvince")
    billing_country: Optional[str] = Field(default=UNSET, alias="billingCountry")
    billing_postal_code: Optional[str] = Field(default=UNSET, alias="billingPostalCode")


class ContactCreateForCustomerDict(TypedDict):
    external_id: NotRequired[str]
    salutation: SalutationOrStr
    first_name: str
    last_name: str
    account_name: NotRequired[str]
    email: str
    phone: NotRequired[str]
    billing_street: NotRequired[str]
    billing_city: NotRequired[str]
    billing_state_province: NotRequired[str]
    billing_country: NotRequired[str]
    billing_postal_code: NotRequired[str]
