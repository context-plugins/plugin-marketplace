from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Schedule1(str, Enum):
    CURRENT_VERSION = "Current version"
    NEXT_MINOR_VERSION = "Next minor version"
    NEXT_MAJOR_VERSION = "Next major version"

    __str__ = str.__str__


Schedule1OrStr: TypeAlias = Annotated[Schedule1 | str, open_enum_validator(Schedule1)]
