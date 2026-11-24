from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode1(str, Enum):
    """Forecast granularity mode."""

    TOTALS = "totals"
    GROUPING = "grouping"

    __str__ = str.__str__


Mode1OrStr: TypeAlias = Annotated[Mode1 | str, open_enum_validator(Mode1)]
