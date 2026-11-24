from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Angle(str, Enum):
    FRONT = "front"
    SIDE = "side"
    BACK = "back"

    __str__ = str.__str__


AngleOrStr: TypeAlias = Annotated[Angle | str, open_enum_validator(Angle)]
