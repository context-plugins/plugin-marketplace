from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    ACTIVE = "ACTIVE"
    STOPPED = "STOPPED"
    FAILING = "FAILING"
    ARCHIVED = "ARCHIVED"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]
