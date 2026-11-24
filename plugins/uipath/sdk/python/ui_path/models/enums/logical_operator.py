from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogicalOperator(str, Enum):
    """Logical operator combining the conditions in this group"""

    AND = "AND"
    OR = "OR"

    __str__ = str.__str__


LogicalOperatorOrStr: TypeAlias = Annotated[LogicalOperator | str, open_enum_validator(LogicalOperator)]
