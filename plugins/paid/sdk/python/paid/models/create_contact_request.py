from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .contact_billing_address import ContactBillingAddress, ContactBillingAddressDict
from .enums.create_contact_request_roles_items import CreateContactRequestRolesItemsOrStr


class CreateContactRequest(SdkBaseModel):
    customer_id: str = Field(alias="customerId")
    first_name: str = Field(default="", alias="firstName")
    last_name: str = Field(default="", alias="lastName")
    email: EmailStr
    phone: OptionalNullable[str] = UNSET
    billing_address: Optional[ContactBillingAddress] = Field(default=UNSET, alias="billingAddress")
    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    roles: Optional[list[CreateContactRequestRolesItemsOrStr]] = UNSET


class CreateContactRequestDict(TypedDict):
    customer_id: str
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: EmailStr
    phone: NotRequired[str | None]
    billing_address: NotRequired[ContactBillingAddressDict]
    external_id: NotRequired[str | None]
    roles: NotRequired[list[CreateContactRequestRolesItemsOrStr]]
