from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DedicationType(str, Enum):
    IN_MEMORY_OF = "in_memory_of"
    IN_HONOR_OF = "in_honor_of"

    __str__ = str.__str__


DedicationTypeOrStr: TypeAlias = Annotated[DedicationType | str, open_enum_validator(DedicationType)]
