from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Condition(str, Enum):
    EXCELLENT = "excellent"
    CLEAN = "clean"
    AVERAGE = "average"
    ROUGH = "rough"

    __str__ = str.__str__


ConditionOrStr: TypeAlias = Annotated[Condition | str, open_enum_validator(Condition)]
