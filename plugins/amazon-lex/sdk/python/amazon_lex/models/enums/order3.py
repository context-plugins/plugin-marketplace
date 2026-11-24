from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Order3(str, Enum):
    """Specifies whether to sort the results in ascending or descending order of the summary statistic (value in the
    response)."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


Order3OrStr: TypeAlias = Annotated[Order3 | str, open_enum_validator(Order3)]
