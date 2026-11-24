from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .balance import Balance, BalanceDict
from .billing_address import BillingAddress, BillingAddressDict
from .contact import Contact, ContactDict
from .enums.currency_code import CurrencyCodeOrStr
from .enums.customer_account_type_response import CustomerAccountTypeResponseOrStr
from .shipping_address import ShippingAddress, ShippingAddressDict


class CustomerResponseDto(SdkBaseModel):
    """Customers response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the customer is archived."""

    name: str
    """Customer name"""

    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    """Customer company name. This field is overridden when you connect with a customer in the BILL network."""

    contact: Optional[Contact] = UNSET
    email: str
    """Customer email address"""

    phone: Optional[str] = UNSET
    """Customer phone number. This field is overridden when you connect with a customer in the BILL network."""

    fax: Optional[str] = UNSET
    """Customer fax number"""

    description: Optional[str] = UNSET
    """Customer description"""

    invoice_currency: Optional[CurrencyCodeOrStr] = Field(default=UNSET, alias="invoiceCurrency")
    account_type: Optional[CustomerAccountTypeResponseOrStr] = Field(default=UNSET, alias="accountType")
    payment_term_id: Optional[str] = Field(default=UNSET, alias="paymentTermId")
    """BILL-generated ID of the payment term. Use payment terms to set the number of days the customer has to clear an
    invoice."""

    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    """Customer account number. The number appears in customer invoices."""

    billing_address: Optional[BillingAddress] = Field(default=UNSET, alias="billingAddress")
    shipping_address: Optional[ShippingAddress] = Field(default=UNSET, alias="shippingAddress")
    balance: Optional[Balance] = UNSET
    has_bank_account: Optional[bool] = Field(default=UNSET, alias="hasBankAccount")
    """Set as ``true`` if the customer bank account is added"""

    authorized_to_charge: Optional[bool] = Field(default=UNSET, alias="authorizedToCharge")
    """Set as ``true`` if your organization is authorized to charge the customer for invoices"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class CustomerResponseDtoDict(TypedDict):
    id: NotRequired[str]
    archived: NotRequired[bool]
    name: str
    company_name: NotRequired[str]
    contact: NotRequired[ContactDict]
    email: str
    phone: NotRequired[str]
    fax: NotRequired[str]
    description: NotRequired[str]
    invoice_currency: NotRequired[CurrencyCodeOrStr]
    account_type: NotRequired[CustomerAccountTypeResponseOrStr]
    payment_term_id: NotRequired[str]
    account_number: NotRequired[str]
    billing_address: NotRequired[BillingAddressDict]
    shipping_address: NotRequired[ShippingAddressDict]
    balance: NotRequired[BalanceDict]
    has_bank_account: NotRequired[bool]
    authorized_to_charge: NotRequired[bool]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
