from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Optimize3(str, Enum):
    INCREASE = "increase"
    DECREASE = "decrease"

    __str__ = str.__str__


Optimize3OrStr: TypeAlias = Annotated[Optimize3 | str, open_enum_validator(Optimize3)]
