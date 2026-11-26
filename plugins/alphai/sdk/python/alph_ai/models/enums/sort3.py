from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sort3(str, Enum):
    RECENT = "recent"
    BUYERS = "buyers"
    VALUE = "value"

    __str__ = str.__str__


Sort3OrStr: TypeAlias = Annotated[Sort3 | str, open_enum_validator(Sort3)]
