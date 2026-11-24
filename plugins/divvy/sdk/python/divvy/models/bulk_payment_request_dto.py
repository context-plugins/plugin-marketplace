from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .bill_pay import BillPay, BillPayDict
from .funding_account import FundingAccount, FundingAccountDict
from .processing_options2 import ProcessingOptions2, ProcessingOptions2Dict


class BulkPaymentRequestDto(SdkBaseModel):
    """Create a bulk payment"""

    vendor_id: Optional[str] = Field(default=UNSET, alias="vendorId")
    """BILL-generated ID of the vendor to be paid. The value begins with ``009``.
    * If ``vendorId`` is set, it must match each bill’s vendor ID.
    * Do not set ``vendorId`` when you are paying multiple vendors with one request."""

    description: Optional[str] = UNSET
    """Bill payment description. This value is included in the check memo or in the bank descriptor for electronic
    payments."""

    process_date: Optional[Date] = Field(default=UNSET, alias="processDate")
    """Payment process date in the ``yyyy-MM-dd`` format. On this date, BILL starts processing the payment and starts
    withdrawing funds from the sender's funding account.

    When the vendor bill currency is not ``USD`` (For example, ``EUR``), the payment ``processDate`` for this vendor
    must be the next US business day.

    If the funding account ``type`` is set as ``WALLET`` or ``AP_CARD``, ``processDate`` is required. For other funding
    account types, if ``processDate`` is not set, the date is automatically set as the next US business day.

    **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
    complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that is 2
    business days from the current date."""

    exchange_rate_batch_id: Optional[int] = Field(default=UNSET, alias="exchangeRateBatchId")
    """Exchange rate batch ID. This field is required for paying international vendors when the vendor bill currency is
    not ``USD``.

    Get the current BILL exchange rate and exchange rate batch ID with ``GET /v3/payments/exchange-rate`` or ``POST
    /v3/payments/exchange-rate`` (for multiple international vendors)."""

    funding_account: FundingAccount = Field(alias="fundingAccount")
    payments: Optional[list[BillPay]] = UNSET
    processing_options: Optional[ProcessingOptions2] = Field(default=UNSET, alias="processingOptions")
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


class BulkPaymentRequestDtoDict(TypedDict):
    vendor_id: NotRequired[str]
    description: NotRequired[str]
    process_date: NotRequired[Date]
    exchange_rate_batch_id: NotRequired[int]
    funding_account: FundingAccountDict
    payments: NotRequired[list[BillPayDict]]
    processing_options: NotRequired[ProcessingOptions2Dict]
    transaction_number: NotRequired[str]
    card_funding_purpose: NotRequired[str]
