from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ComparisonOperator(str, Enum):
    """The comparison operator to use."""

    CONTAINS = "CONTAINS"
    EQUALS = "EQUALS"

    __str__ = str.__str__


ComparisonOperatorOrStr: TypeAlias = Annotated[ComparisonOperator | str, open_enum_validator(ComparisonOperator)]
