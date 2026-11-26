from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .billing_address1 import BillingAddress1, BillingAddress1Dict
from .contact import Contact, ContactDict
from .enums.currency_code import CurrencyCodeOrStr
from .enums.customer_account_type_request import CustomerAccountTypeRequestOrStr
from .shipping_address1 import ShippingAddress1, ShippingAddress1Dict


class CustomerUpdateRequestDto(SdkBaseModel):
    """Update a customer"""

    name: Optional[str] = UNSET
    """Customer name"""

    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    """Customer company name"""

    contact: Optional[Contact] = UNSET
    email: Optional[str] = UNSET
    """Customer email address"""

    phone: Optional[str] = UNSET
    """Customer phone number"""

    fax: Optional[str] = UNSET
    """Customer fax number"""

    description: Optional[str] = UNSET
    """Customer description"""

    invoice_currency: Optional[CurrencyCodeOrStr] = Field(default=UNSET, alias="invoiceCurrency")
    account_type: Optional[CustomerAccountTypeRequestOrStr] = Field(default=UNSET, alias="accountType")
    payment_term_id: Optional[str] = Field(default=UNSET, alias="paymentTermId")
    """BILL-generated ID of the payment term. Use payment terms to set the number of days the customer has to clear an
    invoice."""

    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    """Customer account number. The number appears in customer invoices."""

    billing_address: Optional[BillingAddress1] = Field(default=UNSET, alias="billingAddress")
    shipping_address: Optional[ShippingAddress1] = Field(default=UNSET, alias="shippingAddress")


class CustomerUpdateRequestDtoDict(TypedDict):
    name: NotRequired[str]
    company_name: NotRequired[str]
    contact: NotRequired[ContactDict]
    email: NotRequired[str]
    phone: NotRequired[str]
    fax: NotRequired[str]
    description: NotRequired[str]
    invoice_currency: NotRequired[CurrencyCodeOrStr]
    account_type: NotRequired[CustomerAccountTypeRequestOrStr]
    payment_term_id: NotRequired[str]
    account_number: NotRequired[str]
    billing_address: NotRequired[BillingAddress1Dict]
    shipping_address: NotRequired[ShippingAddress1Dict]
