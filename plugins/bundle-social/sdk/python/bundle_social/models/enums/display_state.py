from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DisplayState(str, Enum):
    ACTIVE = "active"
    THREAD_DELETED = "thread_deleted"
    PLATFORM_MISSING = "platform_missing"

    __str__ = str.__str__


DisplayStateOrStr: TypeAlias = Annotated[DisplayState | str, open_enum_validator(DisplayState)]
