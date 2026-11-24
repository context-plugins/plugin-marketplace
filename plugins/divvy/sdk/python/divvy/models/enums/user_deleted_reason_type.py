from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UserDeletedReasonType(str, Enum):
    """Delete card reason"""

    CANCELLED = "CANCELLED"
    LOST = "LOST"
    STOLEN = "STOLEN"
    MISPLACED = "MISPLACED"

    __str__ = str.__str__


UserDeletedReasonTypeOrStr: TypeAlias = Annotated[
    UserDeletedReasonType | str, open_enum_validator(UserDeletedReasonType)
]
