from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Unit2(str, Enum):
    """Semantic unit of the column values."""

    CURRENCY = "currency"
    NUMBER = "number"
    PERCENT = "percent"

    __str__ = str.__str__


Unit2OrStr: TypeAlias = Annotated[Unit2 | str, open_enum_validator(Unit2)]
