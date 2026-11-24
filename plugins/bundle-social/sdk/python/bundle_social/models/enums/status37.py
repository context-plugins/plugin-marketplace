from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status37(str, Enum):
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    SKIPPED = "SKIPPED"

    __str__ = str.__str__


Status37OrStr: TypeAlias = Annotated[Status37 | str, open_enum_validator(Status37)]
