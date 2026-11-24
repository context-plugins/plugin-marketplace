from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind3(str, Enum):
    """Kind of source to evict: ``task``, ``monitor``, or ``findall``."""

    TASK = "task"
    MONITOR = "monitor"
    FINDALL = "findall"

    __str__ = str.__str__


Kind3OrStr: TypeAlias = Annotated[Kind3 | str, open_enum_validator(Kind3)]
