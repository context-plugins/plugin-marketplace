from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status39(str, Enum):
    SYNCED = "SYNCED"
    SYNC_FAILED = "SYNC_FAILED"
    UNSUPPORTED = "UNSUPPORTED"

    __str__ = str.__str__


Status39OrStr: TypeAlias = Annotated[Status39 | str, open_enum_validator(Status39)]
