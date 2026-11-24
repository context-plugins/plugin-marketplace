from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BulkStatus(str, Enum):
    COMPLETED = "COMPLETED"
    INSUFFICIENT_CREDITS = "INSUFFICIENT_CREDITS"
    INTERNAL_ERROR = "INTERNAL_ERROR"

    __str__ = str.__str__


BulkStatusOrStr: TypeAlias = Annotated[BulkStatus | str, open_enum_validator(BulkStatus)]
