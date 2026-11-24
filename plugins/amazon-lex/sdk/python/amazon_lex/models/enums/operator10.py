from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator10(str, Enum):
    """The operator to use for the filter. Specify EQ when the ListSlots operation should return only aliases that equal
    the specified value. Specify CO when the ListSlots operation should return aliases that contain the specified
    value."""

    CO = "CO"
    EQ = "EQ"

    __str__ = str.__str__


Operator10OrStr: TypeAlias = Annotated[Operator10 | str, open_enum_validator(Operator10)]
