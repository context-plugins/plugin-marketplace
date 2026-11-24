from __future__ import annotations

from typing import Any

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.renewal_policy1 import RenewalPolicy1OrStr


class MtsContractInput(SdkBaseModel):
    """Contract create/update payload. Full field-level validation is applied server-side."""

    name: str
    start_date: RFC3339DateTime = Field(alias="startDate")
    end_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    renewal_policy: RenewalPolicy1OrStr = Field(alias="renewalPolicy")
    doit_invoicing_enabled: bool = Field(default=True, alias="doitInvoicingEnabled")
    """Whether DoiT generates invoices for this contract. Disabling suppresses invoice generation from that point
    forward while billing calculations and pipeline outputs continue. Omitting the field leaves invoicing enabled."""

    invoices_email: Optional[EmailStr] = Field(default=UNSET, alias="invoicesEmail")
    """Required for an end-customer contract with doitInvoicingEnabled set to true; optional otherwise."""

    contract_updates_email: Optional[EmailStr] = Field(default=UNSET, alias="contractUpdatesEmail")
    """Required for an end-customer contract with doitInvoicingEnabled set to true; optional otherwise."""

    billing_profile: Optional[Any] = Field(default=UNSET, alias="billingProfile")
    """The billing profile (name, country, state, city, address, zip). Required for an end-customer contract with
    doitInvoicingEnabled set to true; optional otherwise."""

    management_accounts: Optional[list[str]] = Field(default=UNSET, alias="managementAccounts")
    billing_rules: Optional[list[Any]] = Field(default=UNSET, alias="billingRules")
    price_books: Optional[list[Any]] = Field(default=UNSET, alias="priceBooks")
    custom_line_items: Optional[list[Any]] = Field(default=UNSET, alias="customLineItems")


class MtsContractInputDict(TypedDict):
    name: str
    start_date: RFC3339DateTime
    end_date: NotRequired[RFC3339DateTime | None]
    renewal_policy: RenewalPolicy1OrStr
    doit_invoicing_enabled: NotRequired[bool]
    invoices_email: NotRequired[EmailStr]
    contract_updates_email: NotRequired[EmailStr]
    billing_profile: NotRequired[Any]
    management_accounts: NotRequired[list[str]]
    billing_rules: NotRequired[list[Any]]
    price_books: NotRequired[list[Any]]
    custom_line_items: NotRequired[list[Any]]
