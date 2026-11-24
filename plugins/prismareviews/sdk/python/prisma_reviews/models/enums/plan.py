from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Plan(str, Enum):
    SPARK = "spark"
    BEAM = "beam"
    SPECTRUM = "spectrum"
    AURORA = "aurora"
    CUSTOM = "custom"

    __str__ = str.__str__


PlanOrStr: TypeAlias = Annotated[Plan | str, open_enum_validator(Plan)]
