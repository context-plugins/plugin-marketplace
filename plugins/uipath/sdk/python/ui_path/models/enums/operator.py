from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator(str, Enum):
    """Comparison operator for the filter condition"""

    EQUALS = "equals"
    NOT_EQUALS = "notEquals"
    LESS_THAN = "lessThan"
    LESS_THAN_OR_EQUALS = "lessThanOrEquals"
    GREATER_THAN = "greaterThan"
    GREATER_THAN_OR_EQUALS = "greaterThanOrEquals"
    CONTAINS = "contains"
    STARTS_WITH = "startsWith"
    ENDS_WITH = "endsWith"
    IS_NULL = "isNull"
    IS_NOT_NULL = "isNotNull"

    __str__ = str.__str__


OperatorOrStr: TypeAlias = Annotated[Operator | str, open_enum_validator(Operator)]
