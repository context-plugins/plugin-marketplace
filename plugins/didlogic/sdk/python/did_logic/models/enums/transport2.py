from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Transport2(int, Enum):
    """Transport type"""

    VALUE_1 = 1
    VALUE_4 = 4
    VALUE_5 = 5
    VALUE_10 = 10
    VALUE_12 = 12

    __str__ = str.__str__


Transport2OrInt: TypeAlias = Annotated[Transport2 | int, open_enum_validator(Transport2)]
