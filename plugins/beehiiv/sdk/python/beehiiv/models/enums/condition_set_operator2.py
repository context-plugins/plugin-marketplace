from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConditionSetOperator2(str, Enum):
    """Instructs how to combine multiple condition sets. Defaults to "or" (subscriber can match any condition). Use
    "and" to show the block if the subscriber meets all conditions."""

    AND = "and"
    OR = "or"

    __str__ = str.__str__


ConditionSetOperator2OrStr: TypeAlias = Annotated[
    ConditionSetOperator2 | str, open_enum_validator(ConditionSetOperator2)
]
