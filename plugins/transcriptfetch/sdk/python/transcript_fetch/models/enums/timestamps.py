from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Timestamps(str, Enum):
    NONE = "none"
    SEGMENT = "segment"

    __str__ = str.__str__


TimestampsOrStr: TypeAlias = Annotated[Timestamps | str, open_enum_validator(Timestamps)]
