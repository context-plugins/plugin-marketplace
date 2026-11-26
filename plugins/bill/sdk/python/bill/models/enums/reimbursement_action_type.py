from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReimbursementActionType(str, Enum):
    """Enum representing the type of action to take on a reimbursement."""

    APPROVE = "APPROVE"
    DENY = "DENY"

    __str__ = str.__str__


ReimbursementActionTypeOrStr: TypeAlias = Annotated[
    ReimbursementActionType | str, open_enum_validator(ReimbursementActionType)
]
