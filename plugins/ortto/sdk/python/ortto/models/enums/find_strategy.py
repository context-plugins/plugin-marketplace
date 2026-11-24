from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FindStrategy(int, Enum):
    """0 = any, 1 = sequential, 2 = all."""

    VALUE_0 = 0
    VALUE_1 = 1
    VALUE_2 = 2

    __str__ = str.__str__


FindStrategyOrInt: TypeAlias = Annotated[FindStrategy | int, open_enum_validator(FindStrategy)]
