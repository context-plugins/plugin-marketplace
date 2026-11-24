from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TechnologiesCondition(str, Enum):
    OR = "or"
    AND = "and"

    __str__ = str.__str__


TechnologiesConditionOrStr: TypeAlias = Annotated[
    TechnologiesCondition | str, open_enum_validator(TechnologiesCondition)
]
