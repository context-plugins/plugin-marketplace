from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RenewalStatus1(str, Enum):
    """Filter by certificate renewal status."""

    PENDING_AUTO_RENEWAL = "PENDING_AUTO_RENEWAL"
    PENDING_VALIDATION = "PENDING_VALIDATION"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

    __str__ = str.__str__


RenewalStatus1OrStr: TypeAlias = Annotated[RenewalStatus1 | str, open_enum_validator(RenewalStatus1)]
