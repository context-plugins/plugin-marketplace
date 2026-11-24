from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator1(str, Enum):
    """Comparison operator for period-over-period deltas: ``gt`` (Greater Than), ``gte`` (Greater Than or Equals),
    ``lt`` (Less Than), ``lte`` (Less Than or Equals), ``b`` (Between), ``nb`` (Not Between)."""

    GT = "gt"
    GTE = "gte"
    LT = "lt"
    LTE = "lte"
    B = "b"
    NB = "nb"

    __str__ = str.__str__


Operator1OrStr: TypeAlias = Annotated[Operator1 | str, open_enum_validator(Operator1)]
