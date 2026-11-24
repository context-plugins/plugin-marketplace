from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DeletedReasonType(str, Enum):
    """DeletedReasonType."""

    CANCELLED = "CANCELLED"
    LOST = "LOST"
    STOLEN = "STOLEN"
    MISPLACED = "MISPLACED"
    FRAUD_CONFIRMED = "FRAUD_CONFIRMED"
    SUPERSEDED_BY_NEW_ORDER = "SUPERSEDED_BY_NEW_ORDER"

    __str__ = str.__str__


DeletedReasonTypeOrStr: TypeAlias = Annotated[DeletedReasonType | str, open_enum_validator(DeletedReasonType)]
