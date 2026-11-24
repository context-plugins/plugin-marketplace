from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator6(str, Enum):
    """The operator to use for the filter. Specify EQ when the ListBots operation should return only aliases that equal
    the specified value. Specify CO when the ListBots operation should return aliases that contain the specified
    value."""

    CO = "CO"
    EQ = "EQ"
    NE = "NE"

    __str__ = str.__str__


Operator6OrStr: TypeAlias = Annotated[Operator6 | str, open_enum_validator(Operator6)]
