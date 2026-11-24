from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillApprovalStatusResponse(str, Enum):
    """Approval status of a bill response."""

    UNASSIGNED = "UNASSIGNED"
    ASSIGNED = "ASSIGNED"
    APPROVED = "APPROVED"
    APPROVING = "APPROVING"
    DENIED = "DENIED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


BillApprovalStatusResponseOrStr: TypeAlias = Annotated[
    BillApprovalStatusResponse | str, open_enum_validator(BillApprovalStatusResponse)
]
