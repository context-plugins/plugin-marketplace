from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status59(str, Enum):
    DRAFT = "DRAFT"
    SYNCED = "SYNCED"
    SYNC_FAILED = "SYNC_FAILED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


Status59OrStr: TypeAlias = Annotated[Status59 | str, open_enum_validator(Status59)]
