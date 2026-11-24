from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Optimize(str, Enum):
    """Indicates whether the metric is optimized for increase or decreasae"""

    INCREASE = "increase"
    DECREASE = "decrease"

    __str__ = str.__str__


OptimizeOrStr: TypeAlias = Annotated[Optimize | str, open_enum_validator(Optimize)]
