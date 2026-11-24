from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Action4(str, Enum):
    REACT = "REACT"
    UNREACT = "UNREACT"

    __str__ = str.__str__


Action4OrStr: TypeAlias = Annotated[Action4 | str, open_enum_validator(Action4)]
