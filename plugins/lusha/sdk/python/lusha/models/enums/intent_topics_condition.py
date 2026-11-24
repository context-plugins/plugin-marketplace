from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IntentTopicsCondition(str, Enum):
    OR = "or"
    AND = "and"

    __str__ = str.__str__


IntentTopicsConditionOrStr: TypeAlias = Annotated[
    IntentTopicsCondition | str, open_enum_validator(IntentTopicsCondition)
]
