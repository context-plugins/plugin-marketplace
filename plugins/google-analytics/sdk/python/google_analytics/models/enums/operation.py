from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operation(str, Enum):
    """The operation type for this filter."""

    OPERATION_UNSPECIFIED = "OPERATION_UNSPECIFIED"
    EQUAL = "EQUAL"
    LESS_THAN = "LESS_THAN"
    LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL"
    GREATER_THAN = "GREATER_THAN"
    GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL"

    __str__ = str.__str__


OperationOrStr: TypeAlias = Annotated[Operation | str, open_enum_validator(Operation)]
