from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReplacementStatus(str, Enum):
    """The customer's decision on the replacement, if one was suggested."""

    PENDING = "PENDING"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"

    __str__ = str.__str__


ReplacementStatusOrStr: TypeAlias = Annotated[ReplacementStatus | str, open_enum_validator(ReplacementStatus)]
