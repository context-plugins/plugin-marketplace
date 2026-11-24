from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .additional_info_bill_v3_vendors_api import AdditionalInfoBillV3VendorsApi, AdditionalInfoBillV3VendorsApiDict
from .address4 import Address4, Address4Dict
from .auto_pay_bill_v3_vendors_api import AutoPayBillV3VendorsApi, AutoPayBillV3VendorsApiDict
from .enums.account_type_request import AccountTypeRequestOrStr
from .enums.currency_code import CurrencyCodeOrStr
from .payment_information2 import PaymentInformation2, PaymentInformation2Dict


class VendorRequestDto(SdkBaseModel):
    """Create a US vendor"""

    name: str
    """Vendor name"""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Vendor short name"""

    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    """User account number set by the vendor. Set this field as the billing statement account number for vendor services
    such as utility or credit card bills.

    When you pay the vendor, this value appears on the check memo or electronic payment record."""

    account_type: Optional[AccountTypeRequestOrStr] = Field(default=UNSET, alias="accountType")
    email: Optional[str] = UNSET
    """Vendor email address"""

    phone: Optional[str] = UNSET
    """Vendor phone number"""

    address: Address4
    payment_information: Optional[PaymentInformation2] = Field(default=UNSET, alias="paymentInformation")
    additional_info: Optional[AdditionalInfoBillV3VendorsApi] = Field(default=UNSET, alias="additionalInfo")
    bill_currency: Optional[CurrencyCodeOrStr] = Field(default=UNSET, alias="billCurrency")
    auto_pay: Optional[AutoPayBillV3VendorsApi] = Field(default=UNSET, alias="autoPay")


class VendorRequestDtoDict(TypedDict):
    name: str
    short_name: NotRequired[str]
    account_number: NotRequired[str]
    account_type: NotRequired[AccountTypeRequestOrStr]
    email: NotRequired[str]
    phone: NotRequired[str]
    address: Address4Dict
    payment_information: NotRequired[PaymentInformation2Dict]
    additional_info: NotRequired[AdditionalInfoBillV3VendorsApiDict]
    bill_currency: NotRequired[CurrencyCodeOrStr]
    auto_pay: NotRequired[AutoPayBillV3VendorsApiDict]
