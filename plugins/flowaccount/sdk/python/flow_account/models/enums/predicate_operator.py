from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PredicateOperator(int, Enum):
    """0 = Or 1 = And"""

    VALUE_0 = 0
    VALUE_1 = 1

    __str__ = str.__str__


PredicateOperatorOrInt: TypeAlias = Annotated[PredicateOperator | int, open_enum_validator(PredicateOperator)]
