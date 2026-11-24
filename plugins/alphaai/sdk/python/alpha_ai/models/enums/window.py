from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Window(str, Enum):
    _4H = "4h"
    _24H = "24h"

    __str__ = str.__str__


WindowOrStr: TypeAlias = Annotated[Window | str, open_enum_validator(Window)]
