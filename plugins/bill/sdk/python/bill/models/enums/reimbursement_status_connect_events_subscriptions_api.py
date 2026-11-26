from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReimbursementStatusConnectEventsSubscriptionsApi(str, Enum):
    """Enum for reimbursement status."""

    UNSPECIFIED = "UNSPECIFIED"
    CREATED = "CREATED"
    AWAITING_APPROVAL = "AWAITING_APPROVAL"
    APPROVAL_UNDONE = "APPROVAL_UNDONE"
    AWAITING_TIER2_APPROVAL = "AWAITING_TIER2_APPROVAL"
    TIER2_APPROVAL_UNDONE = "TIER2_APPROVAL_UNDONE"
    APPROVED = "APPROVED"
    CANCEL_PAYMENT = "CANCEL_PAYMENT"
    FUNDING_RECEIVED = "FUNDING_RECEIVED"
    PAID = "PAID"
    PAYMENT_FAILED = "PAYMENT_FAILED"
    DENIED = "DENIED"
    DENIAL_UNDONE = "DENIAL_UNDONE"
    DELETED = "DELETED"

    __str__ = str.__str__


ReimbursementStatusConnectEventsSubscriptionsApiOrStr: TypeAlias = Annotated[
    ReimbursementStatusConnectEventsSubscriptionsApi | str,
    open_enum_validator(ReimbursementStatusConnectEventsSubscriptionsApi),
]
