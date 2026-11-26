from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReimbursementStatus(str, Enum):
    """Enum representing the status for a reimbursement in the Spend API."""

    CREATED = "CREATED"
    AWAITING_APPROVAL = "AWAITING_APPROVAL"
    AWAITING_TIER2_APPROVAL = "AWAITING_TIER2_APPROVAL"
    TIER2_APPROVAL_UNDONE = "TIER2_APPROVAL_UNDONE"
    APPROVAL_UNDONE = "APPROVAL_UNDONE"
    DENIAL_UNDONE = "DENIAL_UNDONE"
    APPROVED = "APPROVED"
    CANCEL_PAYMENT = "CANCEL_PAYMENT"
    PAID = "PAID"
    PAYMENT_FAILED = "PAYMENT_FAILED"
    DENIED = "DENIED"
    DELETED = "DELETED"
    ARCHIVED = "ARCHIVED"
    BUDGET_APPROVAL = "BUDGET_APPROVAL"
    ADMIN_APPROVAL = "ADMIN_APPROVAL"
    READY_TO_PAY = "READY_TO_PAY"
    PAYMENT_PENDING = "PAYMENT_PENDING"

    __str__ = str.__str__


ReimbursementStatusOrStr: TypeAlias = Annotated[ReimbursementStatus | str, open_enum_validator(ReimbursementStatus)]
