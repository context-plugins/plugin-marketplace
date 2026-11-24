from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogType(str, Enum):
    """The log type that this config enables."""

    LOG_TYPE_UNSPECIFIED = "LOG_TYPE_UNSPECIFIED"
    ADMIN_READ = "ADMIN_READ"
    DATA_WRITE = "DATA_WRITE"
    DATA_READ = "DATA_READ"

    __str__ = str.__str__


LogTypeOrStr: TypeAlias = Annotated[LogType | str, open_enum_validator(LogType)]
