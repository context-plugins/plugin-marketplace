from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Priority(str, Enum):
    TRIVIAL = "trivial"
    MINOR = "minor"
    MAJOR = "major"
    CRITICAL = "critical"
    BLOCKER = "blocker"

    __str__ = str.__str__


PriorityOrStr: TypeAlias = Annotated[Priority | str, open_enum_validator(Priority)]
