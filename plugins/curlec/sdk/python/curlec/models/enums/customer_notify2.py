from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomerNotify2(int, Enum):
    VALUE_0 = 0
    VALUE_1 = 1

    __str__ = str.__str__


CustomerNotify2OrInt: TypeAlias = Annotated[CustomerNotify2 | int, open_enum_validator(CustomerNotify2)]
