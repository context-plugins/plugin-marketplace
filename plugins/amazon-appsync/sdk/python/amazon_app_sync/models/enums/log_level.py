from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogLevel(str, Enum):
    """The type of information to log for the Event API."""

    NONE = "NONE"
    ERROR = "ERROR"
    ALL = "ALL"
    INFO = "INFO"
    DEBUG = "DEBUG"

    __str__ = str.__str__


LogLevelOrStr: TypeAlias = Annotated[LogLevel | str, open_enum_validator(LogLevel)]
