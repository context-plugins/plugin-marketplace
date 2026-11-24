from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .contact_billing_address import ContactBillingAddress, ContactBillingAddressDict
from .enums.contact_roles_items import ContactRolesItemsOrStr


class Contact1(SdkBaseModel):
    id: str
    customer_id: str = Field(alias="customerId")
    first_name: str = Field(alias="firstName")
    last_name: str = Field(alias="lastName")
    email: str
    phone: str | None
    billing_address: Optional[ContactBillingAddress] = Field(default=UNSET, alias="billingAddress")
    external_id: str | None = Field(alias="externalId")
    roles: list[ContactRolesItemsOrStr]
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class Contact1Dict(TypedDict):
    id: str
    customer_id: str
    first_name: str
    last_name: str
    email: str
    phone: str | None
    billing_address: NotRequired[ContactBillingAddressDict]
    external_id: str | None
    roles: list[ContactRolesItemsOrStr]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
