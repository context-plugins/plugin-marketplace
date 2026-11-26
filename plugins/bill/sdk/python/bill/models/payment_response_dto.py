from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .bill_payment import BillPayment, BillPaymentDict
from .disbursement_info1 import DisbursementInfo1, DisbursementInfo1Dict
from .enums.disbursement_status import DisbursementStatusOrStr
from .enums.disbursement_type import DisbursementTypeOrStr
from .enums.payment_single_status2_bill_v3_payments_api import PaymentSingleStatus2BillV3PaymentsApiOrStr
from .enums.payment_status import PaymentStatusOrStr
from .funding_account1 import FundingAccount1, FundingAccount1Dict
from .payment_purpose1 import PaymentPurpose1, PaymentPurpose1Dict
from .processing_options1 import ProcessingOptions1, ProcessingOptions1Dict
from .void_info import VoidInfo, VoidInfoDict


class PaymentResponseDto(SdkBaseModel):
    """Payments response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the payment. The value begins with ``stp``."""

    vendor_id: Optional[str] = Field(default=UNSET, alias="vendorId")
    """BILL-generated ID of the vendor to be paid. The value begins with ``009``."""

    vendor_name: Optional[str] = Field(default=UNSET, alias="vendorName")
    """Vendor name"""

    bill_id: Optional[str] = Field(default=UNSET, alias="billId")
    """BILL-generated ID of the bill to be paid. The value begins with ``00n``."""

    bill_payments: Optional[list[BillPayment]] = Field(default=UNSET, alias="billPayments")
    """List of bill payments. When a payment is applied to a bill, the bill payment is identified by a bill payment
    ``id``. The value begins with ``blp``."""

    description: Optional[str] = UNSET
    """Bill payment description. This value is included in the check memo or in the bank descriptor for electronic
    payments."""

    process_date: Optional[Date] = Field(default=UNSET, alias="processDate")
    """Payment process date in the ``yyyy-MM-dd`` format. On this date, BILL starts processing the payment and starts
    withdrawing funds from the sender's funding account."""

    funding_account: Optional[FundingAccount1] = Field(default=UNSET, alias="fundingAccount")
    amount: float
    """Payment amount. For a payment in an international currency (not USD), this value is in the local currency."""

    processing_options: Optional[ProcessingOptions1] = Field(default=UNSET, alias="processingOptions")
    transaction_number: Optional[str] = Field(default=UNSET, alias="transactionNumber")
    """Payment transaction reference used as an external identifier.

    You can set this field as a unique alphanumeric value for your system to track the payment transaction. The value
    must be 50 characters or fewer. If you do not set ``transactionNumber``, BILL sets this field as a unique
    alphanumeric payment identification value."""

    confirmation_number: Optional[str] = Field(default=UNSET, alias="confirmationNumber")
    """BILL-generated bill payment confirmation value"""

    status: Optional[PaymentStatusOrStr] = UNSET
    exchange_rate: Optional[float] = Field(default=UNSET, alias="exchangeRate")
    """Exchange rate for the payment in an international currency (not USD)"""

    funding_amount: Optional[float] = Field(default=UNSET, alias="fundingAmount")
    """Payment amount in USD"""

    online_payment: Optional[bool] = Field(default=UNSET, alias="onlinePayment")
    """Payment source.
    * ``true``: Payment is made with BILL (online)
    * ``false``: Payment is made outside BILL and then recorded in BILL (offline)"""

    disbursement_type: Optional[DisbursementTypeOrStr] = Field(default=UNSET, alias="disbursementType")
    remittance_email: Optional[str] = Field(default=UNSET, alias="remittanceEmail")
    """Remittance email address set for the vendor"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Payment created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Payment updated date and time"""

    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    """BILL-generated ID of the user that created the payment. The value begins with ``006``."""

    void_info: Optional[list[VoidInfo]] = Field(default=UNSET, alias="voidInfo")
    """Void request information"""

    disbursement_status: Optional[DisbursementStatusOrStr] = Field(default=UNSET, alias="disbursementStatus")
    disbursement_info: Optional[DisbursementInfo1] = Field(default=UNSET, alias="disbursementInfo")
    payment_purpose: Optional[PaymentPurpose1] = Field(default=UNSET, alias="paymentPurpose")
    card_funding_purpose: Optional[str] = Field(default=UNSET, alias="cardFundingPurpose")
    """Card funding purpose"""

    cancel_request_submitted: Optional[bool] = Field(default=UNSET, alias="cancelRequestSubmitted")
    """This field is set as ``true`` if a cancel payment request is submitted.

    **Note**: If the payment is cancelled, the payment ``status`` is set as ``CANCELLED``."""

    single_status: Optional[PaymentSingleStatus2BillV3PaymentsApiOrStr] = Field(default=UNSET, alias="singleStatus")


class PaymentResponseDtoDict(TypedDict):
    id: NotRequired[str]
    vendor_id: NotRequired[str]
    vendor_name: NotRequired[str]
    bill_id: NotRequired[str]
    bill_payments: NotRequired[list[BillPaymentDict]]
    description: NotRequired[str]
    process_date: NotRequired[Date]
    funding_account: NotRequired[FundingAccount1Dict]
    amount: float
    processing_options: NotRequired[ProcessingOptions1Dict]
    transaction_number: NotRequired[str]
    confirmation_number: NotRequired[str]
    status: NotRequired[PaymentStatusOrStr]
    exchange_rate: NotRequired[float]
    funding_amount: NotRequired[float]
    online_payment: NotRequired[bool]
    disbursement_type: NotRequired[DisbursementTypeOrStr]
    remittance_email: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    created_by: NotRequired[str]
    void_info: NotRequired[list[VoidInfoDict]]
    disbursement_status: NotRequired[DisbursementStatusOrStr]
    disbursement_info: NotRequired[DisbursementInfo1Dict]
    payment_purpose: NotRequired[PaymentPurpose1Dict]
    card_funding_purpose: NotRequired[str]
    cancel_request_submitted: NotRequired[bool]
    single_status: NotRequired[PaymentSingleStatus2BillV3PaymentsApiOrStr]
