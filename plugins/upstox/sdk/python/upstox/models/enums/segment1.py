from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Segment1(str, Enum):
    SEC = "SEC"
    COM = "COM"

    __str__ = str.__str__


Segment1OrStr: TypeAlias = Annotated[Segment1 | str, open_enum_validator(Segment1)]
