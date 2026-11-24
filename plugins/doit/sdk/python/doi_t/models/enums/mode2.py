from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode2(str, Enum):
    """Time range mode (last N periods, current period, or custom)."""

    LAST = "last"
    CURRENT = "current"
    CUSTOM = "custom"

    __str__ = str.__str__


Mode2OrStr: TypeAlias = Annotated[Mode2 | str, open_enum_validator(Mode2)]
