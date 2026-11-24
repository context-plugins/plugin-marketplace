from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DriverLogLevels(str, Enum):
    LEVEL_UNSPECIFIED = "LEVEL_UNSPECIFIED"
    ALL = "ALL"
    TRACE = "TRACE"
    DEBUG = "DEBUG"
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"
    FATAL = "FATAL"
    OFF = "OFF"

    __str__ = str.__str__


DriverLogLevelsOrStr: TypeAlias = Annotated[DriverLogLevels | str, open_enum_validator(DriverLogLevels)]
