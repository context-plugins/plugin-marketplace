from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogType(str, Enum):
    """The type of logging that is enabled."""

    AUDIO = "AUDIO"
    TEXT = "TEXT"

    __str__ = str.__str__


LogTypeOrStr: TypeAlias = Annotated[LogType | str, open_enum_validator(LogType)]
