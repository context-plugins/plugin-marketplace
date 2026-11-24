from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    """Current stage of the IPO"""

    OPEN = "open"
    CLOSED = "closed"
    LISTED = "listed"
    UPCOMING = "upcoming"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]
