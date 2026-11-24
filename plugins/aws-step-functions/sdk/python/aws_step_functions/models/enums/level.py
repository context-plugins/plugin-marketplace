from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Level(str, Enum):
    """Defines which category of execution history events are logged."""

    ALL = "ALL"
    ERROR = "ERROR"
    FATAL = "FATAL"
    OFF = "OFF"

    __str__ = str.__str__


LevelOrStr: TypeAlias = Annotated[Level | str, open_enum_validator(Level)]
