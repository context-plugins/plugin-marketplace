from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator1(str, Enum):
    """Comparison operator."""

    EQUALS = "EQUALS"
    NOT_EQUALS = "NOT_EQUALS"
    LIKE = "LIKE"
    STARTS_WITH = "STARTS_WITH"

    __str__ = str.__str__


Operator1OrStr: TypeAlias = Annotated[Operator1 | str, open_enum_validator(Operator1)]
