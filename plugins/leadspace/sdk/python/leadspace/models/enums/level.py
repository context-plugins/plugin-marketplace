from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Level(str, Enum):
    C_LEVEL = "C Level"
    BOARD_LEVEL = "Board Level"
    VP_LEVEL = "VP Level"
    DIRECTOR_LEVEL = "Director Level"
    MANAGER_LEVEL = "Manager Level"
    STAFF_LEVEL = "Staff Level"

    __str__ = str.__str__


LevelOrStr: TypeAlias = Annotated[Level | str, open_enum_validator(Level)]
