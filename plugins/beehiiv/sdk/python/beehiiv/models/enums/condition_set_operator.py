from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConditionSetOperator(str, Enum):
    """How multiple condition sets are combined when evaluating dynamic content targeting."""

    AND = "and"
    OR = "or"

    __str__ = str.__str__


ConditionSetOperatorOrStr: TypeAlias = Annotated[ConditionSetOperator | str, open_enum_validator(ConditionSetOperator)]
