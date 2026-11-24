from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Missed(str, Enum):
    _0 = "0"
    _1 = "1"

    __str__ = str.__str__


MissedOrStr: TypeAlias = Annotated[Missed | str, open_enum_validator(Missed)]
