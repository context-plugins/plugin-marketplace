from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Held(str, Enum):
    _1 = "1"
    TRUE = "true"

    __str__ = str.__str__


HeldOrStr: TypeAlias = Annotated[Held | str, open_enum_validator(Held)]
