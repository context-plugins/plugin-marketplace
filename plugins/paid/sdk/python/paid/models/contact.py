from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.salutation import SalutationOrStr


class Contact(SdkBaseModel):
    id: Optional[str] = UNSET
    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    organization_id: Optional[str] = Field(default=UNSET, alias="organizationId")
    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    customer_external_id: Optional[str] = Field(default=UNSET, alias="customerExternalId")
    salutation: Optional[SalutationOrStr] = UNSET
    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    email: Optional[str] = UNSET
    phone: Optional[str] = UNSET
    billing_street: Optional[str] = Field(default=UNSET, alias="billingStreet")
    billing_city: Optional[str] = Field(default=UNSET, alias="billingCity")
    billing_state_province: Optional[str] = Field(default=UNSET, alias="billingStateProvince")
    billing_country: Optional[str] = Field(default=UNSET, alias="billingCountry")
    billing_postal_code: Optional[str] = Field(default=UNSET, alias="billingPostalCode")


class ContactDict(TypedDict):
    id: NotRequired[str]
    external_id: NotRequired[str]
    organization_id: NotRequired[str]
    customer_id: NotRequired[str]
    customer_external_id: NotRequired[str]
    salutation: NotRequired[SalutationOrStr]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: NotRequired[str]
    phone: NotRequired[str]
    billing_street: NotRequired[str]
    billing_city: NotRequired[str]
    billing_state_province: NotRequired[str]
    billing_country: NotRequired[str]
    billing_postal_code: NotRequired[str]
