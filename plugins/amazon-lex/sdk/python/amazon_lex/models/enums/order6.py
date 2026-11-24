from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Order6(str, Enum):
    """Specifies whether to sort the bot locales in ascending or descending order."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


Order6OrStr: TypeAlias = Annotated[Order6 | str, open_enum_validator(Order6)]
