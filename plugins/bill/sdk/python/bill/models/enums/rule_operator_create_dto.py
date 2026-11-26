from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RuleOperatorCreateDto(str, Enum):
    """Operators for approval rules."""

    LT = "lt"
    GTE = "gte"
    IN = "in"

    __str__ = str.__str__


RuleOperatorCreateDtoOrStr: TypeAlias = Annotated[
    RuleOperatorCreateDto | str, open_enum_validator(RuleOperatorCreateDto)
]
