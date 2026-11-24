from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi(str, Enum):
    """Customer commitment approval state for this scope. Absent or unrecognized stored values (including ``REJECTED``)
    are returned as ``pending_approval``, except on autonomous automation-mode lines, where they are returned as
    ``approved`` since no customer approval is required."""

    PENDING_APPROVAL = "pending_approval"
    APPROVED = "approved"
    PAUSED = "paused"

    __str__ = str.__str__


PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApiOrStr: TypeAlias = Annotated[
    PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi | str,
    open_enum_validator(PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi),
]
