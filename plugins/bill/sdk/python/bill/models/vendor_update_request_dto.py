from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .additional_info_bill_v3_vendors_api import AdditionalInfoBillV3VendorsApi, AdditionalInfoBillV3VendorsApiDict
from .address1 import Address1, Address1Dict
from .auto_pay_bill_v3_vendors_api import AutoPayBillV3VendorsApi, AutoPayBillV3VendorsApiDict
from .enums.account_type_request import AccountTypeRequestOrStr
from .enums.currency_code import CurrencyCodeOrStr
from .payment_information_bill_v3_vendors_api import (
    PaymentInformationBillV3VendorsApi,
    PaymentInformationBillV3VendorsApiDict,
)


class VendorUpdateRequestDto(SdkBaseModel):
    """Update a vendor"""

    name: Optional[str] = UNSET
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

    address: Optional[Address1] = UNSET
    payment_information: Optional[PaymentInformationBillV3VendorsApi] = Field(default=UNSET, alias="paymentInformation")
    additional_info: Optional[AdditionalInfoBillV3VendorsApi] = Field(default=UNSET, alias="additionalInfo")
    bill_currency: Optional[CurrencyCodeOrStr] = Field(default=UNSET, alias="billCurrency")
    auto_pay: Optional[AutoPayBillV3VendorsApi] = Field(default=UNSET, alias="autoPay")


class VendorUpdateRequestDtoDict(TypedDict):
    name: NotRequired[str]
    short_name: NotRequired[str]
    account_number: NotRequired[str]
    account_type: NotRequired[AccountTypeRequestOrStr]
    email: NotRequired[str]
    phone: NotRequired[str]
    address: NotRequired[Address1Dict]
    payment_information: NotRequired[PaymentInformationBillV3VendorsApiDict]
    additional_info: NotRequired[AdditionalInfoBillV3VendorsApiDict]
    bill_currency: NotRequired[CurrencyCodeOrStr]
    auto_pay: NotRequired[AutoPayBillV3VendorsApiDict]
