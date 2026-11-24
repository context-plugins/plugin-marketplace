from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Priority(str, Enum):
    """Priority of the alert."""

    P1 = "P1"
    P2 = "P2"
    P3 = "P3"
    P4 = "P4"
    P5 = "P5"

    __str__ = str.__str__


PriorityOrStr: TypeAlias = Annotated[Priority | str, open_enum_validator(Priority)]
