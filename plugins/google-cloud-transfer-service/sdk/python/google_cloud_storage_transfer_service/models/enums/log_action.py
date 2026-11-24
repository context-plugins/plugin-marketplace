from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogAction(str, Enum):
    LOGGABLE_ACTION_UNSPECIFIED = "LOGGABLE_ACTION_UNSPECIFIED"
    FIND = "FIND"
    DELETE = "DELETE"
    COPY = "COPY"

    __str__ = str.__str__


LogActionOrStr: TypeAlias = Annotated[LogAction | str, open_enum_validator(LogAction)]
