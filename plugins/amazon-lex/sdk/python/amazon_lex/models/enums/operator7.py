from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator7(str, Enum):
    """The operator to use for the filter. Specify EQ when the ListBotLocales operation should return only aliases that
    equal the specified value. Specify CO when the ListBotLocales operation should return aliases that contain the
    specified value."""

    CO = "CO"
    EQ = "EQ"

    __str__ = str.__str__


Operator7OrStr: TypeAlias = Annotated[Operator7 | str, open_enum_validator(Operator7)]
