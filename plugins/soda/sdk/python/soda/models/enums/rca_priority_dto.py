from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RcaPriorityDto(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    URGENT = "urgent"

    __str__ = str.__str__


RcaPriorityDtoOrStr: TypeAlias = Annotated[RcaPriorityDto | str, open_enum_validator(RcaPriorityDto)]
