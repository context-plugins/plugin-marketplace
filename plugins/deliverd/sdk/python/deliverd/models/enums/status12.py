from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status12(str, Enum):
    """Defaults to open — the threads still needing action"""

    OPEN = "open"
    RESOLVED = "resolved"
    ALL = "all"

    __str__ = str.__str__


Status12OrStr: TypeAlias = Annotated[Status12 | str, open_enum_validator(Status12)]
