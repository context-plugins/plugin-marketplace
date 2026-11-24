from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    """The current status of the item in the order."""

    PENDING = "pending"
    FOUND = "found"
    REPLACED = "replaced"
    REFUNDED = "refunded"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]
