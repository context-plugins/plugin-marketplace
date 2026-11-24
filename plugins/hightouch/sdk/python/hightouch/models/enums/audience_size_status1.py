from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AudienceSizeStatus1(str, Enum):
    """"pending": The job is running "success": The job is finished "failed": The job could not be completed
    "cancelled": The job was cancelled before it finished"""

    PENDING = "pending"
    SUCCESS = "success"
    FAILED = "failed"
    CANCELLED = "cancelled"

    __str__ = str.__str__


AudienceSizeStatus1OrStr: TypeAlias = Annotated[AudienceSizeStatus1 | str, open_enum_validator(AudienceSizeStatus1)]
