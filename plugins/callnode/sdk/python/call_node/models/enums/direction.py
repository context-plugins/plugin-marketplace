from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Direction(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

    __str__ = str.__str__


DirectionOrStr: TypeAlias = Annotated[Direction | str, open_enum_validator(Direction)]
