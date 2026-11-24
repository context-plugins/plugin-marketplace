from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operation(str, Enum):
    """The operation that is applied to the provided attribute. Operations include: ADD - adds Value to all rows of
    AttributeName. SUBTRACT - subtracts Value from all rows of AttributeName. MULTIPLY - multiplies all rows of
    AttributeName by Value. DIVIDE - divides all rows of AttributeName by Value."""

    ADD = "ADD"
    SUBTRACT = "SUBTRACT"
    MULTIPLY = "MULTIPLY"
    DIVIDE = "DIVIDE"

    __str__ = str.__str__


OperationOrStr: TypeAlias = Annotated[Operation | str, open_enum_validator(Operation)]
