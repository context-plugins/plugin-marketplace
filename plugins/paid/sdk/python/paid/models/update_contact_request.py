from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .contact_billing_address import ContactBillingAddress, ContactBillingAddressDict
from .enums.update_contact_request_roles_items import UpdateContactRequestRolesItemsOrStr


class UpdateContactRequest(SdkBaseModel):
    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    email: Optional[EmailStr] = UNSET
    phone: OptionalNullable[str] = UNSET
    billing_address: Optional[ContactBillingAddress] = Field(default=UNSET, alias="billingAddress")
    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    roles: Optional[list[UpdateContactRequestRolesItemsOrStr]] = UNSET


class UpdateContactRequestDict(TypedDict):
    customer_id: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: NotRequired[EmailStr]
    phone: NotRequired[str | None]
    billing_address: NotRequired[ContactBillingAddressDict]
    external_id: NotRequired[str | None]
    roles: NotRequired[list[UpdateContactRequestRolesItemsOrStr]]
