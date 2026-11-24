from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .classifications import Classifications, ClassificationsDict
from .enums.disbursement_status import DisbursementStatusOrStr
from .enums.disbursement_type import DisbursementTypeOrStr
from .enums.payment_single_status2 import PaymentSingleStatus2OrStr
from .enums.payment_status import PaymentStatusOrStr
from .record_bill_pay_response_dto import RecordBillPayResponseDto, RecordBillPayResponseDtoDict


class RecordPaymentResponseDto(SdkBaseModel):
    """Record offline payment response dto."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the payment. The value begins with ``stp``."""

    vendor_id: Optional[str] = Field(default=UNSET, alias="vendorId")
    """BILL-generated ID of the vendor. The value begins with ``009``."""

    bill_id: Optional[str] = Field(default=UNSET, alias="billId")
    """BILL-generated ID of the bill. The value begins with ``00n``."""

    bill_payments: Optional[list[RecordBillPayResponseDto]] = Field(default=UNSET, alias="billPayments")
    """List of bill payments"""

    description: Optional[str] = UNSET
    """Payment description"""

    process_date: Optional[Date] = Field(default=UNSET, alias="processDate")
    """Payment process date. The value is in the ``yyyy-MM-dd`` format."""

    amount: Optional[float] = UNSET
    """Payment amount. For a payment in an international currency (not USD), this value is in the local currency."""

    transaction_number: Optional[str] = Field(default=UNSET, alias="transactionNumber")
    """BILL-generated alphanumeric payment identification value"""

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
    * ``false``: Payment is made outside BILL and then recorded in BILL (offline)

    This field is set as ``false`` for the Record AP payment operation."""

    disbursement_type: Optional[DisbursementTypeOrStr] = Field(default=UNSET, alias="disbursementType")
    remittance_email: Optional[str] = Field(default=UNSET, alias="remittanceEmail")
    """Remittance email address set for the vendor"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Payment created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Payment updated date and time"""

    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    """BILL-generated ID of the user that created the payment. The value begins with ``006``."""

    disbursement_status: Optional[DisbursementStatusOrStr] = Field(default=UNSET, alias="disbursementStatus")
    single_status: Optional[PaymentSingleStatus2OrStr] = Field(default=UNSET, alias="singleStatus")
    to_print_check: Optional[bool] = Field(default=UNSET, alias="toPrintCheck")
    """Set as ``true`` to set the payment check as printable in your accounting system. Use this field only for check
    payments."""

    classifications: Optional[Classifications] = UNSET
    sync_reference: Optional[str] = Field(default=UNSET, alias="syncReference")
    """Payment reference ID in your accounting system. Set this field with payment information, such as check number."""

    allow_export: Optional[bool] = Field(default=UNSET, alias="allowExport")
    """Set as ``true`` to sync the bill payment with your accounting system"""


class RecordPaymentResponseDtoDict(TypedDict):
    id: NotRequired[str]
    vendor_id: NotRequired[str]
    bill_id: NotRequired[str]
    bill_payments: NotRequired[list[RecordBillPayResponseDtoDict]]
    description: NotRequired[str]
    process_date: NotRequired[Date]
    amount: NotRequired[float]
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
    disbursement_status: NotRequired[DisbursementStatusOrStr]
    single_status: NotRequired[PaymentSingleStatus2OrStr]
    to_print_check: NotRequired[bool]
    classifications: NotRequired[ClassificationsDict]
    sync_reference: NotRequired[str]
    allow_export: NotRequired[bool]
