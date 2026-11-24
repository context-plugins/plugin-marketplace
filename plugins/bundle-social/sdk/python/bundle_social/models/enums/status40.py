from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status40(str, Enum):
    PENDING = "PENDING"
    SENT = "SENT"
    DELIVERED = "DELIVERED"
    SEEN = "SEEN"
    FAILED = "FAILED"

    __str__ = str.__str__


Status40OrStr: TypeAlias = Annotated[Status40 | str, open_enum_validator(Status40)]
