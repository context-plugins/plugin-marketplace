from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PurchaseApprovalStatus(str, Enum):
    """Approval state for purchases of this commitment type. Approve or pause on the Planned Purchases tab in the DoiT
    Console. Absent or unrecognized stored values are returned as ``pending_approval``, except on autonomous
    automation-mode lines, where they are returned as ``approved`` since no customer approval is required."""

    PENDING_APPROVAL = "pending_approval"
    APPROVED = "approved"
    PAUSED = "paused"

    __str__ = str.__str__


PurchaseApprovalStatusOrStr: TypeAlias = Annotated[
    PurchaseApprovalStatus | str, open_enum_validator(PurchaseApprovalStatus)
]
