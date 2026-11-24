from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator9(str, Enum):
    """The operator to use for the filter. Specify EQ when the ListSlotTypes operation should return only aliases that
    equal the specified value. Specify CO when the ListSlotTypes operation should return aliases that contain the
    specified value."""

    CO = "CO"
    EQ = "EQ"

    __str__ = str.__str__


Operator9OrStr: TypeAlias = Annotated[Operator9 | str, open_enum_validator(Operator9)]
