from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VoidStatus(str, Enum):
    """Void status enum."""

    TO_BE_PROCESSED = "TO_BE_PROCESSED"
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    NO_OP = "NO_OP"
    ARCHIVED = "ARCHIVED"

    __str__ = str.__str__


VoidStatusOrStr: TypeAlias = Annotated[VoidStatus | str, open_enum_validator(VoidStatus)]
