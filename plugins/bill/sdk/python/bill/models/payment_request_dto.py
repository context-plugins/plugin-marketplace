from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .funding_account import FundingAccount, FundingAccountDict
from .payment_purpose import PaymentPurpose, PaymentPurposeDict
from .payment_vendor_credit_request_dto import PaymentVendorCreditRequestDto, PaymentVendorCreditRequestDtoDict
from .processing_options_bill_v3_payments_api import (
    ProcessingOptionsBillV3PaymentsApi,
    ProcessingOptionsBillV3PaymentsApiDict,
)


class PaymentRequestDto(SdkBaseModel):
    """Create a payment"""

    vendor_id: Optional[str] = Field(default=UNSET, alias="vendorId")
    """BILL-generated ID of the vendor to be paid. The value begins with ``009``.
    * If ``vendorId`` is set, it must match your bill’s vendor ID.
    * If ``vendorId`` is not set, the bill’s ``vendorId`` is automatically set."""

    bill_id: Optional[str] = Field(default=UNSET, alias="billId")
    """BILL-generated ID of the bill to be paid. The value begins with ``00n``. If ``createBill`` is ``true``, do not
    set ``billId`` in your payment request."""

    description: Optional[str] = UNSET
    """Bill payment description. This value is included in the check memo or in the bank descriptor for electronic
    payments."""

    process_date: Optional[Date] = Field(default=UNSET, alias="processDate")
    """Payment process date in the ``yyyy-MM-dd`` format. On this date, BILL starts processing the payment and starts
    withdrawing funds from the sender's funding account.

    If the funding account ``type`` is set as ``WALLET`` or ``AP_CARD``, ``processDate`` is required. For other funding
    account types, if ``processDate`` is not set, the date is automatically set as the next US business day.

    **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
    complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that is 2
    business days from the current date."""

    exchange_rate_batch_id: Optional[int] = Field(default=UNSET, alias="exchangeRateBatchId")
    """Exchange rate batch ID. This field is required for paying international vendors when the vendor bill currency is
    not ``USD``.

    Get the current BILL exchange rate and exchange rate batch ID with ``GET /v3/payments/exchange-rate``."""

    funding_account: FundingAccount = Field(alias="fundingAccount")
    amount: float
    """Payment amount. For a payment in an international currency (not USD), this value is in the local currency.

    **Note**: You cannot overpay a bill."""

    processing_options: ProcessingOptionsBillV3PaymentsApi = Field(alias="processingOptions")
    payment_purpose: Optional[PaymentPurpose] = Field(default=UNSET, alias="paymentPurpose")
    transaction_number: Optional[str] = Field(default=UNSET, alias="transactionNumber")
    """Payment transaction reference used as an external identifier.

    You can set this field as a unique alphanumeric value for your system to track the payment transaction. The value
    must be 50 characters or fewer. If you do not set ``transactionNumber``, BILL sets this field as a unique
    alphanumeric payment identification value."""

    card_funding_purpose: Optional[str] = Field(default=UNSET, alias="cardFundingPurpose")
    """Card funding purpose. This field is required for the ``CARD_ACCOUNT`` funding account ``type`` if BILL cannot
    identify the vendor industry.

    See `Get card funding purpose <https://developer.bill.com/reference/listcardfundingpurposes>`__ for more
    information."""

    vendor_credits: Optional[list[PaymentVendorCreditRequestDto]] = Field(default=UNSET, alias="vendorCredits")
    """Vendor credits applied to the bill payment. To edit the vendor credit amount applied to the bill, set the same
    vendor credit ``id`` in your payment request. To apply an additional vendor credit to the bill, set the new vendor
    credit ``id`` in your payment request."""


class PaymentRequestDtoDict(TypedDict):
    vendor_id: NotRequired[str]
    bill_id: NotRequired[str]
    description: NotRequired[str]
    process_date: NotRequired[Date]
    exchange_rate_batch_id: NotRequired[int]
    funding_account: FundingAccountDict
    amount: float
    processing_options: ProcessingOptionsBillV3PaymentsApiDict
    payment_purpose: NotRequired[PaymentPurposeDict]
    transaction_number: NotRequired[str]
    card_funding_purpose: NotRequired[str]
    vendor_credits: NotRequired[list[PaymentVendorCreditRequestDtoDict]]
