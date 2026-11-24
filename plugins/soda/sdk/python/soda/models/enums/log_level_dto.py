from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogLevelDto(str, Enum):
    DEBUG = "debug"
    INFO = "info"
    WARNING = "warning"
    ERROR = "error"

    __str__ = str.__str__


LogLevelDtoOrStr: TypeAlias = Annotated[LogLevelDto | str, open_enum_validator(LogLevelDto)]
