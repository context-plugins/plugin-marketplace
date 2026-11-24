from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReimbursementType(str, Enum):
    """Enum representing the type for a reimbursement in the Spend API."""

    PURCHASE = "PURCHASE"
    MILEAGE = "MILEAGE"

    __str__ = str.__str__


ReimbursementTypeOrStr: TypeAlias = Annotated[ReimbursementType | str, open_enum_validator(ReimbursementType)]
