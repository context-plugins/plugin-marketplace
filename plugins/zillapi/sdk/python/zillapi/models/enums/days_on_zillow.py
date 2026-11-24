from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DaysOnZillow(str, Enum):
    _1 = "1"
    _7 = "7"
    _14 = "14"
    _30 = "30"
    _90 = "90"
    _6M = "6m"
    _12M = "12m"
    _24M = "24m"
    _36M = "36m"

    __str__ = str.__str__


DaysOnZillowOrStr: TypeAlias = Annotated[DaysOnZillow | str, open_enum_validator(DaysOnZillow)]
