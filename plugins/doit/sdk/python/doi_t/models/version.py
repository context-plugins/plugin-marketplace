from __future__ import annotations

from typing import Any

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Version(SdkBaseModel):
    version: Optional[int] = UNSET
    """Contract version number."""

    status: Optional[str] = UNSET
    """Version status."""

    name: Optional[str] = UNSET
    start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startDate")
    end_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    effective_start: Optional[RFC3339DateTime] = Field(default=UNSET, alias="effectiveStart")
    effective_end: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="effectiveEnd")
    renewal_policy: Optional[str] = Field(default=UNSET, alias="renewalPolicy")
    cancellation_reason: OptionalNullable[str] = Field(default=UNSET, alias="cancellationReason")
    billing_profile: Optional[Any] = Field(default=UNSET, alias="billingProfile")
    invoices_email: Optional[EmailStr] = Field(default=UNSET, alias="invoicesEmail")
    contract_updates_email: Optional[EmailStr] = Field(default=UNSET, alias="contractUpdatesEmail")
    doit_invoicing_enabled: Optional[bool] = Field(default=UNSET, alias="doitInvoicingEnabled")
    """Whether DoiT generates invoices for this contract."""

    management_accounts: Optional[list[str]] = Field(default=UNSET, alias="managementAccounts")
    billing_rules: Optional[list[Any]] = Field(default=UNSET, alias="billingRules")
    price_books: Optional[list[Any]] = Field(default=UNSET, alias="priceBooks")
    custom_line_items: Optional[list[Any]] = Field(default=UNSET, alias="customLineItems")


class VersionDict(TypedDict):
    version: NotRequired[int]
    status: NotRequired[str]
    name: NotRequired[str]
    start_date: NotRequired[RFC3339DateTime]
    end_date: NotRequired[RFC3339DateTime | None]
    effective_start: NotRequired[RFC3339DateTime]
    effective_end: NotRequired[RFC3339DateTime | None]
    renewal_policy: NotRequired[str]
    cancellation_reason: NotRequired[str | None]
    billing_profile: NotRequired[Any]
    invoices_email: NotRequired[EmailStr]
    contract_updates_email: NotRequired[EmailStr]
    doit_invoicing_enabled: NotRequired[bool]
    management_accounts: NotRequired[list[str]]
    billing_rules: NotRequired[list[Any]]
    price_books: NotRequired[list[Any]]
    custom_line_items: NotRequired[list[Any]]
