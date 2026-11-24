from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Seat(str, Enum):
    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


SeatOrStr: TypeAlias = Annotated[Seat | str, open_enum_validator(Seat)]
