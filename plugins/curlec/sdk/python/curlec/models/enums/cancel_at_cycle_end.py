from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CancelAtCycleEnd(int, Enum):
    """1 = cancel at end of current cycle; 0 = cancel immediately."""

    VALUE_0 = 0
    VALUE_1 = 1

    __str__ = str.__str__


CancelAtCycleEndOrInt: TypeAlias = Annotated[CancelAtCycleEnd | int, open_enum_validator(CancelAtCycleEnd)]
