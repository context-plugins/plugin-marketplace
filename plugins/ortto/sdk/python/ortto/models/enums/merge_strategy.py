from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MergeStrategy(int, Enum):
    """1 = append only, 2 = overwrite existing, 3 = ignore."""

    VALUE_1 = 1
    VALUE_2 = 2
    VALUE_3 = 3

    __str__ = str.__str__


MergeStrategyOrInt: TypeAlias = Annotated[MergeStrategy | int, open_enum_validator(MergeStrategy)]
