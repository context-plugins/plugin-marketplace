from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GraduationStrategy(str, Enum):
    MANUAL = "MANUAL"
    SS_PERFORMANCE = "SS_PERFORMANCE"

    __str__ = str.__str__


GraduationStrategyOrStr: TypeAlias = Annotated[GraduationStrategy | str, open_enum_validator(GraduationStrategy)]
