from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status3(str, Enum):
    """``degraded`` when a board is past the age bound (``stale_boards``) or cannot be served (``missing_boards``).
    Still HTTP 200."""

    OK = "ok"
    DEGRADED = "degraded"

    __str__ = str.__str__


Status3OrStr: TypeAlias = Annotated[Status3 | str, open_enum_validator(Status3)]
