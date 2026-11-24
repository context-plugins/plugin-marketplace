from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SeatAssignmentStatus(str, Enum):
    ASSIGNED = "assigned"
    UNASSIGNED = "unassigned"

    __str__ = str.__str__


SeatAssignmentStatusOrStr: TypeAlias = Annotated[SeatAssignmentStatus | str, open_enum_validator(SeatAssignmentStatus)]
