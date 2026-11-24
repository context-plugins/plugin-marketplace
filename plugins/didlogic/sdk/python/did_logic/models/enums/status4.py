from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status4(str, Enum):
    """Check status"""

    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


Status4OrStr: TypeAlias = Annotated[Status4 | str, open_enum_validator(Status4)]
