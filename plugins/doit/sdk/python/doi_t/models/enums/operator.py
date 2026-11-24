from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator(str, Enum):
    """Comparison operator for filtering metric values: ``gt`` (Greater Than), ``lt`` (Less Than), ``lte`` (Less Than or
    Equals), ``gte`` (Greater Than or Equals), ``b`` (Between), ``nb`` (Not Between), ``e`` (Equals), ``ne`` (Not
    Equals)."""

    GT = "gt"
    LT = "lt"
    LTE = "lte"
    GTE = "gte"
    B = "b"
    NB = "nb"
    E = "e"
    NE = "ne"

    __str__ = str.__str__


OperatorOrStr: TypeAlias = Annotated[Operator | str, open_enum_validator(Operator)]
