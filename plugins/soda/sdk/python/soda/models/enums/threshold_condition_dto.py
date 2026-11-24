from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ThresholdConditionDto(str, Enum):
    GREATER_THAN = "greaterThan"
    LESS_THAN = "lessThan"

    __str__ = str.__str__


ThresholdConditionDtoOrStr: TypeAlias = Annotated[
    ThresholdConditionDto | str, open_enum_validator(ThresholdConditionDto)
]
