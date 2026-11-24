from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    """Status of the order."""

    NEW = "new"
    PROCESSING = "processing"
    COMPLETE = "complete"
    REFUNDED = "refunded"
    CANCELED = "canceled"
    UNKNOWN = "unknown"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]
