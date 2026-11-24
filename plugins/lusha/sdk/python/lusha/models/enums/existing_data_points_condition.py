from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExistingDataPointsCondition(str, Enum):
    """Pairs with ``existingDataPoints``."""

    OR = "or"
    AND = "and"

    __str__ = str.__str__


ExistingDataPointsConditionOrStr: TypeAlias = Annotated[
    ExistingDataPointsCondition | str, open_enum_validator(ExistingDataPointsCondition)
]
