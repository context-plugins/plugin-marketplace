from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    CREATED = "created"
    INITIATED = "initiated"
    PROCESSED = "processed"
    REVERSED = "reversed"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]
