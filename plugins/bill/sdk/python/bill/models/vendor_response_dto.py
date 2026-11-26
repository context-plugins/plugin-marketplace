from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .additional_info1 import AdditionalInfo1, AdditionalInfo1Dict
from .address2 import Address2, Address2Dict
from .auto_pay_bill_v3_vendors_api import AutoPayBillV3VendorsApi, AutoPayBillV3VendorsApiDict
from .balance2 import Balance2, Balance2Dict
from .enums.account_type_response import AccountTypeResponseOrStr
from .enums.currency_code import CurrencyCodeOrStr
from .enums.network_invitation_status import NetworkInvitationStatusOrStr
from .enums.vendor_bank_account_status_response import VendorBankAccountStatusResponseOrStr
from .payment_information1 import PaymentInformation1, PaymentInformation1Dict


class VendorResponseDto(SdkBaseModel):
    """Vendors response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the vendor. The value begins with ``009``."""

    archived: bool
    """Set as ``true`` if the vendor is archived"""

    name: Optional[str] = UNSET
    """Vendor name"""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Vendor short name"""

    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    """User account number set by the vendor.

    When you pay the vendor, this value appears on the check memo or electronic payment record."""

    account_type: Optional[AccountTypeResponseOrStr] = Field(default=UNSET, alias="accountType")
    email: Optional[str] = UNSET
    """Vendor email address"""

    phone: Optional[str] = UNSET
    """Vendor phone number. This field is overridden when you connect with a vendor in the BILL network."""

    address: Optional[Address2] = UNSET
    payment_information: Optional[PaymentInformation1] = Field(default=UNSET, alias="paymentInformation")
    additional_info: Optional[AdditionalInfo1] = Field(default=UNSET, alias="additionalInfo")
    rpps_id: Optional[str] = Field(default=UNSET, alias="rppsId")
    """BILL-generated ID of the verified national vendor (if the vendor is a verified national vendor)"""

    bank_account_status: Optional[VendorBankAccountStatusResponseOrStr] = Field(
        default=UNSET, alias="bankAccountStatus"
    )
    recurring_payments: Optional[bool] = Field(default=UNSET, alias="recurringPayments")
    """Set as ``true`` if the vendor has recurring payments enabled"""

    bill_currency: Optional[CurrencyCodeOrStr] = Field(default=UNSET, alias="billCurrency")
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""

    balance: Optional[Balance2] = UNSET
    auto_pay: Optional[AutoPayBillV3VendorsApi] = Field(default=UNSET, alias="autoPay")
    network_status: Optional[NetworkInvitationStatusOrStr] = Field(default=UNSET, alias="networkStatus")
    payment_network_id: Optional[str] = Field(default=UNSET, alias="paymentNetworkId")
    """Vendor Payment Network ID (PNI). Each vendor with a BILL account is assigned a unique PNI."""

    relevance_score: Optional[float] = Field(default=UNSET, alias="relevanceScore")
    """Relevance score from the fuzzy name search that matched this vendor. This field appears in the response only for
    vendors matched by an ``fz`` filter on ``name``.

    Scores are comparable only among the results of a single search. Do not compare them across searches or against a
    fixed threshold."""


class VendorResponseDtoDict(TypedDict):
    id: NotRequired[str]
    archived: bool
    name: NotRequired[str]
    short_name: NotRequired[str]
    account_number: NotRequired[str]
    account_type: NotRequired[AccountTypeResponseOrStr]
    email: NotRequired[str]
    phone: NotRequired[str]
    address: NotRequired[Address2Dict]
    payment_information: NotRequired[PaymentInformation1Dict]
    additional_info: NotRequired[AdditionalInfo1Dict]
    rpps_id: NotRequired[str]
    bank_account_status: NotRequired[VendorBankAccountStatusResponseOrStr]
    recurring_payments: NotRequired[bool]
    bill_currency: NotRequired[CurrencyCodeOrStr]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    balance: NotRequired[Balance2Dict]
    auto_pay: NotRequired[AutoPayBillV3VendorsApiDict]
    network_status: NotRequired[NetworkInvitationStatusOrStr]
    payment_network_id: NotRequired[str]
    relevance_score: NotRequired[float]
