from __future__ import annotations

from typing import Any

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .customer_billing_address_input import CustomerBillingAddressInput, CustomerBillingAddressInputDict
from .enums.customer_creation_state import CustomerCreationStateOrStr


class CreateCustomerRequest(SdkBaseModel):
    name: str
    legal_name: OptionalNullable[str] = Field(default=UNSET, alias="legalName")
    email: Optional[EmailStr] = UNSET
    phone: Optional[str] = UNSET
    website: Optional[str] = UNSET
    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    billing_address: Optional[CustomerBillingAddressInput] = Field(default=UNSET, alias="billingAddress")
    creation_state: Optional[CustomerCreationStateOrStr] = Field(default=UNSET, alias="creationState")
    vat_number: OptionalNullable[str] = Field(default=UNSET, alias="vatNumber")
    metadata: OptionalNullable[dict[str, Any]] = UNSET
    default_currency: Optional[str] = Field(default=UNSET, alias="defaultCurrency")


class CreateCustomerRequestDict(TypedDict):
    name: str
    legal_name: NotRequired[str | None]
    email: NotRequired[EmailStr]
    phone: NotRequired[str]
    website: NotRequired[str]
    external_id: NotRequired[str | None]
    billing_address: NotRequired[CustomerBillingAddressInputDict]
    creation_state: NotRequired[CustomerCreationStateOrStr]
    vat_number: NotRequired[str | None]
    metadata: NotRequired[dict[str, Any] | None]
    default_currency: NotRequired[str]
