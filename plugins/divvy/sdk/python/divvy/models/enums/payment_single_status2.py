from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentSingleStatus2(str, Enum):
    """Unified payment status. This field provides BILL payment lifecycle updates based on the ``status`` and
    ``disbursementStatus`` values in the response.

    This field is set as ``PAID_OFFLINE`` for the Record AP payment operation."""

    DISBURSEMENT_FAILED_ACTION_NEEDED = "DISBURSEMENT_FAILED_ACTION_NEEDED"
    DISBURSEMENT_FAILED_VENDOR_BANK_REJECTED = "DISBURSEMENT_FAILED_VENDOR_BANK_REJECTED"
    FUNDING_FAILED_ACTION_NEEDED = "FUNDING_FAILED_ACTION_NEEDED"
    EXPIRING = "EXPIRING"
    FUNDS_ESCHEATED = "FUNDS_ESCHEATED"
    CANCELED = "CANCELED"
    FUNDING_FAILED_VOIDED = "FUNDING_FAILED_VOIDED"
    VOIDED = "VOIDED"
    CLEARED = "CLEARED"
    DELIVERED = "DELIVERED"
    DISBURSEMENT_ON_HOLD = "DISBURSEMENT_ON_HOLD"
    VOID_PENDING = "VOID_PENDING"
    SENT = "SENT"
    DISBURSEMENT_ON_HOLD_PAYER_IN_REVIEW = "DISBURSEMENT_ON_HOLD_PAYER_IN_REVIEW"
    PROCESSED = "PROCESSED"
    FUNDING_STARTED = "FUNDING_STARTED"
    FUNDING_ON_HOLD = "FUNDING_ON_HOLD"
    WAITING_ON_APPROVAL = "WAITING_ON_APPROVAL"
    SCHEDULED = "SCHEDULED"
    READY_TO_FUND = "READY_TO_FUND"
    CANCELLATION_IN_PROGRESS = "CANCELLATION_IN_PROGRESS"
    UNDEFINED = "UNDEFINED"
    PARTIALLY_CLAIMED = "PARTIALLY_CLAIMED"
    PAID_OFFLINE = "PAID_OFFLINE"

    __str__ = str.__str__


PaymentSingleStatus2OrStr: TypeAlias = Annotated[PaymentSingleStatus2 | str, open_enum_validator(PaymentSingleStatus2)]
