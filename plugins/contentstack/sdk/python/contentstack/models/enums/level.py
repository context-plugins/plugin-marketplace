from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Level(str, Enum):
    """Log level."""

    INFO = "info"
    WARN = "warn"
    ERROR = "error"
    DEBUG = "debug"

    __str__ = str.__str__


LevelOrStr: TypeAlias = Annotated[Level | str, open_enum_validator(Level)]
